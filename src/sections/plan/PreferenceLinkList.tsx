import { subscriptionQuestions } from "../../config/subscriptionQuestions";
import PreferenceLinkItem from "./PreferenceLinkItem";

function PreferenceLinkList() {
  return (
    <ul className="flex flex-col gap-5">
      {subscriptionQuestions.map((question, index) => (
        <PreferenceLinkItem
          key={question.id}
          questionId={question.id}
          linkText={question.linkText}
          index={index + 1}
        />
      ))}
    </ul>
  );
}

export default PreferenceLinkList;
