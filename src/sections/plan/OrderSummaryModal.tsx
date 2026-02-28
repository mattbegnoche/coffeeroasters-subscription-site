import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useSubscription } from "../../context/SubscriptionContext";
import OrderSummaryText from "./OrderSummaryText";
import Button from "../../ui/common/Button";
import {
  formatPrice,
  getMonthlyPrice,
} from "../../context/subscriptionSelectors";

interface OrderSummaryModalProps {
  open: boolean;
  handleIsOpenModel: (state: boolean) => void;
}

function OrderSummaryModal({
  open,
  handleIsOpenModel,
}: OrderSummaryModalProps) {
  const { state } = useSubscription();

  const monthlyPrice = getMonthlyPrice(state.quantity, state.frequency);

  return (
    <Dialog
      open={open}
      onClose={() => handleIsOpenModel(false)}
      className="relative z-50 "
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4 ">
        <div className="absolute w-full h-full bg-neutral-900 opacity-70"></div>
        <DialogPanel className="rounded-lg overflow-clip max-w-lg space-y-4 bg-white relative z-10">
          <div className="px-4 py-5 sm:px-12 sm:py-11 bg-neutral-900 text-neutral-0">
            <DialogTitle className="text-preset-2">Order Summary</DialogTitle>
          </div>
          <div className="px-4 py-5 sm:p-12 flex flex-col">
            <p className="text-preset-4 text-neutral-500 mb-5">
              <OrderSummaryText state={state} />
            </p>
            <Description className="text-neutral-900 mb-8">
              Is this correct? You can proceed to checkout or go back to plan
              selection if something is off. Subscription discount codes can
              also be redeemed at the checkout.
            </Description>
            <div className="flex flex-col gap-4 w-full sm:flex-row sm:items-center sm:justify-between ">
              <span className="text-preset-3">
                {formatPrice(monthlyPrice)}/ mo
              </span>
              <Button>Checkout</Button>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default OrderSummaryModal;
