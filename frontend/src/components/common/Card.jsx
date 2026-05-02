// src/components/Card.jsx
import { forwardRef } from "react";

const Card = forwardRef(
  (
    {
      children,
      variant = "default",
      padding = "md",
      hoverable = false,
      clickable = false,
      className = "",
      onClick,
      ...props
    },
    ref,
  ) => {
    const baseStyles = "bg-(--bg-card) rounded-lg transition-all duration-200";

    const variants = {
      default: "bg-(--bg-primary)",
      elevated: "bg-(--bg-card) shadow-lg",
      outline: "bg-transparent border-(--border-secondary)",
      filled: "bg-(--bg-tertiary) border-transparent",
    };

    const paddings = {
      none: "p-0",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    };

    const interactiveStyles =
      hoverable || clickable
        ? "hover:bg-(--bg-hover) hover:shadow-md hover:border-(--border-focus)"
        : "";

    const cursorStyle = clickable ? "cursor-pointer" : "";

    return (
      <div
        ref={ref}
        onClick={onClick}
        className={`
        ${baseStyles}
        ${variants[variant]}
        ${paddings[padding]}
        ${interactiveStyles}
        ${cursorStyle}
        ${className}
      `}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";

// Card Sub-components
export const CardHeader = ({ children, className = "" }) => (
  <div className={`mb-4 ${className}`}>{children}</div>
);

export const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-xl font-semibold text-(--text-primary) ${className}`}>
    {children}
  </h3>
);

export const CardDescription = ({ children, className = "" }) => (
  <p className={`text-(--text-secondary) text-sm mt-1 ${className}`}>
    {children}
  </p>
);

export const CardBody = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

export const CardFooter = ({ children, className = "" }) => (
  <div className={`mt-4 ${className}`}>{children}</div>
);

export default Card;
