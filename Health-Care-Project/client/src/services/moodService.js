import { supabase } from "./supabaseClient"

// Save mood
export const saveMood = async (userId, mood) => {

  const { data, error } = await supabase
    .from("moods")
    .insert([
      {
        user_id: userId,
        mood: mood
      }
    ])

  return { data, error }
}

// Get mood history
export const getMoodHistory = async (userId) => {

  const { data, error } = await supabase
    .from("moods")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })

  return { data, error }
}
export const  logMood = (mood) => {
  console.log("Mood logged:", mood);
}
