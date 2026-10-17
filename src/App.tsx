import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './Pages/Home'
import Education from './Pages/Education'
import Experiences from './Pages/Experiences'
import Projects from './Pages/Projects'
import References from './Pages/References'
import Activities from './Pages/Activities'
import Credits from './Pages/Credits'
import NotFound from './Pages/NotFound'

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