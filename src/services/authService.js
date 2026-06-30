import { supabase } from "./supabaseClient";

const normalizeError = (error) => {
  if (!error) return null;

  console.error("Supabase Error:", error);

  return {
    message: error.message || "Unexpected authentication error",
    status: error.status || null,
    code: error.code || null,
  };
};

export const registerUser = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error("Sign Up Error:", error);
    }

    return {
      data,
      error: normalizeError(error),
    };
  } catch (error) {
    console.error("Unexpected Sign Up Error:", error);

    return {
      data: null,
      error: normalizeError(error),
    };
  }
};

export const loginUser = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Login Error:", error);
    }

    return {
      data,
      error: normalizeError(error),
    };
  } catch (error) {
    console.error("Unexpected Login Error:", error);

    return {
      data: null,
      error: normalizeError(error),
    };
  }
};

export const logoutUser = async () => {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Logout Error:", error);
    }

    return {
      error: normalizeError(error),
    };
  } catch (error) {
    console.error("Unexpected Logout Error:", error);

    return {
      error: normalizeError(error),
    };
  }
};

export const getCurrentUser = async () => {
  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error) {
      console.error("Get User Error:", error);
      return null;
    }

    return user;
  } catch (error) {
    console.error("Unexpected Get User Error:", error);
    return null;
  }
};