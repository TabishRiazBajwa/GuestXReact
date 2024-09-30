import createSelector from "../../utils/reselect";

const marketeAnalyticsData = (state) => {
  const { marketeAnalytics } = state;
  return marketeAnalytics || {};
};

export const getYelpRoiLoadingSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) => marketeAnalytics.get("get_yelp_roi_loading") || false
);

export const getYelpRoiErrorSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) => marketeAnalytics.get("get_yelp_roi_error") || null
);

export const getYelpRoiDataSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) => marketeAnalytics.get("get_yelp_roi_data") || []
);

export const get_dashboardAroRevDustDataLoadingSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) =>
    marketeAnalytics.get("get_dashboard_aro_rev_cust_loading") || false
);

export const get_dashboardAroRevDustDataErrorSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) =>
    marketeAnalytics.get("get_dashboard_aro_rev_cust_error") || null
);

export const get_dashboardAroRevDustDataDataSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) =>
    marketeAnalytics.get("get_dashboard_aro_rev_cust_data") || []
);

export const getDashboardRevCarAroDataLoadingSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) =>
    marketeAnalytics.get("get_dashboard_rev_car_aro_loading") || false
);

export const getDashboardRevCarAroDataErrorSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) =>
    marketeAnalytics.get("get_dashboard_rev_car_aro_error") || null
);

export const getDashboardRevCarAroDataDataSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) =>
    marketeAnalytics.get("get_dashboard_rev_car_aro_data") || []
);

export const yelpCustomerCallApptsLoadingSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) =>
    marketeAnalytics.get("get_yelp_customer_call_appts_loading") || false
);

export const yelpCustomerCallApptsErrorSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) =>
    marketeAnalytics.get("get_yelp_customer_call_appts_error") || null
);

export const yelpCustomerCallApptsDataSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) =>
    marketeAnalytics.get("get_yelp_customer_call_appts_data") || []
);

export const yelpCustomerCallApptsTotalSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) =>
    marketeAnalytics.get("get_yelp_customer_call_appts_total") || []
);

export const yelpPageVisitsLoadingSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) =>
    marketeAnalytics.get("get_yelp_page_visits_loading") || false
);

export const yelpPageVisitsErrorSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) =>
    marketeAnalytics.get("get_yelp_page_visits_error") || null
);

export const yelpPageVisitsDataSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) => marketeAnalytics.get("get_yelp_page_visits_data") || []
);

export const yelpCostPerLeadLoadingSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) =>
    marketeAnalytics.get("get_yelp_cost_per_lead_loading") || false
);

export const yelpCostPerLeadErrorSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) =>
    marketeAnalytics.get("get_yelp_cost_per_lead_error") || null
);

export const yelpCostPerLeadDataSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) =>
    marketeAnalytics.get("get_yelp_cost_per_lead_data") || []
);

export const yelpCostPerLeadTotalSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) =>
    marketeAnalytics.get("get_yelp_cost_per_lead_total") || []
);

export const yelpPerClickConversionRateLoadingSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) =>
    marketeAnalytics.get("get_yelp_conversation_rate_loading") || false
);

export const yelpPerClickConversionRateErrorSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) =>
    marketeAnalytics.get("get_yelp_conversation_rate_error") || null
);

export const yelpPerClickConversionRateDataSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) =>
    marketeAnalytics.get("get_yelp_conversation_rate_data") || []
);

export const yelpPerClickConversionRateTotalSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) =>
    marketeAnalytics.get("get_yelp_conversation_rate_total") || []
);

export const yelpPerClickCallsLoadingSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) =>
    marketeAnalytics.get("yelp_per_clicks_calls_loading") || false
);

export const yelpPerClickCallsErrorSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) =>
    marketeAnalytics.get("yelp_per_clicks_calls_error") || null
);

export const yelpPerClickCallsDataSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) => marketeAnalytics.get("yelp_per_clicks_calls_data") || []
);

export const adwordsCTRAroCallsRoiLoadingSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) =>
    marketeAnalytics.get("get_adwords_ctr_aro_calls_roi_loading") || false
);

export const adwordsCTRAroCallsRoiErrorSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) =>
    marketeAnalytics.get("get_adwords_ctr_aro_calls_roi_error") || null
);

export const adwordsCTRAroCallsRoiDataSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) =>
    marketeAnalytics.get("get_adwords_ctr_aro_calls_roi_data") || []
);

export const adwordsCTRAroCallsRoiTotalSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) =>
    marketeAnalytics.get("get_adwords_ctr_aro_calls_roi_total") || []
);

export const adwordsCTRAroLoadingSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) =>
    marketeAnalytics.get("get_adwords_ctr_aro_calls_loading") || false
);

export const adwordsCTRAroErrorSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) =>
    marketeAnalytics.get("get_adwords_ctr_aro_calls_error") || null
);

export const adwordsCTRAroDataSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) =>
    marketeAnalytics.get("get_adwords_ctr_aro_calls_data") || []
);

export const adwordsCTRAroTotalSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) =>
    marketeAnalytics.get("get_adwords_ctr_aro_calls_total") || []
);

export const adwordsCTRInvestLoadingSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) =>
    marketeAnalytics.get("get_adwords_ctr_invest_loading") || false
);

export const adwordsCTRInvestErrorSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) =>
    marketeAnalytics.get("get_adwords_ctr_invest_error") || null
);

export const adwordsCTRInvestDataSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) =>
    marketeAnalytics.get("get_adwords_ctr_invest_data") || []
);

export const repairpalInvestmentLoadingSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) =>
    marketeAnalytics.get("repairpal_investment_loading") || false
);

export const repairpalInvestmentErrorSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) =>
    marketeAnalytics.get("repairpal_investment_error") || null
);

export const repairpalInvestmentDataSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) => marketeAnalytics.get("repairpal_investment_data") || []
);

export const repairpalInvestmentTotalSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) => marketeAnalytics.get("repairpal_investment_total") || []
);

export const referalRevenueLoadingSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) => marketeAnalytics.get("referal_revenue_loading") || false
);

export const referalRevenueErrorSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) => marketeAnalytics.get("referal_revenue_error") || null
);

export const referalRevenueDataSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) => marketeAnalytics.get("referal_revenue_data") || []
);

export const referalRevenueTotalSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) => marketeAnalytics.get("referal_revenue_total") || []
);

export const repairpalRevenueLoadingSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) =>
    marketeAnalytics.get("repairpal_revenue_loading") || false
);

export const repairpalRevenueErrorSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) => marketeAnalytics.get("repairpal_revenue_error") || null
);

export const repairpalRevenueDataSelector = createSelector(
  marketeAnalyticsData,
  (marketeAnalytics) => marketeAnalytics.get("repairpal_revenue_data") || []
);
