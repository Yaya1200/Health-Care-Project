// client/src/utils/Validators.js

// Validate email format
export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

// Validate password (min 6 chars)
export function validatePassword(password) {
  return password && password.length >= 6
}

// Validate required field
export function validateRequired(value) {
  return value && value.trim() !== ""
}

// Validate username (alphanumeric, 3-20 chars)
export function validateUsername(username) {
  const re = /^[a-zA-Z0-9]{3,20}$/
  return re.test(username)
}

// Validate text length
export function validateMaxLength(value, max = 200) {
  return value.length <= max
}