export default function UserCard({ user, onStartChat }) {
  // user object: { name, field, mood, avatar }

  return (
    <div className="user-card">
      
      {/* Avatar */}
      <div className="user-avatar">
        <img
          src={user.avatar || "/default-avatar.png"}
          alt={user.name}
        />
      </div>

      {/* User Info */}
      <div className="user-info">
        <h4>{user.name}</h4>
        <p>{user.field}</p>
        <p className="user-mood">Mood: {user.mood}</p>
      </div>

      {/* Action */}
      <button className="start-chat-btn" onClick={() => onStartChat(user)}>
        Start Chat
      </button>

    </div>
  )
}