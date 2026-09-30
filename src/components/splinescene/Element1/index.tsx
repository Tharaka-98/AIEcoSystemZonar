"use client";
import { scene1 } from "@/constants/spline-constants";
import { useSplashScreenLoader } from "@/context/SplashScreenLoaderContext";
import Spline from "@splinetool/react-spline";
import { useEffect } from "react";

// const Spline = dynamic(() => import('@splinetool/react-spline'), {
//   ssr: false, // Disable server-side rendering for Spline
// });

const scene = scene1;
export default function Element1() {
  const { addLoading, removeLoading } = useSplashScreenLoader();
  
  useEffect(() => {
    addLoading(scene);
  }, [addLoading]);
  return (
    <main className="relative overflow-hidden h-[400px] w-full no-select">
      <div className="h-full w-full scale-[0.5] md:scale-[0.6] lg:scale-100 origin-center">
        <Spline
          scene={scene}
          style={{
            background: "transparent",
            height: "100%",
          }}
          onLoad={() => {
            removeLoading(scene);
          }}
        />
      </div>
    </main>
  );
}
