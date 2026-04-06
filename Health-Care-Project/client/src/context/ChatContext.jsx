import { createContext, useContext, useState } from "react"

const ChatContext = createContext()

export const ChatProvider = ({ children }) => {

  const [messages, setMessages] = useState([])
  const [activeChat, setActiveChat] = useState(null)

  const sendMessage = (message) => {
    setMessages((prev) => [...prev, message])
  }

  return (
    <ChatContext.Provider
      value={{
        messages,
        activeChat,
        setActiveChat,
        sendMessage
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}

export const useChat = () => {
  return useContext(ChatContext)
}