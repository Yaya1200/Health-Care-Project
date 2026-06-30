import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import { useChat } from "../context/ChatContext"
import MoodSelector from "../components/MoodSelector"
import UserCard from "../components/UserCard"

export default function Dashboard() {
  const { user } = useAuth()
  const { setActiveChat } = useChat()
  const navigate = useNavigate()

  const suggestedUsers = [
    { id: 1, name: "Alex", field: "Computer Science", mood: "Stressed" },
    { id: 2, name: "Sam", field: "Psychology", mood: "Happy" },
    { id: 3, name: "Maya", field: "Engineering", mood: "Tired" }
  ]

  const quickLinks = [
    { title: "Start a chat", path: "/chat" },
    { title: "Write in your journal", path: "/journal" },
    { title: "Review mood history", path: "/mood-tracker" }
  ]

  const handleStartChat = (targetUser) => {
    setActiveChat({ id: `user-${targetUser?.id || 1}`, name: targetUser?.name || "Student", type: "user" })
    navigate("/chat")
  }

  return (
    <div className="dashboard">

      <h2>Welcome {user?.email}</h2>

      {/* Mood Section */}
      <section className="dashboard-section">
        <MoodSelector />
      </section>

      <div className="dashboard-grid">
        <div className="summary-card">
          <MoodSelector />
        </div>

        <div className="quick-card">
          <div className="section-heading">
            <h3>Quick actions</h3>
          </div>
          <div className="quick-actions">
            {quickLinks.map((item) => (
              <div className="quick-action" key={item.title}>
                <span>{item.title}</span>
                <Link to={item.path}>Open</Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="section-card">
        <div className="section-heading">
          <h3>Suggested students</h3>
        </div>

        {suggestedUsers.map((u) => (
          <UserCard key={u.id} user={u} onStartChat={handleStartChat} />
        ))}
      </section>
    </div>
  )
}
