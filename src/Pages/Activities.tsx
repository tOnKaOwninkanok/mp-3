import styled from 'styled-components'
import PageSection from '../components/PageSection'

const ActivitiesTable = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;

  @media (max-width: 1200px) {
    &, tbody {
      display: block;
      width: 100%;
    }
  }
`

const Row = styled.tr`
  td {
    padding: 10px;
    vertical-align: middle;
  }

  td:first-child { width: 25%; padding-left: 0; }
  td:nth-child(2) { width: 17%; }
  td:nth-child(3) { width: 36%; }
  td:last-child { width: 22%; padding-right: 0; }

  & + & {
    border-top: 1px solid #f8d7e3;
  }

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
  border-radius: 10%;

  @media (max-width: 1200px) {
    width: 300px;
  }
`

export default function Activities() {
    return (
        <PageSection title="Activities and Interests">
            <ActivitiesTable aria-label="My activities and interests">
                <tbody>
                <Row>
                    <td><ActivityImage src="/images/city-run.jpg" alt="City Run" loading="lazy" /></td>
                    <td><h3>City Run</h3></td>
                    <td>City Run in Bangkok is a fun way to explore the city while also getting yourself up and exercising. Not only do you get to stay active, but most people also end up finding really good restaurants after running and meeting new people through the running community.</td>
                    <td><a href="https://www.facebook.com/groups/654640701341188/">Learn more about City Run in Bangkok</a></td>
                </Row>
                <Row>
                    <td><ActivityImage src="/images/making-merit.jpg" alt="Making Merit" loading="lazy" /></td>
                    <td><h3>Making Merit</h3></td>
                    <td>Making merit is something I enjoy doing as a Buddhist. I usually go to the temple with my family to donate food and other supplies. It is a meaningful way for me to spend time with my family, help others, and continue practicing Buddhist traditions that I grew up with.</td>
                    <td><a href="https://thaibatr.com/">Learn more about Buddhist Traditions in Thailand</a></td>
                </Row>
                <Row>
                    <td><ActivityImage src="/images/pilates.jpg" alt="Pilates" loading="lazy" /></td>
                    <td><h3>Pilates</h3></td>
                    <td>Pilates is one of my favorite things to do in my free time. I enjoy doing it because it helps me stay active while also making me feel relaxed. I also love trying different types of Pilates and challenging myself with new moves. It is a fun way for me to exercise and take care of myself.</td>
                    <td><a href="https://www.instagram.com/clubpilatesthailand/">Learn more about me and pilates</a></td>
                </Row>
                </tbody>
            </ActivitiesTable>
        </PageSection>
    )
}