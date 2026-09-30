"use client";

import { useSplashScreenLoader } from "@/context/SplashScreenLoaderContext";
import Spline from '@splinetool/react-spline';
import { useEffect } from "react";

const scene = "https://prod.spline.design/Y4f6OBNodo7PiQ4l/scene.splinecode" ;

export default function Element4() {
  const { addLoading, removeLoading } = useSplashScreenLoader();
  useEffect(() => {
    addLoading(scene);
  }, [addLoading]);
  return (
    <main className="w-full relative no-select overflow-visible flex items-center justify-center">
      <div className="aspect-[16/9] mx-auto w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-8xl 3xl:max-w-9xl min-h-[300px] md:min-h-[500px] xl:min-h-[600px] 2xl:min-h-[700px] 3xl:min-h-[800px]">
        <div className="w-full h-full transform-gpu will-change-transform">
          <Spline
            scene={scene}
            onLoad={() => {
              removeLoading(scene);
            }}
            className="w-full h-full transform-gpu will-change-transform scale-110 rotate-[11deg] origin-center 
                     lg:scale-225 lg:rotate-[11deg] lg:origin-center lg:-translate-x-[4vw]
                     xl:scale-240 xl:rotate-[11deg] xl:origin-center xl:-translate-x-[5vw]
                     2xl:scale-280 2xl:rotate-[11deg] 2xl:origin-center 2xl:-translate-x-[6vw] 2xl:my-8
                     3xl:scale-320 3xl:rotate-[11deg] 3xl:origin-center 3xl:-translate-x-[7vw] 3xl:my-12"
            style={{
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
              WebkitTransform: 'translateZ(0)',
              WebkitBackfaceVisibility: 'hidden'
            }}
          />
        </div>
      </div>
    </main>
  );
}
