import ACTIONS, { FETCH_STATUS } from "../constants";

export const saveChartDataForYelp = (state) => ({
  type: ACTIONS.CHAERT_DATA_FOR_YELP,
  payload: state
});

export const getYelpRoiActions = {
  pending: {
    type: ACTIONS.GET_YELP_ROI.PENDING,
    status: FETCH_STATUS.LOADING
  },
  success: (data) => ({
    type: ACTIONS.GET_YELP_ROI.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS
  }),
  error: (error) => ({
    type: ACTIONS.GET_YELP_ROI.ERROR,
    error,
    status: FETCH_STATUS.ERROR
  })
};

export const getYelpRoiRequest = (state) => ({
  type: ACTIONS.GET_YELP_ROI_CALL,
  payload: state
});

export const getAdwordsCTRAroCallsRoiActions = {
  pending: {
    type: ACTIONS.GET_ADWORDS_CTR_ARO_CALLS_ROI.PENDING,
    status: FETCH_STATUS.LOADING
  },
  success: (data) => ({
    type: ACTIONS.GET_ADWORDS_CTR_ARO_CALLS_ROI.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS
  }),
  error: (error) => ({
    type: ACTIONS.GET_ADWORDS_CTR_ARO_CALLS_ROI.ERROR,
    error,
    status: FETCH_STATUS.ERROR
  })
};

export const getAdwordsCTRAroCallsRoiRequest = (state) => ({
  type: ACTIONS.GET_ADWORDS_CTR_ARO_CALLS_ROI_CALL,
  payload: state
});

export const getAdwordsCTRAroCallsActions = {
  pending: {
    type: ACTIONS.GET_ADWORDS_CTR_ARO_CALLS.PENDING,
    status: FETCH_STATUS.LOADING
  },
  success: (data) => ({
    type: ACTIONS.GET_ADWORDS_CTR_ARO_CALLS.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS
  }),
  error: (error) => ({
    type: ACTIONS.GET_ADWORDS_CTR_ARO_CALLS.ERROR,
    error,
    status: FETCH_STATUS.ERROR
  })
};

export const getAdwordsCTRAroCallsRequest = (state) => ({
  type: ACTIONS.GET_ADWORDS_CTR_ARO_CALLS_CALL,
  payload: state
});

export const getAdwordsCTRInvestRateActions = {
  pending: {
    type: ACTIONS.GET_ADWORDS_CTR_INVEST_RATE.PENDING,
    status: FETCH_STATUS.LOADING
  },
  success: (data) => ({
    type: ACTIONS.GET_ADWORDS_CTR_INVEST_RATE.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS
  }),
  error: (error) => ({
    type: ACTIONS.GET_ADWORDS_CTR_INVEST_RATE.ERROR,
    error,
    status: FETCH_STATUS.ERROR
  })
};

export const getAdwordsCTRInvestRateRequest = (state) => ({
  type: ACTIONS.GET_ADWORDS_CTR_INVEST_RATE_CALL,
  payload: state
});

export const getDashboardAroRevCustActions = {
  pending: {
    type: ACTIONS.GET_DASHBOARD_ARO_REV_CUST.PENDING,
    status: FETCH_STATUS.LOADING
  },
  success: (data) => ({
    type: ACTIONS.GET_DASHBOARD_ARO_REV_CUST.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS
  }),
  error: (error) => ({
    type: ACTIONS.GET_DASHBOARD_ARO_REV_CUST.ERROR,
    error,
    status: FETCH_STATUS.ERROR
  })
};

export const getDashboardAroRevCustRequest = (state) => ({
  type: ACTIONS.GET_DASHBOARD_ARO_REV_CUST_CALL,
  payload: state
});

export const getDashboardRevCarAroActions = {
  pending: {
    type: ACTIONS.GET_DASHBOARD_REV_CAR_ARO.PENDING,
    status: FETCH_STATUS.LOADING
  },
  success: (data) => ({
    type: ACTIONS.GET_DASHBOARD_REV_CAR_ARO.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS
  }),
  error: (error) => ({
    type: ACTIONS.GET_DASHBOARD_REV_CAR_ARO.ERROR,
    error,
    status: FETCH_STATUS.ERROR
  })
};

export const getDashboardRevCarAroRequest = (state) => ({
  type: ACTIONS.GET_DASHBOARD_REV_CAR_ARO_CALL,
  payload: state
});

export const getYelpCustomerCallApptsActions = {
  pending: {
    type: ACTIONS.GET_YELP_CUSTOMER_CALL_APTS.PENDING,
    status: FETCH_STATUS.LOADING
  },
  success: (data) => ({
    type: ACTIONS.GET_YELP_CUSTOMER_CALL_APTS.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS
  }),
  error: (error) => ({
    type: ACTIONS.GET_YELP_CUSTOMER_CALL_APTS.ERROR,
    error,
    status: FETCH_STATUS.ERROR
  })
};

export const getYelpCustomerCallApptsRequest = (state) => ({
  type: ACTIONS.GET_YELP_CUSTOMER_CALL_APTS_CALL,
  payload: state
});

export const getYelpPageVisitsActions = {
  pending: {
    type: ACTIONS.GET_YELP_PAGE_VISITS.PENDING,
    status: FETCH_STATUS.LOADING
  },
  success: (data) => ({
    type: ACTIONS.GET_YELP_PAGE_VISITS.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS
  }),
  error: (error) => ({
    type: ACTIONS.GET_YELP_PAGE_VISITS.ERROR,
    error,
    status: FETCH_STATUS.ERROR
  })
};

export const getYelpPageVisitsRequest = (state) => ({
  type: ACTIONS.GET_YELP_PAGE_VISITS_CALL,
  payload: state
});

export const getYelpCostPerLeadActions = {
  pending: {
    type: ACTIONS.GET_YELP_COST_PER_LEAD.PENDING,
    status: FETCH_STATUS.LOADING
  },
  success: (data) => ({
    type: ACTIONS.GET_YELP_COST_PER_LEAD.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS
  }),
  error: (error) => ({
    type: ACTIONS.GET_YELP_COST_PER_LEAD.ERROR,
    error,
    status: FETCH_STATUS.ERROR
  })
};

export const getYelpCostPerLeadRequest = (state) => ({
  type: ACTIONS.GET_YELP_COST_PER_LEAD_CALL,
  payload: state
});

export const getYelpConversationRateActions = {
  pending: {
    type: ACTIONS.GET_YELP_CONVERSATION_RATE.PENDING,
    status: FETCH_STATUS.LOADING
  },
  success: (data) => ({
    type: ACTIONS.GET_YELP_CONVERSATION_RATE.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS
  }),
  error: (error) => ({
    type: ACTIONS.GET_YELP_CONVERSATION_RATE.ERROR,
    error,
    status: FETCH_STATUS.ERROR
  })
};

export const getYelpConversationRateRequest = (state) => ({
  type: ACTIONS.GET_YELP_CONVERSATION_RATE_CALL,
  payload: state
});

export const getYelpCTRPerClicksActions = {
  pending: {
    type: ACTIONS.GET_YELP_CTR_PER_CLICKS.PENDING,
    status: FETCH_STATUS.LOADING
  },
  success: (data) => ({
    type: ACTIONS.GET_YELP_CTR_PER_CLICKS.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS
  }),
  error: (error) => ({
    type: ACTIONS.GET_YELP_CTR_PER_CLICKS.ERROR,
    error,
    status: FETCH_STATUS.ERROR
  })
};

export const getYelpCTRPerClicksRequest = (state) => ({
  type: ACTIONS.GET_YELP_CTR_PER_CLICKS_CALL,
  payload: state
});

export const getReferallRevenueActions = {
  pending: {
    type: ACTIONS.GET_REFERAL_REVENUE_DATA.PENDING,
    status: FETCH_STATUS.LOADING
  },
  success: (data) => ({
    type: ACTIONS.GET_REFERAL_REVENUE_DATA.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS
  }),
  error: (error) => ({
    type: ACTIONS.GET_REFERAL_REVENUE_DATA.ERROR,
    error,
    status: FETCH_STATUS.ERROR
  })
};

export const getReferallRevenueRequest = (state) => ({
  type: ACTIONS.GET_REFERAL_REVENUE_DATA_CALL,
  payload: state
});

export const getRepairpalRevenueActions = {
  pending: {
    type: ACTIONS.GET_REPAIRPAL_REVENUE_DATA.PENDING,
    status: FETCH_STATUS.LOADING
  },
  success: (data) => ({
    type: ACTIONS.GET_REPAIRPAL_REVENUE_DATA.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS
  }),
  error: (error) => ({
    type: ACTIONS.GET_REPAIRPAL_REVENUE_DATA.ERROR,
    error,
    status: FETCH_STATUS.ERROR
  })
};

export const getRepairpalRevenueRequest = (state) => ({
  type: ACTIONS.GET_REPAIRPAL_REVENUE_DATA_CALL,
  payload: state
});

export const getRepairpalInvestmentAction = {
  pending: {
    type: ACTIONS.GET_REPAIRPAL_INVESTMENT_DATA.PENDING,
    status: FETCH_STATUS.LOADING
  },
  success: (data) => ({
    type: ACTIONS.GET_REPAIRPAL_INVESTMENT_DATA.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS
  }),
  error: (error) => ({
    type: ACTIONS.GET_REPAIRPAL_INVESTMENT_DATA.ERROR,
    error,
    status: FETCH_STATUS.ERROR
  })
};

export const getRepairpalInvestmentRequest = (state) => ({
  type: ACTIONS.GET_REPAIRPAL_INVESTMENT_DATA_CALL,
  payload: state
});

export const getBookedAppointmentChartsDataAction = {
  pending: {
    type: ACTIONS.GET_BOOKED_APPOINTMENT_CHARTS_DATA.PENDING,
    status: FETCH_STATUS.LOADING
  },
  success: (data) => ({
    type: ACTIONS.GET_BOOKED_APPOINTMENT_CHARTS_DATA.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS
  }),
  error: (error) => ({
    type: ACTIONS.GET_BOOKED_APPOINTMENT_CHARTS_DATA.ERROR,
    error,
    status: FETCH_STATUS.ERROR
  })
};

export const getBookedAppointmentChartsDataRequest = (state) => ({
  type: ACTIONS.GET_BOOKED_APPOINTMENT_CHARTS_DATA_CALL,
  payload: state
});
