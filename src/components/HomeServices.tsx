import ServiceBox from "./ServiceBox";

function HomeServices() {
  return (
    <div className="home-services-section">
      <div className="home-services-section__content-wrapper box-container">
        <ServiceBox title="web design" />
        <ServiceBox title="app design" />
        <ServiceBox title="graphics design" />
      </div>
    </div>
  );
}

export default HomeServices;
