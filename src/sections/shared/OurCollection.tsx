import { coffeeCollection } from "../../config/coffeeCollection";
import Container from "../../ui/layout/Container";

function OurCollection() {
  return (
    <section>
      <Container className="py-20 md:py-40">
        <div className="relative mb-4 sm:-mb-8 md:-mb-12">
          <h2 className="text-[#83888F] text-bg-gradient font-secondary font-black leading-[100%] text-center">
            our collection
          </h2>
          <div
            className="absolute w-full h-full left-0 top-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(254, 252, 247, 0) 0%, #FEFCF7 100%)",
            }}
          ></div>
        </div>
        <ul className="flex flex-col gap-8 items-center relative z-10 md:flex-row flex-wrap md:justify-center">
          {coffeeCollection.map((coffee) => (
            <li className="sm:flex sm:flex-row md:flex-col gap-x-8 items-center">
              <img
                className="mx-auto max-w-62 sm:mx-0"
                alt={coffee.name}
                src={coffee.imgUrl}
              />
              <div className="text-center sm:text-left md:text-center ">
                <h3 className="text-preset-4 mb-4 sm:mb-6" key={coffee.name}>
                  {coffee.name}
                </h3>
                <p className="sm:max-w-[36ch] md:max-w-[30ch]">
                  {coffee.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default OurCollection;
