import React from "react";

const data = {
  nodes: [{ name: "A" }, { name: "B" }, { name: "C" }, { name: "D" }],
  links: [
    { source: 0, target: 1 },
    { source: 0, target: 2 },
    { source: 1, target: 3 },
    { source: 2, target: 3 },
  ],
};

const SankeyChartAnother = () => {
  const nodeWidth = 40;
  const nodePadding = 10;

  // Calculate node positions
  const nodes = data.nodes.map((node, index) => ({
    name: node.name,
    x: 100,
    y: index * (nodeWidth + nodePadding),
  }));

  // Calculate link paths
  const links = data.links.map((link, index) => {
    const sourceNode = nodes[link.source];
    const targetNode = nodes[link.target];
    return {
      source: [sourceNode.x + nodeWidth, sourceNode.y + nodeWidth / 2],
      target: [targetNode.x, targetNode.y + nodeWidth / 2],
      id: index,
    };
  });

  return (
    <svg width={400} height={300}>
      {links.map((link) => (
        <path
          key={link.id}
          d={`M${link.source[0]},${link.source[1]} L${link.target[0]},${link.target[1]}`}
          fill="none"
          stroke="lightblue"
          strokeWidth="20"
        />
      ))}
      {nodes.map((node) => (
        <rect
          key={node.name}
          x={node.x}
          y={node.y}
          width={nodeWidth}
          height={nodeWidth}
          fill="lightblue"
        />
      ))}
    </svg>
  );
};

export default SankeyChartAnother;
