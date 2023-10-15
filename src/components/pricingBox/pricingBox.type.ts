export interface PricingBoxProperties {
  planName: string;
  price: number;
  features: string[];
  buttonText: string;
  buttonAction?: () => void;
}
