import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";

const menuVariant = {
  hidden: {
    x: "110%",
    opacity: 0,
    transition: {
      duration: 0.2,
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  end: {
    x: "110%",
    opacity: 0,
    transition: {
      duration: 0.2,
      when: "afterChildren",
    },
  },
};

function MobileNav() {
  return (
    <>
      <motion.span className="mobile-nav-backdrop"></motion.span>
      <motion.div
        className="mobile-nav-wrapper"
        variants={menuVariant}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
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
      </motion.div>
    </>
  );
}
export default MobileNav;
