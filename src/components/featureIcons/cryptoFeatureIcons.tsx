import React from "react";

// Inline SVG icons for crypto page (purple color for white backgrounds)
export const CryptoFeatureIcon01 = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    {/* Document with lightning bolt */}
    <path d="M20 2H8C6.9 2 6 2.9 6 4V28C6 29.1 6.9 30 8 30H24C25.1 30 26 29.1 26 28V10L20 2Z" fill="url(#crypto-paint0-1)"/>
    <path d="M20 2V10H26" stroke="url(#crypto-paint1-1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 18L13 22H17L16 26L19 22H15L16 18Z" fill="url(#crypto-paint2-1)"/>
    <defs>
      <linearGradient id="crypto-paint0-1" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A371F7"/>
        <stop offset="0.744792" stopColor="#A371F7" stopOpacity="0.8"/>
        <stop offset="1" stopColor="#A371F7" stopOpacity="0.4"/>
      </linearGradient>
      <linearGradient id="crypto-paint1-1" x1="23" y1="2" x2="23" y2="10" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A371F7"/>
        <stop offset="1" stopColor="#A371F7" stopOpacity="0"/>
      </linearGradient>
      <linearGradient id="crypto-paint2-1" x1="16" y1="18" x2="16" y2="26" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A371F7"/>
        <stop offset="1" stopColor="#A371F7" stopOpacity="0.7"/>
      </linearGradient>
    </defs>
  </svg>
);

export const CryptoFeatureIcon02 = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    {/* Pulse wave with upward trend */}
    <path d="M4 20L8 16L12 22L16 10L20 18L24 14L28 20" stroke="url(#crypto-paint0-2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M28 20V12L24 8L28 4" stroke="url(#crypto-paint1-2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="crypto-paint0-2" x1="16" y1="10" x2="16" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A371F7"/>
        <stop offset="0.744792" stopColor="#A371F7" stopOpacity="0.8"/>
        <stop offset="1" stopColor="#A371F7" stopOpacity="0.4"/>
      </linearGradient>
      <linearGradient id="crypto-paint1-2" x1="26" y1="4" x2="26" y2="20" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A371F7"/>
        <stop offset="1" stopColor="#A371F7" stopOpacity="0.6"/>
      </linearGradient>
    </defs>
  </svg>
);

export const CryptoFeatureIcon03 = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    {/* Eye with notification dot */}
    <path d="M16 10C12.7 10 9.8 12.2 8.5 15.5C9.8 18.8 12.7 21 16 21C19.3 21 22.2 18.8 23.5 15.5C22.2 12.2 19.3 10 16 10Z" stroke="url(#crypto-paint0-3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 18C17.1 18 18 17.1 18 16C18 14.9 17.1 14 16 14C14.9 14 14 14.9 14 16C14 17.1 14.9 18 16 18Z" fill="url(#crypto-paint1-3)"/>
    <path d="M28 16C28 22.6 22.6 28 16 28C9.4 28 4 22.6 4 16C4 9.4 9.4 4 16 4C22.6 4 28 9.4 28 16Z" stroke="url(#crypto-paint2-3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="24" cy="8" r="3" fill="url(#crypto-paint3-3)"/>
    <defs>
      <linearGradient id="crypto-paint0-3" x1="16" y1="10" x2="16" y2="21" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A371F7"/>
        <stop offset="1" stopColor="#A371F7" stopOpacity="0.5"/>
      </linearGradient>
      <linearGradient id="crypto-paint1-3" x1="16" y1="14" x2="16" y2="18" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A371F7"/>
        <stop offset="1" stopColor="#A371F7" stopOpacity="0.8"/>
      </linearGradient>
      <linearGradient id="crypto-paint2-3" x1="16" y1="4" x2="16" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A371F7"/>
        <stop offset="0.744792" stopColor="#A371F7" stopOpacity="0.8"/>
        <stop offset="1" stopColor="#A371F7" stopOpacity="0.4"/>
      </linearGradient>
      <linearGradient id="crypto-paint3-3" x1="24" y1="5" x2="24" y2="11" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A371F7"/>
        <stop offset="1" stopColor="#A371F7" stopOpacity="0.7"/>
      </linearGradient>
    </defs>
  </svg>
);

export const CryptoFeatureIcon04 = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    {/* Calendar with clock */}
    <rect x="6" y="8" width="20" height="18" rx="2" stroke="url(#crypto-paint0-4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 14H26" stroke="url(#crypto-paint1-4)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 6V10" stroke="url(#crypto-paint2-4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 6V10" stroke="url(#crypto-paint3-4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="16" cy="20" r="5" stroke="url(#crypto-paint4-4)" strokeWidth="2"/>
    <path d="M16 18V20L18 22" stroke="url(#crypto-paint5-4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="crypto-paint0-4" x1="16" y1="8" x2="16" y2="26" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A371F7"/>
        <stop offset="0.744792" stopColor="#A371F7" stopOpacity="0.8"/>
        <stop offset="1" stopColor="#A371F7" stopOpacity="0.4"/>
      </linearGradient>
      <linearGradient id="crypto-paint1-4" x1="16" y1="14" x2="16" y2="14" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A371F7"/>
        <stop offset="1" stopColor="#A371F7" stopOpacity="0.5"/>
      </linearGradient>
      <linearGradient id="crypto-paint2-4" x1="12" y1="6" x2="12" y2="10" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A371F7"/>
        <stop offset="1" stopColor="#A371F7" stopOpacity="0.6"/>
      </linearGradient>
      <linearGradient id="crypto-paint3-4" x1="20" y1="6" x2="20" y2="10" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A371F7"/>
        <stop offset="1" stopColor="#A371F7" stopOpacity="0.6"/>
      </linearGradient>
      <linearGradient id="crypto-paint4-4" x1="16" y1="15" x2="16" y2="25" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A371F7"/>
        <stop offset="1" stopColor="#A371F7" stopOpacity="0.5"/>
      </linearGradient>
      <linearGradient id="crypto-paint5-4" x1="17" y1="18" x2="17" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A371F7"/>
        <stop offset="1" stopColor="#A371F7" stopOpacity="0.7"/>
      </linearGradient>
    </defs>
  </svg>
);

export const CryptoFeatureIcon05 = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    {/* Shield with checkmark */}
    <path d="M16 4L6 8V16C6 21.55 9.24 26.74 14.25 28.55C14.58 28.66 14.92 28.66 15.25 28.55C20.26 26.74 23.5 21.55 23.5 16V8L16 4Z" fill="url(#crypto-paint0-5)"/>
    <path d="M13 16L15 18L19 14" stroke="url(#crypto-paint1-5)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="crypto-paint0-5" x1="14.75" y1="4" x2="14.75" y2="28.55" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A371F7"/>
        <stop offset="0.744792" stopColor="#A371F7" stopOpacity="0.8"/>
        <stop offset="1" stopColor="#A371F7" stopOpacity="0.4"/>
      </linearGradient>
      <linearGradient id="crypto-paint1-5" x1="16" y1="14" x2="16" y2="18" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A371F7"/>
        <stop offset="1" stopColor="#A371F7" stopOpacity="0.8"/>
      </linearGradient>
    </defs>
  </svg>
);

export const CryptoFeatureIcon06 = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    {/* Chat bubble with sparkle */}
    <path d="M8 8C6.9 8 6 8.9 6 10V18C6 19.1 6.9 20 8 20H10L14 24V20H22C23.1 20 24 19.1 24 18V10C24 8.9 23.1 8 22 8H8Z" fill="url(#crypto-paint0-6)"/>
    <path d="M20 14C20 14.55 19.55 15 19 15C18.45 15 18 14.55 18 14C18 13.45 18.45 13 19 13C19.55 13 20 13.45 20 14Z" fill="url(#crypto-paint1-6)"/>
    <path d="M26 6L28 8L30 6L28 4L26 6Z" fill="url(#crypto-paint2-6)"/>
    <path d="M26 20L27 22L29 20L27 18L26 20Z" fill="url(#crypto-paint3-6)"/>
    <defs>
      <linearGradient id="crypto-paint0-6" x1="15" y1="8" x2="15" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A371F7"/>
        <stop offset="0.744792" stopColor="#A371F7" stopOpacity="0.8"/>
        <stop offset="1" stopColor="#A371F7" stopOpacity="0.4"/>
      </linearGradient>
      <linearGradient id="crypto-paint1-6" x1="19" y1="13" x2="19" y2="15" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A371F7"/>
        <stop offset="1" stopColor="#A371F7" stopOpacity="0.8"/>
      </linearGradient>
      <linearGradient id="crypto-paint2-6" x1="28" y1="4" x2="28" y2="8" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A371F7"/>
        <stop offset="1" stopColor="#A371F7" stopOpacity="0.7"/>
      </linearGradient>
      <linearGradient id="crypto-paint3-6" x1="27.5" y1="18" x2="27.5" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A371F7"/>
        <stop offset="1" stopColor="#A371F7" stopOpacity="0.7"/>
      </linearGradient>
    </defs>
  </svg>
);

// Crypto icon components array for easy mapping
export const cryptoFeatureIcons = [
  CryptoFeatureIcon01,
  CryptoFeatureIcon02,
  CryptoFeatureIcon03,
  CryptoFeatureIcon04,
  CryptoFeatureIcon05,
  CryptoFeatureIcon06,
];

