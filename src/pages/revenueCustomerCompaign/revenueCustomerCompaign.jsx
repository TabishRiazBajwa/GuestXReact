import React, { useEffect, useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import RevenuaChartsSection from "../../components/revenueCharts/revenuaChartsSection";

import Header from "../../components/Header/Header";
import RevenueChartsTwo from "../../components/customerCharts/customerChartsSection";

import RevenueChartsThree from "../../components/customerChartsForCompaignSelection/customerChartsForCompaignSelection";
import Logo1 from "../../assets/logo1.png";
import Logo2 from "../../assets/logo2.png";
import Logo4 from "../../assets/logo4.png";

import moment from "moment";
import useFetchRepairPalData from "../../hooks/useFetchRepairPalData";

import useFetchAdwordsData from "../../hooks/useFetchAdwordsData";
import useFetchYelpData from "../../hooks/useFetchYelpData";
import useFetchRCRData from "../../hooks/useFetchRCRData";
import {
  CardOne,
  CardTwo,
  CardWithTwoSubCards,
  DropButton,
} from "../../components/revenueCustomerandCampaignCards/cards";
import { LoaderForRevenueCustomerAndCampaign } from "../../components/loaders/Loaders";
import Layout from "../../Layouts/Layouts";

function DashboardPage(props) {
  const {
    get_dashboard_rev_car_aro_loading,
    get_dashboard_aro_rev_cust_loading,
    repairpal_investment_loading,
    referal_revenue_loading,
    repairpal_revenue_loading,
    get_yelp_roi_loading,
    get_yelp_cost_per_lead_loading,
    yelp_per_clicks_calls_loading,
    get_yelp_conversation_rate_loading,

    get_yelp_roi_data,
    get_yelp_conversation_rate_data,
    yelp_per_clicks_calls_data,
    get_yelp_cost_per_lead_data,
    get_yelp_customer_call_appts_data,

    repairpal_revenue_data,

    getRepairpalRevenueRequest,
    getDashboardRevCarAroRequest,

    get_dashboard_aro_rev_cust_data,
    get_dashboard_rev_car_aro_data,

    getDashboardAroRevCustRequest,

    getAdwordsCTRAroCallsRoiRequest,
    getAdwordsCTRAroCallsRequest,
    getAdwordsCTRInvestRateRequest,

    get_adwords_ctr_invest_data,
    get_adwords_ctr_aro_calls_roi_data,
    get_adwords_ctr_aro_calls_data,

    getYelpCustomerCallApptsRequest,
    getYelpCostPerLeadRequest,

    getYelpConversationRateRequest,
    getYelpCTRPerClicksRequest,

    getReferallRevenueRequest,
    getRepairpalInvestmentRequest,

    repairpal_investment_data,
    referal_revenue_data,
  } = props;
  const [showBodyThree, setShowBodyThree] = useState(false);
  const [showBody, setShowBody] = useState(false);
  const [showBodyTwo, setShowBodyTwo] = useState(false);
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
  const [percentage, setPercentage] = useState();
  const [percentageForRepairPal, setPercentageForRepairPal] = useState();
  const [percentageForYelp, setPercentageForYelp] = useState();
  const [percentageForAdwords, setPercentageForAdwords] = useState();
  const [differ, setDifferance] = useState();
  const [differForRepairPal, setDifferanceForRepairPal] = useState();
  const [differForYelp, setDifferanceForYelp] = useState();
  const [differForAdwords, setDifferanceForAdwords] = useState();
  const [oldSum, setOldSum] = useState(null);
  const [oldSumForRepairPal, setOldSumForRepairPal] = useState(null);
  const [oldSumForAdwords, setOldSumForAdwords] = useState(null);
  const [oldSumForYelp, setOldSumForYelp] = useState(null);
  const [chartData, setChartData] = useState({});
  const [chartDataForRepairPal, setChartDataForRepairPal] = useState({});
  const [chartDataForAdwords, setChartDataForAdwords] = useState({});
  const [chartDataForYelp, setChartDataForYelp] = useState({});
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [referralsDownChartsData, setReferralsDownChartsData] = useState();
  const [towsDropDownChartsData, setTowsDropDownChartsData] = useState();
  const [
    callAndAppointmentDropDownChartsData,
    setCallAndAppointmentDropDownChartsData,
  ] = useState();
  const {
    prepareOldDataRCR,
    prepareNewDataRCR,
    getChartsDataRCR,
    gerPercentageRCR,
    getDifferenceRCR,
  } = useFetchRCRData(
    get_dashboard_aro_rev_cust_data,
    get_dashboard_rev_car_aro_data,
    selectedStartDate,
    selectedEndDate
  );

  useEffect(() => {
    if (true) {
      let selectedStart = moment(selectedStartDate);
      let selectedEnd = moment(selectedEndDate);
      let oldSumA = prepareOldDataRCR(selectedStart, selectedEnd);

      setOldSum(oldSumA);
      const chartDataNew = getChartsDataRCR(selectedStart, selectedEnd);
      setChartData({ ...chartDataNew });
      let newSum = prepareNewDataRCR(newStartDate, newEndDate);

      const percentageChange = gerPercentageRCR(newSum, oldSumA);

      let difference = getDifferenceRCR(newSum, oldSumA);
      if (percentageChange) {
        setPercentage(percentageChange);
      }
      if (difference) {
        setDifferance(difference);
      }
    }
  }, [get_dashboard_aro_rev_cust_data, get_dashboard_rev_car_aro_data, isOpen]);

  const {
    prepareOldDataRepairPal,
    prepareNewDataRepairPal,
    getChartsDataRepairPal,
    gerPercentageRepairPal,
    getDifferenceRepairPal,
  } = useFetchRepairPalData(
    selectedStartDate,
    selectedEndDate,
    referal_revenue_data,
    repairpal_investment_data
  );
  useEffect(() => {
    if ((referal_revenue_data, repairpal_investment_data)) {
      let selectedStart = moment(selectedStartDate);

      let selectedEnd = moment(selectedEndDate);

      let oldSumA = prepareOldDataRepairPal(selectedStart, selectedEnd);

      setOldSumForRepairPal(oldSumA);

      let newSum = prepareNewDataRepairPal(newStartDate, newEndDate);

      let chartData = getChartsDataRepairPal(selectedStart, selectedEnd);

      setReferralsDownChartsData({
        ...chartData.referralsDownChartsData,
      });

      setTowsDropDownChartsData({
        ...chartData.towsDropDownChartsData,
      });

      setChartDataForRepairPal({
        ...chartData.chartData,
      });

      setCallAndAppointmentDropDownChartsData({
        ...chartData.callAndAppointmentDropDownChartsData,
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
        setPercentageForRepairPal(percentageChange);
      }

      if (difference) {
        setDifferanceForRepairPal(difference);
      }
    }
  }, [
    isOpen,
    repairpal_investment_data,
    referal_revenue_data,
    repairpal_revenue_data,
  ]);

  useEffect(() => {
    getReferallRevenueRequest({
      location: selectedLocation
        ? selectedLocation?.RepairPalLocationName
        : "Honest-1 Auto Care - Deltona",
    });

    getRepairpalInvestmentRequest({
      location: selectedLocation
        ? selectedLocation?.RepairPalLocationName
        : "Honest-1 Auto Care - Deltona",
    });
  }, [selectedLocation]);
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
        : "Honest-1 Auto Care - Deltona",
    });
    getRepairpalInvestmentRequest({
      location: selectedLocation
        ? selectedLocation?.RepairPalLocationName
        : "Honest-1 Auto Care - Deltona",
    });
  }, [selectedLocation]);

  useEffect(() => {
    getYelpCustomerCallApptsRequest({
      location: selectedLocation
        ? selectedLocation?.KukuiLocationName
        : "Honest-1 Auto Care Littleton",
    });

    getYelpCostPerLeadRequest({
      location: selectedLocation
        ? selectedLocation?.YelpLocationName
        : "Honest-1 Auto Care - Littleton",
    });
    getYelpConversationRateRequest({
      location: selectedLocation
        ? selectedLocation?.KukuiLocationName
        : "Honest-1 Auto Care Littleton",
    });
    getYelpCTRPerClicksRequest({
      location: selectedLocation
        ? selectedLocation?.YelpLocationName
        : "Honest-1 Auto Care - Littleton",
    });
  }, [selectedLocation]);

  useEffect(() => {
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

  const {
    prepareOldDataYelp,
    prepareNewDataYelp,
    getChartsDataYelp,
    gerPercentageYelp,
    getDifferenceYelp,
  } = useFetchYelpData(
    selectedStartDate,
    selectedEndDate,
    get_yelp_customer_call_appts_data,
    get_yelp_cost_per_lead_data,
    get_yelp_roi_data,
    yelp_per_clicks_calls_data,
    get_yelp_conversation_rate_data
  );

  useEffect(() => {
    if (true) {
      let selectedStart = moment(selectedStartDate);
      let selectedEnd = moment(selectedEndDate);
      let oldSumA = prepareOldDataYelp();
      setOldSumForYelp(oldSumA);
      const chartDataNew = getChartsDataYelp(selectedStart, selectedEnd);
      setChartDataForYelp({ ...chartDataNew });
      let newSum = prepareNewDataYelp(newStartDate, newEndDate);
      const percentageChange = gerPercentageYelp(newSum, oldSumA);
      const difference = getDifferenceYelp(newSum, oldSumA);
      if (percentageChange) {
        setPercentageForYelp({ ...percentageChange });
      }
      if (difference) {
        setDifferanceForYelp(difference);
      }
    }
  }, [
    isOpen,
    get_yelp_cost_per_lead_data,
    get_yelp_customer_call_appts_data,
    yelp_per_clicks_calls_data,
  ]);

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

      setOldSumForAdwords(oldSumA);
      const chartDataNew = getChartsData(selectedStart, selectedEnd);
      setChartDataForAdwords({ ...chartDataNew });

      let newSum = prepareNewData(newStartDate, newEndDate);
      const percentageChange = gerPercentage(newSum, oldSumA);

      let difference = getDifference(newSum, oldSumA);

      if (percentageChange) {
        setPercentageForAdwords(percentageChange);
      }
      if (difference) {
        setDifferanceForAdwords(difference);
      }
    }
  }, [
    get_adwords_ctr_invest_data,
    get_adwords_ctr_aro_calls_roi_data,
    get_adwords_ctr_aro_calls_data,
    isOpen,
  ]);

  const handleClickThree = () => {
    setShowBodyThree(!showBodyThree);
    setShowBody(false);
    setShowBodyTwo(false);
  };
  const handleClick = () => {
    setShowBody(!showBody);
    setShowBodyThree(false);
    setShowBodyTwo(false);
  };
  const handleClickTwo = () => {
    setShowBodyTwo(!showBodyTwo);
    setShowBody(false);
    setShowBodyThree(false);
  };

  useEffect(() => {
    getDashboardAroRevCustRequest({
      location: selectedLocation
        ? selectedLocation.KukuiLocationName
        : "South Semoran",
    });

    getDashboardRevCarAroRequest({
      location: selectedLocation
        ? selectedLocation?.KukuiLocationName
        : "Honest-1 Auto Care Littleton",
    });
  }, [selectedLocation]);

  const getLoading = () => {
    if (
      get_dashboard_rev_car_aro_loading ||
      get_dashboard_aro_rev_cust_loading ||
      repairpal_investment_loading ||
      referal_revenue_loading ||
      repairpal_revenue_loading ||
      get_yelp_roi_loading ||
      get_yelp_cost_per_lead_loading ||
      yelp_per_clicks_calls_loading ||
      get_yelp_conversation_rate_loading
    ) {
      return true;
    }
    return false;
  };

  // console.log("oldSum", oldSum);

  return (
    // <>
    //   <div
    //     className="flex w-screen h-screen p-2 space-x-6 bg-gray-300"
    //     style={{ overflow: "hidden" }}
    //   >
    //     <SideBar />
    //     <div className="flex flex-col items-center w-full h-full overflow-x-auto">
    //       <Header
    //         label="Revenue, Customers & Campaigns"
    //         setIsOpen={setIsOpen}
    //         repairpal_revenue_data={repairpal_revenue_data}
    //         isOpen={isOpen}
    //         selectedStartDate={selectedStartDate}
    //         selectedEndDate={selectedEndDate}
    //         setSeletedStartDate={setSeletedStartDate}
    //         setSelectedEndDate={setSelectedEndDate}
    //         setNewStartDate={setNewStartDate}
    //         setNewEndDate={setNewEndDate}
    //         selectedLocation={selectedLocation}
    //         setSelectedLocation={setSelectedLocation}
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

    //       {get_dashboard_rev_car_aro_loading ? (
    //         <LoaderForRevenueCustomerAndCampaign />
    //       ) : (
    //         <div className="w-full pt-4">
    //           <div className="bg-white rounded-lg shadow-lg">
    //             <div className="p-4">
    //               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    //                 <CardOne
    //                   label={"Revenue"}
    //                   value={oldSum?.MainRevenue}
    //                   percentage={percentage?.MainRevenue}
    //                   difference={differ?.MainRevenue}
    //                 />
    //                 <CardOne
    //                   label={"Car Count"}
    //                   value={oldSum?.MainCarCount}
    //                   percentage={percentage?.MainCarCount}
    //                   difference={differ?.MainCarCount}
    //                 />
    //                 <CardOne
    //                   label={"ARO"}
    //                   value={oldSum?.MainARO}
    //                   percentage={percentage?.MainARO}
    //                   difference={differ?.MainARO}
    //                 />
    //                 <DropButton
    //                   label={"Revenue Charts"}
    //                   onClickHandler={handleClick}
    //                   openHandler={showBody}
    //                 ></DropButton>
    //               </div>
    //             </div>
    //           </div>
    //           {showBody && (
    //             <RevenuaChartsSection
    //               showBody={showBody}
    //               chartData={chartData}
    //             />
    //           )}
    //         </div>
    //       )}
    //       {get_dashboard_aro_rev_cust_loading ? (
    //         <LoaderForRevenueCustomerAndCampaign />
    //       ) : (
    //         <div className="w-full pt-4 items19">
    //           <div className="bg-white rounded-lg shadow-lg">
    //             <div className="p-4">
    //               <div className="grid  grid-cols-1  sm:grid-cols-2  xl:grid-cols-3 gap-2">
    //                 <CardTwo
    //                   loading={getLoading()}
    //                   Label={"Customer"}
    //                   value={oldSum?.TotalCustomer}
    //                   difference={differ?.TotalCustomer}
    //                   NewValue={oldSum?.NewCustomer}
    //                   newDifference={differ?.NewCustomer}
    //                   returningValue={oldSum?.ReturnCustomer}
    //                   returningDifference={differ?.ReturnCustomer}
    //                 />

    //                 <CardTwo
    //                   loading={getLoading()}
    //                   Label={"Revenue"}
    //                   value={oldSum?.MainRevenue}
    //                   difference={differ?.MainRevenue}
    //                   NewValue={oldSum?.NewCustRevenue}
    //                   newDifference={differ?.NewCustRevenue}
    //                   returningValue={oldSum?.ReturnCustRevenue}
    //                   returningDifference={differ?.ReturnCustRevenue}
    //                 />

    //                 <CardTwo
    //                   loading={getLoading()}
    //                   Label={"ARO"}
    //                   value={oldSum?.ARO}
    //                   difference={differ?.ARO}
    //                   NewValue={oldSum?.ARO_New}
    //                   newDifference={differ?.ARO_New}
    //                   returningValue={oldSum?.ARO_Return}
    //                   returningDifference={differ?.ARO_Return}
    //                 />

    //                 <DropButton
    //                   label={"Customer Charts"}
    //                   onClickHandler={handleClickTwo}
    //                   openHandler={showBodyTwo}
    //                 ></DropButton>
    //               </div>
    //             </div>
    //           </div>
    //           {showBodyTwo && (
    //             <RevenueChartsTwo
    //               showBody={showBodyTwo}
    //               chartData={chartData}
    //             />
    //           )}
    //         </div>
    //       )}
    //       <div className="w-full pt-4">
    //         <div className="bg-white rounded-lg shadow-lg">
    //           <div className="p-4">
    //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
    //               <div className="flex flex-col gap-6">
    //                 <div className="flex items-center justify-center">
    //                   <img className="h-16" src={Logo1}></img>
    //                 </div>
    //                 <CardWithTwoSubCards
    //                   loading={getLoading()}
    //                   value={oldSumForRepairPal?.TotalRevenue}
    //                   newValue={"--"}
    //                   returningValue={"--"}
    //                   mainDifference={differForRepairPal?.TotalRevenue}
    //                   returningDifference={"--"}
    //                   newDifference={"--"}
    //                 />
    //               </div>
    //               <div className="flex flex-col gap-6">
    //                 <div className="flex items-center justify-center">
    //                   <img className="h-16" src={Logo4}></img>
    //                 </div>

    //                 <CardWithTwoSubCards
    //                   loading={getLoading()}
    //                   value={oldSumForYelp?.RevenueTotal}
    //                   newValue={oldSumForYelp?.RevenueNewCustomer}
    //                   returningValue={oldSumForYelp?.ReturningRevenue}
    //                   mainDifference={differForYelp?.RevenueTotal}
    //                   returningDifference={differForYelp?.RevenueNewCustomer}
    //                   newDifference={differForYelp?.ReturningRevenue}
    //                 />
    //               </div>
    //               <div className="flex flex-col gap-6">
    //                 <div className="flex items-center justify-center">
    //                   <img className="h-16" src={Logo2}></img>
    //                 </div>
    //                 <CardWithTwoSubCards
    //                   loading={getLoading()}
    //                   value={oldSumForAdwords?.RevenueTotal}
    //                   newValue={oldSumForAdwords?.RevenueNewCustomer}
    //                   returningValue={oldSumForAdwords?.ReturningRevenue}
    //                   mainDifference={differForAdwords?.RevenueTotal}
    //                   returningDifference={differForAdwords?.RevenueNewCustomer}
    //                   newDifference={differForAdwords?.ReturningRevenue}
    //                 />
    //               </div>

    //               <div className="flex items-center gap-4">
    //                 <DropButton
    //                   label={"Campaign Details"}
    //                   onClickHandler={handleClickThree}
    //                   openHandler={showBodyThree}
    //                 ></DropButton>
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //         {showBodyThree && (
    //           <RevenueChartsThree
    //             oldSumForRepairPal={oldSumForRepairPal}
    //             loading={getLoading()}
    //             differForRepairPal={differForRepairPal}
    //             percentageForRepairPal={percentageForRepairPal}
    //             percentageRepairPal={percentageForRepairPal}
    //             differRepairPal={differForRepairPal}
    //             oldSumForAdwords={oldSumForAdwords}
    //             oldSumForYelp={oldSumForYelp}
    //             percentageYelp={percentageForYelp}
    //             differYelp={differForYelp}
    //             percentageAdwords={percentageForAdwords}
    //             differAdwords={differForAdwords}
    //             chartData={chartDataForRepairPal}
    //             chartDataRepairPal={chartDataForRepairPal}
    //             callAndAppointmentDropDownChartsData={
    //               callAndAppointmentDropDownChartsData
    //             }
    //             towsDropDownChartsData={towsDropDownChartsData}
    //             referralsDownChartsData={referralsDownChartsData}
    //             chartDataAdwords={chartDataForAdwords}
    //             chartDataYelp={chartDataForYelp}
    //             showBody={showBodyThree}
    //             oldSum={oldSum}
    //             differ={differ}
    //             percentage={percentage}
    //           />
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </>
    <Layout
      headerProps={{
        label: "Revenue, Customers & Campaigns",
        setIsOpen,
        repairpal_revenue_data,
        isOpen,
        selectedStartDate,
        selectedEndDate,
        setSeletedStartDate,
        setSelectedEndDate,
        setNewStartDate,
        setNewEndDate,
        selectedLocation,
        setSelectedLocation,
        setStartMonth,
        setEndMonth,
        setStartYear,
        SetEndYear,
        startMonth,
        startYear,
        endMonth,
        endYear,
        isOptionOpen,
        setIsOptionOpen,
      }}
    >
      {get_dashboard_rev_car_aro_loading ? (
        <LoaderForRevenueCustomerAndCampaign />
      ) : (
        <div className="w-full pt-4">
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <CardOne
                  label={"Revenue"}
                  value={oldSum?.MainRevenue}
                  percentage={percentage?.MainRevenue}
                  difference={differ?.MainRevenue}
                />
                <CardOne
                  label={"Car Count"}
                  value={oldSum?.MainCarCount}
                  percentage={percentage?.MainCarCount}
                  difference={differ?.MainCarCount}
                />
                <CardOne
                  label={"ARO"}
                  value={oldSum?.MainARO}
                  percentage={percentage?.MainARO}
                  difference={differ?.MainARO}
                />
                <DropButton
                  label={"Revenue Charts"}
                  onClickHandler={handleClick}
                  openHandler={showBody}
                ></DropButton>
              </div>
            </div>
          </div>
          {showBody && (
            <RevenuaChartsSection showBody={showBody} chartData={chartData} />
          )}
        </div>
      )}
      {get_dashboard_aro_rev_cust_loading ? (
        <LoaderForRevenueCustomerAndCampaign />
      ) : (
        <div className="w-full pt-4 items19">
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-4">
              <div className="grid  grid-cols-1  sm:grid-cols-2  xl:grid-cols-3 gap-2">
                <CardTwo
                  loading={getLoading()}
                  Label={"Customer"}
                  value={oldSum?.TotalCustomer}
                  difference={differ?.TotalCustomer}
                  NewValue={oldSum?.NewCustomer}
                  newDifference={differ?.NewCustomer}
                  returningValue={oldSum?.ReturnCustomer}
                  returningDifference={differ?.ReturnCustomer}
                />

                <CardTwo
                  loading={getLoading()}
                  Label={"Revenue"}
                  value={oldSum?.MainRevenue}
                  difference={differ?.MainRevenue}
                  NewValue={oldSum?.NewCustRevenue}
                  newDifference={differ?.NewCustRevenue}
                  returningValue={oldSum?.ReturnCustRevenue}
                  returningDifference={differ?.ReturnCustRevenue}
                />

                <CardTwo
                  loading={getLoading()}
                  Label={"ARO"}
                  value={oldSum?.ARO}
                  difference={differ?.ARO}
                  NewValue={oldSum?.ARO_New}
                  newDifference={differ?.ARO_New}
                  returningValue={oldSum?.ARO_Return}
                  returningDifference={differ?.ARO_Return}
                />

                <DropButton
                  label={"Customer Charts"}
                  onClickHandler={handleClickTwo}
                  openHandler={showBodyTwo}
                ></DropButton>
              </div>
            </div>
          </div>
          {showBodyTwo && (
            <RevenueChartsTwo showBody={showBodyTwo} chartData={chartData} />
          )}
        </div>
      )}
      <div className="w-full pt-4">
        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-center">
                  <img className="h-16" src={Logo1}></img>
                </div>
                <CardWithTwoSubCards
                  loading={getLoading()}
                  value={oldSumForRepairPal?.TotalRevenue}
                  newValue={"--"}
                  returningValue={"--"}
                  mainDifference={differForRepairPal?.TotalRevenue}
                  returningDifference={"--"}
                  newDifference={"--"}
                />
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-center">
                  <img className="h-16" src={Logo4}></img>
                </div>

                <CardWithTwoSubCards
                  loading={getLoading()}
                  value={oldSumForYelp?.RevenueTotal}
                  newValue={oldSumForYelp?.RevenueNewCustomer}
                  returningValue={oldSumForYelp?.ReturningRevenue}
                  mainDifference={differForYelp?.RevenueTotal}
                  returningDifference={differForYelp?.RevenueNewCustomer}
                  newDifference={differForYelp?.ReturningRevenue}
                />
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-center">
                  <img className="h-16" src={Logo2}></img>
                </div>
                <CardWithTwoSubCards
                  loading={getLoading()}
                  value={oldSumForAdwords?.RevenueTotal}
                  newValue={oldSumForAdwords?.RevenueNewCustomer}
                  returningValue={oldSumForAdwords?.ReturningRevenue}
                  mainDifference={differForAdwords?.RevenueTotal}
                  returningDifference={differForAdwords?.RevenueNewCustomer}
                  newDifference={differForAdwords?.ReturningRevenue}
                />
              </div>

              <div className="flex items-center gap-4">
                <DropButton
                  label={"Campaign Details"}
                  onClickHandler={handleClickThree}
                  openHandler={showBodyThree}
                ></DropButton>
              </div>
            </div>
          </div>
        </div>

        {showBodyThree && (
          <RevenueChartsThree
            oldSumForRepairPal={oldSumForRepairPal}
            loading={getLoading()}
            differForRepairPal={differForRepairPal}
            percentageForRepairPal={percentageForRepairPal}
            percentageRepairPal={percentageForRepairPal}
            differRepairPal={differForRepairPal}
            oldSumForAdwords={oldSumForAdwords}
            oldSumForYelp={oldSumForYelp}
            percentageYelp={percentageForYelp}
            differYelp={differForYelp}
            percentageAdwords={percentageForAdwords}
            differAdwords={differForAdwords}
            chartData={chartDataForRepairPal}
            chartDataRepairPal={chartDataForRepairPal}
            callAndAppointmentDropDownChartsData={
              callAndAppointmentDropDownChartsData
            }
            towsDropDownChartsData={towsDropDownChartsData}
            referralsDownChartsData={referralsDownChartsData}
            chartDataAdwords={chartDataForAdwords}
            chartDataYelp={chartDataForYelp}
            showBody={showBodyThree}
            oldSum={oldSum}
            differ={differ}
            percentage={percentage}
          />
        )}
      </div>
    </Layout>
  );
}

export default DashboardPage;
