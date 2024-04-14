import BottomCTA from "../components/BottomCTA";
import SingleLocation from "../components/SingleLocation";

function Locations() {
  return (
    <div className="locations-page">
      <div className="all-locations">
        <div className="all-locations__content-wrapper box-container">
          <SingleLocation
            region="Canada"
            cordordinates={[45.4196605, -75.70959858]}
            address={
              <p>
                <strong>Designo Central Office</strong>
                <br /> 3886 Wellington Street
                <br />
                Toronto, Ontario M9C 3J5
              </p>
            }
            contactDetails={
              <p>
                <strong>Contact Us</strong>
                <br /> P : +1 253-863-8967 <br />M : contact@designo.co
              </p>
            }
          />
          <SingleLocation
            alignment="row-reverse"
            region="Australia"
            cordordinates={[-27.6064042, 153.0657896]}
            address={
              <p>
                <strong>Designo AU Office</strong>
                <br /> 19 Balonne Street
                <br />
                New South Wales 2443
              </p>
            }
            contactDetails={
              <p>
                <strong>Contact Us</strong>
                <br /> P : (02) 6720 9092 <br />M : contact@designo.au
              </p>
            }
          />
          <SingleLocation
            region="United Kingdom"
            cordordinates={[53.7102658, -1.3417493]}
            address={
              <p>
                <strong>Designo UK Office</strong>
                <br /> 13 Colorado Way
                <br />
                Rhyd-y-fro SA8 9GA
              </p>
            }
            contactDetails={
              <p>
                <strong>Contact Us</strong>
                <br /> P : 078 3115 1400 <br />M : contact@designo.uk
              </p>
            }
          />
        </div>
      </div>

      <BottomCTA />
    </div>
  );
}

export default Locations;
