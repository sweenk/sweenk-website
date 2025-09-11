import { AppStore, GooglePlay } from "@/components";
import React from "react";

interface HeroProps {}

export const HeroSection: React.FC<HeroProps> = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden z-10 pt-35 md:pt-40 xl:pt-45 pb-20"
    >

      {/* Hero Content */}
      <div className="mx-auto max-w-6xl px-4 sm:px-8 xl:px-0 relative z-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h1 className="mb-6 text-3xl font-extrabold sm:text-5xl xl:text-heading-1" style={{ color: '#000000' }}>
              Welcome to Sweenk: Your Personalized{" "}
              <span className="hero-gradient-text">AI News</span> Assistant
            </h1>
            <p className="max-w-[500px] mb-9 font-medium md:text-lg" style={{ color: '#000000' }}>
              Experience a Cutting-Edge, AI-Driven News Feed that Curates Content
              Aligned with Your Interests, Ensuring You Stay Informed Without the
              Clutter.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-8 mb-9">
              <AppStore url="https://apps.apple.com/us/app/sweenk/id6463353960" />
              <GooglePlay url="https://play.google.com/store/apps/details?id=com.sweenk.app" />
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            {/* Phone Frame Mockup */}
            <div 
              className="relative"
              style={{
                width: '320px',
                height: '640px',
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '40px',
                padding: '10px',
                boxShadow: '0 50px 100px -20px rgba(50, 50, 93, 0.15), 0 30px 60px -30px rgba(0, 0, 0, 0.15), 0 0 120px rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(20px)',
              }}
            >
              {/* Phone Screen */}
              <div 
                className="w-full h-full"
                style={{
                  background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)',
                  borderRadius: '30px',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                }}
              >
                {/* Notch */}
                <div 
                  className="mx-auto"
                  style={{
                    width: '150px',
                    height: '30px',
                    background: 'white',
                    borderRadius: '0 0 20px 20px',
                    marginTop: '-1px',
                  }}
                />
                {/* Content placeholder */}
                <div className="p-6 pt-4">
                  {/* Will add content later */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* White Background Angle */}
      <div 
        className="absolute bg-white pointer-events-none"
        style={{
          bottom: '-50%',
          left: '-20%',
          width: '140%',
          height: '50%',
          transform: 'skewY(-4deg)',
          transformOrigin: 'left bottom',
        }}
      />
    </section>
  );
};
