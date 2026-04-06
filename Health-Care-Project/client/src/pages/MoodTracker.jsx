import { useState, useEffect } from "react"
import MoodSelector from "../components/MoodSelector"
import useMood from "../hooks/useMood"
import { logMood, getMoodHistory } from "../services/moodService"

export default function MoodTracker() {

  const { moods, setMoods } = useMood()
  const [loading, setLoading] = useState(false)

  // Fetch mood history on mount
  useEffect(() => {
    async function fetchMoods() {
      const data = await getMoodHistory()
      setMoods(data)
    }
    fetchMoods()
  }, [setMoods])

  const handleLogMood = async (mood) => {
    setLoading(true)
    await logMood(mood)
    setMoods([...moods, { mood, date: new Date().toLocaleDateString() }])
    setLoading(false)
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
            {moods.map((m, index) => (
              <li key={index}>
                <strong>{m.date}:</strong> {m.mood}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}