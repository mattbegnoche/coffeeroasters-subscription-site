interface PreferenceLinkItemProps {
  questionId: string;
  linkText: string;
  index: string;
  selected: boolean;
  isDisabled?: boolean;
}

function PreferenceLinkItem({
  questionId,
  linkText,
  index,
  selected,
  isDisabled = false,
}: PreferenceLinkItemProps) {
  const linkSelectedStyles = selected ? "opacity-100" : "";
  const numberSelectedStyles = selected ? "text-teal-600" : "";
  const disabledStyles = isDisabled ? "cursor-not-allowed" : "";

  return (
    <li
      className={`not-last:[&>a]:border-b-neutral-200 not-last:[&>a]:border-b-2 not-last:[&>a]:pb-5 ${disabledStyles}`}
    >
      <a
        href={`#${questionId}`}
        className={`text-preset-4 flex flex-row gap-6 opacity-40 transition-all hover:opacity-100 ${
          isDisabled ? " pointer-events-none" : ""
        } ${linkSelectedStyles}`}
      >
        <span
          className={`text-neutral-400 transition-all ${numberSelectedStyles}`}
        >
          {index}
        </span>
        <span className="text-neutral-900 transition-all">{linkText}</span>
      </a>
    </li>
  );
}

export default PreferenceLinkItem;
