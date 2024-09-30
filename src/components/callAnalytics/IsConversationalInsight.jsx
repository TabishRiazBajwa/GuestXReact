import React from "react";
import LineChartForConversationInsight from "../lineChartForConversationInsight/lineChartForConversationInsight";
import Tooltip from "../../components/toolTipInfo/ToolTipInfo";

function IsConversationalInsight() {
  return (
    <div>
      {" "}
      <div className=" top-[80px] w-full rounded-md bg-[#707070] p-2 ">
        <div className="bg-white rounded-lg my-4">
          <div className="border-b-2 mx-8 py-8">
            <LineChartForConversationInsight />
          </div>
        </div>
        <div className=" bg-white rounded-lg">
          <div className="w-full bg-white p-4 mt-4 rounded-md">
            <div className="grid grid-cols-2 gap-2   pb-0 items-center">
              <div className="mb-3">
                <h2 class="text-xl font-bold  text-[#1F3B59] ">
                  Booked Appointments Outcome
                </h2>
              </div>
              <div className="xl:flex justify-end mb-3">
                <div className="flex">
                  <div className="w-36">
                    <h6 className="text-md mb-1 font-medium text-dark">
                      Law (0 - 40)
                    </h6>
                    <span className="py-2   bg-[#FF0000] block"></span>
                  </div>
                  <div className="w-36">
                    <h6 className="text-md mb-1 font-medium text-dark">
                      Moderate(41-70)
                    </h6>
                    <span className="py-2 w-34  bg-[#FFE74E] block"></span>
                  </div>
                  <div className="w-36">
                    <h6 className="text-md mb-1 font-medium text-dark">
                      Good(71-100)
                    </h6>
                    <span className="py-2 w-34  bg-[#0DA452] block"></span>
                  </div>
                  <span></span>
                  <span></span>
                </div>
                <div className="xl:flex flex mt-4 pt-2 ml-3">
                  <input
                    type="checkbox"
                    class="border-gray-300 rounded  pt-2 h-5 w-5 mr-1 border-0"
                  />
                  <h1 class="text-gray-700 font-medium leading-none pt-1 text-sm mb-1">
                    KPIs Below Goal
                  </h1>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-4 gap-4">
              <div class="...">
                <h5 className="flex items-center mb-2">
                  <span className="mr-2 w-4 h-4 rounded-full inline-block bg-[#0E2E60]"></span>
                  <span className="text-[#0F2E60] text-md">Welcoming tone</span>
                  <Tooltip
                    className="absolute bg-white p-3 left-0 top-full border border-[#0F2E60] rounded w-[30rem] z-50"
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
                </h5>
                <h5 className="flex items-center mb-2">
                  <span className="mr-2 w-4 h-4 rounded-full inline-block bg-[#1F66AC]"></span>
                  <span className="text-[#0F2E60] text-md">Company Name</span>
                  <svg
                    class="w-4 ml-2  fill-[#1F66AC]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
                  </svg>
                </h5>
                <h5 className="flex items-center mb-2">
                  <span className="mr-2 w-4 h-4 rounded-full inline-block bg-[#1897C8]"></span>
                  <span className="text-[#0F2E60] text-md">
                    Agent Provided Name
                  </span>
                  <svg
                    class="w-4 ml-2  fill-[#1F66AC]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
                  </svg>
                </h5>
                <h5 className="flex items-center mb-2">
                  <span className="mr-2 w-4 h-4 rounded-full inline-block bg-[#70D7FF]"></span>
                  <span className="text-[#0F2E60] text-md">
                    How Can I help You
                  </span>
                  <svg
                    class="w-4 ml-2  fill-[#1F66AC]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
                  </svg>
                </h5>
                <h5 className="flex items-center mb-2">
                  <span className="mr-2 w-4 h-4 rounded-full inline-block bg-[#B8EBFF]"></span>
                  <span className="text-[#0F2E60] text-md">Took Ownership</span>
                  <svg
                    class="w-4 ml-2  fill-[#1F66AC]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
                  </svg>
                </h5>
                <h5 className="flex items-center mb-2">
                  <span className="mr-2 w-4 h-4 rounded-full inline-block bg-[#373737]"></span>
                  <span className="text-[#0F2E60] text-md">
                    Acquired Caller's Name
                  </span>
                  <svg
                    class="w-4 ml-2  fill-[#1F66AC]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
                  </svg>
                </h5>
                <h5 className="flex items-center mb-2">
                  <span className="mr-2 w-4 h-4 rounded-full inline-block bg-[#5D5D5D]"></span>
                  <span className="text-[#0F2E60] text-md">
                    Identified Caller (New...
                  </span>
                  <svg
                    class="w-4 ml-2  fill-[#1F66AC]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
                  </svg>
                </h5>
                <h5 className="flex items-center mb-2">
                  <span className="mr-2 w-4 h-4 rounded-full inline-block bg-[#9F9F9F]"></span>
                  <span className="text-[#0F2E60] text-md">
                    Appointment (Vehic...
                  </span>
                  <svg
                    class="w-4 ml-2  fill-[#1F66AC]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
                  </svg>
                </h5>
                <h5 className="flex items-center mb-2">
                  <span className="mr-2 w-4 h-4 rounded-full inline-block bg-[#E4E4E4]"></span>
                  <span className="text-[#0F2E60] text-md">
                    Appointment (Confi...
                  </span>
                  <svg
                    class="w-4 ml-2  fill-[#1F66AC]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
                  </svg>
                </h5>
                <h5 className="flex items-center mb-2">
                  <span className="mr-2 w-4 h-4 rounded-full inline-block bg-[#C7C1C1]"></span>
                  <span className="text-[#0F2E60] text-md">
                    Appointment (Confi...
                  </span>
                  <svg
                    class="w-4 ml-2  fill-[#1F66AC]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
                  </svg>
                </h5>
                <h5 className="flex items-center mb-2">
                  <span className="mr-2 w-4 h-4 rounded-full inline-block border-black border bg-[white]"></span>
                  <span className="text-[#0F2E60] text-md">
                    Appointment (Confi...
                  </span>
                  <svg
                    class="w-4 ml-2  fill-[#1F66AC]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
                  </svg>
                </h5>
              </div>
              <div class="col-span-3 ...">
                <div className="grid grid-cols-10 gap-8 items-end  pb-0">
                  <div className="text-center">
                    <div className="w-full h-80 bg-[#0DA452] rounded-md mx-auto mt-3 relative">
                      <div
                        data-tooltip-target="tooltip-light"
                        className=" absolute w-full top-16 "
                      >
                        <span
                          className="absolute -top-2.5 right-[0px]    border-t-[10px] border-t-transparent
         border-r-[20px] border-r-[#0F2E60]
          border-b-[10px] border-b-transparent"
                        ></span>
                      </div>
                      <div className="border-2  border-dashed border-black border-t-1 border-b-0 border-r-0 border-l-0  absolute w-full top-9">
                        <div class="relative flex flex-col items-center group">
                          <span className="py-2"></span>
                          <div class="absolute w-full bottom-0 flex  flex-col items-center hidden mb-6 group-hover:flex">
                            <span class="relative w-full  z-10 p-2 text-xs rounded leading-none text-white whitespace-no-wrap text-[#000] font-medium bg-[#0F2E60]  text-lg">
                              97%
                            </span>
                            <div class="w-3 h-3 -mt-2 rotate-45  bg-[#0F2E60]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-80 bg-[#0DA452] rounded-md mx-auto mt-3 relative">
                      <div
                        data-tooltip-target="tooltip-light"
                        className=" absolute w-full top-16 "
                      >
                        <span
                          className="absolute -top-2.5 right-[0px]    border-t-[10px] border-t-transparent
         border-r-[20px] border-r-[#0F2E60]
          border-b-[10px] border-b-transparent"
                        ></span>
                      </div>
                      <div className="border-2  border-dashed border-black border-t-1 border-b-0 border-r-0 border-l-0  absolute w-full top-6">
                        <div class="relative flex flex-col items-center group">
                          <span className="py-2"></span>
                          <div class="absolute w-full bottom-0 flex  flex-col items-center hidden mb-6 group-hover:flex">
                            <span class="relative w-full  z-10 p-2 text-xs rounded leading-none text-white whitespace-no-wrap text-[#000] font-medium bg-[#1F66AC]  text-lg">
                              99%
                            </span>
                            <div class="w-3 h-3 -mt-2 rotate-45  bg-[#1F66AC]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-72 bg-[#0DA452] rounded-md mx-auto mt-3 relative">
                      <div
                        data-tooltip-target="tooltip-light"
                        className=" absolute w-full top-16 "
                      >
                        <span
                          className="absolute -top-2.5 right-[0px]    border-t-[10px] border-t-transparent
         border-r-[20px] border-r-[#0F2E60]
          border-b-[10px] border-b-transparent"
                        ></span>
                      </div>
                      <div className="border-2  border-dashed border-black border-t-1 border-b-0 border-r-0 border-l-0  absolute w-full top-12">
                        <div class="relative flex flex-col items-center group">
                          <span className="py-2"></span>
                          <div class="absolute w-full bottom-0 flex  flex-col items-center hidden mb-6 group-hover:flex">
                            <span class="relative w-full  z-10 p-2 text-xs rounded leading-none text-white whitespace-no-wrap text-[#000] font-medium bg-[#1897C8]  text-lg">
                              92%
                            </span>
                            <div class="w-3 h-3 -mt-2 rotate-45  bg-[#1897C8]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-64 bg-[#0DA452] rounded-md mx-auto mt-3 relative">
                      <div
                        data-tooltip-target="tooltip-light"
                        className=" absolute w-full top-16 "
                      >
                        <span
                          className="absolute -top-2.5 right-[0px]    border-t-[10px] border-t-transparent
         border-r-[20px] border-r-[#0F2E60]
          border-b-[10px] border-b-transparent"
                        ></span>
                      </div>
                      <div className="border-2  border-dashed border-black border-t-1 border-b-0 border-r-0 border-l-0  absolute w-full top-12">
                        <div class="relative flex flex-col items-center group">
                          <span className="py-2"></span>
                          <div class="absolute w-full bottom-0 flex  flex-col items-center hidden mb-6 group-hover:flex">
                            <span class="relative w-full  z-10 p-2 text-xs rounded leading-none text-white whitespace-no-wrap text-[#000] font-medium bg-[#70D7FF]  text-lg">
                              89%
                            </span>
                            <div class="w-3 h-3 -mt-2 rotate-45  bg-[#70D7FF]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-72 bg-[#FF0000] rounded-md mx-auto mt-3 relative">
                      <div
                        data-tooltip-target="tooltip-light"
                        className=" absolute w-full top-16 "
                      >
                        <span
                          className="absolute -top-2.5 right-[0px]    border-t-[10px] border-t-transparent
         border-r-[20px] border-r-[#0F2E60]
          border-b-[10px] border-b-transparent"
                        ></span>
                      </div>
                      <div className="border-2  border-dashed border-black border-t-1 border-b-0 border-r-0 border-l-0  absolute w-full bottom-12">
                        <div class="relative flex flex-col items-center group">
                          <span className="py-2"></span>
                          <div class="absolute w-full bottom-0 flex  flex-col items-center hidden mb-6 group-hover:flex">
                            <span class="relative w-full  z-10 p-2 text-xs rounded leading-none  whitespace-no-wrap text-black font-medium bg-[#B8EBFF]  text-lg">
                              32%
                            </span>
                            <div class="w-3 h-3 -mt-2 rotate-45  bg-[#B8EBFF]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-72 bg-[#FFE74E] rounded-md mx-auto mt-3 relative">
                      <div
                        data-tooltip-target="tooltip-light"
                        className=" absolute w-full top-16 "
                      >
                        <span
                          className="absolute -top-2.5 right-[0px]    border-t-[10px] border-t-transparent
         border-r-[20px] border-r-[#0F2E60]
          border-b-[10px] border-b-transparent"
                        ></span>
                      </div>
                      <div className="border-2  border-dashed border-black border-t-1 border-b-0 border-r-0 border-l-0  absolute w-full bottom-2/4">
                        <div class="relative flex flex-col items-center group">
                          <span className="py-2"></span>
                          <div class="absolute w-full bottom-0 flex  flex-col items-center hidden mb-6 group-hover:flex">
                            <span class="relative w-full  z-10 p-2 text-xs rounded leading-none  whitespace-no-wrap text-white font-medium bg-[#373737]  text-lg">
                              55%
                            </span>
                            <div class="w-3 h-3 -mt-2 rotate-45  bg-[#373737]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-72 bg-[#FF0000] rounded-md mx-auto mt-3 relative">
                      <div
                        data-tooltip-target="tooltip-light"
                        className=" absolute w-full top-16 "
                      >
                        <span
                          className="absolute -top-2.5 right-[0px]    border-t-[10px] border-t-transparent
         border-r-[20px] border-r-[#0F2E60]
          border-b-[10px] border-b-transparent"
                        ></span>
                      </div>
                      <div className="border-2  border-dashed border-black border-t-1 border-b-0 border-r-0 border-l-0  absolute w-full bottom-12">
                        <div class="relative flex flex-col items-center group">
                          <span className="py-2"></span>
                          <div class="absolute w-full bottom-0 flex  flex-col items-center hidden mb-6 group-hover:flex">
                            <span class="relative w-full  z-10 p-2 text-xs rounded leading-none  whitespace-no-wrap text-black font-medium bg-[#9F9F9F]  text-lg">
                              33%
                            </span>
                            <div class="w-3 h-3 -mt-2 rotate-45  bg-[#9F9F9F]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-72 bg-[#FF0000] rounded-md mx-auto mt-3 relative">
                      <div
                        data-tooltip-target="tooltip-light"
                        className=" absolute w-full top-16 "
                      >
                        <span
                          className="absolute -top-2.5 right-[0px]    border-t-[10px] border-t-transparent
         border-r-[20px] border-r-[#0F2E60]
          border-b-[10px] border-b-transparent"
                        ></span>
                      </div>
                      <div className="border-2  border-dashed border-black border-t-1 border-b-0 border-r-0 border-l-0  absolute w-full bottom-12">
                        <div class="relative flex flex-col items-center group">
                          <span className="py-2"></span>
                          <div class="absolute w-full bottom-0 flex  flex-col items-center hidden mb-6 group-hover:flex">
                            <span class="relative w-full  z-10 p-2 text-xs rounded leading-none  whitespace-no-wrap text-black font-medium bg-[#E4E4E4]  text-lg">
                              35%
                            </span>
                            <div class="w-3 h-3 -mt-2 rotate-45  bg-[#E4E4E4]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-72 bg-[#FF0000] rounded-md mx-auto mt-3 relative">
                      <div
                        data-tooltip-target="tooltip-light"
                        className=" absolute w-full top-16 "
                      >
                        <span
                          className="absolute -top-2.5 right-[0px]    border-t-[10px] border-t-transparent
         border-r-[20px] border-r-[#0F2E60]
          border-b-[10px] border-b-transparent"
                        ></span>
                      </div>
                      <div className="border-2  border-dashed border-black border-t-1 border-b-0 border-r-0 border-l-0  absolute w-full bottom-10">
                        <div class="relative flex flex-col items-center group">
                          <span className="py-2"></span>
                          <div class="absolute w-full bottom-0 flex  flex-col items-center hidden mb-6 group-hover:flex">
                            <span class="relative w-full  z-10 p-2 text-xs rounded leading-none  whitespace-no-wrap text-black font-medium bg-[#C7C1C1]  text-lg">
                              35%
                            </span>
                            <div class="w-3 h-3 -mt-2 rotate-45  bg-[#C7C1C1]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-72 bg-[#FF0000] rounded-md mx-auto mt-3 relative">
                      <div
                        data-tooltip-target="tooltip-light"
                        className=" absolute w-full top-16 "
                      >
                        <span
                          className="absolute -top-2.5 right-[0px]    border-t-[10px] border-t-transparent
         border-r-[20px] border-r-[#0F2E60]
          border-b-[10px] border-b-transparent"
                        ></span>
                      </div>
                      <div className="border-2  border-dashed border-black border-t-1 border-b-0 border-r-0 border-l-0  absolute w-full bottom-16">
                        <div class="relative flex flex-col items-center group">
                          <span className="py-2"></span>
                          <div class="absolute w-full bottom-0 flex  flex-col items-center hidden mb-6 group-hover:flex">
                            <span class="relative w-full  z-10 p-2 text-xs rounded leading-none  whitespace-no-wrap text-black border border-black font-medium bg-[#fff]  text-lg">
                              35%
                            </span>
                            <div class="w-3 h-3 -mt-2 rotate-45  bg-[#fff]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IsConversationalInsight;
