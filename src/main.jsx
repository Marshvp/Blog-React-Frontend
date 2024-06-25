import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import AllPosts from './components/AllPosts.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Error</div>,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <div>Error</div>,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <div>Error</div>,
  },
  {
    path:'/posts',
    element: <AllPosts />,
    errorElement: <div>Error</div>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
