export function ProgressBar({ pct, color, height = 'h-1.5' }) {
  return (
    <div className={`w-full bg-gray-100 rounded-full ${height} overflow-hidden`}>
      <div
        className={`${height} rounded-full transition-all duration-500`}
        style={{ width: `${pct}%`, background: color }}
      />
    </div>
  )
}
