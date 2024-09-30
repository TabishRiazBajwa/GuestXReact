import { call, put, all, takeEvery } from "redux-saga/effects";
import {
  generalActions,
  callAnalyticsAction,
  marketeAnalyticsAction,
} from "../actions";
import api from "../services/marketeAnalytics.services";
import ACTIONS from "../constants";
import { TOAST_TYPE } from "../../Constants/constant";
// getDashboardARORevCustApi(params) {
//   return apiCall.post({
//     url: URL_CRC_ARO,
//     isAuthToken: token,
//     skipQueryParams: true,
//     params
//   });
// },

// getDashboardRevCarROApi(params) {
//   return apiCall.post({
//     url: URL_CRC_REV_CAR_ARO,
//     isAuthToken: token,
//     skipQueryParams: true,
//     params
//   });
// },

function* getYelpRoiSaga(state) {
  try {
    yield put(marketeAnalyticsAction.getYelpRoiActions.pending);
    const response = yield call(api.getYelpRoiApi, state.payload);

    if (response) {
      yield put(marketeAnalyticsAction.getYelpRoiActions.success(response));
    }
  } catch (error) {
    yield put(
      generalActions.setToastMessage({
        type: TOAST_TYPE.ERROR,
        title: error?.message ?? "Something went wrong!",
      })
    );
    yield put(marketeAnalyticsAction.getYelpRoiActions.error(error));
  }
}

// function* getDashboardRevCarROSaga(state) {
//   try {
//     yield put(marketeAnalyticsAction.getDashboardRevCarROActions.pending);
//     const response = yield call(api.getDashboardRevCarROApi, state.payload);

//     if (response) {
//       yield put(
//         marketeAnalyticsAction.getDashboardRevCarROActions.success(response)
//       );
//     }
//   } catch (error) {
//     yield put(
//       generalActions.setToastMessage({
//         type: TOAST_TYPE.ERROR,
//         title: error?.message ?? "Something went wrong!"
//       })
//     );
//     yield put(
//       marketeAnalyticsAction.getDashboardRevCarROActions.error(error)
//     );
//   }
// }

function* getAdwordsCTRAroCallsRoiSaga(state) {
  try {
    yield put(marketeAnalyticsAction.getAdwordsCTRAroCallsRoiActions.pending);
    const response = yield call(api.getAdwordsCTRAroCallsRoiApi, state.payload);

    if (response) {
      yield put(
        marketeAnalyticsAction.getAdwordsCTRAroCallsRoiActions.success(response)
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
      marketeAnalyticsAction.getAdwordsCTRAroCallsRoiActions.error(error)
    );
  }
}

function* getAdwordsCTRAroCallsSaga(state) {
  try {
    yield put(marketeAnalyticsAction.getAdwordsCTRAroCallsActions.pending);
    const response = yield call(api.getAdwordsCTRAroCallsApi, state.payload);

    if (response) {
      console.log(
        66666666,
        response,
        "   rrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
        marketeAnalyticsAction.getAdwordsCTRAroCallsActions.success(response)
      );
      yield put(
        marketeAnalyticsAction.getAdwordsCTRAroCallsActions.success(response)
      );
    }
  } catch (error) {
    yield put(
      generalActions.setToastMessage({
        type: TOAST_TYPE.ERROR,
        title: error?.message ?? "Something went wrong!",
      })
    );
    yield put(marketeAnalyticsAction.getAdwordsCTRAroCallsActions.error(error));
  }
}

function* getAdwordsCTRInvestRateSaga(state) {
  try {
    yield put(marketeAnalyticsAction.getAdwordsCTRInvestRateActions.pending);
    const response = yield call(api.getAdwordsCTRInvestRateApi, state.payload);

    if (response) {
      yield put(
        marketeAnalyticsAction.getAdwordsCTRInvestRateActions.success(response)
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
      marketeAnalyticsAction.getAdwordsCTRInvestRateActions.error(error)
    );
  }
}

function* getDashboardAroRevCustSaga(state) {
  try {
    yield put(marketeAnalyticsAction.getDashboardAroRevCustActions.pending);
    const response = yield call(api.getDashboardAroRevCustApi, state.payload);

    if (response) {
      yield put(
        marketeAnalyticsAction.getDashboardAroRevCustActions.success(response)
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
      marketeAnalyticsAction.getDashboardAroRevCustActions.error(error)
    );
  }
}

function* getDashboardRevCarAroSaga(state) {
  try {
    yield put(marketeAnalyticsAction.getDashboardRevCarAroActions.pending);
    const response = yield call(api.getDashboardRevCarAroApi, state.payload);

    if (response) {
      yield put(
        marketeAnalyticsAction.getDashboardRevCarAroActions.success(response)
      );
    }
  } catch (error) {
    yield put(
      generalActions.setToastMessage({
        type: TOAST_TYPE.ERROR,
        title: error?.message ?? "Something went wrong!",
      })
    );
    yield put(marketeAnalyticsAction.getDashboardRevCarAroActions.error(error));
  }
}

function* getYelpCustomerCallApptsSaga(state) {
  try {
    yield put(marketeAnalyticsAction.getYelpCustomerCallApptsActions.pending);
    const response = yield call(api.getYelpCustomerCallApptsApi, state.payload);

    if (response) {
      yield put(
        marketeAnalyticsAction.getYelpCustomerCallApptsActions.success(response)
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
      marketeAnalyticsAction.getYelpCustomerCallApptsActions.error(error)
    );
  }
}

function* getYelpPageVisitsSaga(state) {
  try {
    yield put(marketeAnalyticsAction.getYelpPageVisitsActions.pending);
    const response = yield call(api.getYelpPageVisitsApi, state.payload);

    if (response) {
      yield put(
        marketeAnalyticsAction.getYelpPageVisitsActions.success(response)
      );
    }
  } catch (error) {
    yield put(
      generalActions.setToastMessage({
        type: TOAST_TYPE.ERROR,
        title: error?.message ?? "Something went wrong!",
      })
    );
    yield put(marketeAnalyticsAction.getYelpPageVisitsActions.error(error));
  }
}

function* getYelpCostPerLeadSaga(state) {
  try {
    yield put(marketeAnalyticsAction.getYelpCostPerLeadActions.pending);
    const response = yield call(api.getYelpCostPerLeadApi, state.payload);

    if (response) {
      yield put(
        marketeAnalyticsAction.getYelpCostPerLeadActions.success(response)
      );
    }
  } catch (error) {
    yield put(
      generalActions.setToastMessage({
        type: TOAST_TYPE.ERROR,
        title: error?.message ?? "Something went wrong!",
      })
    );
    yield put(marketeAnalyticsAction.getYelpCostPerLeadActions.error(error));
  }
}

function* getYelpConversationRateSaga(state) {
  try {
    yield put(marketeAnalyticsAction.getYelpConversationRateActions.pending);
    const response = yield call(api.getYelpConversationRateApi, state.payload);

    if (response) {
      yield put(
        marketeAnalyticsAction.getYelpConversationRateActions.success(response)
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
      marketeAnalyticsAction.getYelpConversationRateActions.error(error)
    );
  }
}

function* getYelpCTRPerClicksSaga(state) {
  try {
    yield put(marketeAnalyticsAction.getYelpCTRPerClicksActions.pending);
    const response = yield call(api.getYelpCTRPerClicksApi, state.payload);

    if (response) {
      yield put(
        marketeAnalyticsAction.getYelpCTRPerClicksActions.success(response)
      );
    }
  } catch (error) {
    yield put(
      generalActions.setToastMessage({
        type: TOAST_TYPE.ERROR,
        title: error?.message ?? "Something went wrong!",
      })
    );
    yield put(marketeAnalyticsAction.getYelpCTRPerClicksActions.error(error));
  }
}

function* getReferallRevenueSaga(state) {
  try {
    yield put(marketeAnalyticsAction.getReferallRevenueActions.pending);
    const response = yield call(api.getReferallRevenueApi, state.payload);

    if (response) {
      yield put(
        marketeAnalyticsAction.getReferallRevenueActions.success(response)
      );
    }
  } catch (error) {
    yield put(
      generalActions.setToastMessage({
        type: TOAST_TYPE.ERROR,
        title: error?.message ?? "Something went wrong!",
      })
    );
    yield put(marketeAnalyticsAction.getReferallRevenueActions.error(error));
  }
}

function* getRepairpalRevenueSaga(state) {
  try {
    yield put(marketeAnalyticsAction.getRepairpalRevenueActions.pending);

    const response = yield call(api.getRepairpalRevenueApi, state.payload);
    if (response) {
      yield put(
        marketeAnalyticsAction.getRepairpalRevenueActions.success(response)
      );
    }
  } catch (error) {
    yield put(
      generalActions.setToastMessage({
        type: TOAST_TYPE.ERROR,
        title: error?.message ?? "Something went wrong!",
      })
    );
    yield put(marketeAnalyticsAction.getRepairpalRevenueActions.error(error));
  }
}

function* getRepairpalInvestmentSaga(state) {
  try {
    yield put(marketeAnalyticsAction.getRepairpalInvestmentAction.pending);

    const response = yield call(api.getRepairpalInvestmentApi, state.payload);
    if (response) {
      yield put(
        marketeAnalyticsAction.getRepairpalInvestmentAction.success(response)
      );
    }
  } catch (error) {
    yield put(
      generalActions.setToastMessage({
        type: TOAST_TYPE.ERROR,
        title: error?.message ?? "Something went wrong!",
      })
    );
    yield put(marketeAnalyticsAction.getRepairpalInvestmentAction.error(error));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(
      ACTIONS.GET_ADWORDS_CTR_ARO_CALLS_ROI_CALL,
      getAdwordsCTRAroCallsRoiSaga
    ),
    takeEvery(
      ACTIONS.GET_ADWORDS_CTR_ARO_CALLS_CALL,
      getAdwordsCTRAroCallsSaga
    ),
    takeEvery(
      ACTIONS.GET_ADWORDS_CTR_INVEST_RATE_CALL,
      getAdwordsCTRInvestRateSaga
    ),
    takeEvery(
      ACTIONS.GET_DASHBOARD_ARO_REV_CUST_CALL,
      getDashboardAroRevCustSaga
    ),
    takeEvery(
      ACTIONS.GET_DASHBOARD_REV_CAR_ARO_CALL,
      getDashboardRevCarAroSaga
    ),
    takeEvery(
      ACTIONS.GET_YELP_CUSTOMER_CALL_APTS_CALL,
      getYelpCustomerCallApptsSaga
    ),
    takeEvery(ACTIONS.GET_YELP_PAGE_VISITS_CALL, getYelpPageVisitsSaga),
    takeEvery(ACTIONS.GET_YELP_COST_PER_LEAD_CALL, getYelpCostPerLeadSaga),
    takeEvery(
      ACTIONS.GET_YELP_CONVERSATION_RATE_CALL,
      getYelpConversationRateSaga
    ),
    takeEvery(ACTIONS.GET_YELP_CTR_PER_CLICKS_CALL, getYelpCTRPerClicksSaga),
    takeEvery(ACTIONS.GET_REFERAL_REVENUE_DATA_CALL, getReferallRevenueSaga),
    takeEvery(ACTIONS.GET_REPAIRPAL_REVENUE_DATA_CALL, getRepairpalRevenueSaga),
    takeEvery(ACTIONS.GET_YELP_ROI_CALL, getYelpRoiSaga),

    takeEvery(
      ACTIONS.GET_REPAIRPAL_INVESTMENT_DATA_CALL,
      getRepairpalInvestmentSaga
    ),
  ]);
}
