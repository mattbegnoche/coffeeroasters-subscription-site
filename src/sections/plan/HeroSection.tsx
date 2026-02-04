import Container from "../../ui/layout/Container";
import MobileImageHeroSection from "../../assets/plan/mobile/image-hero-blackcup.jpg";
import TabletImageHeroSection from "../../assets/plan/tablet/image-hero-blackcup.jpg";
import DesktopImageHeroSection from "../../assets/plan/desktop/image-hero-blackcup.jpg";
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
            altText="Coffe cup and grinder"
          />
          <div className="text-center text-neutral-50 relative sm:max-w-[26.3rem] md:max-w-[30.8rem] sm:text-left">
            <h1 className="text-preset-1 mb-8">Create plan</h1>
            <p className="text-preset-6 mb-10 opacity-80 ">
              Coffee the way you wanted it to be. For coffee delivered tomorrow,
              or next week. For whatever brew method you use. For choice, for
              convenience, for quality.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
