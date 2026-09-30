"use client";

import Spinner from "@/components/spinner/Spinner";
import { scene1, scene2, scene3, scene4 } from "@/constants/spline-constants";
import type React from "react";
import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  useEffect,
  useCallback,
  useMemo,
} from "react";



interface SplashScreenLoaderContextType {
  isLoading: boolean;
  addLoading: (value: string) => void;
  removeLoading: (value: string) => void;
  loadingPercentage: number;
}

const SplashScreenLoaderContext = createContext<
  SplashScreenLoaderContextType | undefined
>(undefined);

export const SplashScreenLoaderProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingItems, setLoadingItems] = useState<Set<string>>(new Set([
    scene1,
    scene2,
    scene3,
    scene4,
  ]));
  const [loadingCompletedItems, setLoadingCompletedItems] = useState<
    Set<string>
  >(new Set());

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [loadingItems.size]);

  const addLoading = useCallback((value: string) => {
    setLoadingItems((prev) => new Set([...prev, value]));
  }, []);

  const removeLoading = useCallback((value: string) => {
    setLoadingItems(
      (prev) => new Set([...prev].filter((item) => item !== value))
    );
    setLoadingCompletedItems((prev) => new Set([...prev, value]));
  }, []);

  const totalLoadingItems = useMemo(() => {
    return loadingItems.size + loadingCompletedItems.size;
  }, [loadingItems.size, loadingCompletedItems.size]);

  // Calculate loading percentage
  const loadingPercentage = useMemo(() => {
    if (loadingItems.size === 0) {
      return undefined; // 0% when no items are being loaded
    }
    return loadingCompletedItems.size / totalLoadingItems; // completed / total
  }, [loadingItems.size, loadingCompletedItems.size, totalLoadingItems]);

  const loading = loadingItems.size > 0 || isLoading;
  const reallyLoading =
    loadingPercentage !== undefined ? loadingPercentage : loading ? 1 : 0;

  return (
    <SplashScreenLoaderContext.Provider
      value={{
        isLoading: loading,
        addLoading,
        removeLoading,
        loadingPercentage: reallyLoading,
      }}
    >
      <div
        className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-500 ${
          loading ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Spinner percentage={reallyLoading} size={120} />
      </div>
      {children}
    </SplashScreenLoaderContext.Provider>
  );
};

export const useSplashScreenLoader = () => {
  const context = useContext(SplashScreenLoaderContext);
  if (context === undefined) {
    throw new Error(
      "useSplashScreenLoader must be used within a SplashScreenLoaderProvider"
    );
  }
  return context;
};
