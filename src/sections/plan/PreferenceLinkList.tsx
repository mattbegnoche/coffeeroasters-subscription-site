import PreferenceLinkItem from "./PreferenceLinkItem";

const preferenceQuestionLinks = [
  { id: "preferences", linkText: "Preferences" },
  { id: "bean-type", linkText: "Bean Type" },
  { id: "quantity", linkText: "Quantity" },
  { id: "grind-option", linkText: "Grind Option" },
  { id: "deliveries", linkText: "Deliveries" },
];

function PreferenceLinkList() {
  return (
    <ul className="flex flex-col gap-5">
      {preferenceQuestionLinks.map((question, index) => (
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
