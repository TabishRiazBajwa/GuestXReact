import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import MultipleRoundSelector from "../../components/multipleRoundSelector/multipleRoundSelector";

import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

import RankingReportBaseTable from "../../components/rankingReportBaseTable/rankingReportBaseTable";
import RankingReportRankingTable from "../../components/rankingReportRankingTable/rankingReportRankingTable";

import ReportSaveAsButton from "../../components/reportSaveAsButton/reportSaveAsButton";

import Layout from "../../Layouts/Layouts";

import { saveAsCSV, saveAsPDF } from "../../helpers/SaveAs";

import MainLoader from "../../components/mainLoader/mainLoader";
import NoDataFound from "../../components/noDataFound/noDataFound";

import { getConvirzaGroupNames } from "../../helpers/DataProcessor";

export default function RankingReport(props) {
  const {
    getRepairpalRevenueRequest,
    repairpal_revenue_loading,
    repairpal_revenue_data,

    rankingReportData,
    rankingReportLoading,
    rankingReportError,

    getRankingReportsRequest,
  } = props;
  const tabs = ["Service Advisor", "Team", "Region", "Ranking"];
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
  const valueSelector = ["Percentage", "Value", "Both"];
  const [valueView, setValueView] = useState(valueSelector[0]);

  const [goalCheckbox, setGoalCheckbox] = useState(true);
  const [percentageToGoalCheckBox, setPercentageToGoalCheckBox] =
    useState(true);

  const [selectedLocation, setSelectedLocation] = useState(null);

  const [isOpen, setIsOpen] = useState();
  const [isOptionOpen, setIsOptionOpen] = useState(false);

  const [showCustomerHistory, setShowCustomerHistory] = useState(false);

  const [sideOpen, setSideOpen] = useState(false);

  const [showInitialFilterUi, setShowInitialFilterUi] = useState(false);

  const closeCustomerHistory = () => {
    setShowCustomerHistory(false);
  };

  const showCustomerHistorySetter = () => {
    setShowCustomerHistory(true);
  };

  const toggleFilter = () => {
    setSideOpen(!sideOpen);
  };

  const loading = repairpal_revenue_loading || rankingReportLoading;
  const [tempDataForCSV, setTempDataForCSV] = useState(false);

  const user = JSON.parse(localStorage.getItem("user")).email;
  useEffect(() => {
    getRepairpalRevenueRequest({
      email: user
    });
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // setLoading(false);
      setTempDataForCSV({
        service_advisor_table: [
          {
            service_advisor_name: "Ali",
            compliance_score_percentage: 85,
            compliance_score_percentage_goal: 90,
            compliance_score_percentage_to_goal: -5,
            booked_appointments_score_percentage: 75,
            booked_appointments_score_percentage_goal: 80,
            booked_appointments_percentage_to_goal: -5,
            no_booked_appointments_score_percentage: 10,
            no_booked_appointments_score_percentage_goal: 5,
            no_booked_appointments_percentage_to_goal: 5,
          },
          {
            service_advisor_name: "Fatima",
            compliance_score_percentage: 95,
            compliance_score_percentage_goal: 90,
            compliance_score_percentage_to_goal: 5,
            booked_appointments_score_percentage: 80,
            booked_appointments_score_percentage_goal: 80,
            booked_appointments_percentage_to_goal: 0,
            no_booked_appointments_score_percentage: 5,
            no_booked_appointments_score_percentage_goal: 5,
            no_booked_appointments_percentage_to_goal: 0,
          },
          {
            service_advisor_name: "Ahmed",
            compliance_score_percentage: 90,
            compliance_score_percentage_goal: 90,
            compliance_score_percentage_to_goal: 0,
            booked_appointments_score_percentage: 85,
            booked_appointments_score_percentage_goal: 80,
            booked_appointments_percentage_to_goal: 5,
            no_booked_appointments_score_percentage: 15,
            no_booked_appointments_score_percentage_goal: 5,
            no_booked_appointments_percentage_to_goal: -10,
          },
        ],
      });
    }, 8000);
  }, []);

  useEffect(() => {
    if (selectedLocation) {
      if (!Array.isArray(selectedLocation) || selectedLocation.length === 0) {
        setShowInitialFilterUi(true);
        return;
      }

      const convirzaGroupNames = getConvirzaGroupNames(selectedLocation);

      if (showInitialFilterUi) {
        setShowInitialFilterUi(false);
      }

      getRankingReportsRequest({
        start_date: `${date.startYear}-${date.startMonth}-${date.startDate}`,
        end_date: `${date.endYear}-${date.endMonth}-${date.endDate}`,
        group: convirzaGroupNames,
      });
    }
  }, [selectedLocation, date]);

  const setDateState = (date) => {
    setDate(date);
  };

  const setLocation = (location) => {
    setSelectedLocation(location);
  };

  // console.log(rankingReportData, "rankingReportData");

  return (
    <Layout
      showInitialFilterUi={showInitialFilterUi}
      initalFilterDialogText="Please select a location"
      headerProps={{
        filterEnableList: { marketingCampaign: false, location: true },
        heading: `Report`,
        repairpal_revenue_data: repairpal_revenue_data,
        setDate: setDateState,
        isOpen: isOpen,
        setIsOpen: setIsOpen,
        setSelectedLocation: setLocation,
        isOptionOpen: isOptionOpen,
        setIsOptionOpen: setIsOptionOpen,
        selectedLocation: selectedLocation,
        showInitialFilterUi: showInitialFilterUi,
      }}
    >
      <div className="w-full pb-2 flex max-xl:flex-col max-xl:gap-4  flex-row  justify-between max-lg:pt-5 ">
        <div className="w-max flex flex-col lg:flex-row gap-5 ">
          <MultipleRoundSelector
            selectedTab={tabSelected}
            setSelectedTab={setTabSelected}
            options={tabs}
          />
          {tabSelected !== tabs[3] && (
            <MultipleRoundSelector
              selectedTab={valueView}
              setSelectedTab={setValueView}
              options={valueSelector}
            />
          )}
        </div>
        <div className="flex flex-col lg:flex-row gap-2 md:mr-3  ">
          <FormControlLabel
            value="Goal"
            control={<Checkbox />}
            label="Goal"
            labelPlacement="end"
            onChange={() => setGoalCheckbox(!goalCheckbox)}
            checked={goalCheckbox}
          />
          <FormControlLabel
            value="Percentage To Goal"
            control={<Checkbox />}
            label="Percentage To Goal"
            labelPlacement="end"
            onChange={() =>
              setPercentageToGoalCheckBox(!percentageToGoalCheckBox)
            }
            checked={percentageToGoalCheckBox}
          />
          <ReportSaveAsButton
            saveAsCSV={() =>
              saveAsCSV(
                tempDataForCSV["service_advisor_table"],
                "ranking_report.csv"
              )
            }
            saveAsPDF={() =>
              saveAsPDF("#ranking_report_table", "ranking_report_table.pdf")
            }
          />
        </div>
      </div>

      {loading && <MainLoader />}
      {!loading && rankingReportData.length < 1 && <NoDataFound />}
      {!loading && rankingReportData.length > 0 && (
        <div className="py-4  pr-2 md:pr-5 overflow-y-auto">
          <div className="lg shadow-lg">
            {tabSelected === tabs[0] && (
              <RankingReportBaseTable
                tabText={tabs[0]}
                goal={goalCheckbox}
                percentageToGoal={percentageToGoalCheckBox}
                valueType={valueView}
                data={rankingReportData}
              />
            )}
            {tabSelected === tabs[1] && (
              <RankingReportBaseTable
                tabText={tabs[1]}
                goal={goalCheckbox}
                percentageToGoal={percentageToGoalCheckBox}
                valueType={valueView}
                data={rankingReportData}
              />
            )}
            {tabSelected === tabs[2] && (
              <RankingReportBaseTable
                tabText={tabs[2]}
                goal={goalCheckbox}
                percentageToGoal={percentageToGoalCheckBox}
                valueType={valueView}
                data={rankingReportData}
              />
            )}

            {tabSelected === tabs[3] && (
              <RankingReportRankingTable
                tabText={tabs[3]}
                goal={goalCheckbox}
                percentageToGoal={percentageToGoalCheckBox}
                valueType={valueView}
                data={rankingReportData}
              />
            )}
          </div>
        </div>
      )}
    </Layout>
  );
}
