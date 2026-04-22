import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"  

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import App from './App.jsx'

import { AuthProvider } from './context/AuthContext.jsx'
import { ChatProvider } from './context/ChatContext.jsx'
import { NotificationProvider } from './context/NotificationContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
      <AuthProvider>
        <ChatProvider>
          <NotificationProvider>

            <Navbar />
            <App />
            <Footer />

          </NotificationProvider>
        </ChatProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)