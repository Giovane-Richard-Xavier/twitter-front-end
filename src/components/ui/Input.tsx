import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { Label } from "./Label";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string | ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {label && <Label htmlFor={id}>{label}</Label>}
        <input
          id={id}
          ref={ref}
          className={`
                h-10 
                rounded-lg 
                border px-3
                text-sm outline-none 
                transition-colors 
                placeholder-zinc-500
                focus:border-blue-500
                disabled:cursor-not-allowed
                disabled:opacity-50
                read-only:opacity-50
                ${error ? "border-red-500" : "border-zinc-700"}
                ${className}
            `}
          {...props}
        />

        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
    );
  },
);

Input.displayName = "Input";
