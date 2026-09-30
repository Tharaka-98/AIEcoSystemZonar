"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import HorizontalLineComponent from "../horizontalLine";
import links from "@/constants/links";

interface FooterLink {
  name: string;
  href: string;
}

interface FooterLinks {
  "": FooterLink[];
  socials: FooterLink[];
  charts: FooterLink[];
}

interface AccordionProps {
  title: string;
  links: FooterLink[];
}

const FooterComponent: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  // const year = new Date().getFullYear();

  const footerLinks: FooterLinks = {
    "": [],
    socials: [
      { name: "X", href: links.x },
      { name: "Etherscan", href: links.etherscan },
      { name: "Telegram", href: links.telegram },
    ],
    charts: [
      { name: "Dextools", href: links.dextools },
      { name: "Gitbook", href: links.gitbook },
      { name: "Dexscreener", href: links.dexscreener },
    ],
  };

  const toggleSection = (section: string): void => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  const MobileAccordion: React.FC<AccordionProps> = ({ title, links }) => (
    <div className="border-b border-zinc-800 last:border-b-0">
      <button
        onClick={() => toggleSection(title)}
        className="flex items-center justify-between w-full py-4 text-left"
      >
        <span className="text-lg uppercase font-semibold text-gray-400 font-sora">
          {title}
        </span>
        {expandedSection === title ? (
          <ChevronUp className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          expandedSection === title ? "max-h-48" : "max-h-0"
        }`}
      >
        <ul className="pb-4 space-y-3">
          {links.map((link: FooterLink) => (
            <li key={link.name}>
              <Link
                href={link.href}
                target="_blank"
                className="text-base text-white font-sora hover:text-gray-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <footer className="text-white " id="footer">
      {/* Mobile View */}
      <div className="pt-8 md:hidden">
        <div className="px-6">
          <div className="flex flex-col items-center mb-8">
            <Image
              src="/images/zonarLogoMob.png"
              alt="Zonar Solo Logo"
              width={103}
              height={103}
              className="mb-6 no-select"
            />

            <div className="flex space-x-4"></div>
          </div>

          <div className="mt-8 mb-16">
            <MobileAccordion title="Socials" links={footerLinks.socials} />
            <MobileAccordion title="Charts" links={footerLinks.charts} />
          </div>
        </div>

        <div className="pt-6 mt-8 h-[100px] text-start flex flex-col items-center  bg-[#FFFFFF1A] ">
          <p className="space-x-2 text-base">
            <span className="text-white text-[12px] font-sora">
              Copyright © 2025{" "}
            </span>{" "}
            <span className="text-gray-500 text-[12px] font-sora">
              {" "}
              All rights reserved
            </span>
          </p>
          {/* <div className="flex mt-2 space-x-4 text-base">
            <Image
              src="/images/medium.png"
              alt="medium"
              width={22}
              height={22}
              className="no-select"
            />
            <Image
              src="/images/X.png"
              alt="X"
              width={22}
              height={22}
              className="no-select"
            />
            <Image
              src="/images/discord.png"
              alt="discord"
              width={22}
              height={22}
              className="no-select"
            />
          </div> */}
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden xl:mt-12 md:block">
        <HorizontalLineComponent color="#88A964" className="py-8" />
        <div className="container px-12 mt-12">
          <div className="grid justify-between w-full md:grid-cols-3">
            <div className="flex flex-col md:ml-8 lg:ml-12 xl:ml-0 items-start justify-start col-span-1 space-y-6">
              <Image
                src="/images/zonarLogoMob.png"
                alt="Zonar Solo Logo"
                width={103}
                height={153}
                className=" lg:h-[153px] md:h-[100px] md:w-[70px] lg:w-[103px] no-select"
              />
            </div>

            <div className="col-span-2">
              <div className="grid lg:gap-12 md:grid-cols-3">
                {Object.entries(footerLinks).map(([section, links]) => (
                  <div key={section}>
                    <h3 className=" lg:mb-6 md:mb-4 xl:mb-8 uppercase md:text-[14px] lg:text-[18px] font-semibold text-[#a4a1a1cc] font-sora">
                      {section}
                    </h3>
                    <ul className="md:leading-[24px] lg:leading-[32px] ">
                      {links.map((link: FooterLink) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            target="_blank"
                            className="text-[#FFFFFFCC] md:text-[11px] lg:text-[13px] font-medium font-sora hover:text-[#C3E89B]"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-8 h-[62px] text-center flex flex-row items-center md:px-12 lg:px-20 justify-center  bg-[#FFFFFF1A] ">
          <div className="space-x-2 text-base">
            <span className="text-white text-[12px] font-sora">
              Copyright © 2025{" "}
            </span>{" "}
            <span className="text-gray-500 text-[12px] font-sora">
              {" "}
              All rights reserved
            </span>
          </div>
          {/* <div className="flex mt-2 space-x-8 text-base">
            <a href={links.x} target="_blank">
              <Image
                src="/images/X.png"
                alt="X"
                width={22}
                height={22}
                className="no-select"
              />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
