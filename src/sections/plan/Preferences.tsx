import { subscriptionQuestions } from "../../config/subscriptionQuestions";
import Container from "../../ui/layout/Container";
import Button from "../../ui/common/Button";
// import { Form } from "react-router";
import PreferenceLinkList from "./PreferenceLinkList";
import PreferenceQuestion from "./PreferenceQuestion.tsx";
import OrderSummary from "./OrderSummary.tsx";

function Preferences() {
  /* TODO: Set up subscription context and provider using React */
  return (
    <section className="pb-16">
      <Container className="md:grid md:grid-cols-12 flex flex-col gap-16">
        <nav className="md:col-span-4 md:sticky md:top-4 md:self-start">
          <PreferenceLinkList />
        </nav>
        <form className="flex flex-col gap-8 md:col-span-8">
          {subscriptionQuestions.map((question) => (
            <PreferenceQuestion key={question.id} question={question} />
          ))}
          <OrderSummary />
          <Button disabled className="self-end ">
            Create your plan
          </Button>
        </form>
        {/* TODO: ORDER SUMMARY */}
      </Container>
    </section>
  );
}

export default Preferences;
