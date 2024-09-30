import React, { useState } from "react";

import { Tree } from "react-tree-graph";

import "react-tree-graph/dist/style.css";

import SankeyTreeFirst from "../sankeyTree1/sankeyTreeFirst";
import SankeyTreeSecond from "../sankeyTree2/sankeyTreeSecond";

const LabelSettingGraphOne = (props) => {
  console.log("aa:", props);
  return (
    <>
      <foreignObject x="10" y="-25" width="130" height="130">
        {" "}
        {/* Adjusted x and y values */}
        <div className="flex flex-col-reverse">
          <p
            className="flex justify-end text-center"
            style={{
              fontWeight: "bold",
              whiteSpace: "wrap",
              transform: "rotate(180deg)",
              fontSize: "12px", // Adjust the font size as needed
            }}
          >
            {props.name}
          </p>
          <p
            className="flex justify-end"
            style={{
              fontWeight: "bold",
              whiteSpace: "wrap",
              transform: "rotate(180deg)",
              fontSize: "12px", // Adjust the font size as needed
            }}
          >
            123
          </p>
        </div>
      </foreignObject>
    </>
  );
};

const LabelSettingGraphTwo = (props) => {
  return (
    <>
      <rect y="-15" x="0" stroke="none" /> {/* Adjusted x value */}
      <text dx="" dy="-10">
        {" "}
        {/* Adjusted dx value */}
        <tspan dx="8" className="">
          HUH
        </tspan>
        <tspan dx="-30" dy="1.6em" className="">
          123
        </tspan>
      </text>
    </>
  );
};

const data = {
  label: "",

  name: "Parent",

  children: [
    {
      label: <LabelSettingGraphOne name="No Appointments" />,

      name: "Child 2",

      children: [
        { label: <LabelSettingGraphOne name="Tow in" />, name: "Grandchild 7" },
        {
          label: <LabelSettingGraphOne name="Services Not Provided" />,
          name: "Grandchild 6",
        },

        {
          label: <LabelSettingGraphOne name="No Appointment Offered" />,
          name: "Grandchild 5",
        },
        {
          label: <LabelSettingGraphOne name="Agent Calling Back With Price" />,

          name: "Grandchild 4",
        },
        {
          label: (
            <LabelSettingGraphOne name="Unable To Agree Appointment Time" />
          ),

          name: "Grandchild 3",
        },
      ],
    },

    {
      label: <LabelSettingGraphOne name="Appointments" />,

      name: "Child 1",

      children: [
        {
          label: <LabelSettingGraphOne name="Arrivals" />,
          name: "Grandchild 1",
        },

        {
          label: <LabelSettingGraphOne name="No-Shows" />,
          name: "Grandchild 2",
        },
      ],
    },
  ],
};

const dataTwo = {
  label: "",

  name: "Parent",

  children: [
    {
      label: <LabelSettingGraphTwo />,

      name: "Child 1",
    },

    {
      label: <LabelSettingGraphTwo />,

      name: "Child 2",
    },

    {
      label: <LabelSettingGraphTwo />,

      name: "Child 2",
    },

    {
      label: <LabelSettingGraphTwo />,

      name: "Child 2",
    },

    {
      label: <LabelSettingGraphTwo />,

      name: "Child 2",
    },

    {
      label: <LabelSettingGraphTwo />,

      name: "Child 2",
    },

    {
      label: <LabelSettingGraphTwo />,

      name: "Child 2",
    },

    {
      label: <LabelSettingGraphTwo />,

      name: "Child 2",
    },

    {
      label: <LabelSettingGraphTwo />,

      name: "Child 2",
    },

    {
      label: <LabelSettingGraphTwo />,

      name: "Child 2",
    },

    {
      label: <LabelSettingGraphTwo />,

      name: "Child 2",
    },

    {
      label: <LabelSettingGraphTwo />,

      name: "Child 2",
    },

    {
      label: <LabelSettingGraphTwo />,

      name: "Child 2",
    },
  ],
};

const customNode = (node) => {
  console.log("NNl:", node["name"]);

  return (
    <g>
      <rect width="6" height="80" fill="lightblue" y="-40" />

      <text x="6" y="10" fontSize="12" textAnchor="middle">
        {node.name}
      </text>
    </g>
  );
};

const customNode1 = (node) => {
  console.log("NNl:", node["name"]);

  return (
    <g>
      <rect width="6" height="50" fill="purple" y="-28" />

      <text x="6" y="10" fontSize="12" textAnchor="middle">
        {node.name}
      </text>
    </g>
  );
};

const handleClick = (event, node) => {
  console.log("handle click ", event);

  console.log("handle click node", node);

  alert(`${node} got clicked`);
};

//props.leftChart
const SankyChart = (props) => {
  return (
    <div className="flex w-full h-full relative items-center overflow-x-hidden overflow-y-hidden">
      <div>
        <SankeyTreeFirst data={props.leftChart} />
      </div>

      <div>
        <SankeyTreeSecond data={props.rightChart} />
      </div>
    </div>
  );
};

export default SankyChart;
