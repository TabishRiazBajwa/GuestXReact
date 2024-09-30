import React from "react";

import IconTableDecrement from "../iconTableDecrement/iconTableDecrement";
import IconTableIncrement from "../iconTableIncrement/iconTableIncrement";

export default function ReportTabularRow({ data }) {
  const MONTHSNAMES = [
    "",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <tr className="h-16  ">
      <td className="border border-[#707070] bg-[#F2F2F2]">
        <div className="px-2">{`${MONTHSNAMES[data?.MonthNumber]}, ${
          data?.Year
        } `}</div>
      </td>
      <td className="border border-[#707070]">
        <div className="px-2">$ {data?.Revenue?.toLocaleString("en-US")}</div>
      </td>

      <td
        className={`border border-[#707070]  bg-[#F2F2F2] ${
          data?.RevenueYOY >= 0 ? "text-green-500" : "text-red-500"
        } `}
      >
        <div className="flex flex-row gap-4 justify-center">
          <div>{data?.RevenueYOY} %</div>
          {data?.RevenueYOY >= 0 ? (
            <IconTableIncrement />
          ) : (
            <IconTableDecrement />
          )}{" "}
        </div>
      </td>
      <td className="border border-[#707070]">
        <div className="px-2">{data?.CarCount?.toLocaleString("en-US")}</div>
      </td>
      <td
        className={`border border-[#707070]  bg-[#F2F2F2] ${
          data?.CarCountYOY >= 0 ? "text-green-500" : "text-red-500"
        } `}
      >
        <div className="flex flex-row gap-4 justify-center">
          <div>{data?.CarCountYOY} %</div>
          {data?.CarCountYOY >= 0 ? (
            <IconTableIncrement />
          ) : (
            <IconTableDecrement />
          )}
        </div>
      </td>
      <td className="border border-[#707070]">
        <div className="px-2">$ {data?.ARO?.toLocaleString("en-US")}</div>
      </td>
      <td
        className={`border border-[#707070]  bg-[#F2F2F2] ${
          data?.AROYOY >= 0 ? "text-green-500" : "text-red-500"
        } `}
      >
        <div className="flex flex-row gap-4 justify-center">
          <div>{data?.AROYOY} %</div>
          {data?.AROYOY >= 0 ? <IconTableIncrement /> : <IconTableDecrement />}
        </div>
      </td>
      <td className="border border-[#707070]">
        <div className="px-2">
          {data?.TotalCustomer?.toLocaleString("en-US")}
        </div>
      </td>
      <td
        className={`border border-[#707070]  bg-[#F2F2F2] ${
          data?.TotalCustomerYOY >= 0 ? "text-green-500" : "text-red-500"
        } `}
      >
        <div className="flex flex-row gap-4 justify-center">
          <div>{data?.TotalCustomerYOY} %</div>
          {data?.TotalCustomerYOY >= 0 ? (
            <IconTableIncrement />
          ) : (
            <IconTableDecrement />
          )}
        </div>
      </td>
    </tr>
  );
}
