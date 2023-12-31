import { Circles } from "@/components/circles/circles";
import { GridRow } from "@/components/gridRow/gridRow";
import { PricingBox } from "@/components/pricingBox/pricingBox";
import React from "react";

interface PricingProps {}

export const Pricing: React.FC<PricingProps> = () => {
  return (
    <section
      id="pricing"
      className="relative z-20 overflow-hidden pt-22.5 lg:pt-27.5 xl:pt-32.5 scroll-mt-17"
    >
      <Circles />
      <GridRow />

      <div className="max-w-[800px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="wow fadeInUp mb-17.5 -mt-24 text-center z-10 relative">
          <span className="hero-subtitle-gradient relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-4.5 rounded-full">
            <img src="./images/hero/icon-title.svg" alt="icon" />

            <span className="hero-subtitle-text"> Get access </span>
          </span>
          <h2 className="text-white mb-4.5 text-2xl font-extrabold sm:text-4xl xl:text-heading-2">
            Our Pricing Plan
          </h2>
          <p className="max-w-[714px] mx-auto font-medium">
            Our AI writing tool is designed to empower you with exceptional
            writing capabilities, making the writing process more efficient,
            accurate, and enjoyable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2  gap-15">
          <PricingBox
            pricingIcon="./images/pricing/pricing-icon-01.svg"
            planName="Basic"
            price={0}
            features={[
              "Unlimited News Titles",
              "5 Daily Questions",
              "Live News Access",
              "Personalized Feed",
            ]}
            buttonText="Download App Now"
            buttonAction={() => {
              console.log("Basic plan chosen");
            }}
          />
          <PricingBox
            pricingIcon="./images/pricing/pricing-icon-02.svg"
            planName="Premium"
            price={9.99}
            features={[
              "Everything the Basic Plan Has",
              "Unlimited Daily Questions",
              "Voice Query & Reading",
              "Early Access to New Features",
            ]}
            buttonText="Download App Now"
            buttonAction={() => {
              console.log("Premium plan chosen");
            }}
          />
        </div>
      </div>
    </section>
  );
};
