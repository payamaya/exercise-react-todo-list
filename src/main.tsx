import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
