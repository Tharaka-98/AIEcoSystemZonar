import React from "react";

interface GreenBackdropProps {
  className?: string;
  top?: string;
}

const TwoToneCircleBackdrop = ({ className = "", top = "" }: GreenBackdropProps) => {
  return (
    <div className={`absolute inset-0 w-full overflow-hidden pointer-events-none h-[1000px] ${top}`}>
      {/* Single radial gradient with green to black transition */}
      <div
        className={`absolute inset-0 w-full ${className}`}
        style={{
          background: `
            radial-gradient(
              circle 300px at center,
  rgba(0, 0, 0, 1) 0%,
              rgba(0, 0, 0, 0.98) 10%,
              rgba(5, 10, 2, 0.95) 20%,
              rgba(8, 15, 4, 0.9) 30%,
              rgba(10, 20, 5, 0.85) 35%,
              rgba(15, 25, 8, 0.8) 38%,
              rgba(20, 35, 12, 0.75) 40%,
              rgba(30, 50, 20, 0.7) 42%,
              rgba(40, 70, 25, 0.65) 45%,
              rgba(60, 90, 30, 0.6) 50%,
              rgba(80, 110, 40, 0.55) 55%,
              rgba(100, 130, 50, 0.5) 60%,
              rgba(120, 150, 70, 0.45) 66%, 
              rgba(140, 170, 90, 0.4) 70%, 
              rgba(160, 190, 110, 0.3) 80%,
              rgba(180, 210, 130, 0.2) 90%,
              transparent 100%
            )
          `,
        }}
      />
    </div>
  );
};

export default TwoToneCircleBackdrop;