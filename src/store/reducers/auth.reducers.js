import { fromJS } from "immutable";
import ACTIONS from "../constants";

const initialState = fromJS({
  user: {},
  loading: false,
  authError: "",
  error: "",
  logoutLoader: false,
  confirmOtpSuccess: false,
  selectedTabData: null
});

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.RESET_PASSWORD.PENDING: {
      return state
        .set("changePasswordLoading", false)
        .set("changePasswordError", false)
        .set("changePasswordSuccess", false);
    }

    case ACTIONS.RESET_PASSWORD.SUCCESS: {
      return state
        .set("changePasswordLoading", false)
        .set("changePasswordError", false)
        .set("changePasswordSuccess", action.data);
    }
    case ACTIONS.RESET_PASSWORD.ERROR: {

      return state
        .set("changePasswordLoading", false)
        .set("changePasswordError", action.error)
        .set("changePasswordSuccess", false);
    }
    case ACTIONS.LOGIN.PENDING: {
      return state.set("loading", true);
    }
    case ACTIONS.AUTH: {
      return state.set("auth", action.data);
    }
    case ACTIONS.LOGIN.SUCCESS: {
      return state
        .set("loading", false)
        .set("error", "")
        .set("user", action.data);
    }
    case ACTIONS.LOGIN.ERROR: {
      return state
        .set("loading", false)
        .set("authError", JSON.parse(action.error.message).detail);
    }

    default: {
      return state;
    }
  }
}
