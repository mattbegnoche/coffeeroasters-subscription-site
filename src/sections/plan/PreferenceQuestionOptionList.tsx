import type { SubscriptionOption } from "../../config/subscriptionQuestions";
import PreferenceQuestionOption from "./PreferenceQuestionOption.tsx";

interface PreferenceQuestionOptionListProps {
  options: SubscriptionOption[];
}

function PreferenceQuestionOptionList({
  options,
}: PreferenceQuestionOptionListProps) {
  return (
    <>
      {options.map((option) => (
        <PreferenceQuestionOption key={option.id} option={option} />
      ))}
    </>
  );
}

export default PreferenceQuestionOptionList;
