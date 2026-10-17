import styled from 'styled-components'

const ProjectTitle = styled.h3`
  margin-bottom: 15px;
`

const ProjectContent = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 50px;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const ProjectImage = styled.img`
  border-radius: 10%;
  width: 400px;
  max-width: 50%;

  @media (max-width: 750px) {
    width: 100%;
    max-width: 400px;
  }
`

const ProjectDescription = styled.ul`
  min-width: 0;
`

type ProjectCardProps = {
  title: string
  image: string
  imageAlt: string
  description: string
}

export default function ProjectCard({ title, image, imageAlt, description }: ProjectCardProps) {
  return (
    <>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectContent>
        <ProjectImage src={image} alt={imageAlt} loading="lazy" />
        <ProjectDescription><li>{description}</li></ProjectDescription>
      </ProjectContent>
    </>
  )
}
