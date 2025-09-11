"use client";

import React from "react";

interface SectionTitleProps {
  primary: string;
  secondary: string;
  primaryColor?: string;
  secondaryColor?: string;
  fontSize?: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  primary,
  secondary,
  primaryColor = "text-gray-500",
  secondaryColor,
  fontSize = "text-5xl",
  className = "",
}) => {
  // If secondaryColor is not provided, use the same as primaryColor
  const finalSecondaryColor = secondaryColor || primaryColor;

  // Determine if we're using CSS variables or Tailwind classes
  const isPrimaryVar = primaryColor.startsWith("var(");
  const isSecondaryVar = finalSecondaryColor.startsWith("var(");

  return (
    <h2 className={`${fontSize}  ${className}`}>
      <span
        className={`${fontSize}-primary ${!isPrimaryVar ? primaryColor : ""}`}
        style={
          isPrimaryVar
            ? { color: primaryColor, fontWeight: 400 }
            : { fontWeight: 400 }
        }
      >
        {primary}
      </span>
      <span
        className={`${fontSize}-secondary ${
          !isSecondaryVar ? finalSecondaryColor : ""
        } ml-3`}
        style={isSecondaryVar ? { color: finalSecondaryColor } : undefined}
      >
        {secondary}
      </span>
    </h2>
  );
};

export default SectionTitle;
