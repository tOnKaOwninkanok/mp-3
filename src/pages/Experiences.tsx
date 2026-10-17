import PageSection from '../components/PageSection'
import ResumeEntry from '../components/ResumeEntry'

export default function Experiences() {
  return (
    <PageSection title="Experience">
      <ResumeEntry
        variant="experience"
        title="ERP CONSULTANT (INTERN)"
        subtitle="Quickerp Thailand, Jun 2024 – Aug 2024, Bangkok"
        details={[
          'Worked as a junior consultant, gathering client requirements and analyzing organizational issues to propose software solutions.',
          'Trained in Microsoft Dynamics 365 to help clients manage key operations and optimize workflows.',
          'Prepared detailed reports on client needs and collaborated with the manager to develop tailored solutions.',
        ]}
      />
      <ResumeEntry
        variant="experience"
        title="DATA ANALYTICS (INTERN)"
        subtitle="Net Cube (Thailand) Company Limited, Jun 2023 – Aug 2023, Bangkok"
        details={[
          'Utilized Power BI and Power Automate to transform raw sales data into interactive dashboards and visual reports.',
          'Collaborated with the accounting manager to collect and analyze product and sales rep performance data.',
          'Created visualizations highlighting top-performing reps, best-selling products, and progress toward sales targets.',
        ]}
      />
    </PageSection>
  )
}
