import moment from "moment";
import { handleError } from "../utils/utils";

const useFetchRCRData = (
  get_dashboard_aro_rev_cust_data,
  get_dashboard_rev_car_aro_data,
  selectedStartDate,
  selectedEndDate
) => {
  const getDifferenceRCR = (newSum, oldSumA) => {
    let difference = {};
    for (let key in newSum) {
      if (!isNaN(newSum[key]) && !isNaN(oldSumA[key])) {
        difference[key] = oldSumA[key] - newSum[key];
      }
    }
    return difference;
  };
  const gerPercentageRCR = (newSum, oldSumA) => {
    let percentageChange = {};

    for (let key in newSum) {
      if (oldSumA.hasOwnProperty(key)) {
        let change = newSum[key] - oldSumA[key];
        let percentage = (change / newSum[key]) * 100;
        percentageChange[key] = percentage;
      }
    }

    return percentageChange;
  };
  const prepareOldDataRCR = () => {
    let selectedStart = moment(selectedStartDate);
    let selectedEnd = moment(selectedEndDate);

    let oldSumA = {
      ARO: 0,
      ARO_New: 0,
      ARO_Return: 0,
      NewCustRevenue: 0,
      ReturnCustRevenue: 0,
      ReturnCustomer: 0,
      NewCustomer: 0,
      TotalCustomer: 0,
      TotalRevenue: 0,

      MainARO: 0,
      MainCarCount: 0,
      MainRevenue: 0
    };
    // Filter the array based on the date range

    let filteredDataForAdwordsCTRAROCalls =
      get_dashboard_aro_rev_cust_data?.filter((obj) => {
        let currentDate = moment(`${obj.Year}-${obj.MonthNumber}`, "YYYY-MM");
        if (currentDate.isBetween(selectedStart, selectedEnd, null, "[]")) {
          // oldSumA.ARO += obj.ARO || 0;
          // oldSumA.CallandAppts += obj.CallandAppts || 0;
          // oldSumA.CallandApptsNew += obj.CallandApptsNew || 0;
          // oldSumA.ARO_New += obj.ARO_New || 0;
          // oldSumA.ARO_Return += obj.ARO_Return || 0;
          oldSumA.NewCustRevenue += obj.NewCustRevenue || 0;
          oldSumA.ReturnCustRevenue += obj.ReturnCustRevenue || 0;
          oldSumA.ReturnCustomer += obj.ReturnCustomer || 0;

          oldSumA.NewCustomer += obj.NewCustomer || 0;

          oldSumA.TotalCustomer += obj.TotalCustomer || 0;

          oldSumA.TotalRevenue += obj.TotalRevenue || 0;

          return true;
        }
        return false;
      });
    oldSumA.ARO = oldSumA.TotalRevenue / oldSumA.TotalCustomer;
    oldSumA.ARO_New = oldSumA.NewCustRevenue / oldSumA.NewCustomer;
    oldSumA.ARO_Return = oldSumA.ReturnCustRevenue / oldSumA.ReturnCustomer;
    let filteredDataForAdwordsCTRARO = get_dashboard_rev_car_aro_data?.filter(
      (obj) => {
        let currentDate = moment(`${obj.Year}-${obj.MonthNumber}`, "YYYY-MM");

        if (currentDate.isBetween(selectedStart, selectedEnd, null, "[]")) {
          // oldSumA.MainARO += obj.MainARO || 0;
          oldSumA.MainCarCount += obj.MainCarCount || 0;
          oldSumA.MainRevenue += obj.MainRevenue || 0;
          return true;
        }
        return false;
      }
    );

    oldSumA.MainARO = oldSumA.MainRevenue / oldSumA.MainCarCount;
    return oldSumA;
  };

  const filterDataByDate = (data, selectedStart, selectedEnd, key) => {
    return data.reduce((result, dataObj) => {
      let currentDate = moment(
        `${dataObj.Year}-${dataObj.MonthNumber}`,
        "YYYY-MM"
      );
      if (currentDate.isBetween(selectedStart, selectedEnd, null, "[]")) {
        result.push(dataObj[key]);
      }
      return result;
    }, []);
  };

  const getChartsDataRCR = (selectedStart, selectedEnd) => {
    const ARO = filterDataByDate(
      get_dashboard_aro_rev_cust_data,
      selectedStart,
      selectedEnd,
      "ARO"
    );
    const ARO_New = filterDataByDate(
      get_dashboard_aro_rev_cust_data,
      selectedStart,
      selectedEnd,
      "ARO_New"
    );
    const ARO_Return = filterDataByDate(
      get_dashboard_aro_rev_cust_data,
      selectedStart,
      selectedEnd,
      "ARO_Return"
    );
    const NewCustRevenue = filterDataByDate(
      get_dashboard_aro_rev_cust_data,
      selectedStart,
      selectedEnd,
      "NewCustRevenue"
    );
    const ReturnCustRevenue = filterDataByDate(
      get_dashboard_aro_rev_cust_data,
      selectedStart,
      selectedEnd,
      "ReturnCustRevenue"
    );
    const ReturnCustomer = filterDataByDate(
      get_dashboard_aro_rev_cust_data,
      selectedStart,
      selectedEnd,
      "ReturnCustomer"
    );
    const NewCustomer = filterDataByDate(
      get_dashboard_aro_rev_cust_data,
      selectedStart,
      selectedEnd,
      "NewCustomer"
    );
    const TotalCustomer = filterDataByDate(
      get_dashboard_aro_rev_cust_data,
      selectedStart,
      selectedEnd,
      "TotalCustomer"
    );
    const TotalRevenue = filterDataByDate(
      get_dashboard_aro_rev_cust_data,
      selectedStart,
      selectedEnd,
      "TotalRevenue"
    );

    const MainCarCount = filterDataByDate(
      get_dashboard_rev_car_aro_data,
      selectedStart,
      selectedEnd,
      "MainCarCount"
    );
    const MainRevenue = filterDataByDate(
      get_dashboard_rev_car_aro_data,
      selectedStart,
      selectedEnd,
      "MainRevenue"
    );
    const MainARO = filterDataByDate(
      get_dashboard_rev_car_aro_data,
      selectedStart,
      selectedEnd,
      "MainARO"
    );

    const monthsList = filterDataByDate(
      get_dashboard_rev_car_aro_data,
      selectedStart,
      selectedEnd,
      "Month"
    );

    return {
      monthsList,
      MainARO,
      MainRevenue,
      MainCarCount,
      ARO,
      ARO_New,
      ARO_Return,
      NewCustRevenue,
      ReturnCustRevenue,
      ReturnCustomer,
      NewCustomer,
      TotalCustomer,
      TotalRevenue
    };
  };

  const prepareNewDataRCR = (newStartDate, newEndDate) => {
    let newStartD = moment(newStartDate);
    let newEndD = moment(newEndDate);

    let newSum = {
      ARO: 0,
      ARO_New: 0,
      ARO_Return: 0,
      NewCustRevenue: 0,
      ReturnCustRevenue: 0,
      ReturnCustomer: 0,
      NewCustomer: 0,
      TotalCustomer: 0,
      TotalRevenue: 0,

      MainARO: 0,
      MainCarCount: 0,
      MainRevenue: 0
    };
    // Filter the array based on the date range

    let filteredDataForAdwordsCTRAROCalls =
      get_dashboard_aro_rev_cust_data?.filter((obj) => {
        let currentDate = moment(`${obj.Year}-${obj.MonthNumber}`, "YYYY-MM");
        if (currentDate.isBetween(newStartD, newEndD, null, "[]")) {
          newSum.ARO += obj.ARO || 0;
          // newSum.CallandAppts += obj.CallandAppts || 0;
          // newSum.CallandApptsNew += obj.CallandApptsNew || 0;
          newSum.ARO_New += obj.ARO_New || 0;
          newSum.ARO_Return += obj.ARO_Return || 0;
          newSum.NewCustRevenue += obj.NewCustRevenue || 0;
          newSum.ReturnCustRevenue += obj.ReturnCustRevenue || 0;
          newSum.ReturnCustomer += obj.ReturnCustomer || 0;
          newSum.NewCustomer += obj.NewCustomer || 0;

          newSum.TotalCustomer += obj.TotalCustomer || 0;

          newSum.TotalRevenue += obj.TotalRevenue || 0;

          return true;
        }
        return false;
      });

    newSum.ARO = newSum.TotalRevenue / newSum.TotalCustomer;
    newSum.ARO_New = newSum.NewCustRevenue / newSum.NewCustomer;
    newSum.ARO_Return = newSum.ReturnCustRevenue / newSum.ReturnCustomer;

    let filteredDataForAdwordsCTRARO = get_dashboard_rev_car_aro_data?.filter(
      (obj) => {
        let currentDate = moment(`${obj.Year}-${obj.MonthNumber}`, "YYYY-MM");

        if (currentDate.isBetween(newStartD, newEndD, null, "[]")) {
          // newSum.MainARO += obj.MainARO || 0;
          newSum.MainCarCount += obj.MainCarCount || 0;
          newSum.MainRevenue += obj.MainRevenue || 0;
          return true;
        }
        return false;
      }
    );

    newSum.MainARO = newSum.MainRevenue / newSum.MainCarCount;

    return newSum;
  };

  // return displayLabel;

  return {
    prepareOldDataRCR,
    prepareNewDataRCR,
    getChartsDataRCR,
    gerPercentageRCR,
    getDifferenceRCR
  };
};

export default useFetchRCRData;
