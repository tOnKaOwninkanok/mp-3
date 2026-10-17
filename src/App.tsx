import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Main from './components/Main'
import Footer from './components/Footer'
import Home from './pages/Home'
import Education from './pages/Education'
import Experiences from './pages/Experiences'
import Projects from './pages/Projects'
import References from './pages/References'
import Activities from './pages/Activities'
import Credits from './pages/Credits'
import NotFound from './pages/NotFound'

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }

  body {
    margin: 0;
    font-family: 'Baloo 2', cursive;
    background: pink;
    color: grey;
    font-size: calc(16px + 0.5vw);
  }

  button, a { -webkit-tap-highlight-color: transparent; }
  img { max-width: 100%; height: auto; }
  h1, h2, h3, p, li, td { overflow-wrap: anywhere; }
  :focus-visible { outline: 3px solid #9b4667; outline-offset: 4px; }
`

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
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  )
}
