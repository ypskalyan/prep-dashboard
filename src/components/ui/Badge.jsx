import { TAG_CONFIG, RESOURCE_TYPE_CONFIG } from '../../data/phases'

export function TagBadge({ tag }) {
  const cfg = TAG_CONFIG[tag]
  if (!cfg) return null
  return (
    <span className={`inline-flex items-center text-xs font-medium px-2 py-0.5 rounded-full border font-mono ${cfg.classes}`}>
      {cfg.label}
    </span>
  )
}

export function ResourceTypeBadge({ type }) {
  const cfg = RESOURCE_TYPE_CONFIG[type]
  if (!cfg) return null
  return (
    <span className={`inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded font-mono tracking-wide ${cfg.classes}`}>
      {cfg.label}
    </span>
  )
}
