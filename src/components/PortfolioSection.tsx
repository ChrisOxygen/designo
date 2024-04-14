import { ReactNode } from "react";

type PortfolioSectionProps = {
  children: ReactNode;
};

function PortfolioSection({ children }: PortfolioSectionProps) {
  return (
    <section className="portfolio-section">
      <div className=" box-container portfolio-section__content-wrapper">
        {children}
      </div>
    </section>
  );
}

export default PortfolioSection;
