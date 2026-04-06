import ChatBox from "../components/ChatBox"
import { useChat } from "../context/ChatContext.jsx"

export default function Chat() {

  const { activeChat } = useChat()

  return (
    <div className="chat-page">

      <h2>Student Chat</h2>

      {activeChat ? (
        <ChatBox />
      ) : (
        <p>Select a conversation to start chatting.</p>
      )}

    </div>
  )
}