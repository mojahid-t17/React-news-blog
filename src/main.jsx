import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import AuthProvider from './Provider/AuthProvider.jsx'
import routes from './routes/routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={routes}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
