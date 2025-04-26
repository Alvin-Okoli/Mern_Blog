import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Authentication  from './Routeprotection/Authentication.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authentication>
      <App/>
    </Authentication>
  </StrictMode>
)
