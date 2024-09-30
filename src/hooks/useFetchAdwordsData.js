import { useEffect, useState } from "react";
import {
  getRepairpalRevenueRequest,
  getYelpCustomerCallApptsRequest,
  getYelpCostPerLeadRequest,
  getYelpConversationRateRequest,
  getYelpCTRPerClicksRequest,
} from "../pages/yelp/yelp.Container"; //
import moment from "moment";
import { handleError } from "../utils/utils";

const useFetchAdwordsData = (
  get_adwords_ctr_aro_calls_data,
  get_adwords_ctr_aro_calls_roi_data,
  get_adwords_ctr_invest_data,
  selectedStartDate,
  selectedEndDate
) => {
  const getDifference = (newSum, oldSumA) => {
    let difference = {};

    for (let key in newSum) {
      if (!isNaN(newSum[key]) && !isNaN(oldSumA[key])) {
        difference[key] = oldSumA[key] - newSum[key];
      }
    }
    return difference;
  };
  const gerPercentage = (newSum, oldSumA) => {
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
  const prepareOldData = () => {
    let selectedStart = moment(selectedStartDate);
    let selectedEnd = moment(selectedEndDate);

    let oldSumA = {
      ClickThroughRate: 0,
      Clicks: 0,
      CostPerClick: 0,
      CostPerLead: 0,
      Impressions: 0,
      Investment: 0,
      NewConversionRate: 0,
      ROI: 0,
      ROINew: 0,
      ConversionRate: 0,

      ARO: 0,
      CallandAppts: 0,
      CallandApptsNew: 0,
      CustomersNew: 0,
      CustomersTotal: 0,
      LocationName: 0,
      NewARO: 0,
      ReturningARO: 0,
      ReturningCustomers: 0,
      ReturningRevenue: 0,
      RevenueNewCustomer: 0,
      RevenueTotal: 0,
      PageVisitToLead: 0,
      CallandApptsReturn: 0,
    };
    // Filter the array based on the date range

    let filteredDataForAdwordsCTRAROCalls =
      get_adwords_ctr_aro_calls_data?.filter((obj) => {
        let currentDate = moment(`${obj.Year}-${obj.MonthNumber}`, "YYYY-MM");
        if (currentDate.isBetween(selectedStart, selectedEnd, null, "[]")) {
          // oldSumA.CallandAppts += obj.CallandAppts || 0;
          // oldSumA.CallandApptsNew += obj.CallandApptsNew || 0;
          oldSumA.CustomersNew += obj.CustomersNew || 0;
          oldSumA.CustomersTotal += obj.CustomersTotal || 0;
          oldSumA.LocationName += obj.LocationName || 0;
          // oldSumA.NewARO += obj.NewARO || 0;
          // oldSumA.ReturningARO += obj.ReturningARO || 0;
          oldSumA.ReturningCustomers += obj.ReturningCustomers || 0;
          oldSumA.ReturningRevenue += obj.ReturningRevenue || 0;
          oldSumA.RevenueNewCustomer += obj.RevenueNewCustomer || 0;
          oldSumA.RevenueTotal += obj.RevenueTotal || 0;
          return true;
        }
        return false;
      });

    oldSumA.ARO = oldSumA.RevenueTotal / oldSumA.CustomersTotal;
    oldSumA.ReturningARO =
      oldSumA.ReturningRevenue / oldSumA.ReturningCustomers;
    oldSumA.NewARO = oldSumA.RevenueNewCustomer / oldSumA.CustomersNew;

    let countMonthCon = 0;
    let filteredDataForAdwordsCTRARO =
      get_adwords_ctr_aro_calls_roi_data?.filter((obj) => {
        let currentDate = moment(`${obj.Year}-${obj.MonthNumber}`, "YYYY-MM");

        if (currentDate.isBetween(selectedStart, selectedEnd, null, "[]")) {
          oldSumA.CallandAppts += obj.CallandAppts || 0;
          oldSumA.CallandApptsNew += obj.CallandApptsNew || 0;
          oldSumA.NewConversionRate += obj.NewConversionRate || 0;
          oldSumA.ROI += obj.ROI || 0;
          oldSumA.CallandApptsReturn += obj.CallandApptsReturn || 0;
          oldSumA.ROINew += obj.ROINew || 0;
          oldSumA.CostPerLead += obj.CostPerLead || 0;

          oldSumA.ConversionRate += obj.ConversionRate || 0;
          countMonthCon++;
          return true;
        }
        return false;
      });

    oldSumA.NewConversionRate = oldSumA.NewConversionRate / countMonthCon;
    oldSumA.ConversionRate = oldSumA.ConversionRate / countMonthCon;

    let countMonth = 0;

    let filteredDataForAdwordsCTR = get_adwords_ctr_invest_data.filter(
      (obj) => {
        let currentDate = moment(`${obj.Year}-${obj.MonthNumber}`, "YYYY-MM");
        if (currentDate.isBetween(selectedStart, selectedEnd, null, "[]")) {
          oldSumA.ClickThroughRate += obj.ClickThroughRate || 0;
          oldSumA.Clicks += obj.Clicks || 0;
          oldSumA.PageVisitToLead += obj.PageVisitToLead || 0;

          oldSumA.CostPerClick += obj.CostPerClick || 0;
          oldSumA.Impressions += obj.Impressions || 0;
          oldSumA.Investment += obj.Investment || 0;
          oldSumA.CallandAppts += obj.CallandAppts || 0;
          oldSumA.CallandApptsNew += obj.CallandApptsNew || 0;
          countMonth++;
          return true;
        }
        return false;
      }
    );
    oldSumA.PageVisitToLead = oldSumA.PageVisitToLead / countMonth;

    return oldSumA;
  };
  const filterDataByDate = (data, selectedStart, selectedEnd, key) => {
    return data.reduce((result, dataObj) => {
      let currentDate = moment(
        `${dataObj.Year}-${dataObj.MonthNumber}`,
        "YYYY-MM"
      );
      console.log(currentDate, selectedStart, selectedEnd, key, "currentDate");
      if (currentDate.isBetween(selectedStart, selectedEnd, null, "[]")) {
        result.push(dataObj[key]);
      }
      return result;
    }, []);
  };

  const getChartsData = (selectedStart, selectedEnd) => {
    const Clicks = filterDataByDate(
      get_adwords_ctr_invest_data,
      selectedStart,
      selectedEnd,
      "Clicks"
    );
    const ClickThroughRate = filterDataByDate(
      get_adwords_ctr_invest_data,
      selectedStart,
      selectedEnd,
      "ClickThroughRate"
    );

    const CostPerClick = filterDataByDate(
      get_adwords_ctr_invest_data,
      selectedStart,
      selectedEnd,
      "CostPerClick"
    );
    const Impressions = filterDataByDate(
      get_adwords_ctr_invest_data,
      selectedStart,
      selectedEnd,
      "Impressions"
    );

    const CostPerLead = filterDataByDate(
      get_adwords_ctr_aro_calls_roi_data,
      selectedStart,
      selectedEnd,
      "CostPerLead"
    );

    const Investment = filterDataByDate(
      get_adwords_ctr_invest_data,
      selectedStart,
      selectedEnd,
      "Investment"
    );

    const ROI = filterDataByDate(
      get_adwords_ctr_aro_calls_roi_data,
      selectedStart,
      selectedEnd,
      "ROI"
    );

    const ROINew = filterDataByDate(
      get_adwords_ctr_aro_calls_roi_data,
      selectedStart,
      selectedEnd,
      "ROINew"
    );

    const ConversionRateTotal = filterDataByDate(
      get_adwords_ctr_aro_calls_roi_data,
      selectedStart,
      selectedEnd,
      "ConversionRate"
    );

    const NewConversionRate = filterDataByDate(
      get_adwords_ctr_aro_calls_roi_data,
      selectedStart,
      selectedEnd,
      "NewConversionRate"
    );

    const ReturningCustomers = filterDataByDate(
      get_adwords_ctr_aro_calls_data,
      selectedStart,
      selectedEnd,
      "ReturningCustomers"
    );

    const CustomersNew = filterDataByDate(
      get_adwords_ctr_aro_calls_data,
      selectedStart,
      selectedEnd,
      "CustomersNew"
    );

    const CustomersTotal = filterDataByDate(
      get_adwords_ctr_aro_calls_data,
      selectedStart,
      selectedEnd,
      "CustomersTotal"
    );

    const Calls = filterDataByDate(
      get_adwords_ctr_aro_calls_data,
      selectedStart,
      selectedEnd,
      "Calls"
    );

    const Appts = filterDataByDate(
      get_adwords_ctr_aro_calls_data,
      selectedStart,
      selectedEnd,
      "Appts"
    );

    const ReturningRevenue = filterDataByDate(
      get_adwords_ctr_aro_calls_data,
      selectedStart,
      selectedEnd,
      "ReturningRevenue"
    );

    const RevenueNewCustomer = filterDataByDate(
      get_adwords_ctr_aro_calls_data,
      selectedStart,
      selectedEnd,
      "RevenueNewCustomer"
    );
    const NewARO = filterDataByDate(
      get_adwords_ctr_aro_calls_data,
      selectedStart,
      selectedEnd,
      "NewARO"
    );
    const ReturningARO = filterDataByDate(
      get_adwords_ctr_aro_calls_data,
      selectedStart,
      selectedEnd,
      "ReturningARO"
    );
    const monthsList = filterDataByDate(
      get_adwords_ctr_invest_data,
      selectedStart,
      selectedEnd,
      "Month"
    );

    const PageVisitToLead = filterDataByDate(
      get_adwords_ctr_invest_data,
      selectedStart,
      selectedEnd,
      "PageVisitToLead"
    );

    return {
      ReturningCustomers,
      PageVisitToLead,
      ReturningARO,
      NewARO,
      monthsList,
      RevenueNewCustomer,
      ReturningRevenue,
      Calls,
      Appts,
      Clicks,
      ClickThroughRate,
      CostPerClick,
      Impressions,
      CostPerLead,
      Investment,
      ROI,
      ROINew,
      NewConversionRate,
      ConversionRateTotal,
      CustomersTotal,
      CustomersNew,
    };
  };

  const prepareNewData = (newStartDate, newEndDate) => {
    let newStartD = moment(newStartDate);
    let newEndD = moment(newEndDate);
    let newSum = {
      ClickThroughRate: 0,
      Clicks: 0,
      CostPerClick: 0,
      CostPerLead: 0,
      Impressions: 0,
      Investment: 0,
      NewConversionRate: 0,
      PageVisitToLead: 0,
      ROI: 0,
      ROINew: 0,
      ConversionRate: 0,
      ARO: 0,
      CallandAppts: 0,
      CallandApptsNew: 0,
      CustomersNew: 0,
      CustomersTotal: 0,
      LocationName: 0,
      NewARO: 0,
      ReturningARO: 0,
      ReturningCustomers: 0,
      ReturningRevenue: 0,
      RevenueNewCustomer: 0,
      CallandApptsReturn: 0,
      RevenueTotal: 0,
    };
    let filteredDataForAdwordsCTRAROCalls =
      get_adwords_ctr_aro_calls_data?.filter((obj) => {
        let currentDate = moment(`${obj.Year}-${obj.MonthNumber}`, "YYYY-MM");
        if (currentDate.isBetween(newStartD, newEndD, null, "[]")) {
          newSum.CustomersNew += obj.CustomersNew || 0;
          newSum.CustomersTotal += obj.CustomersTotal || 0;
          newSum.LocationName += obj.LocationName || 0;

          newSum.ReturningCustomers += obj.ReturningCustomers || 0;
          newSum.ReturningRevenue += obj.ReturningRevenue || 0;
          newSum.RevenueNewCustomer += obj.RevenueNewCustomer || 0;
          newSum.RevenueTotal += obj.RevenueTotal || 0;
          return true;
        }
        return false;
      });

    newSum.ARO = newSum.RevenueTotal / newSum.CustomersTotal;
    newSum.ReturningARO = newSum.ReturningRevenue / newSum.ReturningCustomers;
    newSum.NewARO = newSum.RevenueNewCustomer / newSum.CustomersNew;

    let filteredDataNew = get_adwords_ctr_invest_data.filter((obj) => {
      let currentDate = moment(`${obj.Year}-${obj.MonthNumber}`, "YYYY-MM");
      if (currentDate.isBetween(newStartD, newEndD, null, "[]")) {
        newSum.ClickThroughRate += obj.ClickThroughRate || 0;
        newSum.Clicks += obj.Clicks || 0;
        newSum.CostPerClick += obj.CostPerClick || 0;
        newSum.Impressions += obj.Impressions || 0;
        newSum.Investment += obj.Investment || 0;
        newSum.PageVisitToLead += obj.PageVisitToLead || 0;

        return true;
      }
      return false;
    });
    let CountMonth = 0;

    let filteredDataForAdwordsCTRARONew =
      get_adwords_ctr_aro_calls_roi_data.filter((obj) => {
        let currentDate = moment(`${obj.Year}-${obj.MonthNumber}`, "YYYY-MM");
        if (currentDate.isBetween(newStartD, newEndD, null, "[]")) {
          newSum.NewConversionRate += obj.NewConversionRate || 0;
          newSum.CostPerLead += obj.CostPerLead || 0;

          newSum.ROI += obj.ROI || 0;
          newSum.CallandApptsReturn += obj.CallandApptsReturn || 0;
          newSum.ROINew += obj.ROINew || 0;
          newSum.ConversionRate += obj.ConversionRate || 0;
          newSum.CallandAppts += obj.CallandAppts || 0;
          newSum.CallandApptsNew += obj.CallandApptsNew || 0;
          CountMonth++;
          return true;
        }
        return false;
      });
    newSum.NewConversionRate = newSum.NewConversionRate / CountMonth;

    newSum.ConversionRate = newSum.ConversionRate / CountMonth;

    let filteredDataForAdwordsCTRAROCallsNew =
      get_adwords_ctr_aro_calls_data.filter((obj) => {
        let currentDate = moment(`${obj.Year}-${obj.MonthNumber}`, "YYYY-MM");
        if (currentDate.isBetween(newStartD, newEndD, null, "[]")) {
          newSum.ARO += obj.ARO || 0;

          newSum.CustomersTotal += obj.CustomersTotal || 0;
          newSum.LocationName += obj.LocationName || 0;
          newSum.NewARO += obj.NewARO || 0;
          newSum.ReturningARO += obj.ReturningARO || 0;
          newSum.ReturningCustomers += obj.ReturningCustomers || 0;
          newSum.ReturningRevenue += obj.ReturningRevenue || 0;
          newSum.RevenueNewCustomer += obj.RevenueNewCustomer || 0;
          newSum.RevenueTotal += obj.RevenueTotal || 0;
          return true;
        }
        return false;
      });
    return newSum;
  };

  // const filterDataByDateForDashboard = (
  //   data,
  //   selectedStart,
  //   selectedEnd,
  //   keys
  // ) => {
  //   // If keys is not an array, convert it to an array with one element
  //   if (!Array.isArray(keys)) {
  //     keys = [keys];
  //   }

  //   return data.reduce((result, dataObj) => {
  //     let currentDate = moment(
  //       `${dataObj.Year}-${dataObj.MonthNumber}`,
  //       "YYYY-MM"
  //     );
  //     if (currentDate.isBetween(selectedStart, selectedEnd, null, "[]")) {
  //       let obj = { name: dataObj.Month };
  //       keys.forEach((key) => {
  //         // Check if key is an object (for custom keys)
  //         if (typeof key === "object") {
  //           const dataKey = Object.keys(key)[0];
  //           const resultKey = key[dataKey];
  //           obj[resultKey] = dataObj[dataKey];
  //         } else {
  //           obj[key] = dataObj[key];
  //         }
  //       });
  //       result.push(obj);
  //     }
  //     return result;
  //   }, []);
  // };

  const filterDataByDateForDashboard = (
    selectedStart,
    selectedEnd,
    keys,
    defaultData
  ) => {
    return keys.reduce(
      (result, { data = defaultData, dataKey, resultKey = dataKey }) => {
        data.forEach((dataObj) => {
          let currentDate = moment(
            `${dataObj.Year}-${dataObj.MonthNumber}`,
            "YYYY-MM"
          );
          if (currentDate.isBetween(selectedStart, selectedEnd, null, "[]")) {
            let obj = result.find((o) => o.name === dataObj.Month);
            if (!obj) {
              obj = { name: dataObj.Month };
              result.push(obj);
            }
            obj[resultKey] = dataObj[dataKey];
          }
        });
        return result;
      },
      []
    );
  };

  // Change or remove this when integrating Filter with Dashboard
  // const transformDataForDashboard = (
  //   selectedStart,
  //   selectedEnd,
  //   keys,
  //   defaultData
  // ) => {
  //   return keys.reduce(
  //     (result, { data = defaultData, dataKey, resultKey = dataKey }) => {
  //       data.forEach((dataObj) => {
  //         let item = result.find((item) => item.name === dataObj.Month);
  //         if (!item) {
  //           item = { name: dataObj.Month };
  //           result.push(item);
  //         }
  //         item[resultKey] = dataObj[dataKey];
  //       });
  //       return result;
  //     },
  //     []
  //   );
  // };

  const transformDataForDashboard = (
    selectedStart,
    selectedEnd,
    keys,
    defaultData
  ) => {
    return keys.reduce(
      (result, { data = defaultData, dataKey, resultKey = dataKey }) => {
        data.forEach((dataObj, index) => {
          let item = result[index];
          if (!item) {
            item = { name: dataObj.Month }; // Add the 'name' key with the month name
            result.push(item);
          }
          item[resultKey] = dataObj[dataKey];
        });
        return result;
      },
      []
    );
  };

  const getChartsDataForDashboard = (selectedStart, selectedEnd) => {
    const Investment = transformDataForDashboard(selectedStart, selectedEnd, [
      { data: get_adwords_ctr_invest_data, dataKey: "Investment" },
    ]);

    const allRevenue = transformDataForDashboard(selectedStart, selectedEnd, [
      {
        data: get_adwords_ctr_aro_calls_data,
        dataKey: "RevenueTotal",
        resultKey: "Total",
      },
      {
        data: get_adwords_ctr_aro_calls_data,
        dataKey: "RevenueNewCustomer",
        resultKey: "New",
      },
      {
        data: get_adwords_ctr_aro_calls_data,
        dataKey: "ReturningRevenue",
        resultKey: "Returning",
      },
    ]);

    const allARO = transformDataForDashboard(selectedStart, selectedEnd, [
      {
        data: get_adwords_ctr_aro_calls_data,
        dataKey: "ARO",
        resultKey: "Total",
      },
      {
        data: get_adwords_ctr_aro_calls_data,
        dataKey: "NewARO",
        resultKey: "New",
      },
      {
        data: get_adwords_ctr_aro_calls_data,
        dataKey: "ReturningARO",
        resultKey: "Returning",
      },
    ]);

    const allROI = transformDataForDashboard(selectedStart, selectedEnd, [
      {
        data: get_adwords_ctr_aro_calls_roi_data,
        dataKey: "ROI",
        resultKey: "Total",
      },
      {
        data: get_adwords_ctr_aro_calls_roi_data,
        dataKey: "ROINew",
        resultKey: "New",
      },
    ]);

    const Calls = transformDataForDashboard(selectedStart, selectedEnd, [
      { data: get_adwords_ctr_aro_calls_data, dataKey: "Calls" },
    ]);

    const impressionsAndClicks = transformDataForDashboard(
      selectedStart,
      selectedEnd,
      [
        { data: get_adwords_ctr_invest_data, dataKey: "Impressions" },
        { data: get_adwords_ctr_invest_data, dataKey: "Clicks" },
      ]
    );

    const costPerClickAndCostPerLead = transformDataForDashboard(
      selectedStart,
      selectedEnd,
      [
        {
          data: get_adwords_ctr_invest_data,
          dataKey: "CostPerClick",
          resultKey: "Cost Per Click",
        },
        {
          data: get_adwords_ctr_aro_calls_roi_data,
          dataKey: "CostPerLead",
          resultKey: "Cost Per Lead",
        },
      ]
    );

    const clickThroughRateAndPageVisitToLead = transformDataForDashboard(
      selectedStart,
      selectedEnd,
      [
        {
          data: get_adwords_ctr_invest_data,
          dataKey: "ClickThroughRate",
          resultKey: "Click Through Rate",
        },
        {
          data: get_adwords_ctr_invest_data,
          dataKey: "PageVisitToLead",
          resultKey: "Page Visit To Lead",
        },
      ]
    );

    const allCustomers = transformDataForDashboard(selectedStart, selectedEnd, [
      {
        data: get_adwords_ctr_aro_calls_data,
        dataKey: "CustomersTotal",
        resultKey: "Total",
      },
      {
        data: get_adwords_ctr_aro_calls_data,
        dataKey: "CustomersNew",
        resultKey: "New",
      },
      {
        data: get_adwords_ctr_aro_calls_data,
        dataKey: "ReturningCustomers",
        resultKey: "Returning",
      },
    ]);

    return {
      Investment,
      allRevenue,
      allARO,
      allROI,
      Calls,
      impressionsAndClicks,
      costPerClickAndCostPerLead,
      clickThroughRateAndPageVisitToLead,
      allCustomers,
    };

    // return displayLabel;
  };
  return {
    prepareOldData,
    prepareNewData,
    getChartsData,
    gerPercentage,
    getDifference,
    getChartsDataForDashboard,
  };
};

export default useFetchAdwordsData;
