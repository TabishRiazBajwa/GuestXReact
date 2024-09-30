import { call, put, all, takeEvery } from "redux-saga/effects";
import { authActions, generalActions } from "../actions";
import api from "../services/auth.services";
import ACTIONS from "../constants";
import { TOAST_TYPE } from "../../Constants/constant";
function* resetPasswordSaga(state) {
  try {
    yield put(authActions.resetPasswordAction.pending);
    const response = yield call(api.resetPasswordRequest, state.payload);
    if (response.access) {
      yield put(authActions.resetPasswordAction.success(response));
    }
  } catch (error) {
    console.log("parseErrorerror", error);
    yield put(authActions.resetPasswordAction.error(error));
  }
}

function* logout() {
  try {
    yield put(authActions.logoutAttempt.pending);
    yield call(api.logoutRequest);
    yield localStorage.clear();
    yield sessionStorage.clear();
    yield put(authActions.logoutAttempt.success());
  } catch (error) {
    yield localStorage.clear();
    yield sessionStorage.clear();
    yield put(authActions.logoutAttempt.error());
  }
}

function* reSendOTPSaga(state) {
  try {
    yield put(authActions.reSendOTP.pending);
    const response = yield call(api.resendOTPApi, state.payload);
    if (response) {
      yield put(
        generalActions.setToastMessage({
          type: TOAST_TYPE.SUCCESS,
          title: "OTP Sent Successfully!"
        })
      );
      yield put(authActions.reSendOTP.success(response));
    }
  } catch (error) {
    yield put(
      generalActions.setToastMessage({
        type: TOAST_TYPE.ERROR,
        title: error.message
      })
    );
    yield put(authActions.reSendOTP.error(error));
  }
}

function* sendOTPForConfirmSaga(state) {
  try {
    yield put(authActions.sendOTPForConfirmation.pending);

    const response = yield call(api.sendOTPForConfirmationApi, state.payload);
    if (response) {
      yield localStorage.setItem("2FARequired", true);
      yield localStorage.setItem("step", false);
      yield put(
        generalActions.setToastMessage({
          type: TOAST_TYPE.SUCCESS,
          title: "OTP Verified Successfully!"
        })
      );
      yield put(authActions.sendOTPForConfirmation.success(response));
    }
  } catch (error) {
    yield put(
      generalActions.setToastMessage({
        type: TOAST_TYPE.ERROR,
        title: error.message
      })
    );
    yield put(authActions.sendOTPForConfirmation.error(error));
  }
}

function* sendOTPSaga(state) {
  try {
    yield put(authActions.sendOTP.pending);
    const response = yield call(api.sendOTPApi, state.payload);
    if (response) {
      yield put(
        generalActions.setToastMessage({
          type: TOAST_TYPE.SUCCESS,
          title: "OTP Sent Successfully!"
        })
      );
      localStorage.setItem("attempt", "0");
      if (state.payload.phone) {
        localStorage.setItem("step", "2");
        localStorage.setItem("2FASetup", state.payload.phone);
        state.payload.navigate("/confirm-otp");
      }
      if (localStorage.getItem("2FASetup") === "null") {
        if (
          localStorage.getItem("2FASetup") === "null" &&
          localStorage.getItem("2FARequired") === "false" &&
          state.payload.via === "phone"
        ) {
          localStorage.setItem("step", "1");
          state.payload.navigate(`/setup-otp`);
        } else if (
          localStorage.getItem("2FASetup") === "null" &&
          localStorage.getItem("2FARequired") === "false"
        ) {
          localStorage.setItem("step", "2.2");
          state.payload.navigate("/verify-otp");
        } else {
          localStorage.setItem("step", false);
          state.payload.navigate("/dashboard");
        }
      }
      if (localStorage.getItem("step") === "1") {
        localStorage.setItem("step", "2.2");
        state.payload.navigate("/verify-otp");
      }

      yield put(authActions.sendOTP.success(response));
    }
  } catch (error) {
    yield put(
      generalActions.setToastMessage({
        type: TOAST_TYPE.ERROR,
        title: error.message
      })
    );
    yield put(authActions.sendOTP.error(error));
  }
}

function* resendEmailVerificatioCode(state) {
  try {
    yield put(authActions.resendEmailVerificatioCode.pending);
    const response = yield call(api.resendEmailVerificatioCode, state.payload);

    if (response) {
      yield put(
        generalActions.setToastMessage({
          type: TOAST_TYPE.SUCCESS,
          title:
            response?.message ??
            "Email verification code successfully send, Check your email"
        })
      );
      yield put(authActions.resendEmailVerificatioCode.success(response));
    }
  } catch (error) {
    yield put(
      generalActions.setToastMessage({
        type: TOAST_TYPE.ERROR,
        title: error?.message ?? "Something went wrong!"
      })
    );
    yield put(authActions.resendEmailVerificatioCode.error(error));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(ACTIONS.RESET_PASSWORD_CALL, resetPasswordSaga),
    takeEvery(ACTIONS.RESEND_OTP_CALL, reSendOTPSaga),
    takeEvery(ACTIONS.SEND_OTP_FOR_CONFIRMATION_CALL, sendOTPForConfirmSaga),
    takeEvery(ACTIONS.SEND_OTP_CALL, sendOTPSaga),
    takeEvery(ACTIONS.LOGOUT_BEGIN, logout),
    takeEvery(ACTIONS.RESEND_VERIFICATION_CODE_CALL, resendEmailVerificatioCode)
  ]);
}
