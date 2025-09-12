import React from "react";

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Main white background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/30 to-white"></div>
      
      {/* Large animated gradient orbs using brand colors */}
      <div className="absolute top-0 -left-40 w-80 h-80 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute top-0 -right-40 w-80 h-80 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-20 w-80 h-80 bg-tertiary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      
      {/* Additional orbs for more movement */}
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-primary/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-tertiary/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      
      {/* Extra subtle orbs */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-secondary/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      
      {/* Subtle mesh gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-white/50"></div>
    </div>
  );
};