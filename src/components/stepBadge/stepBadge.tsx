import React, { FC } from "react";

interface StepBadgeProps {
  number: number;
  variant?: "primary" | "secondary" | "tertiary";
  className?: string;
}

export const StepBadge: FC<StepBadgeProps> = ({
  number,
  variant = "primary",
  className = "",
}) => {
  const variantClasses = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    tertiary: "bg-tertiary",
  };

  return (
    <div
      className={`relative w-20 h-20 ${variantClasses[variant]} rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden ${className}`}
    >
      <span className="text-white text-5xl font-bold leading-none">
        {number}
      </span>
    </div>
  );
};

