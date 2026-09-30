import React from "react";
import GreenBackdrop from "@/components/backdrop/GreenBackdrop";
import Element4 from "@/components/splinescene/Element4";

interface ThatDoMoreSectionProps {
  title?: string;
  subtitle?: string;
  description1?: string;
  description2?: string;
}

const CryptoEcosystemSection = ({
  title = "A New kind of Crypto Ecosystem",
  subtitle = "Trading Bots & AI",
  description1 = " This project isn’t just another crypto solution. it’s a completely new way of thinking about AI, trading, and tokenomics. We’re combining everything that makes the crypto space exciting community, decentralization, and real time data and turning it into something practical, usable, and valuable.",
  description2 = " Whether you’re a trader, an investor, or just someone who wants to see where the next big leap in crypto tech will come from, this is your chance to be part of something new. A project where your contributions don’t just reward you. They help build the future.",
}: ThatDoMoreSectionProps) => {
  return (
    <section id="our-solution">
      <div className="relative min-h-screen overflow-hidden bg-black">
        <GreenBackdrop className="h-[400px] -top-32" />
        {/* Main content */}
        <div className="relative z-10 mt-6 md:mt-12 flex flex-col items-center justify-center min-h-screen  ">
          {/* Subtitle */}
          <div className="mb-2 text-[14px] md:text-lg font-sora md:mt-12 mt-6 text-[#C3E89B]">
            {subtitle}
          </div>

          {/* Divider */}
          <div className="w-20 h-0.5 font-sora bg-[#C3E89B] mb-3 md:mb-8"></div>

          <h1 className="xl:w-[500px] w-[300px] md:-mt-4 text-[28px] md:text-[40px] lg:text-[48px] xl:text-5xl xl:-mt-6 lg:leading-snug md:w-[400px] lg:w-[500px] mb-8  font-sora font-bold text-center text-white md:text-6xl">
            {title}
          </h1>
          <div className="md:-mt-32 my-0 md:my-0 lg:-mt-32">
            <Element4 />
          </div>

          {/* Description */}
          <div className="flex flex-col md:flex-row xl:-mt-16 mt-12 md:mt-2 lg:mt-0 gap-6 md:px-8 lg:px-12 w-full px-4 ">
            <div className="backdrop-blur-3xl bg-[#FFFFFF1A] shadow-sm shadow-[#C3E89B] md:w-1/2 sm:mb-12 px-4 lg:px-8  py-12 border-none rounded-[30px] ">
              <div className="text-[12px] font-sora md:text-[14px] lg:text-[16px] xl:text-[18px] text-center md:text-start font-normal">
                {description1}
              </div>
            </div>
            <div className="backdrop-blur-3xl bg-[#FFFFFF1A] shadow-sm shadow-[#C3E89B] md:w-1/2 mb-12 sm:mb-12 px-4 lg:px-8  py-12 border-none rounded-[30px] ">
              <div className="text-[12px] font-sora md:text-[14px] lg:text-[16px] xl:text-[18px] text-center md:text-start font-normal">
                {description2}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoEcosystemSection;
