import React, { FC, ReactElement } from "react";

export interface FeatureCardProps {
  icon: string | ReactElement;
  title: string;
  description: string;
  comingSoon?: boolean;
  alt?: string;
}

export const FeatureCard: FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  comingSoon = false,
  alt,
}) => {
  // Check if icon is a React component or a string path
  const isReactComponent = React.isValidElement(icon);

  return (
    <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 relative">
      {/* Coming Soon Label */}
      {comingSoon && (
        <span className="absolute top-4 right-4 bg-gray-100 text-gray-500 text-xs font-normal px-3 py-1 rounded-full">
          Coming Soon
        </span>
      )}

      {/* Icon - Support both SVG components and image paths */}
      <div className="flex justify-center mb-6 transform transition-transform group-hover:scale-110">
        {isReactComponent ? (
          icon
        ) : (
          <img
            src={icon as string}
            alt={alt || title}
            className="w-8 h-8"
            width="32"
            height="32"
            style={{ display: "block" }}
          />
        )}
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed text-center">{description}</p>
    </div>
  );
};
