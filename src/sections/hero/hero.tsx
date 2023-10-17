import { AppStore, GooglePlay } from "@/components";
import React from "react";

interface HeroProps {}

export const HeroSection: React.FC<HeroProps> = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden z-10 pt-35 md:pt-40 xl:pt-45"
    >
      {/* Hero Bg Shapes */}
      <div className="max-w-7xl mx-auto">
        <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden -mx-28">
          <div className="absolute -z-1 -top-[128%] sm:-top-[107%] xl:-top-[73%] left-1/2 -translate-x-1/2 -u-z-10 hero-circle-gradient w-full h-[1282px] rounded-full max-w-[1282px]"></div>
          <div className="absolute -z-1 -top-[112%] sm:-top-[93%] xl:-top-[62%] left-1/2 -translate-x-1/2 -u-z-10 hero-circle-gradient w-full h-[1046px] rounded-full max-w-[1046px]"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -u-z-10">
            <img
              src="./images/blur/blur-02.svg"
              alt="blur"
              className="max-w-none"
            />
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -u-z-10">
            <img
              src="./images/blur/blur-01.svg"
              alt="blur"
              className="max-w-none"
            />
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="mx-auto max-w-[900px] px-4 sm:px-8 xl:px-0 relative z-1">
        <div className="text-center">
          <h1 className="text-white mb-6 text-3xl font-extrabold sm:text-5xl xl:text-heading-1">
            Welcome to Sweenk: Your Personalized{" "}
            <span className="gradient-text">AI News</span> Assistant
          </h1>
          <p className="max-w-[500px] mx-auto mb-9 font-medium md:text-lg">
            Experience a Cutting-Edge, AI-Driven News Feed that Curates Content
            Aligned with Your Interests, Ensuring You Stay Informed Without the
            Clutter.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-8 mb-9">
            <AppStore url="https://apple.com" />
            <GooglePlay url="https://google.com" />
          </div>
        </div>
      </div>
    </section>
  );
};
