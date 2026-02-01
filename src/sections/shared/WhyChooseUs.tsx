import BenefitCard from "../../ui/common/BenefitCard";
import BenefitCardList from "../../ui/common/BenefitCardList";
import IconCoffeeBean from "../../ui/icons/IconCoffeeBean";
import IconGift from "../../ui/icons/IconGift";
import IconTruck from "../../ui/icons/IconTruck";
import Container from "../../ui/layout/Container";

function WhyChooseUs() {
  return (
    <section>
      <Container>
        <div className="flex flex-col gap-6 relative pt-16 pb-10 md:pt-24 ">
          <div className="absolute w-full  left-0 top-0 bg-neutral-900 rounded-[0.625rem] h-144"></div>
          <div className="relative ">
            <div className="flex flex-col gap-8 text-neutral-50 px-4 sm:px-20 mb-16 text-center items-center">
              <h2 className="text-preset-2">Why choose us?</h2>
              <p className="text-preset-6 opacity-80 max-w-[58ch]">
                A large part of our role is choosing which particular coffees
                will be featured in our range. This means working closely with
                the best coffee growers to give you a more impactful experience
                on every level.
              </p>
            </div>
            <BenefitCardList>
              <BenefitCard
                icon={<IconCoffeeBean aria-label="Coffee Bean" />}
                benefit="Best quality"
                description="Discover an endless variety of the world’s best artisan coffee from each of our roasters."
              />
              <BenefitCard
                icon={<IconGift aria-label="Gift Box" />}
                benefit="Exclusive benefits"
                description="Special offers and swag when you subscribe, including 30% off your first shipment."
              />
              <BenefitCard
                icon={<IconTruck aria-label="Truck" />}
                benefit="Free shipping"
                description="We cover the cost and coffee is delivered fast. Peak freshness: guaranteed."
              />
            </BenefitCardList>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default WhyChooseUs;
