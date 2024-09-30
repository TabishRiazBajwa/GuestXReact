import React, { useEffect, useState } from "react";

// import SideBar from "../../components/SideBar/SideBar";

// import Header from "../../components/Header/Header";

import RepairPalCharts from "../../components/customerChartsForRepairPal/repairPalCharts";

import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

import { Loader } from "../../components/loaders/Loaders";

import "../../App.css";

import RepairPalCard from "../../components/repairpalCards/RepairPalCard";

import moment from "moment";

import useFetchRepairPalData from "../../hooks/useFetchRepairPalData";
import Layout from "../../Layouts/Layouts";

function RepairPal(props) {
  const {
    repairpal_investment_loading,
    repairpal_investment_data,
    referal_revenue_data,
    repairpal_revenue_data,
    getReferallRevenueRequest,
    getRepairpalRevenueRequest,
    getRepairpalInvestmentRequest
  } = props;
  const [showBody, setShowBody] = useState(false);
  const [startMonth, setStartMonth] = useState(null);
  const [endMonth, setEndMonth] = useState(null);
  const [startYear, setStartYear] = useState(null);
  const [endYear, SetEndYear] = useState(null);
  const [selectedStartDate, setSeletedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [newStartDate, setNewStartDate] = useState(null);
  const [newEndDate, setNewEndDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const [oldSum, setOldSum] = useState(null);
  const [referralsDownChartsData, setReferralsDownChartsData] = useState();
  const [towsDropDownChartsData, setTowsDropDownChartsData] = useState();
  const [chartData, setChartData] = useState({});
  const [dataList, setDataList] = useState(
    Array.from({ length: 8 }, () => null)
  );
  const [
    callAndAppointmentDropDownChartsData,
    setCallAndAppointmentDropDownChartsData
  ] = useState();
  const [percentage, setPercentage] = useState();
  const [differ, setDifferance] = useState();
  const [selectedLocation, setSelectedLocation] = useState(null);
  const {
    prepareOldDataRepairPal,
    prepareNewDataRepairPal,
    getChartsDataRepairPal,
    gerPercentageRepairPal,
    getDifferenceRepairPal
  } = useFetchRepairPalData(
    selectedStartDate,
    selectedEndDate,
    referal_revenue_data,
    repairpal_investment_data
  );
  const user = JSON.parse(localStorage.getItem("user")).email;

  useEffect(() => {
    if (repairpal_revenue_data.length === 0) {
      getRepairpalRevenueRequest({
        email: user
      });
    }
    getReferallRevenueRequest({
      location: selectedLocation
        ? selectedLocation?.RepairPalLocationName
        : "Honest-1 Auto Care - Deltona"
    });
    getRepairpalInvestmentRequest({
      location: selectedLocation
        ? selectedLocation?.RepairPalLocationName
        : "Honest-1 Auto Care - Deltona"
    });
  }, [selectedLocation]);

  useEffect(() => {
    if ((referal_revenue_data, repairpal_investment_data)) {
      let selectedStart = moment(selectedStartDate);
      let selectedEnd = moment(selectedEndDate);
      let oldSumA = prepareOldDataRepairPal(selectedStart, selectedEnd);
      setOldSum(oldSumA);
      let newSum = prepareNewDataRepairPal(newStartDate, newEndDate);
      let chartData = getChartsDataRepairPal(selectedStart, selectedEnd);
      setReferralsDownChartsData({
        ...chartData.referralsDownChartsData
      });
      setTowsDropDownChartsData({
        ...chartData.towsDropDownChartsData
      });
      setChartData({
        ...chartData.chartData
      });
      setCallAndAppointmentDropDownChartsData({
        ...chartData.callAndAppointmentDropDownChartsData
      });
      let percentageChange = gerPercentageRepairPal();
      for (let key in newSum) {
        if (oldSumA.hasOwnProperty(key)) {
          let change = newSum[key] - oldSumA[key];
          let percentage = (change / newSum[key]) * 100;
          percentageChange[key] = percentage.toFixed(2);
        }
      }
      let difference = getDifferenceRepairPal();
      for (let key in newSum) {
        if (!isNaN(newSum[key]) && !isNaN(oldSumA[key])) {
          difference[key] = oldSumA[key] - newSum[key];
        }
      }
      if (percentageChange) {
        setPercentage(percentageChange);
      }
      if (difference) {
        setDifferance(difference);
      }

      let List = [
        {
          label: "Revenue",
          value: oldSumA?.TotalRevenue,
          percentageChange: percentageChange?.TotalRevenue,
          difference: difference?.TotalRevenue
        },
        {
          label: "Investment",
          value: oldSumA?.Investment,
          percentageChange: percentageChange?.Investment,
          difference: difference?.Investment
        },
        {
          label: "Calls & Appts",
          value: oldSumA?.CallsAndAppts,
          percentageChange: percentageChange?.CallsAndAppts,
          difference: difference?.CallsAndAppts
        },
        {
          label: "Customers",
          value: oldSumA?.Customers,
          percentageChange: percentageChange?.Customers,
          difference: difference?.Customers
        },
        {
          label: "Conversion Rate",
          value: oldSumA?.ConversionRate,
          percentageChange: percentageChange?.ConversionRate,
          difference: difference?.ConversionRate
        },
        {
          label: "ARO",
          value: oldSumA?.ARO,
          percentageChange: percentageChange?.ARO,
          difference: difference?.ARO
        },
        {
          label: "Tows",
          value: oldSumA?.Tows,
          percentageChange: percentageChange?.Tows,
          difference: difference?.Tows
        },
        {
          label: "Referrals",
          value: oldSumA?.Referrals,
          percentageChange: percentageChange?.Referrals,
          difference: difference?.Referrals
        }
      ];
      setDataList(List);
    }
  }, [
    isOpen,
    repairpal_investment_data,
    referal_revenue_data,
    repairpal_revenue_data
  ]);

  return (
    // <>
    //   <div
    //     className="flex w-screen h-screen p-2 space-x-6 bg-gray-300"
    //     style={{ overflow: "hidden" }}
    //   >
    //     <SideBar />
    //     <div className="flex flex-col items-center w-full h-full overflow-x-auto">
    //       <Header
    //         label="Repair Pal - Summary"
    //         setIsOpen={setIsOpen}
    //         selectedLocation={selectedLocation}
    //         setSelectedLocation={setSelectedLocation}
    //         repairpal_revenue_data={repairpal_revenue_data}
    //         isOpen={isOpen}
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

    //       <div className="w-full pt-4  pr-4 ">
    //         <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2  ">
    //           {dataList.map((item) => {
    //             return repairpal_investment_loading ? (
    //               <Loader></Loader>
    //             ) : (
    //               <RepairPalCard
    //                 key={item?.label}
    //                 heading={item?.label}
    //                 valueA={item?.value}
    //                 percentChange={item?.percentageChange}
    //                 difference={item?.difference}
    //               />
    //             );
    //           })}
    //         </div>
    //         <div className="w-full pt-4 h-8">
    //           <div className="bg-white rounded-lg shadow-lg">
    //             <div className="p-1  ">
    //               <div
    //                 className="flex items-center gap-4  cursor-pointer px-4  m-6 rounded-md"
    //                 onClick={() => setShowBody(!showBody)}
    //               >
    //                 <div className="w-6 h-6 bg-[#0F2E60] rounded-full flex items-center justify-center cursor-pointer">
    //                   <span className="text-white">
    //                     {showBody ? <AiFillCaretUp /> : <AiFillCaretDown />}
    //                   </span>
    //                 </div>
    //                 <div className="text-[#0F2E60] font-medium">Charts</div>
    //                 <div className="flex-grow border-b border-gray-500"></div>
    //               </div>
    //             </div>
    //           </div>
    //           {showBody && (
    //             <RepairPalCharts
    //               oldSum={oldSum}
    //               differ={differ}
    //               percentage={percentage}
    //               callAndAppointmentDropDownChartsData={
    //                 callAndAppointmentDropDownChartsData
    //               }
    //               towsDropDownChartsData={towsDropDownChartsData}
    //               referralsDownChartsData={referralsDownChartsData}
    //               chartData={chartData}
    //               showBody={showBody}
    //             />
    //           )}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
    <Layout
      headerProps={{
        label: "Repair Pal - Summary",
        setIsOpen: setIsOpen,
        selectedLocation: selectedLocation,
        setSelectedLocation: setSelectedLocation,
        repairpal_revenue_data: repairpal_revenue_data,
        isOpen: isOpen,
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
        setIsOptionOpen: setIsOptionOpen
      }}
    >
      <div className="w-full pt-4  pr-4 ">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2  ">
          {dataList.map((item) => {
            return repairpal_investment_loading ? (
              <Loader></Loader>
            ) : (
              <RepairPalCard
                key={item?.label}
                heading={item?.label}
                valueA={item?.value}
                percentChange={item?.percentageChange}
                difference={item?.difference}
              />
            );
          })}
        </div>
        <div className="w-full pt-4 h-8">
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
          {showBody && (
            <RepairPalCharts
              oldSum={oldSum}
              differ={differ}
              percentage={percentage}
              callAndAppointmentDropDownChartsData={
                callAndAppointmentDropDownChartsData
              }
              towsDropDownChartsData={towsDropDownChartsData}
              referralsDownChartsData={referralsDownChartsData}
              chartData={chartData}
              showBody={showBody}
            />
          )}
        </div>
      </div>
    </Layout>
  );
}

export default RepairPal;
