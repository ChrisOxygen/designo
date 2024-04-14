import Button from "../ui/Button";

function HomeHeroSection() {
  return (
    <div className="hero-section">
      <span className="bg-shape"></span>
      <div className=" box-container hero-section__content-wrapper">
        <span className="bg-circle"></span>
        <div className="hero-cta">
          <h2 className="hero-cta__title">
            Award-winning custom designs and digital branding solutions
          </h2>
          <p className="hero-cta__desc">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <Button className="btn btn__bg-dark" to="/our-company">
            Learn More
          </Button>
        </div>
        <div className="hero-cta-image">
          <img src="./assets/home/desktop/image-hero-phone.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default HomeHeroSection;
