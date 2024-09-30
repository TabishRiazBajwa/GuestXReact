import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { useState } from "react";
import { getConfig } from "../../../utils/utils";

const ChartComponent = ({
  id,
  height = null,
  widthTwo = null,
  months = [],
  revenueTotal = [],
  calls = [],
  tows = [],
  referrals = []
}) => {
  const [valA] = useState(revenueTotal);
  const [valB] = useState(tows);
  const [valC] = useState(calls);
  const [valD] = useState(referrals);
  const chartContainerRef = useRef(null);
  useEffect(() => {
    const containerBody = chartContainerRef.current;

    // Generate a unique ID for the chart canvas
    const canvasId = `myChart-${id}`;

    let data = [];
    if (valA && valB && valC && valD) {
      data = [
        {
          label: "Total Revenue",
          data: revenueTotal,
          backgroundColor: "#1F3B59",
          borderWidth: 0, // remove the border around the bars
          borderRadius: 5,
          borderColor: "transparent"
        },

        {
          label: "Calls",
          data: calls,

          backgroundColor: "#1F66AC",
          borderWidth: 0, // remove the border around the bars
          borderRadius: 5,
          borderColor: "transparent"
        },
        {
          label: "Tows",
          data: tows,

          backgroundColor: "#D3D3D3",
          borderWidth: 0, // remove the border around the bars
          borderRadius: 5,
          borderColor: "transparent"
        },
        {
          label: "Referrals",
          data: referrals,
          backgroundColor: "#888888",
          borderWidth: 0, // remove the border around the bars
          borderRadius: 5,
          borderColor: "transparent"
        }
      ];
    }

    // Setup chart data and config

    const config = getConfig(months, data);

    // Render the chart
    const chartCanvas = document.createElement("canvas");
    chartCanvas.id = canvasId;
    containerBody.appendChild(chartCanvas);
    const ctx = chartCanvas.getContext("2d");
    const myChart = new Chart(ctx, config);

    if (myChart.data.labels.length > 2) {
      let temp = myChart.data.labels.length * 200;
      containerBody.style.width = temp + "px";
    }

    // Cleanup
    return () => {
      if (chartCanvas) {
        Chart.getChart(canvasId)?.destroy();
        containerBody.removeChild(chartCanvas);
      }
    };
  }, [id, calls, revenueTotal, tows, referrals]);

  return (
    <div className="chartCard">
      <div className="chartBox">
        <div
          className={`container 
    
        overflow-x-scroll ${widthTwo ? widthTwo : `w-[600px]`}`}
        >
          <div
            className={`containerBody  ${height ? height : "h-[200px]"} `}
            ref={chartContainerRef}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
