import { supabase } from "./supabaseClient"

// Get messages for a chat room
export const getMessages = async (roomId) => {

  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .eq("room_id", roomId)
    .order("created_at", { ascending: true })

  return { data, error }
}

// Send a message
export const sendMessage = async (message) => {

  const { data, error } = await supabase
    .from("messages")
    .insert([message])

  return { data, error }
}

// Subscribe to new messages
export const subscribeToMessages = (roomId, callback) => {

  return supabase
    .channel("messages-channel")
    .on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "messages",
        filter: `room_id=eq.${roomId}`
      },
      (payload) => {
        callback(payload.new)
      }
    )
    .subscribe()
}