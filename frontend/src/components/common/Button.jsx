// src/components/Button.jsx
import { forwardRef } from "react";

const Button = forwardRef(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth = false,
      disabled = false,
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      className,
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      "font-semibold rounded-full cursor-pointer transition-all duration-200 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary: "bg-(--primary) hover:bg-(--primary-hover) text-white",
      secondary:
        "bg-(--bg-secondary) text-gray-900 hover:bg-(--bg-secondary-hover) hover:border-(--border-focus)",
      outline:
        "bg-transparent border border-(--primary) text-(--primary) hover:bg-(--primary) hover:text-white",
      ghost: "bg-transparent text-(--text-primary) hover:bg-(--bg-hover)",
      danger: "bg-(--error) hover:bg-(--error) text-white",
      success: "bg-(--success) hover:bg-(--success) text-white",
    };

    const sizes = {
      sm: "px-3 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const widthClass = fullWidth ? "w-full" : "";

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${widthClass}
        ${className}
      `}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Loading...
          </>
        ) : (
          <>
            {leftIcon && <span>{leftIcon}</span>}
            {children}
            {rightIcon && <span>{rightIcon}</span>}
          </>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
