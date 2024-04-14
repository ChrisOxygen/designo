import { ReactNode } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

type SingleLocationProps = {
  alignment?: "row" | "row-reverse";
  region: string;
  contactDetails: ReactNode;
  address: ReactNode;
  cordordinates: [number, number];
};

function SingleLocation({
  alignment = "row",
  region,
  contactDetails,
  address,
  cordordinates,
}: SingleLocationProps) {
  return (
    <div
      className={`single-location  single-location--${alignment} box-container`}
    >
      <div className="single-location__card">
        <span className="bg-circle bg-circle__1"></span>
        <span className="bg-circle bg-circle__2"></span>
        <h2 className="location-title">{region}</h2>
        <div className="location-address-contact">
          {address}
          {contactDetails}
        </div>
      </div>
      <div className="single-location__map">
        <MapContainer
          center={cordordinates}
          zoom={15}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%", display: "block" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          <Marker position={cordordinates}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default SingleLocation;
