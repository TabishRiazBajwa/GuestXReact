import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { useState } from "react";
import { getConfig } from "../../../utils/utils";

const ChartComponent = ({
  id,
  height = null,
  widthTwo = null,
  months = [],
  ARO = [],
  ARO_New = [],
  ARO_Return = [],

}) => {
  const [valA] = useState(ARO);
  const [valB] = useState(ARO_Return);
  const [valC] = useState(ARO_New);
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const containerBody = chartContainerRef.current;

    // Generate a unique ID for the chart canvas
    const canvasId = `myChart-${id}`;

    let data = [];
    if (valA && valB && valC) {
      data = [
        {
          label: "Total ARO",
          data: valA,

          backgroundColor: "#1F3B59",
          borderWidth: 0, // remove the border around the bars
          borderRadius: 5,
          borderColor: "transparent"
          // barPercentage: 0.0,
        },
        {
          label: "New ARO",
          data: valB,

          backgroundColor: "#1F66AC",
          borderWidth: 0, // remove the border around the bars
          borderRadius: 5,
          borderColor: "transparent"
          // barPercentage: 0.0,
        },
        {
          label: "Returning ARO",
          data: valC,

          backgroundColor: "#888888",
          borderWidth: 0, // remove the border around the bars
          borderRadius: 5,
          borderColor: "transparent"
          // barPercentage: 0.0,
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


    if (myChart.data.labels.length > 6) {
      let temp = myChart.data.labels.length * 70;
      containerBody.style.width = temp + "px";
    } else {
      containerBody.style.width = "500px";
    }

    // Cleanup
    return () => {
      if (chartCanvas) {
        Chart.getChart(canvasId)?.destroy();
        containerBody.removeChild(chartCanvas);
      }
    };

  }, [id, ARO, ARO_New, ARO_Return]);

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
