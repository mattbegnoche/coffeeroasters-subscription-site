import { Button as HeadlessButton } from "@headlessui/react";
import type { ComponentProps } from "react";

const variants = {
  primary: "bg-primary-cyan text-neutral-0 hover:bg-primary-cyan-hover",
  secondary: "bg-neutral-700 text-neutral-0 hover:bg-neutral-500",
  disabled: "bg-neutral-300 text-neutral-0 cursor-not-allowed",
} as const;

type ButtonVariant = keyof typeof variants;

interface ButtonProps extends ComponentProps<typeof HeadlessButton> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

// Define the Button component function
// The parameters use destructuring to extract props from the ButtonProps object
function Button({
  variant = "primary", // Default value if variant isn't provided
  className = "", // Default empty string if no custom classes provided
  children, // The content to display inside the button
  ...props // "...props" is the rest operator - captures all remaining props not explicitly listed
}: ButtonProps) {
  // Type annotation - this function expects ButtonProps as parameters
  // Get the CSS classes for the selected variant
  // variants[variant] looks up the classes in the variants object
  const variantStyles = variants[variant];

  // Return the JSX (React's HTML-like syntax)
  return (
    <HeadlessButton
      // Template literal with ${} to inject variables into the string
      // Combines base styles, variant styles, and any custom className passed in
      className={`px-8 py-4 rounded-md font-secondary text-lg font-black leading-[150%] transition-colors ${variantStyles} ${className}`}
      {...props} // Spread operator - passes all remaining props to HeadlessButton
    >
      {children} {/* Render the button's content */}
    </HeadlessButton>
  );
}

// Export the component so it can be imported and used in other files
export default Button;
