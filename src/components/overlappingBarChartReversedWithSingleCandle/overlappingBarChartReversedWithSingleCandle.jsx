import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const OverlappingBarChartReversedWithSingleCandle = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChart = new Chart(chartRef.current, {
      type: "bar",
      data: {
        labels: ["Candles"],
        datasets: [
          {
            label: "Candle 1",
            data: [300],
            backgroundColor: "#1F3B59",
            borderWidth: 0,
            borderRadius: 5,
            borderColor: "transparent"
          },
          {
            label: "Candle 2",
            data: [750],
            backgroundColor: "#FF0000",
            borderWidth: 0,
            borderRadius: 5,
            borderColor: "transparent"
          },
          {
            label: "Candle 3",
            data: [500],
            backgroundColor: "#00FF00",
            borderWidth: 0,
            borderRadius: 5,
            borderColor: "transparent"
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
            display: true,
            formatter: (value, context) => {
              return value.toString().padStart(2, "0") + "%";
            },
            anchor: "center",
            align: "top",
            offset: 2
          }
        },
        scales: {
          x: {
            display: false
          },
          y: {
            display: false,
            beginAtZero: true
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
    <div className="max-w-[280px] mx-auto">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default OverlappingBarChartReversedWithSingleCandle;
