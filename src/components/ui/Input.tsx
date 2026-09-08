import { IconEye, IconEyeOff } from "@tabler/icons-react";

import { forwardRef, InputHTMLAttributes, ReactNode, useState } from "react";

import { Label } from "./Label";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string | ReactNode;
  rightIcon?: ReactNode;
  onRightIconClick?: () => void;
  showPasswordToggle?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      className,
      id,
      rightIcon,
      onRightIconClick,
      showPasswordToggle = false,
      type = "text",
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";

    const inputType = isPassword && showPassword ? "text" : type;

    const icon =
      isPassword && showPasswordToggle ? (
        showPassword ? (
          <IconEye size={18} />
        ) : (
          <IconEyeOff size={18} />
        )
      ) : (
        rightIcon
      );

    const handleIconClick = () => {
      if (isPassword && showPasswordToggle) {
        setShowPassword((current) => !current);
        return;
      }

      onRightIconClick?.();
    };

    return (
      <div className="flex flex-col gap-1">
        {label && <Label htmlFor={id}>{label}</Label>}

        <div className="relative">
          <input
            id={id}
            ref={ref}
            type={inputType}
            className={`
              h-10
              w-full
              rounded-lg
              border
              px-3
              ${icon ? "pr-10" : ""}
              text-sm
              outline-none
              transition-colors
              placeholder-zinc-500
              focus:border-blue-500
              disabled:cursor-not-allowed
              disabled:opacity-50
              read-only:opacity-50
              ${error ? "border-red-500" : "border-zinc-700"}
              ${className ?? ""}
            `}
            {...props}
          />

          {icon && (
            <button
              type="button"
              onClick={handleIconClick}
              className="
                absolute
                right-3
                top-1/2
                -translate-y-1/2
                text-zinc-500
                transition-colors
                hover:text-zinc-300
              "
              aria-label={
                isPassword
                  ? showPassword
                    ? "Ocultar senha"
                    : "Mostrar senha"
                  : undefined
              }
            >
              {icon}
            </button>
          )}
        </div>

        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
    );
  },
);

Input.displayName = "Input";
