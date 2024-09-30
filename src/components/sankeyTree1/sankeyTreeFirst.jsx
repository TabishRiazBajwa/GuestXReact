import React, { useEffect, useState } from "react";
import "./SankeyFirst.css";

import { Tree } from "react-tree-graph";

// Get the screen dimensions (viewport)

const SankeyTreeFirst = (props) => {
  const {
    Unable_To_Agree_To_Appt,
    Agent_Calling_Back_with_Price,
    No_Appointment_Offered,
    booked_appointment_count,
    no_booked_appointment_count,
  } = props.data;

  const [hoveredNode, setHoveredNode] = useState(null);
  const [sw, setSw] = useState(window.innerWidth);
  const [sh, setSh] = useState(
    window.innerWidth > 1400
      ? window.innerHeight * 0.95
      : window.innerHeight * 1.45
  );

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setSw(newWidth);

      if (newWidth > 1400) {
        setSh(window.innerHeight);
      } else {
        setSh(window.innerHeight * 1.45);
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
          type: "Child",
          name: "No Appointments",
          value: 1,
          newValue: no_booked_appointment_count,
          children: [
            {
              type: "GrandChild3",
              name: "No Appointment Offered",
              value: 1,
              newValue: No_Appointment_Offered,
              children: [],
            },
            {
              type: "GrandChild4",
              name: "Agent Calling Back with Price",
              value: 1,
              newValue: Agent_Calling_Back_with_Price,
              children: [],
            },
            {
              type: "GrandChild5",
              name: "Unable To Agree Appointment Time",
              value: 0,
              newValue: Unable_To_Agree_To_Appt,
              children: [],
            },
          ],
        },
        {
          type: "Child",
          name: "Appointments",
          value: 1,
          newValue: booked_appointment_count,
          children: [
            {
              type: "outerChild",
              name: "Emission Test",
              value: 99,
              newValue: 150,
              children: [
                {
                  type: "GrandChild6",
                  name: "Arrivals",
                  value: 99,
                  newValue: 150,
                  children: [],
                },
                {
                  type: "GrandChild6",
                  name: "No-Shows",
                  value: 99,
                  newValue: 150,
                  children: [],
                },
              ],
            },
            {
              type: "outerChild",
              name: "State Inspection",
              value: 99,
              newValue: 150,
              children: [
                {
                  type: "GrandChild6",
                  name: "Arrivals",
                  value: 99,
                  newValue: 150,
                  children: [],
                },
                {
                  type: "GrandChild6",
                  name: "No-Shows",
                  value: 99,
                  newValue: 150,
                  children: [],
                },
              ],
            },
            {
              type: "outerChild",
              name: "Drop Off",
              value: 99,
              newValue: 150,
              children: [
                {
                  type: "GrandChild6",
                  name: "Arrivals",
                  value: 99,
                  newValue: 150,
                  children: [],
                },
                {
                  type: "GrandChild6",
                  name: "No-Shows",
                  value: 99,
                  newValue: 150,
                  children: [],
                },
              ],
            },
            {
              type: "outerChild",
              name: "Tow in",
              value: 99,
              newValue: 150,
              children: [
                {
                  type: "GrandChild6",
                  name: "Arrivals",
                  value: 99,
                  newValue: 150,
                  children: [],
                },
                {
                  type: "GrandChild6",
                  name: "No-Shows",
                  value: 99,
                  newValue: 150,
                  children: [],
                },
              ],
            },
            {
              type: "outerChild",
              name: "Confirmed",
              value: 99,
              newValue: 150,
              children: [
                {
                  type: "GrandChild6",
                  name: "Arrivals",
                  value: 99,
                  newValue: 150,
                  children: [],
                },
                {
                  type: "GrandChild6",
                  name: "No-Shows",
                  value: 99,
                  newValue: 150,
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  const generateLabel = (name, type, value, newValue) => {
    let displayValue = "";

    // console.log(
    //   "TYEPEP:",
    //   type,
    //   "name",
    //   name,
    //   "hooov:",
    //   hoveredNode?.value,
    //   "disp:",
    //   displayValue
    // );
    if (hoveredNode?.value === name) {
      displayValue = value;
    } else {
      displayValue = newValue;
    }

    let width = "12rem";

    if (type === "outerChild") {
      width = "8rem";
    }

    return (
      <>
        {type !== "Child" && type !== "outerChild" ? (
          <foreignObject x="15" y="-25" width="11.5rem" height="130">
            <div className="flex flex-col w-full flex-wrap">
              <p
                className="flex justify-end font-['Poppins'] font-semibold text-sm 2xl:text-base"
                style={{
                  whiteSpace: "wrap",
                  transform: "rotate(180deg)",
                }}
              >
                {displayValue}
              </p>
              <p
                className="font-['Poppins'] flex justify-end text-xs 2xl:text-xs"
                style={{
                  whiteSpace: "wrap",
                  transform: "rotate(180deg)",
                }}
              >
                {name}
              </p>
            </div>
          </foreignObject>
        ) : (
          <foreignObject x="11" y="-25" width={width} height="150">
            <div className="flex flex-col h-auto rounded-md px-[0.1rem] 2xl:px-1 py-2 border border-transparent bg-[#FFFFFF] space-y-1 bg-opacity-80">
              <p
                className="flex justify-end font-['Poppins'] font-semibold text-sm 2xl:text-base"
                style={{
                  transform: "rotate(180deg)",
                }}
              >
                {displayValue}
              </p>
              <p
                className="font-['Poppins'] flex justify-end text-xs 2xl:text-sm w-max self-start"
                style={{
                  transform: "rotate(180deg)",
                }}
              >
                {name}
              </p>
            </div>
          </foreignObject>
        )}
      </>
    );
  };

  const customNode = (props) => {
    return (
      <g>
        <rect width="6" height="40" fill="#0DA452" y="-18" />
      </g>
    );
  };

  const customNode1 = (props) => {
    return (
      <g>
        <rect width="6" height="40" fill="#FF0000" y="-18" />
      </g>
    );
  };

  const customNode2 = (props) => {
    return (
      <g>
        <rect width="6" height="40" fill="#888888" y="-18" />
      </g>
    );
  };

  const handleClick = (event, node) => {
    console.log("handle click ", event.target.id);

    console.log("handle click node", node);

    // alert(`${event.target.id} got clicked`);
  };

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

  const data = processData(dashboardData);

  return (
    <>
      <div className="sankey-first translate-x-[-4rem] translate-y-[-1.35rem]  ">
        <Tree
          data={data}
          height={sh * 0.9}
          width={sw / 2.0}
          labelProp="label"
          animated={true}
          svgProps={{
            transform: "rotate(180)",
          }}
          // nodeShape={customNode}
          gProps={{
            className: "nodeTwo",
            onClick: handleClick,
          }}
          textProps={{
            dy: 10,

            dx: 20,
          }}
        />
      </div>
    </>
  );
};

export default SankeyTreeFirst;
