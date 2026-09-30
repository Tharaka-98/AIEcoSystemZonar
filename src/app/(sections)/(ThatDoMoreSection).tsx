import TwoToneCircleBackdrop from "@/components/backdrop/TwoToneCircleBackdrop";
import Image from "next/image";
import React from "react";

interface ThatDoMoreSectionProps {
  title?: string;
  subtitle?: string;
  description1?: string;
  description2?: string;
}

const ThatDoMoreSection = ({
  title = "Smarter AI, Better Trades",
  subtitle = "AI Powered Trading & Market Insights",
  description1 = "Traditional trading tools rely on outdated market indicators. Our AI driven approach changes that. By learning from real conversations in private communities, our trading and AI bots provide deep, actionable insights that help users make informed decisions. This isn’t just automation. it’s a smarter way to trade, backed by real time sentiment analysis and adaptive strategies.",
  description2 = "The AI bot isn’t just about analyzing crypto markets it’s about understanding them in real time. It can detect shifts in sentiment before the market even reacts, giving you insights that you won’t find anywhere else. Meanwhile, our Trading bot taps into these insights to automatically adjust strategies, giving users a serious edge in crypto trading.",
}: ThatDoMoreSectionProps) => {
  return (
    <section id="that-do-more">
      <div className="relative min-h-screen overflow-hidden bg-black">
        <TwoToneCircleBackdrop top="xl:-mt-28 lg:-mt-32 md:-mt-40 -mt-40"/>
        {/* Main content */}
        <div className="relative z-10 lg:mt-40 xl:mt-16 md:mt-36 mt-48 flex flex-col items-center justify-center min-h-screen px-4 ">
          {/* Subtitle */}
          <div className="mb-2 text-[14px] md:text-lg font-sora mt-12 xl:-mt-12 text-[#C3E89B]">
            {subtitle}
          </div>

          {/* Divider */}
          <div className="w-20 h-0.5 font-sora bg-[#C3E89B] mb-4"></div>

          {/* Main title */}
          <h1 className=" md:mb-8 font-sora font-bold text-center text-white text-[25px] md:text-[40px] lg:text-[48px] xl:text-[60px]">
            {title}
          </h1>

          {/* Description */}
          <div className="flex md:flex-row flex-col gap-6 px-4 md:px-12 w-full mt-12 md:mt-2 lg:mt-10 xl:mt-12">
            <div className="backdrop-blur-lg bg-[#FFFFFF1A] shadow-md shadow-[#C3E89B] md:w-1/2 mb-12 lg:px-10 xl:px-10 px-4 py-12 border-none rounded-[30px] ">
              <div className="flex justify-center items-center pb-8 lg:pb-12">
                <Image
                  src="/images/bar.png"
                  alt="bar"
                  width={175}
                  height={175}
                  className="lg:w-[175px] no-select md:w-[130px] w-[100px] h-full"
                />
              </div>
              <div className="md:text-[14px] text-[#FFFFFFCC] text-[12px] lg:text-[16px] text-center font-sora font-normal">
                {description1}
              </div>
            </div>
            <div className="backdrop-blur-lg bg-[#FFFFFF1A] shadow-md shadow-[#C3E89B] mb-12 md:w-1/2 lg:px-10 xl:px-10 px-4 py-12  border-none rounded-[30px] ">
              <div className="flex justify-center items-center pb-8 lg:pb-12">
                <Image
                  src="/images/star.png"
                  alt="bar"
                  width={175}
                  height={175}
                  className="lg:w-[175px] no-select md:w-[130px] w-[100px] h-full"
                />
              </div>
              <div className="md:text-[14px] text-[#FFFFFFCC] text-[12px] lg:text-[16px] text-center font-sora font-normal">
                {description2}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThatDoMoreSection;
