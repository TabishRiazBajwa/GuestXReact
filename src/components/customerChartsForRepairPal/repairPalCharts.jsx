import React, { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import SectionOne from "./subSectionOne";
import SectionTwo from "./subSectionTwo";
import SectionThree from "./subSectionThree";
import InvestmentChartComponent from "./dropDownCharts/investmentScrollBarChart";
import CustomerChartComponent from "./dropDownCharts/customersScrollBarChart";
import AROChartComponent from "./dropDownCharts/aroScrollBarChart";
import RevenueChartComponent from "./dropDownCharts/revenueScrollBarChart";
import ROIChartComponent from "./dropDownCharts/roiScrollBarChart";
import { HeadingCard } from "../commonCards/cards";

const RepairPalCharts = ({
  chartData = {},
  callAndAppointmentDropDownChartsData = {},
  towsDropDownChartsData = {},
  referralsDownChartsData = {},
  percentage,
  differ,
  oldSum,
}) => {
  const [showBody, setShowBody] = useState();
  const [showBodyTwo, setShowBodyTwo] = useState();
  const [showBodyThree, setShowBodyThree] = useState();
  return (
    <>
      <div className="bg-[#707070] mt-2 pb-1 rounded-md">
        <div className="flex-1  grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 flex-wrap justify-center items-center ">
          {/* First card */}
          <div className="bg-white rounded-lg px-8 py-4 m-2">
            <HeadingCard
              heading={"Investment"}
              label1={"Budget"}
              color1={"text-[#1F66AC]"}
              label2={"Investment"}
              color2={"text-[#888888]"}
            />

            <p className="text-gray-700  text-base">
              <InvestmentChartComponent
                name="Investment"
                id="14"
                width={"50"}
                widthTwo={`h-[200]`}
                investments={chartData?.investments}
                budget={chartData?.budget}
                months={chartData?.monthsList}
              />
            </p>
          </div>
          {/* Second card */}
          <div className="bg-white rounded-lg px-8 py-4 m-2">
            <HeadingCard
              heading={"Customers"}
              label1={"Total"}
              color1={"text-[#1F3B59]"}
              label2={"Tows"}
              color2={"text-[#1F66AC]"}
              label3={"Referrals"}
              color3={"text-[#888888]"}
            />
            <p className="text-gray-700 text-base">
              <CustomerChartComponent
                width={"50"}
                widthTwo={`h-[200]`}
                name="aakkk"
                id="11"
                months={chartData?.monthsList}
                customersTotal={chartData?.DataCustomers}
                tows={chartData?.DataTows}
                referrals={chartData?.DataReferrals}
              />
            </p>
          </div>
          {/* Third card */}
          <div className="bg-white rounded-lg px-8 py-4 m-2 col-span-1 md:col-span-2  lg:col-span-1 ">
            <HeadingCard
              heading={"Revenue"}
              label1={"Total"}
              color1={"text-[#1F3B59]"}
              label2={"Calls"}
              color2={"text-[#1F66AC]"}
              label3={"Tows"}
              color3={"text-[#D3D3D3]"}
              label4={"Referrals"}
              color4={"text-[#888888]"}
            />
            <p
              className="text-gray-700 text-base"
              id="eazaq"
              htmlfor="revenueChart"
            >
              <RevenueChartComponent
                width={"50"}
                widthTwo={`h-[200]`}
                name="aakkk"
                id="12"
                months={chartData?.monthsList}
                revenueTotal={chartData?.TotalRevenue}
                calls={chartData?.CallApptsRevenue}
                tows={chartData?.TowRevenue}
                referrals={chartData?.RefferralRevenue}
              />
            </p>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 flex-wrap justify-center items-center ">
          {/* First card */}
          <div className="bg-white rounded-lg px-8 py-4 m-2">
            <h2 className="text-lg font-bold mb-2  text-[#1F3B59]">ROI</h2>
            <div className="mb-1 py-2"></div>
            <p className="text-gray-700 text-base">
              <ROIChartComponent
                // width={"50"}
                widthTwo={`h-[200]`}
                name="ROI"
                id="12"
                width="max-w-[2000px]"
                months={chartData?.monthsList}
                ROI={chartData?.ROI}
              />
            </p>
          </div>
          {/* Second card */}
          <div className="bg-white rounded-lg px-8 py-4 m-2">
            <HeadingCard
              heading={"ARO"}
              label1={"Referral"}
              color1={"text-[#1F3B59]"}
              label2={"Tows"}
              color2={"text-[#1F66AC]"}
              label3={"Calls"}
              color3={"text-[#888888]"}
            />
            <p className="text-gray-700 text-base">
              <AROChartComponent
                // width={"50"}
                widthTwo={`h-[200]`}
                name="ARO"
                id="13"
                width="max-w-[2000px]"
                months={chartData?.monthsList}
                calls={chartData?.CallsAndAppts}
                tows={chartData?.DataTows}
                referrals={chartData?.DataReferrals}
              />
            </p>
          </div>
        </div>
        <div className="">
          <div className="bg-white rounded-lg shadow-lg mt-4 mx-2">
            <div className="p-1  ">
              <div
                className="flex items-center gap-4  cursor-pointer px-4  m-6 rounded-md"
                onClick={() => setShowBody(!showBody)}
              >
                <div className="w-6 h-6 bg-[#0F2E60] rounded-full flex items-center justify-center cursor-pointer">
                  <span className="text-white">
                    {showBody ? <AiFillCaretUp /> : <AiFillCaretDown />}
                  </span>
                </div>
                <div className="text-[#0F2E60] font-medium">
                  Calls and Appointments
                </div>
                <div className="flex-grow border-b border-gray-500"></div>
              </div>
            </div>
          </div>
          {showBody && (
            <SectionOne
              oldSum={oldSum}
              percentage={percentage}
              differ={differ}
              callAndAppointmentDropDownChartsData={
                callAndAppointmentDropDownChartsData
              }
            />
          )}

          <div className="bg-white rounded-lg shadow-lg mt-4 mx-2">
            <div className="p-1  ">
              <div
                className="flex items-center gap-4  cursor-pointer px-4  m-6 rounded-md"
                onClick={() => setShowBodyTwo(!showBodyTwo)}
              >
                <div className="w-6 h-6 bg-[#0F2E60] rounded-full flex items-center justify-center cursor-pointer">
                  <span className="text-white">
                    {showBodyTwo ? <AiFillCaretUp /> : <AiFillCaretDown />}
                  </span>
                </div>
                <div className="text-[#0F2E60] font-medium">Tows</div>
                <div className="flex-grow border-b border-gray-500"></div>
              </div>
            </div>
          </div>
          {showBodyTwo && (
            <SectionTwo
              oldSum={oldSum}
              differ={differ}
              percentage={percentage}
              towsDropDownChartsData={towsDropDownChartsData}
            />
          )}

          <div className="bg-white rounded-lg shadow-lg mt-4 mx-2 mb-10">
            <div className="p-1">
              <div
                className="flex items-center gap-4  cursor-pointer px-4  m-6 rounded-md"
                onClick={() => setShowBodyThree(!showBodyThree)}
              >
                <div className="w-6 h-6  bg-[#0F2E60] rounded-full flex items-center justify-center cursor-pointer">
                  <span className="text-white">
                    {showBodyThree ? <AiFillCaretUp /> : <AiFillCaretDown />}
                  </span>
                </div>
                <div className="text-[#0F2E60] font-medium">Referrals</div>
                <div className="flex-grow border-b border-gray-500"></div>
              </div>
            </div>
          </div>

          {showBodyThree && (
            <SectionThree
              oldSum={oldSum}
              differ={differ}
              percentage={percentage}
              referralsDownChartsData={referralsDownChartsData}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default RepairPalCharts;
