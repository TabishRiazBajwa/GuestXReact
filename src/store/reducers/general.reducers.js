import { fromJS } from "immutable";
import ACTIONS from "../constants";

const initialState = fromJS({
  showMessageBox: null,
  showMessageBoxForTimeExpiryData: null,
  toastMessage: null,
  showConfirmationMessageBox: null
});

export default function generalReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.SHOW_MESSAGE_BOX: {
      return state.set("showMessageBox", action.data);
    }

    case ACTIONS.DARK_MODE: {
      console.log("action.data", action.data);
      return state.set("darkMode", action.data);
    }
    case ACTIONS.SHOW_CONFIRMATION_BOX: {
      return state.set("showConfirmationMessageBox", action.data);
    }

    case ACTIONS.SHOW_MESSAGE_BOX_FOR_TIME_EXPIRY: {
      return state.set("showMessageBoxForTimeExpiryData", action.data);
    }

    case ACTIONS.CLEAR_MESSAGE_BOX_FOR_TIME_EXPIRY: {
      return state.set("showMessageBoxForTimeExpiryData", null);
    }

    case ACTIONS.CLEAR_SHOW_MESSAGE_BOX: {
      return state.set("showMessageBox", null);
    }
    case ACTIONS.SET_TOAST_MESSAGE: {
      return state.set("toastMessage", action.data);
    }
    case ACTIONS.CLEAR_TOAST_MESSAGE: {
      return state.set("toastMessage", null);
    }
    default: {
      return state;
    }
  }
}
