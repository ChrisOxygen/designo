import BottomCTA from "../components/BottomCTA";
import InnerPageServiceBox from "../components/InnerPageServiceBox";
import PageHeader from "../components/PageHeader";
import PortfolioSection from "../components/PortfolioSection";

import portfolio from "../../data.json";
import PortfolioProject from "../components/PortfolioProject";

const portfolioItems = portfolio.portfolio.filter(
  (portfolio) => portfolio.title === "graphic design"
)[0].projects;

function GraphicsDesign() {
  return (
    <div className="web-design-page">
      <PageHeader
        title="Graphic Design"
        desc="We deliver eye-catching branding materials that are 
        tailored to meet your business objectives.
        "
      />
      <PortfolioSection>
        {portfolioItems.map((project, index) => (
          <PortfolioProject
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </PortfolioSection>
      <div className="other-services">
        <div className=" box-container other-services__content-wrapper">
          <InnerPageServiceBox title="app design" />
          <InnerPageServiceBox title="web design" />
        </div>
      </div>
      <BottomCTA />
    </div>
  );
}

export default GraphicsDesign;
