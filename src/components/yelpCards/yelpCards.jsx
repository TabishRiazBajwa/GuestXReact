import {
  getBorderColor,
  getColor,
  getDollerSign,
  getIcon,
  getPercentageSign,
  handleError
} from "../../utils/utils";

export const CardWithSingleSubCard = ({
  label,
  value,
  percentage,
  difference,
  newValue,
  newDifference,
  newPercentage
}) => {
  return (
    <div
      className={` border-2 ${getBorderColor(
        difference
      )} px-2 py-2 rounded-lg col-span-5 lg:col-span-1 bg-white `}
    >
      <div>
        <div className="flex flex-col items-start text-center justify-start">
          <div className="heading">{label}</div>
          <div className="subHeading">
            {handleError(value, label) + getPercentageSign(label)}
          </div>
        </div>
        <div className="flex flex-col items-end text-center justify-end">
          <div className={`flex items-center gap-1 ${getColor(difference)}`}>
            {getIcon(difference)}
            {handleError(Math.abs(percentage)) + "%"}
          </div>
          <div
            className={`flex items-center gap-1 ${getColor(
              difference
            )} font-medium`}
          >
            {" "}
            {handleError(Math.abs(difference), label) +
              getPercentageSign(label)}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 ">
        <div
          className={`border-2 shadow-lg p-2 ${getBorderColor(
            newDifference
          )}  rounded-lg`}
        >
          <div className="flex flex-col items-start text-center justify-start">
            <div className="heading">New</div>
            <div className="subHeading">
              {handleError(newValue, label) + getPercentageSign(label)}
            </div>
          </div>
          <div className="flex flex-col items-end text-end justify-end">
            {/* <div className="flex items-center gap-1 text-red-600">
      <AiFillCaretDown className="text-red-600 rounded-lg" />{" "}
      50%{" "}
    </div> */}
            <div
              className={` mt-4 flex items-end text-end  ${getColor(
                newDifference
              )} font-medium`}
            >
              {" "}
              {handleError(Math.abs(newDifference)) + "%"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CardWithTwoSubCards = ({
  labelThree,
  labelTwo,
  label,
  valueOne,
  percentageOne,
  differenceOne,
  valueTwo,
  percentageTwo,
  differenceTwo,
  valueThree,
  percentageThree,
  differenceThree
}) => {
  return (
    <div
      className={` ${getBorderColor(
        differenceOne
      )} border-2  px-2 py-2 rounded-lg col-span-1 bg-white `}
    >
      <div>
        <div className="flex flex-col items-start text-center justify-start">
          <div className="heading">{label}</div>
          <div className="subHeading">
            {getDollerSign(label) + handleError(valueOne, label)}
          </div>
        </div>
        <div className="flex flex-col items-end text-center justify-end">
          <div
            className={`flex items-center gap-1  ${getColor(differenceOne)}`}
          >
            {getIcon(differenceOne)}
            {handleError(Math.abs(percentageOne))}
            {"%"}
          </div>
          <div
            className={`flex items-center gap-1 ${getColor(
              differenceOne
            )} font-medium`}
          >
            {" "}
            {getDollerSign(label) + handleError(Math.abs(differenceOne), label)}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2  mt-[28px]">
        <div
          className={`border-2 ${getBorderColor(
            differenceTwo
          )} shadow-lg p-2  rounded-lg `}
        >
          <div className="flex flex-col items-start text-center justify-start">
            <div className="heading">{labelTwo}</div>
            <div className="subHeading">
              {getDollerSign(label) + handleError(valueTwo, label)}
            </div>
          </div>
          <div className="flex flex-col items-end text-end justify-end">
            {/* <div className="flex items-center gap-1 text-red-600">
      <AiFillCaretDown className="text-red-600 rounded-lg" />{" "}
      50%{" "}
    </div> */}
            <div
              className={` mt-4 flex items-end text-end ${
                differenceTwo > 0 ? "text-[#0DA452]" : "text-red-600"
              } font-medium`}
            >
              {" "}
              {getDollerSign(label) +
                handleError(Math.abs(differenceTwo), label)}
            </div>
          </div>
        </div>
        <div
          className={` border-2  shadow-lg p-2  rounded-lg  ${getBorderColor(
            differenceThree
          )} `}
        >
          <div className="flex flex-col items-start text-center justify-start">
            <div className="heading">{labelThree}</div>
            <div className="subHeading">
              {getDollerSign(label) + handleError(Math.abs(valueThree), label)}
            </div>
          </div>
          <div className="flex flex-col items-end text-end justify-end">
            {/* <div className="flex items-center gap-1 text-red-600">
      <AiFillCaretDown className="text-red-600 rounded-lg" />{" "}
      50%{" "}
    </div> */}
            <div
              className={` mt-4 flex items-end text-end  ${getColor(
                differenceThree
              )} font-medium`}
            >
              {" "}
              {getDollerSign(label) +
                handleError(Math.abs(differenceThree), label)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PageVisitsCard = ({ differ, oldSum, percentage, monthss }) => {
  return (
    <div
      className={` grid  grid-cols-1 sm:grid-cols-3 border-2 ${getBorderColor(
        differ?.PageVisits
      )}   mt-2 pr-2 py-2 rounded-lg  bg-white mr-[7px] `}
    >
      <div className="col-span-1 Cost Per LeadARO flex justify-around">
        <div className="flex flex-col items-start text-start justify-start">
          <div className="heading  whitespace-nowrap">Page Visits</div>
          <div className="subHeading">
            {handleError(oldSum?.PageVisits, "Page Visits")}
          </div>
        </div>
        <div className="flex flex-col items-end text-center justify-end">
          <div
            className={`flex items-center gap-1  ${getColor(
              differ?.PageVisits
            )}`}
          >
            {getIcon(differ?.PageVisits)}
            {handleError(Math.abs(percentage?.PageVisits))}
            {"%"}
          </div>
          <div
            className={`flex items-center gap-1  ${getColor(
              differ?.PageVisits
            )} whitespace-nowrap font-medium`}
          >
            {handleError(Math.abs(differ?.PageVisits), "Page Visits")}
          </div>
        </div>
      </div>

      <div
        className={` ${getBorderColor(
          differ?.AdVisits
        )}  border-2  col-span-1  shadow-lg p-2  mr-1 rounded-lg `}
      >
        <div>
          <div className="flex flex-col items-start text-start justify-start">
            <div className="heading">Ads</div>
            <div className="subHeading">
              {handleError(oldSum?.AdVisits, "Ads")}
            </div>
          </div>
          <div className="flex flex-col items-end text-end justify-end ">
            <div
              className={`flex items-center gap-1  ${getColor(
                differ?.AdVisits
              )}`}
            >
              {getIcon(differ?.AdVisits)}
              {handleError(Math.abs(percentage?.AdVisits)) + "%"}
            </div>
            <div
              className={`  flex items-end text-end  ${getColor(
                differ?.AdVisits
              )} font-medium`}
            >
              {handleError(Math.abs(differ?.AdVisits), "Ads")}
            </div>
          </div>
        </div>
        <div
          className={` ${getBorderColor(
            differ?.AdVisitsPercent
          )} border-2   shadow-lg p-2  rounded-lg `}
        >
          <div className="flex flex-col items-start text-start justify-start">
            <div className="heading">% Ads</div>
            <div className="subHeading">
              {oldSum?.AdVisitsPercent
                ? handleError(oldSum?.AdVisitsPercent) + "%"
                : "--"}
            </div>
          </div>
          <div className="flex flex-row items-end text-end justify-between mt-4">
            <div
              className={`flex items-center gap-1  ${getColor(
                differ?.AdVisitsPercent
              )}`}
            >
              {getIcon(differ?.AdVisitsPercent)}

              {handleError(Math.abs(percentage?.AdVisitsPercent / monthss))}
            </div>
            <div
              className={`  flex items-end text-end ${getColor(
                differ?.AdVisitsPercent
              )} font-medium`}
            >
              {handleError(Math.abs(differ?.AdVisitsPercent / monthss))}
            </div>
          </div>
        </div>
      </div>
      <div
        className={` border-2 ${getBorderColor(
          differ?.OrganicVisits
        )} col-span-1  shadow-lg p-2 ml-1 rounded-lg `}
      >
        <div className="">
          <div className="flex flex-col items-start text-start justify-start ">
            <div className="heading">Organic</div>
            <div className="subHeading">
              {handleError(oldSum?.OrganicVisits, "Organic")}
            </div>
          </div>
          <div className="flex flex-col items-end text-end justify-end  ">
            <div
              className={`flex items-center gap-1 ${getColor(
                differ?.OrganicVisits
              )}`}
            >
              {getIcon(differ?.OrganicVisits)}
              {handleError(Math.abs(percentage?.OrganicVisits))}
              {"%"}
            </div>
            <div
              className={`  flex items-end text-end  ${getColor(
                differ?.OrganicVisits
              )} font-medium`}
            >
              {" "}
              {handleError(Math.abs(differ?.OrganicVisits), "Organic")}
            </div>
          </div>
        </div>
        <div
          className={`border-2  shadow-lg p-2  rounded-lg ${getBorderColor(
            differ?.OrganicVisitsPercent
          )} `}
        >
          <div className="flex flex-col items-start text-start justify-start">
            <div className="heading">%Organic</div>
            <div className="subHeading">
              {handleError(oldSum?.OrganicVisitsPercent)}
              {"%"}
            </div>
          </div>
          <div className="flex flex-row items-end text-end justify-between mt-4">
            <div
              className={`flex items-center gap-1 ${getColor(
                differ?.OrganicVisitsPercent
              )}`}
            >
              {getIcon(differ?.OrganicVisitsPercent)}
              {handleError(
                Math.abs(percentage?.OrganicVisitsPercent / monthss)
              )}
              {"%"}
            </div>
            <div
              className={`  flex items-end text-end  ${getColor(
                differ?.OrganicVisitsPercent
              )} font-medium`}
            >
              {" "}
              {handleError(Math.abs(differ?.OrganicVisitsPercent / monthss))}
              {"%"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SingleCardWithNoSubCard = ({
  label,
  value,
  percentage,
  difference
}) => {
  return (
    <div
      className={` ${getBorderColor(
        difference
      )} bg-white rounded-lg p-2 border-2 `}
    >
      <div className="flex flex-col items-start text-center justify-start">
        <div className="heading">{label}</div>
        <div className="subHeading">
          {getDollerSign(label) +
            handleError(value, label) +
            getPercentageSign(label)}
        </div>
      </div>
      <div className="flex flex-col items-end text-center justify-end ">
        <div className={`flex items-center gap-1 ${getColor(difference)}`}>
          {getIcon(difference)}
          {handleError(Math.abs(percentage))}
          {"%"}
        </div>
        <div
          className={`flex items-center gap-1  ${getColor(
            difference
          )} font-medium`}
        >
          {" "}
          {getDollerSign(label) +
            handleError(Math.abs(difference), label) +
            getPercentageSign(label)}
        </div>
      </div>
    </div>
  );
};
