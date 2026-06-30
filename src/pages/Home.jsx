import { Link } from "react-router-dom"

const features = [
  {
    title: "Peer Support",
    text: "Connect with students who understand the pressure of campus life and shared routines."
  },
  {
    title: "Real-Time Chat",
    text: "Open a supportive conversation whenever you need a calm, welcoming space."
  },
  {
    title: "Mood Tracking",
    text: "Keep an eye on your emotions and notice the rhythms that affect your days."
  },
  {
    title: "Private Journal",
    text: "Reflect on your thoughts in a personal area made for clarity and calm."
  }
]

export default function Home() {
  return (
    <div className="page-shell home-page">
      <section className="hero-card">
        <div>
          <div className="hero-badge">✨ Student mental wellness, reimagined</div>
          <h1>Support that feels calm, personal, and always close by.</h1>
          <p>
            UniMental helps students build healthier routines through guidance, peer connection,
            mood awareness, and a supportive space to reflect.
          </p>
          <div className="hero-actions">
            <Link to="/login" className="btn-primary">Login</Link>
            <Link to="/register" className="btn-secondary">Create account</Link>
          </div>
        </div>

        <div className="hero-highlight">
          <h3>What students love</h3>
          <p>Gentle check-ins, easy conversations, and meaningful tools for everyday wellbeing.</p>
          <span className="stat-pill">24/7 support feel</span>
          <span className="stat-pill">Private journaling</span>
          <span className="stat-pill">Mood insights</span>
        </div>
      </section>

      <section className="section-card">
        <div className="section-heading">
          <h2>Platform features</h2>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <div className="feature-card" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}