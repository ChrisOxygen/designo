import BottomCTA from "../components/BottomCTA";
import LocationLayout from "../components/LocationLayout";

function OurCompany() {
  return (
    <div className="about-page">
      <div className="about-us-section">
        <span className="bg-shape"></span>
        <div className="about-us-section__content-wrapper box-container">
          <span className="bg-circle"></span>

          <div className="about-us-section__content-box">
            <h2 className="about-us-section__title">About Us</h2>
            <p className="about-us-section__desc">
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We've partnered with many startups,
              corporations, and nonprofits alike to craft designs that make real
              impact. We're always looking forward to creating brands that
              connect with people.
            </p>
          </div>
          <div className="about-us-section__image">
            <img src="./assets/about/desktop/image-about-hero.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="content-card">
        <div className="content-card__content-wrapper box-container">
          <span className="bg-shape bg-shape__1"></span>
          <span className="bg-shape bg-shape__2"></span>
          <span className="bg-shape bg-shape__3"></span>
          <div className="content-card__image">
            <img
              src="./assets/about/desktop/image-world-class-talent.jpg"
              alt=""
            />
          </div>
          <div className="content-card__content">
            <h3 className="content-card__title">World-class talent</h3>
            <p className="content-card__desc">
              <span>
                We are a crew of strategists, problem-solvers, and
                technologists. Every design is thoughtfully crafted from concept
                to launch, ensuring success in its given market. We are
                constantly updating our skills in a myriad of platforms.
              </span>
              Our team is multi-disciplinary and we are not merely interested in
              form — content and meaning are just as important. We give great
              importance to craftsmanship, service, and prompt delivery. Clients
              have always been impressed with our high-quality outcomes that
              encapsulates their brand’s story and mission.
            </p>
          </div>
        </div>
      </div>
      <LocationLayout />
      <div className="content-card second-content-card">
        <div className="content-card__content-wrapper box-container">
          <span className="bg-shape bg-shape__1"></span>
          <span className="bg-shape bg-shape__2"></span>
          <span className="bg-shape bg-shape__3"></span>
          <div className="content-card__image">
            <img src="./assets/about/desktop/image-real-deal.jpg" alt="" />
          </div>
          <div className="content-card__content">
            <h3 className="content-card__title">The real deal</h3>
            <p className="content-card__desc">
              <span>
                As strategic partners in our clients’ businesses, we are ready
                to take on any challenge as our own. Solving real problems
                require empathy and collaboration, and we strive to bring a
                fresh perspective to every opportunity. We make design and
                technology more accessible and give you tools to measure
                success.
              </span>
              We are visual storytellers in appealing and captivating ways. By
              combining business and marketing strategies, we inspire audiences
              to take action and drive real results.
            </p>
          </div>
        </div>
      </div>
      <BottomCTA />
    </div>
  );
}

export default OurCompany;
