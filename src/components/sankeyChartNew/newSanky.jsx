import React from "react";
import { Chart } from "react-google-charts";

const NewSankeyChart = () => {
  const data = [
    ["From", "To", "Weight"],
    ["Arrivals", "BookedApp", 150],
    ["No-Shows", "BookedApp", 150],
    ["Unable", "No-BookedApp", 150],
    ["Back", "No-BookedApp", 99],
    ["Off", "No-BookedApp", 99],
    ["SNP", "No-BookedApp", 150],
    ["TOW-IN", "No-BookedApp", 150],
    ["BookedApp", "Why", 200],
    ["No-BookedApp", "Why", 200],
    ["Why", "Why1", 99],
    ["Why", "Why2", 99],
    ["Why", "Why3", 99],
    ["Why", "Why4", 99],
    ["Why", "Why5", 99],
    ["Why", "Why6", 99],
    ["Why", "Why7", 99],
    ["Why", "Why8", 99],
    ["Why", "Why9", 99],
    ["Why", "Why10", 99],
    ["Why", "Why11", 99],
    ["Why", "Why12", 99],
  ];

  const options = {
    sankey: {
      link: {
        colorMode: "target",
        colors: [
          '#a6cee3',        // Custom color palette for sankey links.
          '#1f78b4',        // Nodes will cycle through this palette
          '#b2df8a',        // giving the links for that node the color.
          '#33a02c'
        ]
      },
      node: {
        nodePadding: 10,
        width: 20,
        colorMode: "unique"
      }
    },
    width: '100%',
    height: '100%',
    chartArea: { width: "100%", height: "100%" },
    backgroundColor: "#f1f8e9",
    tooltip: { isHtml: true },
    legend: { position: "none" },
  };

  return (
    <Chart
      chartType="Sankey"
      data={data}
      options={options}
      width={"100%"}
      height={"100%"}
      legendToggle
    />
  );
};

export default NewSankeyChart;
