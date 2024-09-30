import React from "react";
import {
  getBorderColor,
  getColor,
  getDollerSign,
  getIcon,
  getPercentageSign,
  handleError,
  handleInfinityAndNaNValues
} from "../../utils/utils";

const RepairPalCard = ({ heading, valueA, percentChange, difference }) => {
  return (
    <>
      <div
        className={`bg-white rounded-xl p-4 border-2  ${getBorderColor(
          difference
        )} `}
      >
        <h1 className="heading">{heading || "--"}</h1>
        <h2 className="subHeading">
          {getDollerSign(heading) +
            handleError(valueA, heading) +
            getPercentageSign(heading)}
        </h2>
        <div className="flex flex-col items-end">
          <div className={`flex items-center gap-1 ${getColor(difference)}`}>
            {getIcon(difference)}
            <h3 className="text-sm">
              {!isNaN(percentChange) && isFinite(percentChange)
                ? handleInfinityAndNaNValues(Math.abs(percentChange)) + "%"
                : `--`}
            </h3>
          </div>
          <h4 className={`${getColor(difference)} font-semibold`}>
            {getDollerSign(heading) +
              handleError(Math.abs(difference), heading) +
              getPercentageSign(heading)}
          </h4>
        </div>
      </div>
    </>
  );
};

export default RepairPalCard;
