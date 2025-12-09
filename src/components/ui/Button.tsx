import { forwardRef, type ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-paper text-ink hover:bg-accent-flame hover:text-ink",
  secondary: "bg-accent-flame text-ink hover:bg-accent-aqua",
  ghost:
    "border border-stroke text-paper hover:border-accent-aqua hover:text-accent-aqua",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className = "", ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60";

    return (
      <button
        ref={ref}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`.trim()}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export default Button;
