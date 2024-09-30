import React, { useState } from "react";
import DashboardBarChartToggleButtons from "./dashboardBarChartToggleButtons";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const DashboardBarChart = ({
  heading,
  initialData,
  categories,
  hasGoal,
  goalKey,
  type,
  hasToolTip
}) => {
  const [showGoal, setShowGoal] = useState(false);

  const [category, setCategory] = useState(categories[0].name);

  const symbol =
    type === "Number"
      ? ""
      : type === "Rate"
      ? "%"
      : type === "Price"
      ? "$"
      : "";

  const findMinMaxAndTicks = (data, type, hasGoal) => {
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;

    if (!data) {
      return {
        domain: [min * 1.1, max * 1.1],
        ticks: [0, 100]
      };
    }

    data.forEach((dataPoint) => {
      Object.keys(dataPoint).forEach((key) => {
        if (key !== "name" && (hasGoal || key !== "goalValue")) {
          // Convert the data values to numbers
          let value = Number(dataPoint[key]);

          if (!isNaN(value)) {
            min = Math.min(min, value);
            max = Math.max(max, value);
          }
        }
      });
    });

    const numTicks = 5;
    // Following code calculates the ticks and rounds up depending on the number of digits
    const maxValue = (max / 10) * 10;
    let minValue = Math.floor(min / 10) * 10;

    minValue = Math.min(minValue, 0);

    const tickInterval =
      Math.floor((maxValue - minValue) / (numTicks - 1)) > 1
        ? Math.floor((maxValue - minValue) / (numTicks - 1))
        : 1;
    // Use a loop or a map function to create an array of ticks
    const ticks = [];

    for (let i = minValue; i <= maxValue; i += tickInterval) {
      if (i === 0) {
        ticks.push(0);
      } else {
        let digits = Math.floor(Math.log10(Math.abs(i))) + 1;
        const rounded_val =
          Math.round(i / Math.pow(10, digits - 2)) * Math.pow(10, digits - 2);
        ticks.push(rounded_val);
      }
    }

    // Use a dynamic domain that adjusts to the min and max values
    return type === "Number" || type === "Price"
      ? { domain: [min * 1.1, max * 1.25], ticks }
      : { domain: [min * 1.2, max * 1.25], ticks };
  };

  const { domain, ticks } = findMinMaxAndTicks(initialData, type, hasGoal);

  const filteredCategories =
    category === ""
      ? categories
      : categories.filter((cat) => cat.name === category);

  const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
    const labelWidth = 56;
    const labelHeight = 30;
    const borderRadius = 4;
    const labelX = x + width / 2 - labelWidth / 2;
    const labelY = y - labelHeight - (value < 0 ? 5 - height : 5);
    const labelValueX = labelX + labelWidth / 2;
    const labelValueY = labelY + labelHeight / 2 + 4;
    const arrowPoints = `${labelValueX - 5},${labelY + labelHeight} ${
      labelValueX + 5
    },${labelY + labelHeight} ${labelValueX},${labelY + labelHeight + 10}`;

    let formattedValue = value;

    if ((type === "Price" || type === "Number") && typeof value === "number") {
      formattedValue = value.toLocaleString();
    }

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
          {symbol && symbol === "$" ? <tspan>{symbol}</tspan> : null}
          {formattedValue}
          {symbol && symbol !== "$" ? <tspan>{symbol}</tspan> : null}
        </text>
      </g>
    );
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      let filteredPayload = payload;
      if (category !== "") {
        filteredPayload = payload.filter((entry) => entry.dataKey === category);
      }

      return (
        <div className="bg-gray-300 text-blue-900 rounded-md p-2">
          {filteredPayload.map((entry, index) => (
            <div key={entry.value + index}>
              <p className="font-bold">{entry.dataKey}:</p>

              {symbol && symbol === "$" ? (
                <p>
                  <span>{symbol} </span>
                  Spectre {entry.value}
                </p>
              ) : (
                <p>
                  Spectre {entry.value}
                  <span> {symbol}</span>
                </p>
              )}
              <hr className="h-1"></hr>
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    initialData && (
      <div className="flex flex-col w-full bg-[#FFFFFF] rounded-[12px] p-4 mb-4">
        <div className="flex flex-row w-full justify-between mb-6 p-4">
          <div>
            <p className="text-lg font-bold leading-[25px] tracking-tight text-[#0F2E60] opacity-100">
              {heading}
            </p>
          </div>
          <div className="flex flex-row space-x-10">
            {categories.length > 1 &&
              categories.map((cat, index) => (
                <DashboardBarChartToggleButtons
                  key={cat.name + index}
                  index={cat.index}
                  text={cat.name}
                  category={category}
                  setCategory={setCategory}
                  showGoal={showGoal}
                  setShowGoal={setShowGoal}
                />
              ))}
            {hasGoal && (
              <DashboardBarChartToggleButtons
                key={"goal" + categories.length + 1}
                index={1}
                text={"Goals"}
                category={category}
                setCategory={setCategory}
                hasGoal={hasGoal}
                showGoal={showGoal}
                setShowGoal={setShowGoal}
                goalKey={goalKey}
                categories={categories}
              />
            )}
          </div>
        </div>
        <div className=" chartCard">
          <div
            className="chartBox "
            style={{ width: "100%", overflowX: "scroll" }}
          >
            <BarChart
              // width={initialData.length >= 11 ? initialData.length * 200 : 2000}
              width={
                initialData.length >= 11
                  ? initialData.length * 200
                  : initialData.length * 400
              }
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
                  fill: "#242424"
                }}
              />

              <YAxis
                type="number"
                domain={domain}
                ticks={ticks}
                tickLine={false}
                axisLine={false}
                allowDataOverflow={false}
              />
              {hasToolTip !== false &&
                filteredCategories &&
                filteredCategories.map((cat, index) => (
                  <Tooltip
                    key={cat.name + index}
                    content={<CustomTooltip label={cat.name} />}
                    cursor={{ fill: "transparent" }}
                  />
                ))}
              {filteredCategories &&
                filteredCategories.map((cat, index) => (
                  <Bar
                    key={cat.name + index}
                    // onMouseEnter={(e) => console.log("mouse enter", e)}
                    dataKey={cat.name}
                    fill={
                      cat.index === 0
                        ? "#0F2E60"
                        : cat.index === 1
                        ? "#1F66AC"
                        : cat.index === 2
                        ? "#888888"
                        : "#1F66AC"
                    }
                    radius={[8, 8, 8, 8]}
                    barSize={115}
                    label={renderCustomBarLabel}
                  />
                ))}

              {showGoal && (
                <Bar
                  // onMouseEnter={(e) => console.log("mouse enter", e)}
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
    )
  );
};

export default DashboardBarChart;
