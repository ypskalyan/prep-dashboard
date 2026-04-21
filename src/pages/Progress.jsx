import { PHASES } from '../data/phases'
import { ProgressBar } from '../components/ui/ProgressBar'

export default function Progress({ progress }) {
  const { studyDays, sessions, phaseProgress, completedCount, total, streak } = progress

  // Heatmap — last 20 weeks
  const WEEKS = 20
  const CELLS = WEEKS * 7
  const today = new Date()
  const cells = []
  const monthLabels = []
  let lastMonth = ''

  for (let i = 0; i < CELLS; i++) {
    const d = new Date(today)
    d.setDate(d.getDate() - (CELLS - 1 - i))
    const key = d.toISOString().slice(0, 10)
    const count = studyDays[key] || 0
    cells.push({ key, count, date: d })
    if (i % 7 === 0) {
      const mo = d.toLocaleDateString('en-US', { month: 'short' })
      monthLabels.push(mo !== lastMonth ? mo : '')
      lastMonth = mo
    }
  }

  const intensityClass = (count) => {
    if (count === 0) return 'bg-gray-100'
    if (count === 1) return 'bg-accent/25'
    if (count === 2) return 'bg-accent/50'
    if (count === 3) return 'bg-accent/75'
    return 'bg-accent'
  }

  const tagStats = [
    { tag: 'gap',    label: 'Knowledge gaps',  color: '#F06292' },
    { tag: 'resume', label: 'Resume claims',   color: '#60A5FA' },
    { tag: 'new',    label: 'New / 2026',      color: '#A99FF8' },
    { tag: 'soft',   label: 'Mindset',         color: '#3DD68C' },
  ].map(({ tag, label, color }) => {
    const all  = PHASES.flatMap(p => p.topics.filter(t => t.tag === tag))
    const done = all.filter(t => progress.completed[t.id]).length
    return { label, color, done, total: all.length, pct: Math.round(done / all.length * 100) }
  })

  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-gray-900">Progress</h1>
        <p className="text-sm text-gray-400 mt-1">Study activity, streaks, and completion tracking</p>
      </div>

      {/* Heatmap */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-5">
        <h2 className="font-display text-sm font-bold text-gray-900 mb-4">
          🗓 Study Heatmap <span className="text-xs font-normal text-gray-400 font-sans">— last 20 weeks</span>
        </h2>
        <div className="overflow-x-auto">
          <div className="flex gap-2.5 min-w-max">
            {/* Day labels */}
            <div className="grid gap-0.5 mr-1" style={{ gridTemplateRows: 'repeat(7, 14px)' }}>
              {['Mon','','Wed','','Fri','','Sun'].map((d, i) => (
                <div key={i} className="text-[9px] font-mono text-gray-400 h-3.5 flex items-center">{d}</div>
              ))}
            </div>
            {/* Grid */}
            <div>
              {/* Month labels */}
              <div className="flex gap-0.5 mb-1">
                {monthLabels.map((m, i) => (
                  <div key={i} className="text-[9px] font-mono text-gray-400 w-3.5 text-center">{m}</div>
                ))}
              </div>
              <div className="grid gap-0.5" style={{ gridAutoFlow: 'column', gridTemplateRows: 'repeat(7, 14px)' }}>
                {cells.map((c) => (
                  <div key={c.key} title={`${c.key}: ${c.count} session${c.count !== 1 ? 's' : ''}`}
                    className={`w-3.5 h-3.5 rounded-sm cursor-default hover:scale-125 transition-transform ${intensityClass(c.count)}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 mt-3">
          <span className="text-[10px] text-gray-400">Less</span>
          {[0,1,2,3,4].map(n => (
            <div key={n} className={`w-3 h-3 rounded-sm ${intensityClass(n)}`} />
          ))}
          <span className="text-[10px] text-gray-400">More</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        {/* Phase completion */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-display text-sm font-bold text-gray-900 mb-4">📈 Phase Completion</h2>
          <div className="space-y-4">
            {PHASES.map(p => {
              const prog = phaseProgress(p)
              return (
                <div key={p.id}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs font-semibold text-gray-700">{p.label}: {p.title.split('—')[0].trim()}</span>
                    <span className="text-xs font-mono font-semibold" style={{ color: p.color }}>{prog.done}/{prog.total}</span>
                  </div>
                  <ProgressBar pct={prog.pct} color={p.color} />
                </div>
              )
            })}
          </div>
        </div>

        {/* Recent sessions */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-display text-sm font-bold text-gray-900 mb-4">⏱ Recent Sessions</h2>
          {sessions.length === 0 ? (
            <div className="text-xs text-gray-400 py-4">No sessions yet — start the Pomodoro timer!</div>
          ) : (
            <div className="space-y-2 max-h-72 overflow-y-auto scrollbar-thin">
              {sessions.slice(0, 20).map((s, i) => (
                <div key={i} className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2">
                  <span className="text-xs text-gray-600 truncate flex-1 mr-2">{s.topic}</span>
                  <span className="text-xs font-mono text-accent font-semibold flex-shrink-0">{s.mins}m</span>
                  <span className="text-[10px] font-mono text-gray-400 ml-2 flex-shrink-0">{s.date}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Tag breakdown */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h2 className="font-display text-sm font-bold text-gray-900 mb-4">🏷 Tag Breakdown</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {tagStats.map(t => (
            <div key={t.label} className="bg-gray-50 rounded-xl p-3 border border-gray-100">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold" style={{ color: t.color }}>{t.label}</span>
                <span className="text-xs font-mono font-bold" style={{ color: t.color }}>{t.done}/{t.total}</span>
              </div>
              <ProgressBar pct={t.pct} color={t.color} />
              <div className="text-xs font-mono text-gray-400 mt-1.5">{t.pct}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
