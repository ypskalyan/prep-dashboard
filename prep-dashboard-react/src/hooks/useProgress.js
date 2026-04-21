import { useCallback, useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { PHASES } from '../data/phases'

const TOTAL = PHASES.reduce((a, p) => a + p.topics.length, 0)

export function useProgress(user) {
  const [completed, setCompleted]   = useState({})
  const [notes, setNotes]           = useState([])
  const [sessions, setSessions]     = useState([])
  const [studyDays, setStudyDays]   = useState({})
  const [syncing, setSyncing]       = useState(false)
  const [ready, setReady]           = useState(false)

  const load = useCallback(async () => {
    if (!user) return
    const uid = user.id
    const [prog, notesRes, sessRes, daysRes] = await Promise.all([
      supabase.from('progress').select('*').eq('user_id', uid),
      supabase.from('notes').select('*').eq('user_id', uid).order('created_at', { ascending: false }),
      supabase.from('sessions').select('*').eq('user_id', uid).order('created_at', { ascending: false }).limit(50),
      supabase.from('study_days').select('*').eq('user_id', uid),
    ])
    const c = {}
    ;(prog.data || []).forEach(r => { c[r.topic_id] = r.done })
    setCompleted(c)
    setNotes((notesRes.data || []).map(r => ({ id: r.id, topic: r.topic_title, text: r.content, date: new Date(r.created_at).toLocaleDateString() })))
    setSessions((sessRes.data || []).map(r => ({ topic: r.topic_title, mins: r.minutes, date: new Date(r.created_at).toLocaleDateString() })))
    const sd = {}
    ;(daysRes.data || []).forEach(r => { sd[r.study_date] = (sd[r.study_date] || 0) + 1 })
    setStudyDays(sd)
    setReady(true)
  }, [user])

  useEffect(() => { load() }, [load])

  const markDone = useCallback(async (topicId) => {
    const newVal = !completed[topicId]
    setCompleted(prev => ({ ...prev, [topicId]: newVal }))
    setSyncing(true)
    await supabase.from('progress').upsert({ user_id: user.id, topic_id: topicId, done: newVal, updated_at: new Date().toISOString() }, { onConflict: 'user_id,topic_id' })
    setSyncing(false)
    const today = new Date().toISOString().slice(0, 10)
    setStudyDays(prev => ({ ...prev, [today]: (prev[today] || 0) + 1 }))
    await supabase.from('study_days').upsert({ user_id: user.id, study_date: today, count: (studyDays[today] || 0) + 1 }, { onConflict: 'user_id,study_date' })
  }, [completed, user, studyDays])

  const addNote = useCallback(async (topic, text) => {
    setSyncing(true)
    const { data } = await supabase.from('notes').insert({ user_id: user.id, topic_title: topic, content: text }).select().single()
    setSyncing(false)
    if (data) setNotes(prev => [{ id: data.id, topic, text, date: new Date().toLocaleDateString() }, ...prev])
    return data
  }, [user])

  const deleteNote = useCallback(async (id) => {
    await supabase.from('notes').delete().eq('id', id).eq('user_id', user.id)
    setNotes(prev => prev.filter(n => n.id !== id))
  }, [user])

  const logSession = useCallback(async (topicTitle, mins) => {
    setSessions(prev => [{ topic: topicTitle, mins, date: new Date().toLocaleDateString() }, ...prev])
    await supabase.from('sessions').insert({ user_id: user.id, topic_title: topicTitle, minutes: mins })
    const today = new Date().toISOString().slice(0, 10)
    setStudyDays(prev => ({ ...prev, [today]: (prev[today] || 0) + 1 }))
    await supabase.from('study_days').upsert({ user_id: user.id, study_date: today, count: (studyDays[today] || 0) + 1 }, { onConflict: 'user_id,study_date' })
  }, [user, studyDays])

  const completedCount = Object.values(completed).filter(Boolean).length
  const overallPct = Math.round(completedCount / TOTAL * 100)
  const totalMins = sessions.reduce((a, s) => a + (s.mins || 0), 0)

  const phaseProgress = (phase) => {
    const done = phase.topics.filter(t => completed[t.id]).length
    return { done, total: phase.topics.length, pct: Math.round(done / phase.topics.length * 100) }
  }

  const nextTopic = () => {
    for (const p of PHASES) for (const t of p.topics) if (!completed[t.id]) return { phase: p, topic: t }
    return null
  }

  const streak = (() => {
    const today = new Date(); let s = 0
    for (let i = 0; i < 90; i++) {
      const d = new Date(today); d.setDate(d.getDate() - i)
      if (studyDays[d.toISOString().slice(0, 10)]) s++; else if (i > 0) break
    }
    return s
  })()

  return { completed, notes, sessions, studyDays, syncing, ready, markDone, addNote, deleteNote, logSession, completedCount, overallPct, totalMins, phaseProgress, nextTopic, streak, total: TOTAL }
}
