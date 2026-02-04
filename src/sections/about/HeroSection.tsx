import BackgroundImage from "../../ui/common/BackgroundImage";
import Container from "../../ui/layout/Container";
import desktopBgImage from "../../assets/about/desktop/image-hero-whitecup.jpg";
import tabletBgImage from "../../assets/about/tablet/image-hero-whitecup.jpg";
import mobileBgImage from "../../assets/about/mobile/image-hero-whitecup.jpg";

function HeroSection() {
  return (
    <section>
      <Container>
        <div className="relative overflow-clip px-6 py-24 sm:px-12 md:px-20 md:py-28 rounded-[0.625rem]">
          <BackgroundImage
            desktopImage={desktopBgImage}
            tabletImage={tabletBgImage}
            mobileImage={mobileBgImage}
            altText="Coffee Cup"
          />
          <div className="text-center text-neutral-50 relative sm:max-w-[27.8rem] sm:text-left">
            <h1 className="text-preset-2 mb-6">About Us</h1>
            <p className="text-preset-6 mb-10 opacity-80 ">
              Coffeeroasters began its journey of exotic discovery in 1999,
              highlighting stories of coffee from around the world. We have
              since been dedicated to bring the perfect cup - from bean to brew
              - in every shipment.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
