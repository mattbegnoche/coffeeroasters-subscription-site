import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { subscriptionQuestions } from "../../config/subscriptionQuestions";
import Container from "../../ui/layout/Container";
import IconArrow from "../../ui/icons/IconArrow";
import Button from "../../ui/common/Button";

function Preferences() {
  return (
    <section>
      <Container>
        {/* TODO: Navigation to dropdown */}
        {/* TODO: Set up subscription context and provider using React */}
        {subscriptionQuestions.map((question) => (
          <form>
            <Disclosure key={question.id}>
              <DisclosureButton className="py-2 flex flex-row justify-between">
                <h2 className="text-preset-2">{question.question}</h2>
                <div className="w-8">
                  <IconArrow />
                </div>
              </DisclosureButton>
              <DisclosurePanel className="text-gray-500">
                {question.options.map((option) => (
                  <div className="mb-4" key={option.id}>
                    <p>{option.title}</p>
                    <p>{option.description}</p>
                  </div>
                ))}
              </DisclosurePanel>
            </Disclosure>
          </form>
        ))}
        {/* TODO: ORDER SUMMARY */}
        <Button>Create your plan</Button>
      </Container>
    </section>
  );
}

export default Preferences;
