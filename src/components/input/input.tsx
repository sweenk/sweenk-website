import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "primary" | "secondary";
}

export const Input: React.FC<InputProps> = ({
  variant = "default",
  className = "",
  ...props
}) => {
  const baseClasses =
    "w-full px-4 py-4 bg-white border-2 rounded-lg focus:outline-none transition-colors";

  const variantClasses = {
    default:
      "border-gray-200 focus:border-primary",
    primary:
      "border-primary focus:border-purple-700",
    secondary:
      "border-secondary focus:border-green-400",
  };

  return (
    <input
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
};

