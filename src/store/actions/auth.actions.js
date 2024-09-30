import ACTIONS, { FETCH_STATUS } from "../constants";

export const resetPasswordAction = {
  pending: {
    type: ACTIONS.RESET_PASSWORD.PENDING,
    status: FETCH_STATUS.LOADING
  },
  success: (data) => ({
    type: ACTIONS.RESET_PASSWORD.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS
  }),
  error: (error) => ({
    type: ACTIONS.RESET_PASSWORD.ERROR,
    error,
    status: FETCH_STATUS.ERROR
  })
};

export const resetPasswordRequest = (state) => ({
  type: ACTIONS.RESET_PASSWORD_CALL,
  payload: state
});

export const reSendOTP = {
  pending: {
    type: ACTIONS.RESEND_OTP.PENDING,
    status: FETCH_STATUS.LOADING
  },
  success: (data) => ({
    type: ACTIONS.RESEND_OTP.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS
  }),
  error: (error) => ({
    type: ACTIONS.RESEND_OTP.ERROR,
    error,
    status: FETCH_STATUS.ERROR
  })
};

export const reSendOTPRequest = (state) => ({
  type: ACTIONS.RESEND_OTP_CALL,
  payload: state
});

export const sendOTPForConfirmation = {
  pending: {
    type: ACTIONS.SEND_OTP_FOR_CONFIRMATION.PENDING,
    status: FETCH_STATUS.LOADING
  },
  success: (data) => ({
    type: ACTIONS.SEND_OTP_FOR_CONFIRMATION.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS
  }),
  error: (error) => ({
    type: ACTIONS.SEND_OTP_FOR_CONFIRMATION.ERROR,
    error,
    status: FETCH_STATUS.ERROR
  })
};

export const sendOTPForConfirmationRequest = (state) => ({
  type: ACTIONS.SEND_OTP_FOR_CONFIRMATION_CALL,
  payload: state
});

export const sendOTP = {
  pending: {
    type: ACTIONS.SEND_OTP.PENDING,
    status: FETCH_STATUS.LOADING
  },
  success: (data) => ({
    type: ACTIONS.SEND_OTP.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS
  }),
  error: (error) => ({
    type: ACTIONS.SEND_OTP.ERROR,
    error,
    status: FETCH_STATUS.ERROR
  })
};

export const sendOTPRequest = (state) => ({
  type: ACTIONS.SEND_OTP_CALL,
  payload: state
});

export const loginAttempt = {
  pending: {
    type: ACTIONS.LOGIN.PENDING,
    status: FETCH_STATUS.LOADING
  },
  success: (data) => ({
    type: ACTIONS.LOGIN.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS
  }),
  error: (error) => ({
    type: ACTIONS.LOGIN.ERROR,
    error,
    status: FETCH_STATUS.ERROR
  })
};

export const getLoginRequest = (state) => ({
  type: ACTIONS.LOGIN_CALL,
  payload: state
});

export const logoutAttempt = {
  pending: {
    type: ACTIONS.LOGOUT.PENDING,
    status: FETCH_STATUS.LOADING
  },
  success: () => ({
    type: ACTIONS.LOGOUT.SUCCESS,
    status: FETCH_STATUS.SUCCESS
  }),
  error: (error) => ({
    type: ACTIONS.LOGOUT.ERROR,
    error,
    status: FETCH_STATUS.ERROR
  })
};

export const callLogout = () => ({
  type: ACTIONS.LOGOUT_BEGIN
});

export const storeCurrentOpenTab = (payload) => ({
  type: ACTIONS.STORE_CURRENT_OPEN_TAB,
  payload
});

export const updateAuthUser = (data) => ({
  type: ACTIONS.UPDATE_AUTH_USER,
  data
});

export const authenticatedUser = (state) => ({
  type: ACTIONS.AUTHENTICATED_USER,
  data: state
});

export const resendEmailVerificatioCode = {
  pending: {
    type: ACTIONS.RESEND_VERIFICATION_CODE.PENDING,
    status: FETCH_STATUS.LOADING
  },
  success: (data) => ({
    type: ACTIONS.RESEND_VERIFICATION_CODE.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS
  }),
  error: (error) => ({
    type: ACTIONS.RESEND_VERIFICATION_CODE.ERROR,
    error,
    status: FETCH_STATUS.ERROR
  })
};

export const resendEmailVerificatioCodeRequest = (state) => ({
  type: ACTIONS.RESEND_VERIFICATION_CODE_CALL,
  payload: state
});
