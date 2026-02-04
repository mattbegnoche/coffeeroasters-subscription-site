function Container({
  children,
  className,
  variant,
}: {
  children?: React.ReactNode;
  className?: string;
  variant?: "narrow";
}) {
  const narrowStyles = variant === "narrow" ? "max-w-[69.4]" : "";

  return (
    <div
      className={`px-4 max-w-[79.4rem] mx-auto ${className || ""} ${narrowStyles || ""}`}
    >
      {children}
    </div>
  );
}

export default Container;
