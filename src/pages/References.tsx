import PageSection from '../components/PageSection'
import ReferenceTable from '../components/ReferenceTable'

export default function References() {
  return (
    <PageSection title="Reference">
      <ReferenceTable
        title="Professional"
        relationshipLabel="Position"
        entries={[
          { name: 'ssdd', relationship: 'Academic Advisor', contact: 'Contact' },
        ]}
      />
      <ReferenceTable
        title="Personal"
        relationshipLabel="Relation"
        entries={[
          { name: 'Sukhon', relationship: 'Mom', contact: '+6687690xxxx' },
          { name: 'Thanin', relationship: 'Dad', contact: '+6695365xxxx' },
        ]}
      />
    </PageSection>
  )
}
