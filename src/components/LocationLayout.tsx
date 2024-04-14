import Button from "../ui/Button";

function LocationLayout() {
  return (
    <div className="location-section">
      <span className="bg-shape"></span>
      <div className="location-section__content-wrapper box-container">
        <div className="location-card">
          <div className="location-card__image">
            <img src="./assets/shared/desktop/illustration-canada.svg" alt="" />
          </div>
          <h4 className="location-card__title">CANADA</h4>
          <Button className="btn btn__bg-light" to="/our-locations">
            SEE LOCATION
          </Button>
        </div>
        <div className="location-card">
          <div className="location-card__image">
            <img
              src="./assets/shared/desktop/illustration-australia.svg"
              alt=""
            />
          </div>
          <h4 className="location-card__title">AUSTRALIA</h4>
          <Button className="btn btn__bg-light" to="/our-locations">
            SEE LOCATION
          </Button>
        </div>
        <div className="location-card">
          <div className="location-card__image">
            <img
              src="./assets/shared/desktop/illustration-united-kingdom.svg"
              alt=""
            />
          </div>
          <h4 className="location-card__title">UNITED KINGDOM</h4>
          <Button className="btn btn__bg-light" to="/our-locations">
            SEE LOCATION
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LocationLayout;
