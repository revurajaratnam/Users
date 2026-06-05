import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AppRoutes from './Routes/index.jsx'

  

  

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <AppRoutes />
    <App />

  </StrictMode>,
)
