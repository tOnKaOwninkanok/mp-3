import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import styled from 'styled-components'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Main from './components/Main'
import Footer from './components/Footer'
import Home from './Pages/Home'
import Education from './Pages/Education'
import Experiences from './Pages/Experiences'
import Projects from './Pages/Projects'
import References from './Pages/References'
import Activities from './Pages/Activities'
import Credits from './Pages/Credits'
import NotFound from './Pages/NotFound'

const ResumeLayout = styled.div`
  width: 70%;
  margin: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    width: 100%;
  }
`

const ContentLayout = styled.div`
  display: flex;
  align-items: stretch;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`

const SkipLink = styled.a`
  position: absolute;
  top: 0;
  left: 10px;
  transform: translateY(-150%);
  padding: 10px;
  background: white;
  z-index: 1;

  &:focus {
    transform: translateY(0);
  }
`

// The layout is rendered once. Only its Outlet changes with the URL.
const router = createBrowserRouter([
  {
    element: (
        <ResumeLayout>
          <SkipLink href="#main-content">Skip to content</SkipLink>
          <Header />
          <ContentLayout>
            <Navigation />
            <Main />
          </ContentLayout>
          <Footer />
        </ResumeLayout>
    ),
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