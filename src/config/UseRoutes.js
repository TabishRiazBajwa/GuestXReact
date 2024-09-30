import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import GetItemFromLocalstorage from "../utils/GetItemFromLocalstorage";
import { DynamicRoutes } from "./Routes";
import SignIn from "../pages/LogIn/logIn";
import CallAnalyticsPage from "../pages/callAnalytics/index";
import BlockedPage from "../pages/blocked/blocked";
import SideBar from "../components/SideBar/SideBar";

export const UseRoute = () => {
  const currentUser = GetItemFromLocalstorage("user");
  const role = "in";

  const user = JSON.parse(localStorage.getItem("user")) || null;

  if (!currentUser) {
    // const routeComponents = DynamicRoutes["public"].map(
    //   ({ path, element }, key) => (
    //     <Route exact path={path} element={element} key={key} />
    //   )
    // );
    return (
      <Routes>
        {/* {routeComponents}  */}
        <Route path="*" element={<SignIn />} />
      </Routes>
    );
  } else if (user?.status === "blocked") {
    // const routeComponents = DynamicRoutes["privateForStan"].map(
    //   ({ path, element }, key) => (
    //     <Route exact path={path} element={element} key={key} />
    //   )
    // );
    return (
      <Routes>
        {/* {routeComponents} */}
        <Route path="*" element={<BlockedPage />} />
        <Route path="/login" element={<SignIn />} />

        {/* <Route path="/" element={<Navigate to="/Reporting" />} /> */}
      </Routes>
    );
  } else if (
    user.user_email === "s.stokes@guestx.co" ||
    user.access_level === "admin"
  ) {
    const routeComponents = DynamicRoutes["privateForStan"].map(
      ({ path, element }, key) => (
        <Route exact path={path} element={element} key={key} />
      )
    );
    return (
      <Routes>
        {routeComponents}
        <Route path="/" element={<Navigate to="/Reporting" />} />
      </Routes>
    );
  } else {
    const routeComponents = DynamicRoutes["private"].map(
      ({ path, element }, key) => (
        <Route exact path={path} element={element} key={key} />
      )
    );
    return (
      <Routes>
        {routeComponents}
        <Route path="*" element={<Navigate to="/Reporting" />} />
        <Route path="/" element={<Navigate to="/Reporting" />} />
      </Routes>
    );
  }
};
