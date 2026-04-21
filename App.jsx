import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './hooks/useAuth'
import { useProgress } from './hooks/useProgress'
import { ToastProvider } from './components/ui/Toast'
import { Sidebar } from './components/layout/Sidebar'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Roadmap from './pages/Roadmap'
import Resources from './pages/Resources'
import Progress from './pages/Progress'
import Analytics from './pages/Analytics'
import Notes from './pages/Notes'

function AppShell() {
  const { user, loading } = useAuth()
  const progress = useProgress(user)

  if (loading) {
    return (
      <div className="min-h-screen bg-sidebar flex items-center justify-center flex-col gap-4">
        <div className="w-9 h-9 border-3 border-white/10 border-t-accent rounded-full animate-spin" style={{ borderWidth: '3px' }} />
        <div className="text-xs font-mono text-gray-500">Loading your dashboard…</div>
      </div>
    )
  }

  if (!user) return <Login />

  if (!progress.ready) {
    return (
      <div className="min-h-screen bg-sidebar flex items-center justify-center flex-col gap-4">
        <div className="w-9 h-9 border-3 border-white/10 border-t-accent rounded-full animate-spin" style={{ borderWidth: '3px' }} />
        <div className="text-xs font-mono text-gray-500">Syncing your progress…</div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar phaseProgress={progress.phaseProgress} streak={progress.streak} syncing={progress.syncing} />
      <main className="ml-56 flex-1 min-h-screen">
        <Routes>
          <Route path="/"          element={<Dashboard progress={progress} />} />
          <Route path="/roadmap"   element={<Roadmap progress={progress} />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/progress"  element={<Progress progress={progress} />} />
          <Route path="/analytics" element={<Analytics progress={progress} />} />
          <Route path="/notes"     element={<Notes progress={progress} />} />
          <Route path="*"          element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <AppShell />
      </ToastProvider>
    </AuthProvider>
  )
}
