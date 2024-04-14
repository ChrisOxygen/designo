import { NavLink } from "react-router-dom";
import Button from "../ui/Button";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer__content-wrapper box-container">
        <div className="footer__top-section">
          <Button className="logo-wrapper" to="/">
            <img src="./assets/shared/desktop/logo-light.png" alt="logo" />
          </Button>
          <menu className="nav">
            <NavLink to="/our-company" className="nav-link">
              OUR COMPANY
            </NavLink>
            <NavLink to="/our-locations" className="nav-link">
              LOCATIONS
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              CONTACT
            </NavLink>
          </menu>
        </div>
        <div className="footer__bottom-section">
          <p className="office-adress">
            <strong>Designo Central Office</strong>
            <br /> 3886 Wellington Street
            <br />
            Toronto, Ontario M9C 3J5
          </p>
          <p className="footer-contact-details">
            <strong>Contact Us (Central Office)</strong>
            <br /> P : +1 253-863-8967 <br />M : contact@designo.co
          </p>
          <div className="social-links">
            <Button className="social-icon-link" to="/">
              <FaSquareFacebook />
            </Button>
            <Button className="social-icon-link" to="/">
              <FaSquareYoutube />
            </Button>
            <Button className="social-icon-link" to="/">
              <FaSquareXTwitter />
            </Button>
            <Button className="social-icon-link" to="/">
              <FaPinterest />
            </Button>
            <Button className="social-icon-link" to="/">
              <FaInstagram />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default SiteFooter;
