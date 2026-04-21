import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { PHASES } from '../../data/phases'
import { ProgressBar } from '../ui/ProgressBar'

const NAV = [
  { to: '/',          icon: '⌂', label: 'Dashboard' },
  { to: '/roadmap',   icon: '◈', label: 'Roadmap' },
  { to: '/resources', icon: '◎', label: 'Resources' },
  { to: '/progress',  icon: '◉', label: 'Progress' },
  { to: '/analytics', icon: '▦', label: 'Analytics' },
  { to: '/notes',     icon: '✎', label: 'Notes' },
]

export function Sidebar({ phaseProgress, streak, syncing }) {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  const meta = user?.user_metadata || {}
  const name = meta.full_name || meta.name || 'Pavan Sai'
  const avatar = meta.avatar_url

  return (
    <aside className="fixed top-0 left-0 h-screen w-56 bg-sidebar flex flex-col z-50 border-r border-sidebar-border overflow-y-auto scrollbar-thin">
      {/* Logo */}
      <div className="px-5 pt-6 pb-4 border-b border-sidebar-border flex-shrink-0">
        <div className="font-display text-white text-sm font-bold tracking-wide">Pavan Sai</div>
        <div className="text-xs text-gray-500 font-mono mt-0.5">fullstack-prep-2026</div>
      </div>

      {/* User */}
      <div className="mx-3 mt-3 bg-white/5 rounded-xl p-2.5 flex items-center gap-2.5 flex-shrink-0">
        {avatar
          ? <img src={avatar} className="w-8 h-8 rounded-full object-cover flex-shrink-0" alt="" />
          : <div className="w-8 h-8 rounded-full bg-accent/20 text-accent-muted flex items-center justify-center text-xs font-bold flex-shrink-0">{name.split(' ').map(n => n[0]).slice(0,2).join('')}</div>
        }
        <div className="flex-1 min-w-0">
          <div className="text-white text-xs font-medium truncate">{name.split(' ')[0]}</div>
          <div className="text-gray-500 text-[10px] font-mono truncate">{user?.email}</div>
        </div>
        <button onClick={signOut} className="text-gray-600 hover:text-red-400 text-xs px-1.5 py-1 rounded transition-colors" title="Sign out">↩</button>
      </div>

      {/* Streak */}
      <div className="mx-3 mt-2 bg-accent/10 border border-accent/20 rounded-xl px-3 py-2.5 flex items-center gap-2.5 flex-shrink-0">
        <span className="text-base">🔥</span>
        <div>
          <div className="font-display text-lg font-bold text-accent-muted leading-none">{streak}</div>
          <div className="text-[10px] text-gray-500 mt-0.5">day streak</div>
        </div>
        <div className="ml-auto">
          <div className={`w-2 h-2 rounded-full ${syncing ? 'bg-amber-400 animate-pulse' : 'bg-green-400'}`} title={syncing ? 'Syncing…' : 'Synced'} />
        </div>
      </div>

      {/* Nav */}
      <div className="mt-4 px-2 flex-shrink-0">
        <div className="text-[9px] font-semibold text-gray-600 tracking-widest px-2 mb-1.5 font-mono uppercase">Navigation</div>
        {NAV.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `flex items-center gap-2.5 px-3 py-2 rounded-lg mb-0.5 text-sm font-medium transition-all
              ${isActive
                ? 'bg-accent/15 text-accent-muted border border-accent/20'
                : 'text-gray-400 hover:bg-white/5 hover:text-gray-200 border border-transparent'}`
            }
          >
            <span className="text-sm w-4 text-center flex-shrink-0">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </div>

      {/* Phase mini progress */}
      <div className="mt-4 px-2 pb-6 flex-shrink-0">
        <div className="text-[9px] font-semibold text-gray-600 tracking-widest px-2 mb-2 font-mono uppercase">Phases</div>
        {PHASES.map(p => {
          const prog = phaseProgress(p)
          return (
            <NavLink
              key={p.id}
              to={`/roadmap?phase=${p.id}`}
              className="flex items-center gap-2.5 px-2 py-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            >
              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: p.color }} />
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-semibold text-gray-400 truncate">{p.label}</div>
                <ProgressBar pct={prog.pct} color={p.color} height="h-1" />
              </div>
              <div className="text-[10px] font-mono text-gray-600 flex-shrink-0">{prog.pct}%</div>
            </NavLink>
          )
        })}
      </div>
    </aside>
  )
}
