import React, { useState } from "react";
import Logo from "@/assets/images/logo/logo.svg";
import Image from "next/image";

export const Header: React.FC = () => {
  const [stickyMenu, setStickyMenu] = useState(false);
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  // You might want to use a useState for page if its value changes dynamically

  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [page, setPage] = React.useState("");

  const handleScroll = () => {
    setStickyMenu(window.scrollY > 0);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { href: "/#home", label: "Home", activePage: "home" },
    { href: "/#features", label: "Features" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/#support", label: "Support" },
  ];

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
            <img src={Logo} alt="Logo" />
          </a>

          <button
            className="lg:hidden block"
            onClick={() => setNavigationOpen((prevState) => !prevState)}
          >
            <span className="block relative cursor-pointer w-5.5 h-5.5">
              <span className="du-block absolute right-0 w-full h-full">
                <span
                  className={`block relative top-0 left-0 bg-white rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-[0] ${
                    !navigationOpen ? "!w-full delay-300" : ""
                  }`}
                ></span>
                <span
                  className={`block relative top-0 left-0 bg-white rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-150 ${
                    !navigationOpen ? "!w-full delay-400" : ""
                  }`}
                ></span>
                <span
                  className={`block relative top-0 left-0 bg-white rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-200 ${
                    !navigationOpen ? "!w-full delay-500" : ""
                  }`}
                ></span>
              </span>
              <span className="du-block absolute right-0 w-full h-full rotate-45">
                <span
                  className={`block bg-white rounded-sm ease-in-out duration-200 delay-300 absolute left-2.5 top-0 w-0.5 h-full ${
                    !navigationOpen ? "!h-0 delay-[0]" : ""
                  }`}
                ></span>
                <span
                  className={`block bg-white rounded-sm ease-in-out duration-200 delay-400 absolute left-0 top-2.5 w-full h-0.5 ${
                    !navigationOpen ? "!h-0 delay-200" : ""
                  }`}
                ></span>
              </span>
            </span>
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
          <nav>
            <ul className="flex lg:items-center flex-col lg:flex-row gap-5 lg:gap-2">
              {menuItems.map((item, index) => (
                <li key={index} className="nav__menu lg:py-7">
                  <a
                    href={item.href}
                    className={`relative text-white/80 text-sm py-1.5 px-4 border border-transparent hover:text-white hover:nav-gradient 
            ${page === item.activePage ? "!text-white nav-gradient" : ""}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

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
