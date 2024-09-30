import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import CustomersScrollBarChart from "./towsChart/customersScrollBarChart";
import AROScrollBarChart from "./towsChart/aroScrollBarChart";
import RevenueScrollBarChart from "./towsChart/revenueScrollBarChart";

const CustomerChartsSection = ({ chartData }) => {
  return (
    <div className="bg-[#707070] mt-2 rounded-md">
      <div className="flex-1 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3   flex-wrap justify-center items-center ">
        {/* First card */}
        <div className="bg-white rounded-lg px-8 py-4 m-2">
          <h2 className="text-lg font-bold mb-2  text-[#1F3B59]">Customers</h2>
          <div className="mb-1">
            <ul class="list-disc flex gap-4 px-2 items-center">
              <li class="text-[#1F3B59] li-li">
                {" "}
                <p className="text-[#1F66AC] font-semibold text-sm">
                  Total
                </p>{" "}
              </li>
              <li class="text-[#1F66AC] li-li">
                {" "}
                <p className="text-[#1F66AC] font-semibold text-sm "> New</p>
              </li>
              <li class="text-[#888888] li-li">
                {" "}
                <p className="text-[#1F66AC] font-semibold text-sm">
                  {" "}
                  Returning
                </p>
              </li>
            </ul>
          </div>
          <p className="text-gray-700 text-base">
            <CustomersScrollBarChart
              months={chartData?.monthsList}
              NewCustomer={chartData?.NewCustomer}
              ReturnCustomer={chartData?.ReturnCustomer}
              TotalCustomer={chartData?.TotalCustomer}
              name="Customers"
              id="401"
              width={"50"}
              widthTwo={`h-[200]`}
            />
          </p>
        </div>
        {/* Second card */}
        <div className="bg-white rounded-lg px-8 py-4 m-2">
          <h2 className="text-lg font-bold mb-2 text-[#1F3B59]">Revenue</h2>
          <div className="mb-1">
            <ul class="list-disc flex gap-4 px-2 items-center">
              <li class="text-[#1F3B59] li-li">
                {" "}
                <p className="text-[#1F66AC] font-semibold text-sm">
                  Total
                </p>{" "}
              </li>
              <li class="text-[#1F66AC] li-li">
                {" "}
                <p className="text-[#1F66AC] font-semibold text-sm"> New</p>
              </li>
              <li class="text-[#888888] li-li">
                {" "}
                <p className="text-[#1F66AC] font-semibold text-sm">
                  {" "}
                  Returning
                </p>
              </li>
            </ul>
          </div>

          <p className="text-gray-700 text-base">
            <RevenueScrollBarChart
              months={chartData?.monthsList}
              NewCustRevenue={chartData?.NewCustRevenue}
              ReturnCustRevenue={chartData?.ReturnCustRevenue}
              TotalRevenue={chartData?.TotalRevenue}
              name="Customers"
              id="401"
              width={"50"}
              widthTwo={`h-[200]`}
            />
          </p>
        </div>
        {/* Third card */}
        <div className="bg-white rounded-lg px-8 py-4 m-2 col-span-1 md:col-span-2 lg:col-span-1 ">
          <h2 className="text-lg font-bold mb-2 text-[#1F3B59]">ARO</h2>
          <div className="mb-1">
            <ul class="list-disc flex gap-4 px-2 items-center">
              <li class="text-[#1F3B59] li-li">
                {" "}
                <p className="text-[#1F66AC] font-semibold text-sm">
                  Total
                </p>{" "}
              </li>
              <li class="text-[#1F66AC] li-li">
                {" "}
                <p className="text-[#1F66AC] font-semibold text-sm"> New</p>
              </li>
              <li class="text-[#888888] li-li">
                {" "}
                <p className="text-[#1F66AC] font-semibold text-sm">
                  {" "}
                  Returning
                </p>
              </li>
            </ul>
          </div>
          <p className="text-gray-700 text-base">
            <AROScrollBarChart
              months={chartData?.monthsList}
              ARO={chartData?.ARO}
              ARO_New={chartData?.ARO_New}
              ARO_Return={chartData?.ARO_Return}
              // ARO,
              // ARO_New,
              // ARO_Return,

              name="Customers"
              id="401"
              width={"50"}
              widthTwo={`h-[200]`}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerChartsSection;
