import { createContext, useContext, useState } from "react"

const ChatContext = createContext()

export const ChatProvider = ({ children }) => {
  const [activeChat, setActiveChat] = useState(null)
  const [chatThreads, setChatThreads] = useState({})

  const sendMessage = (text) => {
    if (!activeChat || !text?.trim()) return

    const newMessage = {
      id: Date.now(),
      user: "You",
      text: text.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setChatThreads((prev) => ({
      ...prev,
      [activeChat.id]: [...(prev[activeChat.id] || []), newMessage],
    }))
  }

  const getMessages = (chatId) => chatThreads[chatId] || []

  return (
    <ChatContext.Provider
      value={{
        activeChat,
        setActiveChat,
        chatThreads,
        sendMessage,
        getMessages,
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}

export const useChat = () => {
  return useContext(ChatContext)
}
