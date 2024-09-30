import { BASE_URL } from "../store/services/URL";
import parseError from "../utils/ErrorParse";
import axios from "../store/services/axios";
import { getToken } from "./Tokens";



export const apiGetRequest = (endpoint, token = null, props = {}) => {
  return apiRequest("GET", endpoint, token, props);
};


export const apiPatchRequest = (endpoint, payload, token = null) => {
  return apiRequest("PATCH", endpoint, token, { data: payload });
};

export const apiPutRequest = (endpoint, payload, token = null) => {
  return apiRequest("PUT", endpoint, token, { data: payload });
};

export const apiFormDataRequest = (endpoint, payload, token = null) => {
  return apiFormRequest("POST", endpoint, token, { data: payload });
};

export const apiPostRequest = (endpoint, payload, token = null) => {
  return apiRequest("POST", endpoint, token, { data: payload });
};
export const apiRequest = (method, endpoint, token = null, props = {}) => {
  if (!token) {
    token = getToken();
  }
  const params = {
    method: method,
    baseURL: BASE_URL,
    url: endpoint,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };
  Object.assign(params, props);
  if (token) {
    params.headers.Authorization = `Bearer ${token}`;
  }

  return axios(params).catch((err) => parseError(err));
};

export const apiFormRequest = (method, endpoint, token = null, props = {}) => {
  if (!token) {
    token = getToken();
  }
  const params = {
    method: method,
    // baseURL: process.env.REACT_APP_BASE_URL,
    baseURL: BASE_URL,
    url: endpoint,
    headers: {
      "Content-Type": "multipart/form-data"
    }
  };
  Object.assign(params, props);
  if (token) {
    params.headers.Authorization = `Bearer ${token}`;
  }

  return axios(params).catch((err) => parseError(err));
};
