import { useState, useEffect } from "react"
import { useAuth } from "../hooks/useAuth"
import { getProfile, updateProfile } from "../services/profileService"

export default function Profile() {
  const { user } = useAuth()
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    field: "",
    interests: "",
    avatar: ""
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  useEffect(() => {
    async function fetchProfile() {
      const data = await getProfile(user.id)
      setProfile(data)
    }
    fetchProfile()
  }, [user.id])
  

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value })
  }

  const handleUpdate = async () => {
    setLoading(true)
    await updateProfile(user.id, profile)
    setMessage("Profile updated successfully!")
    setLoading(false)
  }

  return (
    <div className="profile-page">
      <h2>My Profile</h2>

      {message && <p className="success-message">{message}</p>}

      <div className="profile-form">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          disabled
        />

        <label>Academic Field</label>
        <input
          type="text"
          name="field"
          value={profile.field}
          onChange={handleChange}
        />

        <label>Interests</label>
        <input
          type="text"
          name="interests"
          value={profile.interests}
          onChange={handleChange}
        />

        <label>Avatar URL</label>
        <input
          type="text"
          name="avatar"
          value={profile.avatar}
          onChange={handleChange}
        />

        <button onClick={handleUpdate} disabled={loading}>
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </div>
    </div>
  )
}