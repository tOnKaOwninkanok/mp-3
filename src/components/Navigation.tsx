import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = styled.nav`
  background-color: #fff0f5;
  width: fit-content;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;

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
    margin: 0 2px;
  }
`

const NavigationLink = styled(NavLink)`
  background-color: #f8d7e3;
  text-align: center;
  padding: 30px;
  display: block;
  color: grey;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    background-color: #f1bfd1;
  }

  @media (max-width: 750px) {
    padding: 15px 5px;
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

export default function Navigation() {
  return (
    <Navbar aria-label="Resume sections">
      <NavigationList>
        {links.map(({ to, label }) => (
          <NavigationItem key={to}>
            <NavigationLink to={to} end>{label}</NavigationLink>
          </NavigationItem>
        ))}
      </NavigationList>
    </Navbar>
  )
}
