import { useState } from "react"

export default function ChatBox() {

  const [messages, setMessages] = useState([
    { id: 1, user: "Alex", text: "Hello!" },
    { id: 2, user: "Sam", text: "Hi there!" }
  ])

  const [input, setInput] = useState("")

  const handleSend = () => {

    if (!input.trim()) return

    const newMessage = {
      id: Date.now(),
      user: "You",
      text: input
    }

    setMessages([...messages, newMessage])
    setInput("")
  }

  return (
    <div className="chatbox">

      {/* Chat Header */}
      <div className="chat-header">
        <h3>Support Chat</h3>
      </div>

      {/* Messages Area */}
      <div className="chat-messages">

        {messages.map((msg) => (
          <div key={msg.id} className="message">
            <strong>{msg.user}:</strong> {msg.text}
          </div>
        ))}

      </div>

      {/* Input Area */}
      <div className="chat-input">

        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={handleSend}>
          Send
        </button>

      </div>

    </div>
  )
}