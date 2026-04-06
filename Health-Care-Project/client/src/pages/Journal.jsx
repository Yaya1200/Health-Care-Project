import { useState, useEffect } from "react"
import { getJournalEntries, addJournalEntry, deleteJournalEntry } from "../services/profileService"

export default function Journal() {

  const [entries, setEntries] = useState([])
  const [newEntry, setNewEntry] = useState("")
  const [loading, setLoading] = useState(false)

  // Fetch journal entries on mount
  useEffect(() => {
    async function fetchEntries() {
      const data = await getJournalEntries()
      setEntries(data)
    }
    fetchEntries()
  }, [])

  const handleAddEntry = async () => {
    if (!newEntry.trim()) return

    setLoading(true)
    const entry = await addJournalEntry(newEntry)
    setEntries([...entries, entry])
    setNewEntry("")
    setLoading(false)
  }

  const handleDeleteEntry = async (id) => {
    await deleteJournalEntry(id)
    setEntries(entries.filter(e => e.id !== id))
  }

  return (
    <div className="journal-page">
      <h2>My Journal</h2>

      <section className="new-entry-section">
        <textarea
          placeholder="Write your thoughts here..."
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
        />
        <button onClick={handleAddEntry} disabled={loading}>
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