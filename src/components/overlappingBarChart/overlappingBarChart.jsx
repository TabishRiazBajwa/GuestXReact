import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { display } from "@mui/system";

const OverlappingBarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChart = new Chart(chartRef.current, {
      type: "bar",
      data: {
        labels: [""],
        datasets: [
          {
            label: "Total Value",
            data: [500],
            backgroundColor: "rgba(136, 132, 216, 0.5)",
            borderColor: "rgba(136, 132, 216, 1)",
            borderWidth: 1
          },
          {
            label: "New Value",
            data: [200],
            backgroundColor: "rgba(130, 202, 157, 0.5)",
            borderColor: "rgba(130, 202, 157, 1)",
            borderWidth: 1,
            barPercentage: 0.6 // Adjust this value to decrease the width
          }
        ]
      },
      options: {
        aspectRatio: 1,
        plugins: {
          legend: {
            display: false
          },
          labels: {
            render: "value",
            fontColor: "#1F3B59",
            position: "top",
            showActualValue: true
          },
          datalabels: {
            // display: true
            offset: -30,
            display: true,
            clamp: true,
            anchor: "end", // Position labels at the top
            align: "end", // Align labels to the end
            formatter: (value, context) => {
              return value.toString().padStart(2, "0") + "%";
            }
          }
        },
        scales: {
          x: {
            ticks: {},
            display: false,
            stacked: true,
            grid: {}
          },
          y: {
            display: false,
            ticks: {
              display: false
            },
            beginAtZero: true,
            grid: {
              display: false,
              drawBorder: false,
              drawOnChartArea: false
            }
          }
        }
      },

      plugins: [ChartDataLabels]
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className="max-w-[250px] mx-auto mt-5">
      <p className="text-gray-700 text-base">
        <canvas ref={chartRef}></canvas>
      </p>
    </div>
  );
};

export default OverlappingBarChart;
