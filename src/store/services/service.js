import axios from "./axios";
import parseError from "../../utils/ErrorParse";
// import { USER_ROLE } from "../../Constants/constant";

function withAPIKeys(requestConfig) {
  const token = localStorage.getItem("token");
  if (token) {
    return {
      ...requestConfig,
      headers: {
        ...requestConfig?.headers,
        accept: "application/json",
        Authorization: `Bearer ${token}` ?? "A",
        "Content-Type": "application/json"
      }
    };
  }
  return {
    ...requestConfig,
    headers: {
      ...requestConfig?.headers,
      "Content-Type": "application/json"
    }
  };
}
export default withAPIKeys;
function withMultipartAPIKeys(requestConfig) {
  const token = localStorage.getItem("token");
  if (token) {
    return {
      ...requestConfig,
      headers: {
        ...requestConfig?.headers,
        Authorization: `Bearer ${token}` ?? "A",
        "Content-Type": "multipart/form-data"
      }
    };
  }
  return {
    ...requestConfig,
    headers: {
      ...requestConfig?.headers,
      "Content-Type": "multipart/form-data"
    }
  };
}

const addPageNumber = (url, params, skipQueryParams) => {
  let str = "";
  if (params.page) {
    str = `page=${params.page}`;
  }
  if (params.per_page) {
    str = `${str}${str ? "&" : ""}per_page=${params.per_page}`;
  }
  if (params.search) {
    str = `${str}${str ? "&" : ""}search=${params.search}`;
  }
  if (params.sort_order) {
    str = `${str}${str ? "&" : ""}sort_order=${params.sort_order}`;
  }
  if (params.sort_field) {
    str = `${str}${str ? "&" : ""}sort_field=${params.sort_field}`;
  }

  if (params.type) {
    str = `${str}${str ? "&" : ""}type=${params.type}`;
  }
  if (params.location) {
    str = `location=${params.location}`;
  }
  if (params.date) {
    str = `${str}${str ? "&" : ""}start_month=${params.startMonth}&end_month=${
      params.date.endMonth
    }&start_year=${params.date.startYear}&end_year=${params.date.endYear}`;
  }

  if (params.id) {
    str = `${str}${str ? "&" : ""}id=${params.id}`;
  }
  if (params.pt_id) {
    str = `${str}${str ? "&" : ""}pt_id=${params.pt_id}`;
  }
  if (params.c_id) {
    str = `${str}${str ? "&" : ""}c_id=${params.c_id}`;
  }
  if (params.version_id) {
    str = `${str}${str ? "&" : ""}version_id=${params.version_id}`;
  }
  if (params.state_id) {
    str = `${str}${str ? "&" : ""}state_id=${params.state_id}`;
  }
  if (params.sc_id) {
    str = `${str}${str ? "&" : ""}sc_id=${params.sc_id}`;
  }
  if (params.status) {
    str = `${str}${str ? "&" : ""}status=${params.status}`;
  }

  if (skipQueryParams) {
    return str ? `${url}?${str}` : url;
  }

  console.log(str, "String");

  return str ? `${url}?${str}` : url;
};

export const apiCall = {
  get: (payload) =>
    axios
      .get(
        payload.url,
        { params: payload.params, headers: withAPIKeys().headers },
        withAPIKeys()
      )
      .then((response) => response.data)
      .catch((error) => parseError(error)),
  // OLD METHOD
  // get: (payload) =>
  // axios
  //   .get(
  //     addPageNumber(
  //       // payload.responseType,
  //       payload.url,
  //       payload.params,
  //       payload.hasOwnProperty("skipQueryParams")
  //     ),
  //     withAPIKeys()
  //   )
  //   .then((response) => response.data)
  //   .catch((error) => parseError(error)),
  post: (payload) =>
    axios
      .post(
        addPageNumber(
          payload.url,
          payload.params,
          payload.hasOwnProperty("skipQueryParams")
        ),
        payload.hasOwnProperty("bodyParams") && payload.bodyParams !== null
          ? { filter: payload.bodyParams }
          : payload.params,
        withAPIKeys()
      )
      .then((response) => response.data)
      .catch((error) => parseError(error)),
  getURLWithId: (payload) =>
    axios
      .get(
        addPageNumber(`${payload.url}${payload.params.pk}`, payload.params.pk),
        withAPIKeys()
      )
      .then((response) => response.data)
      .catch((error) => parseError(error)),
  postURLWithId: (payload) =>
    axios
      .post(
        addPageNumber(`${payload.url}${payload.params.id}`, payload.params.id),
        {},
        withAPIKeys()
      )
      .then((response) => response.data)
      .catch((error) => parseError(error)),
  put: (payload) =>
    axios
      .put(
        addPageNumber(
          payload.url,
          payload.params,
          payload.hasOwnProperty("skipQueryParams")
        ),
        payload.params,
        withAPIKeys()
      )
      .then((response) => response.data)
      .catch((error) => parseError(error)),
  patch: (payload) =>
    axios
      .patch(
        addPageNumber(payload.url, payload.params),
        payload.params,
        withAPIKeys()
      )
      .then((response) => response.data)
      .catch((error) => parseError(error)),
  delete: (payload) =>
    axios
      .delete(addPageNumber(payload.url, payload.params), withAPIKeys())
      .then((response) => {
        // if (response) {
        //   let user = JSON.parse(localStorage.getItem('user') as string);
        //   user.is_super_host = false;
        //   localStorage.setItem('user', JSON.stringify(user));
        // }
        return response.data;
        // localStorage.removeItem('user');
        // localStorage.removeItem('accessToken');
      })
      .catch((error) => parseError(error)),
  postFormData: (payload) =>
    axios
      .post(payload.url, payload.params, withMultipartAPIKeys())
      .then((response) => response.data)
      .catch((error) => parseError(error))
};
