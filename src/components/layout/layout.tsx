import React, { FC, ReactNode } from "react";

type LayoutProps = {
  title: string;
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ title, children }) => {
  return (
    <main className="bg-gray-50">
      {/* Content Section with Light Gray Background */}
      <section className="pt-20 lg:pt-24 xl:pt-28 pb-17.5 lg:pb-22.5 xl:pb-27.5 bg-gray-50">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
          <div className="max-w-[870px] mx-auto bg-white rounded-2xl shadow-lg p-8 lg:p-12 text-gray-800">
            <h1 className="font-bold text-heading-3 text-primary mb-8">
              {title}
            </h1>
            <div className="legal-content">
              {children}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
