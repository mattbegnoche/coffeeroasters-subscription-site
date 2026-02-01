function IconCanada({
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
      viewBox="0 0 42 50"
      width="100%"
      aria-hidden={ariaLabel ? undefined : true}
      aria-label={ariaLabel}
      role={ariaLabel ? "img" : undefined}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21 0c11.598 0 21 9.402 21 21 0 4.042-1.085 7.855-3.05 11.134l-.113.185C36.455 36.447 21 50 21 50S5.545 36.447 3.163 32.32l-.113-.186A20.89 20.89 0 010 21C0 9.402 9.402 0 21 0zm0 5.873c-8.339 0-15.127 6.788-15.127 15.127 0 8.339 6.788 15.127 15.127 15.127 8.339 0 15.127-6.788 15.127-15.127C36.127 12.661 29.339 5.873 21 5.873z"
      />
    </svg>
  );
}

export default IconCanada;
