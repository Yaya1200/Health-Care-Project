import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ChatBox from "../components/ChatBox"
import { useChat } from "../context/ChatContext.jsx"

const rooms = [
  { id: "stress-relief", name: "Stress Relief" },
  { id: "exam-anxiety", name: "Exam Anxiety" },
  { id: "general-talk", name: "General Talk" },
  { id: "wellness-tips", name: "Wellness Tips" },
]

export default function ChatRoom() {
  const navigate = useNavigate()
  const { chatId } = useParams()
  const { activeChat, setActiveChat } = useChat()

  useEffect(() => {
    if (!chatId) return

    const selectedRoom = rooms.find((room) => room.id === chatId)
    if (selectedRoom) {
      setActiveChat(selectedRoom)
    }
  }, [chatId, setActiveChat])

  const handleJoinRoom = (room) => {
    setActiveChat(room)
    navigate(`/chat/${room.id}`)
  }

  if (activeChat?.id === chatId) {
    return <ChatBox />
  }

  return (
    <div className="chatrooms-page">
      <h2>Available Chat Rooms</h2>

      <div className="room-list">
        {rooms.map((room) => (
          <div key={room.id} className="room-card" onClick={() => handleJoinRoom(room)}>
            {room.name}
          </div>
        ))}
      </div>
    </div>
  )
}