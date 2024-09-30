import { combineReducers } from "redux";
import userReducer from "./reducers/auth.reducers";
import callAnalyticsReducer from "./reducers/callAnalytics.reducers";
import marketeAnalyticsReducer from "./reducers/marketeAnalytics.reducers";
import geenralReducer from "./reducers/general.reducers";

import ACTIONS from "../store/constants";

const appReducer = combineReducers({
  users: userReducer,
  general: geenralReducer,
  callAnalytics: callAnalyticsReducer,
  marketeAnalytics:marketeAnalyticsReducer
});

const rootReducer = (state, action) => {
  let prevState = state;
  if (action.type === ACTIONS.LOGOUT_BEGIN) prevState = undefined;

  return appReducer(prevState, action);
};

export default rootReducer;
