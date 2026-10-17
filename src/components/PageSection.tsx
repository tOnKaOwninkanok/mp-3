import type { ReactNode } from 'react'
import styled from 'styled-components'
import usePageTitle from '../customHooks/usePageTitle'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  min-width: 0;
`

type PageSectionProps = {
  title: string
  children: ReactNode
}

export default function PageSection({ title, children }: PageSectionProps) {
  usePageTitle(title)
  return (
    <Section aria-labelledby="page-title">
      <h2 id="page-title">{title}</h2>
      {children}
    </Section>
  )
}
