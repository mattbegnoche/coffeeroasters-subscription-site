import HeroSection from "../sections/plan/HeroSection";
import Preferences from "../sections/plan/Preferences";
import StepsSection from "../sections/shared/StepsSection";
import Container from "../ui/layout/Container";

function SubscribePage() {
  return (
    <>
      <HeroSection />
      <section>
        <Container className="py-20 sm:py-24 md:py-40">
          <StepsSection theme="dark" />
        </Container>
      </section>
      <Preferences />
    </>
  );
}

export default SubscribePage;
