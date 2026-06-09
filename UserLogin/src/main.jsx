import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AppRoutes from './Routes/index.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store/store.js'

  

  

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AppRoutes />
    <App />
  </Provider>
)
