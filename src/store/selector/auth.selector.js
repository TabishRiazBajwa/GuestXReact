import createSelector from "../../utils/reselect";

const userStateData = (state) => {
  const { users } = state;
  return users || {};
};

export const changePasswordErrorSelector = createSelector(
  userStateData,
  (users) => users.get("changePasswordError") || []
);

export const changePasswordLoadingSelector = createSelector(
  userStateData,
  (users) => users.get("changePasswordLoading") || false
);
export const changePasswordSuccessSelector = createSelector(
  userStateData,
  (users) => users.get("changePasswordSuccess") || false
);
export const sendOTPSuccessSelector = createSelector(
  userStateData,
  (users) => users.get("sendOTPSuccess") || false
);

export const getUser = createSelector(userStateData, (users) => {
  const u = users.get("user") || null;
  if (u) {
    const data = JSON.parse(JSON.stringify(u));
    if (data && Object.keys(data).length > 0) {
      data.name = data?.service_provider?.name ?? data.name;
    }
    return data;
  }
  return u;
});

export const confirmOtpSuccessSelector = createSelector(
  userStateData,
  (users) => users.get("confirmOtpSuccess") || false
);

export const confirmOtpErrorSelector = createSelector(
  userStateData,
  (users) => users.get("confirmOtpError") || null
);

export const getLoading = createSelector(
  userStateData,
  (users) => users.get("loading") || false
);

export const sendOTPLoadingSelector = createSelector(
  userStateData,
  (users) => users.get("sendOTPLoading") || false
);

export const getSelectedTabSelector = createSelector(
  userStateData,
  (users) =>
    users.get("selectedTabData") || { children: [], id: 1, name: "Overview" }
);

export const getLogoutLoading = createSelector(
  userStateData,
  (users) => users.get("logoutLoader") || false
);

export const getResendEmailCodeLoader = createSelector(
  userStateData,
  (users) => users.get("resendEmailCodeLoader") || false
);
