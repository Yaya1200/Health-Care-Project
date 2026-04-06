import { useState } from "react"

export default function MoodSelector({ onMoodSelect }) {

  const [selectedMood, setSelectedMood] = useState(null)

  const moods = [
    { emoji: "😊", label: "Happy" },
    { emoji: "😐", label: "Neutral" },
    { emoji: "😔", label: "Sad" },
    { emoji: "😣", label: "Stressed" },
    { emoji: "😴", label: "Tired" }
  ]

  const handleSelect = (mood) => {
    setSelectedMood(mood.label)

    if (onMoodSelect) {
      onMoodSelect(mood.label)
    }
  }

  return (
    <div className="mood-selector">

      <h3>How are you feeling today?</h3>

      <div className="mood-options">

        {moods.map((mood) => (

          <button
            key={mood.label}
            className={`mood-btn ${selectedMood === mood.label ? "active" : ""}`}
            onClick={() => handleSelect(mood)}
          >
            <span className="emoji">{mood.emoji}</span>
            <span>{mood.label}</span>

          </button>

        ))}

      </div>

    </div>
  )
}