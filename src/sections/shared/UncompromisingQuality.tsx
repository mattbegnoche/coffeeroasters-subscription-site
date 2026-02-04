import BackgroundImage from "../../ui/common/BackgroundImage";
import Container from "../../ui/layout/Container";
import desktopImage from "../../assets/about/desktop/image-quality.jpg";
import tabletImage from "../../assets/about/tablet/image-quality.jpg";
import mobileImage from "../../assets/about/mobile/image-quality.jpg";

function UncompromisingQuality() {
  return (
    <section className="md:pt-28 pb-8 md:pb-16">
      <Container>
        <div className="relative">
          <div className="absolute w-full left-0 bottom-0 bg-neutral-900 rounded-[0.625rem] h-[90%] sm:h-[70%] md:h-full"></div>
          <div className="text-center md:text-left relative z-10 text-neutral-0 pb-8 sm:pb-16 px-5 md sm:px-20 md:py-28 flex flex-col md:flex-row gap-9 md:gap-20 md:justify-between sm:gap-16">
            <div className="relative max-w-70 mx-auto aspect-280/156 sm:aspect-[35.8125/18.75] sm:max-w-143.25 md:max-w-111.25 md:aspect-[27.8125/29.625] overflow-clip rounded-lg w-full md:order-2 md:-mt-50">
              <BackgroundImage
                desktopImage={desktopImage}
                tabletImage={tabletImage}
                mobileImage={mobileImage}
                altText="Coffee cup with a heart created out of creamer."
              />
            </div>
            <div className="flex flex-col gap-5 items-center md:items-start text-center md:text-left md:order-1">
              <h2 className="text-preset-2">Uncompromising quality</h2>
              <p className="text-preset-6 opacity-80 sm:max-w-135">
                Although we work with growers who pay close attention to all
                stages of harvest and processing, we employ, on our end, a
                rigorous quality control program to avoid over-roasting or
                baking the coffee dry. Every bag of coffee is tagged with a
                roast date and batch number. Our goal is to roast consistent,
                user-friendly coffee, so that brewing is easy and enjoyable.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default UncompromisingQuality;
