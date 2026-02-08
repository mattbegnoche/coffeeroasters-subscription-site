interface PreferenceLinkItemProps {
  questionId: string;
  linkText: string;
  index: number;
}

function PreferenceLinkItem({
  questionId,
  linkText,
  index,
}: PreferenceLinkItemProps) {
  return (
    <li className="not-last:[&>a]:border-b-neutral-200 not-last:[&>a]:border-b-2 not-last:[&>a]:pb-5">
      <a
        href={`#${questionId}`}
        className="text-preset-4 flex flex-row gap-6 opacity-40 hover:opacity-100 transition-all"
      >
        <span className="text-neutral-400 transition-all">
          {index < 10 ? "0" : ""}
          {index}
        </span>
        <span className="text-neutral-900 transition-all">{linkText}</span>
      </a>
    </li>
  );
}

export default PreferenceLinkItem;
