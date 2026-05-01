import { supabase } from "./supabaseClient"
export const registerUser = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password
  })

  return { data, error }
}

// Login user
export const loginUser = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  return { data, error }
}

// Logout
export const logoutUser = async () => {
  const { error } = await supabase.auth.signOut()
  return { error }
}

// Get current user
export const getCurrentUser = async () => {
  const { data } = await supabase.auth.getUser()
  return data.user
}