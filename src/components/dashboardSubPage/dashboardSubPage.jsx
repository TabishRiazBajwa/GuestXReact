import React, { useState } from "react";
import DashboardBarChart from "../dashboardBarChart/dashboardBarChart";
import SalesColumnChart from "../mantis/SalesColumnChart";
import MainCard from "../mantis/MainCard";
import { Stack, Typography } from "@mui/material";

const DashboardSubPage = ({ pageData }) => {
  const [enabled, setEnabled] = useState(false); //toggle
  const [barFilter, setBarFilter] = useState("");

  return (
    <div className="w-full rounded-[12px] flex flex-col bg-[#888888] gap-4 p-2 mt-5 min-h-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between mx-4 p-4">
          <div className="flex flex-row gap-4 flex-wrap items-center">
            {pageData?.barArray.length > 1 &&
              pageData?.barArray?.map((filter, index) => (
                <div key={filter.heading}>
                  <input
                    id={`default-checkbox-${filter.heading}`}
                    type="checkbox"
                    value={filter.heading}
                    className="align-middle bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    checked={filter.heading === barFilter}
                    onChange={(e) => {
                      if (barFilter === "") {
                        setBarFilter(e.target.value);
                      }
                      if (barFilter === e.target.value) {
                        setBarFilter("");
                      } else {
                        setBarFilter(e.target.value);
                      }
                    }}
                  />
                  <label
                    htmlFor={`default-checkbox-${filter.heading}`}
                    className="ml-2 mr-4 align-middle font-medium text-[0.9rem] leading-[25px] tracking-tight text-[#f2f2f2] opacity-100"
                  >
                    {filter.heading}
                  </label>
                </div>
              ))}
          </div>
          {pageData?.hasNewLeads && (
            <div className="flex flex-row gap-3 items-center">
              <div>
                <p
                  className="font-medium text-[0.9rem] leading-[25px] tracking-tight text-white opacity-100 text-right"
                  style={{
                    whiteSpace: "nowrap",
                  }}
                >
                  New Leads
                </p>
              </div>
              <div>
                <div className="flex">
                  <label class="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={enabled}
                      readOnly
                    />
                    <div
                      onClick={() => {
                        setEnabled(!enabled);
                      }}
                      className="w-11 h-6 bg-[#0E2E60] rounded-full peer  peer-focus:ring-[#1c2]  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#42A0FE]"
                    ></div>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* <Bar data={chartData} options={options} /> */}
        {barFilter === ""
          ? pageData?.barArray?.map((bar) => {
              // fix for when data returned for graphs is empty
              if (bar.graphs !== undefined && bar.graphs.length > 0) {
                console.log("firstbarbar", bar, bar.heading, bar?.series);
                return (
                  <div
                    className="flex flex-col w-full bg-[#FFFFFF] darkBackgroundMain rounded-[12px]"
                    key={bar?.heading}
                  >
                    <div className="h-full">
                      <MainCard sx={{ mt: 0 }}>
                        <Stack spacing={1.5} sx={{ mb: -12 }}>
                          <Typography variant="h6" color="secondary">
                            {/* Net Profit */}
                          </Typography>
                          <div className="text-lg font-bold leading-[25px] tracking-tight text-[#0F2E60] opacity-100">
                            {bar?.heading}
                          </div>
                          {/* <Typography variant="h4">{bar?.heading}</Typography> */}
                        </Stack>
                        <SalesColumnChart
                          months={bar?.monthList}
                          // data={bar?.Investment}
                          series={bar?.series}
                          type={bar?.type}
                        />
                      </MainCard>
                      <DashboardBarChart
                        heading={bar?.heading}
                        initialData={bar?.graphs}
                        categories={bar?.categories}
                        hasGoal={bar?.hasGoal}
                        goalKey={bar?.goalKey}
                        type={bar?.type}
                        hasToolTip={bar?.hasToolTip}
                      />
                    </div>
                  </div>
                );
              }
            })
          : pageData?.barArray?.map((bar) =>
              bar.heading === barFilter ? (
                <div
                  className="flex flex-col w-full bg-[#FFFFFF] rounded-[12px]"
                  key={bar.heading}
                >
                  <div className="h-full">
                    <SalesColumnChart
                      months={bar?.monthList}
                      // data={bar?.Investment}
                      series={bar?.series}
                      type={bar?.type}
                    />
                    <DashboardBarChart
                      heading={bar.heading}
                      initialData={bar.graphs}
                      categories={bar?.categories}
                      hasGoal={bar.hasGoal}
                      goalKey={bar.goalKey}
                      type={bar.type}
                      hasToolTip={bar?.hasToolTip}
                    />
                  </div>
                </div>
              ) : null
            )}
      </div>
    </div>
  );
};

export default DashboardSubPage;
