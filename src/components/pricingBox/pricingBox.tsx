import React, { FC } from "react";
import { PricingBoxProperties } from "./pricingBox.type";

export const PricingBox: FC<PricingBoxProperties> = ({
  planName,
  price,
  features,
  buttonText,
  buttonAction,
}) => (
  <div className="wow fadeInUp rounded-3xl bg-dark relative z-20 overflow-hidden pt-12.5 pb-10 px-8 xl:px-10 pricing-item-border">
    <span className="absolute right-9 top-9">
      <img src="./images/pricing/pricing-icon-02.svg" alt="icon" />
    </span>

    <h3 className="font-semibold text-heading-6 text-white mb-5.5">
      {planName}
    </h3>

    <div className="flex items-center gap-3.5">
      <h2 className="font-bold text-custom-1 pricing-gradient-text">{price}</h2>

      <p className="font-medium">
        /month <br />
        (billed annually)
      </p>
    </div>

    <div className="my-10 w-full h-[1px] pricing-gradient-divider"></div>

    <ul className="flex flex-col gap-4">
      {features.map((description) => (
        <li key={description} className="flex items-center gap-5">
          <img src="./images/pricing/pricing-icon-04.svg" alt="icon" />
          <span className="font-medium">{description}</span>
        </li>
      ))}
    </ul>

    <a
      href="/#"
      onClick={(e) => {
        e.preventDefault();
        buttonAction();
      }}
      className="mt-11 flex items-center justify-center gap-1.5 font-medium text-white p-3 rounded-lg transition-all ease-in-out duration-300 relative pricing-button-gradient hover:shadow-button"
    >
      {buttonText}
      <svg
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.8992 7.5999L9.72422 2.3499C9.49922 2.1249 9.14922 2.1249 8.92422 2.3499C8.69922 2.5749 8.69922 2.9249 8.92422 3.1499L13.1242 7.4249H2.49922C2.19922 7.4249 1.94922 7.6749 1.94922 7.9749C1.94922 8.2749 2.19922 8.5499 2.49922 8.5499H13.1742L8.92422 12.8749C8.69922 13.0999 8.69922 13.4499 8.92422 13.6749C9.02422 13.7749 9.17422 13.8249 9.32422 13.8249C9.47422 13.8249 9.62422 13.7749 9.72422 13.6499L14.8992 8.3999C15.1242 8.1749 15.1242 7.8249 14.8992 7.5999Z"
          fill="white"
        />
      </svg>
    </a>

    <p className="mt-4 text-sm text-center">No extra hidden charge</p>

    <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
      <span className="absolute left-0 bottom-0 -z-1">
        <img
          src="./images/blur/blur-16.svg"
          alt="blur"
          className="max-w-none"
        />
      </span>
      <span className="absolute left-0 top-0 -z-1">
        <img
          src="./images/blur/blur-17.svg"
          alt="blur"
          className="max-w-none"
        />
      </span>
    </div>
  </div>
);
