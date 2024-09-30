import ACTIONS from "../constants";

export const showMessageBox = (data) => ({
  type: ACTIONS.SHOW_MESSAGE_BOX,
  data
});

export const darkMode = (data) => ({
  type: ACTIONS.DARK_MODE,
  data
});

export const showConfirmationBox = (data) => ({
  type: ACTIONS.SHOW_CONFIRMATION_BOX,
  data
});

export const clearExipryDialogue = () => ({
  type: ACTIONS.CLEAR_MESSAGE_BOX_FOR_TIME_EXPIRY
});

export const showMessageBoxForTimeExpiry = (data) => ({
  type: ACTIONS.SHOW_MESSAGE_BOX_FOR_TIME_EXPIRY,
  data
});

export const setToastMessage = (data) => ({
  type: ACTIONS.SET_TOAST_MESSAGE,
  data
});

export const clearToastMessage = () => ({
  type: ACTIONS.CLEAR_TOAST_MESSAGE
});
