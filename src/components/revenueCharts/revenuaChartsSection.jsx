import React from "react";
import AROChart from "./towsChart/aroScrollBarChart";
import CarCountChart from "./towsChart/carCountScrollBarChart";
import RevenueChart from "./towsChart/revenueScrollBarChart";

function RevenuaChartsSection({ showBody, chartData }) {
  return (
    <div className="bg-[#707070] mt-2 rounded-md">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
        {/* First card */}
        <div className="bg-white rounded-lg px-8 py-4 m-2">
          <h2 className="text-lg font-bold mb-2 ">Revenue</h2>
          <p className="text-gray-700 text-base">
            <RevenueChart
              months={chartData?.monthsList}
              MainRevenue={chartData?.MainRevenue}
              name="MainRevenue"
              id="401"
              width={"50"}
              widthTwo={`h-[200]`}
            />
          </p>
        </div>
        {/* Second card */}
        <div className="bg-white rounded-lg px-8 py-4 m-2">
          <h2 className="text-lg font-bold mb-2 text-[#0F2E60]">Car Count</h2>
          <p className="text-gray-700 text-base">
            <CarCountChart
              months={chartData?.monthsList}
              MainCarCount={chartData?.MainCarCount}
              name="MainCarCount"
              id="401"
              width={"50"}
              widthTwo={`h-[200]`}
            />
          </p>
        </div>
        {/* Third card */}
        <div className="bg-white rounded-lg px-8 py-4 m-2 col-span-1 md:col-span-2 lg:col-span-1 ">
          <h2 className="text-lg font-bold mb-2 text-[#0F2E60]">ARO</h2>
          <p className="text-gray-700 text-base">
            <AROChart
              months={chartData?.monthsList}
              MainARO={chartData?.MainARO}
              name="MainARO"
              id="401"
              width={"50"}
              widthTwo={`h-[200]`}
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default RevenuaChartsSection;
