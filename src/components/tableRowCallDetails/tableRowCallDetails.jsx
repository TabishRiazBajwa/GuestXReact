import React, { useState } from "react";
import CircleIcon from "@mui/icons-material/Circle";

import AudioPlayer from "../audioPlayer/audioPlayer";
import ConversationDetailsTabs from "../conversationDetailsTabs/conversationDetailsTabs";

import recording_icon from "../../images/play_recording_icon.svg";
import customer_history from "../../images/customer_history_icon.svg";

export default function TableRowCallDetails(props) {
  const {
    id,
    showCustomerHistorySetter,
    data,
    expandedRowId,
    setExpandedRowId,
  } = props;

  const [showRowDetail, setShowRowDetail] = useState(false);

  const unique = true;
  function splitOnFirstNonAlpha(str) {
    const match = str.match(/[^a-zA-Z\s]/); // Adjusted regex to exclude spaces
    if (match) {
      const index = match.index;
      return [str.substring(0, index), str.substring(index)];
    } else {
      return [str];
    }
  }

  return (
    <>
      <tr className="border-b border-gray-300 h-24 max-h-max font-poppins text-center text-xs 2xl:text-base  ">
        <td className="p-2 align-middle px-4 ">
          {unique && (
            <CircleIcon
              sx={{
                color: "#1976D2",
                fontSize: "15px",
              }}
            />
          )}
        </td>
        <td className="px-8  ">{data?.Lead}</td>
        <td className="px-8  ">
          <div className="flex flex-col gap-2">
            <div className="flex justify-center">
              <img
                src={recording_icon}
                alt="Recording Icon"
                className="hover:cursor-pointer hover:opacity-60"
                onClick={() => setExpandedRowId()}
              />
            </div>
            <div className="flex justify-center">
              <p>{data?.Duration}</p>
            </div>
          </div>
        </td>
        <td className=" px-8 flex flex-col whitespace-wrap w-40  py-4 text-sm text-gray-500 justify-center">
          {/* <div className="flex flex-col    "> */}
          <p className="font-semibold text-md   font-poppins  text-blue-900  ">
            {data?.Customer_Name || "-"}
          </p>
          <p>{splitOnFirstNonAlpha(data?.Caller_Id)[1] || "-"}</p>
          {/* </div> */}
        </td>
        <td className="whitespace-nowrap  w-32 py-4 text-sm text-gray-500">
          {data?.Tracking_Number_Name || "-"}
        </td>
        <td className="whitespace-wrap   px-4 py-4 text-sm text-gray-500">
          {data?.Campaipn_Name || "-"}
        </td>
        <td className="whitespace-wrap   w-10  py-4 text-sm text-gray-500">
          {data?.Identified_Agent || "-"}
        </td>
        <td className="whitespace-wrap  w-72  py-4 text-sm text-gray-500">
          {data?.Service_Requested || "-"}
        </td>
        <td className="whitespace-wrap    w-32 pl-10  py-4 text-sm text-gray-500">
          {data?.Appointment_outcome || "-"}
        </td>
        <td className="whitespace-wrap w-40 pl-12 py-4 text-sm text-gray-500">
          {data?.Outcome_Classification || "-"}
        </td>

        <td className="p-2 whitespace-wrap w-32 py-4 pl-8 text-sm text-gray-500">
          $ 100
        </td>
        <td className="p-2 whitespace-wrap py-4 w-32 text-sm text-gray-500">
          {data?.Average !== undefined && data?.Average !== null
            ? Number(data.Average).toFixed(1)
            : "-"}
          %
        </td>
        <td className="p-2 whitespace-wrap py-4 w-20 text-sm text-gray-500">
          <img
            className="w-7 h-7  hover:cursor-pointer hover:opacity-70 "
            src={customer_history}
            alt=""
            onClick={() => showCustomerHistorySetter()}
          />
        </td>
      </tr>
      <tr>
        <td colSpan={13}>
          {expandedRowId === id && (
            <div className="">
              <AudioPlayer
                showRowDetail={showRowDetail}
                setShowRowDetail={setExpandedRowId}
                dataProp={{
                  date: data?.Date,
                  time: data?.Time,
                  play_audio_conversation: data?.Play_Conversation,
                  service_requested: data?.Service_Requested,
                }}
              />
              <ConversationDetailsTabs
                summaryTab={{
                  service_requested: data?.Service_Requested,
                  summary: data?.Summary,
                  recommendations: data?.Coaching_Recommendation,
                }}
                callScoreTab={{
                  score: {
                    average: Math.round(data?.Average * 100) / 100,
                    greeting: Math.round(data?.Greeting * 100) / 100,
                    discovery: Math.round(data?.Discovery * 100) / 100,
                    appointment: Math.round(data?.Appt * 100) / 100,
                    closing: Math.round(data?.Close * 100) / 100,
                  },
                  appointment_booked: data?.Appointment_outcome,
                  appointment_outcome: data?.Outcome_Classification,
                }}
              />
            </div>
          )}
        </td>
      </tr>
    </>
  );
}
