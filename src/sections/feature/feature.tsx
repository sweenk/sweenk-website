import React, { FC } from "react";
import { FeaturesSectionProps } from "./feature.type";

export const FeaturesSection: FC<FeaturesSectionProps> = ({
  subtitle,
  title,
  description,
  features,
}) => {
  return (
    <section
      id="features"
      className="overflow-hidden pt-17.5 lg:pt-22.5 xl:pt-27.5 scroll-mt-17 bg-white relative z-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 xl:px-0">
        {/* Section Title */}
        <div className="wow fadeInUp text-center">
          <span className="hero-subtitle-gradient relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-4.5 rounded-full">
            <img src="./images/hero/icon-title.svg" alt="icon" />
            <span className="hero-subtitle-text">{subtitle}</span>
          </span>
          <h2 className="text-gray-900 mb-4.5 text-2xl font-extrabold sm:text-4xl xl:text-heading-2">
            {title}
          </h2>
          <p className="max-w-[714px] mx-auto mb-5 font-medium">
            {description}
          </p>
        </div>

        {/* Features Boxes */}
        <div className="relative">
          {features.map(
            (feature, index) =>
              // Start a new row for every 3 features
              index % 3 === 0 && (
                <React.Fragment key={index}>
                  <div className="flex flex-wrap justify-center">
                    {/* Render 3 features or less if it's the last row */}
                    {features
                      .slice(index, index + 3)
                      .map((innerFeature, innerIndex) => (
                        <div
                          key={innerIndex}
                          className="w-full sm:w-1/2 lg:w-1/3 px-4"
                        >
                          <div className="group relative overflow-hidden text-center py-8 sm:py-10 xl:py-15">
                            <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1"></span>
                            <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                              <img src={innerFeature.icon} alt="icon" />
                            </span>
                            <h4 className="font-semibold text-lg text-gray-900 mb-4">
                              {innerFeature.title}
                            </h4>
                            <p className="font-medium">
                              {innerFeature.description}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                  {/* Insert separator if it's not the last row */}
                  {index + 3 < features.length && (
                    <div className="features-row-border w-full h-[1px]"></div>
                  )}
                </React.Fragment>
              )
          )}
        </div>
      </div>
    </section>
  );
};
