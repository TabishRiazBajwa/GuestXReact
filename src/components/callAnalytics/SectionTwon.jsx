import React from "react";
import {
  AiFillCaretDown,
  AiFillCaretRight,
  AiFillCaretUp
} from "react-icons/ai";
import BookedAppointmentsCharts from "../bookedAppointmentsCharts/bookedAppointmentsCharts";
import SingleCandleBarChart from "../singleCandleBarChart/singleCandleBarChart";
import btnicon from "../../assets/icon2.png";
import Tooltip from "../../components/toolTipInfo/ToolTipInfo";

function SectionTwon(props) {
  const {
    isBookedCharts,
    setIsBookedCharts,
    isRevenue,
    setIsRevenue,
    setBookedAppointmentChartOne,
    bookedAppointmentChartOne
  } = props;
  return (
    <div>
      {" "}
      <div className="grid grid-cols-3 gap-4 pt-8 px-4 pb-0 bg-white rounded-lg shadow-lg">
        <div className="absolute right-[18px] top-[30px] ml-[40px]">
          <Tooltip
            className="absolute bg-white p-3 right-0 top-full border border-[#0F2E60] rounded w-[30rem]"
            title={[
              <strong className="">Leads:</strong>,
              "Phone calls with a duration of <30 seconds and >5 minutes that were identified as a lead. A lead is defined as someone inquiring about automotive repair services. Review your service agreement for limits and minimum requirements.",
              <br />,

              <strong className="">Booked Appts:</strong>,
              "Calls with a duration of <30 seconds or >5 minutes that were identified as a lead and the appointment was booked as a drop-off or specific day/time.",
              <br />,

              <strong className="">Booked Appts Outcome:</strong>,
              "(Hover)",
              <br />,
              <div className="ml-3">
                <strong className="">Booked Appt. Arrivals:</strong>
                Booked Appointments that arrived for the appointment and matched
                to a work order.
              </div>,
              <div className="ml-3">
                <strong className="">Booked Appt. No Shows:</strong>
                Booked Appointments that did not arrive for the appointment.
              </div>,

              <div className="ml-3">
                <strong className="">Unclassified:</strong>
                Booked Appointments not matched to a work order or classified as
                a no-show. Click on the details link to classify these calls.
              </div>
            ]}
          />
        </div>
        <div>
          <h2 className="text-lg font-bold mb-8 text-[#1F3B59] text-center">
            Lead
          </h2>
          <SingleCandleBarChart
            chartClass="bg-[#1F66AC] h-[195px] mt-[95px]"
            title="here text"
            titleClass="text-[#fff]"
          />
          <div
            className={`flex items-center gap-4 cursor-pointer shadow-box px-4 py-2 m-6 w-[310px] rounded-md ${
              isBookedCharts ? "bg-[#1F66AC]" : "bg-white"
            }`}
            onClick={() => setIsBookedCharts(!isBookedCharts)}
          >
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center cursor-pointer ${
                isBookedCharts ? "bg-white" : "bg-[#1F3B59]"
              }`}
            >
              <span
                className={`${
                  isBookedCharts ? "text-[#1F3B59]" : "text-white"
                }`}
              >
                {isBookedCharts ? <AiFillCaretUp /> : <AiFillCaretDown />}
              </span>
            </div>
            <div
              className={`${
                isBookedCharts ? "text-white" : "text-[#1F3B59]"
              } font-medium`}
            >
              Booked Appointment Charts
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-8 text-[#1F3B59] text-center">
            Booked Appointments
          </h2>
          <div>
            <div className="text-center  border-b-2 pb-[5px] lg:mx-[5rem]">
              <div className="w-[10rem] h-64 bg-[#0DA452] rounded-md mx-auto mt-4 relative ">
                <div
                  data-tooltip-target="tooltip-light"
                  className="border-2 border-dashed border-[#fff] absolute w-full top-[10%] border-t-1 border-b-0 border-r-0 border-l-0"
                >
                  <span
                    className="absolute -top-2.5 right-[2px]    border-t-[10px] border-t-transparent
              border-r-[20px] border-r-[#fff]
              border-b-[10px] border-b-transparent"
                  ></span>
                  <div class="relative flex flex-col items-center group">
                    <span className="py-1"></span>
                    <div class="absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex -right-[50%] -top-3.5">
                      <span class="relative z-10 p-2 text-xs leading-none rounded whitespace-no-wrap bg-white color-[#0E2E60] font-medium  border-[#0E2E60] border  ">
                        80% Goal{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="border-2  border-dashed border-[#0F2E60] border-t-1 border-b-0 border-r-0 border-l-0  absolute w-[110%] -ml-[9px] bottom-[10%]">
                  <div class="relative flex flex-col items-center group">
                    <span className="py-1"></span>
                    <div class="absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex left-[4.3rem] -top-12">
                      <span class="relative z-10 p-2 text-xs leading-none rounded whitespace-no-wrap bg-[#43c8ff] font-medium  text-white ">
                        22 33{" "}
                      </span>
                      <span
                        className="absolute top-[29px] left-[3px] right-[3px] rotate-90  border-t-[10px] border-t-transparent
                          border-l-[20px] border-l-[#43c8ff]
                           border-b-[10px] border-b-transparent"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="flex items-center justify-center pt-6 max-w-[210px] mx-auto">
          <h5 className="flex items-center mb-2 mr-10">
            <span className="mr-2 w-4 h-4 rounded-full inline-block bg-[#0E2E60]"></span>
            <span className="text-[#0F2E60] text-md">Total</span>
          </h5>
          <h5 className="flex items-center mb-2">
            <span className="mr-2 w-4 h-4 rounded-full inline-block bg-[#1F66AC]"></span>
            <span className="text-[#0F2E60] text-md">New</span>
          </h5>
        </div> */}
          </div>
          <div
            onClick={() => setIsRevenue(!isRevenue)}
            className="flex justify-center items-center gap-4 bg-white cursor-pointer px-4 py-2 
        mt-6 max-w-[290px] mx-auto rounded-md"
          >
            <div className="w-6 h-6 rounded-full flex items-center justify-center cursor-pointer">
              <span className="text-[#0F2E60]">
                {isRevenue ? <AiFillCaretRight /> : <AiFillCaretDown />}
              </span>
            </div>
            <div className="text-[#0F2E60] font-medium">
              Customer and Revenue
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-8 text-[#1F3B59] text-center">
            Booked Appointments Outcome
          </h2>

          <BookedAppointmentsCharts />
          {/* </div> */}
          <div
            onClick={() =>
              setBookedAppointmentChartOne(!bookedAppointmentChartOne)
            }
            className="flex items-end justify-end   cursor-pointer   py-2 pr-2  w-full rounded-md"
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
            <div className="bg-[#0F2E60] text-[#fff] font-medium flex p-2   items-center rounded">
              <img className="img-fluid mr-1 " src={btnicon}></img>
              <span> Click here to review unclassified calls</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwon;
