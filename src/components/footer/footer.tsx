import { FC } from "react";
const navLinks = {
  products: ["Features", "Integrations", "Pricing", "Changelog", "Roadmap"],
  company: ["Privacy Policy", "Refund Policy", "Support", "Community"],
  support: ["Features", "Integrations", "Pricing", "Changelog", "Roadmap"],
};

const renderNavLinks = (links: string[]) => {
  return links.map((link, index) => (
    <li key={index}>
      <a
        href="/#"
        className="font-medium ease-in duration-300 hover:text-white"
      >
        {link}
      </a>
    </li>
  ));
};

export const Footer: FC = () => {
  return (
    <footer className="relative z-10 pb-17.5 lg:pb-22.5 xl:pb-27.5">
      <div className="absolute bottom-0 left-0 w-full flex flex-col gap-3 -z-1 opacity-50">
        <div className="w-full h-[1.24px] footer-bg-gradient"></div>
        <div className="w-full h-[2.47px] footer-bg-gradient"></div>
        <div className="w-full h-[3.71px] footer-bg-gradient"></div>
        <div className="w-full h-[4.99px] footer-bg-gradient"></div>
        <div className="w-full h-[6.19px] footer-bg-gradient"></div>
        <div className="w-full h-[7.42px] footer-bg-gradient"></div>
        <div className="w-full h-[8.66px] footer-bg-gradient"></div>
        <div className="w-full h-[9.90px] footer-bg-gradient"></div>
        <div className="w-full h-[13px] footer-bg-gradient"></div>
      </div>

      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0 relative pt-17.5">
        <div className="w-full h-[1px] footer-divider-gradient absolute top-0 left-0"></div>

        <div className="flex flex-wrap justify-between">
          <div className="mb-10 max-w-[571px] w-full">
            <a className="mb-8.5 inline-block" href="index.html">
              <img
                src="images/logo/logo.svg"
                alt="Logo"
                width={80}
                height={80}
              />
            </a>

            {/* More code ... same as provided HTML */}

            <p className="font-medium mt-5.5">
              AI Tool, LLC. All rights reserved.
            </p>
          </div>

          <div className="max-w-[571px] w-full">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-10">
              <div>
                <h5 className="font-semibold text-white mb-5">Products</h5>
                <ul className="flex flex-col gap-3.5">
                  {renderNavLinks(navLinks.products)}
                </ul>
              </div>

              <div>
                <h5 className="font-semibold text-white mb-5">Company</h5>
                <ul className="flex flex-col gap-3.5">
                  {renderNavLinks(navLinks.company)}
                </ul>
              </div>

              <div>
                <h5 className="font-semibold text-white mb-5">Support</h5>
                <ul className="flex flex-col gap-3.5">
                  {renderNavLinks(navLinks.support)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
