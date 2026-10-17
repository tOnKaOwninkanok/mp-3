import styled from 'styled-components'

const SiteHeader = styled.header`
  background-color: #fff0f5;
  padding-left: 30px;
  text-align: left;

  @media (max-width: 1000px) {
    text-align: center;
  }
`

export default function Header() {
  return (
    <SiteHeader>
      <h1>Tk Poothong</h1>
      <p>My online resume</p>
    </SiteHeader>
  )
}
