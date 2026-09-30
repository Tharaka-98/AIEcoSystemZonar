import React from "react";

interface GreenBackdropProps {
  className?: string;
}

const GreenBackdrop = ({ className = "" }: GreenBackdropProps) => {
  return (
    <div className="absolute inset-0 w-full overflow-hidden pointer-events-none h-full ">
      <div
        className={`absolute inset-0 w-full ${className}`}
        style={{
          background: `
            radial-gradient(circle at 50% 50%, 
            rgba(160, 191, 127, 0.8) 0%,
            rgba(96, 124, 73, 0.7) 20%,
            rgba(96, 124, 73, 0.4) 40%,
            rgba(96, 124, 73, 0.2) 60%,
            rgba(0, 0, 0, 0.1) 80%,
            transparent 100%)
          `.replace(/\n/g, ""),
          filter: "blur(80px)",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      />
    </div>
  );
};

export default GreenBackdrop;