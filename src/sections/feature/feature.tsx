import React, { FC } from "react";
import { FeaturesSectionProps } from "./feature.type";

// Clean icon component - just the SVG
const FeatureIcon: FC<{ index: number }> = ({ index }) => {
  const icons = [
    // Personalized Topics - Target/bullseye icon
    <svg className="w-8 h-8 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0M12 12m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0M12 12l0 .01" />
    </svg>,
    // Tailored Content - Pen/quill writing tool
    <svg className="w-8 h-8 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    </svg>,
    // Conversational - Speech bubbles
    <svg className="w-8 h-8 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>,
    // Smart Timing - Notification bell
    <svg className="w-8 h-8 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>,
    // Daily/Weekly Podcast - Microphone icon
    <svg className="w-8 h-8 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
    </svg>,
    // Social Media Trends - Trending up icon
    <svg className="w-8 h-8 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>,
  ];

  return icons[index % icons.length];
};

export const FeaturesSection: FC<FeaturesSectionProps> = ({
  subtitle,
  title,
  description,
  features,
}) => {
  return (
    <section
      id="features"
      className="py-20 lg:py-24 bg-gray-50 relative z-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 xl:px-0">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#A371F7' }}>
            Introducing Sweenk
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Imagine having a personal AI assistant that effortlessly collects, summarizes, and personalizes the most important news.
          </p>
        </div>

        {/* Features Grid - Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 relative"
            >
              {/* Coming Soon Label */}
              {feature.comingSoon && (
                <span className="absolute top-4 right-4 bg-purple-100 text-purple-700 text-xs font-semibold px-2 py-1 rounded-full">
                  Coming Soon
                </span>
              )}
              
              {/* Icon - Plain, no wrapper */}
              <div className="flex justify-center mb-6 transform transition-transform group-hover:scale-110">
                <FeatureIcon index={index} />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center group-hover:text-purple-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
