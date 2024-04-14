import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import SiteFooter from "./components/SIteFooter";

function AppLayout() {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
      <SiteFooter />
    </div>
  );
}
export default AppLayout;
