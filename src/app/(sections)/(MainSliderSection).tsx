import GreenBackdrop from "@/components/backdrop/GreenBackdrop";
// import BorderMagicButton from "@/components/BorderMagicButton";
import HorizontalLineComponent from "@/components/horizontalLine";
import Element1 from "@/components/splinescene/Element1";
import Image from "next/image";
import { FC } from "react";

interface CryptoLandingProps {
  title?: string;
  subtitle?: string;
  description?: string;
  leftImageSrc?: string;
  rightImageSrc?: string;
}

const CryptoLanding: FC<CryptoLandingProps> = ({
  title = "AI Powered Token Ecosystem Built on Private Insights.",
  subtitle = "Turn Conversations into Value",
  description = "Traditional AI models rely on public data, but real insights come from private discussions. Our AI Agent learns directly from engaged Telegram communities analyzing high quality interactions while keeping data private. In return, contributors are rewarded with tokens, creating a decentralized system where knowledge drives value.",
  leftImageSrc = "/images/zonarleft.png",
  rightImageSrc = "/images/zonarright.png",
}) => {
  return (
    <section >
      <div className="relative overflow-hidden bg-black">
        <GreenBackdrop className="top-[500px] h-[400px] lg:top-[600px] " />
        {/* Left decorative shape */}
        <div className="absolute left-0 z-0 h-auto top-2/7 md:top-2/7 lg:top-3/7 xl:top-1/4">
          <Image
            src={leftImageSrc}
            alt="Decorative shape"
            width={100}
            height={100}
            className="w-[80px] no-select h-full lg:w-[150px] lg:h-full xl:h-[350px] xl:w-[160px]"
          />
        </div>

        {/* Right decorative shape */}
        <div className="absolute right-0 z-0 h-auto top-[50px] md:top-[50px] lg:top-[50px] xl:top-[20px]">
          <Image
            src={rightImageSrc}
            alt="Decorative shape"
            width={100}
            height={100}
            className="w-[80px] no-select h-full lg:w-[150px] lg:h-full xl:h-[350px] xl:w-[160px]"
          />
        </div>

        {/* Main content */}
        <div className="relative z-10 mb-12 flex flex-col items-center justify-center px-4 ">
          {/* Logo/Hourglass */}
          <div className="flex items-center mt-8 w-full justify-center ">
            <Element1 />
          </div>

          {/* Subtitle */}
          <div className="mb-2 -mt-20 text-[14px] md:text-lg md:-mt-20 lg:-mt-12 font-sora text-[#C3E89B]">
            {subtitle}
          </div>

          {/* Divider */}
          <div className="w-20 h-0.5 bg-[#C3E89B] mb-3"></div>

          {/* Main title */}
          <h1 className="xl:w-[800px] text-[25px] lg:leading-snug md:w-[700px] lg:w-[800px] mb-4 md:mb-8 md:text-[40px] lg:text-[45px] xl:text-5xl font-sora font-bold text-center text-white md:text-6xl">
            {title}
          </h1>

          {/* Description */}
          <p className="xl:max-w-6xl lg:max-w-[750px] md:max-w-2xl max-w-md mb-8 md:mb-10  text-[12px] font-sora md:text-[14px] lg:text-[16px] xl:text-xl text-center text-gray-300">
            {description}
          </p>

          {/* Button */}
          {/* <BorderMagicButton
            href="#about-us"
            className="px-12 font-sora py-1 mb-4 text-[#101415] font-bold bg-[#C3E89B] backdrop-blur-3xl motion-safe:transform motion-safe:transition-all"
          >
            About Us
          </BorderMagicButton> */}
        </div>
        <HorizontalLineComponent color="#ffffff" />
      </div>
    </section>
  );
};

export default CryptoLanding;
