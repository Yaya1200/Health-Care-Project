import { useState } from "react"
import { useChat } from "../context/ChatContext.jsx"
import MessageBubble from "./MessageBubble"

export default function ChatBox() {
  const { activeChat, sendMessage, getMessages } = useChat()
  const [input, setInput] = useState("")

  const messages = activeChat ? getMessages(activeChat.id) : []

  const handleSend = () => {
    if (!input.trim() || !activeChat) return

    sendMessage(input)
    setInput("")
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="chatbox">
      <div className="chat-header">
        <h3>{activeChat?.name || "Support Chat"}</h3>
      </div>

      <div className="chat-messages">
        {messages.length === 0 ? (
          <p>No messages yet. Start the conversation.</p>
        ) : (
          messages.map((msg) => (
            <MessageBubble
              key={msg.id}
              message={msg}
              isOwnMessage={msg.user === "You"}
            />
          ))
        )}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Type message..."
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}