import React from "react";

interface HorizontalLineProps {
  className?: string;
  color?: string;
}

const HorizontalLineComponent = ({
  className = '',
  color = ''
}: HorizontalLineProps) => {
  return (
    <div className={className}>
      <div className="w-full  bg-black">
        <div className="container px-4 mx-auto">
          <div className="relative w-full h-px">
            <div 
              className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent"
              style={{ backgroundImage: `linear-gradient(to right, transparent, ${color}, transparent)` }}
            ></div>
            <div 
              className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent translate-y-0"
              style={{ backgroundImage: `linear-gradient(to right, transparent, ${color}, transparent)` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalLineComponent;