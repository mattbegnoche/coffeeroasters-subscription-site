import { Button as HeadlessButton } from "@headlessui/react";
import type { ComponentProps } from "react";
import { Link } from "react-router";

const baseStyles =
  "inline-block px-8 py-4 rounded-md text-preset-5 transition-colors";

const variants = {
  primary: "bg-teal-600 text-neutral-0 hover:bg-teal-300",
  secondary: "bg-neutral-700 text-neutral-0 hover:bg-neutral-500",
  disabled: "bg-neutral-300 text-neutral-0 cursor-not-allowed",
} as const;

type ButtonVariant = keyof typeof variants;

interface ButtonProps extends ComponentProps<typeof HeadlessButton> {
  variant?: ButtonVariant;
  to?: string;
  children: React.ReactNode;
}

function Button({
  variant = "primary",
  className = "",
  to = "",
  children,
  ...props
}: ButtonProps) {
  const variantStyles = variants[variant];

  if (to)
    return (
      <Link to={to} className={`${baseStyles} ${variantStyles} ${className}`}>
        {children}
      </Link>
    );

  return (
    <HeadlessButton
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </HeadlessButton>
  );
}

export default Button;
