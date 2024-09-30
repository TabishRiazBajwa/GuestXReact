import { useEffect, useState } from "react";
import {
  getRepairpalRevenueRequest,
  getYelpCustomerCallApptsRequest,
  getYelpCostPerLeadRequest,
  getYelpConversationRateRequest,
  getYelpCTRPerClicksRequest
} from "../pages/yelp/yelp.Container"; //
import moment from "moment";
import { handleError } from "../utils/utils";

const useFetchRepairPalData = (
  selectedStartDate,
  selectedEndDate,
  get_yelp_customer_call_appts_data,
  get_yelp_cost_per_lead_data,
  get_yelp_roi_data,
  yelp_per_clicks_calls_data,
  get_yelp_conversation_rate_data
) => {
  const [cRate, setCRate] = useState();

  function convertToFloat(value) {
    return parseFloat(value).toFixed(2);
  }

  const getDifferenceYelp = (newSum, oldSumA) => {
    let difference = {};

    for (let key in newSum) {
      if (!isNaN(newSum[key]) && !isNaN(oldSumA[key])) {
        difference[key] = handleError(oldSumA[key] - newSum[key]);
      }
    }
    return difference;
  };

  const gerPercentageYelp = (newSum, oldSumA) => {
    let percentageChange = {};

    for (let key in newSum) {
      if (oldSumA.hasOwnProperty(key)) {
        let change = newSum[key] - oldSumA[key];
        let percentage = (change / newSum[key]) * 100;
        percentageChange[key] = Math.abs(percentage);
      }
    }
    return percentageChange;
  };
  const prepareOldDataYelp = () => {
    let selectedStart = moment(selectedStartDate);
    let selectedEnd = moment(selectedEndDate);

    // Filter the array based on the date range
    let filteredData = get_yelp_customer_call_appts_data.filter((obj) => {
      let currentDate = moment(obj.date); // Assuming obj.date contains the date to compare
      return currentDate.isBetween(selectedStart, selectedEnd, null, "[]");
    });
    let oldSumA = {
      // 5
      ARO: 0,
      CallsAppts: 0,
      CallsApptsNew: 0,
      CustomersNew: 0,
      CustomersTotal: 0,
      NewARO: 0,
      ReturningARO: 0,
      ReturningCustomers: 0,
      ReturningRevenue: 0,
      RevenueNewCustomer: 0,
      RevenueTotal: 0,
      // 4
      AdVisits: 0,
      AdVisitsPercent: 0,
      ClickThruRate: 0,
      Clicks: 0,
      CostPerClick: 0,
      Impressions: 0,
      OrganicVisits: 0,
      PageVisits: 0,
      TotalInvestment: 0,
      OrganicVisitsPercent: 0,
      // 3
      ConversionRate: 0,
      NewConversionRate: 0,
      // 2
      CostPerLead: 0,
      ROI: 0,

      PageVisitsLead: 0
    };
    let CountMonth = 0;

    const sumANewPageA = get_yelp_cost_per_lead_data.reduce(
      (accumulator, currentValue) => {
        let currentDate = moment(
          `${currentValue.Year}-${currentValue.MonthNumber}`,
          "YYYY-MM"
        );
        if (currentDate.isBetween(selectedStart, selectedEnd, null, "[]")) {
          accumulator.ROI += parseFloat(convertToFloat(currentValue.ROI));
          accumulator.CostPerLead += parseFloat(
            convertToFloat(currentValue.CostPerLead)
          );

          accumulator.PageVisitsLead += parseFloat(
            convertToFloat(currentValue.PageVisitsLead)
          );
          CountMonth++;
        }

        return accumulator;
      },
      {
        CostPerLead: 0,
        ROI: 0,

        PageVisitsLead: 0
      }
    );

    oldSumA.CostPerLead = parseFloat(
      sumANewPageA.CostPerLead / CountMonth
    ).toFixed(2);
    oldSumA.ROI = parseFloat(sumANewPageA.ROI.toFixed(0));
    oldSumA.PageVisitsLead = parseFloat(sumANewPageA.PageVisitsLead.toFixed(0));

    let ROIFilteredData = get_yelp_roi_data.filter((obj) => {
      let currentDate = moment(`${obj.Year}-${obj.MonthNumber}`, "YYYY-MM");
      if (currentDate.isBetween(selectedStart, selectedEnd, null, "[]")) {
        return true;
      }
      return false;
    });

    let CountMonthForOrganic = 0;
    let filteredDataTwo = yelp_per_clicks_calls_data.filter((obj) => {
      let currentDate = moment(`${obj.Year}-${obj.MonthNumber}`, "YYYY-MM");
      if (currentDate.isBetween(selectedStart, selectedEnd, null, "[]")) {
        oldSumA.AdVisits += obj.AdVisits;
        oldSumA.AdVisitsPercent += obj.AdVisitsPercent;
        oldSumA.OrganicVisits += obj.OrganicVisits;
        oldSumA.PageVisits += obj.PageVisits;
        CountMonthForOrganic++;
        return true;
      }
      return false;
    });

    let countMonthForCTR = 0;

    const sum = yelp_per_clicks_calls_data.reduce(
      (accumulator, currentValue) => {
        let currentDate = moment(
          `${currentValue.Year}-${currentValue.MonthNumber}`,
          "YYYY-MM"
        );
        if (currentDate.isBetween(selectedStart, selectedEnd, null, "[]")) {
          accumulator.AdVisits += currentValue.AdVisits;
          accumulator.AdVisitsPercent += currentValue.AdVisitsPercent;
          accumulator.ClickThruRate += parseFloat(
            convertToFloat(currentValue.ClickThruRate)
          );
          accumulator.Clicks += parseFloat(convertToFloat(currentValue.Clicks));
          accumulator.CostPerClick += parseFloat(
            convertToFloat(currentValue.CostPerClick)
          );
          accumulator.Impressions += parseFloat(
            convertToFloat(currentValue.Impressions)
          );
          accumulator.OrganicVisits += currentValue.OrganicVisits;
          accumulator.OrganicVisitsPercent += currentValue.OrganicVisitsPercent;
          accumulator.PageVisits += currentValue.PageVisits;
          accumulator.TotalInvestment += parseFloat(
            convertToFloat(currentValue.TotalInvestment)
          );
          countMonthForCTR++;
        }

        return accumulator;
      },
      {
        AdVisits: 0,
        AdVisitsPercent: 0,
        ClickThruRate: 0,
        Clicks: 0,
        CostPerClick: 0,
        Impressions: 0,
        OrganicVisits: 0,
        OrganicVisitsPercent: 0,
        PageVisits: 0,
        TotalInvestment: 0
      }
    );

    // Convert sums to float and round them to two decimals
    oldSumA.AdVisitsPercent = parseFloat(
      sum.AdVisitsPercent / countMonthForCTR
    ).toFixed(0);
    oldSumA.ClickThruRate = parseFloat(
      sum.ClickThruRate / countMonthForCTR
    ).toFixed(2);
    oldSumA.Clicks = parseFloat(sum.Clicks.toFixed(0));
    oldSumA.CostPerClick = parseFloat(
      sum.CostPerClick / countMonthForCTR
    ).toFixed(2);
    oldSumA.Impressions = parseFloat(sum.Impressions).toFixed(0);
    oldSumA.OrganicVisitsPercent = parseFloat(
      sum.OrganicVisitsPercent / countMonthForCTR
    ).toFixed(0);
    oldSumA.TotalInvestment = parseFloat(sum.TotalInvestment).toFixed(0);
    let ConversionRateCount = 0;

    const sumA = get_yelp_conversation_rate_data.reduce(
      (accumulator, currentValue) => {
        let currentDate = moment(
          `${currentValue.Year}-${currentValue.MonthNumber}`,
          "YYYY-MM"
        );
        if (currentDate.isBetween(selectedStart, selectedEnd, null, "[]")) {
          accumulator.NewConversionRate += parseFloat(
            convertToFloat(currentValue.NewConversionRate)
          );
          // accumulator.PageVisitsLead += parseFloat(
          //   convertToFloat(currentValue.PageVisitsLead)
          // );
          accumulator.ConversionRate += parseFloat(
            convertToFloat(currentValue.ConversionRate)
          );
          accumulator.CallsAppts += parseFloat(
            convertToFloat(currentValue.CallandAppts)
          );
          accumulator.CallsApptsNew += parseFloat(
            convertToFloat(currentValue.CallandApptsNew)
          );
          ConversionRateCount++;
        }
        return accumulator;
      },
      {
        NewConversionRate: 0,
        PageVisitsLead: 0,
        ConversionRate: 0,
        CallsApptsNew: 0,
        CallsAppts: 0
      }
    );
    setCRate(ConversionRateCount);

    oldSumA.CallsApptsNew = parseFloat(sumA.CallsApptsNew).toFixed(0);
    oldSumA.CallsAppts = parseFloat(sumA.CallsAppts).toFixed(0);

    oldSumA.NewConversionRate = parseFloat(
      sumA.NewConversionRate / ConversionRateCount
    ).toFixed(0);
    oldSumA.ConversionRate = parseFloat(
      sumA.ConversionRate / ConversionRateCount
    ).toFixed(0);

    let filteredDataOne = get_yelp_customer_call_appts_data.filter((obj) => {
      let currentDate = moment(`${obj.Year}-${obj.MonthNumber}`, "YYYY-MM");
      if (currentDate.isBetween(selectedStart, selectedEnd, null, "[]")) {
        oldSumA.ARO += obj.ARO;
        // oldSumA.CallsAppts += obj.CallsAppts;
        // oldSumA.CallsApptsNew += obj.CallsApptsNew;
        oldSumA.CustomersNew += obj.CustomersNew;
        oldSumA.CustomersTotal += obj.CustomersTotal;
        oldSumA.NewARO += obj.NewARO;
        oldSumA.ReturningARO += obj.ReturningARO;
        oldSumA.ReturningCustomers += obj.ReturningCustomers;
        oldSumA.ReturningRevenue += obj.ReturningRevenue;
        oldSumA.RevenueNewCustomer += obj.RevenueNewCustomer;
        oldSumA.RevenueTotal += obj.RevenueTotal;
        return true;
      }
      return false;
    });
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

  const getChartsDataYelp = (selectedStart, selectedEnd) => {
    const NewConversionRate = filterDataByDate(
      get_yelp_conversation_rate_data,
      selectedStart,
      selectedEnd,
      "NewConversionRate"
    );
    const ConversionRate = filterDataByDate(
      get_yelp_conversation_rate_data,
      selectedStart,
      selectedEnd,
      "ConversionRate"
    );

    const TotalInvestment = filterDataByDate(
      yelp_per_clicks_calls_data,
      selectedStart,
      selectedEnd,
      "TotalInvestment"
    );
    const Clicks = filterDataByDate(
      yelp_per_clicks_calls_data,
      selectedStart,
      selectedEnd,
      "Clicks"
    );

    const ClickThruRate = filterDataByDate(
      yelp_per_clicks_calls_data,
      selectedStart,
      selectedEnd,
      "ClickThruRate"
    );
    const CostPerClick = filterDataByDate(
      yelp_per_clicks_calls_data,
      selectedStart,
      selectedEnd,
      "CostPerClick"
    );

    const Impressions = filterDataByDate(
      yelp_per_clicks_calls_data,
      selectedStart,
      selectedEnd,
      "Impressions"
    );
    const Calls = filterDataByDate(
      get_yelp_customer_call_appts_data,
      selectedStart,
      selectedEnd,
      "Calls"
    );

    const Apps = filterDataByDate(
      get_yelp_customer_call_appts_data,
      selectedStart,
      selectedEnd,
      "Apps"
    );

    const CostPerLead = filterDataByDate(
      get_yelp_cost_per_lead_data,
      selectedStart,
      selectedEnd,
      "CostPerLead"
    );

    const monthsList = filterDataByDate(
      get_yelp_customer_call_appts_data,
      selectedStart,
      selectedEnd,
      "Month"
    );

    const ROI = filterDataByDate(
      get_yelp_cost_per_lead_data,
      selectedStart,
      selectedEnd,
      "ROI"
    );

    const CustomersNew = filterDataByDate(
      get_yelp_customer_call_appts_data,
      selectedStart,
      selectedEnd,
      "CustomersNew"
    );

    const CustomersTotal = filterDataByDate(
      get_yelp_customer_call_appts_data,
      selectedStart,
      selectedEnd,
      "CustomersTotal"
    );

    const ReturningRevenue = filterDataByDate(
      get_yelp_customer_call_appts_data,
      selectedStart,
      selectedEnd,
      "ReturningRevenue"
    );

    const RevenueNewCustomer = filterDataByDate(
      get_yelp_customer_call_appts_data,
      selectedStart,
      selectedEnd,
      "RevenueNewCustomer"
    );

    const NewARO = filterDataByDate(
      get_yelp_customer_call_appts_data,
      selectedStart,
      selectedEnd,
      "NewARO"
    );

    const ReturningARO = filterDataByDate(
      get_yelp_customer_call_appts_data,
      selectedStart,
      selectedEnd,
      "ReturningARO"
    );

    return {
      ReturningARO,
      NewARO,
      RevenueNewCustomer,
      CustomersTotal,
      CustomersNew,
      ReturningRevenue,

      ROI,
      Calls,
      Appts: Apps,
      monthsList,
      Clicks,
      // ClickThroughRate,
      CostPerClick,
      Impressions,
      CostPerLead,
      Investment: TotalInvestment,
      // ROINew,

      ConversionRateTotal: ConversionRate,
      NewConversionRate
    };
  };

  const prepareNewDataYelp = (newStartDate, newEndDate) => {
    let newStartD = moment(newStartDate);
    let newEndD = moment(newEndDate);
    let newSum = {
      // 5
      ARO: 0,
      CallsAppts: 0,
      CallsApptsNew: 0,
      CustomersNew: 0,
      CustomersTotal: 0,
      NewARO: 0,
      ReturningARO: 0,
      ReturningCustomers: 0,
      ReturningRevenue: 0,
      RevenueNewCustomer: 0,
      RevenueTotal: 0,
      // 4
      AdVisits: 0,
      AdVisitsPercent: 0,
      ClickThruRate: 0,
      Clicks: 0,
      CostPerClick: 0,
      Impressions: 0,
      OrganicVisits: 0,
      PageVisits: 0,
      TotalInvestment: 0,
      OrganicVisitsPercent: 0,
      // 3
      ConversionRate: 0,
      NewConversionRate: 0,
      PageVisitsLead: 0,
      // PageVisitsLead: 0,
      // 2
      CostPerLead: 0,
      ROI: 0

      // PageVisitsLead: 0
    };
    let countMonth = 0;


    const sumANewPageAN = get_yelp_cost_per_lead_data.reduce(
      (accumulator, currentValue) => {
        let currentDate = moment(
          `${currentValue.Year}-${currentValue.MonthNumber}`,
          "YYYY-MM"
        );
        if (currentDate.isBetween(newStartD, newEndD, null, "[]")) {
          accumulator.ROI += parseFloat(convertToFloat(currentValue.ROI));
          accumulator.CostPerLead += parseFloat(
            convertToFloat(currentValue.CostPerLead)
          );

          accumulator.PageVisitsLead += parseFloat(
            convertToFloat(currentValue.PageVisitsLead)
          );
          countMonth++;
        }

        return accumulator;
      },
      {
        CostPerLead: 0,
        ROI: 0,

        PageVisitsLead: 0
      }
    );

    newSum.CostPerLead = parseFloat(
      sumANewPageAN.CostPerLead / countMonth
    ).toFixed(2);
    newSum.ROI = parseFloat(sumANewPageAN.ROI).toFixed(0);
    newSum.PageVisitsLead = parseFloat(sumANewPageAN.PageVisitsLead).toFixed(0);
    const sumAN = yelp_per_clicks_calls_data.reduce(
      (accumulator, currentValue) => {
        let currentDate = moment(
          `${currentValue.Year}-${currentValue.MonthNumber}`,
          "YYYY-MM"
        );
        if (currentDate.isBetween(newStartD, newStartD, null, "[]")) {
          accumulator.ClickThruRate += parseFloat(
            convertToFloat(currentValue.ClickThruRate / cRate)
          );
          accumulator.Clicks += parseFloat(convertToFloat(currentValue.Clicks));
          accumulator.CostPerClick += parseFloat(
            convertToFloat(currentValue.CostPerClick)
          );
          accumulator.Impressions += parseFloat(
            convertToFloat(currentValue.Impressions)
          );
          accumulator.TotalInvestment += parseFloat(
            convertToFloat(currentValue.TotalInvestment)
          );
          accumulator.OrganicVisitsPercent += parseFloat(
            convertToFloat(currentValue.OrganicVisitsPercent / cRate)
          );
          accumulator.AdVisits += parseFloat(
            convertToFloat(currentValue.AdVisits)
          );
          accumulator.AdVisitsPercent += parseFloat(
            convertToFloat(currentValue.AdVisitsPercent / cRate)
          );
          accumulator.OrganicVisits += parseFloat(
            convertToFloat(currentValue.OrganicVisits)
          );
          accumulator.PageVisits += parseFloat(
            convertToFloat(currentValue.PageVisits)
          );
        }

        return accumulator;
      },
      {
        ClickThruRate: 0,
        Clicks: 0,
        CostPerClick: 0,
        Impressions: 0,
        TotalInvestment: 0,
        OrganicVisitsPercent: 0,
        AdVisits: 0,
        AdVisitsPercent: 0,
        OrganicVisits: 0,
        PageVisits: 0
      }
    );

    newSum.PageVisits = parseFloat(sumAN.PageVisits.toFixed(0));
    newSum.OrganicVisits = parseFloat(sumAN.OrganicVisits.toFixed(0));
    newSum.AdVisitsPercent = parseFloat(sumAN.AdVisitsPercent.toFixed(0));
    newSum.AdVisits = parseFloat(sumAN.AdVisits.toFixed(0));
    newSum.ClickThruRate = parseFloat(sumAN.ClickThruRate.toFixed(0));
    newSum.Clicks = parseFloat(sumAN.Clicks.toFixed(0));
    newSum.CostPerClick = parseFloat(sumAN.CostPerClick.toFixed(0));
    newSum.Impressions = parseFloat(sumAN.Impressions.toFixed(0));
    newSum.TotalInvestment = parseFloat(sumAN.TotalInvestment.toFixed(0));
    newSum.OrganicVisitsPercent = parseFloat(
      sumAN.OrganicVisitsPercent
    ).toFixed(0);

    let filteredDataOneNew = get_yelp_customer_call_appts_data.filter((obj) => {
      let currentDate = moment(`${obj.Year}-${obj.MonthNumber}`, "YYYY-MM");
      if (currentDate.isBetween(newStartD, newEndD, null, "[]")) {
        newSum.ARO += obj.ARO;

        newSum.CustomersNew += obj.CustomersNew;
        newSum.CustomersTotal += obj.CustomersTotal;
        newSum.NewARO += obj.NewARO;
        newSum.ReturningARO += obj.ReturningARO;
        newSum.ReturningCustomers += obj.ReturningCustomers;
        newSum.ReturningRevenue += obj.ReturningRevenue;
        newSum.RevenueNewCustomer += obj.RevenueNewCustomer;
        newSum.RevenueTotal += obj.RevenueTotal;
        return true;
      }
      return false;
    });
    let ConversionRateCount = 0;

    const sumANew = get_yelp_conversation_rate_data.reduce(
      (accumulator, currentValue) => {
        let currentDate = moment(
          `${currentValue.Year}-${currentValue.MonthNumber}`,
          "YYYY-MM"
        );
        if (currentDate.isBetween(newStartD, newEndD, null, "[]")) {
          accumulator.NewConversionRate += parseFloat(
            convertToFloat(currentValue.NewConversionRate)
          );

          accumulator.ConversionRate += parseFloat(
            convertToFloat(currentValue.ConversionRate)
          );
          accumulator.CallsAppts += parseFloat(
            convertToFloat(currentValue.CallandAppts)
          );
          accumulator.CallsApptsNew += parseFloat(
            convertToFloat(currentValue.CallandApptsNew)
          );
          ConversionRateCount++;
        }
        return accumulator;
      },
      {
        NewConversionRate: 0,
        PageVisitsLead: 0,
        ConversionRate: 0,
        CallsApptsNew: 0,
        CallsAppts: 0
      }
    );
    // newSum.PageVisitsLead = parseFloat(sumANew.PageVisitsLead).toFixed(0);
    newSum.CallsAppts = sumANew.CallsAppts;
    newSum.CallsApptsNew = sumANew.CallsApptsNew;
    // Convert sums to float and round them to two decimals
    newSum.NewConversionRate = parseFloat(
      sumANew.NewConversionRate / ConversionRateCount
    ).toFixed(0);
    newSum.ConversionRate = parseFloat(
      sumANew.ConversionRate / ConversionRateCount
    ).toFixed(0);
    return newSum;
  };

  // return displayLabel;

  return {
    prepareOldDataYelp,
    prepareNewDataYelp,
    getChartsDataYelp,
    gerPercentageYelp,
    getDifferenceYelp
  };
};

export default useFetchRepairPalData;
