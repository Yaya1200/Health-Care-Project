// client/src/utils/formatData.js

// Format a Date object or ISO string to 'YYYY-MM-DD'
export function formatDate(date) {
  const d = new Date(date)
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, "0")
  const day = String(d.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

// Capitalize the first letter of a string
export function capitalize(str) {
  if (!str) return ""
  return str.charAt(0).toUpperCase() + str.slice(1)
}

// Truncate long text to a max length
export function truncateText(str, maxLength = 100) {
  if (!str) return ""
  return str.length > maxLength ? str.slice(0, maxLength) + "..." : str
}