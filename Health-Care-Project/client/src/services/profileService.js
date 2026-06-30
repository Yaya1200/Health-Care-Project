import { supabase } from "./supabaseClient"

const JOURNAL_STORAGE_KEY = "healthcare_journal_entries"

const readLocalEntries = (userId) => {
  if (typeof window === "undefined") return []

  try {
    const raw = window.localStorage.getItem(`${JOURNAL_STORAGE_KEY}_${userId || "guest"}`)
    if (!raw) return []

    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

const writeLocalEntries = (userId, entries) => {
  if (typeof window === "undefined") return

  try {
    window.localStorage.setItem(`${JOURNAL_STORAGE_KEY}_${userId || "guest"}`, JSON.stringify(entries))
  } catch {
    // Ignore storage errors
  }
}

// ----------------- Profile -----------------

// Get profile by user ID
export const getProfile = async (userId) => {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single()

  return { data, error }
}

// Update profile by user ID
export const updateProfile = async (userId, updates) => {
  const { data, error } = await supabase
    .from("profiles")
    .update(updates)
    .eq("id", userId)

  return { data, error }
}

// ----------------- User Settings -----------------

// Get user settings by user ID
export const getSettings = async (userId) => {
  const { data, error } = await supabase
    .from("settings")
    .select("*")
    .eq("user_id", userId)
    .single()

  return { data, error }
}

// Update user settings
export const updateSettings = async (userId, updates) => {
  const { data, error } = await supabase
    .from("settings")
    .update(updates)
    .eq("user_id", userId)

  return { data, error }
}

// Logout user
export const logoutUser = async () => {
  const { error } = await supabase.auth.signOut()
  return { error }
}

// Delete user account
export const deleteAccount = async (userId) => {
  const { error } = await supabase
    .from("profiles")
    .delete()
    .eq("id", userId)
  return { error }
}

// ----------------- Journal -----------------

// Get all journal entries for a user
export const getJournalEntries = async (userId) => {
  const resolvedUserId = userId || (await supabase.auth.getUser()).data?.user?.id

  if (!resolvedUserId) {
    return readLocalEntries(userId)
  }

  const { data, error } = await supabase
    .from("journal")
    .select("*")
    .eq("user_id", resolvedUserId)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching journal entries:", error)
    return readLocalEntries(resolvedUserId)
  }

  const entries = data || []
  writeLocalEntries(resolvedUserId, entries)
  return entries
}

// Add a new journal entry
export const addJournalEntry = async (userId, entry) => {
  const resolvedUserId = userId || (await supabase.auth.getUser()).data?.user?.id
  const content = entry?.trim()

  if (!content) {
    return null
  }

  const localEntry = {
    id: `local-${Date.now()}`,
    user_id: resolvedUserId || "guest",
    content,
    created_at: new Date().toISOString(),
  }

  const localEntries = [localEntry, ...readLocalEntries(resolvedUserId || "guest")]
  writeLocalEntries(resolvedUserId || "guest", localEntries)

  if (!resolvedUserId) {
    return localEntry
  }

  try {
    const { data, error } = await supabase
      .from("journal")
      .insert([{ user_id: resolvedUserId, content }])
      .select()
      .single()

    if (!error && data) {
      const nextEntries = [data, ...localEntries.filter((item) => item.id !== localEntry.id)]
      writeLocalEntries(resolvedUserId, nextEntries)
      return data
    }
  } catch (err) {
    console.error("Error adding journal entry:", err)
  }

  return localEntry
}

// Delete a journal entry by ID
export const deleteJournalEntry = async (entryId) => {
  const storageKey = `${JOURNAL_STORAGE_KEY}_guest`

  const localEntries = Object.keys(window.localStorage || {}).reduce((acc, key) => {
    if (key.startsWith(JOURNAL_STORAGE_KEY)) {
      const entries = JSON.parse(window.localStorage.getItem(key) || "[]")
      acc.push(...entries)
    }
    return acc
  }, [])

  const remainingEntries = localEntries.filter((entry) => entry.id !== entryId)

  Object.keys(window.localStorage || {}).forEach((key) => {
    if (key.startsWith(JOURNAL_STORAGE_KEY)) {
      window.localStorage.setItem(key, JSON.stringify(remainingEntries.filter((entry) => `${JOURNAL_STORAGE_KEY}_${entry.user_id || "guest"}` === key)))
    }
  })

  try {
    const { data, error } = await supabase
      .from("journal")
      .delete()
      .eq("id", entryId)

    if (error) {
      console.error("Error deleting journal entry:", error)
    }

    return data
  } catch (err) {
    console.error("Error deleting journal entry:", err)
    return null
  }
}