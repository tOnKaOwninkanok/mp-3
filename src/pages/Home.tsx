import styled from 'styled-components'
import PageSection from '../components/PageSection'

const HomeContent = styled.div`
  display: flex;
  align-items: flex-start;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`

const ProfileImage = styled.img`
  border-radius: 10%;
  width: 300px;
  flex-shrink: 0;
`

const Introduction = styled.div`
  flex: 1;
  min-width: 0;
  padding: 0 10px 10px;
`

export default function Home() {
  return (
    <PageSection title="Tk Poothong">
      <HomeContent>
        <ProfileImage src="/images/profile.jpg" alt="TK Poothong" width="300" height="400" />
        <Introduction>
          Hi! I’m TK :) I’m a Computer Science student who loves coding, traveling, trying new things, and spending time with the people I love. I made this website to share a little bit about myself, my experiences, and some of the projects I’ve worked on.
          Outside of school and coding, I love traveling, finding new places to eat, taking pictures, listening to music, and spending time with my friends and family. I also really enjoy experiencing new places and meeting different people. I think some of my favorite memories come from doing something completely new, even if I wasn’t sure about it at first.
          I’m still figuring out exactly what I want to do in the future, but I’m excited to keep learning, working on new projects, and discovering what I enjoy along the way.
          For now, this website is a little collection of my education, experiences, projects, activities, and some of the things that have been part of my journey so far.
          Welcome to my page ! ♡
        </Introduction>
      </HomeContent>
    </PageSection>
  )
}
