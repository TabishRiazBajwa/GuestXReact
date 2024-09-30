import React from "react";

import IconTableDecrement from "../iconTableDecrement/iconTableDecrement";
import IconTableIncrement from "../iconTableIncrement/iconTableIncrement";

export default function RankingReportBaseTableRow(props) {
  const { goal, percentageToGoal, valueType, data } = props;
  // console.log(data, "data in ranking report base table row");

  const getValueType = () => {
    if (valueType === "Percentage") {
      return "%";
    } else if (valueType === "Value") {
      return;
    } else if (valueType === "Units") {
      return "Units";
    }
  };

  return (
    <tr className="font-poppins text-black  text-xs  lg:text-base h-14">
      <td className=" bg-gray-200 border border-gray-500 px-3 ">
        {data.Identified_Agent}
      </td>
      <td className="border  border-gray-500 font-medium ">
        <div className="flex flex-row gap-4 justify-center">
          <div>15 {getValueType()}</div>
          {getValueType() === "%" ? <IconTableDecrement /> : ""}
        </div>
      </td>
      {goal && (
        <td className="border border-gray-500 font-medium">
          <div>10 %</div>
        </td>
      )}
      {percentageToGoal && (
        <td className="border border-gray-500 font-medium">
          <div>16 %</div>
        </td>
      )}

      {/* Appointment */}
      <td className="border border-gray-500 font-medium">
        <div className="flex flex-row gap-4 justify-center">
          {/* <div>15 {getValueType()}</div> */}
          {/* {getValueType() === "%" ? <IconTableDecrement /> : ""} */}
          {getValueType() === "%" ? (
            <>
              {data.Appointment_outcome_yes_change_percentage} %
              {data.Appointment_outcome_yes_change_percentage > 0 ? (
                <IconTableIncrement />
              ) : (
                <IconTableDecrement />
              )}
            </>
          ) : (
            <>{data.Appointment_outcome_yes_change}</>
          )}
        </div>
      </td>
      {goal && (
        <td className="border border-gray-500 font-medium">
          <div>25 %</div>
        </td>
      )}
      {percentageToGoal && (
        <td className="border border-gray-500 font-medium">
          <div>22 %</div>
        </td>
      )}

      <td className="border border-gray-500 font-medium">
        <div className="flex flex-row gap-4 justify-center">
          {/* <div>18 {getValueType()}</div> */}
          {/* {getValueType() === "%" ? <IconTableDecrement /> : ""} */}
          {getValueType() === "%" ? (
            <>
              {data.Appointment_outcome_no_change_percentage} %
              {data.Appointment_outcome_no_change_percentage > 0 ? (
                <IconTableIncrement />
              ) : (
                <IconTableDecrement />
              )}
            </>
          ) : (
            <>{data.Appointment_outcome_no_change}</>
          )}
        </div>
      </td>
      {goal && (
        <td className="border border-gray-500 font-medium">
          <div>10 %</div>
        </td>
      )}
      {percentageToGoal && (
        <td className="border border-gray-500 font-medium">
          <div>10 %</div>
        </td>
      )}
    </tr>
  );
}
