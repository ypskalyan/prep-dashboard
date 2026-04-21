import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PHASES } from '../data/phases'
import { TagBadge } from '../components/ui/Badge'
import { ProgressBar } from '../components/ui/ProgressBar'
import { useToast } from '../components/ui/Toast'

const FILTERS = [
  { val: 'all', label: 'All' },
  { val: 'gap', label: 'Knowledge gap' },
  { val: 'resume', label: 'Resume claim' },
  { val: 'new', label: 'New / 2026' },
  { val: 'soft', label: 'Mindset' },
]

function TopicRow({ topic, done, onToggle, onSaveNote }) {
  const [expanded, setExpanded] = useState(false)
  const [noteText, setNoteText] = useState('')
  const toast = useToast()

  const handleSave = async () => {
    if (!noteText.trim()) return
    await onSaveNote(topic.title, noteText.trim())
    setNoteText('')
    toast('Note saved! 📝')
  }

  return (
    <div className={`border-b border-gray-50 last:border-0 transition-colors ${expanded ? 'bg-gray-50/50' : 'hover:bg-gray-50/50'}`}>
      <div className="flex items-start gap-3 p-4 cursor-pointer" onClick={() => setExpanded(e => !e)}>
        <button onClick={e => { e.stopPropagation(); onToggle(topic.id) }}
          className={`mt-0.5 w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all
            ${done ? 'bg-green-500 border-green-500 text-white' : 'border-gray-200 hover:border-green-300'}`}>
          {done && <span className="text-xs font-bold">✓</span>}
        </button>
        <div className="flex-1 min-w-0">
          <div className={`text-sm font-semibold leading-snug ${done ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
            {topic.title}
            <span className={`ml-1.5 text-xs text-gray-300 transition-transform inline-block ${expanded ? 'rotate-90' : ''}`}>▶</span>
          </div>
          {expanded && (
            <div className="mt-2.5">
              <ul className="text-xs text-gray-400 space-y-1 leading-relaxed mb-3">
                {topic.subs.map((s, i) => <li key={i} className="flex gap-1.5"><span className="text-gray-200 flex-shrink-0">·</span>{s}</li>)}
              </ul>
              <div className="flex gap-2">
                <textarea value={noteText} onChange={e => setNoteText(e.target.value)}
                  onClick={e => e.stopPropagation()} onKeyDown={e => e.stopPropagation()}
                  rows={2} placeholder="Add a note about this topic…"
                  className="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-2 resize-none focus:outline-none focus:border-accent text-gray-600 placeholder-gray-300 bg-white" />
                <button onClick={e => { e.stopPropagation(); handleSave() }}
                  className="px-3 py-1.5 bg-green-500 text-white text-xs font-semibold rounded-lg hover:bg-green-600 transition-colors self-end flex-shrink-0">
                  Save
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2 flex-shrink-0 mt-0.5">
          <TagBadge tag={topic.tag} />
          <button onClick={e => { e.stopPropagation(); onToggle(topic.id) }}
            className={`text-xs font-semibold px-2.5 py-1 rounded-lg border transition-all
              ${done ? 'bg-gray-50 text-gray-400 border-gray-100' : 'bg-green-50 text-green-600 border-green-100 hover:bg-green-100'}`}>
            {done ? '✓ Done' : 'Mark done'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Roadmap({ progress }) {
  const [filter, setFilter] = useState('all')
  const [openPhases, setOpenPhases] = useState({})
  const [searchParams] = useSearchParams()
  const { completed, markDone, addNote, phaseProgress } = progress
  const toast = useToast()

  useEffect(() => {
    const phaseId = searchParams.get('phase')
    if (phaseId) setOpenPhases(prev => ({ ...prev, [phaseId]: true }))
  }, [searchParams])

  const toggle = (id) => setOpenPhases(p => ({ ...p, [id]: !p[id] }))

  const handleToggle = async (topicId) => {
    await markDone(topicId)
    if (!completed[topicId]) toast('Topic marked complete! 🎯')
  }

  return (
    <div className="p-8 max-w-4xl">
      <div className="flex items-end justify-between gap-4 mb-6 flex-wrap">
        <div>
          <h1 className="font-display text-2xl font-bold text-gray-900">Roadmap</h1>
          <p className="text-sm text-gray-400 mt-1">Expand topics · mark done · add inline notes</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {FILTERS.map(f => (
            <button key={f.val} onClick={() => setFilter(f.val)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all
                ${filter === f.val ? 'bg-accent text-white border-accent' : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300'}`}>
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {PHASES.map(p => {
          const topics = filter === 'all' ? p.topics : p.topics.filter(t => t.tag === filter)
          if (!topics.length) return null
          const prog = phaseProgress(p)
          const isOpen = openPhases[p.id]

          return (
            <div key={p.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="cursor-pointer" onClick={() => toggle(p.id)}>
                <div className="h-1 w-full" style={{ background: p.color }} />
                <div className="flex items-center gap-4 px-5 py-4">
                  <div className="w-1 h-10 rounded-full flex-shrink-0" style={{ background: p.color }} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xs font-mono text-gray-400">{p.label}</span>
                      <span className="font-display text-sm font-bold text-gray-900 truncate">{p.title}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-gray-400">{p.weeks} · {prog.done}/{prog.total} done</span>
                      <div className="flex-1 max-w-32"><ProgressBar pct={prog.pct} color={p.color} /></div>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="font-display text-xl font-bold" style={{ color: p.color }}>{prog.pct}%</div>
                  </div>
                  <span className={`text-gray-300 text-sm transition-transform ${isOpen ? 'rotate-90' : ''}`}>▶</span>
                </div>
              </div>

              {isOpen && (
                <>
                  <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 text-xs text-gray-400 leading-relaxed">{p.intro}</div>
                  <div>
                    {topics.map(t => (
                      <TopicRow key={t.id} topic={t} done={!!completed[t.id]}
                        onToggle={handleToggle} onSaveNote={addNote} />
                    ))}
                  </div>
                </>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
