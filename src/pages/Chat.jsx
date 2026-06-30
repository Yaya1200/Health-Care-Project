import { useNavigate } from "react-router-dom"
import ChatBox from "../components/ChatBox"
import { useChat } from "../context/ChatContext.jsx"

const rooms = [
  { id: "stress-relief", name: "Stress Relief" },
  { id: "exam-anxiety", name: "Exam Anxiety" },
  { id: "general-talk", name: "General Talk" },
  { id: "wellness-tips", name: "Wellness Tips" },
]

export default function Chat() {
  const navigate = useNavigate()
  const { activeChat, setActiveChat } = useChat()

  const handleJoinRoom = (room) => {
    setActiveChat(room)
    navigate(`/chat/${room.id}`)
  }

  return (
    <div className="chat-page">
      <h2>Student Chat</h2>

      {activeChat ? (
        <ChatBox />
      ) : (
        <div>
          <p>Select a conversation to start chatting.</p>
          <div className="room-list">
            {rooms.map((room) => (
              <div key={room.id} className="room-card" onClick={() => handleJoinRoom(room)}>
                {room.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}