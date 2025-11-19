import { FeatureCard } from "@/components/featureCard/featureCard";
import { featureIcons } from "@/components/featureIcons/featureIcons";
import { FC } from "react";
import { FeaturesSectionProps } from "./feature.type";

export const FeaturesSection: FC<FeaturesSectionProps> = ({
  subtitle,
  title,
  description,
  features,
}) => {
  return (
    <section id="features" className="py-20 lg:py-24 bg-gray-50 relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 xl:px-0">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "#A371F7" }}
          >
            Introducing Sweenk
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Imagine having a personal AI assistant that effortlessly collects,
            summarizes, and personalizes the most important news.
          </p>
        </div>

        {/* Features Grid - Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            // Use inline SVG component if icon is a string path (for main hero)
            // Otherwise use the provided icon (could be SVG component or path)
            const IconComponent =
              typeof feature.icon === "string" &&
              feature.icon.includes("/images/features/icon-")
                ? featureIcons[index % featureIcons.length]
                : null;

            const iconToUse = IconComponent ? <IconComponent /> : feature.icon;

            return (
              <FeatureCard
                key={index}
                icon={iconToUse}
                title={feature.title}
                description={feature.description}
                comingSoon={feature.comingSoon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
