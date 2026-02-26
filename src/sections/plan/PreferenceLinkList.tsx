import { useSubscription } from "../../context/SubscriptionContext";
import PreferenceLinkItem from "./PreferenceLinkItem";

function PreferenceLinkList() {
  const { state } = useSubscription();

  return (
    <ul className="flex flex-col gap-5">
      <PreferenceLinkItem
        questionId="preferences"
        linkText="Preferences"
        index="01"
        selected={state.preference !== null}
      />
      <PreferenceLinkItem
        questionId="bean-type"
        linkText="Bean Type"
        index="02"
        selected={state.coffeeType !== null}
      />
      <PreferenceLinkItem
        questionId="quantity"
        linkText="Quantity"
        index="03"
        selected={state.quantity !== null}
      />
      <PreferenceLinkItem
        questionId="grind-option"
        linkText="Grind Option"
        index="04"
        selected={state.grind !== null}
        isDisabled={state.isCapsule}
      />
      <PreferenceLinkItem
        questionId="deliveries"
        linkText="Deliveries"
        index="05"
        selected={state.frequency !== null}
      />
    </ul>
  );
}

export default PreferenceLinkList;
