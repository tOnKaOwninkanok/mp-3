import styled from 'styled-components'

const Entry = styled.section`
  min-width: 0;
`

type ResumeEntryProps = {
  title: string
  subtitle: string
  details?: string[]
  variant?: 'education' | 'experience'
}

export default function ResumeEntry({ title, subtitle, details, variant = 'education' }: ResumeEntryProps) {
  const Title = variant === 'experience' ? 'h2' : 'h3'
  const Subtitle = variant === 'experience' ? 'h3' : 'p'

  return (
    <Entry>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      {details && (
        <ul>
          {details.map((detail) => <li key={detail}>{detail}</li>)}
        </ul>
      )}
    </Entry>
  )
}
