import { forwardRef, type ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "h-9 text-sm bg-accent-aqua",
  secondary: "h-13 text-xl bg-[linear-gradient(252.6deg,#FF4C00_20.57%,#B38BCE_60.25%,#00E4F0_86.93%)]",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className = "", children, ...props }, ref) => {
    const baseClasses =
      "flex w-full items-center justify-center rounded-full p-0 text-black font-medium uppercase tracking-[0.07em] transition-all duration-200 hover:shadow-[0_0_0_1px_rgba(0,228,240,0.25),0_0_24px_rgba(0,228,240,0.7)] md:w-84";
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
