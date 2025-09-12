import { AppStore, GooglePlay } from "@/components";
import React from "react";

interface HeroProps {}

export const HeroSection: React.FC<HeroProps> = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden z-10 pt-20 sm:pt-28 md:pt-35 lg:pt-40 xl:pt-45 pb-16 md:pb-20"
    >

      {/* Hero Content */}
      <div className="mx-auto max-w-6xl px-4 sm:px-8 xl:px-0 relative z-1">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="mb-4 sm:mb-6 text-2xl font-extrabold sm:text-3xl md:text-4xl lg:text-5xl xl:text-heading-1" style={{ color: '#000000' }}>
              Your Personalized{" "}
              <span className="hero-gradient-text">AI News</span> Assistant
            </h1>
            <p className="max-w-[500px] mx-auto lg:mx-0 mb-6 sm:mb-8 lg:mb-9 text-sm sm:text-base font-medium md:text-lg px-4 sm:px-0" style={{ color: '#000000' }}>
              Cut through the noise. Sweenk intelligently collects, summarizes, and 
              delivers personalized news updates—giving you only what matters in a 
              fraction of the time.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-start justify-center lg:justify-start gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 lg:mb-9 w-full sm:w-auto">
              <AppStore url="https://apps.apple.com/us/app/sweenk/id6463353960" />
              <GooglePlay url="https://play.google.com/store/apps/details?id=com.sweenk.app" />
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2 w-full lg:w-auto">
            {/* Phone Frame Mockup */}
            <div 
              className="relative w-[260px] h-[520px] sm:w-[280px] sm:h-[560px] md:w-[320px] md:h-[640px]"
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '40px',
                padding: '10px',
                boxShadow: '0 20px 40px -15px rgba(50, 50, 93, 0.15), 0 10px 20px -10px rgba(0, 0, 0, 0.15)',
                backdropFilter: 'blur(20px)',
              }}
            >
              {/* Phone Screen */}
              <div 
                className="w-full h-full overflow-hidden relative"
                style={{
                  background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)',
                  borderRadius: '30px',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                }}
              >
                {/* News Content with Horizontal Scroll */}
                <div className="relative w-full h-full">
                  {/* Scrolling Container */}
                  <div 
                    className="flex animate-scroll-news h-full"
                    style={{
                      animation: 'scrollNews 9s ease-in-out infinite',
                    }}
                  >
                    {/* News Item 1 */}
                    <div className="flex-shrink-0 w-full h-full flex flex-col">
                      <img 
                        src="https://picsum.photos/320/240?random=1" 
                        alt="AI Technology"
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="text-xs text-gray-500 mb-2">BBC News</div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          AI Revolution: How Machine Learning is Transforming Industries
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-3 flex-1">
                          Recent breakthroughs in artificial intelligence are reshaping how businesses operate, 
                          with companies reporting unprecedented efficiency gains...
                        </p>
                      </div>
                    </div>

                    {/* News Item 2 */}
                    <div className="flex-shrink-0 w-full h-full flex flex-col">
                      <img 
                        src="https://picsum.photos/320/240?random=2" 
                        alt="Startup Office"
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="text-xs text-gray-500 mb-2">TechCrunch</div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          Startup Ecosystem Thrives Despite Economic Headwinds
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-3 flex-1">
                          Venture capital firms continue to invest in promising startups, 
                          focusing on sustainability and AI-driven solutions...
                        </p>
                      </div>
                    </div>

                    {/* News Item 3 */}
                    <div className="flex-shrink-0 w-full h-full flex flex-col">
                      <img 
                        src="https://picsum.photos/320/240?random=3" 
                        alt="Climate Technology"
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="text-xs text-gray-500 mb-2">The Guardian</div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          Climate Innovation: New Technologies Show Promise
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-3 flex-1">
                          Scientists unveil groundbreaking carbon capture technology that could 
                          revolutionize the fight against climate change...
                        </p>
                      </div>
                    </div>

                    {/* Duplicate first item for seamless loop */}
                    <div className="flex-shrink-0 w-full h-full flex flex-col">
                      <img 
                        src="https://picsum.photos/320/240?random=1" 
                        alt="AI Technology"
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="text-xs text-gray-500 mb-2">BBC News</div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          AI Revolution: How Machine Learning is Transforming Industries
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-3 flex-1">
                          Recent breakthroughs in artificial intelligence are reshaping how businesses operate, 
                          with companies reporting unprecedented efficiency gains...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Fixed Input at Bottom */}
                <div className="absolute bottom-0 left-0 w-full z-10 px-4 pb-4">
                  <img 
                    src="/images/mobile/input.svg" 
                    alt="Input"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gray Background Angle - Only visible on lg and above */}
      <div 
        className="hidden lg:block absolute bg-gray-50 pointer-events-none"
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
