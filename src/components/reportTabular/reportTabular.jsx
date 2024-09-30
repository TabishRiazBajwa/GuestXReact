import React from "react";

import ReportTabularRow from "../reportTabularRow/reportTabularRow";
import NoDataFound from "../noDataFound/noDataFound";

export default function ReportTabular({ data }) {
  return (
    <>
      <table
        className=" table-auto   w-full text-center border-collapse border border-slate-500 bg-white"
        id="business-report-table"
      >
        <thead>
          <tr className="h-16 m-4 ">
            <th className="w-1/6     border border-[#707070]">
              <div className="px-5">Month, Year</div>
            </th>
            <th className="  border border-[#707070]">
              <div className="px-5">Revenue</div>
            </th>
            <th className="border border-[#707070] ">
              <div className="px-5">YOY%</div>
            </th>
            <th className="border border-[#707070]">
              <div className="px-2">Car Counts</div>
            </th>
            <th className="border border-[#707070]">
              <div className="px-5">YOY%</div>
            </th>
            <th className="border border-[#707070]">ARO</th>
            <th className="border border-[#707070]">
              <div className="px-5">YOY%</div>
            </th>
            <th className="border border-[#707070]">
              <div className="px-5">Customers</div>
            </th>
            <th className=" border border-[#707070]">
              <div className="px-5">YOY%</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.length > 0 &&
            data.map((item) => <ReportTabularRow data={item} />)}
        </tbody>
      </table>
    </>
  );
}
