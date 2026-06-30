import { supabase } from "./supabaseClient"

const MOOD_STORAGE_KEY = "healthcare_mood_entries"

const readLocalMoods = (userId) => {
  if (typeof window === "undefined") return []

  try {
    const raw = window.localStorage.getItem(`${MOOD_STORAGE_KEY}_${userId || "guest"}`)
    if (!raw) return []

    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

const writeLocalMoods = (userId, moods) => {
  if (typeof window === "undefined") return

  try {
    window.localStorage.setItem(`${MOOD_STORAGE_KEY}_${userId || "guest"}`, JSON.stringify(moods))
  } catch {
    // Ignore storage errors
  }
}

// Save mood
export const saveMood = async (userId, mood) => {
  const resolvedUserId = userId || (await supabase.auth.getUser()).data?.user?.id
  const normalizedMood = mood?.trim()

  if (!normalizedMood) {
    return null
  }

  const { data, error } = await supabase
    .from("moods")
    .insert([{ user_id: resolvedUserId, mood: normalizedMood }])
    .select()
    .single()

  if (error) {
    console.error("Error saving mood:", error)
    return null
  }

  return data
}

// Get mood history
export const getMoodHistory = async (userId) => {
  const resolvedUserId = userId || (await supabase.auth.getUser()).data?.user?.id

  if (!resolvedUserId) {
    return readLocalMoods(userId)
  }

  const { data, error } = await supabase
    .from("moods")
    .select("*")
    .eq("user_id", resolvedUserId)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching mood history:", error)
    return readLocalMoods(resolvedUserId)
  }

  const moods = data || []
  writeLocalMoods(resolvedUserId, moods)
  return moods
}

export const logMood = async (userId, mood) => {
  const resolvedUserId = userId || (await supabase.auth.getUser()).data?.user?.id
  const normalizedMood = mood?.trim()

  if (!normalizedMood) {
    return null
  }

  const localEntry = {
    id: `local-${Date.now()}`,
    user_id: resolvedUserId || "guest",
    mood: normalizedMood,
    created_at: new Date().toISOString(),
  }

  const localMoods = [localEntry, ...readLocalMoods(resolvedUserId || "guest")]
  writeLocalMoods(resolvedUserId || "guest", localMoods)

  if (!resolvedUserId) {
    return localEntry
  }

  try {
    const savedMood = await saveMood(resolvedUserId, normalizedMood)
    if (savedMood) {
      const nextEntries = [savedMood, ...localMoods.filter((entry) => entry.id !== localEntry.id)]
      writeLocalMoods(resolvedUserId, nextEntries)
      return savedMood
    }
  } catch (err) {
    console.error("Error logging mood:", err)
  }

  return localEntry
}
