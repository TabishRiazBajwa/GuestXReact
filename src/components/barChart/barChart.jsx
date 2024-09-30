import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const BarChartComponent = ({ heading, initialData }) => {
  const [showGoal, setShowGoal] = useState(null);

  const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
    if (typeof value === "undefined") {
      return <div></div>;
    }

    const labelWidth = 56;
    const labelHeight = 30;
    const borderRadius = 4;
    const labelX = x + width / 2 - labelWidth / 2;
    const labelY = y - labelHeight - 5;
    const labelValueX = labelX + labelWidth / 2;
    const labelValueY = labelY + labelHeight / 2 + 4;
    const arrowPoints = `${labelValueX - 5},${labelY + labelHeight} ${
      labelValueX + 5
    },${labelY + labelHeight} ${labelValueX},${labelY + labelHeight + 10}`;

    return (
      <g>
        <polygon points={arrowPoints} fill="#0DA452" />
        <rect
          x={labelX}
          y={labelY}
          width={labelWidth}
          height={30.6}
          rx={borderRadius}
          ry={borderRadius}
          fill="#0DA452"
        />
        <text
          x={labelValueX}
          y={labelValueY}
          fill="#FFFFFF"
          textAnchor="middle"
          fontSize={12}
        >
          {value} %
        </text>
      </g>
    );
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      const filteredPayload = payload.filter(
        (entry) => entry.dataKey === "value"
      );
      return (
        <div className="bg-gray-300 text-blue-900 rounded-md p-2">
          {filteredPayload.map((entry, index) => (
            <>
              <p
                key={index}
                className="text-sm"
              >{`Stewie (${entry.value} %)`}</p>
              <p
                key={index}
                className="text-sm"
              >{`Spectre (${entry.value} %)`}</p>
              <p key={index} className="text-sm">{`Nyx (${entry.value} %)`}</p>
            </>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="flex flex-col w-full bg-[#FFFFFF] rounded-[12px] p-4">
      <div className="flex flex-row w-full justify-between mb-6 p-4">
        <div>
          <p className="text-lg font-bold leading-[25px] tracking-tight text-[#0F2E60] opacity-100">
            {heading}
          </p>
        </div>
        <div>
          <button
            className="flex flex-row justify-center items-center gap-2"
            onClick={() => setShowGoal(!showGoal)}
          >
            <div
              className={`rounded-full w-[0.75vw] h-[1.5vh] ${
                showGoal ? "bg-[#1F66AC]" : "bg-gray-300 opacity-50"
              }`}
            ></div>
            <p
              className={`text-base ${
                showGoal ? "text-[#0F2E60]" : "text-gray-500 opacity-50"
              }`}
            >
              Goals
            </p>
          </button>
        </div>
      </div>
      <div>
        <div className="chartCard">
          <div
            className="chartBox"
            style={{ width: "100%", overflowX: "scroll" }}
          >
            <BarChart
              width={initialData.length * 520}
              height={250}
              data={initialData}
            >
              <CartesianGrid stroke="#ccc" vertical={false} />
              <XAxis
                dataKey="name"
                type="category"
                tickLine={false}
                axisLine={false}
                tick={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  fill: "#242424",
                }}
              />

              <YAxis
                type="number"
                domain={[0, 118]}
                ticks={[0, 25, 50, 75, 100]}
                tickLine={false}
                axisLine={false}
                allowDataOverflow={true}
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: "transparent" }}
              />
              <Bar
                onMouseEnter={(e) => console.log("mouse enter", e)}
                dataKey="value"
                fill="#1F3B59"
                radius={[8, 8, 8, 8]}
                barSize={115}
                label={renderCustomBarLabel}
              ></Bar>

              {showGoal && (
                <Bar
                  onMouseEnter={(e) => console.log("mouse enter", e)}
                  dataKey="goalValue"
                  fill="#1F66AC"
                  label={renderCustomBarLabel}
                  radius={[8, 8, 8, 8]}
                  barSize={115}
                />
              )}
            </BarChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChartComponent;
