import styled from 'styled-components'

const Row = styled.tr`
  td {
    padding: 1px;
    vertical-align: middle;
  }

  td:first-child { width: 25%; }
  td:nth-child(2) { width: 17%; }
  td:nth-child(3) { width: 36%; }
  td:last-child { width: 22%; }

  @media (max-width: 1200px) {
    display: block;
    width: 100%;
    padding: 20px 0;

    td:nth-child(n) {
      display: block;
      width: 100%;
      padding: 5px 0;
    }

    h3 { margin: 10px 0; }
  }
`

const ActivityImage = styled.img`
  width: 300px;
`

type ActivityRowProps = {
  title: string
  image: string
  description: string
  link: string
  linkText: string
}

export default function ActivityRow({ title, image, description, link, linkText }: ActivityRowProps) {
  return (
    <Row>
      <td><ActivityImage src={image} alt={title} loading="lazy" /></td>
      <td><h3>{title}</h3></td>
      <td>{description}</td>
      <td><a href={link}>{linkText}</a></td>
    </Row>
  )
}
