import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { PHASES } from '../data/phases'
import { StatCard } from '../components/ui/StatCard'
import { ProgressBar } from '../components/ui/ProgressBar'
import { useToast } from '../components/ui/Toast'

const CIRCUM = 150.8

export default function Dashboard({ progress }) {
  const { user } = useAuth()
  const navigate = useNavigate()
  const toast = useToast()
  const { completedCount, overallPct, totalMins, phaseProgress, nextTopic, streak, total, logSession } = progress

  // Pomodoro
  const TOTAL_SECS = 45 * 60
  const [remaining, setRemaining] = useState(TOTAL_SECS)
  const [running, setRunning] = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setRemaining(r => {
          if (r <= 1) {
            clearInterval(intervalRef.current)
            setRunning(false)
            const nt = nextTopic()
            logSession(nt ? nt.topic.title : 'Study session', 45)
            toast('Session complete! 45 minutes logged. 🎉')
            return TOTAL_SECS
          }
          return r - 1
        })
      }, 1000)
    } else {
      clearInterval(intervalRef.current)
    }
    return () => clearInterval(intervalRef.current)
  }, [running])

  const mins = Math.floor(remaining / 60)
  const secs = remaining % 60
  const progress_pct = (TOTAL_SECS - remaining) / TOTAL_SECS
  const dashOffset = CIRCUM * (1 - progress_pct)

  const name = user?.user_metadata?.full_name?.split(' ')[0] || 'Pavan'
  const nt = nextTopic()

  const estimatedFinish = (() => {
    const rem = total - completedCount
    if (rem <= 0) return '🎉 Done!'
    const d = new Date()
    d.setDate(d.getDate() + Math.ceil(rem / 1.9) * 7)
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  })()

  return (
    <div className="p-8 max-w-5xl">
      {/* Hero */}
      <div className="bg-sidebar rounded-2xl p-7 mb-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
        <div className="font-mono text-xs text-gray-500 tracking-widest mb-2">// WELCOME BACK, {name.toUpperCase()}</div>
        <h1 className="font-display text-2xl font-bold text-white mb-1">Full-Stack Engineer Prep <span className="text-accent-muted">2026</span></h1>
        <p className="text-sm text-gray-400 mb-5">20 weeks · 6 phases · 38 topics · ~45 min/day</p>
        <div className="flex items-end gap-6">
          <div className="flex-1">
            <div className="text-xs font-mono text-gray-500 mb-2 tracking-wide">OVERALL PROGRESS</div>
            <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-accent to-accent-muted transition-all duration-700" style={{ width: `${overallPct}%` }} />
            </div>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="font-display text-4xl font-bold text-accent-muted leading-none">{overallPct}%</div>
            <div className="text-xs font-mono text-gray-500 mt-1">{completedCount} / {total} topics</div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <StatCard value={completedCount} label="Topics done" sub={`of ${total} total`} color="text-green-600" />
        <StatCard value={streak} label="Day streak" sub="keep it going 🔥" color="text-amber-500" />
        <StatCard value={totalMins >= 60 ? `${Math.round(totalMins / 60)}h` : `${totalMins}m`} label="Time studied" sub="all sessions" color="text-accent" />
        <StatCard value={estimatedFinish} label="Est. finish" sub={`${Math.ceil((total - completedCount) / 1.9)}w left`} color="text-blue-600" />
      </div>

      {/* Today's focus + Pomodoro */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-base font-bold text-gray-900">📅 Today's Focus</h2>
          <span className="text-xs font-mono text-gray-400">{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
        </div>
        {nt ? (
          <div className="bg-gray-50 rounded-xl p-4 mb-4 border border-gray-100">
            <div className="text-xs font-mono mb-1.5" style={{ color: nt.phase.color }}>{nt.phase.label} · {nt.phase.weeks}</div>
            <div className="font-display text-base font-bold text-gray-900 mb-1.5">{nt.topic.title}</div>
            <div className="text-xs text-gray-400 leading-relaxed">{nt.topic.subs.slice(0, 3).join('  ·  ')}</div>
          </div>
        ) : (
          <div className="bg-green-50 rounded-xl p-4 mb-4 border border-green-100 text-green-700 font-medium text-sm">🎉 All topics complete! Amazing work.</div>
        )}

        {/* Pomodoro */}
        <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-4 border border-gray-100">
          <div className="relative w-14 h-14 flex-shrink-0">
            <svg width="56" height="56" viewBox="0 0 56 56" className="-rotate-90">
              <circle cx="28" cy="28" r="24" fill="none" stroke="#e5e7eb" strokeWidth="4" />
              <circle cx="28" cy="28" r="24" fill="none" stroke="#6C63FF" strokeWidth="4"
                strokeLinecap="round" strokeDasharray={CIRCUM} strokeDashoffset={dashOffset}
                className="transition-all duration-500" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center font-mono text-xs font-medium text-gray-700">
              {String(mins).padStart(2,'0')}:{String(secs).padStart(2,'0')}
            </div>
          </div>
          <div className="flex-1">
            <div className="text-xs font-mono text-gray-400 mb-0.5 tracking-wide">POMODORO TIMER</div>
            <div className="text-sm text-gray-500">{running ? 'Focus session in progress…' : remaining === TOTAL_SECS ? 'Ready — 45 min focus session' : 'Paused'}</div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setRunning(r => !r)}
              className="px-4 py-2 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent/90 transition-colors">
              {running ? '⏸ Pause' : '▶ Start'}
            </button>
            <button onClick={() => { setRunning(false); setRemaining(TOTAL_SECS) }}
              className="px-3 py-2 border border-gray-200 text-gray-400 text-sm rounded-lg hover:bg-gray-100 transition-colors">↺</button>
          </div>
        </div>
      </div>

      {/* Phase overview */}
      <h2 className="font-display text-base font-bold text-gray-900 mb-3">📊 Phase Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {PHASES.map(p => {
          const prog = phaseProgress(p)
          return (
            <div key={p.id} onClick={() => navigate(`/roadmap?phase=${p.id}`)}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition-all relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl" style={{ background: p.color }} />
              <div className="text-xs font-mono text-gray-400 mb-1">{p.label} · {p.weeks}</div>
              <div className="font-display text-sm font-bold text-gray-900 leading-snug mb-3 line-clamp-2">{p.title}</div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs text-gray-400">{prog.done}/{prog.total} topics</span>
                <span className="text-sm font-bold font-mono" style={{ color: p.color }}>{prog.pct}%</span>
              </div>
              <ProgressBar pct={prog.pct} color={p.color} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
