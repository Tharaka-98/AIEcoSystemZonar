"use client";

interface SpinnerProps {
  percentage: number;
  size?: number;
}

export default function Spinner({ percentage = 0, size = 200 }: SpinnerProps) {
  // Clamp percentage between 0 and 1
  const clampedPercentage = Math.max(0, Math.min(1, percentage));

  return (
    <div
      className="relative inline-block"
      style={{ width: size, height: size }}
    >
      {/* Simple container */}
      <div className="relative w-full h-full flex items-center justify-center">
        
        {/* Large logo */}
        <div
          className="bg-cover bg-center  transition-all duration-500 ease-out"
          style={{
            width: `${size * 0.8}px`,
            height: `${size * 0.8}px`,
            backgroundImage: "url('/static/apple-touch-icon.png')",
            filter: clampedPercentage > 0.5 ? 'none' : 'grayscale(100%) brightness(0.8)',
            transform: `scale(${0.9 + clampedPercentage * 0.1})`,
          }}
        />
        
      </div>
    </div>
  );
}
