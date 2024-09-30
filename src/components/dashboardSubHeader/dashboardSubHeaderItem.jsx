import React from "react";

const DashboardSubHeaderItem = ({ dataObj }) => {
  const difference = dataObj.value - dataObj.oldValue;
  const color =
    difference > 0 ? "#0DA452" : difference < 0 ? "#FF0000" : "#696B7280";
  return (
    <div className="flex flex-col w-[33%] 2xl:w-[33%] space-y-3 text-[#000000] darkText ">
      <div className="flex flex-row justify-between">
        <div
          className={`flex flex-row 2xl:justify-between w-[58%] 2xl:w-[36%] ${
            dataObj.index === 2 ? "order-last" : ""
          }`}
        >
          {dataObj.index === 2 ? (
            <>
              <div className="w-[50%] 2xl:w-[40%]">
                <p className="font-['Poppins'] text-base 2xl:text-lg  ">
                  {isNaN(dataObj.percentage)
                    ? "N/A"
                    : `(${dataObj.percentage} %)`}
                </p>
              </div>
              <div className="w-[50%] 2xl:w-[60%]">
                <p
                  className={`font-['Poppins'] font-bold text-base 2xl:text-lg text-[${color}]`}
                >
                  {dataObj.label}
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="w-[50%] 2xl:w-[40%]">
                <p
                  className={`font-['Poppins'] font-bold text-base 2xl:text-lg text-[${color}]`}
                >
                  {dataObj.label}
                </p>
              </div>
              <div className="w-[50%] 2xl:w-[60%]">
                <p className="font-['Poppins'] text-base 2xl:text-lg ">
                  {isNaN(dataObj.percentage)
                    ? "N/A"
                    : `(${dataObj.percentage} %)`}
                </p>
              </div>
            </>
          )}
        </div>

        <div className={`${dataObj.index === 2 ? "order-first" : ""}`}>
          <p className="font-['Poppins'] font-medium text-base 2xl:text-lg ">
            {dataObj.value}
          </p>
        </div>
      </div>
      <div>
        <hr className="h-[0.1rem] bg-[#D5D5D5]"></hr>
      </div>
    </div>
  );
};

export default DashboardSubHeaderItem;
