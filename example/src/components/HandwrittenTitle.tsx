"use client";

import React from "react";
import { useLanguage } from '@/contexts/LanguageContext';

interface HandwrittenTitleProps {
  text: string;
  color?: string;
  fontSize?: string;
  className?: string;
}

const HandwrittenTitle: React.FC<HandwrittenTitleProps> = ({
  text,
  color = "var(--color-primary)",
  fontSize = "text-5xl",
  className = "",
}) => {
  const { language } = useLanguage();
  
  const fontFamily = language === 'ge' 
    ? "'DM Iakobi', cursive" 
    : "'Nothing You Could Do', cursive";
  
  const fontWeight = language === 'ge' ? 600 : 500;
  
  return (
    <h2 
      className={`${fontSize} ${className}`}
      style={{ 
        fontFamily: fontFamily,
        color: color,
        fontWeight: fontWeight
      }}
    >
      {text}
    </h2>
  );
};

export default HandwrittenTitle;