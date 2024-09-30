import createSelector from "../../utils/reselect";

const callAnalyticsData = (state) => {
  const { callAnalytics } = state;
  return callAnalytics || {};
};

export const unmatchedCustomersLoadingSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) => callAnalytics.get("unmatched_Customers_loading") || false
);

export const unmatchedCustomersErrorSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) => callAnalytics.get("unmatched_Customers_error") || null
);

export const unmatchedCustomersDataSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) => callAnalytics.get("unmatched_Customers_data") || false
);

export const unscoredCallaLoadingSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) => callAnalytics.get("unscored_calls_loading") || false
);

export const unscoredCallaErrorSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) => callAnalytics.get("unscored_calls_error") || null
);

export const unscoredCallaDataSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) => callAnalytics.get("unscored_calls_data") || false
);

export const revenueAndCustomerLoadingSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) => callAnalytics.get("Revenue_and_Customer_loading") || false
);

export const revenueAndCustomerErrorSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) => callAnalytics.get("Revenue_and_Customer_error") || null
);

export const revenueAndCustomerDataSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) => callAnalytics.get("Revenue_and_Customer_data") || false
);

export const coachingInsightLoadingSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) => callAnalytics.get("Coaching_Insight_loading") || false
);

export const coachingInsightErrorSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) => callAnalytics.get("Coaching_Insight_error") || null
);

export const coachingInsightDataSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) => callAnalytics.get("Coaching_Insight_data") || false
);

export const noBookedAppointmentsLoadingSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) => callAnalytics.get("NOBooked_Appts_loading") || false
);

export const noBookedAppointmentsErrorSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) => callAnalytics.get("NOBooked_Appts_error") || null
);

export const noBookedAppointmentsDataSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) => callAnalytics.get("NOBooked_Appts_data") || false
);

export const bookedAppointmentsLoadingSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) => callAnalytics.get("Booked_Appts_loading") || false
);

export const bookedAppointmentsErrorSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) => callAnalytics.get("Booked_Appts_error") || null
);

export const bookedAppointmentsDataSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) => callAnalytics.get("Booked_Appts_data") || false
);

export const showNoShowLoadingSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) => callAnalytics.get("Show_NoShow_loading") || false
);

export const showNoShowErrorSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) => callAnalytics.get("Show_NoShow_error") || null
);

export const showNoShowDataSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) => callAnalytics.get("Show_NoShow_data") || false
);

export const countPerCallLoadingSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) => callAnalytics.get("count_per_call_loading") || false
);

export const countPerCallErrorSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) => callAnalytics.get("count_per_call_error") || null
);

export const countPerCallDataSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) => callAnalytics.get("count_per_call_data") || false
);
export const conversationDetailsLoadingSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) => callAnalytics.get("convesation_details_loading") || false
);

export const conversationDetailsErrorSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) => callAnalytics.get("convesation_details_error") || null
);

export const conversationDetailsDataSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) => callAnalytics.get("convesation_details_data") || false
);

export const conversationInsightsErrorSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) => callAnalytics.get("convesation_insights_error") || null
);

export const conversationInsightsDataSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) => callAnalytics.get("convesation_insights_data") || false
);

export const conversationInsightsLoadingSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) => callAnalytics.get("convesation_insights_loading") || false
);

export const marketingBusinessReportsLoadingSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) =>
    callAnalytics.get("marketing_business_reports_loading") || false
);

export const marketingBusinessReportsErrorSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) =>
    callAnalytics.get("marketing_business_reports_error") || null
);

export const marketingBusinessReportsDataSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) =>
    callAnalytics.get("marketing_business_reports_data") || false
);

export const rankingReportLoadingSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) => callAnalytics.get("ranking_reports_loading") || false
);

export const rankingReportDataSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) => callAnalytics.get("ranking_reports_data") || false
);

export const rankingReportErrorSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) => callAnalytics.get("ranking_reports_error") || false
);

export const dashboardAiDataDATASelector = createSelector(
  callAnalyticsData,
  (callAnalytics) => callAnalytics.get("dashboard_ai_data_data") || false
);

export const dashboardAiDataLoadingSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) => callAnalytics.get("dashboard_ai_data_loading") || false
);

export const dashboardAiDataErrorSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) => callAnalytics.get("dashboard_ai_data_error") || false
);

export const dashboardSankychartDataSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) =>
    callAnalytics.get("dashboard_sankychart_data_data") || false
);

export const dashboardSankychartLoadingSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) =>
    callAnalytics.get("dashboard_sankychart_data_loading") || false
);

export const dashboardSankychartErrorSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) =>
    callAnalytics.get("dashboard_sankychart_data_error") || false
);

export const filterServiceAdvisorLoadingSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) =>
    callAnalytics.get("filter_service_advisor_loading") || false
);

export const filterServiceAdvisorErrorSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) => callAnalytics.get("filter_service_advisor_error") || false
);

export const filterServiceAdvisorDataSelector = createSelector(
  callAnalyticsData,
  (callAnalytics) => callAnalytics.get("filter_service_advisor_data") || false
);
