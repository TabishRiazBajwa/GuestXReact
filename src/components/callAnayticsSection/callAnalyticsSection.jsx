import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const colors = [
  "#1F3B59",
  "#1F66AC",
  "#1897C8",
  "#AFE9FF",
  "#5D5D5D",
  "#FF0000",
  "#C0BFBF",
  "#E4E4E4",
  "#F5F5F5"
];

const dataaa = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

const getPath = (x, y, width, height) => {
  const radius = 4; // Adjust the radius value as needed for rounded corners
  return `M${x},${y + height}
          V${y + radius}
          Q${x},${y} ${x + radius},${y}
          H${x + width - radius}
          Q${x + width},${y} ${x + width},${y + radius}
          V${y + height}
          Z`;
};

const RoundedBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function BarChar({ data }) {
  return (
    <BarChart
      width={1500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="name" axisLine={false} tickLine={false} />
      <YAxis axisLine={false} tickLine={false} />
      <Bar
        dataKey="value"
        fill="#8884d8"
        shape={<RoundedBar />}
        label={{ position: "top" }}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
  );
}
