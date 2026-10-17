import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const MainContent = styled.main`
  background-color: white;
  flex: 1;
  min-width: 0;
  padding: 30px;
  display: flex;
  flex-direction: column;

  &:focus {
    outline: none;
  }

  @media (max-width: 750px) {
    padding: 20px 16px;
  }
`

export default function Main() {
  return (
    <MainContent id="main-content" tabIndex={-1}>
      <Outlet />
    </MainContent>
  )
}
