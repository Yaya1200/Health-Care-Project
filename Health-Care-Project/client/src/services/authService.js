import { supabase } from "./supabaseClient"

const normalizeError = (error) => {
  if (!error) return null
  if (typeof error === "string") {
    return { message: error }
  }
  return { message: error.message || "Unexpected auth error" }
}

export const registerUser = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password
    })

    return { data, error: normalizeError(error) }
  } catch (error) {
    return {
      data: null,
      error: normalizeError(error)
    }
  }
}

export const loginUser = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    return { data, error: normalizeError(error) }
  } catch (error) {
    return {
      data: null,
      error: normalizeError(error)
    }
  }
}

export const logoutUser = async () => {
  try {
    const { error } = await supabase.auth.signOut()
    return { error: normalizeError(error) }
  } catch (error) {
    return { error: normalizeError(error) }
  }
}

export const getCurrentUser = async () => {
  try {
    const { data } = await supabase.auth.getUser()
    return data?.user ?? null
  } catch (error) {
    return null
  }
}