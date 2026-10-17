import type { ReactNode } from 'react'
import usePageTitle from '../customHooks/usePageTitle'

type PageSectionProps = {
    title: string
    children: ReactNode
}

export default function PageSection({ title, children }: PageSectionProps) {
    usePageTitle(title)
    return (
        <section aria-labelledby="page-title">
            <h2 id="page-title">{title}</h2>
            {children}
        </section>
    )
}

