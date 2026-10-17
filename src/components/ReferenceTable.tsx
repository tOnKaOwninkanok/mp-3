import styled from 'styled-components'

const Table = styled.table`
  width: 100%;
  border: 1px solid grey;

  th, td { text-align: center; }

  @media (max-width: 750px) {
    table-layout: fixed;
  }
`

type ReferenceTableProps = {
  title: string
  relationshipLabel: string
  entries: { name: string; relationship: string; contact: string }[]
}

export default function ReferenceTable({ title, relationshipLabel, entries }: ReferenceTableProps) {
  const titleId = `reference-${title.toLowerCase()}`

  return (
    <>
      <h3 id={titleId}>{title}</h3>
      <Table aria-labelledby={titleId}>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">{relationshipLabel}</th>
            <th scope="col">Contact</th>
          </tr>
        </thead>
        <tbody>
          {entries.map(({ name, relationship, contact }) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{relationship}</td>
              <td>{contact}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}
