import PageSection from '../components/PageSection'
import ResumeEntry from '../components/ResumeEntry'

export default function Education() {
    return (
        <PageSection title="Education">
            <ResumeEntry
                title="B.A. in Computer Science, Boston University, Boston, MA"
                subtitle="Expected May 2027"
            />
            <ResumeEntry
                title="High School Diploma, CATS Academy Boston, Braintree, MA"
                subtitle="May 2023"
            />
            <ResumeEntry title="Mater Dei School, Bangkok, Thailand" subtitle="2020" />
        </PageSection>
    )
}