import { Link } from 'react-router-dom'
import PageSection from '../components/PageSection'

export default function NotFound() {
    return (
        <PageSection title="Page not found">
            <p>This page does not exist. Choose a section from the navigation or <Link to="/">return home</Link>.</p>
        </PageSection>
    )
}