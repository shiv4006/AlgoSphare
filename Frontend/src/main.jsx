import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { DifficultyProvider, ThemeProvider } from './index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <DifficultyProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DifficultyProvider>
    </ThemeProvider>
  </StrictMode>,
)
