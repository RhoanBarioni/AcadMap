import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// CSS
import '../src/style/index.scss'
// PAGES
import Home from './pages/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)