import React, { useState, useEffect, useRef } from "react";
// import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

import dayjs from "dayjs";

import Layout from "../../Layouts/Layouts.jsx";

import DonutChart from "../../components/donutChart/donutChart.jsx";

import SubPageComponent from "../../components/subPage/subPage.jsx";
import CallInsightButton from "../../components/callInsightButton/callInsightButton.jsx";

import MainLoader from "../../components/mainLoader/mainLoader.jsx";
import NoDataFound from "../../components/noDataFound/noDataFound.jsx";

import { getConvirzaGroupNames } from "../../helpers/DataProcessor.js";
import PowerBIReport from "../../components/powerBI/PowerBIReport.jsx";
import FullScreenPopup from "./discalimer.jsx";
import { Loader } from "../../components/loaders/Loaders.jsx";

function transformData(data) {
  if (!data || data.length === 0) return [];

  const result = {};

  data.forEach((item) => {
    const key = Object.keys(item)[0];
    result[key] = item[key];
  });

  return result;
}

const ReportBI = (props) => {
  // Check if the conversationInsightData array is not empty

  const tawkMessengerRef = useRef();

  const [showPopup, setShowPopup] = useState(true);
  // Conditionally set the dataset based on the state
  const Disclaimer = JSON.parse(localStorage.getItem("user")).disclaimer;
  const access = JSON.parse(localStorage.getItem("user")).group;
  const Link = JSON.parse(localStorage.getItem("user")).report_link;
  // const disclaimer = JSON.parse(localStorage.getItem("user")).disclaimer;
  // console.log("Linkd", Linkd);

  console.log("Link", Link);
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup &&
      Disclaimer !== "signed" &&
      access !== "all" &&
      Disclaimer !== "signed" ? (
        <FullScreenPopup onClose={closePopup} />
      ) : (
        <PowerBIReport link={Link} />
      )}
      {/* <TawkMessengerReact
        onLoad={() => {
          if (tawkMessengerRef.current == null) return;

          tawkMessengerRef.current.setAttributes(
            {
              name: JSON.parse(localStorage.getItem("user")).name,
              email: JSON.parse(localStorage.getItem("user")).email,
              ipaddress: localStorage.getItem("ipaddress"),
            },
            function (error) {
              console.log(error);
            }
          );
        }}
        propertyId="65b3c4568d261e1b5f58462f"
        widgetId="1hl33dsbd"
        ref={tawkMessengerRef}
      /> */}
    </>
  );
};

export default ReportBI;
