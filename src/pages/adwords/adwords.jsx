import React, { useEffect, useState } from "react";
// import SideBar from "../../components/SideBar/SideBar";
// import Header from "../../components/Header/Header";
import RevenueChartsAdwards from "../../components/customerChartsForAdwards/customerChartsForAdwardsSection";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import "../../App.css";
import moment from "moment";
import { handleError } from "../../utils/utils";
import useFetchAdwordsData from "../../hooks/useFetchAdwordsData";
import {
  AROCard,
  CallAndAppointmentCard,
  ConversionRateCard,
  CustomersCard,
  InvestmentCard,
  ROICard,
  RevenueCard,
  SingleCardLoaderB,
  SingleCardWithNoSubCard,
} from "../../components/adwordsCards/adwordsCards";
import { SingleCardLoaderA } from "../../components/loaders/Loaders";
import {
  CallsandApptsLoader,
  RevenueLoader,
  TotalCustomersLoader,
} from "../../components/adwordsCards/loaders";
import Plot from "react-plotly.js";
import Layout from "../../Layouts/Layouts";

function AdwordsPage(props) {
  const {
    repairpal_revenue_data,
    get_adwords_ctr_aro_calls_loading,
    get_adwords_ctr_aro_calls_roi_loading,
    get_adwords_ctr_invest_loading,

    get_adwords_ctr_invest_data,
    get_adwords_ctr_aro_calls_roi_data,
    get_adwords_ctr_aro_calls_data,
    getAdwordsCTRAroCallsRoiRequest,
    getAdwordsCTRAroCallsRequest,
    getAdwordsCTRInvestRateRequest,
    getRepairpalRevenueRequest,
  } = props;

  const [showBody, setShowBody] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [startMonth, setStartMonth] = useState(null);
  const [endMonth, setEndMonth] = useState(null);
  const [startYear, setStartYear] = useState(null);
  const [endYear, SetEndYear] = useState(null);
  const [selectedStartDate, setSeletedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [newStartDate, setNewStartDate] = useState(null);
  const [newEndDate, setNewEndDate] = useState(null);
  const [percentage, setPercentage] = useState();
  const [differ, setDifferance] = useState();
  const [oldSum, setOldSum] = useState();
  const [chartData, setChartData] = useState();
  const [monthss, setMonth] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const [isOptionOpen, setIsOptionOpen] = useState(false);

  const {
    prepareOldData,
    prepareNewData,
    getChartsData,
    gerPercentage,
    getDifference,
  } = useFetchAdwordsData(
    get_adwords_ctr_aro_calls_data,
    get_adwords_ctr_aro_calls_roi_data,
    get_adwords_ctr_invest_data,
    selectedStartDate,
    selectedEndDate
  );

  useEffect(() => {
    if (
      get_adwords_ctr_invest_data.length > 0 &&
      get_adwords_ctr_aro_calls_roi_data.length > 0 &&
      get_adwords_ctr_aro_calls_data.length > 0
    ) {
      let selectedStart = moment(selectedStartDate);
      let selectedEnd = moment(selectedEndDate);
      let oldSumA = prepareOldData();

      setOldSum(oldSumA);
      const chartDataNew = getChartsData(selectedStart, selectedEnd);
      setMonth(chartDataNew.monthsList.length);
      setChartData({ ...chartDataNew });

      let newSum = prepareNewData(newStartDate, newEndDate);

      const percentageChange = gerPercentage(newSum, oldSumA);

      let difference = getDifference(newSum, oldSumA);

      if (percentageChange) {
        setPercentage(percentageChange);
      }
      if (difference) {
        setDifferance(difference);
      }
    }
  }, [
    get_adwords_ctr_invest_data,
    get_adwords_ctr_aro_calls_roi_data,
    get_adwords_ctr_aro_calls_data,
    isOpen,
  ]);
  const user = JSON.parse(localStorage.getItem("user")).email;

  useEffect(() => {
    if (repairpal_revenue_data.length === 0) {
      getRepairpalRevenueRequest({
        email: user
      });
    }
    getAdwordsCTRAroCallsRoiRequest({
      location: selectedLocation
        ? selectedLocation?.KukuiLocationName
        : "Honest-1 Auto Care Littleton",
    });
    getAdwordsCTRAroCallsRequest({
      location: selectedLocation
        ? selectedLocation?.KukuiLocationName
        : "Honest-1 Auto Care Littleton",
    });
    getAdwordsCTRInvestRateRequest({
      location: selectedLocation
        ? selectedLocation?.KukuiLocationName
        : "Honest-1 Auto Care Littleton",
    });
  }, [selectedLocation]);
  const colors = [
    "rgba(31,119,180,0.8)", // Color for left categories to Destination
    "rgba(255,127,14,0.8)",
    "rgba(44,160,44,0.8)",
    "rgba(214,39,40,0.8)",
    "rgba(148,103,189,0.8)",
    "rgba(140,86,75,0.8)",
    "rgba(227,119,194,0.8)",
    "rgba(127,127,127,0.8)", // Color for Destination to right categories
    "rgba(188,189,34,0.8)",
    "rgba(23,190,207,0.8)",
    "rgba(227,119,194,0.8)",
    "rgba(188,189,34,0.8)",
    "rgba(23,190,207,0.8)",
    "rgba(23,190,207,0.8)",
    "rgba(23,190,207,0.8)",
    "rgba(23,190,207,0.8)",
    "rgba(23,190,207,0.8)",
    "rgba(23,190,207,0.8)",
    "rgba(23,190,207,0.8)",
    "rgba(23,190,207,0.8)",
    "rgba(23,190,207,0.8)",
    "rgba(23,190,207,0.8)",
  ];
  const data = {
    type: "sankey",
    orientation: "h",
    node: {
      pad: 15,
      thickness: 4,
      line: {
        color: "black",
        width: 0.5,
      },
      labelSide: "right",
      label: [
        "Category 1",
        "Category 2",
        "Category 3",
        "Category 4",
        "Category 5",
        "Category 6",
        "Category 7",
        "Destination",
        "Dest 1",
        "Dest 2",
        "Dest 3",
        "Dest 4",
        "Dest 5",
        "Dest 6",
        "Dest 7",
        "Dest 8",
        "Dest 9",
        "Dest 10",
        "Dest 11",
        "Dest 12",
        "Dest 13",
      ],
      text: [
        "Cat 1",
        "Cat 2",
        "Cat 3",
        "Cat 4",
        "Cat 5",
        "Cat 6",
        "Cat 7",
        "",
        "D1",
        "D2",
        "D3",
        "D4",
        "D5",
        "D6",
        "D7",
        "D8",
        "D9",
        "D10",
        "D11",
        "D12",
        "D13",
      ], // Text labels for nodes
    },
    link: {
      source: [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7, // Left Categories to Destination
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
      ],
      target: [
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        8, // Destination and Right Categories
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
      ],
      value: [
        500,
        500,
        500,
        500,
        500,
        500,
        500,
        500, // Values for links
        250,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
      ],
      color: colors,
    },
  };
  const layout = {
    title: "Sankey Chart Example",
    shapes: [
      // Custom shape for node 8
      {
        type: "rect",
        x0: 0.4, // X position of the left corner of the shape
        x1: 0.6, // X position of the right corner of the shape
        y0: 0.9, // Y position of the bottom corner of the shape
        y1: 0.1, // Y position of the top corner of the shape
        xref: "paper",
        yref: "paper",
        line: {
          width: 2,
        },
        fillcolor: "green", // Set fill color to green
        opacity: 0.5, // Set opacity
        layer: "below", // Render below nodes and links
        line: {
          width: 2,
          color: "green", // Set border color to green
        },
        yaxis: "y2", // Use y2 axis for alignment
        xaxis: "x2", // Use x2 axis for alignment
        borderpad: 4, // Padding for the border
        // xref: 'x', // Use x axis for x coordinates
        // yref: 'y', // Use y axis for y coordinates
        xanchor: "left", // Anchor the x position to the left
        yanchor: "top", // Anchor the y position to the top
        bordercolor: "green", // Border color
        borderwidth: 2, // Border width
        // border-radius: 10, // Rounded border
      },
      // Add more shapes as needed...
    ],
  };

  return (
    // <>
    //   <div
    //     className="flex w-screen h-screen p-2 xl:space-x-2 md:space-x-6 bg-gray-300"
    //     style={{ overflow: "hidden" }}
    //   >
    //     <SideBar />

    //     <div className="flex flex-col items-center w-full h-full overflow-x-auto">
    //       <Header
    //         label="Google Ads Campaign"
    //         setIsOpen={setIsOpen}
    //         repairpal_revenue_data={repairpal_revenue_data}
    //         isOpen={isOpen}
    //         selectedLocation={selectedLocation}
    //         setSelectedLocation={setSelectedLocation}
    //         selectedStartDate={selectedStartDate}
    //         selectedEndDate={selectedEndDate}
    //         setSeletedStartDate={setSeletedStartDate}
    //         setSelectedEndDate={setSelectedEndDate}
    //         setNewStartDate={setNewStartDate}
    //         setNewEndDate={setNewEndDate}
    //         setStartMonth={setStartMonth}
    //         setEndMonth={setEndMonth}
    //         setStartYear={setStartYear}
    //         SetEndYear={SetEndYear}
    //         startMonth={startMonth}
    //         startYear={startYear}
    //         endMonth={endMonth}
    //         endYear={endYear}
    //         isOptionOpen={isOptionOpen}
    //         setIsOptionOpen={setIsOptionOpen}
    //       />
    //       {false && (
    //         <div className="flex justify-center items-center h-screen">
    //           <Plot data={[data]} layout={layout} />
    //         </div>
    //       )}
    //       <div className="w-full ">
    //         <div className=" ">
    //           <div className="">
    //             <div className="grid grid-cols-10 ">
    //               <div className=" col-span-10  xl:col-span-6  ">
    //                 <div className="grid grid-cols-6 lg:space-x-2  max-lg:space-y-2 ">
    //                   <InvestmentCard
    //                     loading={get_adwords_ctr_aro_calls_roi_loading}
    //                     oldSum={oldSum}
    //                     differ={differ}
    //                     percentage={percentage}
    //                   />
    //                   <ConversionRateCard
    //                     loading={get_adwords_ctr_aro_calls_roi_loading}
    //                     oldSum={oldSum}
    //                     differ={differ}
    //                     percentage={percentage}
    //                   />

    //                   {get_adwords_ctr_aro_calls_loading ? (
    //                     <TotalCustomersLoader />
    //                   ) : (
    //                     <CustomersCard
    //                       oldSum={oldSum}
    //                       differ={differ}
    //                       percentage={percentage}
    //                     />
    //                   )}
    //                 </div>
    //                 <div className="grid grid-cols-3 md:space-x-1 pt-2 max-lg:space-y-2">
    //                   {get_adwords_ctr_aro_calls_loading ? (
    //                     <RevenueLoader />
    //                   ) : (
    //                     <ROICard
    //                       oldSum={oldSum}
    //                       percentage={percentage}
    //                       differ={differ}
    //                       monthss={monthss}
    //                     />
    //                   )}
    //                   {get_adwords_ctr_aro_calls_loading ? (
    //                     <RevenueLoader />
    //                   ) : (
    //                     <AROCard
    //                       monthss={monthss}
    //                       oldSum={oldSum}
    //                       percentage={percentage}
    //                       differ={differ}
    //                     />
    //                   )}
    //                   {get_adwords_ctr_aro_calls_roi_loading ? (
    //                     <RevenueLoader />
    //                   ) : (
    //                     <RevenueCard
    //                       monthss={monthss}
    //                       oldSum={oldSum}
    //                       percentage={percentage}
    //                       differ={differ}
    //                     />
    //                   )}
    //                 </div>
    //               </div>

    //               <div className="col-span-10 xl:col-span-4  max-md:pt-2 xl:px-2 md:mt-2 xl:mt-0 ">
    //                 <div className="grid grid-cols-1 sm:grid-cols-3 lg:gap-2 max-lg:space-y-2  ">
    //                   {get_adwords_ctr_invest_loading ? (
    //                     <SingleCardLoaderB />
    //                   ) : (
    //                     <SingleCardWithNoSubCard
    //                       label={"Impressions"}
    //                       value={oldSum?.Impressions}
    //                       difference={differ?.Impressions}
    //                       percentage={percentage?.Impressions}
    //                     />
    //                   )}
    //                   {get_adwords_ctr_invest_loading ? (
    //                     <SingleCardLoaderB />
    //                   ) : (
    //                     <SingleCardWithNoSubCard
    //                       label={"Clicks"}
    //                       value={oldSum?.Clicks}
    //                       difference={differ?.Clicks}
    //                       percentage={percentage?.Clicks}
    //                     />
    //                   )}
    //                   {get_adwords_ctr_invest_loading ? (
    //                     <SingleCardLoaderB />
    //                   ) : (
    //                     <SingleCardWithNoSubCard
    //                       label={"Click Thru Rate"}
    //                       value={(oldSum?.ClickThroughRate * 100) / monthss}
    //                       difference={differ?.ClickThroughRate / monthss}
    //                       percentage={percentage?.ClickThroughRate / monthss}
    //                     />
    //                   )}
    //                 </div>
    //                 <div className="grid grid-cols-1 sm:grid-cols-2 md:space-x-2 pt-2 max-lg:space-y-2">
    //                   {get_adwords_ctr_invest_loading ? (
    //                     <SingleCardLoaderA />
    //                   ) : (
    //                     <SingleCardWithNoSubCard
    //                       label={"Page Visit to Lead"}
    //                       value={handleError(oldSum?.PageVisitToLead)}
    //                       difference={handleError(differ?.PageVisitToLead)}
    //                       percentage={percentage?.PageVisitToLead}
    //                     />
    //                   )}
    //                   {get_adwords_ctr_invest_loading ? (
    //                     <SingleCardLoaderA />
    //                   ) : (
    //                     <SingleCardWithNoSubCard
    //                       label={"Cost Per Click"}
    //                       value={handleError(oldSum?.CostPerClick / monthss)}
    //                       difference={differ?.CostPerClick / monthss}
    //                       percentage={percentage?.CostPerClick / monthss}
    //                     />
    //                   )}
    //                 </div>
    //                 <div className="grid  max-sm:grid-cols-1 md:grid-cols-2 md:space-x-2 pt-2 max-lg:space-y-2">
    //                   {get_adwords_ctr_aro_calls_loading ? (
    //                     <CallsandApptsLoader />
    //                   ) : (
    //                     <CallAndAppointmentCard
    //                       differ={differ}
    //                       oldSum={oldSum}
    //                       percentage={percentage}
    //                     />
    //                   )}
    //                   {get_adwords_ctr_invest_loading ? (
    //                     <SingleCardLoaderB />
    //                   ) : (
    //                     <SingleCardWithNoSubCard
    //                       label={"Cost Per Lead"}
    //                       value={oldSum?.CostPerLead / monthss}
    //                       difference={differ?.CostPerLead / monthss}
    //                       percentage={percentage?.CostPerLead / monthss}
    //                     />
    //                   )}
    //                 </div>
    //               </div>
    //             </div>

    //             <div className="w-full pt-4">
    //               <div className="bg-white rounded-lg shadow-lg">
    //                 <div className="p-1  ">
    //                   <div
    //                     className="flex items-center gap-4  cursor-pointer px-4  m-6 rounded-md"
    //                     onClick={() => setShowBody(!showBody)}
    //                   >
    //                     <div className="w-6 h-6 bg-[#0F2E60] rounded-full flex items-center justify-center cursor-pointer">
    //                       <span className="text-white">
    //                         {showBody ? <AiFillCaretUp /> : <AiFillCaretDown />}
    //                       </span>
    //                     </div>
    //                     <div className="text-[#0F2E60] font-medium">Charts</div>
    //                     <div className="flex-grow border-b border-gray-500"></div>
    //                   </div>
    //                 </div>
    //               </div>
    //               {showBody && <RevenueChartsAdwards chartData={chartData} />}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
    <Layout
      headerProps={{
        label: "Google Ads Campaign",
        setIsOpen: setIsOpen,
        repairpal_revenue_data: repairpal_revenue_data,
        isOpen: isOpen,
        selectedLocation: selectedLocation,
        setSelectedLocation: setSelectedLocation,
        selectedStartDate: selectedStartDate,
        selectedEndDate: selectedEndDate,
        setSeletedStartDate: setSeletedStartDate,
        setSelectedEndDate: setSelectedEndDate,
        setNewStartDate: setNewStartDate,
        setNewEndDate: setNewEndDate,
        setStartMonth: setStartMonth,
        setEndMonth: setEndMonth,
        setStartYear: setStartYear,
        SetEndYear: SetEndYear,
        startMonth: startMonth,
        startYear: startYear,
        endMonth: endMonth,
        endYear: endYear,
        isOptionOpen: isOptionOpen,
        setIsOptionOpen: setIsOptionOpen,
      }}
    >
      {false && (
        <div className="flex justify-center items-center h-screen">
          <Plot data={[data]} layout={layout} />
        </div>
      )}
      <div className="w-full ">
        <div className=" ">
          <div className="">
            <div className="grid grid-cols-10 ">
              <div className=" col-span-10  xl:col-span-6  ">
                <div className="grid grid-cols-6 lg:space-x-2  max-lg:space-y-2 ">
                  <InvestmentCard
                    loading={get_adwords_ctr_aro_calls_roi_loading}
                    oldSum={oldSum}
                    differ={differ}
                    percentage={percentage}
                  />
                  <ConversionRateCard
                    loading={get_adwords_ctr_aro_calls_roi_loading}
                    oldSum={oldSum}
                    differ={differ}
                    percentage={percentage}
                  />

                  {get_adwords_ctr_aro_calls_loading ? (
                    <TotalCustomersLoader />
                  ) : (
                    <CustomersCard
                      oldSum={oldSum}
                      differ={differ}
                      percentage={percentage}
                    />
                  )}
                </div>
                <div className="grid grid-cols-3 md:space-x-1 pt-2 max-lg:space-y-2">
                  {get_adwords_ctr_aro_calls_loading ? (
                    <RevenueLoader />
                  ) : (
                    <ROICard
                      oldSum={oldSum}
                      percentage={percentage}
                      differ={differ}
                      monthss={monthss}
                    />
                  )}
                  {get_adwords_ctr_aro_calls_loading ? (
                    <RevenueLoader />
                  ) : (
                    <AROCard
                      monthss={monthss}
                      oldSum={oldSum}
                      percentage={percentage}
                      differ={differ}
                    />
                  )}
                  {get_adwords_ctr_aro_calls_roi_loading ? (
                    <RevenueLoader />
                  ) : (
                    <RevenueCard
                      monthss={monthss}
                      oldSum={oldSum}
                      percentage={percentage}
                      differ={differ}
                    />
                  )}
                </div>
              </div>

              <div className="col-span-10 xl:col-span-4  max-md:pt-2 xl:px-2 md:mt-2 xl:mt-0 ">
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:gap-2 max-lg:space-y-2  ">
                  {get_adwords_ctr_invest_loading ? (
                    <SingleCardLoaderB />
                  ) : (
                    <SingleCardWithNoSubCard
                      label={"Impressions"}
                      value={oldSum?.Impressions}
                      difference={differ?.Impressions}
                      percentage={percentage?.Impressions}
                    />
                  )}
                  {get_adwords_ctr_invest_loading ? (
                    <SingleCardLoaderB />
                  ) : (
                    <SingleCardWithNoSubCard
                      label={"Clicks"}
                      value={oldSum?.Clicks}
                      difference={differ?.Clicks}
                      percentage={percentage?.Clicks}
                    />
                  )}
                  {get_adwords_ctr_invest_loading ? (
                    <SingleCardLoaderB />
                  ) : (
                    <SingleCardWithNoSubCard
                      label={"Click Thru Rate"}
                      value={(oldSum?.ClickThroughRate * 100) / monthss}
                      difference={differ?.ClickThroughRate / monthss}
                      percentage={percentage?.ClickThroughRate / monthss}
                    />
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:space-x-2 pt-2 max-lg:space-y-2">
                  {get_adwords_ctr_invest_loading ? (
                    <SingleCardLoaderA />
                  ) : (
                    <SingleCardWithNoSubCard
                      label={"Page Visit to Lead"}
                      value={handleError(oldSum?.PageVisitToLead)}
                      difference={handleError(differ?.PageVisitToLead)}
                      percentage={percentage?.PageVisitToLead}
                    />
                  )}
                  {get_adwords_ctr_invest_loading ? (
                    <SingleCardLoaderA />
                  ) : (
                    <SingleCardWithNoSubCard
                      label={"Cost Per Click"}
                      value={handleError(oldSum?.CostPerClick / monthss)}
                      difference={differ?.CostPerClick / monthss}
                      percentage={percentage?.CostPerClick / monthss}
                    />
                  )}
                </div>
                <div className="grid  max-sm:grid-cols-1 md:grid-cols-2 md:space-x-2 pt-2 max-lg:space-y-2">
                  {get_adwords_ctr_aro_calls_loading ? (
                    <CallsandApptsLoader />
                  ) : (
                    <CallAndAppointmentCard
                      differ={differ}
                      oldSum={oldSum}
                      percentage={percentage}
                    />
                  )}
                  {get_adwords_ctr_invest_loading ? (
                    <SingleCardLoaderB />
                  ) : (
                    <SingleCardWithNoSubCard
                      label={"Cost Per Lead"}
                      value={oldSum?.CostPerLead / monthss}
                      difference={differ?.CostPerLead / monthss}
                      percentage={percentage?.CostPerLead / monthss}
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="w-full pt-4">
              <div className="bg-white rounded-lg shadow-lg">
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
                    <div className="text-[#0F2E60] font-medium">Charts</div>
                    <div className="flex-grow border-b border-gray-500"></div>
                  </div>
                </div>
              </div>
              {showBody && <RevenueChartsAdwards chartData={chartData} />}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AdwordsPage;
