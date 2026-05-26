export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <span className="logo">UniMental</span>
          <span>© {new Date().getFullYear()} All rights reserved</span>
        </div>

        <div className="footer-right">
          <a href="/dashboard">Dashboard</a>
          <a href="/chat">Chat</a>
          <a href="/mood-tracker">Mood Tracker</a>
          <a href="/Community">Community</a>
        </div>
      </div>
    </footer>
  )
}
