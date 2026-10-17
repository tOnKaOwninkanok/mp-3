import styled from 'styled-components'
import PageSection from '../components/PageSection'
import ActivityRow from '../components/ActivityRow'

const ActivitiesTable = styled.table`
  width: 100%;
  table-layout: fixed;

  @media (max-width: 1200px) {
    &, tbody {
      display: block;
      width: 100%;
    }
  }
`

export default function Activities() {
  return (
    <PageSection title="Activities and Interests">
      <ActivitiesTable aria-label="My activities and interests">
        <tbody>
          <ActivityRow
            title="City Run"
            image="/images/city-run.jpg"
            description="City Run in Bangkok is a fun way to explore the city while also getting yourself up and exercising. Not only do you get to stay active, but most people also end up finding really good restaurants after running and meeting new people through the running community."
            link="https://www.facebook.com/groups/654640701341188/"
            linkText="Learn more about City Run in Bangkok"
          />
          <ActivityRow
            title="Making Merit"
            image="/images/making-merit.jpg"
            description="Making merit is something I enjoy doing as a Buddhist. I usually go to the temple with my family to donate food and other supplies. It is a meaningful way for me to spend time with my family, help others, and continue practicing Buddhist traditions that I grew up with."
            link="https://thaibatr.com/"
            linkText="Learn more about Buddhist Traditions in Thailand"
          />
          <ActivityRow
            title="Pilates"
            image="/images/pilates.jpg"
            description="Pilates is one of my favorite things to do in my free time. I enjoy doing it because it helps me stay active while also making me feel relaxed. I also love trying different types of Pilates and challenging myself with new moves. It is a fun way for me to exercise and take care of myself."
            link="https://www.instagram.com/clubpilatesthailand/"
            linkText="Learn more about me and pilates"
          />
        </tbody>
      </ActivitiesTable>
    </PageSection>
  )
}
