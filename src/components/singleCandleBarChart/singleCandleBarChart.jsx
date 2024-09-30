import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const SingleCandleBarChart = (props) => {
  const {title , chartClass , titleClass} = props;
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="space-x-4">
      <div className="text-center  pb-[5px]">
        <div  
          className= {`w-[10rem]   rounded-md mx-auto mt-4 relative ${chartClass}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            data-tooltip-target="tooltip-light"
            className="absolute w-full top-9"
          >

          </div>
          <div className="absolute w-full bottom-9">

            <div className="relative flex flex-col items-center group">
              <span className="py-1"></span>
              <div
                className={`absolute bottom-0 flex flex-col items-center mb-6 ${
                  isHovered ? "flex" : "hidden"
                } -left-[35%] -top-3.5`}
              >
             
              </div>
              <div
                className={`absolute -bottom-8 flex items-center justify-center ${""}`}
              >
                <div className={` font-noraml text-sm ${titleClass} `}>123</div>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={` font-noraml text-sm ${titleClass} ${  
                  isHovered ? "block" : "hidden"
                }`}
              >
                {title}
                {/* Your Text Here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCandleBarChart;
