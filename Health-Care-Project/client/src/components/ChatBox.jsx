import { useState } from "react"
import MessageBubble from "./MessageBubble"

export default function ChatBox() {

  const [messages, setMessages] = useState([
    { id:1, user:"Alex", text:"Hello!", time:"10:30" },
    { id:2, user:"You", text:"Hi!", time:"10:31" }
  ])

  const [input, setInput] = useState("")

  const handleSend = () => {

    if(!input.trim()) return

    const newMessage = {
      id: Date.now(),
      user: "You",
      text: input,
      time: "now"
    }

    setMessages([...messages, newMessage])
    setInput("")
  }

  return (

    <div className="chatbox">

      <div className="chat-header">
        <h3>Support Chat</h3>
      </div>

      <div className="chat-messages">

        {messages.map((msg) => (
          <MessageBubble
            key={msg.id}
            message={msg}
            isOwnMessage={msg.user === "You"}
          />
        ))}

      </div>

      <div className="chat-input">

        <input
          type="text"
          placeholder="Type message..."
          value={input}
          onChange={(e)=>setInput(e.target.value)}
        />

        <button onClick={handleSend}>
          Send
        </button>

      </div>

    </div>
  )
}