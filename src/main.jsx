import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/Home/Home.jsx'
import About from "./components/About/About.jsx"
import Contact from "./components/Contact/Contact.jsx"
import User from './components/User/User.jsx'
import Github, { githubLoader } from './components/Github/Github.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <div className="min-h-screen bg-slate-500 flex items-center justify-center text-white text-2xl">Something went wrong!</div>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/user/:id',
        element: <User />,
      },
      {
        path: '/github',
        element: <Github />,
        loader: githubLoader,
        errorElement: <div className="min-h-screen bg-slate-500 flex items-center justify-center text-white">Failed to load GitHub data</div>,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)