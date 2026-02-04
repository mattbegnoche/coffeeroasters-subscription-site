import Container from "../../ui/layout/Container";
import desktopImage from "../../assets/about/desktop/image-commitment.jpg";
import tabletImage from "../../assets/about/tablet/image-commitment.jpg";
import mobileImage from "../../assets/about/mobile/image-commitment.jpg";
import BackgroundImage from "../../ui/common/BackgroundImage";

function OurCommitment() {
  return (
    <section className="mt-20 mb-20 sm:mt-24 md:mt-40">
      <Container className="flex flex-col sm:flex-row gap-12 md:max-w-280 items-center">
        <div className="relative rounded-lg overflow-clip w-full sm:w-0 aspect-[21.375/25] sm:min-h-130 sm:min-w-70 sm:aspect-auto md:min-h-130 md:min-w-111.25">
          <BackgroundImage
            altText="Baristas making coffee"
            desktopImage={desktopImage}
            tabletImage={tabletImage}
            mobileImage={mobileImage}
          />
        </div>
        <div className="text-center sm:text-left">
          <h2 className="text-preset-2 mb-5">Our commitment</h2>
          <p className="text-preset-6 opacity-80">
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default OurCommitment;
