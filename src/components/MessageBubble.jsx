export default function MessageBubble({ message, isOwnMessage }) {

  return (
    <div className={`message-row ${isOwnMessage ? "own" : ""}`}>

      <div className="message-bubble">

        {!isOwnMessage && (
          <span className="message-user">
            {message.user}
          </span>
        )}

        <p className="message-text">
          {message.text}
        </p>

        <span className="message-time">
          {message.time || "now"}
        </span>

      </div>

    </div>
  )
}