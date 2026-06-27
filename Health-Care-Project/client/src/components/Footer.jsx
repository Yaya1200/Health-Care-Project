import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <span className="logo">UniMental</span>
          <span>© {new Date().getFullYear()} All rights reserved</span>
        </div>

        <div className="footer-right">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/chat">Chat</Link>
          <Link to="/mood-tracker">Mood Tracker</Link>
          <Link to="/journal">Journal</Link>
        </div>
      </div>
    </footer>
  )
}