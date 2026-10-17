import PageSection from '../components/PageSection'
import Calculator from '../components/Calculator'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <PageSection title="Project">
      <Calculator />
      <ProjectCard
        title="Sales Dashboard"
        image="/images/sales.jpg"
        imageAlt="Power BI sales dashboard"
        description="Created a Power BI dashboard using sales data from the accounting team to help the manager track business performance, see progress toward goals, and identify top-selling products and sales reps. The dashboard made it easier to understand overall sales trends and business progress."
      />
      <ProjectCard
        title="Stock Management System Development"
        image="/images/stock.jpg"
        imageAlt="Stock management system interface"
        description="Collaborated in the design and development of a web-based stock management system, integrating Microsoft Dynamics 365 Business Central to streamline inventory tracking, synchronize stock data, and improve the accuracy of product and SKU information."
      />
      <ProjectCard
        title="NETCUBE Internal Web Portal"
        image="/images/all-app.jpg"
        imageAlt="NETCUBE internal application portal"
        description="Contributed to the design and development of NETCUBE’s internal web portal, creating a centralized platform that allows employees to access company applications, systems, and resources through a single interface."
      />
    </PageSection>
  )
}
