import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './header.jsx'
import Footer from './footer.jsx'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <App />
    <Footer/>
  </StrictMode>,
)
