import React from "react";
import {
  getBorderColor,
  getColor,
  getIcon,
  handleError
} from "../../utils/utils";

function YelpCardOne({ value, percentage, difference }) {
  return (
    <div>
      <div>
        <div
          className={` flex flex-col items-start text-center justify-start `}
        >
          <div className="heading">Investment</div>
          <div className="subHeading">
            ${handleError(value, "Investment")}
          </div>
        </div>
        <div className="flex flex-col items-end text-center justify-end">
          <div className={`flex items-center gap-1 ${getColor(difference)}`}>
            {getIcon(percentage)}
            {!isNaN(percentage) ? handleError(percentage) : "--"}
            {"%"}{" "}
          </div>
          <div
            className={` flex items-center gap-1  ${getColor(
              difference
            )} font-medium `}
          >
            {" "}
            $ {handleError(Math.abs(difference), "Investment")}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 ">
        <div className="border-[1.5px] shadow-lg p-2  rounded-lg">
          <div className="flex flex-col items-start text-center justify-start">
            <div className="heading">Budget</div>
            <div className="subHeading">{"--"}</div>
          </div>
          <div className="flex flex-col items-end text-end justify-end">
            <div className=" mt-4 flex items-end text-end text-red-600 font-medium">
              {" "}
              {"--"}
            </div>
          </div>
        </div>
        <div className="border-[1.5px] shadow-lg p-2  rounded-lg">
          <div className="flex flex-col items-start text-center justify-start">
            <div className="heading">Pricing</div>
            <div className="subHeading">{"--"}</div>
          </div>
          <div className="flex flex-col items-end text-end justify-end">
            <div className=" mt-4 flex items-end text-end text-red-600 font-medium">
              {" "}
              {"--"}
            </div>
          </div>
        </div>
        <div className="border-[1.5px] shadow-lg p-2  rounded-lg ">
          <div className="flex flex-col items-start text-start justify-start">
            <div className="heading">
              Management Fee
            </div>
            <div className="subHeading">{"--"}</div>
          </div>
          <div className="flex flex-col items-end text-end justify-end">
            <div className="  flex items-end text-end mt-4 text-red-600 font-medium">
              {" "}
              {"--"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YelpCardOne;

export const LoaderForFirstSection = () => {
  return (
    <>
      <div>
        <div className="flex flex-col items-start text-center justify-start">
          <div className="h-4 bg-gray-300 rounded-lg mb-2"></div>
          <div className="h-6 bg-gray-300 rounded-lg"></div>
        </div>
        <div className="flex flex-col items-end text-center justify-end">
          <div className="flex items-center gap-1 text-red-600">
            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
            <div className="w-10 h-4 bg-gray-300 rounded-lg"></div>
          </div>
          <div className="w-16 h-4 bg-gray-300 rounded-lg mt-2"></div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="border-[1.5px] shadow-lg p-2 rounded-lg animate-pulse"
          >
            <div className="flex flex-col items-start text-center justify-start">
              <div className="h-4 bg-gray-300 rounded-lg mb-2"></div>
              <div className="h-6 bg-gray-300 rounded-lg"></div>
            </div>
            <div className="flex flex-col items-end text-end justify-end">
              <div className="w-16 h-4 bg-gray-300 rounded-lg"></div>
              <div className="w-12 h-4 bg-gray-300 rounded-lg mt-4"></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
