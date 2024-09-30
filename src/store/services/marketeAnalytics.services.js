import { apiCall } from "./service";
import {
  URL_REPAIRPAL_INVESTMENT,
  URL_REPAIRPAL_REVENUE,
  URL_REFERAL_REVENUE_TWO,
  URL_YELP_CTR_CLICKS_CPC,
  URL_YELP_CONVERSATION_RATE,
  URL_YELP_COST_PER_LEAD,
  URL_YELP_PAGE_VISITS,
  URL_YELP_CUSTOMER_CALL_APPTS,
  URL_DASHBOARD_REV_CAR_ARO,
  URL_DASHBOARD_ARO_REV_CUST,
  URL_ADWORDS_CTR_INVEST_IMPRESSIONS,
  URL_ADWORDS_CTR_ARO_CALLS_APPTS,
  URL_ADWORDS_CTR_ARO_CALLS_ROI,
  URL_CRC_ARO,
  URL_CRC_REV_CAR_ARO,
  URL_YELP_ROI
} from "./URL";

const token = localStorage.getItem("token");

export const api = {
  getYelpRoiApi(params) {
    return apiCall.post({
      url: URL_YELP_ROI,
      isAuthToken: token,
      skipQueryParams: true,
      params
    });
  },

  getDashboardARORevCustApi(params) {
    return apiCall.post({
      url: URL_CRC_ARO,
      isAuthToken: token,
      skipQueryParams: true,
      params
    });
  },


  getDashboardRevCarROApi(params) {
    return apiCall.post({
      url: URL_CRC_REV_CAR_ARO,
      isAuthToken: token,
      skipQueryParams: true,
      params
    });
  },

  getAdwordsCTRAroCallsRoiApi(params) {
    return apiCall.post({
      url: URL_ADWORDS_CTR_ARO_CALLS_ROI,
      isAuthToken: token,
      skipQueryParams: true,
      params
    });
  },

  getAdwordsCTRAroCallsApi(params) {
    return apiCall.post({
      url: URL_ADWORDS_CTR_ARO_CALLS_APPTS,
      isAuthToken: token,
      skipQueryParams: true,
      params
    });
  },

  getAdwordsCTRInvestRateApi(params) {
    return apiCall.post({
      url: URL_ADWORDS_CTR_INVEST_IMPRESSIONS,
      isAuthToken: token,
      skipQueryParams: true,
      params
    });
  },

  getDashboardAroRevCustApi(params) {
    return apiCall.post({
      url: URL_DASHBOARD_ARO_REV_CUST,
      isAuthToken: token,
      skipQueryParams: true,
      params
    });
  },

  getDashboardRevCarAroApi(params) {
    return apiCall.post({
      url: URL_DASHBOARD_REV_CAR_ARO,
      isAuthToken: token,
      skipQueryParams: true,
      params
    });
  },

  getYelpCustomerCallApptsApi(params) {
    return apiCall.post({
      url: URL_YELP_CUSTOMER_CALL_APPTS,
      isAuthToken: token,
      skipQueryParams: true,
      params
    });
  },

  getYelpPageVisitsApi(params) {
    return apiCall.post({
      url: URL_YELP_PAGE_VISITS,
      isAuthToken: token,
      skipQueryParams: true,
      params
    });
  },

  getYelpCostPerLeadApi(params) {
    return apiCall.post({
      url: URL_YELP_COST_PER_LEAD,
      isAuthToken: token,
      skipQueryParams: true,
      params
    });
  },

  getYelpConversationRateApi(params) {
    return apiCall.post({
      url: URL_YELP_CONVERSATION_RATE,
      isAuthToken: token,
      skipQueryParams: true,
      params
    });
  },

  getYelpCTRPerClicksApi(params) {
    return apiCall.post({
      url: URL_YELP_CTR_CLICKS_CPC,
      isAuthToken: token,
      skipQueryParams: true,
      params
    });
  },

  getRepairpalInvestmentApi(params) {
    return apiCall.post({
      url: URL_REPAIRPAL_INVESTMENT,
      isAuthToken: token,
      skipQueryParams: true,
      params
    });
  },
  getRepairpalRevenueApi(params) {
    return apiCall.post({
      url: URL_REPAIRPAL_REVENUE,
      isAuthToken: token,
      skipQueryParams: true,
      params
    });
  },

  getReferallRevenueApi(params) {
    return apiCall.post({
      url: URL_REFERAL_REVENUE_TWO,
      isAuthToken: token,
      skipQueryParams: true,
      params
    });
  }
};

export default api;
