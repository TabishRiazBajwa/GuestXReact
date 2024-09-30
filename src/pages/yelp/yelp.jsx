import React, { useEffect, useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";
import ChartsYelp from "../../components/customerChartsForYelp/ChartsYelp";

import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

import "../../App.css";

import moment from "moment";
import YelpCardOne from "../../components/yelpCards/YelpCardOne";
import {
  LoaderCardsWithTwoSubCards,
  LoaderForCardWithSingleSubCard,
  LoaderForYelpFirstCarD,
  SingleCardWithNoSubCardLoader,
} from "../../components/loaders/Loaders";
import { getBorderColor } from "../../utils/utils";
import useFetchYelpData from "../../hooks/useFetchYelpData";
import {
  CardWithSingleSubCard,
  CardWithTwoSubCards,
  PageVisitsCard,
  SingleCardWithNoSubCard,
} from "../../components/yelpCards/yelpCards";

import Layout from "../../Layouts/Layouts";

function Yelp(props) {
  const {
    get_yelp_roi_data,
    repairpal_revenue_data,
    getRepairpalRevenueRequest,
    get_yelp_cost_per_lead_loading,
    get_yelp_conversation_rate_loading,
    get_yelp_customer_call_appts_loading,
    yelp_per_clicks_calls_loading,
    getYelpCTRPerClicksRequest,
    getYelpConversationRateRequest,
    yelp_per_clicks_calls_data,
    get_yelp_conversation_rate_data,
    getYelpCostPerLeadRequest,
    get_yelp_cost_per_lead_data,
    getYelpCustomerCallApptsRequest,
    get_yelp_customer_call_appts_data,
    saveChartDataForYelp,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const [showBody, setShowBody] = useState(false);
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
  const [oldSum, setOldSum] = useState(null);
  const [chartData, setChartData] = useState();
  const [monthss, setMonth] = useState();
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [displayLabel, setDisplayLabel] = useState(null);

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
    let selectedStart = moment(selectedStartDate);
    let selectedEnd = moment(selectedEndDate);
    let oldSumA = prepareOldDataYelp();
    setOldSum(oldSumA);
    const chartDataNew = getChartsDataYelp(selectedStart, selectedEnd);
    setMonth(chartDataNew.monthsList.length);
    setChartData({ ...chartDataNew });
    let newSum = prepareNewDataYelp(newStartDate, newEndDate);
    const percentageChange = gerPercentageYelp(newSum, oldSumA);
    const difference = getDifferenceYelp(newSum, oldSumA);
    if (percentageChange) {
      setPercentage({ ...percentageChange });
    }
    if (difference) {
      setDifferance(difference);
    }
  }, [
    isOpen,
    get_yelp_cost_per_lead_data,
    get_yelp_customer_call_appts_data,
    yelp_per_clicks_calls_data,
  ]);

  const user = JSON.parse(localStorage.getItem("user")).email;

  useEffect(() => {
    if (repairpal_revenue_data.length === 0) {
      getRepairpalRevenueRequest({
        email: user
      });
    }
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
    setDisplayLabel(selectedLocation?.label);
    return () => setDisplayLabel(null);
  }, [selectedLocation]);

  return (
    // <>
    //   <div
    //     className="flex w-screen h-screen p-2 space-x-6 bg-gray-300"
    //     style={{ overflow: "hidden" }}
    //   >
    //     <SideBar />
    //     <div className="flex flex-col items-center w-full h-full overflow-x-auto">
    //       <Header
    //         label="Yelp"
    //         setIsOpen={setIsOpen}
    //         displayLabel={displayLabel}
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
    //       <div className="w-full ">
    //         <div className=" ">
    //           <div className="">
    //             <div className="grid grid-cols-8 max-xl:space-y-2 ">
    //               <div className="xl:col-span-5  col-span-8 ">
    //                 <div className="grid grid-cols-5 lg:space-x-2 max-xl:space-y-2  ">
    //                   {yelp_per_clicks_calls_loading ? (
    //                     <LoaderForYelpFirstCarD />
    //                   ) : (
    //                     <div
    //                       className={`  ${getBorderColor(
    //                         differ?.TotalInvestment
    //                       )} border-2   px-2 py-2 rounded-lg col-span-5 lg:col-span-3 bg-white  `}
    //                     >
    //                       <YelpCardOne
    //                         value={oldSum?.TotalInvestment}
    //                         percentage={percentage?.TotalInvestment}
    //                         difference={differ?.TotalInvestment}
    //                       />
    //                     </div>
    //                   )}
    //                   {get_yelp_customer_call_appts_loading ? (
    //                     <LoaderForCardWithSingleSubCard />
    //                   ) : (
    //                     <CardWithSingleSubCard
    //                       label={"Call & Appts"}
    //                       value={oldSum?.CallsAppts}
    //                       percentage={percentage?.CallsAppts}
    //                       difference={differ?.CallsAppts}
    //                       newValue={oldSum?.CallsApptsNew}
    //                       newDifference={differ?.CallsApptsNew}
    //                       newPercentage={differ?.CallsApptsNew}
    //                     />
    //                   )}
    //                   {get_yelp_conversation_rate_loading ? (
    //                     <LoaderForCardWithSingleSubCard />
    //                   ) : (
    //                     <CardWithSingleSubCard
    //                       label={"Conversion Rate"}
    //                       value={oldSum?.ConversionRate}
    //                       percentage={percentage?.ConversionRate}
    //                       difference={differ?.ConversionRate}
    //                       newValue={oldSum?.NewConversionRate}
    //                       newDifference={differ?.NewConversionRate}
    //                       newPercentage={differ?.NewConversionRate}
    //                     />
    //                   )}
    //                 </div>
    //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
    //                   {get_yelp_customer_call_appts_loading ? (
    //                     <LoaderCardsWithTwoSubCards />
    //                   ) : (
    //                     <CardWithTwoSubCards
    //                       label={"Total Customers"}
    //                       labelTwo={"New"}
    //                       labelThree={"Returning"}
    //                       valueOne={oldSum?.CustomersTotal}
    //                       percentageOne={percentage?.CustomersTotal}
    //                       differenceOne={differ?.CustomersTotal}
    //                       valueTwo={oldSum?.CustomersNew}
    //                       percentageTwo={percentage?.CustomersNew}
    //                       differenceTwo={differ?.CustomersNew}
    //                       valueThree={oldSum?.ReturningCustomers}
    //                       percentageThree={percentage?.ReturningCustomers}
    //                       differenceThree={differ?.ReturningCustomers}
    //                     />
    //                   )}
    //                   {get_yelp_customer_call_appts_loading ? (
    //                     <LoaderCardsWithTwoSubCards />
    //                   ) : (
    //                     <CardWithTwoSubCards
    //                       label={"Revenue"}
    //                       labelTwo={"New"}
    //                       labelThree={"Returning"}
    //                       valueOne={oldSum?.RevenueTotal}
    //                       percentageOne={percentage?.RevenueTotal}
    //                       differenceOne={differ?.RevenueTotal}
    //                       valueTwo={oldSum?.RevenueNewCustomer}
    //                       percentageTwo={percentage?.RevenueNewCustomer}
    //                       differenceTwo={differ?.RevenueNewCustomer}
    //                       valueThree={oldSum?.ReturningRevenue}
    //                       percentageThree={percentage?.ReturningRevenue}
    //                       differenceThree={differ?.ReturningRevenue}
    //                     />
    //                   )}
    //                   {get_yelp_customer_call_appts_loading ? (
    //                     <LoaderCardsWithTwoSubCards />
    //                   ) : (
    //                     <CardWithTwoSubCards
    //                       label={"ARO"}
    //                       labelTwo={"New"}
    //                       labelThree={"Returning"}
    //                       valueOne={oldSum?.ARO}
    //                       percentageOne={percentage?.ARO}
    //                       differenceOne={differ?.ARO}
    //                       valueTwo={oldSum?.NewARO}
    //                       percentageTwo={percentage?.NewARO}
    //                       differenceTwo={differ?.NewARO}
    //                       valueThree={oldSum?.ReturningARO}
    //                       percentageThree={percentage?.ReturningARO}
    //                       differenceThree={differ?.ReturningARO}
    //                     />
    //                   )}
    //                 </div>
    //               </div>
    //               <div className=" col-span-8 xl:col-span-3  xl:ml-2 ">
    //                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-2  mr-[7px]">
    //                   {yelp_per_clicks_calls_loading ? (
    //                     <SingleCardWithNoSubCardLoader />
    //                   ) : (
    //                     <SingleCardWithNoSubCard
    //                       label={"Impressions"}
    //                       value={oldSum?.Impressions}
    //                       percentage={percentage?.Impressions}
    //                       difference={differ?.Impressions}
    //                     />
    //                   )}
    //                   {yelp_per_clicks_calls_loading ? (
    //                     <SingleCardWithNoSubCardLoader />
    //                   ) : (
    //                     <SingleCardWithNoSubCard
    //                       label={"Clicks"}
    //                       value={oldSum?.Clicks}
    //                       percentage={percentage?.Clicks}
    //                       difference={differ?.Clicks}
    //                     />
    //                   )}
    //                   {yelp_per_clicks_calls_loading ? (
    //                     <SingleCardWithNoSubCardLoader />
    //                   ) : (
    //                     <SingleCardWithNoSubCard
    //                       label={"Click Thru Rate"}
    //                       value={oldSum?.ClickThruRate}
    //                       percentage={percentage?.ClickThruRate / 100}
    //                       difference={differ?.ClickThruRate}
    //                     />
    //                   )}

    //                   {yelp_per_clicks_calls_loading ? (
    //                     <SingleCardWithNoSubCardLoader />
    //                   ) : (
    //                     <SingleCardWithNoSubCard
    //                       label={"Page visit to lead"}
    //                       value={oldSum?.PageVisitsLead / monthss}
    //                       percentage={percentage?.PageVisitsLead / monthss}
    //                       difference={differ?.PageVisitsLead / monthss}
    //                     />
    //                   )}

    //                   {get_yelp_cost_per_lead_loading ? (
    //                     <SingleCardWithNoSubCardLoader />
    //                   ) : (
    //                     <SingleCardWithNoSubCard
    //                       label={"Cost Per Lead"}
    //                       value={oldSum?.CostPerLead}
    //                       percentage={percentage?.CostPerLead}
    //                       difference={differ?.CostPerLead}
    //                     />
    //                   )}
    //                   {yelp_per_clicks_calls_loading ? (
    //                     <SingleCardWithNoSubCardLoader />
    //                   ) : (
    //                     <SingleCardWithNoSubCard
    //                       label={"Cost Per Click"}
    //                       value={oldSum?.CostPerClick}
    //                       percentage={percentage?.CostPerClick}
    //                       difference={differ?.CostPerClick}
    //                     />
    //                   )}
    //                 </div>

    //                 {yelp_per_clicks_calls_loading ? (
    //                   <div className="grid grid-cols-3 mt-4 ">
    //                     <LoaderForCardWithSingleSubCard />{" "}
    //                     <LoaderForCardWithSingleSubCard />{" "}
    //                     <LoaderForCardWithSingleSubCard />
    //                   </div>
    //                 ) : (
    //                   <PageVisitsCard
    //                     differ={differ}
    //                     oldSum={oldSum}
    //                     percentage={percentage}
    //                     monthss={monthss}
    //                   />
    //                 )}
    //               </div>
    //             </div>

    //             <div className="w-full pt-4 h-8">
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
    //               {showBody && (
    //                 <ChartsYelp chartData={chartData} showBody={showBody} />
    //               )}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
    <Layout
      headerProps={{
        label: "Yelp",
        setIsOpen: setIsOpen,
        displayLabel: displayLabel,
        repairpal_revenue_data: repairpal_revenue_data,
        isOpen: isOpen,
        selectedStartDate: selectedStartDate,
        selectedEndDate: selectedEndDate,
        setSeletedStartDate: setSeletedStartDate,
        setSelectedEndDate: setSelectedEndDate,
        setNewStartDate: setNewStartDate,
        setNewEndDate: setNewEndDate,
        selectedLocation: selectedLocation,
        setSelectedLocation: setSelectedLocation,
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
      <div className="w-full ">
        <div className=" ">
          <div className="">
            <div className="grid grid-cols-8 max-xl:space-y-2 ">
              <div className="xl:col-span-5  col-span-8 ">
                <div className="grid grid-cols-5 lg:space-x-2 max-xl:space-y-2  ">
                  {yelp_per_clicks_calls_loading ? (
                    <LoaderForYelpFirstCarD />
                  ) : (
                    <div
                      className={`  ${getBorderColor(
                        differ?.TotalInvestment
                      )} border-2   px-2 py-2 rounded-lg col-span-5 lg:col-span-3 bg-white  `}
                    >
                      <YelpCardOne
                        value={oldSum?.TotalInvestment}
                        percentage={percentage?.TotalInvestment}
                        difference={differ?.TotalInvestment}
                      />
                    </div>
                  )}
                  {get_yelp_customer_call_appts_loading ? (
                    <LoaderForCardWithSingleSubCard />
                  ) : (
                    <CardWithSingleSubCard
                      label={"Call & Appts"}
                      value={oldSum?.CallsAppts}
                      percentage={percentage?.CallsAppts}
                      difference={differ?.CallsAppts}
                      newValue={oldSum?.CallsApptsNew}
                      newDifference={differ?.CallsApptsNew}
                      newPercentage={differ?.CallsApptsNew}
                    />
                  )}
                  {get_yelp_conversation_rate_loading ? (
                    <LoaderForCardWithSingleSubCard />
                  ) : (
                    <CardWithSingleSubCard
                      label={"Conversion Rate"}
                      value={oldSum?.ConversionRate}
                      percentage={percentage?.ConversionRate}
                      difference={differ?.ConversionRate}
                      newValue={oldSum?.NewConversionRate}
                      newDifference={differ?.NewConversionRate}
                      newPercentage={differ?.NewConversionRate}
                    />
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
                  {get_yelp_customer_call_appts_loading ? (
                    <LoaderCardsWithTwoSubCards />
                  ) : (
                    <CardWithTwoSubCards
                      label={"Total Customers"}
                      labelTwo={"New"}
                      labelThree={"Returning"}
                      valueOne={oldSum?.CustomersTotal}
                      percentageOne={percentage?.CustomersTotal}
                      differenceOne={differ?.CustomersTotal}
                      valueTwo={oldSum?.CustomersNew}
                      percentageTwo={percentage?.CustomersNew}
                      differenceTwo={differ?.CustomersNew}
                      valueThree={oldSum?.ReturningCustomers}
                      percentageThree={percentage?.ReturningCustomers}
                      differenceThree={differ?.ReturningCustomers}
                    />
                  )}
                  {get_yelp_customer_call_appts_loading ? (
                    <LoaderCardsWithTwoSubCards />
                  ) : (
                    <CardWithTwoSubCards
                      label={"Revenue"}
                      labelTwo={"New"}
                      labelThree={"Returning"}
                      valueOne={oldSum?.RevenueTotal}
                      percentageOne={percentage?.RevenueTotal}
                      differenceOne={differ?.RevenueTotal}
                      valueTwo={oldSum?.RevenueNewCustomer}
                      percentageTwo={percentage?.RevenueNewCustomer}
                      differenceTwo={differ?.RevenueNewCustomer}
                      valueThree={oldSum?.ReturningRevenue}
                      percentageThree={percentage?.ReturningRevenue}
                      differenceThree={differ?.ReturningRevenue}
                    />
                  )}
                  {get_yelp_customer_call_appts_loading ? (
                    <LoaderCardsWithTwoSubCards />
                  ) : (
                    <CardWithTwoSubCards
                      label={"ARO"}
                      labelTwo={"New"}
                      labelThree={"Returning"}
                      valueOne={oldSum?.ARO}
                      percentageOne={percentage?.ARO}
                      differenceOne={differ?.ARO}
                      valueTwo={oldSum?.NewARO}
                      percentageTwo={percentage?.NewARO}
                      differenceTwo={differ?.NewARO}
                      valueThree={oldSum?.ReturningARO}
                      percentageThree={percentage?.ReturningARO}
                      differenceThree={differ?.ReturningARO}
                    />
                  )}
                </div>
              </div>
              <div className=" col-span-8 xl:col-span-3  xl:ml-2 ">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-2  mr-[7px]">
                  {yelp_per_clicks_calls_loading ? (
                    <SingleCardWithNoSubCardLoader />
                  ) : (
                    <SingleCardWithNoSubCard
                      label={"Impressions"}
                      value={oldSum?.Impressions}
                      percentage={percentage?.Impressions}
                      difference={differ?.Impressions}
                    />
                  )}
                  {yelp_per_clicks_calls_loading ? (
                    <SingleCardWithNoSubCardLoader />
                  ) : (
                    <SingleCardWithNoSubCard
                      label={"Clicks"}
                      value={oldSum?.Clicks}
                      percentage={percentage?.Clicks}
                      difference={differ?.Clicks}
                    />
                  )}
                  {yelp_per_clicks_calls_loading ? (
                    <SingleCardWithNoSubCardLoader />
                  ) : (
                    <SingleCardWithNoSubCard
                      label={"Click Thru Rate"}
                      value={oldSum?.ClickThruRate}
                      percentage={percentage?.ClickThruRate / 100}
                      difference={differ?.ClickThruRate}
                    />
                  )}

                  {yelp_per_clicks_calls_loading ? (
                    <SingleCardWithNoSubCardLoader />
                  ) : (
                    <SingleCardWithNoSubCard
                      label={"Page visit to lead"}
                      value={oldSum?.PageVisitsLead / monthss}
                      percentage={percentage?.PageVisitsLead / monthss}
                      difference={differ?.PageVisitsLead / monthss}
                    />
                  )}

                  {get_yelp_cost_per_lead_loading ? (
                    <SingleCardWithNoSubCardLoader />
                  ) : (
                    <SingleCardWithNoSubCard
                      label={"Cost Per Lead"}
                      value={oldSum?.CostPerLead}
                      percentage={percentage?.CostPerLead}
                      difference={differ?.CostPerLead}
                    />
                  )}
                  {yelp_per_clicks_calls_loading ? (
                    <SingleCardWithNoSubCardLoader />
                  ) : (
                    <SingleCardWithNoSubCard
                      label={"Cost Per Click"}
                      value={oldSum?.CostPerClick}
                      percentage={percentage?.CostPerClick}
                      difference={differ?.CostPerClick}
                    />
                  )}
                </div>

                {yelp_per_clicks_calls_loading ? (
                  <div className="grid grid-cols-3 mt-4 ">
                    <LoaderForCardWithSingleSubCard />{" "}
                    <LoaderForCardWithSingleSubCard />{" "}
                    <LoaderForCardWithSingleSubCard />
                  </div>
                ) : (
                  <PageVisitsCard
                    differ={differ}
                    oldSum={oldSum}
                    percentage={percentage}
                    monthss={monthss}
                  />
                )}
              </div>
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
                <ChartsYelp chartData={chartData} showBody={showBody} />
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Yelp;
