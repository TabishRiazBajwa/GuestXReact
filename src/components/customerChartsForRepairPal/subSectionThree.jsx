import React from "react";

import RepairPalCard from "../repairpalCards/RepairPalCard";
import AroScrollBarChart from "./referralsChart/aroScrollBarChart";
import ReferralsScrollBarChart from "./referralsChart/referralsScrollBarChart";
import RevenueScrollBarChart from "./referralsChart/revenueScrollBarChart";

const CustomerChartsSection = ({
  referralsDownChartsData,
  percentage,
  differ,
  oldSum,
}) => {
  return (
    <>
      <div className="bg-[#707070] mt-2 rounded-md">
        <div className="flex-1  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-wrap justify-center items-center ">
          {/* First card */}
          <div>
            <div className="px-2">
              <RepairPalCard
                valueA={oldSum?.Referrals}
                heading={"Referrals"}
                percentChange={percentage?.Referrals}
                difference={differ?.Referrals}
              />
            </div>
            <div className="bg-white rounded-lg px-8 py-4 m-2 space-y-2">
              <h2 className="text-lg font-bold mb-2  text-[#1F3B59]">
                Referrals
              </h2>

              <p className="text-gray-700 text-base">
                {/* <canvas ref={chartRefs[0]} /> */}
                <ReferralsScrollBarChart
                  months={referralsDownChartsData?.monthsList}
                  DataTotalReferrals={referralsDownChartsData?.DataReferrals}
                  name="Referrals"
                  id="301"
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
                percentChange={percentage?.RefferralRevenue}
                difference={differ?.RefferralRevenue}
                valueA={oldSum?.RefferralRevenue}
              />
            </div>
            <div className="bg-white rounded-lg px-8 py-4 m-2 space-y-2">
              <h2 className="text-lg font-bold mb-2  text-[#1F3B59]">
                Revenue
              </h2>

              <p className="text-gray-700 text-base">
                {/* <canvas ref={chartRefs[1]} /> */}
                <RevenueScrollBarChart
                  months={referralsDownChartsData?.monthsList}
                  TotalRevenue={referralsDownChartsData?.TotalRevenue}
                  name="Revenue"
                  id="302"
                  width={"50"}
                  widthTwo={`h-[200]`}
                />
              </p>
              <p></p>
            </div>
          </div>
          {/* Third card */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 ">
            <div className="px-2">
              <RepairPalCard
                heading={"ARO"}
                valueA={oldSum?.AROForReferral}
                percentChange={percentage?.AROForReferral}
                difference={differ?.AROForReferral}
              />
            </div>
            <div className="bg-white rounded-lg px-8 py-4 m-2 space-y-2 col-span-1 md:col-span-2 lg:col-span-1 ">
              <h2 className="text-lg font-bold mb-2  text-[#1F3B59]">ARO</h2>

              <p className="text-gray-700 text-base">
                {/* <canvas ref={chartRefs[2]} /> */}
                <AroScrollBarChart
                  months={referralsDownChartsData?.monthsList}
                  ARO={referralsDownChartsData?.ARO}
                  name="ARO"
                  id="303"
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
