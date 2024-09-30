import React from "react";
import RepairPalCard from "../repairpalCards/RepairPalCard";
import TowsScrollBarChart from "./towsChart/towsScrollBarChart";
import RevenueScrollBarChart from "./towsChart/revenueScrollBarChart";
import AROScrollBarChart from "./towsChart/aroScrollBarChart";

const CustomerChartsSection = ({
  towsDropDownChartsData,
  percentage,
  differ,
  oldSum,
}) => {
  return (
    <>
      <div className="bg-[#707070] mt-2 rounded-md">
        <div className="flex-1  grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 flex-wrap justify-center items-center ">
          {/* First card */}
          <div>
            <div className="px-2">
              <RepairPalCard
                heading={"Tows"}
                percentChange={percentage?.Tows}
                difference={differ?.Tows}
                valueA={oldSum?.Tows}
              />
            </div>
            <div className="bg-white rounded-lg px-8 py-4 m-2 space-y-2">
              <h2 className="text-lg font-bold mb-2  text-[#1F3B59]">Tows</h2>

              <p className="text-gray-700 text-base">
                <TowsScrollBarChart
                  name="Tows"
                  id="201"
                  tows={towsDropDownChartsData?.DataTows}
                  months={towsDropDownChartsData?.monthsList}
                  width={"50"}
                  widthTwo={`h-[200]`}
                />
              </p>
              <p></p>
            </div>
          </div>

          {/* Second card */}
          <div>
            <div className="px-2">
              <RepairPalCard
                heading={"Revenue"}
                percentChange={percentage?.TowRevenue}
                difference={differ?.TowRevenue}
                valueA={oldSum?.TowRevenue}
              />
            </div>
            <div className="bg-white rounded-lg px-8 py-4 m-2 space-y-2">
              <h2 className="text-lg font-bold mb-2  text-[#1F3B59]">
                Revenue
              </h2>

              <p className="text-gray-700 text-base">
                {/* <canvas ref={chartRefs[1]} /> */}
                <RevenueScrollBarChart
                  months={towsDropDownChartsData?.monthsList}
                  TotalRevenue={towsDropDownChartsData?.TotalRevenue}
                  name="Revenue"
                  id="202"
                  width={"50"}
                  widthTwo={`h-[200]`}
                />
              </p>
              <p></p>
            </div>
          </div>
          {/* Third card */}
          <div className=" col-span-1 md:col-span-2 lg:col-span-1 ">
            <div className="px-2">
              <RepairPalCard
                heading={"ARO"}
                percentChange={percentage?.AROForTows}
                difference={differ?.AROForTows}
                valueA={oldSum?.AROForTows}
              />
            </div>
            <div className="bg-white rounded-lg px-8 py-4 m-2 space-y-2">
              <h2 className="text-lg font-bold mb-2  text-[#1F3B59]">ARO</h2>

              <p className="text-gray-700 text-base">
                {/* <canvas ref={chartRefs[2]} /> */}
                <AROScrollBarChart
                  name="ARO"
                  ARO={towsDropDownChartsData?.ARO}
                  months={towsDropDownChartsData?.monthsList}
                  id="203"
                  width={"50"}
                  widthTwo={`h-[200]`}
                />
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerChartsSection;
