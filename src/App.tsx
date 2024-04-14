import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "./pages/Home";
import WebDesign from "./pages/WebDesign";
import AppDesign from "./pages/AppDesign";
import GraphicsDesign from "./pages/GraphicsDesign";
import OurCompany from "./pages/OurCompany";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/web-design",
        element: <WebDesign />,
      },
      {
        path: "/app-design",
        element: <AppDesign />,
      },
      {
        path: "/graphics-design",
        element: <GraphicsDesign />,
      },
      {
        path: "/our-company",
        element: <OurCompany />,
      },
      {
        path: "/our-locations",
        element: <Locations />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
