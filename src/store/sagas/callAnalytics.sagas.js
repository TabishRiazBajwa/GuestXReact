import { call, put, all, takeEvery } from "redux-saga/effects";
import { generalActions, callAnalyticsAction } from "../actions";
import api from "../services/callAnalytics.services";
import ACTIONS from "../constants";
import { TOAST_TYPE } from "../../Constants/constant";

function* getUnMatchedCustomersSaga(state) {
  try {
    yield put(callAnalyticsAction.getUnMatchedCustomersActions.pending);

    const response = yield call(api.getUnMatchedCustomersApi, state.payload);
    if (response) {
      yield put(
        callAnalyticsAction.getUnMatchedCustomersActions.success(response)
      );
    }
  } catch (error) {
    yield put(
      generalActions.setToastMessage({
        type: TOAST_TYPE.ERROR,
        title: error?.message ?? "Something went wrong!",
      })
    );
    yield put(callAnalyticsAction.getUnMatchedCustomersActions.error(error));
  }
}

function* getShowNoShowsDataSaga(state) {
  try {
    yield put(callAnalyticsAction.getShowNoShowsDataAction.pending);

    const response = yield call(api.getShowNoShowsDataApi, state.payload);
    if (response) {
      yield put(callAnalyticsAction.getShowNoShowsDataAction.success(response));
    }
  } catch (error) {
    yield put(
      generalActions.setToastMessage({
        type: TOAST_TYPE.ERROR,
        title: error?.message ?? "Something went wrong!",
      })
    );
    yield put(callAnalyticsAction.getShowNoShowsDataAction.error(error));
  }
}

function* getNOBookedAppointmentChartsDataSaga(state) {
  try {
    yield put(
      callAnalyticsAction.getNOBookedAppointmentChartsDataAction.pending
    );

    const response = yield call(
      api.getNOBookedAppointmentChartsDataApi,
      state.payload
    );
    if (response) {
      yield put(
        callAnalyticsAction.getNOBookedAppointmentChartsDataAction.success(
          response
        )
      );
    }
  } catch (error) {
    yield put(
      generalActions.setToastMessage({
        type: TOAST_TYPE.ERROR,
        title: error?.message ?? "Something went wrong!",
      })
    );
    yield put(
      callAnalyticsAction.getNOBookedAppointmentChartsDataAction.error(error)
    );
  }
}

function* getBookedAppointmentChartsDataSaga(state) {
  try {
    yield put(callAnalyticsAction.getBookedAppointmentChartsDataAction.pending);

    const response = yield call(
      api.getBookedAppointmentChartsDataApi,
      state.payload
    );
    if (response) {
      yield put(
        callAnalyticsAction.getBookedAppointmentChartsDataAction.success(
          response
        )
      );
    }
  } catch (error) {
    yield put(
      generalActions.setToastMessage({
        type: TOAST_TYPE.ERROR,
        title: error?.message ?? "Something went wrong!",
      })
    );
    yield put(
      callAnalyticsAction.getBookedAppointmentChartsDataAction.error(error)
    );
  }
}

function* getRevenueAndCustomerSaga(state) {
  try {
    yield put(callAnalyticsAction.getRevenueAndCustomerAction.pending);

    const response = yield call(api.getRevenueAndCustomerApi, state.payload);
    if (response) {
      yield put(
        callAnalyticsAction.getRevenueAndCustomerAction.success(response)
      );
    }
  } catch (error) {
    yield put(
      generalActions.setToastMessage({
        type: TOAST_TYPE.ERROR,
        title: error?.message ?? "Something went wrong!",
      })
    );
    yield put(callAnalyticsAction.getRevenueAndCustomerAction.error(error));
  }
}

function* getCoachingInsightSaga(state) {
  try {
    yield put(callAnalyticsAction.getCoachingInsightAction.pending);

    const response = yield call(api.getCoachingInsightApi, state.payload);
    if (response) {
      yield put(callAnalyticsAction.getCoachingInsightAction.success(response));
    }
  } catch (error) {
    yield put(
      generalActions.setToastMessage({
        type: TOAST_TYPE.ERROR,
        title: error?.message ?? "Something went wrong!",
      })
    );
    yield put(callAnalyticsAction.getCoachingInsightAction.error(error));
  }
}

function* getUnscoredCallsSaga(state) {
  try {
    yield put(callAnalyticsAction.getUnscoredCallsAction.pending);
    // const response = { message: "hello" };

    const response = yield call(api.getUnscoredCallsApi, state.payload);
    if (response) {
      yield put(callAnalyticsAction.getUnscoredCallsAction.success(response));
    }
  } catch (error) {
    yield put(
      generalActions.setToastMessage({
        type: TOAST_TYPE.ERROR,
        title: error?.message ?? "Something went wrong!",
      })
    );
    yield put(callAnalyticsAction.getUnscoredCallsAction.error(error));
  }
}

function* getCountPerCallsDataSaga(state) {
  try {
    yield put(callAnalyticsAction.getCountPerCallsDataAction.pending);
    // const response = { message: "hello" };

    const response = yield call(api.callAnalyticsApi, state.payload);
    if (response) {
      yield put(
        callAnalyticsAction.getCountPerCallsDataAction.success(response)
      );
    }
  } catch (error) {
    yield put(
      generalActions.setToastMessage({
        type: TOAST_TYPE.ERROR,
        title: error?.message ?? "Something went wrong!",
      })
    );
    yield put(callAnalyticsAction.getCountPerCallsDataAction.error(error));
  }
}
function* getCoversationDetailsSaga(state) {
  try {
    yield put(callAnalyticsAction.getConversationDetailsAction.pending);
    // const response = { message: "hello" };

    const response = yield call(api.getConversationDetailsApi, state.payload);
    if (response) {
      yield put(
        callAnalyticsAction.getConversationDetailsAction.success(response)
      );
    }
  } catch (error) {
    yield put(
      generalActions.setToastMessage({
        type: TOAST_TYPE.ERROR,
        title: error?.message ?? "Something went wrong!",
      })
    );
    yield put(callAnalyticsAction.getConversationDetailsAction.error(error));
  }
}
function* getConversationInsightsSaga(state) {
  try {
    yield put(callAnalyticsAction.getConversationInsightsAction.pending);

    const response = yield call(api.getConversationInsightsApi, state.payload);
    if (response) {
      yield put(
        callAnalyticsAction.getConversationInsightsAction.success(response)
      );
    }
  } catch (error) {
    yield put(
      generalActions.setToastMessage({
        type: TOAST_TYPE.ERROR,
        title: error?.message ?? "Something went wrong!",
      })
    );
    yield put(callAnalyticsAction.getConversationInsightsAction.error(error));
  }
}
function* getMarketingBusinessReportsSaga(state) {
  try {
    yield put(callAnalyticsAction.getMarketingBusinessReportsAction.pending);

    const response = yield call(
      api.getMarketingBusinessReportsApi,
      state.payload
    );
    if (response) {
      yield put(
        callAnalyticsAction.getMarketingBusinessReportsAction.success(response)
      );
    }
  } catch (error) {
    yield put(
      generalActions.setToastMessage({
        type: TOAST_TYPE.ERROR,
        title: error?.message ?? "Something went wrong!",
      })
    );
    yield put(
      callAnalyticsAction.getMarketingBusinessReportsAction.error(error)
    );
  }
}

function* getDashboardAiDataSaga(state) {
  try {
    yield put(callAnalyticsAction.getDashboardAiDataAction.pending);

    const response = yield call(api.getDashboardAiApi, state.payload);
    if (response) {
      yield put(callAnalyticsAction.getDashboardAiDataAction.success(response));
    }
  } catch (error) {
    yield put(
      generalActions.setToastMessage({
        type: TOAST_TYPE.ERROR,
        title: error?.message ?? "Something went wrong!",
      })
    );
    yield put(callAnalyticsAction.getDashboardAiDataAction.error(error));
  }
}

function* getDashboardSankychartDataSaga(state) {
  try {
    yield put(callAnalyticsAction.getDashboardSankychartAction.pending);

    const response = yield call(api.getDashboardSankyChartApi, state.payload);
    if (response) {
      yield put(
        callAnalyticsAction.getDashboardSankychartAction.success(response)
      );
    }
  } catch (error) {
    yield put(
      generalActions.setToastMessage({
        type: TOAST_TYPE.ERROR,
        title: error?.message ?? "Something went wrong!",
      })
    );
    yield put(callAnalyticsAction.getDashboardSankychartAction.error(error));
  }
}

function* getRankingReportsDataSaga(state) {
  try {
    yield put(callAnalyticsAction.getRankingReportsAction.pending);

    const response = yield call(api.getRankingReportsApi, state.payload);
    if (response) {
      yield put(callAnalyticsAction.getRankingReportsAction.success(response));
    }
  } catch (error) {
    yield put(callAnalyticsAction.getRankingReportsAction.error(error));
  }
}

function* getFilterServiceAdvisorListSaga(state) {
  try {
    yield put(callAnalyticsAction.getFilterServiceAdvisorListAction.pending);

    const response = yield call(api.getFilterServiceAdvisorList, state.payload);
    if (response) {
      yield put(
        callAnalyticsAction.getFilterServiceAdvisorListAction.success(response)
      );
    }
  } catch (error) {
    yield put(
      callAnalyticsAction.getFilterServiceAdvisorListAction.error(error)
    );
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(
      ACTIONS.GET_REVENUE_AND_CUSTOMER_DATA_CALL,
      getRevenueAndCustomerSaga
    ),
    takeEvery(
      ACTIONS.GET_COACHING_INSIGHT_CALL_DATA_CALL,
      getCoachingInsightSaga
    ),
    takeEvery(
      ACTIONS.GET_BOOKED_APPTS_DATA_CALL,
      getBookedAppointmentChartsDataSaga
    ),
    takeEvery(
      ACTIONS.GET_NO_BOOKED_APPTS_DATA_CALL,
      getNOBookedAppointmentChartsDataSaga
    ),

    takeEvery(ACTIONS.GET_UNMATCHED_CUSTOMERS_CALL, getUnMatchedCustomersSaga),
    takeEvery(ACTIONS.GET_SHOW_NOSHOW_DATA_CALL, getShowNoShowsDataSaga),
    takeEvery(ACTIONS.GET_COUNT_PER_CALL_DATA_CALL, getCountPerCallsDataSaga),
    takeEvery(ACTIONS.GET_CONVERSATION_DETAILS_CALL, getCoversationDetailsSaga),
    takeEvery(
      ACTIONS.GET_CONVERSATION_INSIGHTS_CALL,
      getConversationInsightsSaga
    ),
    takeEvery(
      ACTIONS.GET_MARKETING_BUSINESS_REPORTS_CALL,
      getMarketingBusinessReportsSaga
    ),
    takeEvery(ACTIONS.GET_DASHBOARD_AI_DATA_CALL, getDashboardAiDataSaga),
    takeEvery(
      ACTIONS.GET_DASHBOARD_SANKYCHART_DATA_CALL,
      getDashboardSankychartDataSaga
    ),
    takeEvery(ACTIONS.GET_RANKING_REPORTS_CALL, getRankingReportsDataSaga),
    takeEvery(
      ACTIONS.GET_FILTER_SERVICE_ADVISOR_CALL,
      getFilterServiceAdvisorListSaga
    ),
  ]);
}
