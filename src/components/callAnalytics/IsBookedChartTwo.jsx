import React, { useState } from "react";
import OverlappingBarChartReversed from "../overlappingBarChartReversed/overlappingBarChartReversed";
import LineChartWithTwoLabels from "../lineChart/lineChart";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import HorizontalBarChartWithCandle from "../singleHorizentalBarChart/singleHorizentalBarChart";
import btnicon from "../../assets/icon2.png";
import Tooltip from "../../components/toolTipInfo/ToolTipInfo";
import TogleDropDownSecrion from "../togleDropDownSecrion/togleDropDownSecrion";
function IsBookedChartTwo(props) {
  const [isShowDetails, setisShowDetails] = useState(false);
  const showDetails = () => {
    setisShowDetails(!isShowDetails);
  };
  return (
    <div>
      {" "}
      <div className=" top-[80px] w-full rounded-md bg-[#707070] p-2 ">
        <div className=" bg-white rounded-lg">
          <div className="  grid grid-cols-3 border-b-2  mx-8 ">
            <div className="flex justify-start items-center space-x-4 items-center">
              <p className="font-bold text-[#1F3B59] flex relative">
                No Booked Appts.
                <div className=" ml-2">
                  <Tooltip
                    className="absolute bg-white p-3 -right-[16rem] font-normal text-sm -top-[20px] border border-[#0F2E60] rounded w-[15rem]"
                    svgClass="h-4"
                    title={[
                      "Calls with a duration of <30 seconds and > 5  minutes  indentified as a lead and the outcome if the call was ab appointment not set as a drop-off or specific day/time"
                    ]}
                  />
                </div>
              </p>
            </div>
            <div>
              <div className="">
                <LineChartWithTwoLabels
                  position={[
                    { x: 10, y: 50 },
                    { x: 200, y: 50 },
                    { x: 350, y: 50 }
                  ]}
                />
              </div>
            </div>
            <div className=" w-[200px] mx-auto">
              <HorizontalBarChartWithCandle />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg my-4">
          <div className="border-b-2 mx-8 py-8">
            <div className="  grid grid-cols-3  ">
              <div className="flex justify-start items-center ">
                <p className="font-bold text-[#1F3B59] w-52  ">
                  Unable to Agree To Appts or Drop Off Time.
                  <div className=" ml-2 inline-flex">
                    <Tooltip
                      className="absolute bg-white p-3 pt-1 -right-[16rem] font-normal text-sm -top-[20px] border border-[#0F2E60] rounded w-[15rem]"
                      svgClass="h-4"
                      title={[
                        "The Agent and caller were unable to agree to a drop-off or specific day and time."
                      ]}
                    />
                  </div>
                </p>
                {/* <div></div> */}
              </div>
              <div>
                <div className="">
                  <LineChartWithTwoLabels
                    position={[
                      { x: 10, y: 50 },
                      { x: 200, y: 50 },
                      { x: 350, y: 50 }
                    ]}
                  />
                </div>
              </div>
              <div className=" w-[200px] mx-auto">
                <HorizontalBarChartWithCandle />
              </div>
            </div>
            <div className="  grid grid-cols-3  ">
              <div className="flex justify-start items-center ">
                <p className="font-bold text-[#1F3B59] w-60">
                  Unable to Agree To Appts or Drop Off Time Revenue.
                  <div className=" ml-2 inline-flex"></div>
                </p>
                {/* <div></div> */}
              </div>
              <div>
                <div className="">
                  <LineChartWithTwoLabels
                    position={[
                      { x: 10, y: 50 },
                      { x: 200, y: 50 },
                      { x: 350, y: 50 }
                    ]}
                  />
                </div>
              </div>
              <div className=" w-[200px] mx-auto">
                <HorizontalBarChartWithCandle />
                {/* updated chart */}
              </div>
            </div>
          </div>
          <div className="border-b-2 mx-8 ">
            <div className="  grid grid-cols-3  ">
              <div className="flex justify-start items-center ">
                <p className="font-bold text-[#1F3B59] w-60">
                  Agent Calling back With Price.
                  <div className=" ml-2 inline-flex">
                    <Tooltip
                      className="absolute bg-white p-3 pt-1 -right-[16rem] font-normal text-sm -top-[20px] border border-[#0F2E60] rounded w-[15rem]"
                      svgClass="h-4"
                      title={[
                        "The agent told the caller they will need  to call them back  with a price"
                      ]}
                    />
                  </div>
                </p>
                {/* <div></div> */}
              </div>
              <div>
                <div className="">
                  <LineChartWithTwoLabels
                    position={[
                      { x: 10, y: 50 },
                      { x: 200, y: 50 },
                      { x: 350, y: 50 }
                    ]}
                  />
                </div>
              </div>
              <div className=" w-[200px] mx-auto">
                <HorizontalBarChartWithCandle />
              </div>
            </div>
            <div className="  grid grid-cols-3  ">
              <div className="flex justify-start items-center ">
                <p className="font-bold text-[#1F3B59] w-60">
                  Agent Calling back With Price Revenue.
                  <div className=" ml-2 inline-flex"></div>
                </p>
              </div>
              <div>
                <div className="">
                  <LineChartWithTwoLabels
                    position={[
                      { x: 10, y: 50 },
                      { x: 200, y: 50 },
                      { x: 350, y: 50 }
                    ]}
                  />
                </div>
              </div>
              <div className=" w-[200px] mx-auto">
                <HorizontalBarChartWithCandle />
                updated chart
              </div>
            </div>
          </div>
          <div className="border-b-2 mx-8 ">
            <div className="  grid grid-cols-3  ">
              <div className="flex justify-start items-center ">
                <p className="font-bold text-[#1F3B59] w-52">
                  Price Provided Without Request
                  <div className=" ml-2 inline-flex">
                    <Tooltip
                      className="absolute bg-white p-3 pt-1 -right-[16rem] font-normal text-sm -top-[20px] border border-[#0F2E60] rounded w-[15rem]"
                      svgClass="h-4"
                      title={[
                        "The agent gave  a price without the caller  requesting one."
                      ]}
                    />
                  </div>
                </p>
                {/* <div></div> */}
              </div>
              <div>
                <div className="">
                  <LineChartWithTwoLabels
                    position={[
                      { x: 10, y: 50 },
                      { x: 200, y: 50 },
                      { x: 350, y: 50 }
                    ]}
                  />
                </div>
              </div>
              <div className=" w-[200px] mx-auto">
                <HorizontalBarChartWithCandle />
              </div>
            </div>
            <div className="  grid grid-cols-3  ">
              <div className="flex justify-start items-center ">
                <p className="font-bold text-[#1F3B59] w-52">
                  Price Provided Without Request Revenue.s
                  <div className=" ml-2 inline-flex"></div>
                </p>
                {/* <div></div> */}
              </div>
              <div>
                <div className="">
                  <LineChartWithTwoLabels
                    position={[
                      { x: 10, y: 50 },
                      { x: 200, y: 50 },
                      { x: 350, y: 50 }
                    ]}
                  />
                </div>
              </div>
              <div className=" w-[200px] mx-auto">
                <HorizontalBarChartWithCandle />
                {/* updated chart */}
              </div>
            </div>
          </div>
          <div className="border-b-2 mx-8 ">
            <div className="  grid grid-cols-3  ">
              <div className="flex justify-start items-center ">
                <p className="font-bold text-[#1F3B59] w-60">
                  No Appointment Offered.
                  <div className=" ml-2 inline-flex">
                    <Tooltip
                      className="absolute bg-white p-3 pt-1 -right-[16rem] font-normal text-sm -top-[20px] border border-[#0F2E60] rounded w-[15rem]"
                      svgClass="h-4"
                      title={["No appointment was  offered or  requested."]}
                    />
                  </div>
                </p>
                {/* <div></div> */}
              </div>
              <div>
                <div className="">
                  <LineChartWithTwoLabels
                    position={[
                      { x: 10, y: 50 },
                      { x: 200, y: 50 },
                      { x: 350, y: 50 }
                    ]}
                  />
                </div>
              </div>
              <div className=" w-[200px] mx-auto">
                <HorizontalBarChartWithCandle />
              </div>
            </div>
            <div className="  grid grid-cols-3  ">
              <div className="flex justify-start items-center ">
                <p className="font-bold text-[#1F3B59] w-52">
                  No Appointment Offered Revenue.
                  <div className=" ml-2 inline-flex"></div>
                </p>
                {/* <div></div> */}
              </div>
              <div>
                <div className="">
                  <LineChartWithTwoLabels
                    position={[
                      { x: 10, y: 50 },
                      { x: 200, y: 50 },
                      { x: 350, y: 50 }
                    ]}
                  />
                </div>
              </div>
              <div className=" w-[200px] mx-auto">
                <HorizontalBarChartWithCandle />
                {/* updated chart */}
              </div>
            </div>
          </div>
          <div className="border-b-2 mx-8 ">
            <div className="  grid grid-cols-3  ">
              <div className="flex justify-start items-center ">
                <p className="font-bold text-[#1F3B59] w-52">
                  Tows In.
                  <div className=" ml-2 inline-flex">
                    <Tooltip
                      className="absolute bg-white p-3 pt-1 -right-[16rem] font-normal text-sm -top-[20px] border border-[#0F2E60] rounded w-[15rem]"
                      svgClass="h-4"
                      title={[
                        "The agent did not  confirm that the  caller  hass arranged for a towing service  or offered ti assist them with  finding  a towing  service."
                      ]}
                    />
                  </div>
                </p>
                {/* <div></div> */}
              </div>
              <div>
                <div className="">
                  <LineChartWithTwoLabels
                    position={[
                      { x: 10, y: 50 },
                      { x: 200, y: 50 },
                      { x: 350, y: 50 }
                    ]}
                  />
                </div>
              </div>
              <div className=" w-[200px] mx-auto">
                <HorizontalBarChartWithCandle />
              </div>
            </div>
            <div className="  grid grid-cols-3  ">
              <div className="flex justify-start items-center ">
                <p className="font-bold text-[#1F3B59] w-52">
                  Tows In Revenue.
                  <div className=" ml-2 inline-flex"></div>
                </p>
                {/* <div></div> */}
              </div>
              <div>
                <div className="">
                  <LineChartWithTwoLabels
                    position={[
                      { x: 10, y: 50 },
                      { x: 200, y: 50 },
                      { x: 350, y: 50 }
                    ]}
                  />
                </div>
              </div>
              <div className=" w-[200px] mx-auto">
                <HorizontalBarChartWithCandle />
                {/* updated chart */}
              </div>
            </div>
          </div>{" "}
          <div className="border-b-2 mx-8 ">
            <div className="  grid grid-cols-3  ">
              <div className="flex justify-start items-center ">
                <p className="font-bold text-[#1F3B59] w-52">
                  Service Not Provided.
                  <div className=" ml-2 inline-flex">
                    <Tooltip
                      className="absolute bg-white p-3 pt-1 -right-[16rem] font-normal text-sm -top-[20px] border border-[#0F2E60] rounded w-[15rem]"
                      svgClass="h-4"
                      title={[
                        "The agent told the caller they do not offer the requested service."
                      ]}
                    />
                  </div>
                </p>
                <div></div>
              </div>
              <div>
                <div className="">
                  <LineChartWithTwoLabels
                    position={[
                      { x: 10, y: 50 },
                      { x: 200, y: 50 },
                      { x: 350, y: 50 }
                    ]}
                  />
                </div>
              </div>
              <div className=" w-[200px] mx-auto">
                <HorizontalBarChartWithCandle />
              </div>
            </div>
          </div>
          <div
            className="border-b-2 mx-8 flex justify-center items-center py-8 m-2 cursor-pointer"
            onClick={showDetails}
          >
            <div className="bg-[#0F2E60] text-[#fff] flex  p-2 items-center rounded">
              <img className="img-fluid mr-1 h-6  w-5" src={btnicon} />
              <span> Click here for details</span>
            </div>
          </div>
        </div>
        {isShowDetails && <TogleDropDownSecrion cssClass="top-inherit" />}
        <div className="bg-white rounded-lg">
          <div className="px-8 text-xl  font-bold text-[#1F3B59] pt-4">
            {" "}
            No Booked Appointments Ravenue
          </div>
          <div className="divide-y-2 mx-8 bg-white ">
            <div className="  py-4  grid grid-cols-3 items-center ">
              <div className="flex justify-start items-center space-x-2 mt-4">
                <p className="font-bold text-[#1F3B59]">
                  Customers
                  <div className=" ml-2 inline-flex">
                    <Tooltip
                      className="absolute bg-white p-3 pt-1 -right-[16rem] font-normal text-sm -top-[20px] border border-[#0F2E60] rounded w-[15rem]"
                      svgClass="h-4"
                      title={[
                        <strong>Total:</strong>,
                        "All customers  matched to a work order.",
                        <br />,
                        <strong>new :</strong>,
                        "The new of your total customers matched to a worked order."
                      ]}
                    />
                  </div>
                </p>
              </div>
              <div>
                {" "}
                <LineChartWithTwoLabels
                  position={[
                    { x: 10, y: 50 },
                    { x: 200, y: 50 },
                    { x: 350, y: 50 }
                  ]}
                />
              </div>
              <div className="  pb-4">
                <OverlappingBarChartReversed />
                {/* updated chart */}
              </div>
            </div>
            <div className="  py-4 bg-white grid grid-cols-3 items-center">
              <div className="flex justify-start items-center space-x-2 mt-4">
                <p className="font-bold text-[#1F3B59]">
                  Revenue
                  <div className=" ml-2 inline-flex">
                    <Tooltip
                      className="absolute bg-white p-3 pt-1 -right-[16rem] font-normal text-sm -top-[20px] border border-[#0F2E60] rounded w-[15rem]"
                      svgClass="h-4"
                      title={[
                        <strong>Total:</strong>,
                        "All revenue  matched to a work order.",
                        <br />,
                        <strong>new :</strong>,
                        "The new of your total customers matched to a worked order."
                      ]}
                    />
                  </div>
                </p>
              </div>
              <div>
                {" "}
                <LineChartWithTwoLabels
                  position={[
                    { x: 10, y: 50 },
                    { x: 200, y: 50 },
                    { x: 350, y: 50 }
                  ]}
                />
              </div>
              <div className=" pb-4">
                {" "}
                {/* updated chart */}
                <OverlappingBarChartReversed />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IsBookedChartTwo;
