import React from "react";
import { Doughnut } from "react-chartjs-2";

export default function SmallDoughnut(props) {
  const { type, value } = props;
  const remaining = 100 - value;

  const color =
    type === "Average"
      ? "rgb(128,128,128)"
      : value <= 80
      ? "rgb(255, 0, 0)"
      : "rgb(0, 128, 0)";

  //for now putting it here

  const data = {
    datasets: [
      {
        data: [remaining, value],
        backgroundColor: ["rgb(211, 211, 211)", color],
        borderColor: ["rgb(211, 211, 211)", color],
        borderWidth: 1,
        // offset: 20,
      },
    ],
  };

  const options = {
    radius: props.radiusPercentage,
    cutout: "65%",
    plugins: {
      tooltip: {
        enabled: false, // This option disables tooltips
      },
    },
  };

  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
}
