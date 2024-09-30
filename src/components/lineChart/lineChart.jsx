import React from "react";
import { useSpring, animated } from "react-spring";

const LineChartWithTwoLabels = ({ position = null }) => {
  const Node = ({ x, y }) => {
    const animationProps = useSpring({ opacity: 1, from: { opacity: 0 } });
    return (
      <animated.g style={animationProps}>
        <circle cx={x} cy={y} r={10} fill="red" stroke="none" />
        <text x={x} y={y - 20} textAnchor="middle" fill="black">
          1
        </text>
        <text x={x} y={y + 30} textAnchor="middle" fill="black">
          2
        </text>
      </animated.g>
    );
  };

  const Line = ({ startX, startY, endX, endY }) => {
    const animationProps = useSpring({ opacity: 1, from: { opacity: 0 } });
    return (
      <animated.line
        x1={startX}
        y1={startY}
        x2={endX}
        y2={endY}
        stroke="black"
        strokeWidth={2}
        style={{
          ...animationProps,
          display: animationProps.opacity.interpolate((o) =>
            o === 1 ? "block" : "none"
          )
        }}
      />
    );
  };

  const nodePositions = position
    ? position
    : [
        { x: 10, y: 30 },
        { x: 210, y: 30 },
        { x: 400, y: 30 }
      ];


  const connections = [
    [0, 1],
    [1, 2]
  ];

  return (
    <svg className="w-full" height={60}>
      {connections.map((connection, index) => (
        <Line
          key={index}
          startX={nodePositions[connection[0]].x}
          startY={nodePositions[connection[0]].y}
          endX={nodePositions[connection[1]].x}
          endY={nodePositions[connection[1]].y}
        />
      ))}
      {nodePositions.map((position, index) => (
        <Node key={index} x={position.x} y={position.y} />
      ))}
    </svg>
  );
};

export default LineChartWithTwoLabels;


