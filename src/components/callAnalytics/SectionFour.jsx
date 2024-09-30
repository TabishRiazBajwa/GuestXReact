import React from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import BookedAppointmentsCharts from "../bookedAppointmentsCharts/bookedAppointmentsCharts";
import Tooltip from "../../components/toolTipInfo/ToolTipInfo";
function SectionFour(props) {
  const {
    isConversationInsightCharts,
    setIsConversationInsightCharts,
    setIsRevenueTwo,
    isRevenueTwo,
    setBookedAppointmentChartOne,
    bookedAppointmentChartOne
  } = props;
  return (
    <div>
      {" "}
      <div className="bg-white rounded-lg shadow-lg ">
        <div className="absolute right-[18px] top-[30px] ml-[40px]">
          <Tooltip
            className="absolute bg-white p-3 right-0 top-full border border-[#0F2E60] rounded w-[30rem]"
            title={[
              <strong className="">Conversation Indicators:</strong>,
              "Measures the percentage of  time  each indicator is utilized/applied during the all lead calls.",
              <div className="ml-3">
                <strong className="">Hover:</strong>
                Individual indicator score.
              </div>,
              <strong className="">Average:</strong>,
              "Is this average of all indicator scores compared to the goal"
            ]}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 pt-8 px-4 pb-0 lg:mx-[12rem]">
          <div>
            <h2 className="text-lg font-bold mb-8 text-[#1F3B59] text-center">
              Lead
            </h2>
            <div>
              <div className="text-center  border-b-2 pb-[5px] lg:mx-[5rem]">
                <div className="w-[10rem] h-64 bg-[#0DA452] rounded-md mx-auto mt-4 relative">
                  {/* blow given top will change the arrow it will move up and down */}

                  <div
                    data-tooltip-target="tooltip-light"
                    className="border-2 border-dashed border-[#fff] absolute w-full top-9 border-t-1 border-b-0 border-r-0 border-l-0"
                  >
                    <span
                      className="absolute -top-2.5 right-[2px]    border-t-[10px] border-t-transparent
                      border-r-[20px] border-r-[#fff]
                      border-b-[10px] border-b-transparent"
                    ></span>
                    <div class="relative flex flex-col items-center group">
                      <span className="py-1"></span>
                      <div class="absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex -right-[50%] -top-3.5">
                        <span class="relative z-10 p-2 text-xs leading-none rounded whitespace-no-wrap bg-white color-[#0E2E60] font-medium  border-[#0E2E60] border ">
                          80% Goal{" "}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* blow given bottom will change the arrow it will move up and down */}

                  <div className="border-2  border-dashed border-[#0F2E60] border-t-1 border-b-0 border-r-0 border-l-0  absolute w-[110%] -ml-[9px] bottom-20">
                    <div class="relative flex flex-col items-center group">
                      <span className="py-1"></span>
                      <div class="absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex right-[37%] ">
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
              {false && (
                <div className="flex items-center justify-center pt-6 max-w-[210px] mx-auto">
                  <h5 className="flex items-center mb-2 mr-10">
                    <span className="mr-2 w-4 h-4 rounded-full inline-block bg-[#0E2E60]"></span>
                    <span className="text-[#0F2E60] text-md">Total</span>
                  </h5>
                  <h5 className="flex items-center mb-2">
                    <span className="mr-2 w-4 h-4 rounded-full inline-block bg-[#1F66AC]"></span>
                    <span className="text-[#0F2E60] text-md">New</span>
                  </h5>
                </div>
              )}
            </div>
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
            className={`flex items-center gap-4 cursor-pointer shadow-box px-4 py-2 m-6 w-[290px] rounded-md ${
              isConversationInsightCharts ? "bg-[#1F66AC]" : "bg-white"
            }`}
            onClick={() =>
              setIsConversationInsightCharts(!isConversationInsightCharts)
            }
          >
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center cursor-pointer ${
                isConversationInsightCharts ? "bg-white" : "bg-[#1F3B59]"
              }`}
            >
              <span
                className={`${
                  isConversationInsightCharts ? "text-[#1F3B59]" : "text-white"
                }`}
              >
                {isConversationInsightCharts ? (
                  <AiFillCaretUp />
                ) : (
                  <AiFillCaretDown />
                )}
              </span>
            </div>
            <div
              className={`${
                isConversationInsightCharts ? "text-white" : "text-[#1F3B59]"
              } font-medium`}
            >
              Conversation Insight Chart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
