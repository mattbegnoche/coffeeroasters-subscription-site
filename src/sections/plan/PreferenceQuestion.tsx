import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { RadioGroup } from "@headlessui/react";
import type { SubscriptionQuestion } from "../../config/subscriptionQuestions";
import IconArrow from "../../ui/icons/IconArrow";
import PreferenceQuestionOptionList from "./PreferenceQuestionOptionList.tsx";

import { useSubscription } from "../../context/SubscriptionContext.tsx";
import type { SubscriptionAction } from "../../context/SubscriptionContext.tsx";

type SubscriptionActionWithPayload = Exclude<
  SubscriptionAction,
  { type: "RESET" }
>;
type SubscriptionActionType = SubscriptionActionWithPayload["type"];
type PayloadByAction<T extends SubscriptionActionType> = Extract<
  SubscriptionActionWithPayload,
  { type: T }
>["payload"];

interface PreferenceQuestionProps<T extends SubscriptionActionType> {
  question: SubscriptionQuestion;
  disabled?: boolean;
  action: T;
}

const disabledStyles = "*:pointer-events-none cursor-not-allowed opacity-20";

function PreferenceQuestion<T extends SubscriptionActionType>({
  question,
  disabled = false,
  action,
}: PreferenceQuestionProps<T>) {
  const { dispatch } = useSubscription();

  return (
    <div className={disabled ? disabledStyles : ``} id={question.id}>
      <Disclosure defaultOpen={disabled ? false : true}>
        <DisclosureButton className="group py-2 flex flex-row justify-between items-center w-full">
          <h2 className="text-preset-2">{question.question}</h2>
          <div className="w-[1.136rem] group-data-open:rotate-180 transition-transform text-teal-600 shrink-0">
            <IconArrow className="" />
          </div>
        </DisclosureButton>
        <DisclosurePanel className="text-gray-500 pt-8">
          <RadioGroup
            onChange={(value: PayloadByAction<T>) =>
              dispatch({
                type: action,
                payload: value,
              } as Extract<SubscriptionActionWithPayload, { type: T }>)
            }
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
