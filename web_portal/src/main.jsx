import { createRoot } from 'react-dom/client'
import './assets/css/mainStyle.css'
import { RouterProvider } from 'react-router-dom'
import router from './routers'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
