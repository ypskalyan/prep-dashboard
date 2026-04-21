import { useState } from 'react'
import { PHASES, RESOURCES, RESOURCE_TYPE_CONFIG } from '../data/phases'
import { ResourceTypeBadge } from '../components/ui/Badge'

const TYPE_FILTERS = ['all', 'youtube', 'docs', 'course', 'book', 'site']

export default function Resources() {
  const [phaseFilter, setPhaseFilter] = useState('all')
  const [typeFilter, setTypeFilter] = useState('all')

  const filtered = RESOURCES.filter(r => {
    if (phaseFilter !== 'all' && r.phase !== phaseFilter) return false
    if (typeFilter !== 'all' && r.type !== typeFilter) return false
    return true
  })

  return (
    <div className="p-8 max-w-5xl">
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-gray-900">Resources</h1>
        <p className="text-sm text-gray-400 mt-1">Curated learning materials for every phase · click to open</p>
      </div>

      {/* Phase filter */}
      <div className="flex gap-2 flex-wrap mb-3">
        <button onClick={() => setPhaseFilter('all')}
          className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all
            ${phaseFilter === 'all' ? 'bg-sidebar text-white border-sidebar' : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300'}`}>
          All phases
        </button>
        {PHASES.map(p => (
          <button key={p.id} onClick={() => setPhaseFilter(p.id)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all
              ${phaseFilter === p.id ? 'text-white border-transparent' : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300'}`}
            style={phaseFilter === p.id ? { background: p.color } : {}}>
            {p.label}
          </button>
        ))}
      </div>

      {/* Type filter */}
      <div className="flex gap-2 flex-wrap mb-6">
        {TYPE_FILTERS.map(t => {
          const cfg = RESOURCE_TYPE_CONFIG[t]
          return (
            <button key={t} onClick={() => setTypeFilter(t)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all capitalize
                ${typeFilter === t ? 'bg-accent text-white border-accent' : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300'}`}>
              {t === 'all' ? 'All types' : cfg?.label || t}
            </button>
          )
        })}
      </div>

      {filtered.length === 0 ? (
        <div className="text-sm text-gray-400 py-12 text-center">No resources match this filter.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((r, i) => {
            const phase = PHASES.find(p => p.id === r.phase)
            return (
              <a key={i} href={r.url} target="_blank" rel="noopener noreferrer"
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col gap-2.5 group">
                <div className="flex items-start justify-between gap-2">
                  <ResourceTypeBadge type={r.type} />
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full text-white flex-shrink-0"
                    style={{ background: phase?.color || '#ccc' }}>
                    {r.phaseLabel}
                  </span>
                </div>
                <div className="font-display text-sm font-bold text-gray-900 leading-snug group-hover:text-accent transition-colors">
                  {r.name}
                </div>
                {r.topic && <div className="text-xs font-mono text-gray-400 bg-gray-50 rounded px-2 py-0.5 w-fit">📌 {r.topic}</div>}
                <div className="text-xs text-gray-400 leading-relaxed flex-1">{r.desc}</div>
                <div className="text-xs font-mono text-accent flex items-center gap-1 mt-auto">
                  ↗ Open resource
                </div>
              </a>
            )
          })}
        </div>
      )}
    </div>
  )
}
