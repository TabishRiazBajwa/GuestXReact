import { apiCall } from "./service";
import { URL_LOGIN, URL_RESET_PASSWORD } from "./URL";

const token = localStorage.getItem("accessToken");

export const api = {
  loginRequest(loginParams) {
    return apiCall.post({
      url: URL_LOGIN,
      isAuthToken: false,
      params: loginParams
    });
  },
  resetPasswordRequest(loginParams) {
    return apiCall.post({
      url: URL_RESET_PASSWORD,
      isAuthToken: false,
      params: loginParams
    });
  }
};

export default api;
