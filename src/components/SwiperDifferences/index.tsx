"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

interface SwiperData {
  imageSrc: string;
  title: string;
  description: string;
}

interface SwiperDifferencesProps {
  swiperData: SwiperData[];
}

const SwiperDifferences = ({ swiperData }: SwiperDifferencesProps) => {
  return (
    <div className="md:hidden px-6 w-full mt-4">
      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        centeredSlides={true}
        initialSlide={1}
        // loop={true}
        pagination={{
          clickable: true,
          el: ".custom-swiper-pagination", // Specify a custom class for the pagination
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {swiperData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="backdrop-blur-3xl h-[280px] flex flex-col items-center bg-[#FFFFFF1A] shadow-md shadow-[#C3E89B] px-4 py-8 border-none rounded-[20px]">
              <div className="flex justify-center items-center pb-6">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="w-[100px] h-full no-select"
                />
              </div>
              <div className="font-sora font-bold text-[16px] mb-4 text-white">{item.title}</div>
              <div className="text-[12px] text-[#ffffffff] text-center font-sora font-normal">
                {item.description}
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* Add a custom div for the pagination dots */}
        <div className="custom-swiper-pagination mt-4 flex justify-center"></div>
      </Swiper>
    </div>
  );
};

export default SwiperDifferences;