import React, { FC, ReactNode } from "react";

type LayoutProps = {
  title: string;
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ title, children }) => {
  return (
    <main>
      {/* Breadcrumb Section Start */}
      <section className="relative z-10 pt-30 lg:pt-35 xl:pt-40 pb-18">
        {/* bg shapes */}
        <div className="absolute top-25 left-0 w-full flex flex-col gap-3 -z-1 opacity-50">
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
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-dark/0 to-dark -z-1"></div>

        <div className="text-center px-4">
          <h1 className="font-extrabold text-heading-2 text-white mb-5.5">
            {title}
          </h1>
        </div>
      </section>
      {/* Breadcrumb Section End */}

      <section className="pb-17.5 lg:pb-22.5 xl:pb-27.5">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
          <div className="max-w-[870px] mx-auto">{children}</div>
        </div>
      </section>
    </main>
  );
};
