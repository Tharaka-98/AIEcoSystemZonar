"use client";
import { scene2 } from "@/constants/spline-constants";
import { useSplashScreenLoader } from "@/context/SplashScreenLoaderContext";
import Spline from "@splinetool/react-spline";
import { useEffect } from "react";

const scene = scene2;

export default function Element2() {
  const { addLoading, removeLoading } = useSplashScreenLoader();
  useEffect(() => {
    addLoading(scene);
  }, [addLoading]);
  return (
    <main className='absolute top-0 left-0 w-full h-[600px] no-select -z-100 opacity-60'>
      <Spline
        scene={scene}
        onLoad={() => {
          removeLoading(scene);
        }}
      />
    </main>
  );
}
