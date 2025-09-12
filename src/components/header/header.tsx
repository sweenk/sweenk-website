import React, { useState } from "react";
import { useRouter } from "next/router";

export const Header: React.FC = () => {
  const [stickyMenu, setStickyMenu] = useState(false);
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // You might want to use a useState for page if its value changes dynamically

  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [page, setPage] = React.useState("");
  const router = useRouter();
  const isInnerPage = router.pathname !== "/";

  const handleScroll = () => {
    const scrolled = window.scrollY > 20;
    setStickyMenu(scrolled);
    setIsScrolled(scrolled);
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
  ];

  return (
    <header
      className={`${isInnerPage ? 'relative' : 'fixed'} left-0 top-0 w-full z-9999 py-7 lg:py-0 transition-all duration-300 ${
        isInnerPage
          ? "bg-white !py-4 lg:!py-0"
          : isScrolled
          ? "bg-white shadow-lg !py-4 lg:!py-0"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 xl:px-0 lg:flex items-center justify-between relative">
        {/* Logo and Hamburger Btn */}
        <div className="w-full lg:w-1/4 flex items-center justify-between">
          <a href="/" className="relative w-32 h-10">
            <img 
              src="/images/logo/sweenk_logo_horizontal_monochrome.svg" 
              alt="Sweenk Logo" 
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${
                isInnerPage || isScrolled ? "opacity-0" : "opacity-100"
              }`}
            />
            <img 
              src="/images/logo/sweenk_logo_horizontal_colorful.svg" 
              alt="Sweenk Logo" 
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${
                isInnerPage || isScrolled ? "opacity-100" : "opacity-0"
              }`}
            />
          </a>

          <button
            className="lg:hidden block"
            onClick={() => setNavigationOpen((prevState) => !prevState)}
          >
            <span className="block relative cursor-pointer w-5.5 h-5.5">
              <span className="du-block absolute right-0 w-full h-full">
                <span
                  className={`block relative top-0 left-0 ${isInnerPage || isScrolled ? 'bg-gray-900' : 'bg-white'} rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-[0] ${
                    !navigationOpen ? "!w-full delay-300" : ""
                  }`}
                ></span>
                <span
                  className={`block relative top-0 left-0 ${isScrolled ? 'bg-gray-900' : 'bg-white'} rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-150 ${
                    !navigationOpen ? "!w-full delay-400" : ""
                  }`}
                ></span>
                <span
                  className={`block relative top-0 left-0 ${isScrolled ? 'bg-gray-900' : 'bg-white'} rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-200 ${
                    !navigationOpen ? "!w-full delay-500" : ""
                  }`}
                ></span>
              </span>
              <span className="du-block absolute right-0 w-full h-full rotate-45">
                <span
                  className={`block ${isInnerPage || isScrolled ? 'bg-gray-900' : 'bg-white'} rounded-sm ease-in-out duration-200 delay-300 absolute left-2.5 top-0 w-0.5 h-full ${
                    !navigationOpen ? "!h-0 delay-[0]" : ""
                  }`}
                ></span>
                <span
                  className={`block ${isInnerPage || isScrolled ? 'bg-gray-900' : 'bg-white'} rounded-sm ease-in-out duration-200 delay-400 absolute left-0 top-2.5 w-full h-0.5 ${
                    !navigationOpen ? "!h-0 delay-200" : ""
                  }`}
                ></span>
              </span>
            </span>
          </button>
        </div>

        {/* Navigation */}
        <div
          // rename justify-end to justify-between once you'll uncomment sign-in, sign-up
          className={`w-full lg:w-3/4 h-0 lg:h-auto invisible lg:visible lg:flex items-center justify-end ${
            navigationOpen
              ? `!visible ${isInnerPage || isScrolled ? 'bg-white' : 'bg-dark'} shadow-lg relative !h-auto max-h-[400px] overflow-y-scroll rounded-md mt-4 p-7.5`
              : ""
          }`}
        >
          <nav>
            <ul className="flex lg:items-center flex-col lg:flex-row gap-5 lg:gap-2">
              {menuItems.map((item, index) => (
                <li key={index} className="nav__menu lg:py-7">
                  <a
                    href={item.href}
                    className={`relative text-sm font-semibold py-1.5 px-4 border border-transparent transition-colors duration-300 ${
                      isInnerPage || isScrolled 
                        ? "text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg" 
                        : "text-white hover:text-white hover:nav-gradient"
                    } ${page === item.activePage ? (isInnerPage || isScrolled ? "!text-gray-900 bg-gray-100" : "!text-white nav-gradient") : ""}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Signin / Signup */}
          {/* <div className="flex items-center gap-6 mt-7 lg:mt-0">
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
            </a>
          </div> */}
        </div>
      </div>
    </header>
  );
};
