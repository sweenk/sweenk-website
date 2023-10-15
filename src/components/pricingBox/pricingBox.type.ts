export interface PricingBoxProperties {
  pricingIcon: string;
  planName: string;
  price: number;
  features: string[];
  buttonText: string;
  buttonAction?: () => void;
}
