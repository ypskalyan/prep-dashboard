import { useState } from 'react'
import { PHASES } from '../data/phases'
import { useToast } from '../components/ui/Toast'

const ALL_TOPICS = PHASES.flatMap(p =>
  p.topics.map(t => ({ value: t.title, label: `[${p.label}] ${t.title}` }))
)

export default function Notes({ progress }) {
  const { notes, addNote, deleteNote } = progress
  const toast = useToast()
  const [topic, setTopic] = useState(ALL_TOPICS[0]?.value || '')
  const [text, setText] = useState('')
  const [search, setSearch] = useState('')

  const handleAdd = async () => {
    if (!text.trim()) return
    await addNote(topic, text.trim())
    setText('')
    toast('Note saved! 📝')
  }

  const handleDelete = async (id) => {
    await deleteNote(id)
    toast('Note deleted', 'error')
  }

  const filtered = notes.filter(n =>
    search === '' ||
    n.topic.toLowerCase().includes(search.toLowerCase()) ||
    n.text.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-8 max-w-3xl">
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-gray-900">Notes</h1>
        <p className="text-sm text-gray-400 mt-1">Key insights captured while studying</p>
      </div>

      {/* Add note */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="font-display text-sm font-bold text-gray-900 mb-4">Add a note</h2>
        <div className="space-y-3">
          <select value={topic} onChange={e => setTopic(e.target.value)}
            className="w-full text-sm border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-accent text-gray-700 bg-white">
            {ALL_TOPICS.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
          </select>
          <textarea value={text} onChange={e => setText(e.target.value)} rows={3}
            placeholder="What did you learn? Key insight, analogy, or thing to remember…"
            className="w-full text-sm border border-gray-200 rounded-xl px-3 py-2.5 resize-none focus:outline-none focus:border-accent text-gray-700 placeholder-gray-300" />
          <button onClick={handleAdd}
            className="px-5 py-2 bg-accent text-white text-sm font-semibold rounded-xl hover:bg-accent/90 transition-colors flex items-center gap-2">
            💾 Save note
          </button>
        </div>
      </div>

      {/* Search + list */}
      <div className="flex items-center justify-between mb-4 gap-3">
        <h2 className="font-display text-sm font-bold text-gray-900">
          Your notes <span className="text-xs font-normal text-gray-400 font-sans">({notes.length})</span>
        </h2>
        <input type="text" value={search} onChange={e => setSearch(e.target.value)}
          placeholder="Search notes…"
          className="text-xs border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:border-accent text-gray-600 placeholder-gray-300 w-44" />
      </div>

      {filtered.length === 0 ? (
        <div className="text-sm text-gray-400 text-center py-12">
          {notes.length === 0 ? 'No notes yet. Study a topic and add your key takeaway!' : 'No notes match your search.'}
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map(n => (
            <div key={n.id} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
              <div className="flex items-start justify-between mb-2 gap-2">
                <div>
                  <div className="text-xs font-semibold text-gray-900">{n.topic}</div>
                  <div className="text-[10px] font-mono text-gray-400 mt-0.5">{n.date}</div>
                </div>
                <button onClick={() => handleDelete(n.id)}
                  className="text-xs text-gray-300 hover:text-red-400 hover:bg-red-50 px-2 py-1 rounded-lg transition-colors border border-transparent hover:border-red-100 flex-shrink-0">
                  ✕
                </button>
              </div>
              <div className="text-sm text-gray-600 leading-relaxed">{n.text}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
