import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { useState } from "react";
import { getConfig } from "../../../utils/utils";

const ChartComponent = ({
  budget = [],
  Investment = [],
  data = [],
  months,
  dataTwo = [],
  id,
  height = null,
  widthTwo = null
}) => {
  const chartContainerRef = useRef(null);
  const [values] = useState(Investment);

  useEffect(() => {
    const containerBody = chartContainerRef.current;



    // Generate a unique ID for the chart canvas
    const canvasId = `myChart-${id}`;

    let data = [];

 

    data = [
      {
        label: "Budget",
        data: [],

        backgroundColor: "#1F66AC",
        borderWidth: 0, // remove the border around the bars
        borderRadius: 5,
        borderColor: "transparent"
        // barPercentage: 0.0,
      },

      {
        label: "Investment",
        data: values,

        backgroundColor: "#1F3B59",
        borderWidth: 0, // remove the border around the bars
        borderRadius: 5,
        borderColor: "transparent"
      }
    ];

    // Setup chart data and config

    const config = getConfig(months, data);

    // Render the chart
    const chartCanvas = document.createElement("canvas");
    chartCanvas.id = canvasId;
    containerBody.appendChild(chartCanvas);
    const ctx = chartCanvas.getContext("2d");
    const myChart = new Chart(ctx, config);

    if (myChart.data.labels.length > 2) {
      let temp = myChart.data.labels.length * 130;

      containerBody.style.width = temp + "px";
    }

    // Cleanup
    return () => {
      if (chartCanvas) {
        Chart.getChart(canvasId)?.destroy();
        containerBody.removeChild(chartCanvas);
      }
    };
  }, [id, values]);

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
