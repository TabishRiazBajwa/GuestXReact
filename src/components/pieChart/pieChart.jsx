import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const PieChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChart = new Chart(chartRef.current, {
      type: "doughnut",
      data: {
        // labels: ['Dataset 1', 'Dataset 2', 'Dataset 3'],
        datasets: [
          {
            label: "Dataset",
            data: [10, 5, 12],
            backgroundColor: ["#FF0000", "#5D5D5D", "#9F9F9F"],
            borderWidth: 100, // Set border width of each segment to 20 pixels
            borderRadius: 0,
            borderColor: "transparent"
          }
        ]
      },
      options: {
        
        cutout: "75%", // Set cutout to 60% to make the hole in the middle smaller
        spacing: 10, // Set spacing between segments to 10 pixels
        plugins: {
          legend: {
            display: true,
            position: "bottom",
            labels: {
              font: {
                size: 14,
                weight: "bold"
              }
            }
          },
          datalabels: {
            font: {
              size: 14,
              weight: "bold"
            },
            formatter: function (value, context) {
              return `${value}%`;
            },
            color: function (context) {
              var index = context.dataIndex;
              var value = context.dataset.data[index];
              var color = context.dataset.backgroundColor[index];
              return color;
            },
            anchor: "end",
            align: "end",
            offset: 10
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
    <div>
      <h2 className="text-lg font-bold mb-2  text-[#1F3B59] text-center">
        Lead
      </h2>

      <p className="text-gray-700 text-base">
        <canvas ref={chartRef}></canvas>
      </p>
    </div>
  );
};

export default PieChart;
