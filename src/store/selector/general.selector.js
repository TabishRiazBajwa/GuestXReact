import createSelector from "../../utils/reselect";

const generalStateData = (state) => {
  const { general } = state;
  return general || {};
};

export const getMessageBoxObj = createSelector(
  generalStateData,
  (general) => general.get("showMessageBox") || {}
);

export const getDarkModeEnabled = createSelector(
  generalStateData,
  (general) => general.get("darkMode") || {}
);

export const getConfirmationMessageBoxObj = createSelector(
  generalStateData,
  (general) => general.get("showConfirmationMessageBox") || {}
);
export const getMessageBoxOnExpiryObj = createSelector(
  generalStateData,
  (general) => general.get("showMessageBoxForTimeExpiryData") || {}
);

export const getToastMessage = createSelector(
  generalStateData,
  (general) => general.get("toastMessage") || null
);
