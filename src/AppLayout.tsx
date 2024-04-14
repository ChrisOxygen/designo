import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import SiteFooter from "./components/SIteFooter";
import ScrollToTop from "./components/ScrollToTop";

function AppLayout() {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
      <SiteFooter />
      <ScrollToTop />
    </div>
  );
}
export default AppLayout;
