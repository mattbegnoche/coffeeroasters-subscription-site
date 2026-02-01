import Button from "../../ui/common/Button";
import Container from "../../ui/layout/Container";
import StepsSection from "./StepsSection";

function HowItWorks() {
  return (
    <section className="mt-10 mb-20 md:mb-35 md:mt-24">
      <Container className="md:max-w-280">
        <h2 className="text-preset-4 text-neutral-500 mb-16 sm:mb-20 text-center md:text-left">
          How it works
        </h2>
        <StepsSection />
        <div className="mt-10 sm:mt-16 w-full flex flex-row justify-center md:justify-start">
          <Button to="/subscribe" variant="primary">
            Create your plan
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default HowItWorks;
