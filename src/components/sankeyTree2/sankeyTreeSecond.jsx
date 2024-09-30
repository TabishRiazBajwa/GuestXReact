import React, { useState, useEffect } from "react";
import "./SankeySecond.css";

import { Tree } from "react-tree-graph";

import "react-tree-graph/dist/style.css";

const SankeyTreeSecond = (props) => {
  const {
    Call_Not_Answered_count,
    Voicemail_count,
    Robo_Call_count,
    Vendor_call_count,
    Solicitation_count,
    Wrong_Number_count,
    Current_customer_inquiry_count,
    Appointment_confirmation_count,
    Appointment_reschedule_count,
    Appointment_cancelation_count,
    Hours_or_Directions_count,
  } = props.data;

  const [hoveredNode, setHoveredNode] = useState(null);
  const [sw, setSw] = useState(window.innerWidth);
  const [sh, setSh] = useState(
    window.innerWidth > 1400 ? window.innerHeight : window.innerHeight * 1
  );

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setSw(newWidth);

      if (newWidth > 1400) {
        setSh(window.innerHeight);
      } else {
        setSh(window.innerHeight * 1.65);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const dashboardData = [
    {
      type: "Parent",
      name: "",
      value: 99,
      newValue: 150,
      children: [
        {
          type: "Child1",
          name: "No Answer",
          value: 8,
          newValue: Call_Not_Answered_count,
          children: [],
        },
        {
          type: "Child2",
          name: "Voice mail",
          value: 99,
          newValue: Voicemail_count,
          children: [],
        },
        {
          type: "Child3",
          name: "Robo Calls",
          value: 99,
          newValue: Robo_Call_count,
          children: [],
        },
        {
          type: "Child4",
          name: "Vendor",
          value: 99,
          newValue: Vendor_call_count,
          children: [],
        },
        {
          type: "Child5",
          name: "Solicitation",
          value: 99,
          newValue: Solicitation_count,
          children: [],
        },
        {
          type: "Child6",
          name: "Wrong Number",
          value: 150,
          newValue: Wrong_Number_count,
          children: [],
        },
        // {
        //   type: "Child7",
        //   name: "Disconnected",
        //   value: 99,
        //   newValue: 150,
        //   children: [],
        // },
        {
          type: "Child8",
          name: "Current Customer Inquiry",
          value: 1,
          newValue: Current_customer_inquiry_count,
          children: [],
        },
        {
          type: "Child9",
          name: "Confirmation",
          value: 1,
          newValue: Appointment_confirmation_count,
          children: [],
        },
        {
          type: "Child10",
          name: "Reschedule",
          value: 1,
          newValue: Appointment_reschedule_count,
          children: [],
        },
        {
          type: "Child11",
          name: "Cancelation",
          value: 1,
          newValue: Appointment_cancelation_count,
          children: [],
        },
        {
          type: "Child12",
          name: "Hours or Directions",
          value: 1,
          newValue: Hours_or_Directions_count,
          children: [],
        },
        {
          type: "Child13",
          name: "Unidentified",
          value: 99,
          newValue: 99,
          children: [],
        },
        {
          type: "Child13",
          name: "Internal",
          value: 99,
          newValue: 99,
          children: [],
        },
      ],
    },
  ];

  const generateLabel = (name, type, value, newValue) => {
    let displayValue = "";

    if (hoveredNode?.value === name) {
      displayValue = value;
    } else {
      displayValue = newValue;
    }
    return (
      <foreignObject x="10" y="-30" width="160" height="130">
        {/* Adjusted x and y values */}
        <div className="flex flex-col">
          <p
            className="flex justify-start font-['Poppins'] text-xs 2xl:text-sm"
            style={{
              whiteSpace: "wrap",
            }}
          >
            {name}
          </p>
          <p
            className="flex justify-start font-['Poppins'] font-semibold text-sm 2xl:text-base"
            style={{
              whiteSpace: "wrap",
            }}
          >
            {displayValue}
          </p>
        </div>
      </foreignObject>
    );
  };

  const customNode = (props) => {
    return (
      <g>
        <rect width="6" height="45" fill="#0DA452" y="-23" />
      </g>
    );
  };

  const customNode1 = (props) => {
    return (
      <g>
        <rect width="6" height="45" fill="#FF0000" y="-23" />
      </g>
    );
  };

  const customNode2 = (props) => {
    return (
      <g>
        <rect width="6" height="45" fill="#888888" y="-23" />
      </g>
    );
  };

  const handleClick = (event, node) => {
    console.log("handle click ", event.target.id);

    console.log("handle click node", node);

    // alert(`${event.target.id} got clicked`);
  };
  // We get the pipe class for its width by its value
  const processDataGetPipeClass = (newValue) => {
    if (newValue === 0) {
      return "0";
    }

    switch (Math.floor(newValue / 50)) {
      case 4:
        return "5";

      case 3:
        return "4";

      case 2:
        return "3";

      case 1:
        return "2";

      case 0:
        return "1";

      default:
        return "0";
    }
  };

  const processData = (dashboardData) => {
    const processNode = (node) => {
      // If the node's value is 0, do not process it
      if (node.newValue === 0) {
        return null;
      }

      // Calculate the difference between newValue and value
      const valueDifference = node.newValue - node.value;

      // Determine the pathProps className based on the valueDifference
      let pathPropsClassName = "grey";
      if (valueDifference > 0) {
        pathPropsClassName = "green";
      } else if (valueDifference < 0) {
        pathPropsClassName = "red";
      }

      pathPropsClassName +=
        " pipe-width-" + processDataGetPipeClass(node.newValue);

      // Determine the shape function based on valueDifference
      const shape = (valueDifference) => {
        if (valueDifference > 0) {
          return customNode;
        } else if (valueDifference < 0) {
          return customNode1;
        } else {
          return customNode2;
        }
      };

      // Create the label using the 'name' property
      const label =
        node?.type !== "Parent"
          ? generateLabel(node.name, node.type, node.value, node.newValue)
          : "";

      // Process children recursively and filter out null values
      const children = node.children.map(processNode).filter(Boolean);

      return {
        label: label,
        name: node.type,
        value: node.newValue,
        pathProps: {
          id: node.name,
          className: pathPropsClassName,
          onMouseOver: handleGreenLinkHover,
          onMouseOut: handleGreenLinkMouseOut,
          onClick: handleClick,
        },
        shape: shape(valueDifference),
        children: children,
      };
    };

    // Start processing from the root node
    return processNode(dashboardData[0]);
  };

  const handleGreenLinkHover = (event, node) => {
    // Set the new value when hovering
    console.log("node:", node);
    setHoveredNode({ value: event.target.id });
  };

  const handleGreenLinkMouseOut = (event, node) => {
    // Revert to the original value when the mouse is moved out
    setHoveredNode(null);
  };

  const dataTwo = processData(dashboardData);

  return (
    <>
      <div className="sankey-chart 2xl:translate-x-[-3rem] translate-x-[-1.8rem]  translate-y-[0.5rem]   ">
        <Tree
          data={dataTwo}
          height={sh * 0.92}
          width={sw / 2.5}
          animated={true}
          svgProps={{
            transform: "rotate(0)",
          }}
          nodeShape={customNode1}
          gProps={{
            className: "nodeCustome",

            onClick: handleClick,
          }}
          labelProp="label"
          textProps={{
            dy: 10,

            dx: 20,
          }}
          linkShape={{
            strokeWidth: 10,

            stroke: "black",
          }}
        />
      </div>
    </>
  );
};

export default SankeyTreeSecond;
