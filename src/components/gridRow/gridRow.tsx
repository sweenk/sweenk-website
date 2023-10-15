import React from "react";

const PricingGrid: React.FC = () => (
  <div className="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border"></div>
);

export const GridRow: React.FC = () => (
  <div className="flex justify-center gap-7.5 relative -z-1">
    <PricingGrid />
    <PricingGrid />
    <PricingGrid />
    <PricingGrid />
    <PricingGrid />
    <PricingGrid />
    <PricingGrid />
    <PricingGrid />
  </div>
);
