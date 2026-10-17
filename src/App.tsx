import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Education from './pages/Education'
import Experiences from './pages/Experiences'
import Projects from './pages/Projects'
import References from './pages/References'
import Activities from './pages/Activities'
import Credits from './pages/Credits'
import NotFound from './pages/NotFound'

// The layout is rendered once. Only its Outlet changes with the URL.
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'education', element: <Education /> },
      { path: 'experiences', element: <Experiences /> },
      { path: 'projects', element: <Projects /> },
      { path: 'references', element: <References /> },
      { path: 'activity', element: <Activities /> },
      { path: 'credits', element: <Credits /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}