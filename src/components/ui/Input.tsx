import { forwardRef, useId, type InputHTMLAttributes } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, hint, id, className = "", ...props }, ref) => {
    const autoId = useId();
    const inputId = id ?? props.name ?? autoId;

    return (
      <div className="flex w-full flex-col gap-2 text-sm text-white/80">
        {label && (
          <label className="font-medium text-white" htmlFor={inputId}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`w-full rounded-full border border-stroke bg-surface px-5 py-3 text-white placeholder:text-white/40 transition-colors focus:border-accent-aqua ${className}`.trim()}
          {...props}
        />
        {hint && <span className="text-xs text-white/60">{hint}</span>}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
