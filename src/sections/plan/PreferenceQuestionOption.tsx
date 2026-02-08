import { Radio } from "@headlessui/react";
import type { SubscriptionOption } from "../../config/subscriptionQuestions";

interface PreferenceQuestionOptionProps {
  option: SubscriptionOption;
}

function PreferenceQuestionOption({ option }: PreferenceQuestionOptionProps) {
  return (
    <Radio
      className="cursor-pointer p-5 mb-4 rounded-lg bg-neutral-100 text-left text-neutral-900   focus:not-data-focus:outline-none data-focus:outline-3 data-focus:outline-offset-[3px] data-focus:outline-teal-600 data-focus:bg-orange-200 data-checked:bg-teal-600 data-checked:text-neutral-0 data-checked:data-focus:bg-teal-600 data-checked:data-focus:text-neutral-0 "
      value={option.id}
    >
      <h3 className="text-preset-4 mb-4">{option.title}</h3>
      <p className="text-preset-6">{option.description}</p>
    </Radio>
  );
}

export default PreferenceQuestionOption;
