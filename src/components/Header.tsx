import { NavLink } from "react-router-dom";
import MobileNavToggle from "../ui/MobileNavToggle";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import { AnimatePresence } from "framer-motion";
import Button from "../ui/Button";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    console.log("click", mobileMenuOpen);

    const handleOutsideClick = (e: MouseEvent) => {
      if (
        e.target instanceof HTMLElement &&
        !e.target.closest(".mobile-nav-wrapper") &&
        !e.target.closest(".mobile-nav-toggle")
      ) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [mobileMenuOpen]);

  function handleMobileToggleClick() {
    setMobileMenuOpen((curr) => !curr);
  }
  return (
    <div className="header">
      <div className="box-container header__content-wrapper">
        <Button className="logo-wrapper" to="/">
          <img src="./assets/shared/desktop/logo-dark.png" alt="logo" />
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
        <MobileNavToggle
          mobileMenuOpen={mobileMenuOpen}
          handleMobileToggleClick={handleMobileToggleClick}
        />
        <AnimatePresence>{mobileMenuOpen && <MobileNav />}</AnimatePresence>
      </div>
    </div>
  );
}

export default Header;
