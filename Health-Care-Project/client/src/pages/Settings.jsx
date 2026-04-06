import { useState, useEffect } from "react"
import { useAuth } from "../hooks/useAuth"
import { getSettings, updateSettings, logoutUser, deleteAccount } from "../services/profileService"

export default function Settings() {
  const { user } = useAuth()
  const [settings, setSettings] = useState({
    notifications: true,
    anonymousChat: false
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  useEffect(() => {
    async function fetchSettings() {
      const data = await getSettings(user.id)
      setSettings(data)
    }
    fetchSettings()
  }, [user.id])

  const handleToggle = (key) => {
    setSettings({ ...settings, [key]: !settings[key] })
  }

  const handleSave = async () => {
    setLoading(true)
    await updateSettings(user.id, settings)
    setMessage("Settings saved successfully!")
    setLoading(false)
  }

  const handleLogout = async () => {
    await logoutUser()
    window.location.href = "/login"
  }

  const handleDeleteAccount = async () => {
    if (window.confirm("Are you sure you want to delete your account? This cannot be undone.")) {
      await deleteAccount(user.id)
      window.location.href = "/register"
    }
  }

  return (
    <div className="settings-page">
      <h2>Settings</h2>

      {message && <p className="success-message">{message}</p>}

      <div className="settings-options">
        <label>
          <input
            type="checkbox"
            checked={settings.notifications}
            onChange={() => handleToggle("notifications")}
          />
          Enable Notifications
        </label>

        <label>
          <input
            type="checkbox"
            checked={settings.anonymousChat}
            onChange={() => handleToggle("anonymousChat")}
          />
          Anonymous Chat Mode
        </label>

        <button onClick={handleSave} disabled={loading}>
          {loading ? "Saving..." : "Save Settings"}
        </button>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>

        <button className="delete-btn" onClick={handleDeleteAccount}>
          Delete Account
        </button>
      </div>
    </div>
  )
}