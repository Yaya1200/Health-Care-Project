export default function NotificationItem({ notification, onClick }) {

  const { title, message, time, isRead } = notification

  return (
    <div
      className={`notification-item ${isRead ? "read" : "unread"}`}
      onClick={() => onClick && onClick(notification)}
    >
      <div className="notification-content">
        <strong>{title}</strong>
        <p>{message}</p>
      </div>
      <span className="notification-time">{time}</span>
    </div>
  )
}