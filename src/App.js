import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UseRoute } from "./config/UseRoutes";
import { LoginContext } from "./helpers/LoginContext";
import { apiPostRequest } from "./helpers/Requests";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "react-toastify/dist/ReactToastify.css";
import { getRefreshToken, setToken } from "./helpers/Tokens";
import { ToastContainer, Slide } from "react-toastify";
import { LocalizationProvider } from "@mui/x-date-pickers";
import ToastMessage from "./components/Toaster/ToastMessage";
import { getDarkModeEnabled } from "./store/selector/general.selector";
import { useSelector } from "react-redux";

const App = () => {
  const navigate = useNavigate();
  const [sideBarPadding, setSideBarPadding] = useState(false);
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");
  const darkModeEnabled = useSelector(getDarkModeEnabled);
  console.log("data in reducer e", darkModeEnabled);
  useEffect(() => {
    // Add event listener to mode in local storage
    const handleModeChange = () => {
      console.log("Local storage mode changed:", localStorage.getItem("mode"));
      localStorage.getItem("mode");
      setMode(localStorage.getItem("mode") || "light");
    };

    window.addEventListener("storage", handleModeChange);

    return () => {
      window.removeEventListener("storage", handleModeChange);
    };
  }, []);

  var refreshToken;

  const clearSession = () => {
    clearTimeout(refreshToken);
  };
  const refreshTokenTimeout = (expirationTime) => {
    refreshToken = setTimeout(() => {
      refreshTokenRequest();
    }, expirationTime * 1000);
  };

  const refreshTokenRequest = async () => {
    const token = getRefreshToken();
    const data = {
      token
    };
    if (!token) {
      return;
    }
    try {
      let res = await apiPostRequest("refresh-token", data);
      if (res.status !== 200) {
        console.log("Throw Some Errors");
      }
      if (res.status === 200) {
        setToken(res.data.data.AccessToken);
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        const refreshTokenDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem("expirationDate", expirationDate);
        localStorage.setItem("refreshTokenDate", refreshTokenDate);
        navigate("/dashboard");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className={`${darkModeEnabled.mode === "dark" ? "dark" : ""}`}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <LoginContext.Provider
            value={{
              refreshTokenTimeout,
              clearSession,
              setSideBarPadding,
              sideBarPadding
            }}
          >
            <UseRoute />
          </LoginContext.Provider>
        </LocalizationProvider>

        <ToastMessage />
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          transition={Slide}
        />
      </div>
    </>
  );
};

export default App;
