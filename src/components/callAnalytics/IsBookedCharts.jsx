import React, { useState } from "react";
import OverlappingBarChartReversed from "../overlappingBarChartReversed/overlappingBarChartReversed";
import LineChartWithTwoLabels from "../lineChart/lineChart";
import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiOutlineExclamationCircle
} from "react-icons/ai";
import BookedAppointmentsCharts from "../bookedAppointmentsCharts/bookedAppointmentsCharts";
import HorizontalBarChartWithCandle from "../singleHorizentalBarChart/singleHorizentalBarChart";
import btnicon from "../../assets/icon2.png";
import Tooltip from "../../components/toolTipInfo/ToolTipInfo";
import TogleDropDownSecrion from "../togleDropDownSecrion/togleDropDownSecrion";

function IsBookedCharts(props) {
  const {
    bookedAppointmentChartOne,
    setMoreDetailBookedAppointmentChart,
    moreDetailBookedAppointmentChart
  } = props;
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
            <div className="flex justify-start items-center space-x-4">
              <p className="font-bold text-[#1F3B59] relative flex items-center">
                Leads
                <div className=" ml-2 mt-1">
                  <Tooltip
                    className="absolute bg-white p-3 left-0 font-normal text-sm -top-[20px] border border-[#0F2E60] rounded w-[22rem]"
                    title={[
                      "Phone calls with a duration of <30 seconds and >5 minutes that were identified as a lead. A lead is defined as someone inquiring about automotive repair services. Review your service agreement for limits and minimum requirements."
                    ]}
                  />
                </div>
              </p>
            </div>
            <div>
              <div className="pl-4 h-[60px] mt-2">
                <LineChartWithTwoLabels
                  position={[
                    { x: 10, y: 50 },
                    { x: 250, y: 50 },
                    { x: 400, y: 50 }
                  ]}
                />
              </div>
            </div>
            <div className="h-[100px] w-[200px] mx-auto">
              <HorizontalBarChartWithCandle />
            </div>
          </div>
          <div className=" mx-8 bg-white grid grid-cols-3">
            <div className="flex justify-start items-center space-x-4">
              <p className="font-bold text-[#1F3B59] relative flex">
                Booked Appointment
                <div className=" ml-2 ">
                  <Tooltip
                    className="absolute bg-white p-3 left-0 font-normal text-sm -top-[20px] border border-[#0F2E60] rounded w-[22rem]"
                    title={[
                      "Calls with a duration of <30 seconds or >  5 minutes identified as a lead, and the outcome of the call was a book an appointment as a drop-off or specific day/time."
                    ]}
                  />
                </div>
              </p>
            </div>
            <div>
              <div className="pl-4 ">
                <LineChartWithTwoLabels
                  position={[
                    { x: 10, y: 50 },
                    { x: 250, y: 50 },
                    { x: 400, y: 50 }
                  ]}
                />
              </div>
            </div>
            <div className="h-[100px] w-[200px] mx-auto">
              <HorizontalBarChartWithCandle />
            </div>
          </div>
        </div>
        <div className="bg-white rounded my-4">
          <div className=" py-2    grid grid-cols-3 items-center">
            <div className="col-span-2 bg-white ">
              <div className="px-8 text-xl  font-bold text-[#1F3B59] mt-4">
                Booked Appointment Outcome
              </div>
              <div className="py-4  grid grid-cols-2 border-b-2  mx-8">
                <div>
                  <div className="flex justify-start items-center space-x-2">
                    <p className="font-bold text-[#1F3B59] relative flex items-center">
                      Unclassified
                      <div className=" ml-2 mt-1">
                        <Tooltip
                          className="absolute bg-white p-3 -right-[16rem] font-normal text-sm -top-[20px] border border-[#0F2E60] rounded w-[15rem]"
                          title={[
                            "Percentage of total calls and total scrored calls"
                          ]}
                        />
                      </div>
                    </p>
                  </div>
                  <div
                    onClick={() =>
                      setMoreDetailBookedAppointmentChart(
                        !moreDetailBookedAppointmentChart
                      )
                    }
                    className="w-48   bg-white cursor-pointer  rounded-md"
                  >
                    <div className="">
                      <span className="text-white">
                        {bookedAppointmentChartOne ? (
                          <AiFillCaretUp />
                        ) : (
                          <AiFillCaretDown />
                        )}
                      </span>
                    </div>
                    <div
                      className="bg-[#0F2E60] text-[#fff] flex  p-2 items-center rounded  w-[205px] cursor-pointer"
                      onClick={showDetails}
                    >
                      <img className="img-fluid mr-1" src={btnicon}></img>
                      <span> Click here for details</span>
                    </div>
                  </div>
                </div>
                <div className="h-10">
                  <LineChartWithTwoLabels
                    position={[
                      { x: 10, y: 50 },
                      { x: 200, y: 50 },
                      { x: 350, y: 50 }
                    ]}
                  />
                </div>
              </div>
              {isShowDetails && <TogleDropDownSecrion cssClass="top-inherit" />}
              <div className="  pb-4 bg-white grid grid-cols-2 mx-8 border-b-2 items-center">
                <div className="flex justify-start items-center space-x-2 mt-3">
                  <p className="font-bold text-[#1F3B59] flex items-center">
                    Appointment Arrivals
                    <div className=" ml-2 mt-1">
                      <Tooltip
                        className="absolute bg-white p-3 -right-[16rem] font-normal text-sm -top-[20px] border border-[#0F2E60] rounded w-[15rem]"
                        title={[
                          "Booked appointment that arrived for the appointment and matched to a work order"
                        ]}
                      />
                    </div>
                  </p>
                </div>
                <div className="h-[60px]">
                  <LineChartWithTwoLabels
                    position={[
                      { x: 10, y: 50 },
                      { x: 200, y: 50 },
                      { x: 350, y: 50 }
                    ]}
                  />
                </div>
              </div>
              <div className="  pb-4 bg-white grid grid-cols-2 mx-8 items-center">
                <div className="flex justify-start items-center space-x-2 mt-4">
                  <p className="font-bold text-[#1F3B59] flex items-center">
                    Appointment No-Shows
                    <div className=" ml-2 mt-1">
                      <Tooltip
                        className="absolute bg-white p-3 -right-[16rem] font-normal text-sm -top-[20px] border border-[#0F2E60] rounded w-[15rem]"
                        title={[
                          "Booked appointment that  did  not arrive for the appointment"
                        ]}
                      />
                    </div>
                  </p>
                </div>
                <div>
                  <LineChartWithTwoLabels
                    position={[
                      { x: 10, y: 50 },
                      { x: 200, y: 50 },
                      { x: 350, y: 50 }
                    ]}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-1 bg-white">
              <BookedAppointmentsCharts />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg">
          <div className="px-8 text-xl  font-bold text-[#1F3B59] pt-4">
            {" "}
            Booked Appointments Ravenue
          </div>
          <div className="divide-y-2 mx-8 bg-white ">
            <div className="  py-4  grid grid-cols-3 items-center">
              <div className="flex justify-start items-center space-x-2 mt-4 ">
                <p className="font-bold text-[#1F3B59] flex items-center">
                  Customers
                  <div className=" ml-2 mt-1">
                    <Tooltip
                      className="absolute bg-white p-3 -right-[16rem] font-normal text-sm -top-[20px] border border-[#0F2E60] rounded w-[15rem]"
                      title={[
                        <strong>Total:</strong>,
                        "All customers matched to a work order",
                        <br />,
                        <strong>New:</strong>,
                        "The new of your total customers matched to a work order"
                      ]}
                    />
                  </div>
                </p>
              </div>
              <div>
                <LineChartWithTwoLabels
                  position={[
                    { x: 10, y: 50 },
                    { x: 200, y: 50 },
                    { x: 350, y: 50 }
                  ]}
                />
              </div>
              <div className="  pb-4">
                <OverlappingBarChartReversed chartClass="h-[10rem] w-[7rem]" />
                {/* updated chart */}
              </div>
            </div>
            <div className="  py-4 bg-white grid grid-cols-3 items-center ">
              <div className="flex justify-start items-center space-x-2 mt-4">
                <p className="font-bold text-[#1F3B59] flex relative items-center ">
                  Revenue
                  <div className=" ml-2 mt-1">
                    <Tooltip
                      className="absolute bg-white p-3 -right-[16rem] font-normal text-sm -top-[20px] border border-[#0F2E60] rounded w-[15rem]"
                      title={[
                        <strong>Total:</strong>,
                        "All revenue matched to a work order",
                        <br />,
                        <strong>New:</strong>,
                        "The new of your total customers matched to a work order"
                      ]}
                    />
                  </div>
                </p>
              </div>
              <div>
                <LineChartWithTwoLabels
                  position={[
                    { x: 10, y: 50 },
                    { x: 200, y: 50 },
                    { x: 350, y: 50 }
                  ]}
                />
              </div>
              <div className="pb-4">
                {" "}
                {/* updated chart */}
                <OverlappingBarChartReversed chartClass="h-[10rem] w-[7rem]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IsBookedCharts;
