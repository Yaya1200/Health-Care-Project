// Predefined moods
export const moods = [
  { name: "Happy", emoji: "😊", color: "#facc15" },
  { name: "Sad", emoji: "😢", color: "#3b82f6" },
  { name: "Stressed", emoji: "😰", color: "#ef4444" },
  { name: "Tired", emoji: "😴", color: "#6b7280" },
  { name: "Excited", emoji: "🤩", color: "#f97316" },
  { name: "Relaxed", emoji: "😌", color: "#10b981" }
]

// Get emoji by mood name
export function getMoodEmoji(name) {
  const mood = moods.find(m => m.name.toLowerCase() === name.toLowerCase())
  return mood ? mood.emoji : "❓"
}

// Get color by mood name
export function getMoodColor(name) {
  const mood = moods.find(m => m.name.toLowerCase() === name.toLowerCase())
  return mood ? mood.color : "#d1d5db"
}