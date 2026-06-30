import { useState } from "react"

export default function useMood(initialMood = "") {
  const [mood, setMood] = useState(initialMood)
  const [moods, setMoods] = useState([])

  return { mood, setMood, moods, setMoods }
}