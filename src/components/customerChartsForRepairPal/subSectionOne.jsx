import React, { useEffect, useRef, useState } from "react";
import RepairPalCard from "../repairpalCards/RepairPalCard";
import CallAndApptScrollBarChart from "./callAndAppointmentChart/callAndApptScrollBarChart";
import AroScrollBarChart from "./callAndAppointmentChart/aroScrollBarChart";
import ConversionScrollBarChart from "./callAndAppointmentChart/conversionScrollBarChart";
import CustomersScrollBarChart from "./callAndAppointmentChart/customersScrollBarChart";
import RevenueScrollBarChart from "./callAndAppointmentChart/revenueScrollBarChart";

const CustomerChartsSection = ({
  callAndAppointmentDropDownChartsData,
  percentage,
  differ,
  oldSum,
}) => {
  return (
    <>
      <div className="bg-[#707070] mt-2 rounded-md">
        <div className="flex-1  grid grid-cols-1  md:grid-cols-2 xl:grid-cols-5 flex-wrap justify-center items-center ">
          {/* First card */}
          <div>
            <div className="px-2">
              <RepairPalCard
                heading={"Calls & Appts"}
                valueA={oldSum?.CallsAndAppts}
                percentChange={percentage?.CallsAndAppts}
                difference={differ?.CallsAndAppts}
              />
            </div>
            <div className="bg-white rounded-lg px-8 py-4 m-2 space-y-2">
              <h2 className="text-lg font-bold mb-2  text-[#1F3B59]">
                Calls & Appts
              </h2>

              <p className="text-gray-700 text-base">
                {/* <canvas ref={chartRefs[0]} /> */}
                <CallAndApptScrollBarChart
                  name="Calls & Appts"
                  id="144"
                  width={"50"}
                  widthTwo={`h-[200]`}
                  months={callAndAppointmentDropDownChartsData?.monthsList}
                  CallsAndAppts={
                    callAndAppointmentDropDownChartsData?.CallsAndAppts
                  }
                />
              </p>
              <p></p>
            </div>
          </div>

          {/* Second card */}
          <div>
            <div className="px-2">
              <RepairPalCard
                heading={"Customers"}
                valueA={oldSum?.Customers}
                percentChange={percentage?.Customers}
                difference={differ?.Customers}
              />
            </div>
            <div className="bg-white rounded-lg px-8 py-4 m-2 space-y-2">
              <h2 className="text-lg font-bold mb-2  text-[#1F3B59]">
                Customers
              </h2>

              <p className="text-gray-700 text-base">
                <CustomersScrollBarChart
                  name="Customers"
                  id="15"
                  width={"50"}
                  widthTwo={`h-[200]`}
                  months={callAndAppointmentDropDownChartsData?.monthsList}
                  Customers={
                    callAndAppointmentDropDownChartsData?.DataCustomers
                  }
                />
              </p>
              <p></p>
            </div>
          </div>
          {/* Third card */}
          <div>
            <div className="px-2">
              <RepairPalCard
                heading={"Conversions"}
                percentChange={percentage?.ConversionRate}
                difference={differ?.ConversionRate}
                valueA={oldSum?.ConversionRate}
              />
            </div>
            <div className="bg-white rounded-lg px-8 py-4 m-2 space-y-2">
              <h2 className="text-lg font-bold mb-2  text-[#1F3B59]">
                Conversions
              </h2>

              <p className="text-gray-700 text-base">
                <ConversionScrollBarChart
                  name="Conversions"
                  id="16"
                  width={"50"}
                  widthTwo={`h-[200]`}
                  months={callAndAppointmentDropDownChartsData?.monthsList}
                  Conversions={
                    callAndAppointmentDropDownChartsData?.ConversionRate
                  }
                />
              </p>
              <p></p>
            </div>
          </div>
          {/* Fourth card */}
          <div>
            <div className="px-2">
              <RepairPalCard
                heading={"Revenue"}
                percentChange={percentage?.CallApptsRevenue}
                difference={differ?.CallApptsRevenue}
                valueA={oldSum?.CallApptsRevenue}
              />
            </div>
            <div className="bg-white rounded-lg px-8 py-4 m-2 space-y-2">
              <h2 className="text-lg font-bold mb-2  text-[#1F3B59]">
                Revenue
              </h2>

              <p className="text-gray-700 text-base">
                <RevenueScrollBarChart
                  name="Revenue"
                  id="17"
                  width={"50"}
                  widthTwo={`h-[200]`}
                  Revenue={callAndAppointmentDropDownChartsData?.TotalRevenue}
                  months={callAndAppointmentDropDownChartsData?.monthsList}
                />
              </p>
              <p></p>
            </div>
          </div>
          {/* Fifth card */}
          <div className="col-span-1 md:col-span-2 xl:col-span-1">
            <div className="px-2">
              <RepairPalCard
                heading={"ARO"}
                percentChange={percentage?.AROForCallsAndAppts}
                difference={differ?.AROForCallsAndAppts}
                valueA={oldSum?.AROForCallsAndAppts}
              />
            </div>
            <div className="bg-white rounded-lg px-8 py-4 m-2 space-y-2">
              <h2 className="text-lg font-bold mb-2  text-[#1F3B59]">ARO</h2>

              <p className="text-gray-700 text-base">
                <AroScrollBarChart
                  name="ARO"
                  id="18"
                  width={"50"}
                  widthTwo={`h-[200]`}
                  ARO={callAndAppointmentDropDownChartsData?.Aro}
                  months={callAndAppointmentDropDownChartsData?.monthsList}
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
