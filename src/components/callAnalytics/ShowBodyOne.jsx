import React from "react";
import OverlappingBarChartReversed from "../overlappingBarChartReversed/overlappingBarChartReversed";
import LineChartWithTwoLabels from "../lineChart/lineChart";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import HorizontalBarChartWithCandle from "../singleHorizentalBarChart/singleHorizentalBarChart";
import Tooltip from "../../components/toolTipInfo/ToolTipInfo";
import OverlappingBarChart from "../overlappingBarChart/overlappingBarChart";
function ShowBodyOne() {
  return (
    <div>
      {" "}
      <div className=" top-[80px] w-full  p-4 mt-4 rounded-lg bg-white ">
        <div className="divide-y-2  mx-4 ">
          <div className=" grid grid-cols-3 items-center ">
            <div className="flex justify-start items-center space-x-2">
              <p className="text-lg font-medium  text-[#1F3B59] text-start ">
                Unclassified
                <div className=" ml-2 inline-flex">
                  <Tooltip
                    className="absolute bg-white p-3 pt-1 -right-[16rem] font-normal text-sm -top-[20px] border border-[#0F2E60] rounded w-[15rem]"
                    svgClass="h-4"
                    title={[
                      "Booked Appointments not matched to a work order or classified as a no-show. click  on the details link to classify these calls."
                    ]}
                  />
                </div>
              </p>
            </div>
            <div>
              <LineChartWithTwoLabels />
            </div>
            <div className="w-[230px] mx-auto">
              <HorizontalBarChartWithCandle />
            </div>
          </div>
          <div className=" bg-white grid grid-cols-3  items-center">
            <div className="flex justify-start items-center space-x-2">
              {/* <p></p> */}
              <p className="text-lg font-medium  text-[#1F3B59] text-start  ">
                Total customers
                <div className=" ml-2 inline-flex">
                  <Tooltip
                    className="absolute bg-white p-3 pt-1 -right-[16rem] font-normal text-sm -top-[20px] border border-[#0F2E60] rounded w-[15rem]"
                    svgClass="h-4"
                    title={[
                      "Total off all customers from booked appts, no booked appts and unqualified calls."
                    ]}
                  />
                </div>
              </p>
            </div>
            <div>
              <LineChartWithTwoLabels />
            </div>
            <div>
              <div className="   ">
                {/* <div>Customer</div> */}
                <div className="  pb-4">
                  {" "}
                  <OverlappingBarChart />
                </div>
              </div>
            </div>
          </div>
          <div className="   bg-white grid grid-cols-3 items-center">
            <div className="flex justify-start items-center space-x-2">
              {/* <p></p> */}
              <p className="text-lg font-medium  text-[#1F3B59] text-start  ">
                Total Ravenue
                <div className=" ml-2 inline-flex">
                  <Tooltip
                    className="absolute bg-white p-3 pt-1 -right-[16rem] font-normal text-sm -top-[20px] border border-[#0F2E60] rounded w-[15rem]"
                    svgClass="h-4"
                    title={[
                      "Total of all revenue from booked appts, no booked appts and unqualified calls"
                    ]}
                  />
                </div>
              </p>
            </div>
            <div>
              <LineChartWithTwoLabels />
            </div>
            <div className="   ">
              {/* <div>Customer</div> */}
              <div className=" pb-4">
                {" "}
                <OverlappingBarChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowBodyOne;
