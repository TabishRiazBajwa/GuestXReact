import ACTIONS, { FETCH_STATUS } from "../constants";

export const getMarketingBusinessReportsAction = {
  pending: {
    type: ACTIONS.GET_MARKETING_BUSINESS_REPORTS.PENDING,
    status: FETCH_STATUS.LOADING,
  },
  success: (data) => ({
    type: ACTIONS.GET_MARKETING_BUSINESS_REPORTS.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS,
  }),
  error: (error) => ({
    type: ACTIONS.GET_MARKETING_BUSINESS_REPORTS.ERROR,
    error,
    status: FETCH_STATUS.ERROR,
  }),
};

export const getMarketingBusinessReportsRequest = (state) => ({
  type: ACTIONS.GET_MARKETING_BUSINESS_REPORTS_CALL,
  payload: state,
});

export const getRankingReportsAction = {
  pending: {
    type: ACTIONS.GET_RANKING_REPORTS.PENDING,
    status: FETCH_STATUS.LOADING,
  },
  success: (data) => ({
    type: ACTIONS.GET_RANKING_REPORTS.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS,
  }),
  error: (error) => ({
    type: ACTIONS.GET_RANKING_REPORTS.ERROR,
    error,
    status: FETCH_STATUS.ERROR,
  }),
};

export const getRankingReportsRequest = (state) => ({
  type: ACTIONS.GET_RANKING_REPORTS_CALL,
  payload: state,
});

export const getConversationDetailsAction = {
  pending: {
    type: ACTIONS.GET_CONVERSATION_DETAILS.PENDING,
    status: FETCH_STATUS.LOADING,
  },
  success: (data) => ({
    type: ACTIONS.GET_CONVERSATION_DETAILS.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS,
  }),
  error: (error) => ({
    type: ACTIONS.GET_CONVERSATION_DETAILS.ERROR,
    error,
    status: FETCH_STATUS.ERROR,
  }),
};

export const getConversationDetailsRequest = (state) => ({
  type: ACTIONS.GET_CONVERSATION_DETAILS_CALL,
  payload: state,
});

export const getConversationInsightsAction = {
  pending: {
    type: ACTIONS.GET_CONVERSATION_INSIGHTS.PENDING,
    status: FETCH_STATUS.LOADING,
  },
  success: (data) => ({
    type: ACTIONS.GET_CONVERSATION_INSIGHTS.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS,
  }),
  error: (error) => ({
    type: ACTIONS.GET_CONVERSATION_INSIGHTS.ERROR,
    error,
    status: FETCH_STATUS.ERROR,
  }),
};

export const getConversationInsightsRequest = (state) => ({
  type: ACTIONS.GET_CONVERSATION_INSIGHTS_CALL,
  payload: state,
});

export const getUnMatchedCustomersActions = {
  pending: {
    type: ACTIONS.GET_UNMATCHED_CUSTOMERS.PENDING,
    status: FETCH_STATUS.LOADING,
  },
  success: (data) => ({
    type: ACTIONS.GET_UNMATCHED_CUSTOMERS.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS,
  }),
  error: (error) => ({
    type: ACTIONS.GET_UNMATCHED_CUSTOMERS.ERROR,
    error,
    status: FETCH_STATUS.ERROR,
  }),
};

export const getUnMatchedCustomersRequest = (state) => ({
  type: ACTIONS.GET_UNMATCHED_CUSTOMERS_CALL,
  payload: state,
});

export const getRevenueAndCustomerAction = {
  pending: {
    type: ACTIONS.GET_REVENUE_AND_CUSTOMER_DATA.PENDING,
    status: FETCH_STATUS.LOADING,
  },
  success: (data) => ({
    type: ACTIONS.GET_REVENUE_AND_CUSTOMER_DATA.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS,
  }),
  error: (error) => ({
    type: ACTIONS.GET_REVENUE_AND_CUSTOMER_DATA.ERROR,
    error,
    status: FETCH_STATUS.ERROR,
  }),
};

export const getRevenueAndCustomerRequest = (state) => ({
  type: ACTIONS.GET_REVENUE_AND_CUSTOMER_DATA_CALL,
  payload: state,
});

export const getCoachingInsightAction = {
  pending: {
    type: ACTIONS.GET_COACHING_INSIGHT_CALL_DATA.PENDING,
    status: FETCH_STATUS.LOADING,
  },
  success: (data) => ({
    type: ACTIONS.GET_COACHING_INSIGHT_CALL_DATA.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS,
  }),
  error: (error) => ({
    type: ACTIONS.GET_COACHING_INSIGHT_CALL_DATA.ERROR,
    error,
    status: FETCH_STATUS.ERROR,
  }),
};

export const getCoachingInsightRequest = (state) => ({
  type: ACTIONS.GET_COACHING_INSIGHT_CALL_DATA_CALL,
  payload: state,
});

export const getBookedAppointmentChartsDataAction = {
  pending: {
    type: ACTIONS.GET_BOOKED_APPTS_DATA.PENDING,
    status: FETCH_STATUS.LOADING,
  },
  success: (data) => ({
    type: ACTIONS.GET_BOOKED_APPTS_DATA.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS,
  }),
  error: (error) => ({
    type: ACTIONS.GET_BOOKED_APPTS_DATA.ERROR,
    error,
    status: FETCH_STATUS.ERROR,
  }),
};

export const getBookedAppointmentChartsDataRequest = (state) => ({
  type: ACTIONS.GET_BOOKED_APPTS_DATA_CALL,
  payload: state,
});

export const getNOBookedAppointmentChartsDataAction = {
  pending: {
    type: ACTIONS.GET_NO_BOOKED_APPTS_DATA.PENDING,
    status: FETCH_STATUS.LOADING,
  },
  success: (data) => ({
    type: ACTIONS.GET_NO_BOOKED_APPTS_DATA.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS,
  }),
  error: (error) => ({
    type: ACTIONS.GET_NO_BOOKED_APPTS_DATA.ERROR,
    error,
    status: FETCH_STATUS.ERROR,
  }),
};

export const getNOBookedAppointmentChartsDataRequest = (state) => ({
  type: ACTIONS.GET_NO_BOOKED_APPTS_DATA_CALL,
  payload: state,
});

export const getShowNoShowsDataAction = {
  pending: {
    type: ACTIONS.GET_SHOW_NOSHOW_DATA.PENDING,
    status: FETCH_STATUS.LOADING,
  },
  success: (data) => ({
    type: ACTIONS.GET_SHOW_NOSHOW_DATA.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS,
  }),
  error: (error) => ({
    type: ACTIONS.GET_SHOW_NOSHOW_DATA.ERROR,
    error,
    status: FETCH_STATUS.ERROR,
  }),
};

export const getShowNoShowRequest = (state) => ({
  type: ACTIONS.GET_SHOW_NOSHOW_DATA_CALL,
  payload: state,
});

export const getUnscoredCallsAction = {
  pending: {
    type: ACTIONS.GET_UNSCORED_CALLS.PENDING,
    status: FETCH_STATUS.LOADING,
  },
  success: (data) => ({
    type: ACTIONS.GET_UNSCORED_CALLS.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS,
  }),
  error: (error) => ({
    type: ACTIONS.GET_UNSCORED_CALLS.ERROR,
    error,
    status: FETCH_STATUS.ERROR,
  }),
};

export const getUnscoredCallsRequest = (state) => ({
  type: ACTIONS.GET_UNSCORED_CALLS_CALL,
  payload: state,
});

export const getCountPerCallsDataAction = {
  pending: {
    type: ACTIONS.GET_COUNT_PER_CALL_DATA.PENDING,
    status: FETCH_STATUS.LOADING,
  },
  success: (data) => ({
    type: ACTIONS.GET_COUNT_PER_CALL_DATA.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS,
  }),
  error: (error) => ({
    type: ACTIONS.GET_COUNT_PER_CALL_DATA.ERROR,
    error,
    status: FETCH_STATUS.ERROR,
  }),
};

export const getCountPerCallsDataRequest = (state) => ({
  type: ACTIONS.GET_COUNT_PER_CALL_DATA_CALL,
  payload: state,
});

export const getDashboardAiDataRequest = (state) => ({
  type: ACTIONS.GET_DASHBOARD_AI_DATA_CALL,
  payload: state,
});

export const getDashboardAiDataAction = {
  pending: {
    type: ACTIONS.GET_DASHBOARD_AI_DATA.PENDING,
    status: FETCH_STATUS.LOADING,
  },
  success: (data) => ({
    type: ACTIONS.GET_DASHBOARD_AI_DATA.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS,
  }),
  error: (error) => ({
    type: ACTIONS.GET_DASHBOARD_AI_DATA.ERROR,
    error,
    status: FETCH_STATUS.ERROR,
  }),
};

export const getDashboardSankychartRequest = (state) => ({
  type: ACTIONS.GET_DASHBOARD_SANKYCHART_DATA_CALL,
  payload: state,
});

export const getDashboardSankychartAction = {
  pending: {
    type: ACTIONS.GET_DASHBOARD_SANKYCHART_DATA.PENDING,
    status: FETCH_STATUS.LOADING,
  },
  success: (data) => ({
    type: ACTIONS.GET_DASHBOARD_SANKYCHART_DATA.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS,
  }),
  error: (error) => ({
    type: ACTIONS.GET_DASHBOARD_SANKYCHART_DATA.ERROR,
    error,
    status: FETCH_STATUS.ERROR,
  }),
};

export const getFilterServiceAdvisorListAction = {
  pending: {
    type: ACTIONS.GET_FILTER_SERVICE_ADVISOR.PENDING,
    status: FETCH_STATUS.LOADING,
  },
  success: (data) => ({
    type: ACTIONS.GET_FILTER_SERVICE_ADVISOR.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS,
  }),
  error: (error) => ({
    type: ACTIONS.GET_FILTER_SERVICE_ADVISOR.ERROR,
    error,
    status: FETCH_STATUS.ERROR,
  }),
};

export const getFilterServiceAdvisorListRequest = (state) => ({
  type: ACTIONS.GET_FILTER_SERVICE_ADVISOR_CALL,
  payload: state,
});
