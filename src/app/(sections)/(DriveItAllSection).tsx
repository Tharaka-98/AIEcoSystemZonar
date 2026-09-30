import GreenBackdrop from "@/components/backdrop/GreenBackdrop";
import HorizontalLineComponent from "@/components/horizontalLine";
import Element3 from "@/components/splinescene/Element3";
import React from "react";

interface DriveItAllSectionProps {
  title?: string;
  subtitle?: string;
  description1?: string;
  description2?: string;
}

const DriveItAllSection = ({
  title = "The Token Powering AI & Rewards",
  subtitle = "Make World With AI",
  description1 = "Our token is the foundation of this AI driven ecosystem, seamlessly integrated into every aspect of the platform. Whether unlocking premium AI insights, utilizing the Trading Bot, or accessing in depth analytics, the token is essential. The more you engage, the more value you generate both for yourself and the ecosystem. Every interaction strengthens the token’s utility, making it a central part of the AI learning process.",
  description2 = "A built in buyback mechanism ensures long term value. 50% of all revenue from AI tools, analytics, and trading services is used to buy back tokens from the market, reducing overall supply. This approach creates scarcity, drives demand, and reinforces long term token growth, benefiting all participants in the ecosystem.",
}: DriveItAllSectionProps) => {
  return (
    <section id="drive-it-all">
      <div className="relative min-h-screen overflow-hidden ">
        <GreenBackdrop className="lg:top-[900px] top-[800px] md:top-[700px] xl:top-[1200px] 2xl:top-[1200px]  h-[400px]" />
        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 ">
          {/* Logo/Hourglass */}
          <div className="flex z-0 w-full opacity-80 items-center -mt-36 md:mt-4 justify-center ">
            <Element3 />
          </div>

          {/* Subtitle */}
          <div className="mb-2  z-10 text-[14px] md:text-lg font-sora md:-mt-72 lg:-mt-96 xl:-mt-[460px]  -mt-72 text-[#C3E89B]">
            {subtitle}
          </div>

          {/* Divider */}
          <div className="w-20 z-10 h-0.5 font-sora bg-[#C3E89B] mb-3 xl:mb-12"></div>

          {/* Main title */}
          <h1 className="xl:w-[800px] z-10 lg:w-[500px] md:w-[450px] w-[300px] lg:leading-snug mb-6 lg:mb-20  font-sora leading text-[28px] md:text-[40px] lg:text-[48px] xl:text-[60px] font-bold text-center text-white ">
            {title}
          </h1>

          {/* Description */}
          <div className="mb-12 xl:mb-16 xl:mt-20 flex-col space-y-4 w-full flex items-center ">
            
            <div className="relative p-6 ">
              {/* Green Gradient Line */}
              <div className="absolute left-6 md:left-2 top-1/2 transform -translate-y-1/2 w-1 sm:w-2 md:w-3 h-4/5 sm:h-5/6 md:h-11/12 lg:h-full overflow-hidden">
                <div
                  style={{
                    background: `linear-gradient(to bottom,
          transparent 0%,
          rgba(195, 232, 155, 0.4) 30%,
          rgba(195, 232, 155, 1) 40%,
          rgba(195, 232, 155, 1) 50%,
          rgba(195, 232, 155, 1) 60%,
          rgba(195, 232, 155, 0.4) 70%,
          transparent 100%
          )`.replace(/\n/g, ""),
                    filter: "blur(0px)",
                  }}
                  className="absolute inset-0"
                />
              </div>
              <p className="xl:w-[1000px] ml-6 md:ml-4 lg:ml-6 xl:ml-8 lg:w-[800px] md:w-[600px] w-[300px] bg-transparent text-[12px] font-sora md:text-[14px] lg:text-[16px] xl:text-xl text-start text-gray-300">
                {description1}
              </p>
            </div>
            <div className="relative p-6">
              {/* Green Gradient Line */}
              <div className="absolute left-6 md:left-2 top-1/2 transform -translate-y-1/2 w-1 sm:w-2 md:w-3 h-4/5 sm:h-5/6 md:h-11/12 lg:h-full overflow-hidden">
                <div
                  style={{
                    background: `linear-gradient(to bottom,
          transparent 0%,
          rgba(195, 232, 155, 0.4) 30%,
          rgba(195, 232, 155, 1) 40%,
          rgba(195, 232, 155, 1) 50%,
          rgba(195, 232, 155, 1) 60%,
          rgba(195, 232, 155, 0.4) 70%,
          transparent 100%
          )`.replace(/\n/g, ""),
                    filter: "blur(0px)",
                  }}
                  className="absolute inset-0"
                />
              </div>
              <p className="xl:w-[1000px] ml-6 md:ml-4 lg:ml-6 xl:ml-8 lg:w-[800px] md:w-[600px] w-[300px] bg-transparent text-[12px] font-sora md:text-[14px] lg:text-[16px] xl:text-xl text-start text-gray-300">
                {description2}
              </p>
            </div>
          </div>
        </div>
        <HorizontalLineComponent color="#ffffff" />
      </div>
    </section>
  );
};

export default DriveItAllSection;
