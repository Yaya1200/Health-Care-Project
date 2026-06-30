import { useState, useEffect } from "react"
import { useAuth } from "../hooks/useAuth"
import { getJournalEntries, addJournalEntry, deleteJournalEntry } from "../services/profileService"

export default function Journal() {
  const { user } = useAuth()
  const [entries, setEntries] = useState([])
  const [newEntry, setNewEntry] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchEntries() {
      if (!user?.id) {
        setEntries([])
        return
      }

      const data = await getJournalEntries(user.id)
      setEntries(data || [])
    }

    fetchEntries()
  }, [user?.id])

  const handleAddEntry = async (event) => {
    if (event?.preventDefault) event.preventDefault()
    if (!newEntry.trim() || !user?.id || loading) return

    setLoading(true)
    try {
      const entry = await addJournalEntry(user.id, newEntry.trim())
      if (entry) {
        setEntries((prevEntries) => [entry, ...prevEntries])
      }
      setNewEntry("")
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteEntry = async (id) => {
    await deleteJournalEntry(id)
    setEntries((prevEntries) => prevEntries.filter((entry) => entry.id !== id))
  }

  return (
    <div className="journal-page">
      <h2>My Journal</h2>

      <section className="new-entry-section">
        <textarea
          placeholder="Write your thoughts here..."
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey) {
              handleAddEntry(event)
            }
          }}
        />
        <button onClick={() => handleAddEntry()} disabled={loading || !user?.id}>
          {loading ? "Saving..." : "Add Entry"}
        </button>
      </section>

      <section className="entries-section">
        <h3>Previous Entries</h3>
        {entries.length === 0 ? (
          <p>No entries yet.</p>
        ) : (
          <ul className="entries-list">
            {entries.map((entry) => (
              <li key={entry.id}>
                <div className="entry-content">{entry.content}</div>
                <div className="entry-meta">
                  {new Date(entry.created_at).toLocaleDateString()}
                  <button onClick={() => handleDeleteEntry(entry.id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}