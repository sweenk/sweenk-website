import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  const baseClasses =
    "px-10 py-4 font-semibold rounded-lg transition-colors whitespace-nowrap";
  
  const variantClasses = {
    primary:
      "bg-primary text-white hover:bg-purple-700",
    secondary:
      "bg-secondary text-gray-900 hover:bg-green-400",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

