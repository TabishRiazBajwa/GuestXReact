import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const LineChartForConversationInsight = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const alwayzShowTooltip = {
      id: "alwayzShowTooltip",
      afterDraw: (chart, args, options) => {
        const { ctx } = chart;
        ctx.save();
        chart.data.datasets.forEach((dataset, i) => {
          chart.getDatasetMeta(i).data.forEach((dataPoint, index) => {
            const { x, y } = dataPoint.tooltipPosition();
            const text = "hi this is text";
            const textWidth = ctx.measureText(text).width;
            ctx.fillStyle = "rgba(0,0,0,0.8)";

            ctx.fillRect(x - (textWidth + 10) / 2, y - 25, textWidth + 10, 20);
            ctx.restore();

            ctx.font = "12px Arial";
            ctx.fillStyle = "white";
            ctx.fillText(text, x - textWidth / 2, y - 10);
            ctx.restore();
            ctx.fillStyle = "rgba(0,0,0,0.8)";

            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x - 5, y - 5);
            ctx.lineTo(x + 5, y - 5);
            ctx.fill();
            ctx.restore();
          });
        });
      }
    };
    const data = {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Jan",
        "Feb",
        "Mar",
        "Jan",
        "Feb",
        "Mar",
        "Jan",
        "Feb",
        "Mar",
        "Jan",
        "Feb",
        "Mar"
      ],
      datasets: [
        {
          label: "Average",
          data: [
            420000, 810000, 720000, 420000, 810000, 720000, 420000, 810000,
            720000, 420000, 810000, 720000, 420000, 810000, 720000
          ],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 2,
          pointRadius: 4,
          pointBackgroundColor: "rgba(75, 192, 192, 1)",
          pointBorderColor: "rgba(75, 192, 192, 1)",
          pointHoverRadius: 10,
          pointHoverBackgroundColor: "rgba(75, 192, 192, 1)",
          pointHoverBorderColor: "rgba(75, 192, 192, 1)"
        },
        {
          label: "GOALS",
          data: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 2,
          pointRadius: 4,
          pointBackgroundColor: "rgba(75, 192, 192, 1)",
          pointBorderColor: "rgba(75, 192, 192, 1)",
          pointHoverRadius: 10,
          pointHoverBackgroundColor: "rgba(75, 192, 192, 1)",
          pointHoverBorderColor: "rgba(75, 192, 192, 1)"
        }
      ]
    };

    const options = {
      scales: {
        x: {
          display: false, // Hide x-axis
          offset: 10 // Add padding of 10 pixels to x-axis
        },
        y: {
          display: false, // Hide y-axis
          ticks: {
            // maxTicksLimit: 1, // Set only one tick in the y-axis
            font: {
              size: 8 // Decrease the font size of the tick
            }
          }
        }
      },
      plugins: {
        tooltip: {
          enabled: true, // Show tooltip
          mode: "nearest", // Show all tooltips at once
          intersect: false,
          position: "average",
          formatter: function (value) {
            return value + "%"; // Add percentage sign
          }
        },
        legend: {
          // display: false // Hide legend
        },
        datalabels: {
          anchor: "end",
          align: "top",
          color: "black",
          font: {
            weight: "bold"
          },
          offset: 2
        }
      }
    };

    new Chart(chartRef.current, {
      type: "line",
      data: data,
      options: options,
      plugins: [ChartDataLabels]
    });
  }, []);

  return (
    <div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default LineChartForConversationInsight;
