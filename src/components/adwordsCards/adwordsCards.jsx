import {
  getBorderColor,
  getColor,
  getDollerSign,
  getIcon,
  getPercentageSign,
  handleError,
} from "../../utils/utils";

export const SingleCardLoaderB = () => {
  return (
    <div className="bg-white rounded-lg p-2 h-40 animate-pulse">
      <div className="flex flex-col items-start text-center justify-start">
        <div className="h-4 bg-gray-300 rounded-lg mb-2"></div>
        <div className="h-6 bg-gray-300 rounded-lg"></div>
      </div>
      <div className="flex flex-col items-end text-center justify-end mt-12">
        <div className={`flex items-center gap-1 ${"text-red-600"} `}>
          <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
          <div className="w-10 h-4 bg-gray-300 rounded-lg"></div>
        </div>
        <div className="w-10 h-4 bg-gray-300 rounded-lg mt-2"></div>
      </div>
    </div>
  );
};

export const CallAndAppointmentCard = ({ differ, oldSum, percentage }) => {
  return (
    <div
      className={`border-2 ${getBorderColor(
        differ?.CallandAppts
      )}  px-2 py-2   rounded-lg h-42 col-span-1 bg-white`}
    >
      <div>
        <div className="flex flex-col ">
          <div className="heading">Calls & Appts</div>
          <div className="flex justify-between">
            <div className="subHeading">
              {handleError(oldSum?.CallandAppts, "Calls & Appts")}
            </div>
            <div
              className={`flex items-center  gap-1 ${getColor(
                differ?.CallandAppts
              )} `}
            >
              {getIcon(differ?.CallandAppts)}
              {handleError(Math.abs(percentage?.CallandAppts)) + "%"}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end text-center  justify-end">
          <div
            className={`flex items-center  ${getColor(
              differ?.CallandAppts
            )}  font-medium`}
          >
            {" "}
            {handleError(Math.abs(differ?.CallandAppts), "Calls & Appts")}
          </div>
        </div>
      </div>
      <div
        className={`border-2 ${getBorderColor(
          differ?.CallandApptsNew
        )} shadow-lg px-2  rounded-lg mt-0`}
      >
        <div className="flex flex-col items-start text-center justify-start">
          <div className="heading">New</div>
          <div className="subHeading">
            {handleError(oldSum?.CallandApptsNew, "Calls & Appts")}
          </div>
        </div>
        <div className="flex flex-col items-end text-end justify-end">
          <div
            className={`"  flex items-end text-end ${getColor(
              differ?.CallandApptsNew
            )}  font-medium"`}
          >
            {" "}
            {handleError(Math.abs(differ?.CallandApptsNew), "Calls & Appts")}
          </div>
        </div>
      </div>
    </div>
  );
};

export const CustomersCard = ({ oldSum, differ, percentage }) => {
  return (
    <div
      className={` ${getBorderColor(
        differ?.CustomersTotal
      )} border-2   px-2 py-2 rounded-lg  col-span-6 lg:col-span-2 bg-white`}
    >
      <div>
        <div className="flex flex-col items-start text-center justify-start">
          <div className="heading">Total Customers</div>
          <div className="subHeading">
            {handleError(oldSum?.CustomersTotal, "Total Customers")}
          </div>
        </div>
        <div className="flex flex-col items-end text-center justify-end">
          <div
            className={`flex items-center gap-1 ${getColor(
              differ?.CustomersTotal
            )} `}
          >
            {getIcon(differ?.CustomersTotal)}{" "}
            {handleError(Math.abs(percentage?.CustomersTotal))}
            {"%"}
          </div>
          <div
            className={`flex items-center gap-1 ${getColor(
              differ?.CustomersTotal
            )}  font-medium`}
          >
            {" "}
            {handleError(Math.abs(differ?.CustomersTotal), "Total Customers")}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-8 ">
        <div
          className={`border-2 ${getBorderColor(
            differ?.CustomersNew
          )} shadow-lg p-2  rounded-lg`}
        >
          <div className="flex flex-col items-start text-center justify-start">
            <div className="heading">New</div>
            <div className="subHeading">
              {handleError(oldSum?.CustomersNew, "Total Customers")}
            </div>
          </div>
          <div className="flex flex-col items-end text-center justify-end">
            <div
              className={`flex items-center gap-1 ${getColor(
                differ?.CustomersNew
              )} `}
            >
              {getIcon(differ?.CustomersNew)}{" "}
              {handleError(Math.abs(percentage?.CustomersNew))} {"%"}
            </div>
            <div
              className={`flex items-center gap-1 ${getColor(
                differ?.CustomersNew
              )}  font-medium`}
            >
              {" "}
              {handleError(Math.abs(differ?.CustomersNew), "Total Customers")}
            </div>
          </div>
        </div>
        <div
          className={` ${getBorderColor(
            differ?.ReturningCustomers
          )} border-2 shadow-lg px-1 py-2  rounded-lg `}
        >
          <div className="flex flex-col items-start text-center justify-start">
            <div className="heading">Returning</div>
            <div className="subHeading">
              {handleError(oldSum?.ReturningCustomers, "Total Customers")}
            </div>
          </div>
          <div className="flex flex-col items-end text-center justify-end">
            <div
              className={`flex items-center gap-1 ${getColor(
                differ?.ReturningCustomers
              )} `}
            >
              {getIcon(differ?.ReturningCustomers)}{" "}
              {handleError(Math.abs(percentage?.ReturningCustomers))} {"%"}
            </div>
            <div
              className={`flex items-center gap-1 ${getColor(
                differ?.ReturningCustomers
              )}  font-medium`}
            >
              {" "}
              {handleError(
                Math.abs(differ?.ReturningCustomers),
                "Total Customers"
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const RevenueCard = ({ oldSum, percentage, differ, monthss }) => {
  return (
    <div
      className={`border-2 ${getBorderColor(
        differ?.ROI / monthss
      )}  px-2 py-2 rounded-lg  col-span-3 lg:col-span-1 bg-white `}
    >
      <div>
        <div className="flex flex-col items-start text-center justify-start">
          <div className="heading">ROI</div>
          <div className="subHeading">
            {handleError(Math.abs(oldSum?.ROI / monthss))}
            {"%"}
          </div>
        </div>
        <div className="flex flex-col items-end text-center justify-end">
          <div className={`flex items-center gap-1 ${getColor(differ?.ROI)} `}>
            {getIcon(differ?.ROI)}{" "}
            {handleError(Math.abs(percentage?.ROI / monthss)) + "%"}
          </div>
          <div
            className={`flex items-center gap-1 ${getColor(
              differ?.ROI
            )}  font-medium`}
          >
            {" "}
            {handleError(Math.abs(differ?.ROI / monthss))}
            {"%"}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-2 ">
        <div
          className={`border-2 ${getBorderColor(
            differ?.ROINew / monthss
          )} shadow-lg p-2 col-span-2  rounded-lg`}
        >
          <div className="flex flex-col items-start text-center justify-start">
            <div className="heading">New</div>
            <div className="subHeading">
              {handleError(Math.abs(oldSum?.ROINew / monthss))}
              {"%"}
            </div>
          </div>
          <div className="flex flex-col items-end text-center justify-end">
            <div
              className={`flex items-center gap-1 ${getColor(differ?.ROINew)} `}
            >
              {getIcon(differ?.ROINew)}{" "}
              {handleError(Math.abs(percentage?.ROINew / monthss)) + "%"}
            </div>
            <div
              className={`flex items-center gap-1 ${getColor(
                differ?.ROINew
              )}  font-medium`}
            >
              {" "}
              {handleError(Math.abs(differ?.ROINew / monthss))}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AROCard = ({ oldSum, differ, percentage }) => {
  return (
    <div
      className={`border-2 ${getBorderColor(
        differ?.ARO
      )}  px-2 py-2 rounded-lg  col-span-3 lg:col-span-1 bg-white`}
    >
      <div>
        <div className="flex flex-col items-start text-center justify-start">
          <div className="heading">ARO</div>
          <div className="subHeading">${handleError(oldSum?.ARO, "ARO")}</div>
        </div>
        <div className="flex flex-col items-end text-center justify-end">
          <div className={`flex items-center gap-1 ${getColor(differ?.ARO)} `}>
            {getIcon(differ?.ARO)}{" "}
            {handleError(Math.abs(percentage?.ARO)) + "%"}
          </div>
          <div
            className={`flex items-center gap-1 ${getColor(
              differ?.ARO
            )}  font-medium`}
          >
            {" "}
            $ {handleError(Math.abs(differ?.ARO), "ARO")}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-2 ">
        <div
          className={`border-2  ${getBorderColor(
            differ?.NewARO
          )} shadow-lg p-2  rounded-lg`}
        >
          <div className="flex flex-col items-start text-center justify-start">
            <div className="heading">New</div>
            <div className="subHeading">
              ${handleError(oldSum?.NewARO, "ARO")}
            </div>
          </div>
          <div className="flex flex-col items-end text-center justify-end">
            <div
              className={`flex items-center gap-1 ${getColor(differ?.NewARO)} `}
            >
              {getIcon(differ?.NewARO)}{" "}
              {handleError(Math.abs(percentage?.NewARO))} {"%"}
            </div>
            <div
              className={`flex items-center gap-1 ${getColor(
                differ?.NewARO
              )}  font-medium`}
            >
              {" "}
              ${handleError(Math.abs(differ?.NewARO), "ARO")}
            </div>
          </div>
        </div>
        <div
          className={`border-2 ${getBorderColor(
            differ?.ReturningARO
          )} shadow-lg p-2  rounded-lg`}
        >
          <div className="flex flex-col items-start text-center justify-start">
            <div className="heading">Returning</div>
            <div className="subHeading">
              ${handleError(oldSum?.ReturningARO, "ARO")}
            </div>
          </div>
          <div className="flex flex-col items-end text-center justify-end">
            <div
              className={`flex items-center gap-1 ${getColor(
                differ?.ReturningARO
              )} `}
            >
              {getIcon(differ?.ReturningARO)}{" "}
              {handleError(Math.abs(percentage?.ReturningARO)) + "%"}
            </div>
            <div
              className={`flex items-center gap-1 ${getColor(
                differ?.ReturningARO
              )}  font-medium`}
            >
              {" "}
              ${handleError(Math.abs(differ?.ReturningARO), "ARO")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const ROICard = ({ differ, percentage, oldSum }) => {
  return (
    <div
      className={` border-2 ${getBorderColor(
        differ?.RevenueTotal
      )}  px-2 py-2 rounded-lg  col-span-3 lg:col-span-1 bg-white `}
    >
      <div>
        <div className="flex flex-col items-start text-center justify-start">
          <div className="heading">Revenue</div>
          <div className="subHeading">
            ${handleError(oldSum?.RevenueTotal, "Revenue")}
          </div>
        </div>
        <div className="flex flex-col items-end text-center justify-end">
          <div
            className={`flex items-center gap-1 ${getColor(
              differ?.RevenueTotal
            )} `}
          >
            {getIcon(differ?.RevenueTotal)}{" "}
            {handleError(Math.abs(percentage?.RevenueTotal)) + "%"}
          </div>
          <div
            className={`flex items-center gap-1  ${getColor(
              differ?.RevenueTotal
            )} font-medium`}
          >
            {" "}
            ${handleError(Math.abs(differ?.RevenueTotal), "Revenue")}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-2 ">
        <div
          className={`border-2 ${getBorderColor(
            differ?.RevenueNewCustomer
          )} shadow-lg p-2  rounded-lg`}
        >
          <div className="flex flex-col items-start text-center justify-start">
            <div className="heading">New</div>
            <div className="subHeading">
              ${handleError(oldSum?.RevenueNewCustomer, "Revenue")}
            </div>
          </div>
          <div className="flex flex-col items-end text-center justify-end">
            <div
              className={`flex items-center gap-1 ${getColor(
                differ?.RevenueNewCustomer
              )} `}
            >
              {getIcon(differ?.RevenueNewCustomer)}{" "}
              {handleError(Math.abs(percentage?.RevenueNewCustomer))} {"%"}
            </div>
            <div
              className={`flex items-center gap-1 ${getColor(
                differ?.RevenueNewCustomer
              )}  font-medium`}
            >
              {" "}
              {handleError(Math.abs(differ?.RevenueNewCustomer), "Revenue")}
              ''
            </div>
          </div>
        </div>
        <div
          className={` ${getBorderColor(
            differ?.ReturningRevenue
          )}  border-2 shadow-lg p-2  rounded-lg `}
        >
          <div className="flex flex-col items-start text-center justify-start">
            <div className="heading">Returning</div>
            <div className="subHeading">
              ${handleError(oldSum?.ReturningRevenue, "Revenue")}
            </div>
          </div>
          <div className="flex flex-col items-end text-center justify-end">
            <div
              className={`flex items-center gap-1 ${getColor(
                differ?.ReturningRevenue
              )} `}
            >
              {getIcon(differ?.ReturningRevenue)}{" "}
              {handleError(Math.abs(percentage?.ReturningRevenue))} {"%"}
            </div>
            <div
              className={`flex items-center gap-1 ${getColor(
                differ?.ReturningRevenue
              )}  font-medium`}
            >
              {" "}
              ${handleError(Math.abs(differ?.ReturningRevenue), "Revenue")}
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
  difference,
  percentage,
}) => {
  return (
    <div
      className={`bg-white rounded-lg p-2 h-40 border-2  ${getBorderColor(
        difference
      )} `}
    >
      <div className="flex flex-col justify-between h-full ">
        <div className="flex flex-col items-start text-left justify-start  ">
          <div className="heading">{label}</div>
          <div className="subHeading">
            {getDollerSign(label) +
              handleError(value, label) +
              getPercentageSign(label)}
          </div>
        </div>
        <div className="flex flex-col items-end text-center justify-end ">
          <div className={`flex items-center gap-1 ${getColor(difference)} `}>
            {getIcon(difference)}
            {handleError(Math.abs(percentage))}
            {"%"}
          </div>
          <div
            className={`flex items-center gap-1 ${getColor(
              difference
            )}  font-medium`}
          >
            {" "}
            {getDollerSign(label) +
              handleError(Math.abs(difference), label) +
              getPercentageSign(label)}
          </div>
        </div>
      </div>
    </div>
  );
};

export const InvestmentCard = ({ loading, oldSum, differ, percentage }) => {
  return (
    <>
      {loading ? (
        <div className="border-[1.5px] px-2 py-2 rounded-lg col-span-3 bg-white animate-pulse">
          <div>
            <div className="flex flex-col items-start text-center justify-start">
              <div className="h-4 bg-gray-300 rounded-lg mb-2"></div>
              <div className="h-6 bg-gray-300 rounded-lg"></div>
            </div>
            <div className="flex flex-col items-end text-center justify-end">
              <div
                className={`flex items-center gap-1 ${
                  percentage > 0 ? "text-[#0DA452]" : "text-red-600"
                } `}
              >
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
        </div>
      ) : (
        <div
          className={`border-2 ${getBorderColor(
            differ?.Investment
          )}  px-2 py-2 rounded-lg col-span-6 lg:col-span-3 bg-white `}
        >
          <div>
            <div className="flex flex-col items-start text-center justify-start">
              <div className="heading">Investment</div>
              <div className="text-[#1F66AC] font-medium text-lg">
                {"$" + handleError(oldSum?.Investment, "Investment")}
              </div>
            </div>
            <div className="flex flex-col items-end text-center justify-end">
              <div
                className={`flex items-center gap-1 ${getColor(
                  differ?.Investment
                )} `}
              >
                {getIcon(differ?.Investment)}{" "}
                {handleError(Math.abs(percentage?.Investment))}
                {"%"}
              </div>
              <div
                className={`flex items-center gap-1 ${getColor(
                  differ?.Investment
                )}  font-medium`}
              >
                {" "}
                $ {handleError(Math.abs(differ?.Investment), "Investment")}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-6 ">
            <div className={`border-2 shadow-lg p-2  rounded-lg`}>
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
                <div className="heading">Pacing</div>
                <div className="subHeading">{"--"}</div>
              </div>
              <div className="flex flex-col items-end text-end justify-end">
                <div className=" mt-4 flex items-end text-end text-red-600 font-medium">
                  {" "}
                  {"--"}
                </div>
              </div>
            </div>
            <div className="border-[1.5px] shadow-lg p-2  rounded-lg h-28">
              <div className="flex flex-col items-start text-start justify-start">
                <div className="heading">Management Fee</div>
                <div className="subHeading">{"--"}</div>
              </div>
              <div className="flex flex-col items-end text-end justify-end">
                <div className="  flex items-end text-end text-red-600 font-medium">
                  {" "}
                  {"--"}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const ConversionRateCard = ({ loading, oldSum, differ, percentage }) => {
  return (
    <>
      {loading ? (
        <div className="border-[1.5px] px-2 py-2 rounded-lg col-span-1 bg-white animate-pulse">
          <div>
            <div className="flex flex-col items-start text-start justify-start">
              <div className="h-4 bg-gray-300 rounded-lg mb-2"></div>
              <div className="h-6 bg-gray-300 rounded-lg"></div>
            </div>
            <div className="flex flex-col items-end text-center justify-end">
              <div
                className={`flex items-center gap-1 ${
                  percentage > 0 ? "text-[#0DA452]" : "text-red-600"
                } `}
              >
                <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                <div className="w-10 h-4 bg-gray-300 rounded-lg"></div>
              </div>
              <div className="w-8 h-4 bg-gray-300 rounded-lg mt-2"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2 mt-3">
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
            differ?.ConversionRate
          )}  px-2 py-2 rounded-lg  col-span-6 lg:col-span-1  bg-white`}
        >
          <div>
            <div className="flex flex-col items-start text-start justify-start">
              <div className="heading">Conversion Rate</div>
              <div className="subHeading">
                {handleError(Math.abs(oldSum?.ConversionRate)) + "%" || "--"}
              </div>
            </div>
            <div className="flex flex-col items-end text-center justify-end">
              <div
                className={`flex items-center gap-1 ${getColor(
                  differ?.ConversionRate
                )} `}
              >
                {getIcon(differ?.ConversionRate)}{" "}
                {handleError(Math.abs(percentage?.ConversionRate)) + "%"}
              </div>
              <div
                className={`flex items-center gap-1 ${getColor(
                  differ?.ConversionRate
                )}  font-medium`}
              >
                {" "}
                {handleError(Math.abs(differ?.ConversionRate))}
                {"%"}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2 mt-3 ">
            <div
              className={`border-2 mt-4 ${getBorderColor(
                differ?.NewConversionRate
              )}  shadow-lg p-2  rounded-lg`}
            >
              <div className="flex flex-col items-start text-center justify-start">
                <div className="heading">New</div>
                <div className="subHeading">
                  {handleError(Math.abs(oldSum?.NewConversionRate))}
                  {"%"}
                </div>
              </div>
              <div className="flex flex-col items-end text-center justify-end">
                <div
                  className={`flex items-center gap-1 ${getColor(
                    differ?.NewConversionRate
                  )} `}
                >
                  {getIcon(differ?.NewConversionRate)}{" "}
                  {handleError(Math.abs(percentage?.NewConversionRate)) + "%"}
                </div>
                <div
                  className={`flex items-center gap-1 ${getColor(
                    differ?.NewConversionRate
                  )}  font-medium`}
                >
                  {" "}
                  {handleError(Math.abs(differ?.NewConversionRate))}
                  {"%"}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
