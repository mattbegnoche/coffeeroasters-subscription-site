import StepItem from "../../ui/common/StepItem";
import StepList from "../../ui/common/StepList";

type Theme = "light" | "dark";

interface ComponentProps {
  theme?: Theme;
}

function StepsSection({ theme = "light" }: ComponentProps) {
  const bgStyles =
    theme === "light"
      ? ""
      : "bg-neutral-900 py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-20 text-neutral-0";

  return (
    <div className={`${bgStyles}`}>
      <StepList>
        <StepItem
          theme={theme}
          num="01"
          title="Pick your coffee"
          text="Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."
        />
        <StepItem
          theme={theme}
          num="02"
          title="Choose the frequency"
          text="Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal."
        />
        <StepItem
          theme={theme}
          num="03"
          title="Receive and enjoy!"
          text="We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience."
        />
      </StepList>
    </div>
  );
}

export default StepsSection;
