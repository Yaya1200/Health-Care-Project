import { Link } from "react-router-dom"

export default function Home() {

  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">

        <h1>University Mental Health Support Platform</h1>

        <p>
          A safe space where students can connect, share experiences,
          and support each other through stress, loneliness,
          and academic pressure.
        </p>

        <div className="hero-buttons">
          <Link to="/login" className="btn-primary">
            Login
          </Link>

          <Link to="/register" className="btn-secondary">
            Register
          </Link>
        </div>

      </section>

      {/* Features Section */}
      <section className="features">

        <h2>Platform Features</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <h3>Peer Support</h3>
            <p>
              Connect with other students who understand
              your experiences.
            </p>
          </div>

          <div className="feature-card">
            <h3>Real-Time Chat</h3>
            <p>
              Join conversations or talk privately
              with other students.
            </p>
          </div>

          <div className="feature-card">
            <h3>Mood Tracking</h3>
            <p>
              Track your emotional state and discover
              patterns in how you feel.
            </p>
          </div>

          <div className="feature-card">
            <h3>Private Journal</h3>
            <p>
              Reflect on your thoughts and experiences
              in a secure personal journal.
            </p>
          </div>

        </div>

      </section>

    </div>
  )
}