import React from "react";
import {
  AiFillCaretDown,
  AiFillCaretRight,
  AiFillCaretUp
} from "react-icons/ai";
import btnicon from "../../assets/icon2.png";

import BookedAppointmentsCharts from "../bookedAppointmentsCharts/bookedAppointmentsCharts";
import SingleCandleBarChart from "../singleCandleBarChart/singleCandleBarChart";
import Tooltip from "../../components/toolTipInfo/ToolTipInfo";
function SectionThree(props) {
  const {
    isBookedChartsTwo,
    setIsBookedChartsTwo,
    setIsRevenueTwo,
    isRevenueTwo,
    setBookedAppointmentChartOne,
    bookedAppointmentChartOne
  } = props;

  return (
    <div>
      {" "}
      <div className="grid grid-cols-2 gap-4 pt-8 px-4 pb-0 lg:mx-[12rem]">
      <div className="absolute right-[18px] top-[30px] ml-[40px]">
          <Tooltip
            className="absolute bg-white p-3 right-0 top-full border border-[#0F2E60] rounded w-[30rem]"
            title={[
              <strong className="">No Booked Appts:</strong>,
              "Calls with a duration of <30 seconds and >5 minutes identified as a lead, and the outcome of the call was an appointment not set as a drop-off or specific day/time..",
              <br />,
              <strong className="">leads:</strong>,
              "Phone calls with a duration of <30 seconds and >5 minutes that were identified as a lead. A lead is defined as someone inquiring about automotive repair services. Review your service agreement for limits and minimum requirements.",
            ]}
          />
        </div>
        <div>
          <h2 className="text-lg font-bold mb-8 text-[#1F3B59] text-center">
            Lead
          </h2>
          <SingleCandleBarChart chartClass="bg-[#C7C1C1] h-[240px]"  title="here text" titleClass="text-[#0F2E60]"/>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-8 text-[#1F3B59] text-center">
            Booked Appointments Outcome
          </h2>

          <BookedAppointmentsCharts />
        </div>
      </div>
      <div className="grid grid-cols-3">
        {" "}
        <div
          className={`flex items-center gap-4 cursor-pointer shadow-box px-4 py-2 m-6 w-[340px] rounded-md ${
            isBookedChartsTwo ? "bg-[#1F66AC]" : "bg-white"
          }`}
          onClick={() => setIsBookedChartsTwo(!isBookedChartsTwo)}
        >
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center cursor-pointer ${
              isBookedChartsTwo ? "bg-white" : "bg-[#1F3B59]"
            }`}
          >
            <span
              className={`${
                isBookedChartsTwo ? "text-[#1F3B59]" : "text-white"
              }`}
            >
              {isBookedChartsTwo ? <AiFillCaretUp /> : <AiFillCaretDown />}
            </span>
          </div>
          <div
            className={`${
              isBookedChartsTwo ? "text-white" : "text-[#1F3B59]"
            } font-medium`}
          >
            No Booked Appointment Charts
          </div>
        </div>
        <div
          onClick={() => setIsRevenueTwo(!isRevenueTwo)}
          className="flex justify-center items-center gap-4 bg-white cursor-pointer px-4 py-2  pb-8
        mt-6 max-w-[290px] mx-auto rounded-md"
        >
          <div className="w-6 h-6 rounded-full flex items-center justify-center cursor-pointer">
            <span className="text-[#0F2E60]">
              {isRevenueTwo ? <AiFillCaretRight /> : <AiFillCaretDown />}
            </span>
          </div>
          <div className="text-[#0F2E60] font-medium">Customer and Revenue</div>
        </div>
        <div
          onClick={() =>
            setBookedAppointmentChartOne(!bookedAppointmentChartOne)
          }
          className="flex items-center gap-4  bg-white cursor-pointer px-4 py-2 ml-auto w-[360px] rounded-md"
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
          <div className="bg-[#0F2E60] text-[#fff] font-medium flex p-2 items-center rounded">
            <img className="img-fluid mr-1" src={btnicon}></img>
            <span> Click here to review call details</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
