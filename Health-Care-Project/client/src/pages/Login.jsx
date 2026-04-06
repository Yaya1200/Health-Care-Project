import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { loginUser } from "../services/authService"


export default function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    setError(null)

    const { data, error } = await loginUser(email, password)

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    // Redirect to dashboard after login
    navigate("/dashboard")
  }

  return (
    <div className="auth-container">

      <h2>Login</h2>

      <form onSubmit={handleSubmit} className="auth-form">

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="error">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

      </form>

      <p>
        Don't have an account?{" "}
        <Link to="/register">Register</Link>
      </p>

    </div>
  )
}