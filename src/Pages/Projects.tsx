import styled from 'styled-components'
import PageSection from '../components/PageSection'
import Calculator from '../components/Calculator'

const ProjectTitle = styled.h3`
  margin-bottom: 15px;
`

const ProjectContent = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 50px;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const ProjectImage = styled.img`
  border-radius: 10%;
  width: 50%;
  max-width: 400px;

  @media (max-width: 1200px) {
    width: 100%;
  }
`

const ProjectDescription = styled.ul`
  flex: 1;
  min-width: 0;
  margin: 0;
  padding-left: 20px;
`

export default function Projects() {
    return (
        <PageSection title="Project">
            <Calculator />
            <section>
                <ProjectTitle>Sales Dashboard</ProjectTitle>
                <ProjectContent>
                    <ProjectImage src="/images/sales.jpg" alt="Power BI sales dashboard" loading="lazy" />
                    <ProjectDescription>
                        <li>Created a Power BI dashboard using sales data from the accounting team to help the manager track business performance, see progress toward goals, and identify top-selling products and sales reps. The dashboard made it easier to understand overall sales trends and business progress.</li>
                    </ProjectDescription>
                </ProjectContent>
            </section>
            <section>
                <ProjectTitle>Stock Management System Development</ProjectTitle>
                <ProjectContent>
                    <ProjectImage src="/images/stock.jpg" alt="Stock management system interface" loading="lazy" />
                    <ProjectDescription>
                        <li>Collaborated in the design and development of a web-based stock management system, integrating Microsoft Dynamics 365 Business Central to streamline inventory tracking, synchronize stock data, and improve the accuracy of product and SKU information.</li>
                    </ProjectDescription>
                </ProjectContent>
            </section>
            <section>
                <ProjectTitle>NETCUBE Internal Web Portal</ProjectTitle>
                <ProjectContent>
                    <ProjectImage src="/images/all-app.jpg" alt="NETCUBE internal application portal" loading="lazy" />
                    <ProjectDescription>
                        <li>Contributed to the design and development of NETCUBE’s internal web portal, creating a centralized platform that allows employees to access company applications, systems, and resources through a single interface.</li>
                    </ProjectDescription>
                </ProjectContent>
            </section>
        </PageSection>
    )
}