import { headquarters } from "../../config/headquarters";
import Container from "../../ui/layout/Container";

function OurHeadquarters() {
  return (
    <section className="mb-20 sm:24 md:mb-40">
      <Container className="flex flex-col gap-16 md:max-w-[65.4rem]">
        <h2 className="text-preset-4 text-neutral-500 text-center sm:text-left">
          Our headquarters
        </h2>
        <ul className="flex flex-col gap-8 sm:flex-row sm:gap-16 md:grid md:grid-cols-3">
          {headquarters.map((hq) => (
            <li
              key={hq.country}
              className="flex flex-col gap-4 items-center sm:items-start"
            >
              <div className="max-w-12.5 text-teal-600">
                <hq.icon />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-preset-3 mb-2">{hq.country}</h3>
                <p dangerouslySetInnerHTML={{ __html: hq.address }} />
                <p>{hq.phone}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default OurHeadquarters;
