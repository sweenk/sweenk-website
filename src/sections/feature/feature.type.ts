import { ReactElement } from "react";

export interface Feature {
  icon: string | ReactElement;
  title: string;
  description: string;
  comingSoon?: boolean;
}

export interface FeaturesSectionProps {
  subtitle: string;
  title: string;
  description: string;
  features: Feature[];
}
