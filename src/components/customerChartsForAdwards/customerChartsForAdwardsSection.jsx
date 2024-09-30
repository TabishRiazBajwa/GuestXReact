import React from "react";
import InvestmentScrollBarChart from "./dropDownCharts/investmentScrollBarChart";
import CallAndApptsScrollBarChart from "./dropDownCharts/callAndApptsScrollBarChart";
import CustomersScrollBarChart from "./dropDownCharts/customersScrollBarChart";
import ConversionRateScrollBarChart from "./dropDownCharts/conversionRateScrollBarChart";
import RevenueScrollBarChart from "./dropDownCharts/revenueScrollBarChart";
import AROScrollBarChart from "./dropDownCharts/aroScrollBarChart";
import ROIScrollBarChart from "./dropDownCharts/roiScrollBarChart";
import ImpressionAndClickScrollBarChart from "./dropDownCharts/impressionAndClickScrollBarChart";
import CPCandCPLScrollBarChart from "./dropDownCharts/CPCandCPLScrollBarChart";
import CTRandPVLScrollBarChart from "./dropDownCharts/CTRandPVLScrollBarChart";
import { HeadingCard } from "../commonCards/cards";

const CustomerChartsSection = (props) => {
  const { chartData } = props;

  return (
    <div className="bg-[#707070] mt-2 rounded-md">
      <div className="flex-1  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-wrap justify-center items-center ">
        {/* First card */}
        <div className="bg-white rounded-lg px-8 py-4 m-2">
          <HeadingCard
            heading={"Investment"}
            label1={"Budget"}
            color1={"text-[#1F66AC]"}
            label2={"Investment"}
            color2={"text-[#1F3B59]"}
          />

          <p className="text-gray-700 text-base">
            <InvestmentScrollBarChart
              months={chartData?.monthsList}
              Investment={chartData?.Investment}
              name="Investment"
              id="401"
              width={"50"}
              widthTwo={`h-[200]`}
            />
          </p>
        </div>
        {/* Second card */}
        <div className="bg-white rounded-lg px-8 py-4 m-2">
          <HeadingCard
            heading={"Call & Appointments"}
            label1={"Calls"}
            color1={"text-[#1F3B59]"}
            label2={"Appointments"}
            color2={"text-[#888888]"}
          />
          <p className="text-gray-700 text-base">
            <CallAndApptsScrollBarChart
              months={chartData?.monthsList}
              Calls={chartData?.Calls}
              Appts={chartData?.Appts}
              name=" CallAppointments"
              id="402"
              width={"50"}
              widthTwo={`h-[200]`}
            />
          </p>
        </div>
        {/* Third card */}
        <div className="bg-white rounded-lg px-8 py-4 m-2  col-span-1 md:col-span-2  lg:col-span-1">
          <HeadingCard
            heading={"Customers"}
            label1={"New"}
            color1={"text-[#1F3B59]"}
            label2={"Returning"}
            color2={"text-[#888888]"}
          />
          <p className="text-gray-700 text-base">
            <CustomersScrollBarChart
              months={chartData?.monthsList}
              CustomersNew={chartData?.CustomersNew}
              ReturningCustomers={chartData?.ReturningCustomers}
              name=" Customers"
              id="403"
              width={"50"}
              widthTwo={`h-[200]`}
            />
          </p>
        </div>
      </div>
      <div className="flex-1   grid grid-cols-1  md:grid-cols-2 xl:grid-cols-4 flex-wrap justify-center items-center ">
        {/* First card */}
        <div className="bg-white rounded-lg px-8 py-4 m-2">
          <HeadingCard
            heading={"Conversion Rate"}
            label1={"Total"}
            color1={"text-[#1F3B59]"}
            label2={"New"}
            color2={"text-[#888888]"}
          />
          <p className="text-gray-700 text-base">
            <ConversionRateScrollBarChart
              months={chartData?.monthsList}
              ConversionRateTotal={chartData?.ConversionRateTotal}
              NewConversionRate={chartData?.NewConversionRate}
              name="Convers. Rate"
              id="404"
              width={"50"}
              widthTwo={`h-[200]`}
            />
          </p>
        </div>
        {/* Second card */}
        <div className="bg-white rounded-lg px-8 py-4 m-2">
          <HeadingCard
            heading={"Revenue"}
            label1={"New"}
            color1={"text-[#1F3B59]"}
            label2={"Returning"}
            color2={"text-[#888888]"}
          />

          <p className="text-gray-700 text-base">
            <RevenueScrollBarChart
              months={chartData?.monthsList}
              RevenueNewCustomer={chartData?.RevenueNewCustomer}
              ReturningRevenue={chartData?.ReturningRevenue}
              name="Revenue"
              id="405"
              width={"50"}
              widthTwo={`h-[200]`}
            />
          </p>
        </div>
        {/* Third card */}
        <div className="bg-white rounded-lg px-8 py-4 m-2">
          <HeadingCard
            heading={"ARO"}
            label1={"New"}
            color1={"text-[#1F3B59]"}
            label2={"Returning"}
            color2={"text-[#888888]"}
          />

          <p className="text-gray-700 text-base">
            <AROScrollBarChart
              months={chartData?.monthsList}
              ReturningARO={chartData?.ReturningARO}
              NewARO={chartData?.NewARO}
              name="ARO"
              id="406"
              width={"50"}
              widthTwo={`h-[200]`}
            />
          </p>
        </div>
        {/* Fourth card */}
        <div className="bg-white rounded-lg px-8 py-4 m-2">
          <HeadingCard
            heading={"ROI"}
            label1={"New"}
            color1={"text-[#1F3B59]"}
          />

          <p className="text-gray-700 text-base">
            <ROIScrollBarChart
              months={chartData?.monthsList}
              name="ROI"
              ROI={chartData?.ROINew}
              id="407"
              width={"50"}
              widthTwo={`h-[200]`}
            />
          </p>
        </div>
      </div>
      <div className="flex-1  grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 flex-wrap justify-center items-center ">
        {/* First card */}
        <div className="bg-white rounded-lg px-8 py-4 m-2">
          <HeadingCard
            heading={"Impressions & Clicks"}
            label1={"Impressions"}
            color1={"text-[#1F3B59]"}
            label2={"Clicks"}
            color2={"text-[#888888]"}
          />
          <p className="text-gray-700 text-base">
            <ImpressionAndClickScrollBarChart
              months={chartData?.monthsList}
              Impressions={chartData?.Impressions}
              Clicks={chartData?.Clicks}
              name="Impression&Clicks"
              id="408"
              width={"50"}
              widthTwo={`h-[200]`}
            />
          </p>
        </div>
        {/* Second card */}
        <div className="bg-white rounded-lg px-8 py-4 m-2">
          <HeadingCard
            heading={"Cost Per Click & Cost Per Lead"}
            label1={"Cost Per Click"}
            color1={"text-[#1F3B59]"}
            label2={"Cost Per Lead"}
            color2={"text-[#707070]"}
          />
          <p className="text-gray-700 text-base">
            <CPCandCPLScrollBarChart
              months={chartData?.monthsList}
              CostPerClick={chartData?.CostPerClick}
              CostPerLead={chartData?.CostPerLead}
              name="Cost Per Click & Cost Per Lead"
              id="409"
              width={"50"}
              widthTwo={`h-[200]`}
            />
          </p>
        </div>
        {/* Third card */}
        <div className="bg-white rounded-lg px-8 py-4 m-2 col-span-1 md:col-span-2 xl:col-span-1 ">
          <HeadingCard
            heading={"Click Through Rate & Page Visits To Lead"}
            label1={"Click Through Rate"}
            color1={"text-[#1F3B59]"}
            label2={"Page Visits To Lead"}
            color2={"text-[#707070]"}
          />

          <p className="text-gray-700 text-base">
            <CTRandPVLScrollBarChart
              months={chartData?.monthsList}
              ClickThroughRate={chartData?.ClickThroughRate}
              PageVisitToLead={chartData?.PageVisitToLead}
              name="Click Thru Rate & Page Visit To Lead"
              id="410"
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
