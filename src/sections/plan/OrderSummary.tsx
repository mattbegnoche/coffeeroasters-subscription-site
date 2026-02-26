import { useSubscription } from "../../context/SubscriptionContext";
import OrderSummaryText from "./OrderSummaryText";

function OrderSummary() {
  const { state } = useSubscription();

  return (
    <div className="flex flex-col gap-2 bg-neutral-900 rounded-[0.625rem] text-neutral-0 py-12 px-6 sm:px-12 md:px-16">
      <h2 className="text-preset-7">Order Summary</h2>
      <p className="text-preset-4">
        <OrderSummaryText state={state} />
      </p>
    </div>
  );
}

export default OrderSummary;
