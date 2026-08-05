import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <input
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
