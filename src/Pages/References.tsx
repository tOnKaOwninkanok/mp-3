import styled from 'styled-components'
import PageSection from '../components/PageSection'

const Table = styled.table`
  width: 100%;
  border: 1px solid grey;
  border-collapse: collapse;
  margin-bottom: 30px;

  caption {
    text-align: left;
    font-weight: bold;
    margin: 12px 0;
  }

  th, td {
    padding: 10px;
    border: 1px solid #ccc;
    text-align: center;
  }

  @media (max-width: 750px) {
    table-layout: fixed;

    th, td {
      padding: 8px 4px;
    }
  }
`

export default function References() {
    return (
        <PageSection title="Reference">
            <Table>
                <caption>Professional</caption>
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Position</th>
                    <th scope="col">Contact</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>ssdd</td>
                    <td>Academic Advisor</td>
                    <td>Contact</td>
                </tr>
                </tbody>
            </Table>
            <Table>
                <caption>Personal</caption>
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Relation</th>
                    <th scope="col">Contact</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Sukhon</td>
                    <td>Mom</td>
                    <td>+6687690xxxx</td>
                </tr>
                <tr>
                    <td>Thanin</td>
                    <td>Dad</td>
                    <td>+6695365xxxx</td>
                </tr>
                </tbody>
            </Table>
        </PageSection>
    )
}