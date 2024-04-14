import BottomCTA from "../components/BottomCTA";
import HomeHeroSection from "../components/HomeHeroSection";
import HomeServices from "../components/HomeServices";
import OurQualities from "../components/OurQualities";

function Home() {
  return (
    <div className="home-page">
      <HomeHeroSection />
      <HomeServices />
      <OurQualities />
      <BottomCTA />
    </div>
  );
}

export default Home;
