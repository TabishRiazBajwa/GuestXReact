import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

import Layout from "../../Layouts/Layouts";
import { saveAsCSV, saveAsPDF } from "../../helpers/SaveAs";

import MultipleRoundSelector from "../../components/multipleRoundSelector/multipleRoundSelector";
import ReportTabular from "../../components/reportTabular/reportTabular";
import ReportGraphical from "../../components/reportGraphical/reportGraphical";
import ReportTicker from "../../components/reportTicker/reportTicker";
import ReportSaveAsButton from "../../components/reportSaveAsButton/reportSaveAsButton";
import MainLoader from "../../components/mainLoader/mainLoader";
import NoDataFound from "../../components/noDataFound/noDataFound";
import { getConvirzaGroupNames } from "../../helpers/DataProcessor";

export default function Report(props) {
  const tabs = ["Tabular", "Graphical"];
  const [tabSelected, setTabSelected] = useState(tabs[0]);
  const [date, setDate] = useState(() => {
    const storedDate = sessionStorage.getItem("storedDate");
    if (storedDate) {
      return JSON.parse(storedDate);
    } else {
      const currentDate = dayjs();
      const startMonth = currentDate.subtract(3, "month").month() + 1;
      const endMonth = currentDate.month() + 1;
      const startYear =
        startMonth > endMonth ? currentDate.year() - 1 : currentDate.year();
      const endYear = currentDate.year();
      const startDate = currentDate.date();
      const endDate = currentDate.date();

      return {
        startMonth,
        endMonth,
        startYear,
        endYear,
        startDate,
        endDate,
      };
    }
  });
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [label, setLabel] = useState("Google Ads Campaign");
  const [isOpen, setIsOpen] = useState();
  const [isOptionOpen, setIsOptionOpen] = useState(false);

  const [showInitialFilterUi, setShowInitialFilterUi] = useState(false);

  const {
    marketingBusinessReportsData,
    marketingBusinessReportsError,
    marketingBusinessReportsLoading,
    repairpalRevenueData,
    repairpalRevenueLoading,
    getMarketingBusinessReportsRequest,
    getRepairpalRevenueRequest,
  } = props;

  const loading = marketingBusinessReportsLoading || repairpalRevenueLoading;

  const user = JSON.parse(localStorage.getItem("user")).email;
  useEffect(() => {
    getRepairpalRevenueRequest({
      email: user
    });
  }, []);

  useEffect(() => {
    if (!Array.isArray(selectedLocation) || selectedLocation.length === 0) {
      setShowInitialFilterUi(true);
      return;
    }
    if (showInitialFilterUi) {
      setShowInitialFilterUi(false);
    }
    const convirzaGroupNames = getConvirzaGroupNames(selectedLocation);

    getMarketingBusinessReportsRequest({
      location: convirzaGroupNames,
      start_month: date.startMonth,
      end_month: date.endMonth,
      start_year: date.startYear,
      end_year: date.endYear,
    });
  }, [selectedLocation, date]);

  const setLocation = (location) => {
    setSelectedLocation(location);
  };

  const setDateState = (date) => {
    setDate(date);
  };

  const setLabelValue = (label) => {
    setLabel(label);
  };

  const csvColumnOrder = [];

  const getDateRange = () => {
    const startDate = new Date(date.startYear, date.startMonth - 1, 1);
    const endDate = new Date(date.endYear, date.endMonth - 1, 1);
    const locale = "en-US";
    const options = { month: "short", year: "numeric" };
    const startShortDate = startDate.toLocaleString(locale, options);
    const endShortDate = endDate.toLocaleString(locale, options);
    const shortDate = startShortDate + " - " + endShortDate;
    return shortDate;
  };

  return (
    <>
      <Layout
        Layout
        showInitialFilterUi={showInitialFilterUi}
        initalFilterDialogText="Please select a location"
        noDataFound={marketingBusinessReportsData.length === 0}
        isLoading={marketingBusinessReportsLoading}
        headerProps={{
          filterEnableList: { location: true },
          heading: `Report`,
          repairpal_revenue_data: repairpalRevenueData,
          label: label,
          setDate: setDateState,
          isOpen: isOpen,
          setIsOpen: setIsOpen,
          setSelectedLocation: setLocation,
          isOptionOpen: isOptionOpen,
          setIsOptionOpen: setIsOptionOpen,
          selectedLocation: selectedLocation,
          setLabel: setLabelValue,
          showInitialFilterUi: showInitialFilterUi,
        }}
      >
        <div className="w-full pb-2 pr-5 flex flex-row justify-between ">
          <MultipleRoundSelector
            selectedTab={tabSelected}
            setSelectedTab={setTabSelected}
            options={tabs}
          />
          <div className="flex flex-col justify-center">{getDateRange()}</div>
          <ReportSaveAsButton
            saveAsCSV={() =>
              saveAsCSV(
                marketingBusinessReportsData,
                "business_report_data.csv",
                csvColumnOrder
              )
            }
            saveAsPDF={() =>
              saveAsPDF("#business-report-table", "business_report_data.pdf")
            }
          />
        </div>
        {loading && <MainLoader />}
        {!loading && (
          <div className="py-4 pr-2 md:pr-5">
            <div className=" h-full lg shadow-lg overflow-y-auto ">
              {tabSelected === tabs[0] && (
                <ReportTabular data={marketingBusinessReportsData} />
              )}
              {tabSelected === tabs[1] && (
                <div className="h-[36vw]">
                  <ReportGraphical data={marketingBusinessReportsData} />
                </div>
              )}
            </div>
          </div>
        )}
        {!loading && marketingBusinessReportsData.length === 0 && (
          <NoDataFound />
        )}
        {tabSelected === tabs[1] &&
          !marketingBusinessReportsLoading &&
          !marketingBusinessReportsError && (
            <div className="w-full flex flex-row justify-center bg-gray-300">
              <div className="w-full  px-1">
                <ReportTicker />
              </div>
            </div>
          )}
      </Layout>
    </>
  );
}
