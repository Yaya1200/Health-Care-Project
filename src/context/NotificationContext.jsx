import { createContext, useContext, useState } from "react"

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {

  const [notifications, setNotifications] = useState([])

  // Add a new notification
  const addNotification = (notification) => {
    setNotifications((prev) => [
      { id: Date.now(), isRead: false, ...notification },
      ...prev
    ])
  }

  // Mark notification as read
  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, isRead: true } : n
      )
    )
  }

  // Remove notification
  const removeNotification = (id) => {
    setNotifications((prev) =>
      prev.filter((n) => n.id !== id)
    )
  }

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        markAsRead,
        removeNotification
      }}
    >
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotification = () => {
  return useContext(NotificationContext)
}