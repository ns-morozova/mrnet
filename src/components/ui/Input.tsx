import { forwardRef, useId, type InputHTMLAttributes } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
  error?: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, hint, id, className = "", error = false, ...props }, ref) => {
    const autoId = useId();
    const inputId = id ?? props.name ?? autoId;
    const borderClasses = error
      ? "border-accent-flame focus:border-accent-flame"
      : "border-accent-aqua focus:border-accent-aqua";
    const baseClasses =
      "w-full h-13 rounded-full border bg-black pl-7.5 pr-5 py-0 text-white placeholder:text-grey transition-colors";

    return (
      <div className="flex w-full flex-col gap-2 md:text-lg">
        {label && (
          <label className="font-medium text-white" htmlFor={inputId}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          aria-invalid={error || undefined}
          className={`${baseClasses} ${borderClasses} ${className}`.trim()}
          {...props}
        />
        {hint && <span className="text-xs text-grey">{hint}</span>}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
