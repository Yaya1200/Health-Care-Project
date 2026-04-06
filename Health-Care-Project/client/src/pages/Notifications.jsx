import { useNotification } from "../context/NotificationContext"
import { useEffect } from "react"

export default function Notifications() {

  const { notifications, fetchNotifications, markAsRead } = useNotification()

  useEffect(() => {
    fetchNotifications()
  }, [fetchNotifications])

  return (
    <div className="notifications-page">
      <h2>Notifications</h2>

      {notifications.length === 0 ? (
        <p>No notifications yet.</p>
      ) : (
        <ul className="notifications-list">
          {notifications.map((n) => (
            <li key={n.id} className={n.read ? "read" : "unread"}>
              <div className="notification-content">{n.message}</div>
              <div className="notification-actions">
                {!n.read && (
                  <button onClick={() => markAsRead(n.id)}>Mark as Read</button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}