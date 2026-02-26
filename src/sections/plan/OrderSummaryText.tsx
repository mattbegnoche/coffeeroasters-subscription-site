import type { SubscriptionState } from "../../context/subscriptionTypes";

interface OrderSummaryTextProps {
  state: SubscriptionState;
}

// Helper to render a value with blue styling
const Highlight = ({ value }: { value: string | null }) => (
  <span className="text-teal-600">{value ?? "____"}</span>
);

function OrderSummaryText({ state }: OrderSummaryTextProps) {
  const { preference, coffeeType, quantity, grind, frequency } = state;

  // Capsule summary omits grind
  if (preference === "Capsule") {
    return (
      <>
        I drink my coffee using <Highlight value="Capsules" />, with{" "}
        <Highlight value={coffeeType} /> beans, <Highlight value={quantity} />,
        sent to me <Highlight value={frequency} />.
      </>
    );
  }

  return (
    <>
      I drink my coffee as <Highlight value={preference} />, with{" "}
      <Highlight value={coffeeType} /> beans, <Highlight value={quantity} />,
      ground ala <Highlight value={grind} />, sent to me{" "}
      <Highlight value={frequency} />.
    </>
  );
}

export default OrderSummaryText;
