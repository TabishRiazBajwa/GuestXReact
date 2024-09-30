import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { display } from "@mui/system";


  const OverlappingBarChartReversed = (props) => {
  const {chartClass  } = props;
  return (
    <div className="">
      <div className="text-center border-b-2 border-dashed pb-[5px]">
        <div  className= {`w-[11rem] h-64 bg-[#0DA452] rounded-md mx-auto mt-4 relative ${chartClass}`}>
          <div
            data-tooltip-target="tooltip-light"
            className="border-2 border-dashed border-[#fff] absolute w-full top-9 border-t-1 border-b-0 border-r-0 border-l-0"
          >
            <span
              className="absolute -top-2.5 right-[2px]    border-t-[10px] border-t-transparent
              border-r-[20px] border-r-[#fff]
              border-b-[10px] border-b-transparent"
            ></span>
            <div class="relative flex flex-col items-center group">
              <span className="py-1"></span>
              <div class="absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex -right-[50%] -top-3.5">
                <span class="relative z-10 p-2 text-xs leading-none rounded whitespace-no-wrap bg-white color-[#0E2E60] font-medium  border-[#0E2E60] border ">
                  80% Goal{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="border-2  border-dashed border-[#0F2E60] border-t-1 border-b-0 border-r-0 border-l-0  absolute w-[110%] -ml-[9px] bottom-9">
            <div class="relative flex flex-col items-center group">
              <span className="py-1"></span>
              <div class="absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex left-[5rem] -top-12">
                <span class="relative z-10 p-2 text-xs leading-none rounded whitespace-no-wrap bg-[#43c8ff] font-medium  text-white ">
                  22 33{" "}
                </span>
                <span
                  className="absolute top-[29px] left-[3px] right-[3px] rotate-90  border-t-[10px] border-t-transparent
                          border-l-[20px] border-l-[#43c8ff]
                           border-b-[10px] border-b-transparent"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex items-center justify-center pt-6 max-w-[210px] ${``} mx-auto`}
      >
        <h5 className="flex items-center mb-2 mr-10">
          <span className="mr-2 w-4 h-4 rounded-full inline-block bg-[#0E2E60]"></span>
          <span className="text-[#0F2E60] text-md">Total</span>
        </h5>
        <h5 className="flex items-center mb-2">
          <span className="mr-2 w-4 h-4 rounded-full inline-block bg-[#1F66AC]"></span>
          <span className="text-[#0F2E60] text-md">New</span>
        </h5>
      </div>
    </div>
  );
};

export default OverlappingBarChartReversed;
