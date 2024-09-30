import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiFillInsurance,
} from "react-icons/ai";
import {
  formatNumber,
  getBorderColor,
  getColor,
  getDollerSign,
  getIcon,
  handleError,
} from "../../utils/utils";
export const CardWithTwoSubCards = ({
  value,
  newValue,
  returningValue,
  mainDifference,
  returningDifference,
  newDifference,
  loading = true,
}) => {
  return loading ? (
    <div className="border-[1.5px]   px-2 py-2 rounded-lg col-span-1 bg-white animate-pulse">
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
          <div className="w-8 h-4 bg-gray-300 rounded-lg mt-2"></div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-2">
        <div className="border-[1.5px] shadow-lg p-2 rounded-lg animate-pulse">
          <div className="flex flex-col items-start text-center justify-start">
            <div className="h-4 bg-gray-300 rounded-lg mb-2"></div>
            <div className="h-6 bg-gray-300 rounded-lg"></div>
          </div>
          <div className="flex flex-col items-end text-end justify-end">
            <div className="w-16 h-4 bg-gray-300 rounded-lg"></div>
            <div className="w-12 h-4 bg-gray-300 rounded-lg mt-4"></div>
          </div>
        </div>
        <div className="border-[1.5px] shadow-lg p-2 rounded-lg animate-pulse">
          <div className="flex flex-col items-start text-center justify-start">
            <div className="h-4 bg-gray-300 rounded-lg mb-2"></div>
            <div className="h-6 bg-gray-300 rounded-lg"></div>
          </div>
          <div className="flex flex-col items-end text-end justify-end">
            <div className="w-16 h-4 bg-gray-300 rounded-lg"></div>
            <div className="w-12 h-4 bg-gray-300 rounded-lg mt-4"></div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div
      className={`border-2 ${getBorderColor(
        mainDifference
      )} px-2 py-2 rounded-lg `}
    >
      <div className="  ">
        <div className="">
          <div className="flex justify-between  items-center  ">
            <div className="heading">Revenue</div>
          </div>
          <div className="flex  items-center">
            <div className="subHeading">
              {getDollerSign("Revenue")} {handleError(value, "Revenue")}
            </div>
          </div>
          <div className="flex justify-end">
            <div className={`font-semibold ${getColor(mainDifference)} `}>
              {getDollerSign("Revenue")}{" "}
              {handleError(Math.abs(mainDifference), "Revenue")}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-2 ">
          <div
            className={` p-3 rounded-lg shadow-lg border-2 ${getBorderColor(
              newDifference
            )} border-gray-50`}
          >
            <div className="space-y-1">
              <div className="heading">New</div>

              <div className="text-[#1F66AC] font-semibold ">
                <div className="flex flex-col ">
                  <div className="whitespace-nowrap">
                    {getDollerSign("Revenue")}{" "}
                    {handleError(newValue, "Revenue")}
                  </div>
                  <div
                    className={` ${getColor(
                      newDifference
                    )}  pt-4 flex flex-row-reverse `}
                  >
                    {getDollerSign("Revenue")}
                    {handleError(Math.abs(newDifference), "Revenue")}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={` p-3 rounded-lg shadow-lg border-2 ${getBorderColor(
              returningDifference
            )} border-gray-50  `}
          >
            <div className="space-y-1">
              <div className="heading">Returning</div>

              <div className="text-[#1F66AC] font-semibold ">
                <div className="flex flex-col ">
                  <div className="whitespace-nowrap">
                    {getDollerSign("Revenue")}{" "}
                    {handleError(returningValue, "Revenue")}
                  </div>
                  <div
                    className={`
                        ${getColor(returningDifference)} 
                          pt-4 flex flex-row-reverse`}
                  >
                    {getDollerSign("Revenue")}{" "}
                    {handleError(Math.abs(returningDifference), "Revenue")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CardTwo = ({
  loading = true,
  Label,
  icon = false,
  showPercent = false,
  difference,
  NewValue,
  newDifference,
  returningValue,
  returningDifference,
  value,
}) => {
  return (
    <div
      className={` border-2 ${getBorderColor(difference)} ${getColor(
        difference
      )} px-2 py-2 rounded-lg flex `}
    >
      <div className="grid md:grid-cols-3  grid-cols-2 gap-2 justify-between  items-center w-full">
        <div className=" max-sm:col-span-2 ">
          <div className="flex justify-between  items-center">
            <div className="heading">{Label}</div>

            {icon && (
              <div class="tooltip">
                <div>
                  <AiFillInsurance className="text-red-600" />{" "}
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <div className="subHeading">
              {getDollerSign(Label)} {handleError(value, Label)}
            </div>
            {showPercent && (
              <div>
                <div className="flex items-center ">
                  <div>
                    <AiFillCaretDown className="text-red-600" />
                  </div>
                  <div className={`${getColor(difference)}font font-semibold`}>
                    50%
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="font-semibold text-xs mt-1 mb-2 pr-1  relative flex justify-end">
            <div className={`font-semibold text-xs ${getColor(difference)}`}>
              {getDollerSign(Label)} {handleError(Math.abs(difference))}
            </div>
          </div>
        </div>
        <div
          className={`border-2 ${getBorderColor(
            newDifference
          )}   p-2 rounded-lg shadow-lg`}
        >
          <div className="space-y-1">
            <div className="text-[#0F2E60] font-medium text-14 leading-21 font-Poppins">
              New
            </div>

            <div className="text-[#1F66AC] font-semibold ">
              <div className="flex flex-col">
                <div>
                  {getDollerSign(Label)}
                  {handleError(Math.abs(NewValue), Label)}
                </div>
                <div
                  className={`${getColor(
                    newDifference
                  )} font-semibold text-xs mt-1 mb-2 pr-1  relative flex justify-end`}
                >
                  {getDollerSign(Label)}

                  {handleError(Math.abs(newDifference), Label)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`border-2 ${getBorderColor(
            returningDifference
          )}    p-2 rounded-lg shadow-lg`}
        >
          <div className="space-y-1">
            <div className="text-[#0F2E60]  font-medium text-14 leading-21 font-Poppins ">
              Returning
            </div>
            <div className="text-[#1F66AC] font-semibold ">
              <div className="flex flex-col">
                <div>
                  {getDollerSign(Label)}
                  {handleError(Math.abs(returningValue), Label)}
                  {/* bye */}
                </div>
                <div
                  className={`${getColor(
                    returningDifference
                  )} font-semibold text-xs mt-1 mb-2 pr-1  relative flex justify-end`}
                >
                  {getDollerSign(Label)}
                  {handleError(Math.abs(returningDifference), Label)}
                  {/* hello */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DropButton = ({ label, onClickHandler, openHandler }) => {
  return (
    <div className="flex items-center gap-4">
      <div
        className="w-6 h-6 bg-[#0F2E60] rounded-full flex items-center justify-center cursor-pointer"
        onClick={onClickHandler}
      >
        <span className="text-white">
          {openHandler ? <AiFillCaretUp /> : <AiFillCaretDown />}
        </span>
      </div>
      <div className="text-[#0F2E60] font-medium">{label}</div>
    </div>
  );
};

export const CardOne = ({ label, value, percentage, difference }) => {
  return (
    <div
      className={`border-2 ${getBorderColor(difference)}  px-2 py-2 rounded-lg`}
    >
      <div className="flex items-center text-center justify-between">
        <div className="heading">{label}</div>

        <div className={`flex items-center gap-1 ${getColor(difference)}`}>
          {getIcon(difference)}
          {!isNaN(percentage) ? handleError(Math.abs(percentage)) + "%" : "--"}
        </div>
      </div>
      <div className="flex items-center text-center justify-between">
        <div className="subHeading">
          {getDollerSign(label)}
          {handleError(Math.abs(value), label)}
        </div>
        <div
          className={` flex items-center gap-1 ${getColor(
            difference
          )} font-medium `}
        >
          {getDollerSign(label)}
          {handleError(Math.abs(difference), label)}
        </div>
      </div>
    </div>
  );
};
