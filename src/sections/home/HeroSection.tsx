import Button from "../../ui/common/Button";
import Container from "../../ui/layout/Container";
import MobileImageHeroSection from "../../assets/home/mobile/image-hero-coffeepress.jpg";
import TabletImageHeroSection from "../../assets/home/tablet/image-hero-coffeepress.jpg";
import DesktopImageHeroSection from "../../assets/home/desktop/image-hero-coffeepress.jpg";
import BackgroundImage from "../../ui/common/BackgroundImage";

function HeroSection() {
  return (
    <section>
      <Container>
        <div className="relative overflow-clip px-6 py-24 sm:px-12 md:px-20 md:py-28 rounded-[0.625rem]">
          <BackgroundImage
            desktopImage={DesktopImageHeroSection}
            tabletImage={TabletImageHeroSection}
            mobileImage={MobileImageHeroSection}
          />
          <div className="text-center text-neutral-50 relative sm:max-w-[26.3rem] md:max-w-[30.8rem] sm:text-left">
            <h1 className="text-preset-1 mb-8">Great coffee made simple.</h1>
            <p className="text-preset-6 mb-10 opacity-80 ">
              Start your mornings with the world’s best coffees. Try our
              expertly curated artisan coffees from our best roasters delivered
              directly to your door, at your schedule.
            </p>
            <Button to="/subscribe" variant="primary">
              Create your plan
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
