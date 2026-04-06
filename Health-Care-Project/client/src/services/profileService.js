// src/services/profileService.js
import { supabase } from "./supabaseClient"

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
  const { data, error } = await supabase
    .from("journal")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching journal entries:", error)
    return []
  }

  return data
}

// Add a new journal entry
export const addJournalEntry = async (userId, entry) => {
  const { data, error } = await supabase
    .from("journal")
    .insert([{ user_id: userId, content: entry }])
    .select()
    .single()

  if (error) {
    console.error("Error adding journal entry:", error)
    return null
  }

  return data
}

// Delete a journal entry by ID
export const deleteJournalEntry = async (entryId) => {
  const { data, error } = await supabase
    .from("journal")
    .delete()
    .eq("id", entryId)

  if (error) {
    console.error("Error deleting journal entry:", error)
  }

  return data
}