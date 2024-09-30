import moment from "moment";
import { convertToFloat, handleError } from "../utils/utils";

const useFetchRepairPalData = (
  // /repairpal_referal_revenue_tow
  referal_revenue_data,
  // /repairpal_investment
  repairpal_investment_data,
  selectedStartDate,
  selectedEndDate
) => {
  function divideArrays(array1, array2) {
    const resultArray = [];

    for (let i = 0; i < array1.length; i++) {
      const dividend = array1[i];
      const divisor = array2[i];

      if (divisor === 0) {
        resultArray.push(0);
      } else {
        resultArray.push(dividend / divisor);
      }
    }

    return resultArray;
  }
  const getDifferenceRepairPal = (newSum, oldSumA) => {
    let difference = {};

    for (let key in newSum) {
      if (!isNaN(newSum[key]) && !isNaN(oldSumA[key])) {
        difference[key] = oldSumA[key] - newSum[key];
      }
    }
    return difference;
  };

  const gerPercentageRepairPal = (newSum, oldSumA) => {
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
  const prepareOldDataRepairPal = (selectedStart, selectedEnd) => {
    let oldSumA = {
      ARO: 0,
      CallsAndAppts: 0,
      ConversionRate: 0,
      Customers: 0,
      Tows: 0,
      Referrals: 0,
      TotalRevenue: 0,
      Investment: 0,
      TowRevenue: 0,
      RefferralRevenue: 0,
      AROForReferral: 0,
      AROForCallsAndAppts: 0,
      AROForTows: 0,
      CallApptsRevenue: 0,
    };

    const sumAN = repairpal_investment_data.reduce(
      (accumulator, currentValue) => {
        let currentDate = moment(
          `${currentValue.Year}-${currentValue.MonthNumber}`,
          "YYYY-MM"
        );
        if (currentDate.isBetween(selectedStart, selectedEnd, null, "[]")) {
          accumulator.Investment += parseFloat(
            convertToFloat(currentValue.Investment)
          );
          accumulator.TowRevenue += parseFloat(
            convertToFloat(currentValue.TowRevenue)
          );
          accumulator.RefferralRevenue += parseFloat(
            convertToFloat(currentValue.RefferralRevenue)
          );
          accumulator.CallApptsRevenue += parseFloat(
            convertToFloat(currentValue.CallApptsRevenue)
          );
          accumulator.ROI += parseFloat(convertToFloat(currentValue.ROI));
          accumulator.TotalRevenue += parseFloat(
            convertToFloat(currentValue.TotalRevenue)
          );
        }
        return accumulator;
      },
      {
        Investment: 0,
        ROI: 0,
        TowRevenue: 0,
        RefferralRevenue: 0,
        CallApptsRevenue: 0,
        TotalRevenue: 0,
      }
    );

    let CountMonth = 0;

    const sumA = referal_revenue_data.reduce(
      (accumulator, currentValue) => {
        let currentDate = moment(
          `${currentValue.Year}-${currentValue.MonthNumber}`,
          "YYYY-MM"
        );
        if (currentDate.isBetween(selectedStart, selectedEnd, null, "[]")) {
          accumulator.ARO += parseFloat(convertToFloat(currentValue.ARO));
          accumulator.CallsAndAppts += parseFloat(
            convertToFloat(currentValue.CallsAndAppts)
          );
          accumulator.ConversionRate += parseFloat(
            convertToFloat(currentValue.ConversionRate)
          );
          accumulator.Customers += parseFloat(
            convertToFloat(currentValue.Customers)
          );
          accumulator.Tows += parseFloat(convertToFloat(currentValue.Tows));
          accumulator.Referrals += parseFloat(
            convertToFloat(currentValue.Referrals)
          );
          CountMonth++;
        }
        return accumulator;
      },
      {
        ARO: 0,
        CallsAndAppts: 0,
        ConversionRate: 0,
        Customers: 0,
        Tows: 0,
        Referrals: 0,
      }
    );

    oldSumA.TowRevenue = parseFloat(sumAN.TowRevenue.toFixed(2));
    oldSumA.RefferralRevenue = parseFloat(sumAN.RefferralRevenue.toFixed(2));
    oldSumA.CallApptsRevenue = parseFloat(sumAN.CallApptsRevenue.toFixed(2));
    oldSumA.Investment = parseFloat(sumAN.Investment.toFixed(2));
    oldSumA.ROI = parseFloat(sumAN.ROI.toFixed(2));
    oldSumA.TotalRevenue = parseFloat(sumAN.TotalRevenue.toFixed(2));
    oldSumA.CallsAndAppts = parseFloat(sumA.CallsAndAppts.toFixed(2));
    oldSumA.ConversionRate = parseFloat(
      sumA.ConversionRate / CountMonth
    ).toFixed(2);

    oldSumA.Customers = parseFloat(sumA.Customers.toFixed(2));

    oldSumA.Tows = parseFloat(sumA.Tows.toFixed(2));
    oldSumA.Referrals = parseFloat(sumA.Referrals.toFixed(2));
    oldSumA.ARO =
      oldSumA.TotalRevenue /
      (parseInt(oldSumA.Customers) +
        parseInt(oldSumA.Tows) +
        parseInt(oldSumA.Referrals) +
        parseInt(oldSumA.CallsAndAppts));

    oldSumA.AROForCallsAndAppts =
      oldSumA.CallApptsRevenue / oldSumA.CallsAndAppts;

    oldSumA.AROForTows = oldSumA.TowRevenue / oldSumA.Tows;

    oldSumA.AROForReferral = oldSumA.RefferralRevenue / oldSumA.Referrals;

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

  const getChartsDataRepairPal = (selectedStart, selectedEnd) => {
    const monthsList = filterDataByDate(
      referal_revenue_data,
      selectedStart,
      selectedEnd,
      "reportingmonth"
    );

    const TowRevenue = filterDataByDate(
      repairpal_investment_data,
      selectedStart,
      selectedEnd,
      "TowRevenue"
    );

    const CallApptsRevenue = filterDataByDate(
      repairpal_investment_data,
      selectedStart,
      selectedEnd,
      "CallApptsRevenue"
    );

    const RefferralRevenue = filterDataByDate(
      repairpal_investment_data,
      selectedStart,
      selectedEnd,
      "RefferralRevenue"
    );
    const ROI = filterDataByDate(
      repairpal_investment_data,
      selectedStart,
      selectedEnd,
      "ROI"
    );

    const investments = filterDataByDate(
      repairpal_investment_data,
      selectedStart,
      selectedEnd,
      "Investment"
    );

    const TotalRevenue = filterDataByDate(
      repairpal_investment_data,
      selectedStart,
      selectedEnd,
      "TotalRevenue"
    );

    const CallsAndAppts = filterDataByDate(
      referal_revenue_data,
      selectedStart,
      selectedEnd,
      "CallsAndAppts"
    );

    const ConversionRate = filterDataByDate(
      referal_revenue_data,
      selectedStart,
      selectedEnd,
      "ConversionRate"
    );

    const ARO = filterDataByDate(
      referal_revenue_data,
      selectedStart,
      selectedEnd,
      "ARO"
    );

    const DataCustomers = filterDataByDate(
      referal_revenue_data,
      selectedStart,
      selectedEnd,
      "Customers"
    );

    const DataTows = filterDataByDate(
      referal_revenue_data,
      selectedStart,
      selectedEnd,
      "Tows"
    );

    const DataReferrals = filterDataByDate(
      referal_revenue_data,
      selectedStart,
      selectedEnd,
      "Referrals"
    );

    let referralsDownChartsData = {
      TotalRevenue: RefferralRevenue,
      DataReferrals,
      monthsList,
      ARO: divideArrays(RefferralRevenue, DataReferrals),
    };

    let towsDropDownChartsData = {
      monthsList,
      DataTows,
      TotalRevenue: TowRevenue,
      ARO: divideArrays(TowRevenue, DataTows),
    };

    let chartData = {
      TowRevenue,
      RefferralRevenue,
      CallApptsRevenue,
      CallsAndAppts,
      TotalRevenue,
      investments,
      monthsList,
      ROI,
      ARO,
      DataCustomers,
      DataTows,
      DataReferrals,
    };

    let Aro = divideArrays(CallApptsRevenue, CallsAndAppts);

    let callAndAppointmentDropDownChartsData = {
      DataCustomers,
      ConversionRate,
      Aro,
      TotalRevenue: CallApptsRevenue,
      CallsAndAppts,
      monthsList,
    };

    return {
      referralsDownChartsData,
      towsDropDownChartsData,
      chartData,
      callAndAppointmentDropDownChartsData,
    };
  };

  const prepareNewDataRepairPal = (newStartDate, newEndDate) => {
    let newStartD = moment(newStartDate);
    let newEndD = moment(newEndDate);
    let newSum = {
      ARO: 0,
      AROForReferral: 0,
      AROForTows: 0,

      AROForCallsAndAppts: 0,
      CallsAndAppts: 0,
      ConversionRate: 0,
      Customers: 0,
      Tows: 0,
      Referrals: 0,
      TotalRevenue: 0,
      TowRevenue: 0,
      RefferralRevenue: 0,
      CallApptsRevenue: 0,
      Investment: 0,
    };

    const sumANew = repairpal_investment_data.reduce(
      (accumulator, currentValue) => {
        let currentDate = moment(
          `${currentValue.Year}-${currentValue.MonthNumber}`,
          "YYYY-MM"
        );
        if (currentDate.isBetween(newStartD, newEndD, null, "[]")) {
          accumulator.Investment += parseFloat(
            convertToFloat(currentValue.Investment)
          );
          accumulator.TowRevenue += parseFloat(
            convertToFloat(currentValue.TowRevenue)
          );
          accumulator.RefferralRevenue += parseFloat(
            convertToFloat(currentValue.RefferralRevenue)
          );
          accumulator.CallApptsRevenue += parseFloat(
            convertToFloat(currentValue.CallApptsRevenue)
          );
          accumulator.ROI += parseFloat(convertToFloat(currentValue.ROI));
          accumulator.TotalRevenue += parseFloat(
            convertToFloat(currentValue.TotalRevenue)
          );
        }

        return accumulator;
      },
      {
        Investment: 0,
        ROI: 0,
        TowRevenue: 0,
        RefferralRevenue: 0,
        CallApptsRevenue: 0,
        TotalRevenue: 0,
      }
    );

    // Filter the array based on the date range
    newSum.TowRevenue = parseFloat(sumANew.TowRevenue.toFixed(2));
    newSum.RefferralRevenue = parseFloat(sumANew.RefferralRevenue.toFixed(2));
    newSum.CallApptsRevenue = parseFloat(sumANew.CallApptsRevenue.toFixed(2));

    let countMonth = 0;

    const sumAA = referal_revenue_data.reduce(
      (accumulator, currentValue) => {
        let currentDate = moment(
          `${currentValue.Year}-${currentValue.MonthNumber}`,
          "YYYY-MM"
        );
        if (currentDate.isBetween(newStartD, newEndD, null, "[]")) {
          accumulator.ARO += parseFloat(convertToFloat(currentValue.ARO));
          accumulator.CallsAndAppts += parseFloat(
            convertToFloat(currentValue.CallsAndAppts)
          );
          accumulator.ConversionRate += parseFloat(
            convertToFloat(currentValue.ConversionRate)
          );
          accumulator.Customers += parseFloat(
            convertToFloat(currentValue.Customers)
          );
          accumulator.Tows += parseFloat(convertToFloat(currentValue.Tows));
          accumulator.Referrals += parseFloat(
            convertToFloat(currentValue.Referrals)
          );
          countMonth++;
        }
        return accumulator;
      },
      {
        ARO: 0,
        CallsAndAppts: 0,
        ConversionRate: 0,
        Customers: 0,
        Tows: 0,
        Referrals: 0,
      }
    );

    newSum.Investment = parseFloat(sumANew.Investment.toFixed(2));
    newSum.ROI = parseFloat(sumANew.ROI.toFixed(2));
    newSum.TotalRevenue = parseFloat(sumANew.TotalRevenue.toFixed(2));
    newSum.CallsAndAppts = parseFloat(sumAA.CallsAndAppts.toFixed(2));
    newSum.ConversionRate = parseFloat(
      sumAA.ConversionRate / countMonth
    ).toFixed(2);

    newSum.Customers = parseFloat(sumAA.Customers.toFixed(2));
    newSum.Tows = parseFloat(sumAA.Tows.toFixed(2));
    newSum.ARO =
      newSum.TotalRevenue /
      (newSum.Customers +
        newSum.Tows +
        newSum.Referrals +
        newSum.CallsAndAppts);

    newSum.Referrals = parseFloat(sumAA.Referrals.toFixed(2));

    newSum.AROForCallsAndAppts = newSum.CallApptsRevenue / newSum.CallsAndAppts;
    newSum.AROForTows = newSum.TowRevenue / newSum.Tows;
    newSum.AROForReferral = newSum.RefferralRevenue / newSum.Referrals;
    return newSum;
  };

  const transformDataForDashboard = (keys, defaultData) => {
    return keys.reduce(
      (result, { data = defaultData, dataKey, resultKey = dataKey }) => {
        // If data is undefined or an empty array, return the current result
        if (!data || data.length === 0) {
          return result;
        }

        data.forEach((dataObj, index) => {
          let item = result[index];
          if (!item) {
            item = { name: dataObj.Month }; // Add the 'name' key with the month name
            result.push(item);
          }
          if (typeof dataObj[dataKey] !== "number") {
            dataObj[dataKey] = Number(dataObj[dataKey]);
          }
          item[resultKey] = !isNaN(parseFloat(dataObj[dataKey].toFixed(2)))
            ? parseFloat(dataObj[dataKey].toFixed(2))
            : null;
        });

        return result;
      },
      []
    );
  };

  const getRepairpalChartsDataForDashboard = () => {
    const Investment = transformDataForDashboard([
      {
        data: repairpal_investment_data,
        dataKey: "Investment",
      },
    ]);
    const allARO = transformDataForDashboard([
      {
        data: referal_revenue_data,
        dataKey: "ARO",
        resultKey: "Total",
      },
      // {
      //   data: referal_revenue_data,
      //   dataKey: "NewARO",
      //   resultKey: "New",
      // },
      // {
      //   data: referal_revenue_data,
      //   dataKey: "returningARO",
      //   resultKey: "Returning",
      // },
    ]);

    const allRevenue = transformDataForDashboard([
      {
        data: repairpal_investment_data,
        dataKey: "TotalRevenue",
        resultKey: "Total",
      },
      // {
      //   data: repairpal_investment_data,
      //   dataKey: "ReferralRevenue",
      //   resultKey: "New",
      // },
      // {
      //   data: repairpal_investment_data,
      //   dataKey: "CallApptsRevenue",
      //   resultKey: "Returning",
      // },
    ]);

    const allCustomers = transformDataForDashboard([
      {
        data: referal_revenue_data,
        dataKey: "Customers",
        resultKey: "Total",
      },
      // {
      //   data: get_yelp_customer_call_appts_data,
      //   dataKey: "CustomersNew",
      //   resultKey: "New",
      // },
      // {
      //   data: get_yelp_customer_call_appts_data,
      //   dataKey: "ReturningCustomers",
      //   resultKey: "Returning",
      // },
    ]);

    const refferals = transformDataForDashboard([
      {
        data: referal_revenue_data,
        dataKey: "Referrals",
        resultKey: "Referrals",
      },
    ]);

    const tows = transformDataForDashboard([
      {
        data: referal_revenue_data,
        dataKey: "Tows",
        resultKey: "Tows",
      },
    ]);

    const Calls = transformDataForDashboard([
      {
        data: referal_revenue_data,
        dataKey: "CallsAndAppts",
        resultKey: "Calls",
      },
    ]);

    return {
      Investment,
      allARO,
      allRevenue,
      allCustomers,
      refferals,
      tows,
      Calls,
    };
  };

  return {
    prepareOldDataRepairPal,
    prepareNewDataRepairPal,
    getChartsDataRepairPal,
    gerPercentageRepairPal,
    getDifferenceRepairPal,
    getRepairpalChartsDataForDashboard,
  };
};

export default useFetchRepairPalData;
