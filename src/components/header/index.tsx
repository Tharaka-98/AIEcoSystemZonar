"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import links from "@/constants/links";

interface NavItem {
  label: string;
  href: string;
}

const HeaderComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState("Home");

  const navItems: NavItem[] = [
    { label: "Home", href: "#" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "Live Demo", href: "#live-demo" },
    { label: "Our Solution", href: "#our-solution" },
    // { label: "Token Mining", href: "#" },
    // { label: "Project", href: "#" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavItemClick = (label: string, href: string) => {
    setSelectedNavItem(label);
    setIsMenuOpen(false);
    // Navigate to the href if needed
    window.location.href = href;
  };

  return (
    <header className=" container  mt-4 md:mt-10 ">
      <div className="w-full py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="" className="flex items-center">
              <div className="hidden md:block">
                <Image
                  src="/images/zonarlogo.png"
                  alt="Zonar Logo"
                  width={151}
                  height={61}
                  className="w-full no-select md:h-10 lg:h-12"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placeholder.com/100x40";
                  }}
                />
              </div>
              <div className="block md:hidden">
                <Image
                  src="/images/zonarlogosolo.png"
                  alt="Zonar Logo"
                  width={151}
                  height={61}
                  className="w-10 no-select h-10"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placeholder.com/100x40";
                  }}
                />
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="items-center hidden md:flex">
            <div className="flex items-center px-2 md:py-1 lg:py-2 rounded-[15px] bg-zinc-900">
              <div className="flex space-x-2 xl:space-x-8">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavItemClick(item.label, item.href);
                    }}
                    className={`text-gray-300  font-sora flex text-[10px] lg:text-[12px] xl:text-[16px] justify-center items-center p-2 lg:px-4 lg:py-2 hover:text-white transition-colors duration-200 ${
                      selectedNavItem === item.label
                        ? "bg-zinc-800 rounded-[15px] "
                        : ""
                    }`}
                  >
                    {/* {selectedNavItem === item.label && (
                      <span className="inline-block mr-1">
                        <Image
                          src="/images/world.svg"
                          width={18}
                          height={18}
                          alt="world"
                          className="h-5"
                        />
                      </span>
                    )} */}
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="block md:hidden">
            <a
              href={links.getStarted}
              target="_blank"
              className="flex items-center  p-1 font-medium text-black rounded-[15px] bg-[#C3E89B]"
            >
              <span className="ml-1 font-sora text-[14px]">Get Started</span>
              <div className="p-1 w-[40px] h-[40px] justify-center items-center flex ml-2 bg-black rounded-[12px]">
                <Image
                  src="/images/arrow.png"
                  width={16}
                  height={4}
                  alt="arrow"
                  className="no-select"
                />
              </div>
            </a>
          </div>

          {/* Get Started Button */}
          <div className="flex items-center">
            <div className="hidden md:block">
              <a
                href={links.getStarted}
                target="_blank"
                className="flex items-center p-1 text-[13px] lg:text-[16px] font-medium text-black rounded-[15px] bg-[#C3E89B]"
              >
                <span className="ml-1 lg:ml-3 font-sora ">Get Started</span>
                <div className="p-1 md:w-[34px] lg:w-[44px] md:h-[34px] lg:h-[44px] justify-center items-center flex ml-2 bg-black rounded-[12px]">
                  <Image
                    src="/images/arrow.png"
                    width={16}
                    height={4}
                    alt="arrow"
                    className="no-select"
                  />
                </div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="p-2 ml-4 text-white md:hidden"
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden mt-2 fixed inset-0 bg-black bg-opacity-90 z-40 transition-opacity duration-300 ${
            isMenuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }`}
        >
          <div
            className={`absolute right-0 top-0 h-full w-full bg-black transform transition-transform duration-300 ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-4">
              <a href="#" className="flex items-center">
                <Image
                  src="/images/zonarlogo.png"
                  alt="Zonar Logo"
                  width={151}
                  height={61}
                  className="w-auto no-select h-10"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placeholder.com/100x40";
                  }}
                />
              </a>
              <button
                onClick={toggleMenu}
                className="p-2 text-white"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="px-6 py-2">
              <div className="flex flex-col mt-6 space-y-4">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className={`text-xl transition-colors font-sora text-[14px] duration-200 ${
                      selectedNavItem === item.label
                        ? "text-white font-medium"
                        : "text-gray-300 hover:text-white"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavItemClick(item.label, item.href);
                    }}
                  >
                    {selectedNavItem === item.label && (
                      <span className="inline-block mr-2">•</span>
                    )}
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="mt-6">
                <a
                  href={links.getStarted}
                  target="_blank"
                  className="flex items-center px-2 py-2 text-[14px] gap-2 w-40 font-medium text-black rounded-[15px] bg-[#C3E89B]"
                >
                  <span className="ml-1 font-sora">Get Started</span>
                  <div className="p-1 w-[40px] h-[40px] justify-center items-center flex ml-2 bg-black rounded-[12px]">
                    <Image
                      src="/images/arrow.png"
                      width={16}
                      height={4}
                      alt="arrow"
                      className="no-select"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
