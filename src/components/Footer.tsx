import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SiteFooter = styled.footer`
  background-color: #fff0f5;
  padding-left: 30px;
`

export default function Footer() {
  return (
    <SiteFooter>
      <p>All Rights Reserved by TK Poothong <Link to="/credits">Credits</Link> &copy;</p>
    </SiteFooter>
  )
}
