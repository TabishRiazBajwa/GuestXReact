import React from "react";
import { Doughnut } from "react-chartjs-2";

const DonutChart = ({ type, value, subpage, onClick }) => {
  const remaining = 100 - value;
  const color =
    type === "Average" ? "#888888" : value <= 80 ? "#FF0000" : "#0DA452";
  //for now putting it here
  const data = {
    datasets: [
      {
        data: [remaining, value],
        backgroundColor: ["#E9E9E9", color],
        borderColor: ["#E9E9E9", color],
        borderWidth: 1,
        weight: 1,
      },
    ],
  };

  const options = {
    radius: "85%",
    cutout: "65%",
    events: [],
    plugins: {
      tooltip: {
        enabled: false, // This option disables tooltips
      },
    },
  };

  return (
    <div
      className="flex flex-col relative items-center justify-center w-full"
      onClick={() => {
        if (subpage !== type.toLowerCase()) {
          onClick(type.toLowerCase());
        } else {
          onClick("");
        }
      }}
    >
      <Doughnut className="cursor-pointer" data={data} options={options} />
      <div className="absolute mb-5 cursor-pointer">
        <p
          className={`font-bold text-center cursor-pointer ${
            type.toLowerCase() === "average" ? "text-2xl" : "text-lg"
          } leading-35 tracking-0 text-[#0F2E60] darkText `}
        >
          {value}%
        </p>
      </div>
      <div className="mt-2">
        <p
          className={`font-normal text-center ${
            type.toLowerCase() === "average" ? "text-2xl" : "text-lg"
          } leading-35 tracking-0 text-[#0F2E60] darkText `}
        >
          {type}
        </p>
      </div>
    </div>
  );
};

export default DonutChart;
