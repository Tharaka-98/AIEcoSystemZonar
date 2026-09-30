
import React from "react";
import GreenBackdrop from "@/components/backdrop/GreenBackdrop";
import Element2 from "@/components/splinescene/Element2";
import Image from "next/image";
import SwiperDifferences from "@/components/SwiperDifferences";

interface TelegramBotSectionProps {
  title?: string;
  subtitle1?: string;
  subtitle2?: string;
  description1?: string;
  difName1?: string;
  difName2?: string;
  difName3?: string;
  difference1?: string;
  difference2?: string;
  difference3?: string;
}

// Define the type for the swiper data
interface SwiperData {
  imageSrc: string;
  title: string;
  description: string;
}


const TelegramBotSection = ({
  title = "AI That Learns from Real Conversations",
  subtitle1 = "Turning Private Group Insights into Value",
  subtitle2 = "Why It’s Different",
  description1 = "Our Telegram bot is more than just a tool. it’s the gateway to an evolving AI ecosystem. Instead of simply tracking activity, it evaluates message quality, rewarding meaningful contributions with tokens. But the real power lies behind the scenes. Every anonymized interaction helps train an AI model that continuously adapts and improves, learning from real discussions rather than scraping public data.",
  difName1 = "Quality Over Quantity",
  difName2 = "Privacy First",
  difName3 = "AI That Evolves",
  difference1 = "Rewards are based on the value of contributions, not message spam.",
  difference2 = "Conversations are analyzed anonymously; no personal data is stored or shared.",
  difference3 = "Unlike traditional AI trained on outdated public data, ours learns from real user interactions.",
}: TelegramBotSectionProps) => {

  // Array of data for the swiper slides
  const swiperData: SwiperData[] = [
    {
      imageSrc: "/images/rocket.png",
      title: difName1,
      description: difference1,
    },
    {
      imageSrc: "/images/lock.png",
      title: difName2,
      description: difference2,
    },
    {
      imageSrc: "/images/brain.png",
      title: difName3,
      description: difference3,
    },
  ];
  return (
    <section id="how-it-works">
      <div className="relative overflow-hidden bg-black">
        <GreenBackdrop className="md:-top-[200px] -top-[150px] h-[400px] md:h-[300px] xl:-top-[100px] " />
        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center justify-center  ">
          {/* Logo/Hourglass */}
          <div className="flex items-center justify-center">
            <Element2 />
          </div>

          {/* Subtitle1 */}
          <div className="mb-2 mt-[400px] text-[14px] md:text-lg font-sora text-[#C3E89B]">
            {subtitle1}
          </div>

          {/* Divider */}
          <div className="w-20 h-0.5 font-sora bg-[#C3E89B] mb-4 md:mb-8"></div>

          {/* Main title */}
          <h1 className="xl:w-[500px] md:-mt-4 text-[28px] md:text-[40px] lg:text-[48px] xl:text-5xl xl:-mt-6 lg:leading-snug md:w-[400px] lg:w-[500px] mb-8 w-[300px] font-sora font-bold text-center text-white md:text-6xl">
            {title}
          </h1>

          {/* Description */}
          <div className="px-12">
            <p className="xl:w-[1000px] lg:w-[800px] md:w-[700px] w-[360px] px-4  mb-6 text-[12px] font-sora md:text-[14px] lg:text-[16px] xl:text-xl text-center text-gray-300">
              {description1}
            </p>
            <p className="xl:w-[1000px] lg:w-[800px] md:w-[700px] w-[360px] px-4  text-[12px] font-sora md:text-[14px] lg:text-[16px] xl:text-xl text-center text-gray-300">
              {/* {description2} */}
            </p>
          </div>

          {/* Subtitle2 */}
          <div className="mb-2 text-[14px] md:text-lg mt-4 md:mt-8 font-sora  text-[#C3E89B]">
            {subtitle2}
          </div>

          {/* Divider */}
          <div className="w-20 h-0.5 font-sora bg-[#C3E89B] mb-4 md:mb-3"></div>

          {/* differences web view */}
          <div className="md:flex md:flex-row flex-col gap-6 px-12 hidden w-full mt-8">
            <div className="backdrop-blur-3xl flex flex-col items-center  bg-[#FFFFFF1A] shadow-md shadow-[#C3E89B] md:w-1/2 mb-12 lg:px-6  px-2 py-12 border-none rounded-[30px] ">
              <div className="flex justify-center items-center pb-8 lg:pb-12">
                <Image
                  src="/images/rocket.png"
                  alt="bar"
                  width={43}
                  height={53}
                  className="lg:w-[122px] no-select  md:w-[53px] w-[100px] h-full"
                />
              </div>
              <div className="font-sora font-bold lg:text-[20px] xl:text-[22px] mb-4">{difName1}</div>
              <div className="md:text-[14px] text-[#FFFFFFCC] text-[12px] lg:text-[16px] text-center font-sora font-normal">
                {difference1}
              </div>
            </div>
            <div className="backdrop-blur-3xl flex flex-col items-center  bg-[#FFFFFF1A] shadow-md shadow-[#C3E89B] mb-12 md:w-1/2 lg:px-6  px-2 py-12  border-none rounded-[30px] ">
              <div className="flex justify-center  items-center pb-8 lg:pb-12">
                <Image
                  src="/images/lock.png"
                  alt="bar"
                  width={36}
                  height={53}
                  className="lg:w-[122px] no-select  md:w-[53px] w-[100px] "
                />
              </div>
              <div className="font-sora font-bold lg:text-[20px] xl:text-[22px] mb-4">{difName2}</div>
              <div className="md:text-[14px] text-[#FFFFFFCC] text-[12px] lg:text-[16px] text-center font-sora font-normal">
                {difference2}
              </div>
            </div>
            <div className="backdrop-blur-3xl flex flex-col items-center  bg-[#FFFFFF1A] shadow-md shadow-[#C3E89B] mb-12 md:w-1/2 lg:px-6  px-2 py-12  border-none rounded-[30px] ">
              <div className="flex justify-center items-center pb-8 lg:pb-12">
                <Image
                  src="/images/brain.png"
                  alt="bar"
                  width={46}
                  height={46}
                  className="lg:w-[122px] no-select  md:w-[53px] w-[100px] h-full"
                />
              </div>
              <div className="font-sora font-bold lg:text-[20px] xl:text-[22px] mb-4">{difName3}</div>
              <div className="md:text-[14px] text-[#FFFFFFCC] text-[12px] lg:text-[16px] text-center font-sora font-normal">
                {difference3}
              </div>
            </div>
          </div>

          {/* Differences - Mobile View (Swiper) */}
          <SwiperDifferences swiperData={swiperData} />
        </div>
        </div>
    </section>
  );
};

export default TelegramBotSection;
