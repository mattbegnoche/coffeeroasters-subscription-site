function IconArrow({
  className,
  "aria-label": ariaLabel,
}: {
  className?: string;
  "aria-label"?: string;
}) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19 13"
      width="100%"
      aria-hidden={ariaLabel ? undefined : true}
      aria-label={ariaLabel}
      role={ariaLabel ? "img" : undefined}
    >
      <path
        fill="currentColor"
        d="M15.949.586l2.828 2.828a2 2 0 010 2.828l-2.828 2.828a2 2 0 11-2.828-2.828L13.414 6H2a2 2 0 110-4h11.414l-.293-.293a2 2 0 112.828-2.828z"
      />
    </svg>
  );
}

export default IconArrow;
