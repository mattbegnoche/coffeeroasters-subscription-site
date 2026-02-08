import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { RadioGroup } from "@headlessui/react";
import type { SubscriptionQuestion } from "../../config/subscriptionQuestions";
import IconArrow from "../../ui/icons/IconArrow";
import PreferenceQuestionOptionList from "./PreferenceQuestionOptionList.tsx";

interface PreferenceQuestionProps {
  question: SubscriptionQuestion;
}

function PreferenceQuestion({ question }: PreferenceQuestionProps) {
  return (
    <div id={question.id}>
      <Disclosure defaultOpen={true}>
        <DisclosureButton className="group py-2 flex flex-row justify-between items-center w-full">
          <h2 className="text-preset-2">{question.question}</h2>
          <div className="w-[1.136rem] group-data-open:rotate-180 transition-transform text-teal-600 shrink-0">
            <IconArrow className="" />
          </div>
        </DisclosureButton>
        <DisclosurePanel className="text-gray-500 pt-8">
          <RadioGroup
            aria-label={question.question}
            className="flex flex-col gap-4 sm:grid sm:grid-cols-3 sm:gap-6"
          >
            <PreferenceQuestionOptionList options={question.options} />
          </RadioGroup>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
}

export default PreferenceQuestion;
