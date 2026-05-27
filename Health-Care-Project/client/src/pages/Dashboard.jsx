import { useAuth } from "../hooks/useAuth"
import MoodSelector from "../components/MoodSelector"
import UserCard from "../components/UserCard"

export default function Dashboard() {

  const { user } = useAuth()

  const suggestedUsers = [
    { id:1, name:"Alex", field:"Computer Science", mood:"Stressed" },
    { id:2, name:"Sam", field:"Psychology", mood:"Happy" },
    { id:3, name:"Maya", field:"Engineering", mood:"Tired" },
  ]

  const handleStartChat = (user) => {
    console.log("Start chat with:", user)
  }

  return (
    <div className="dashboard">

      <h2>Welcome {user?.email}</h2>

    }
      
      <section className="dashboard-section">
        <MoodSelector />
      </section>

      {/* Suggested Users */}
      <section className="dashboard-section">

        <h3>Suggested Students</h3>

        {suggestedUsers.map((u) => (
          <UserCard
            key={u.id}
            user={u}
            onStartChat={handleStartChat}
          />
        ))}

      </section>

    </div>
  )
}
