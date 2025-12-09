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
  ({ variant = "primary", className = "", ...props }, ref) => {
    const baseClasses =
      "w-full h-9 rounded-full border-none outline-none p-0 uppercase text-black font-medium text-xs transition-colors duration-200 cursor-pointer";

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
