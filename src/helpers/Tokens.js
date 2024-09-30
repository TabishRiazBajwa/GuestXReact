export const setToken = (token) => {
  return localStorage.setItem("accessToken", token);
};

export const setRefreshToken = (token) => {
  return localStorage.setItem("refreshToken", token);
};
export const setExpireTime = ({ logInTime, warnTime, logoutTime }) => {
  localStorage.setItem("logInTime", logInTime);
  localStorage.setItem("warnTime", warnTime);
  return localStorage.setItem("logoutTime", logoutTime);
};



export const getToken = () => {
  return localStorage.getItem("accessToken")
    ? localStorage.getItem("accessToken")
    : null;
};

export const getRefreshToken = () => {
  return localStorage.getItem("refreshToken");
};

export const getCurrentUser = () => {
  return localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
};
