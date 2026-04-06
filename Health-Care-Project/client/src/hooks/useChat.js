// src/hooks/useChat.js
import { useState, useEffect } from "react";

export default function useChat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // fetch or subscribe to chat messages here
  }, []);

  return { messages, setMessages };
}