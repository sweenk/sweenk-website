export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface FeaturesSectionProps {
  subtitle: string;
  title: string;
  description: string;
  features: Feature[];
}
