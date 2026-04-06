import ChatBox from "../components/ChatBox"
import { useChat } from "../context/ChatContext.jsx"

export default function ChatRoom() {

  const { setActiveChat } = useChat()

  // Predefined rooms (later can come from Supabase)
  const rooms = [
    { id: "stress-relief", name: "Stress Relief" },
    { id: "exam-anxiety", name: "Exam Anxiety" },
    { id: "general-talk", name: "General Talk" },
    { id: "wellness-tips", name: "Wellness Tips" },
  ]

  const handleJoinRoom = (room) => {
    setActiveChat(room)
  }

  return (
    <div className="chatrooms-page">

      <h2>Available Chat Rooms</h2>

      <div className="room-list">
        {rooms.map((room) => (
          <div 
            key={room.id} 
            className="room-card" 
            onClick={() => handleJoinRoom(room)}
          >
            {room.name}
          </div>
        ))}
      </div>

    </div>
  )
}