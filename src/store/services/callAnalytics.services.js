import { apiCall } from "./service";
import {
  URL_CALL_PER_COUNT,
  URL_BOOKED_APPOINTMENT_CHART,
  URL_GET_UNSCORED_CALLS,
  URL_REVENUE_AND_CUSTOMER_CHART,
  URL_SHOWS_NOSHOWS_ARRIVAL,
  URL_COACHING_INSIGHT_CHART,
  URL_NOBOOKED_APPOINTMENT_CHART,
  URL_SHOW_NOSHOW_CHART,
  URL_UNMATCHED_CUSTOMERS_CHART,
  URL_CONVERSATION_DETAILS,
  URL_MARKETING_BUSINESS_REPORTS,
  URL_CONVERSATION_INSIGHTS,
  URL_DASHBOARD_AI,
  URL_DASHBOARD_SANKYCHART,
  URL_RANKING_REPORTS,
  URL_FILTER_SERVICE_ADVISOR
} from "./URL";

const token = localStorage.getItem("token");

export const api = {
  getUnMatchedCustomersApi(params) {
    return apiCall.post({
      url: URL_UNMATCHED_CUSTOMERS_CHART,
      isAuthToken: token,
      skipQueryParams: true,
      params
    });
  },

  getShowNoShowsDataApi(params) {
    return apiCall.post({
      url: URL_SHOW_NOSHOW_CHART,
      isAuthToken: token,
      skipQueryParams: true,
      params
    });
  },

  getNOBookedAppointmentChartsDataApi(params) {
    return apiCall.post({
      url: URL_NOBOOKED_APPOINTMENT_CHART,
      isAuthToken: token,
      skipQueryParams: true,
      params
    });
  },

  getRevenueAndCustomerApi(params) {
    return apiCall.post({
      url: URL_REVENUE_AND_CUSTOMER_CHART,
      isAuthToken: token,
      skipQueryParams: true,
      params
    });
  },

  getCoachingInsightApi(params) {
    return apiCall.post({
      url: URL_COACHING_INSIGHT_CHART,
      isAuthToken: token,
      skipQueryParams: true,
      params
    });
  },

  getUnscoredCallsApi(params) {
    return apiCall.post({
      url: URL_GET_UNSCORED_CALLS,
      isAuthToken: token,
      skipQueryParams: true,
      params
    });
  },
  callAnalyticsApi(params) {
    return apiCall.post({
      url: URL_CALL_PER_COUNT,
      isAuthToken: token,
      skipQueryParams: true,
      params
    });
  },

  getBookedAppointmentChartsDataApi(params) {
    return apiCall.post({
      url: URL_BOOKED_APPOINTMENT_CHART,
      isAuthToken: token,
      skipQueryParams: true,
      params
    });
  },

  getConversationDetailsApi(params) {
    return apiCall.post({
      url: URL_CONVERSATION_DETAILS,
      isAuthToken: token,
      skipQueryParams: true,
      params
    });
  },
  getMarketingBusinessReportsApi(params) {
    return apiCall.post({
      url: URL_MARKETING_BUSINESS_REPORTS,
      isAuthToken: token,
      skipQueryParams: true,
      params
    });
  },
  getConversationInsightsApi(params) {
    return apiCall.post({
      url: URL_CONVERSATION_INSIGHTS,
      isAuthToken: token,
      skipQueryParams: true,
      params
    });
  },

  getDashboardAiApi(params) {
    return apiCall.post({
      url: URL_DASHBOARD_AI,
      isAuthToken: token,
      skipQueryParams: true,
      params
    });
  },

  getDashboardSankyChartApi(params) {
    return apiCall.post({
      url: URL_DASHBOARD_SANKYCHART,
      isAuthToken: token,
      skipQueryParams: true,
      params
    });
  },

  getRankingReportsApi(params) {
    return apiCall.post({
      url: URL_RANKING_REPORTS,
      isAuthToken: token,
      skipQueryParams: true,
      params
    });
  },

  getFilterServiceAdvisorList(params) {
    return apiCall.get({
      url: URL_FILTER_SERVICE_ADVISOR,
      isAuthToken: token,
      skipQueryParams: true,
      params
    });
  }
};

export default api;
