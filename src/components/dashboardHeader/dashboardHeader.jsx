import React, { useState, useEffect } from "react";
import DashboardHeaderItem from "../dashboardHeaderItem/dashboardHeaderItem";
import { fetchDashboardHeaders } from "./api";

const DashboardHeader = (props) => {
  const { header_vals } = props;
  const [totalCalls, setTotalCalls] = useState(header_vals?.total_calls); // State for total calls
  const [leadCalls, setLeadCalls] = useState(header_vals?.total_calls); // State for total calls
  const [unqualifiedCalls, setUnqualifiedCalls] = useState(header_vals?.total_calls); // State for total calls
  const [totalCustomers, setTotalCustomers] = useState(header_vals?.total_calls); // State for total calls

  // Fetch the API call count using the external API utility
  const getDashboardHeaders = async () => {
    try {
      const data = await fetchDashboardHeaders();
      setTotalCalls(data.callCount);
      setLeadCalls(data.leadCount);
      setUnqualifiedCalls(data.unqualifiedCount);
      setTotalCustomers(data.totalCustomerCount);
    } catch (error) {
      console.error("Error fetching total calls:", error);
    }
  };

  useEffect(() => {
    getDashboardHeaders(); // Fetch the total calls count on component load
  }, []);

  const dataArray = [
    {
      label: "Investments",
      type: "Price",
      value: header_vals?.total_investment,
      oldValue: 3150,
    },
    {
      label: "Calls",
      type: "Number",
      value: totalCalls,
      oldValue: 1,
    },
    {
      label: "Leads",
      type: "Number",
      value: leadCalls,
      oldValue: 1,
    },
    {
      label: "Unqualified",
      type: "Number",
      value: unqualifiedCalls,
      oldValue: 32,
    },
    {
      label: "Total Customers",
      type: "Number",
      value: totalCustomers,//header_vals?.total_customers,
      oldValue: 54,
    },
    {
      label: "Conversion Rate",
      type: "Rate",
      value: header_vals?.total_conversion_rate,
      oldValue: 54,
    },
    {
      label: "Revenue",
      type: "Price",
      value: header_vals?.total_revenue,
      oldValue: 20000,
    },
    {
      label: "ARO",
      type: "Price",
      value: header_vals?.total_aro,
      oldValue: 540,
    },
    {
      label: "ROI",
      type: "Rate",
      value: header_vals?.total_roi,
      oldValue: 540,
    },
  ];
  return (
    // <div className="w-full m-auto lg:flex lg:justify-evenly lg:flex-wrap 2xl:mx-[-2.5rem] sm:grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
    <div className="w-full m-auto flex justify-evenly">
      {dataArray &&
        dataArray.map((dataObj, index) => (
          <div key={dataObj.label}>
            <DashboardHeaderItem dataObj={dataObj} />
          </div>
        ))}
    </div>
  );
};

export default DashboardHeader;
