import Container from "../../ui/layout/Container";
import Button from "../../ui/common/Button";
// import { Form } from "react-router";
import PreferenceLinkList from "./PreferenceLinkList";
import PreferenceQuestion from "./PreferenceQuestion.tsx";
import OrderSummary from "./OrderSummary.tsx";
import { useSubscription } from "../../context/SubscriptionContext.tsx";
import { isSubscriptionComplete } from "../../context/subscriptionSelectors.ts";
import OrderSummaryModal from "./OrderSummaryModal.tsx";
import { useState } from "react";

function Preferences() {
  const { state } = useSubscription();
  const canSubmit = isSubscriptionComplete(state);
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <section className="pb-16">
      <Container className="md:grid md:grid-cols-12 flex flex-col gap-16">
        <nav className="md:col-span-4 md:sticky md:top-4 md:self-start">
          <PreferenceLinkList />
        </nav>
        <OrderSummaryModal
          open={isOpenModal}
          handleIsOpenModel={setIsOpenModal}
        />
        <form className="flex flex-col gap-8 md:col-span-8">
          <PreferenceQuestion
            action={"SET_PREFERENCE"}
            question={{
              id: "preferences",
              linkText: "Preferences",
              question: "How do you drink your coffee?",
              options: [
                {
                  id: "capsule",
                  title: "Capsule",
                  description:
                    "Compatible with Nespresso systems and similar brewers",
                },
                {
                  id: "filter",
                  title: "Filter",
                  description:
                    "For pour over or drip methods like Aeropress, Chemex, and V60",
                },
                {
                  id: "espresso",
                  title: "Espresso",
                  description:
                    "Dense and finely ground beans for an intense, flavorful experience",
                },
              ],
            }}
          />
          <PreferenceQuestion
            action={"SET_COFFEE_TYPE"}
            question={{
              id: "bean-type",
              linkText: "Bean Type",
              question: "What type of coffee?",
              options: [
                {
                  id: "single-origin",
                  title: "Single Origin",
                  description:
                    "Distinct, high quality coffee from a specific family-owned farm",
                },
                {
                  id: "decaf",
                  title: "Decaf",
                  description:
                    "Just like regular coffee, except the caffeine has been removed",
                },
                {
                  id: "blended",
                  title: "Blended",
                  description:
                    "Combination of two or three dark roasted beans of organic coffees",
                },
              ],
            }}
          />
          <PreferenceQuestion
            action={"SET_QUANTITY"}
            question={{
              id: "quantity",
              linkText: "Quantity",
              question: "How much would you like?",
              options: [
                {
                  id: "250g",
                  title: "250g",
                  description:
                    "Perfect for the solo drinker. Yields about 12 delicious cups.",
                },
                {
                  id: "500g",
                  title: "500g",
                  description:
                    "Perfect option for a couple. Yields about 40 delectable cups.",
                },
                {
                  id: "1000g",
                  title: "1000g",
                  description:
                    "Perfect for offices and events. Yields about 90 delightful cups.",
                },
              ],
            }}
          />
          <PreferenceQuestion
            disabled={state.isCapsule}
            action={"SET_GRIND"}
            question={{
              id: "grind-option",
              linkText: "Grind Option",
              question: "Want us to grind them?",
              options: [
                {
                  id: "wholebean",
                  title: "Wholebean",
                  description:
                    "Best choice if you cherish the full sensory experience",
                },
                {
                  id: "filter",
                  title: "Filter",
                  description:
                    "For drip or pour-over coffee methods such as V60 or Aeropress",
                },
                {
                  id: "cafetiere",
                  title: "Cafetière",
                  description:
                    "Course ground beans specially suited for french press coffee",
                },
              ],
            }}
          />
          <PreferenceQuestion
            action={"SET_FREQUENCY"}
            question={{
              id: "deliveries",
              linkText: "Deliveries",
              question: "How often should we deliver?",
              options: [
                {
                  id: "every-week",
                  title: "Every Week",
                  description:
                    "$14.00 per shipment. Includes free first-class shipping.",
                },
                {
                  id: "every-2-weeks",
                  title: "Every 2 Weeks",
                  description:
                    "$17.25 per shipment. Includes free priority shipping.",
                },
                {
                  id: "every-month",
                  title: "Every Month",
                  description:
                    "$22.50 per shipment. Includes free priority shipping.",
                },
              ],
            }}
          />
          <OrderSummary />
          <Button
            onClick={() => {
              if (!canSubmit) return;
              setIsOpenModal(true);
            }}
            disabled={!canSubmit}
            className="self-end"
          >
            Create your plan
          </Button>
        </form>
      </Container>
    </section>
  );
}

export default Preferences;
