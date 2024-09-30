import React, { useState } from "react";
import Logo1 from "../../assets/logo1.png";
import Logo2 from "../../assets/logo2.png";
import Logo4 from "../../assets/logo4.png";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { CardWithTwoSubCards } from "./commonCard";
import RevenueChartsRepairPal from "../customerChartsForRepairPal/repairPalCharts";
import RevenueChartsYelp from "../customerChartsForYelp/ChartsYelp";
import RevenueChartsAdwards from "../../components/customerChartsForAdwards/customerChartsForAdwardsSection";
import { getBorderColor, getColor, handleError } from "../../utils/utils";

const RevenueChartsThree = ({
  percentageForRepairPal = {},
  differForRepairPal = {},
  oldSumForRepairPal,
  loading = false,
  differRepairPal,
  percentageRepairPal,
  chartDataAdwords,
  chartDataYelp,
  chartDataRepairPal = {},
  callAndAppointmentDropDownChartsData = {},
  towsDropDownChartsData = {},
  referralsDownChartsData = {},
  percentageYelp = {},
  differYelp = {},
  oldSumForAdwords = {},
  oldSumForYelp = {},
  percentageAdwords = {},
  differAdwords = {},
}) => {
  const [showBodyThree, setShowBodyThree] = useState(false);
  const [showBodyOne, setShowBodyOne] = useState(false);
  const [showBodyTwo, setShowBodyTwo] = useState(false);

  const handleClickOne = () => {
    if (showBodyTwo) setShowBodyTwo(false);
    if (showBodyThree) setShowBodyThree(false);
    setShowBodyOne(!showBodyOne);
  };

  const handleClickTwo = () => {
    if (showBodyOne) setShowBodyOne(false);
    if (showBodyThree) setShowBodyThree(false);
    setShowBodyTwo(!showBodyTwo);
  };

  const handleClickThree = () => {
    if (showBodyOne) setShowBodyOne(false);
    if (showBodyTwo) setShowBodyTwo(false);

    setShowBodyThree(!showBodyThree);
  };

  const SingleFirstCard = ({
    loading = false,
    label,
    value = 0,
    difference = 0,
    percentChange = 0,
  }) => {
    return loading ? (
      <div className="bg-white border-[1.5px]  px-2 py-2 rounded-lg animate-shimmer">
        <div className="h-6 w-2/3 bg-gray-300 rounded-lg mb-2"></div>
        <div className="h-5 w-1/2 bg-gray-300 rounded-lg"></div>
      </div>
    ) : (
      <div
        className={` bg-white border-2  ${getBorderColor(
          difference
        )}   px-2 py-2 rounded-lg`}
      >
        <div className="  ">
          <div className="">
            <div className="flex justify-between gap-2 items-center  ">
              <div className="heading">{label}</div>
              <div class="tooltip">
                <div></div>
              </div>
            </div>
            <div className="flex gap-2 justify-between items-center">
              <div className="subHeading">
                ${handleError(Math.abs(value), label)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <div
                    className={`
                    ${getColor(difference)}
                  }`}
                  >
                    {!isNaN(difference) ? (
                      difference > 0 ? (
                        <AiFillCaretUp />
                      ) : (
                        <AiFillCaretDown />
                      )
                    ) : (
                      ""
                    )}{" "}
                  </div>
                  <div
                    className={`                      ${getColor(difference)}
                    font font-normal`}
                  >
                    {isNaN(percentChange)
                      ? "--"
                      : handleError(Math.abs(percentChange))}
                    %
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className={`font-semibold  ${getColor(difference)} `}>
                ${handleError(Math.abs(difference), label)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="bg-[#707070] grid  grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-2 p-4 rounded-t-lg">
        <div className="col-span-1 space-y-2 ">
          <div className="flex items-center justify-center rounded-lg bg-white h-24 mt-4">
            <img src={Logo1}></img>
          </div>
          <SingleFirstCard
            loading={loading}
            label={"Investment"}
            value={oldSumForRepairPal?.Investment}
            difference={differForRepairPal?.Investment}
            percentChange={percentageForRepairPal?.Investment}
          />
          <CardWithTwoSubCards
            loading={loading}
            label={"Calls & Appts"}
            mainValue={oldSumForRepairPal?.CallsAndAppts}
            mainDifference={differForRepairPal?.CallsAndAppts}
            mainPercentage={percentageForRepairPal?.CallsAndAppts}
            secondValue={"--"}
            secondPercentage={"--"}
            secondDifference={"--"}
            secondLabel={"New"}
            thirdLabel={"Returning"}
            thirdValue={"--"}
            thirdDifference={"--"}
            thirdPercentage={"--"}
          />
          <CardWithTwoSubCards
            loading={loading}
            label={"Customers"}
            mainValue={oldSumForRepairPal?.Customers}
            mainDifference={differForRepairPal?.Customers}
            mainPercentage={percentageForRepairPal?.Customers}
            secondValue={"--"}
            thirdValue={"--"}
            secondPercentage={"--"}
            secondDifference={"--"}
            secondLabel={"New"}
            thirdLabel={"Returning"}
            thirdDifference={"--"}
            thirdPercentage={"--"}
          />
          <CardWithTwoSubCards
            loading={loading}
            label={"Conversion Rate"}
            showSecondCard={false}
            mainValue={oldSumForRepairPal?.ConversionRate}
            mainDifference={differForRepairPal?.ConversionRate}
            mainPercentage={percentageForRepairPal?.ConversionRate}
            secondValue={oldSumForRepairPal?.NewConversionRate}
            secondDifference={differForRepairPal?.NewConversionRate}
            secondPercentage={percentageForRepairPal?.NewConversionRate}
            thirdValue={"--"}
            secondLabel={"New"}
            thirdLabel={"Returning"}
            thirdDifference={"--"}
            thirdPercentage={"--"}
          />
          <CardWithTwoSubCards
            loading={loading}
            label={"ARO"}
            mainValue={oldSumForRepairPal?.ARO}
            mainDifference={differForRepairPal?.ARO}
            mainPercentage={percentageForRepairPal?.ARO}
            secondValue={"--"}
            thirdValue={"--"}
            secondPercentage={"--"}
            secondDifference={"--"}
            secondLabel={"New"}
            thirdLabel={"Returning"}
            thirdDifference={"--"}
            thirdPercentage={"--"}
          />
          <SingleFirstCard
            loading={loading}
            label={"Return On Investment"}
            value={oldSumForRepairPal?.ROI}
            difference={differForRepairPal?.ROI}
            percentChange={percentageForRepairPal?.ROI}
          />
        </div>
        <div className="col-span-1 space-y-2">
          <div className="flex items-center justify-center rounded-lg bg-white h-24 mt-4">
            <img src={Logo4}></img>
          </div>
          <SingleFirstCard
            loading={loading}
            label={"Investment"}
            value={oldSumForYelp?.TotalInvestment}
            difference={differYelp?.TotalInvestment}
            percentChange={percentageYelp?.TotalInvestment}
          />
          <CardWithTwoSubCards
            loading={loading}
            label={"Calls & Appts"}
            mainValue={oldSumForYelp?.CallsAppts}
            mainDifference={differYelp?.CallsAppts}
            mainPercentage={percentageYelp?.CallsAppts}
            secondValue={oldSumForYelp?.CallsApptsNew}
            secondPercentage={percentageYelp?.CallsApptsNew}
            secondDifference={differYelp?.CallsApptsNew}
            secondLabel={"New"}
            thirdLabel={"Returning"}
            thirdValue={oldSumForYelp?.CallandApptsReturn}
            thirdDifference={differYelp?.CallandApptsReturn}
            thirdPercentage={percentageYelp?.CallandApptsReturn}
          />
          <CardWithTwoSubCards
            loading={loading}
            label={"Customers"}
            mainValue={oldSumForYelp?.CustomersTotal}
            mainDifference={differYelp?.CustomersTotal}
            mainPercentage={percentageYelp?.CustomersTotal}
            secondValue={oldSumForYelp?.CustomersNew}
            thirdValue={oldSumForYelp?.ReturningCustomers}
            secondPercentage={percentageYelp?.CustomersNew}
            secondDifference={differYelp?.CustomersNew}
            thirdPercentage={percentageYelp?.ReturningCustomers}
            thirdDifference={differYelp?.ReturningCustomers}
            secondLabel={"New"}
            thirdLabel={"Returning"}
          />
          <CardWithTwoSubCards
            loading={loading}
            label={"Conversion Rate"}
            mainValue={oldSumForYelp?.ConversionRate}
            mainDifference={differYelp?.ConversionRate}
            mainPercentage={percentageYelp?.ConversionRate}
            secondValue={oldSumForYelp?.NewConversionRate}
            secondDifference={differYelp?.NewConversionRate}
            secondPercentage={percentageYelp?.NewConversionRate}
            showSecondCard={false}
            thirdValue={"--"}
            secondLabel={"New"}
            thirdLabel={"Returning"}
            thirdDifference={"--"}
            thirdPercentage={"--"}
          />
          <CardWithTwoSubCards
            loading={loading}
            label={"ARO"}
            mainValue={oldSumForYelp?.ARO}
            mainDifference={differYelp?.ARO}
            mainPercentage={percentageYelp?.ARO}
            secondValue={oldSumForYelp?.NewARO}
            thirdValue={oldSumForYelp?.ReturningARO}
            secondPercentage={percentageYelp?.NewARO}
            secondDifference={differYelp?.NewARO}
            thirdPercentage={percentageYelp?.ReturningARO}
            thirdDifference={differYelp?.ReturningARO}
            secondLabel={"New"}
            thirdLabel={"Returning"}
          />
          <SingleFirstCard
            loading={loading}
            label={"Return On Investment"}
            value={oldSumForYelp?.ROI}
            difference={differYelp?.ROI}
            percentChange={percentageYelp?.ROI}
          />
        </div>
        <div className="col-span-1 space-y-2 mt-4">
          <div className="flex items-center justify-center rounded-lg bg-white h-24 ">
            <img src={Logo2}></img>
          </div>
          <SingleFirstCard
            loading={loading}
            label={"Investment"}
            value={oldSumForAdwords?.Investment}
            difference={differAdwords?.Investment}
            percentChange={percentageAdwords?.Investment}
          />
          <CardWithTwoSubCards
            loading={loading}
            label={"Calls & Appts"}
            mainValue={oldSumForAdwords?.CallandAppts}
            mainDifference={differAdwords?.CallandAppts}
            mainPercentage={percentageAdwords?.CallandAppts}
            secondValue={oldSumForAdwords?.CallandApptsNew}
            secondPercentage={percentageAdwords?.CallandApptsNew}
            secondDifference={differAdwords?.CallandApptsNew}
            secondLabel={"New"}
            thirdLabel={"Returning"}
            thirdValue={oldSumForAdwords?.CallandApptsReturn}
            thirdDifference={differAdwords?.CallandApptsReturn}
            thirdPercentage={percentageAdwords?.CallandApptsReturn}
          />

          <CardWithTwoSubCards
            loading={loading}
            label={"Customers"}
            mainValue={oldSumForAdwords?.CustomersTotal}
            mainDifference={differAdwords?.CustomersTotal}
            mainPercentage={percentageAdwords?.CustomersTotal}
            secondValue={oldSumForAdwords?.CustomersNew}
            thirdValue={oldSumForAdwords?.ReturningCustomers}
            secondPercentage={percentageAdwords?.CustomersNew}
            secondDifference={differAdwords?.CustomersNew}
            thirdPercentage={percentageAdwords?.ReturningCustomers}
            thirdDifference={differAdwords?.ReturningCustomers}
            secondLabel={"New"}
            thirdLabel={"Returning"}
          />
          <CardWithTwoSubCards
            loading={loading}
            label={"Conversion Rate"}
            showSecondCard={false}
            mainValue={oldSumForAdwords?.ConversionRate}
            mainDifference={differAdwords?.ConversionRate}
            mainPercentage={percentageAdwords?.ConversionRate}
            secondValue={oldSumForAdwords?.NewConversionRate}
            secondPercentage={percentageAdwords?.NewConversionRate}
            secondDifference={differAdwords?.NewConversionRate}
            thirdValue={"--"}
            secondLabel={"New"}
            thirdLabel={"Returning"}
            thirdDifference={"--"}
            thirdPercentage={"--"}
          />
          <CardWithTwoSubCards
            loading={loading}
            label={"ARO"}
            mainValue={oldSumForAdwords?.ARO}
            mainDifference={differAdwords?.ARO}
            mainPercentage={percentageAdwords?.ARO}
            secondValue={oldSumForAdwords?.NewARO}
            thirdValue={oldSumForAdwords?.ReturningARO}
            secondPercentage={percentageAdwords?.NewARO}
            secondDifference={differAdwords?.NewARO}
            thirdPercentage={percentageAdwords?.ReturningARO}
            thirdDifference={differAdwords?.ReturningARO}
            secondLabel={"New"}
            thirdLabel={"Returning"}
          />

          <SingleFirstCard
            loading={loading}
            label={"Return On Investment"}
            value={oldSumForAdwords?.ROI}
            difference={differAdwords?.ROI}
            percentChange={percentageAdwords?.ROI}
          />
        </div>
      </div>
      <div className=" bg-[#707070] grid grid-cols-1 gap-3 md:grid-cols-3 gap-x-4 px-4 py-4">
        <div className="flex items-center gap-4 bg-white rounded-md p-2 ">
          <div
            className="w-6 h-6 bg-[#0F2E60] rounded-full flex items-center justify-center cursor-pointer"
            onClick={handleClickOne}
          >
            <span className="text-white">
              {showBodyOne ? <AiFillCaretUp /> : <AiFillCaretDown />}
            </span>
          </div>
          <div className="text-[#0F2E60] font-medium">RepairPal Charts</div>
        </div>
        <div className="flex items-center gap-4 bg-white rounded-md p-2 ">
          <div
            className="w-6 h-6 bg-[#0F2E60] rounded-full flex items-center justify-center cursor-pointer"
            onClick={handleClickTwo}
          >
            <span className="text-white">
              {showBodyTwo ? <AiFillCaretUp /> : <AiFillCaretDown />}
            </span>
          </div>
          <div className="text-[#0F2E60] font-medium">Yelp Charts</div>
        </div>
        <div className="flex items-center gap-4 bg-white rounded-md p-2 ">
          <div
            className="w-6 h-6 bg-[#0F2E60] rounded-full flex items-center justify-center cursor-pointer"
            onClick={handleClickThree}
          >
            <span className="text-white">
              {showBodyThree ? <AiFillCaretUp /> : <AiFillCaretDown />}
            </span>
          </div>
          <div className="text-[#0F2E60] font-medium">Adwords Chart</div>
        </div>
      </div>

      {showBodyOne && (
        <RevenueChartsRepairPal
          oldSum={oldSumForRepairPal}
          percentage={percentageRepairPal}
          differ={differRepairPal}
          chartData={chartDataRepairPal}
          callAndAppointmentDropDownChartsData={
            callAndAppointmentDropDownChartsData
          }
          towsDropDownChartsData={towsDropDownChartsData}
          referralsDownChartsData={referralsDownChartsData}
        />
      )}
      {showBodyTwo && <RevenueChartsYelp chartData={chartDataYelp} />}
      {showBodyThree && <RevenueChartsAdwards chartData={chartDataAdwords} />}
    </>
  );
};

export default RevenueChartsThree;
