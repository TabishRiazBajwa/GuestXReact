import React from "react";
import OverlappingBarChartReversed from "../overlappingBarChartReversed/overlappingBarChartReversed";

function IsRevenueChart() {
  return (
    <div className="absolute z-10  w-full flex max-w-[600px]   left-1/2 transform -translate-x-1/2 rounded-md bg-white border border-[#707070] p-2">
      <div className="flex justify-center w-full space-x-10  ">
        <div className="text-center ">
          <div>Customer</div>
          <div className="  pb-4">
            <OverlappingBarChartReversed />
          </div>
        </div>
        <div className="text-center">
          <div>Revenue</div>
          <div className=" pb-4">
            <OverlappingBarChartReversed />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IsRevenueChart;
