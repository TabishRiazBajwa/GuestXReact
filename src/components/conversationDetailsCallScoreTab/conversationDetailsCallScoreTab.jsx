import React, { useState } from "react";

import { Checkbox } from "@mui/material";

import CallScoreTabTableRow from "../CallScoreTabTableRow/CallScoreTabTableRow";
import SmallDoughnut from "../smallDoughnut/smallDoughnut";
import AllOutIcon from "@mui/icons-material/AllOut";

export default function ConversationDetailsCallScoreTab(props) {
  const { score, appointment_booked, appointment_outcome } = props.dataProps;
  const [data, setData] = useState({
    greeting: {
      tone: {
        score: "pass",
        adjustedScore: "pass",
        scoreVal: 7,
      },
      companyName: {
        score: "fail",
        adjustedScore: "fail",
        scoreVal: 3,
      },
    },
  });

  function updateAdjustedScore(tab, criteria, newScore) {
    let newData = { ...data };
    newData[tab][criteria].adjustedScore = newScore;

    setData(newData);

    return newData;
  }

  const funcShowScoreDetail = (score_id) => {
    if (score_id === props.showScoreDetail) {
      props.setShowScoreDetail(false);
    } else {
      props.setShowScoreDetail(score_id);
    }
  };
  return (
    <>
      <div className="grid grid-cols-3 ">
        <div className="bg-white darkBackgroundMain rounded-xl m-4 h-28  border-2 border-gray-300  overflow-hidden  hover:shadow-lg transition-all duration-300">
          <div className="text-center font-semibold text-md  p-4">
            Appointment Booked
          </div>
          <div className="flex flex-col justify-center text-center font-light   p-4">
            {appointment_booked}
          </div>
        </div>
        <div className="bg-white darkBackgroundMain rounded-xl m-4 h-28  border-2 border-gray-300  overflow-hidden  hover:shadow-lg transition-all duration-300">
          <div className="text-center font-semibold text-md  p-4">Outcome</div>
          <div className="flex flex-col justify-center text-center font-light   p-4">
            {appointment_outcome}
          </div>
        </div>
        <div className="bg-white darkBackgroundMain rounded-xl m-4 h-28  border-2 border-gray-300  overflow-hidden  hover:shadow-lg transition-all duration-300">
          <div className="text-center font-semibold text-md  p-4">
            Matched Revenue
          </div>
          <div className="flex flex-col justify-center text-center font-light   p-4">
            ${30}
          </div>
        </div>
      </div>

      <div className="  h-20 flex flex-row justify-between  border border-gray-300 ">
        <div className="flex flex-col justify-center pl-5   font-bold text-xl leading-7">
          Average
        </div>
        <div className="flex flex-row gap-1 pr-5">
          <div className="flex flex-col justify-center  font-semibold text-lg leading-6 text-center ">
            {score?.average}%
          </div>

          <SmallDoughnut
            type=""
            value={score?.average}
            radiusPercentage="80%"
          />
        </div>
      </div>

      {/* Greeting */}
      <div
        onClick={(e) => funcShowScoreDetail(1)}
        className={` ${
          props.showScoreDetail === 1
            ? "bg-[#606060] border-[#606060] text-blue-950 "
            : "border-gray-300"
        } h-20 flex flex-row justify-between border hover:bg-gray-300 hover:cursor-pointer `}
      >
        <div className="flex flex-col justify-center pl-8 font-semibold text-lg leading-6  ">
          <div className="flex flex-row space-x-2 ">
            <AllOutIcon />
            <div>Greeting</div>
          </div>
        </div>
        <div className="flex flex-row gap-1 pr-5">
          <div className="flex flex-col justify-center  font-semibold text-lg leading-6 text-center ">
            {score?.greeting}%
          </div>

          <SmallDoughnut
            type=""
            value={score?.greeting}
            radiusPercentage="65%"
          />
        </div>
      </div>
      {props.showScoreDetail === 1 ? (
        <>
          <table className="p-2">
            <thead>
              <tr className="bg-[#F1F1F1]  h-14  ">
                <th className="text-center">
                  <Checkbox />
                </th>
                <th className="w-5/12 text-left ">Scoring Criteria</th>
                <th className="text-center">Score</th>
                <th className="w-4/12 text-cente">Adjusted Score</th>
                <th className="text-center">Score Value</th>
              </tr>
            </thead>
            <tbody>
              <CallScoreTabTableRow
                data={data.greeting.tone}
                updateAdjustedScore={updateAdjustedScore}
                tab="greeting"
                criteria="tone"
              >
                <p>
                  Agent has a <b>friendly tone</b> at start of the call.
                </p>
              </CallScoreTabTableRow>
              <CallScoreTabTableRow
                data={data.greeting.tone}
                updateAdjustedScore={updateAdjustedScore}
                tab="greeting"
                criteria="tone"
              >
                <p>
                  Agent greeted the caller by saying
                  <b>"Thank You for calling (Company Name)"</b> at start of the
                  call.
                </p>
              </CallScoreTabTableRow>
            </tbody>
          </table>
        </>
      ) : (
        ""
      )}
      {/* Discovery */}
      <div
        className={` ${
          props.showScoreDetail === 2
            ? "bg-[#606060] border-[#606060] text-blue-950"
            : "border-gray-300"
        } h-20 flex flex-row justify-between border hover:bg-gray-300 hover:cursor-pointer `}
        onClick={(e) => funcShowScoreDetail(2)}
      >
        <div className="flex flex-col justify-center pl-8  font-semibold text-lg leading-6">
          <div className="flex flex-row space-x-2 ">
            <AllOutIcon />
            <div>Discovery</div>
          </div>
        </div>
        <div className="flex  flex-row gap-1 pr-5">
          <div className="flex flex-col justify-center  font-semibold text-lg leading-6 text-center ">
            {score?.discovery}%
          </div>

          <SmallDoughnut
            type=""
            value={score?.discovery}
            radiusPercentage="65%"
          />
        </div>
      </div>
      {props.showScoreDetail === 2 ? (
        <>
          <table className="p-2">
            <thead>
              <tr className="bg-[#F1F1F1]  h-14 ">
                <th className="text-center">
                  <Checkbox />
                </th>
                <th className="w-5/12 text-left ">Scoring Criteria</th>
                <th className="text-center">Score</th>
                <th className="w-4/12 text-center">Adjusted Score</th>
                <th className="text-center">Score Value</th>
              </tr>
            </thead>
            <tbody>
              <CallScoreTabTableRow
                data={data.greeting.tone}
                updateAdjustedScore={updateAdjustedScore}
                name="greeting.tone"
              >
                <p>
                  Agent gave their <b>own name</b> at start of the call.
                </p>
              </CallScoreTabTableRow>
              <CallScoreTabTableRow
                data={data.greeting.tone}
                updateAdjustedScore={updateAdjustedScore}
                name="greeting.tone"
              >
                <p>
                  Agent <b>acquired or caller volunteered their name</b> at
                  start of the call.
                </p>
              </CallScoreTabTableRow>

              <CallScoreTabTableRow
                data={data.greeting.tone}
                updateAdjustedScore={updateAdjustedScore}
                name="greeting.tone"
              >
                <p>
                  Agent said, <b>"How can I help you"</b> at start of the call.
                </p>
              </CallScoreTabTableRow>

              <CallScoreTabTableRow
                data={data.greeting.tone}
                updateAdjustedScore={updateAdjustedScore}
                name="greeting.tone"
              >
                <p>
                  Agent <b>indicated ownership</b> of the caller's request.
                </p>
              </CallScoreTabTableRow>
            </tbody>
          </table>
        </>
      ) : (
        ""
      )}

      {/* Appointment */}
      <div
        className={` ${
          props.showScoreDetail === 3
            ? "bg-[#606060] border-[#606060] text-blue-950"
            : "border-gray-300"
        } h-20 flex flex-row justify-between border hover:bg-gray-300 hover:cursor-pointer`}
        onClick={(e) => funcShowScoreDetail(3)}
      >
        <div className="flex flex-col justify-center pl-8  font-semibold text-lg leading-6 ">
          <div className="flex flex-row space-x-2 ">
            <AllOutIcon />
            <div>Appointment</div>
          </div>
        </div>
        <div className="flex flex-row gap-1 pr-5">
          <div className="flex flex-col justify-center  font-semibold text-lg leading-6 text-center ">
            {score?.appointment}%
          </div>

          <SmallDoughnut
            type=""
            value={score?.appointment}
            radiusPercentage="65%"
          />
        </div>
      </div>
      {props.showScoreDetail === 3 ? (
        <>
          <table className="p-2">
            <thead>
              <tr className="bg-[#F1F1F1]  h-14 ">
                <th className="text-center">
                  <Checkbox />
                </th>
                <th className="w-5/12 text-left ">Scoring Criteria</th>
                <th className="text-center">Score</th>
                <th className="w-4/12 text-center">Adjusted Score</th>
                <th className="text-center">Score Value</th>
              </tr>
            </thead>
            <tbody>
              <CallScoreTabTableRow
                data={data.greeting.tone}
                updateAdjustedScore={updateAdjustedScore}
                name="greeting.tone"
              >
                <p>
                  Agent acquired or was provided by the caller, with{" "}
                  <b>vehicle information</b> as part of the appointment process.
                </p>
              </CallScoreTabTableRow>
              <CallScoreTabTableRow
                data={data.greeting.tone}
                updateAdjustedScore={updateAdjustedScore}
                name="greeting.tone"
              >
                <p>
                  Agent acquired or the caller volunteered, their{" "}
                  <b> phone number</b> as part of the appointment process.
                </p>
              </CallScoreTabTableRow>

              <CallScoreTabTableRow
                data={data.greeting.tone}
                updateAdjustedScore={updateAdjustedScore}
                name="greeting.tone"
              >
                <p>
                  Agent confirmed the <b>business address/directions</b> as part
                  of the appointment process.
                </p>
              </CallScoreTabTableRow>

              <CallScoreTabTableRow
                data={data.greeting.tone}
                updateAdjustedScore={updateAdjustedScore}
                name="greeting.tone"
              >
                <p>
                  Agent <b>confirms or repeats the appointment details</b> at
                  the end of appointment scheduling process.
                </p>
              </CallScoreTabTableRow>

              <CallScoreTabTableRow
                data={data.greeting.tone}
                updateAdjustedScore={updateAdjustedScore}
                name="greeting.tone"
              >
                <p>
                  Agent <b>repeated the caller's name</b>.
                </p>
              </CallScoreTabTableRow>

              <CallScoreTabTableRow
                data={data.greeting.tone}
                updateAdjustedScore={updateAdjustedScore}
                name="greeting.tone"
              >
                <p>
                  Agent <b>ended the call politely</b>.
                </p>
              </CallScoreTabTableRow>
            </tbody>
          </table>
        </>
      ) : (
        ""
      )}

      {/* Closing */}
      <div
        className={` ${
          props.showScoreDetail === 4
            ? "bg-[#606060] border-[#606060] text-blue-950"
            : "border-gray-300"
        } h-20 flex flex-row justify-between border hover:bg-gray-300 hover:cursor-pointer`}
        onClick={(e) => funcShowScoreDetail(4)}
      >
        <div className="flex flex-col justify-center pl-8  font-semibold text-lg leading-6 ">
          <div className="flex flex-row space-x-2 ">
            <AllOutIcon />
            <div>Closing</div>
          </div>
        </div>
        <div className="flex flex-row gap-1 pr-5">
          <div className="flex flex-col justify-center  font-semibold text-lg leading-6 text-center ">
            {score.closing}%
          </div>

          <SmallDoughnut type="" value={score.closing} radiusPercentage="65%" />
        </div>
      </div>
      {props.showScoreDetail === 4 ? (
        <>
          <table className="p-2">
            <thead>
              <tr className="bg-[#F1F1F1]  h-14 ">
                <th className="text-center">
                  <Checkbox />
                </th>
                <th className="w-5/12 text-left ">Scoring Criteria</th>
                <th className="text-center">Score</th>
                <th className="w-4/12 text-center">Adjusted Score</th>
                <th className="text-center">Score Value</th>
              </tr>
            </thead>
            <tbody>
              <CallScoreTabTableRow
                data={data.greeting.tone}
                updateAdjustedScore={updateAdjustedScore}
                name="closing.tone"
              >
                <p>
                  Agent had a <b>friendly tone</b> at start of the call.
                </p>
              </CallScoreTabTableRow>
              <CallScoreTabTableRow
                data={data.greeting.tone}
                updateAdjustedScore={updateAdjustedScore}
                name="closing.tone"
              >
                <p>
                  Agent greeted the caller by saying{" "}
                  <b>"Thank you for calling (Company Name)"</b> at start of the
                  call.
                </p>
              </CallScoreTabTableRow>
            </tbody>
          </table>
        </>
      ) : (
        ""
      )}
      {/* <div className="p-8 border border-gray-300">
        <div
          className={` flex text-start ${
            props.showScoreDetail ? ";" : "flex-col gap-5"
          }`}
        >
          <div>
            <div className="font-semibold text-sm leading-5  pb-2 ">
              Appointment Booked
            </div>
            <div className="font-normal text-lg leading-6 ">
              {appointment_booked}
            </div>
          </div>
          <div>
            <div className="font-semibold text-sm leading-5  pb-2">Outcome</div>
            <div className="font-normal text-lg leading-6">
              {appointment_outcome}
            </div>
          </div>
          <div>
            <div className="font-semibold text-sm leading-5 pb-2">
              Matched Revenue
            </div>
            <div className=" font-normal text-lg leading-6">$ 30</div>
          </div>
        </div>
      </div> */}
    </>
  );
}
