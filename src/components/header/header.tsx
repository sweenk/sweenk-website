import React, { useState } from "react";
import Logo from "@/assets/images/logo/logo.svg";
import Image from "next/image";

export const Header: React.FC = () => {
  const [stickyMenu, setStickyMenu] = useState(false);
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  // You might want to use a useState for page if its value changes dynamically

  const handleScroll = () => {
    setStickyMenu(window.scrollY > 0);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 w-full z-9999 py-7 lg:py-0 ${
        stickyMenu
          ? "bg-dark/70 backdrop-blur-lg shadow !py-4 lg:!py-0 transition duration-100 before:absolute before:w-full before:h-[1px] before:bottom-0 before:left-0 before:features-row-border"
          : ""
      }`}
    >
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0 lg:flex items-center justify-between relative">
        {/* Logo and Hamburger Btn */}
        <div className="w-full lg:w-1/4 flex items-center justify-between">
          <a href="index.html">
            <Image src={Logo} alt="Logo" />
          </a>
          <button
            className="lg:hidden block"
            onClick={() => setNavigationOpen((prevState) => !prevState)}
          >
            {/* Hamburger Icon code (Update as per your need) */}
          </button>
        </div>

        {/* Navigation */}
        <div
          className={`w-full lg:w-3/4 h-0 lg:h-auto invisible lg:visible lg:flex items-center justify-between ${
            navigationOpen
              ? "!visible bg-dark shadow-lg relative !h-auto max-h-[400px] overflow-y-scroll rounded-md mt-4 p-7.5"
              : ""
          }`}
        >
          <nav>{/* Navigation Links */}</nav>

          {/* Signin / Signup */}
          <div className="flex items-center gap-6 mt-7 lg:mt-0">
            <a
              href="signin.html"
              className="text-white text-sm hover:text-opacity-75"
            >
              Sign in
            </a>
            <a
              href="signup.html"
              className="button-border-gradient relative rounded-lg text-white text-sm flex items-center gap-1.5 py-2 px-4.5 shadow-button hover:button-gradient-hover hover:shadow-none"
            >
              Sign up
              {/* SVG */}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
