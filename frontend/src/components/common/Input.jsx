// src/components/Input.jsx
import { forwardRef, useState } from "react";

const Input = forwardRef(
  (
    {
      label,
      error,
      helper,
      leftIcon,
      rightIcon,
      type = "text",
      fullWidth = false,
      size = "md",
      variant = "default",
      className = "",
      containerClassName = "",
      ...props
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const baseStyles =
      "bg-(--bg-primary) border text-gray-800 rounded-full transition-all duration-200 focus:outline-none placeholder:text-(--text-tertiary) disabled:opacity-50 disabled:cursor-not-allowed ";

    const variants = {
      default: `border-gray-300 ${isFocused ? "border-(--primary) ring-2 ring-(--primary)" : ""} ${error ? "border-(--error)" : ""}`,
      filled:
        "bg-(--bg-tertiary) border-transparent focus:bg-(--bg-card) focus:border-(--primary)",
      outline:
        "bg-transparent border-(--border-secondary) focus:border-(--primary)",
    };

    const sizes = {
      sm: "px-3 py-2 text-sm",
      md: "px-4 py-3 text-base",
      lg: "px-5 py-4 text-lg",
    };

    const widthClass = fullWidth ? "w-full" : "";

    return (
      <div className={`${fullWidth ? "w-full" : ""} ${containerClassName}`}>
        {label && (
          <label className="block text-sm font-medium text-(--text-primary) mb-2">
            {label}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-(--text-tertiary)">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            type={type}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`
            ${baseStyles}
            ${className}
            ${variants[variant]}
            ${sizes[size]}
            ${widthClass}
            ${leftIcon ? "pl-10" : ""}
            ${rightIcon ? "pr-10" : ""}
          `}
            {...props}
          />

          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-(--text-tertiary)">
              {rightIcon}
            </div>
          )}
        </div>

        {error && <p className="mt-2 text-sm text-(--error)">{error}</p>}

        {helper && !error && (
          <p className="mt-2 text-sm text-(--text-secondary)">{helper}</p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
