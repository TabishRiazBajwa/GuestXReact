import React from "react";
import { Line } from "react-chartjs-2";

export default function reportGraphicalLineGraph(props) {
  const {
    title,
    currentPeriodValue,
    rangeValue,
    rangeText,
    percentageChange,
    percentageChangeIcon,
    months,
    data,
  } = props;

  const chartsData = {
    labels: months,
    datasets: [
      {
        label: "Blue line",
        data: data,
        fill: true,
        backgroundColor: "rgba(31, 102, 172,  0.2)",
        borderColor: "rgba(31, 102, 172, 1)",
        pointRadius: 4,
        pointBackgroundColor: "rgba(31, 102, 172,  1)",
      },
      {
        label: "Orange line",
        data: data,
        fill: true,
        backgroundColor: "rgba(255, 87, 0, 0.2)",
        borderColor: "rgba(255, 87, 0, 1)",
        pointRadius: 4,
        pointBackgroundColor: "rgba(255, 87, 0, 1)",
      },
    ],
  };

  const options = {
    // maintainAspectRatio: false,
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 2.3,
    plugins: {
      legend: {
        display: false,
        labels: {
          font: {},
        },
      },
      zoom: {
        pan: {
          enabled: true,
          mode: "x",
          speed: 10,
          threshold: 10,
        },
        zoom: {
          enabled: true,
          mode: "x",
          speed: 0.1,
          threshold: 2,
          sensitivity: 3,
        },
      },
    },
    scales: {
      y: {
        grid: { drawTicks: false, offset: false, lineWidth: 4 },
        ticks: {
          color: "black",
          padding: 20,
          font: {
            size: 16,
            family: "Poppins",
            style: "normal",
            weight: "bold",
          },
        },
      },
      x: {
        offset: true,
        type: "category",
        ticks: {
          color: "black",
          padding: 20,
          font: {
            size: 16,
            family: "Poppins",
            style: "normal",
            weight: "bold",
          },
        },
        grid: { drawTicks: false, offset: true, lineWidth: 0 },
      },
    },
  };

  return (
    <div className=" w-full  h-fit   px-1 py-5 mr-5  flex  flex-col   bg-white rounded-xl ">
      <div className=" mx-10  flex flex-row justify-left   ">
        <div className="flex flex-col ">
          <div className="flex flex-col gap-3 justify-center ">
            <div className="font-poppins font-semibold text-lg  text-blue-900 text-left">
              {title}
            </div>
            <div className=" flex flex-col md:flex-row gap-10 ">
              {/* Chart legends */}
              <div className="flex flex-row gap-5 ">
                <div className="h-5 w-5 bg-blue-900"></div>
                <div className="flex flex-col">
                  <div className="font-semibold text-2xl  text-black tracking-wide">
                    {currentPeriodValue}
                  </div>
                  <div className="text-black text-base font-normal  tracking-normal ">
                    Current Period
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-5  ">
                <div className="h-5 w-5 bg-orange-500"></div>
                <div className="flex flex-col">
                  <div className="font-semibold text-2xl  text-black tracking-wide ">
                    {rangeValue}
                  </div>
                  <div className="text-black text-base font-normal  tracking-normal ">
                    {rangeText}
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-5  ">
                <div className="text-2xl">{percentageChangeIcon}</div>
                <div className="flex flex-col">
                  <div className="font-semibold text-2xl  text-black tracking-wide ">
                    {percentageChange}
                  </div>
                  <div className="text-black text-base font-normal  tracking-normal ">
                    change
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center">
        <div className=" w-full flex flex-row justify-center">
          <div style={{ position: "relative", height: "60vh", width: "100%" }}>
            <Line data={chartsData} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
}
