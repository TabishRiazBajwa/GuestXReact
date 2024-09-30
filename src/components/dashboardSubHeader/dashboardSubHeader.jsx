import React from "react";
import DashboardSubHeaderItem from "./dashboardSubHeaderItem";

const DashboardSubHeader = (props) => {
  const {
    lead_count,
    unqualified_count,
    lead_count_percentage,
    unqualified_count_percentage,
  } = props.data;

  const dataArray = [
    {
      index: 1,
      label: "LEADS",
      type: "Rate",
      value: lead_count,
      percentage: Math.round(lead_count_percentage),
      oldValue: 0,
    },
    {
      index: 2,
      label: "UNQUALIFIED",
      type: "Rate",
      value: unqualified_count,
      percentage: Math.round(unqualified_count_percentage),
      oldValue: 1,
    },
  ];
  return (
    <div className="flex flex-row justify-between p-6 px-[4rem] w-full">
      {dataArray &&
        dataArray.map((dataObj, index) => (
          <DashboardSubHeaderItem key={dataObj.label} dataObj={dataObj} />
        ))}
    </div>
  );
};

export default DashboardSubHeader;
