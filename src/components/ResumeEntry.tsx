import styled from 'styled-components'

const Entry = styled.section`
  margin-bottom: 32px;

  li + li {
    margin-top: 8px;
  }
`

type ResumeEntryProps = {
    title: string
    subtitle: string
    details?: string[]
}

export default function ResumeEntry({ title, subtitle, details }: ResumeEntryProps) {
    return (
        <Entry>
            <h3>{title}</h3>
            <p>{subtitle}</p>
            {details && (
                <ul>
                    {details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
            )}
        </Entry>
    )
}