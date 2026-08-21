import { forwardRef, InputHTMLAttributes, ReactNode } from "react";

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  error?: string;
}

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  () => {
    return (
      <div className="">
        <div className="">
          <input />
        </div>
      </div>
    );
  },
);

RadioButton.displayName = "RadioButton";
