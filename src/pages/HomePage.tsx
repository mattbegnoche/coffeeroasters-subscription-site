import HeroSection from "../sections/home/HeroSection";
import HowItWorks from "../sections/shared/HowItWorks";
import OurCollection from "../sections/shared/OurCollection";
import WhyChooseUs from "../sections/shared/WhyChooseUs";

function HomePage() {
  return (
    <>
      <HeroSection />
      <OurCollection />
      <WhyChooseUs />
      <HowItWorks />
    </>
  );
}

export default HomePage;
