import React from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const HorizontalBarChartWithCandle = () => {
  const chartRef = React.useRef(null);

  React.useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Data"],
        datasets: [
          {
            label: "Candle",
            data: [50],
            backgroundColor: "rgba(15, 46, 96, 1)",
            borderColor: "rgba(15, 46, 96, 1)",
            color: "#fff",
            borderWidth: 0,
            barThickness: 28
          }
        ]
      },
      options: {
        indexAxis: "y",
        scales: {
          x: {
            display: false // Hide x-axis
          },
          y: {
            display: false // Hide y-axis
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltips: {
            enabled: false
          },
          datalabels: {
            display: true,
            color: "white",
            align: "left", // Align to the right side of the bar
            anchor: "start", // Anchor to the end of the bar

            offset: -20,
            font: {
              weight: "bold"
            },
            formatter: function (value) {
              return value.toString();
            }
          }
        }
      },
      plugins: [ChartDataLabels]
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default HorizontalBarChartWithCandle;
