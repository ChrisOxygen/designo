import BottomCTA from "../components/BottomCTA";
import InnerPageServiceBox from "../components/InnerPageServiceBox";
import PageHeader from "../components/PageHeader";
import PortfolioSection from "../components/PortfolioSection";

import portfolio from "../../data.json";
import PortfolioProject from "../components/PortfolioProject";

const portfolioItems = portfolio.portfolio.filter(
  (portfolio) => portfolio.title === "web design"
)[0].projects;

function WebDesign() {
  return (
    <div className="web-design-page">
      <PageHeader
        title="Web Design"
        desc="We build websites that serve as powerful marketing tools 
and bring memorable brand experiences."
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
          <InnerPageServiceBox title="graphics design" />
        </div>
      </div>
      <BottomCTA />
    </div>
  );
}

export default WebDesign;
