"use client";
import { scene3 } from "@/constants/spline-constants";
import { useSplashScreenLoader } from "@/context/SplashScreenLoaderContext";
import Spline from "@splinetool/react-spline";
import { useEffect } from "react";

const scene = scene3;

export default function Element3() {
  const { addLoading, removeLoading } = useSplashScreenLoader();
  useEffect(() => {
    addLoading(scene);
  }, [addLoading]);
  return (
    <main className="w-full h-screen overflow-hidden">
      <Spline
        scene={scene}
        className="w-full h-full md:w-full md:h-full scale-100 md:scale-100 no-select"
        onLoad={() => {
          removeLoading(scene);
        }}
      />
    </main>
  );
}