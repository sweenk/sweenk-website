export interface PricingBoxProperties {
  planName: string;
  price: string;
  features: string[];
  buttonText: string;
  buttonAction?: () => void;
}
