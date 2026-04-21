import { PHASES } from '../data/phases'
import { ProgressBar } from '../components/ui/ProgressBar'
import { StatCard } from '../components/ui/StatCard'

export default function Analytics({ progress }) {
  const { completed, sessions, studyDays, completedCount, total, totalMins, streak } = progress

  const avgPerDay = Object.keys(studyDays).length > 0
    ? Math.round(totalMins / Object.keys(studyDays).length)
    : 0

  // 28-day calendar
  const today = new Date()
  const last28 = Array.from({ length: 28 }, (_, i) => {
    const d = new Date(today)
    d.setDate(d.getDate() - (27 - i))
    const key = d.toISOString().slice(0, 10)
    const isToday = i === 27
    return { key, day: d.getDate(), studied: !!studyDays[key], isToday }
  })

  // Time by day of week
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const dayTotals = {}
  sessions.forEach(s => {
    const day = new Date(s.date).getDay()
    dayTotals[day] = (dayTotals[day] || 0) + (s.mins || 0)
  })
  const maxMins = Math.max(...Object.values(dayTotals), 1)

  // Phase bar chart
  const phaseData = PHASES.map(p => {
    const done = p.topics.filter(t => completed[t.id]).length
    return { label: p.label, color: p.color, done, total: p.topics.length, pct: Math.round(done / p.topics.length * 100) }
  })

  // Tag completion
  const tagStats = [
    { tag: 'gap',    label: 'Knowledge gaps', color: '#F06292' },
    { tag: 'resume', label: 'Resume claims',  color: '#60A5FA' },
    { tag: 'new',    label: 'New / 2026',     color: '#A99FF8' },
    { tag: 'soft',   label: 'Mindset',        color: '#3DD68C' },
  ].map(({ tag, label, color }) => {
    const all  = PHASES.flatMap(p => p.topics.filter(t => t.tag === tag))
    const done = all.filter(t => completed[t.id]).length
    return { label, color, done, total: all.length, pct: Math.round(done / all.length * 100) }
  })

  return (
    <div className="p-8 max-w-5xl">
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-gray-900">Analytics</h1>
        <p className="text-sm text-gray-400 mt-1">Deep dive into your study patterns</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <StatCard value={`${Math.round(completedCount / total * 100)}%`} label="Overall complete" sub={`${completedCount} of ${total} topics`} color="text-green-600" />
        <StatCard value={streak} label="Current streak" sub="days in a row" color="text-amber-500" />
        <StatCard value={totalMins >= 60 ? `${Math.round(totalMins / 60)}h` : `${totalMins}m`} label="Total study time" sub={`${sessions.length} sessions`} color="text-accent" />
        <StatCard value={`${avgPerDay}m`} label="Avg per study day" sub="minutes" color="text-blue-600" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* 28-day calendar */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-display text-sm font-bold text-gray-900 mb-4">📅 Last 28 Days</h2>
          <div className="grid grid-cols-7 gap-1.5">
            {['S','M','T','W','T','F','S'].map((d, i) => (
              <div key={i} className="text-center text-[9px] font-mono text-gray-400 mb-1">{d}</div>
            ))}
            {last28.map(d => (
              <div key={d.key} title={d.key}
                className={`aspect-square rounded-lg flex items-center justify-center text-xs font-mono border transition-colors
                  ${d.isToday ? 'border-amber-300 text-amber-600 bg-amber-50' :
                    d.studied ? 'bg-accent/15 border-accent/20 text-accent' :
                    'bg-gray-50 border-gray-100 text-gray-300'}`}>
                {d.day}
              </div>
            ))}
          </div>
          <div className="flex gap-3 mt-3 text-[10px] font-mono">
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-accent/15 inline-block"></span> Studied</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-amber-50 border border-amber-300 inline-block"></span> Today</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-gray-100 inline-block"></span> No study</span>
          </div>
        </div>

        {/* Phase bar chart */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-display text-sm font-bold text-gray-900 mb-4">🎯 Topics by Phase</h2>
          <div className="space-y-3">
            {phaseData.map(p => (
              <div key={p.label} className="flex items-center gap-3">
                <div className="text-xs font-mono w-14 flex-shrink-0" style={{ color: p.color }}>{p.label}</div>
                <div className="flex-1 bg-gray-100 rounded-full h-4 overflow-hidden relative">
                  <div className="h-full rounded-full transition-all duration-500" style={{ width: `${p.pct}%`, background: p.color }} />
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[9px] font-mono text-gray-500">{p.done}/{p.total}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Time by day of week */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-display text-sm font-bold text-gray-900 mb-4">⏱ Study Time by Day</h2>
          {sessions.length === 0 ? (
            <div className="text-xs text-gray-400 py-4">No sessions yet — start the Pomodoro timer!</div>
          ) : (
            <div className="space-y-2.5">
              {dayNames.map((name, i) => {
                const mins = dayTotals[i] || 0
                return (
                  <div key={name} className="flex items-center gap-3">
                    <div className="text-xs font-mono text-gray-400 w-8 flex-shrink-0">{name}</div>
                    <div className="flex-1 bg-gray-100 rounded-full h-2.5 overflow-hidden">
                      <div className="h-full bg-accent rounded-full transition-all duration-500" style={{ width: `${Math.round(mins / maxMins * 100)}%` }} />
                    </div>
                    <div className="text-xs font-mono text-gray-400 w-10 text-right flex-shrink-0">{mins}m</div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Completion by tag */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-display text-sm font-bold text-gray-900 mb-4">📊 Completion by Tag</h2>
          <div className="space-y-4">
            {tagStats.map(t => (
              <div key={t.label}>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs font-semibold" style={{ color: t.color }}>{t.label}</span>
                  <span className="text-xs font-mono font-bold" style={{ color: t.color }}>{t.pct}%</span>
                </div>
                <ProgressBar pct={t.pct} color={t.color} height="h-2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
