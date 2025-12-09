import { forwardRef, type ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-accent-aqua hover:bg-accent-flame",
  secondary: "bg-accent-flame hover:bg-accent-aqua",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className = "", children, ...props }, ref) => {
    const baseClasses =
      "inline-flex w-full h-9 items-center justify-center rounded-full p-0 text-black text-sm font-medium uppercase tracking-[0.07em] transition-colors duration-200 cursor-pointer md:w-84";
    return (
      <button
        ref={ref}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`.trim()}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
