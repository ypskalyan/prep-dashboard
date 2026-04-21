export function StatCard({ value, label, sub, color = 'text-gray-900' }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
      <div className={`font-display text-3xl font-bold leading-none ${color}`}>{value}</div>
      <div className="text-sm text-gray-500 font-medium mt-1.5">{label}</div>
      {sub && <div className="text-xs text-gray-400 font-mono mt-0.5">{sub}</div>}
    </div>
  )
}
