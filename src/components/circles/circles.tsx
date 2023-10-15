import React from "react";

interface BlurImageProps {
  src: string;
  alt: string;
}

const BlurImage: React.FC<BlurImageProps> = ({ src, alt }) => (
  <div className="absolute left-1/2 -translate-x-1/2 top-0">
    <img src={src} alt={alt} className="max-w-none" />
  </div>
);

export const Circles: React.FC = () => (
  <div className="relative top-18">
    <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden -my-55">
      <BlurImage src="./images/blur/blur-13.svg" alt="blur" />
      <BlurImage src="./images/blur/blur-14.svg" alt="blur" />
      <BlurImage src="./images/blur/blur-15.svg" alt="blur" />
    </div>

    <div className="max-w-[830px] w-full h-[830px] rounded-full bg-dark absolute left-1/2 -translate-x-1/2 top-0 pricing-circle"></div>

    <div className="max-w-[482px] w-full h-60 overflow-hidden absolute -z-1 -top-30 left-1/2 -translate-x-1/2">
      <div className="stars"></div>
      <div className="stars2"></div>
    </div>
  </div>
);
