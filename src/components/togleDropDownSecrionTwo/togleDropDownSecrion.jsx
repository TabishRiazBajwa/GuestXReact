import React, { useEffect, useRef, useState } from "react";
import { Button } from "@mui/material";
import envelopIcon from "../../assets/icons (2).png";
import deleteIcon from "../../assets/icons (1).png";
import infoIcon from "../../assets/info.png";
// import { TextField, Button } from "@mui/material";
// import AiOutlineEdit
// import AiTwotoneEdit

const TogleDropDownSecrion = ({ cssClass }) => {
  const [isOpen, setIsOpen] = useState(true);

  const tableData = [
    {
      callerID: "Mian",
      callerName: "Mark",
      phoneNumber: "123-456-7890",
      customerNumber: "001",
      sa: "John Doe",
      callDateTime: "2023-05-07 10:30:00",
      leadSource: "Google",
      complianceScore: "80%",
      reason: "Interested"
    },
    {
      callerID: "Mian",
      callerName: "Mark",
      phoneNumber: "123-456-7890",
      customerNumber: "001",
      sa: "John Doe",
      callDateTime: "2023-05-07 10:30:00",
      leadSource: "Google",
      complianceScore: "80%",
      reason: "Interested"
    },
    {
      callerID: "Mian",
      callerName: "Mark",
      phoneNumber: "123-456-7890",
      customerNumber: "001",
      sa: "John Doe",
      callDateTime: "2023-05-07 10:30:00",
      leadSource: "Google",
      complianceScore: "80%",
      reason: "Interested"
    },
    {
      callerID: "Mian",
      callerName: "Mark",
      phoneNumber: "123-456-7890",
      customerNumber: "001",
      sa: "John Doe",
      callDateTime: "2023-05-07 10:30:00",
      leadSource: "Google",
      complianceScore: "80%",
      reason: "Interested"
    },
    {
      callerID: "Mian",
      callerName: "Mark",
      phoneNumber: "123-456-7890",
      customerNumber: "001",
      sa: "John Doe",
      callDateTime: "2023-05-07 10:30:00",
      leadSource: "Google",
      complianceScore: "80%",
      reason: "Interested"
    },
    {
      callerID: "Mian",
      callerName: "Mark",
      phoneNumber: "123-456-7890",
      customerNumber: "001",
      sa: "John Doe",
      callDateTime: "2023-05-07 10:30:00",
      leadSource: "Google",
      complianceScore: "80%",
      reason: "Interested"
    },
    {
      callerID: "Mian",
      callerName: "Mark",
      phoneNumber: "123-456-7890",
      customerNumber: "001",
      sa: "John Doe",
      callDateTime: "2023-05-07 10:30:00",
      leadSource: "Google",
      complianceScore: "80%",
      reason: "Interested"
    },
    {
      callerID: "Mian",
      callerName: "Mark",
      phoneNumber: "123-456-7890",
      customerNumber: "001",
      sa: "John Doe",
      callDateTime: "2023-05-07 10:30:00",
      leadSource: "Google",
      complianceScore: "80%",
      reason: "Interested"
    },
    {
      callerID: "Mian",
      callerName: "Mark",
      phoneNumber: "123-456-7890",
      customerNumber: "001",
      sa: "John Doe",
      callDateTime: "2023-05-07 10:30:00",
      leadSource: "Google",
      complianceScore: "80%",
      reason: "Interested"
    },
    {
      callerID: "Mian",
      callerName: "Mark",
      phoneNumber: "123-456-7890",
      customerNumber: "001",
      sa: "John Doe",
      callDateTime: "2023-05-07 10:30:00",
      leadSource: "Google",
      complianceScore: "80%",
      reason: "Interested"
    },
    {
      callerID: "Mian",
      callerName: "Mark",
      phoneNumber: "123-456-7890",
      customerNumber: "001",
      sa: "John Doe",
      callDateTime: "2023-05-07 10:30:00",
      leadSource: "Google",
      complianceScore: "80%",
      reason: "Interested"
    },
    {
      callerID: "Mian",
      callerName: "Mark",
      phoneNumber: "123-456-7890",
      customerNumber: "001",
      sa: "John Doe",
      callDateTime: "2023-05-07 10:30:00",
      leadSource: "Google",
      complianceScore: "80%",
      reason: "Interested"
    },
    {
      callerID: "Mian",
      callerName: "Mark",
      phoneNumber: "123-456-7890",
      customerNumber: "001",
      sa: "John Doe",
      callDateTime: "2023-05-07 10:30:00",
      leadSource: "Google",
      complianceScore: "80%",
      reason: "Interested"
    },
    {
      callerID: "Mian",
      callerName: "Mark",
      phoneNumber: "123-456-7890",
      customerNumber: "001",
      sa: "John Doe",
      callDateTime: "2023-05-07 10:30:00",
      leadSource: "Google",
      complianceScore: "80%",
      reason: "Interested"
    }
    // add more data as needed
  ];

  return (
    <div
      className={`appointment-info  absolute rounded-md z-40  bg-zinc-500 bg-opacity-40 backdrop-blur-md ${cssClass}`}
    >
      {isOpen && (
        <div className="">
          <div className="mb-4 grid grid-cols-1 pr-2 xl:grid-cols-3">
            <div className="rounded-lg relative flex flex-col   text-gray-700 overflow-hidden xl:col-span-2 ">
              <div className="py-2  min-w-full sm:px-2 lg:pl-4">
                <div className="  ">
                  <h2 className=" px-4  mt-2 text-2xl  leading-tight text-[#0F2E60] flex">
                    Unclassified Booked Appointment!
                    <img
                      className="max-w-[150px] w-full"
                      src={infoIcon}
                      alt=""
                    />
                  </h2>

                  <p className="text-sm px-4  text-[#0F2E60]   mb-3 mt-1">
                    Please enter the request information highlight{" "}
                    <span className="text-red-600">
                      <u>red</u>
                    </span>{" "}
                    Section
                  </p>
                  <div className="rounded-md overflow-hidden">
                    <div className="p-6 overflow-y-auto overflow-x-scroll h-[34rem] w-full px-0 pt-0 pb-2  bg-white">
                      <table className=" w-full min-w-[640px] table-auto">
                        <thead className="bg-[#0F2E60] border-b">
                          <tr>
                            <div className="sticky left-0">
                              <th className="text-sm font-medium text-white px-6 py-4 text-left bg-[#0F2E60]  whitespace-nowrap">
                                Caller ID
                              </th>
                              <th className="text-sm font-medium text-white px-6 py-4 text-left bg-[#0F2E60] whitespace-nowrap">
                                Phone #
                              </th>
                              <th className="text-sm font-medium text-white px-6 py-4 text-left   bg-[#0F2E60] whitespace-nowrap">
                                Phone #
                              </th>
                            </div>

                            <th className="text-sm font-medium text-white px-6 py-4 text-left">
                              Customer #
                            </th>
                            <th className="text-sm font-medium text-white px-6 py-4 text-left ">
                              Sa
                            </th>
                            <th className="text-sm font-medium text-white px-6 py-4 text-left overflow-hidden whitespace-nowrap">
                              Call Date/Time
                            </th>
                            <th className="text-sm font-medium text-white px-6 py-4 text-left overflow-hidden">
                              Lead Source
                            </th>
                            <th className="text-sm font-medium text-white px-6 py-4 text-left whitespace-nowrap">
                              Compliance Score
                            </th>
                            <th className="text-sm font-medium text-white px-6 py-4 text-left overflow-hidden">
                              Reason
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {tableData.map((data) => (
                            <tr className=" border-b transition duration-300 ease-in-out  text-white ">
                              <div className="sticky left-0 z-10 bg-white duration-300 ease-in-out">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                  Mirza
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  {data.callerID}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  {data.callerName}
                                </td>
                              </div>

                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {data.phoneNumber}
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap overflow-hidden">
                                {data.customerNumber}
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap overflow-hidden">
                                {data.sa}
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {data.callDateTime}
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap overflow-hidden">
                                {data.complianceScore}
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap overflow-hidden">
                                {data.reason}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col  rounded-xl text-gray-700">
              <div>
                {" "}
                <div className="py-2 p-2  border-blue-900">
                  <div className="flex items-center  py-4 justify-end mr-5">
                    <input
                      type="checkbox"
                      className="border-gray-300 rounded  pt-2 h-5 w-5 mr-1 border-0"
                    />

                    <h1 className="text-gray-700 font-medium leading-none pt-1 text-sm mb-1">
                      Rescored Calls
                    </h1>

                    <button className="rounded bg-[#1F66AC] px-4 py-2 ml-3 text-white">
                      Classified History
                    </button>
                  </div>

                  <div className=" pb-2   border-blue-900  ">
                    <div className="card_container bg-white p-2 rounded-md shadow-lg hover:shadow-2xl  mb-2">
                      <div className="font-regular text-justify relative block w-full  rounded-t-lg bg-[#0F2E60] p-4 text-base leading-5 text-white opacity-100">
                        Call Details{" "}
                        <span className="text-amber-400 font-regular ml-3">
                          {" "}
                          caller id -{" "}
                        </span>{" "}
                        <span>1245</span>
                      </div>
                      <div className="mt-2 p-3 rounded-md bg-zinc-200">
                        <div className="w-full">
                          <div className="h-2 bg-red-light"></div>
                          <div className="">
                            <div className=" rounded-lg">
                              <div className="flex">
                                <div className="w-full p-2">
                                  <div className="flex md:max-xl:flex justify-between items-center">
                                    <div className="text-grey-darker">
                                      <div class="flex-start flex  w-full overflow-hidden rounded-sm bg-blue-gray-50 font-sans text-xs font-medium">
                                        <div className="w-48 mt-3">
                                          <div class="h-1 bg-neutral-200 dark:bg-neutral-600">
                                            <div class="h-1 bg-primary "></div>
                                          </div>
                                          <div className="flex  justify-between">
                                            <p className="text-dark font-regular pt-1">
                                              02:23
                                            </p>
                                            <p className="text-dark font-regular pt-1">
                                              05:39
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="text-grey-darker">
                                      <svg
                                        className="w-8 h-8"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                      >
                                        <path d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z" />
                                      </svg>
                                    </div>
                                    <div className="text-grey-darker ">
                                      <svg
                                        className="w-8 h-8"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                      >
                                        <path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" />
                                      </svg>
                                    </div>
                                    <div className="text-grey-darker">
                                      <svg
                                        width="26"
                                        height="26"
                                        fill="currentColor"
                                        class="bi bi-caret-right-fill"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                      </svg>
                                    </div>
                                    <div className="text-grey-darker">
                                      <svg
                                        className="w-8 h-8"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                      >
                                        <path d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>{/* <AiOutlineEdit/> */}</div>
                  </div>

                  <div className=" py-2  border-blue-900  ">
                    {" "}
                    <div className="font-regular relative block w-full rounded-t-lg bg-[#0F2E60] p-4 text-base leading-5 text-white opacity-100">
                      Rescore Request{" "}
                      <button className="float-right">
                        <img
                          className="max-w-[150px] w-full"
                          src={envelopIcon}
                          alt=""
                        />
                      </button>
                    </div>
                    <div className="card_container bg-white p-2 rounded-b-lg shadow-lg hover:shadow-2xl mb-2 ">
                      <div className=" ">
                        <p className="mb-4 text-base rounded-md h-30 bg-grey p-4 border-dotted border-2 border-indigo-600 text-neutral-600 dark:text-neutral-200">
                          type anything here
                        </p>
                        <div className="flex justify-center">
                          <Button
                            className="bg-[#1F66AC]"
                            variant="contained"
                            color="primary"
                            // className="py-2"
                          >
                            Rescore
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card_container bg-white p-2 rounded-md shadow-lg hover:shadow-2xl ">
                    <div className="font-semibold capitalize text-justify relative block w-full rounded-t-lg bg-[#0F2E60] p-4 text-base leading-5 text-white opacity-100">
                      Comments{" "}
                      <span className="text-amber-400 ml-5 font-normal">
                        Caller ID - 235689
                      </span>{" "}
                      <button className="float-right">
                        <img
                          className="max-w-[150px] w-full"
                          src={deleteIcon}
                          alt=""
                        />{" "}
                    
                      </button>
                    </div>

                    <div className=" ">
                      <div
                        className="m-1 border-solid border-4 outline-4 border-slate-200 p-2 rounded-md p-2 comment-section"
                        style={{
                          height: "80px",
                          overflow: "scroll",
                          overflowX: "hidden"
                        }}
                      >
                        <p className="mb-4  text-sm text-green-500">
                          I haven't noticed anything wrong with the call. - Eric
                          <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                          <span className="mb-4 text-sm text-red-500">
                            The lead type wasn't confirmed - Faraz{" "}
                            <svg
                              className="w-4 ml-2  inline-block fill-red-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                            </svg>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TogleDropDownSecrion;
