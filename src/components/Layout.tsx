import { Link, NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'

const ResumeLayout = styled.div`
  width: 70%;
  margin: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    width: 94%;
  }
`

const ContentLayout = styled.div`
  display: flex;
  align-items: stretch;
  flex: 1;

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

const SiteHeader = styled.header`
  background-color: #fff0f5;
  padding: 0 30px;
  text-align: left;

  @media (max-width: 750px) {
    padding: 0 16px;
    text-align: center;
  }
`

const Navbar = styled.nav`
  background-color: #fff0f5;
  width: 30%;
  flex-shrink: 0;

  @media (max-width: 750px) {
    width: 100%;
  }
`

const NavigationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 750px) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
`

const NavigationItem = styled.li`
  margin: 0 10px 10px;

  @media (max-width: 750px) {
    flex: 1 1 30%;
    min-width: 0;
    margin: 2px;
  }
`

const NavigationLink = styled(NavLink)`
  background-color: #f8d7e3;
  text-align: center;
  padding: 30px 10px;
  display: block;
  color: #666;
  text-decoration: none;
  font-weight: bold;

  &:hover, &[aria-current='page'] {
    background-color: #f1bfd1;
    color: #63374a;
  }

  &[aria-current='page'] {
    box-shadow: inset 4px 0 #9b4667;
  }

  @media (max-width: 750px) {
    padding: 15px 5px;
    font-size: calc(12px + 0.5vw);

    &[aria-current='page'] {
      box-shadow: inset 0 -3px #9b4667;
    }
  }
`

const MainContent = styled.main`
  background-color: white;
  width: 70%;
  min-width: 0;
  min-height: 100vh;
  padding: 30px;

  &:focus {
    outline: none;
  }

  @media (max-width: 1000px) {
    width: 100%;
    flex: 1;
  }

  @media (max-width: 750px) {
    padding: 20px 16px;
  }
`

const SiteFooter = styled.footer`
  background-color: #fff0f5;
  padding: 0 30px;

  @media (max-width: 750px) {
    padding: 0 16px;
  }
`

const links = [
    { to: '/', label: 'Home' },
    { to: '/education', label: 'Education' },
    { to: '/experiences', label: 'Experiences' },
    { to: '/projects', label: 'Project' },
    { to: '/references', label: 'References' },
    { to: '/activity', label: 'Activity' },
]

export default function Layout() {
    return (
        <ResumeLayout>
            <SkipLink href="#main-content">Skip to content</SkipLink>
            <SiteHeader>
                <h1>Tk Poothong</h1>
                <p>My online resume</p>
            </SiteHeader>
            <ContentLayout>
                <Navbar aria-label="Resume sections">
                    <NavigationList>
                        {links.map(({ to, label }) => (
                            <NavigationItem key={to}>
                                <NavigationLink to={to} end>{label}</NavigationLink>
                            </NavigationItem>
                        ))}
                    </NavigationList>
                </Navbar>
                <MainContent id="main-content" tabIndex={-1}>
                    <Outlet />
                </MainContent>
            </ContentLayout>
            <SiteFooter>
                <p>All Rights Reserved by TK Poothong <Link to="/credits">Credits</Link> &copy;</p>
            </SiteFooter>
        </ResumeLayout>
    )
}