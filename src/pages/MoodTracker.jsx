import { useState, useEffect } from "react"
import MoodSelector from "../components/MoodSelector"
import { useAuth } from "../hooks/useAuth"
import { logMood, getMoodHistory } from "../services/moodService"

export default function MoodTracker() {
  const { user } = useAuth()
  const [moods, setMoods] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchMoods() {
      if (!user?.id) {
        setMoods([])
        return
      }

      const history = await getMoodHistory(user.id)
      setMoods(history || [])
    }

    fetchMoods()
  }, [user?.id])

  const handleLogMood = async (mood) => {
    if (!mood || !user?.id || loading) return

    setLoading(true)
    try {
      const loggedMood = await logMood(user.id, mood)
      if (loggedMood) {
        setMoods((prevMoods) => [loggedMood, ...prevMoods])
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mood-tracker-page">
      <h2>Mood Tracker</h2>

      <section className="mood-selector-section">
        <h3>How are you feeling today?</h3>
        <MoodSelector onSelectMood={handleLogMood} loading={loading} />
      </section>

      <section className="mood-history-section">
        <h3>Your Mood History</h3>

        {moods.length === 0 ? (
          <p>No moods logged yet.</p>
        ) : (
          <ul className="mood-history-list">
            {moods.map((entry, index) => (
              <li key={entry.id || index}>
                <strong>{new Date(entry.created_at || entry.date).toLocaleDateString()}:</strong> {entry.mood}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}