import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { getBorderColor, handleError } from "../../utils/utils";

export const CardWithTwoSubCards = ({
  loading = false,
  label = "IFC",
  mainValue = 0,
  mainDifference = 0,
  mainPercentage = 0,
  secondLabel = "IFC",
  secondValue = 0,
  secondDifference = 0,
  secondPercentage = 0,
  thirdLabel = "IFC",
  thirdValue = 0,
  thirdDifference = 0,
  thirdPercentage = 0,
  newValue,
  returningValue,
  showSecondCard = true
}) => {
  const getDollerSign = (label) => {
    if (label === "ARO") {
      return "$";
    }
    return "";
  };

  const getPercentSign = (label) => {
    if (label === "Conversion Rate") {
      return "%";
    }
    return "";
  };

  return loading ? (
    <LoaderCardsWithTwoSubCards />
  ) : (
    <div
      className={` bg-white border-2 ${getBorderColor(
        mainDifference
      )}  px-2 py-2 rounded-lg `}
    >
      <div className="  ">
        <div className="">
          <div className="flex justify-between gap-2 items-center  ">
            <div className="heading">{label}</div>
            <div class="tooltip">
              <div>
                {/* <AiFillInsurance className="text-red-600" />{" "} */}
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center justify-between">
            <div className="subHeading">
              {getDollerSign(label) +
                handleError(Math.abs(mainValue), label) +
                getPercentSign(label)}
            </div>
            <div>
              <div
                className={`flex items-center  ${
                  mainDifference > 0 ? "text-[#0DA452]" : "text-red-600"
                } gap-2 `}
              >
                <div>
                  {!isNaN(mainDifference) ? (
                    mainDifference > 0 ? (
                      <AiFillCaretUp />
                    ) : (
                      <AiFillCaretDown />
                    )
                  ) : (
                    ""
                  )}{" "}
                </div>
                <div
                  className={` ${
                    mainDifference > 0 ? "text-[#0DA452]" : "text-red-600"
                  } font font-normal`}
                >
                  {handleError(Math.abs(mainPercentage))}%
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div
              className={`font-semibold ${
                mainDifference > 0 ? "text-[#0DA452]" : "text-red-600"
              }`}
            >
              {getDollerSign(label) +
                handleError(Math.abs(mainDifference), label) +
                getPercentSign(label)}
            </div>
          </div>
        </div>
        <div
          className={`grid ${
            showSecondCard ? "grid-cols-2 " : "grid-cols-1"
          } gap-x-2 `}
        >
          <div
            className={` border-2 rounded-md p-2 ${getBorderColor(
              secondDifference
            )}`}
          >
            <div className="flex justify-between gap-2 items-center  ">
              <div className="heading">
                {secondLabel}
              </div>
              {/* <div class="tooltip">
              <div>
                <AiFillInsurance className="text-red-600" />{" "}
              </div>
            </div> */}
            </div>
            <div className="flex gap-2 items-center justify-between">
              <div className="subHeading">
                {getDollerSign(label) +
                  handleError(secondValue, label) +
                  getPercentSign(label)}
              </div>
              <div>
                <div
                  className={` flex items-center  ${
                    secondDifference > 0 ? "text-[#0DA452]" : "text-red-600"
                  } gap-2 `}
                >
                  <div>
                    {!isNaN(secondDifference) ? (
                      secondDifference > 0 ? (
                        <AiFillCaretUp />
                      ) : (
                        <AiFillCaretDown />
                      )
                    ) : (
                      ""
                    )}{" "}
                  </div>
                  <div
                    className={`font-semibold ${
                      secondDifference > 0 ? "text-[#0DA452]" : "text-red-600"
                    }  font font-normal`}
                  >
                    {handleError(Math.abs(secondPercentage))}%
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end ">
              <div
                className={`font-semibold  ${
                  secondDifference > 0 ? "text-[#0DA452]" : "text-red-600"
                } `}
              >
                {getDollerSign(label) +
                  handleError(Math.abs(secondDifference), label) +
                  getPercentSign(label)}
              </div>
            </div>
          </div>
          {showSecondCard && (
            <div
              className={`border-2 ${getBorderColor(
                thirdDifference
              )}  p-2 rounded-lg`}
            >
              <div className="flex justify-between  gap-2 items-center  ">
                <div className="heading">
                  {thirdLabel}
                </div>
              </div>
              <div className="flex gap-2 items-center justify-between">
                <div className="subHeading">
                  {getDollerSign(label) +
                    handleError(thirdValue, label) +
                    getPercentSign(label)}
                </div>
                <div>
                  <div
                    className={`flex items-center gap-2  ${
                      thirdDifference > 0 ? "text-[#0DA452]" : "text-red-600"
                    }`}
                  >
                    <div>
                      {!isNaN(thirdDifference) ? (
                        thirdDifference > 0 ? (
                          <AiFillCaretUp />
                        ) : (
                          <AiFillCaretDown />
                        )
                      ) : (
                        ""
                      )}{" "}
                    </div>
                    <div
                      className={`  ${
                        thirdDifference > 0 ? "text-[#0DA452]" : "text-red-600"
                      } font font-normal `}
                    >
                      {handleError(Math.abs(thirdPercentage))}%
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end ">
                <div
                  className={` font-semibold ${
                    thirdDifference > 0 ? "text-[#0DA452]" : "text-red-600"
                  } `}
                >
                  {getDollerSign(label) +
                    handleError(Math.abs(thirdDifference), label) +
                    getPercentSign(label)}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const LoaderCardsWithTwoSubCards = () => {
  return (
    <div className="border-[1.5px] px-2 py-2 rounded-lg col-span-1 bg-white animate-pulse">
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
  );
};
