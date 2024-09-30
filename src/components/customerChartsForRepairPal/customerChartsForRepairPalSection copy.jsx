import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const CustomerChartsSection = () => {
  const [showBody, setShowBody] = useState();
  const chartRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  useEffect(() => {
    const myChartRefs = chartRefs.map((ref) => {
      if (ref && ref.current) {
        return new Chart(ref.current.getContext("2d"), {
          type: "bar",
          data: {
            labels: ["January", "February", "March"],
            datasets: [
              {
                label: "",
                data: [15000, 15000, 15000],
                backgroundColor: "#1F3B59",
                borderWidth: 0, // remove the border around the bars
                borderRadius: 5,
                borderColor: "transparent"
              },
              {
                label: "",
                data: [20000, 20000, 20000],
                backgroundColor: "#1F66AC",
                borderWidth: 0, // remove the border around the bars
                borderRadius: 5,
                borderColor: "transparent"
              },
              {
                label: "",
                data: [15000, 15000, 15000],
                backgroundColor: "#888888",
                borderWidth: 0, // remove the border around the bars
                borderRadius: 5,
                borderColor: "transparent"
              }
            ]
          },
          options: {
            scales: {
              x: {
                grid: {
                  display: false
                },
                ticks: {
                  color: "#242424",
                  font: {
                    weight: "medium"
                  }
                }
              },
              y: {
                suggestedMin: 0,
                suggestedMax: 20000,
                ticks: {
                  color: "#242424",
                  callback: function (value, index, values) {
                    return value.toString().padStart(2, "0");
                  },
                  beginAtZero: true
                },
                grid: {
                  drawBorder: false, // remove the border on the y-axis grid
                  drawTicks: false // remove the horizontal lines in the grid
                }
              }
            },
            plugins: {
              legend: {
                display: false
              }
            }
          }
        });
      }
      return null;
    });

    return () => {
      myChartRefs.forEach((chart) => {
        if (chart !== null && chart !== undefined) {
          chart.destroy();
        }
      });
    };
  }, []);

  return (
    <>
      <div className="bg-[#707070] mt-2 rounded-md">
        <div className="flex-1  grid grid-cols-3 flex-wrap justify-center items-center ">
          {/* First card */}
          <div className="bg-white rounded-lg px-8 py-4 m-2">
            <h2 className="text-lg font-bold mb-2  text-[#1F3B59]">
              Customers
            </h2>
            <div className="mb-1">
              <ul class="list-disc flex gap-10 px-4 items-center">
                <li class="text-[#1F3B59]">
                  {" "}
                  <p className="text-[#1F66AC] font-semibold text-sm">
                    Total
                  </p>{" "}
                </li>
                <li class="text-[#1F66AC]">
                  {" "}
                  <p className="text-[#1F66AC] font-semibold text-sm"> New</p>
                </li>
                <li class="text-[#888888]">
                  {" "}
                  <p className="text-[#1F66AC] font-semibold text-sm">
                    {" "}
                    Returning
                  </p>
                </li>
              </ul>
            </div>
            <p className="text-gray-700 text-base">
              <canvas ref={chartRefs[0]} />
            </p>
            <p>
              <div class="pl-10  py-1 text-sm w-full">
                <div class="w-full h-2 bg-gray-300 overflow-hidden rounded-full">
                  <div class="bg-[#1F3B59] w-2/3 h-2"></div>
                </div>
              </div>
            </p>
          </div>
          {/* Second card */}
          <div className="bg-white rounded-lg px-8 py-4 m-2">
            <h2 className="text-lg font-bold mb-2 text-[#1F3B59]">Revenue</h2>
            <div className="mb-1">
              <ul class="list-disc flex gap-10 px-4 items-center">
                <li class="text-[#1F3B59]">
                  {" "}
                  <p className="text-[#1F66AC] font-semibold text-sm">
                    Total
                  </p>{" "}
                </li>
                <li class="text-[#1F66AC]">
                  {" "}
                  <p className="text-[#1F66AC] font-semibold text-sm"> New</p>
                </li>
                <li class="text-[#888888]">
                  {" "}
                  <p className="text-[#1F66AC] font-semibold text-sm">
                    {" "}
                    Returning
                  </p>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 text-base">
              <canvas ref={chartRefs[1]} />
            </p>
            <p>
              <div class="pl-10  py-1 text-sm w-full">
                <div class="w-full h-2 bg-gray-300 overflow-hidden rounded-full">
                  <div class="bg-[#1F3B59] w-2/3 h-2"></div>
                </div>
              </div>
            </p>
          </div>
          {/* Third card */}
          <div className="bg-white rounded-lg px-8 py-4 m-2">
            <h2 className="text-lg font-bold mb-2 text-[#1F3B59]">ARO</h2>
            <div className="mb-1">
              <ul class="list-disc flex gap-10 px-4 items-center">
                <li class="text-[#1F3B59]">
                  {" "}
                  <p className="text-[#1F66AC] font-semibold text-sm">
                    Total
                  </p>{" "}
                </li>
                <li class="text-[#1F66AC]">
                  {" "}
                  <p className="text-[#1F66AC] font-semibold text-sm"> New</p>
                </li>
                <li class="text-[#888888]">
                  {" "}
                  <p className="text-[#1F66AC] font-semibold text-sm">
                    {" "}
                    Returning
                  </p>
                </li>
              </ul>
            </div>
            <p className="text-gray-700 text-base">
              <canvas ref={chartRefs[2]} />
            </p>
            <p>
              <div class="pl-10  py-1 text-sm w-full">
                <div class="w-full h-2 bg-gray-300 overflow-hidden rounded-full">
                  <div class="bg-[#1F3B59] w-2/3 h-2"></div>
                </div>
              </div>
            </p>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 flex-wrap justify-center items-center ">
          {/* First card */}
          <div className="bg-white rounded-lg px-8 py-4 m-2">
            <h2 className="text-lg font-bold mb-2  text-[#1F3B59]">
              Customers
            </h2>
            <div className="mb-1">
              <ul class="list-disc flex gap-10 px-4 items-center">
                <li class="text-[#1F3B59]">
                  {" "}
                  <p className="text-[#1F66AC] font-semibold text-sm">
                    Total
                  </p>{" "}
                </li>
                <li class="text-[#1F66AC]">
                  {" "}
                  <p className="text-[#1F66AC] font-semibold text-sm"> New</p>
                </li>
                <li class="text-[#888888]">
                  {" "}
                  <p className="text-[#1F66AC] font-semibold text-sm">
                    {" "}
                    Returning
                  </p>
                </li>
              </ul>
            </div>
            <p className="text-gray-700 text-base">
              <canvas ref={chartRefs[3]} />
            </p>
            <p>
              <div class="pl-10  py-1 text-sm w-full">
                <div class="w-full h-2 bg-gray-300 overflow-hidden rounded-full">
                  <div class="bg-[#1F3B59] w-2/3 h-2"></div>
                </div>
              </div>
            </p>
          </div>
          {/* Second card */}
          <div className="bg-white rounded-lg px-8 py-4 m-2">
            <h2 className="text-lg font-bold mb-2 text-[#1F3B59]">Revenue</h2>
            <div className="mb-1">
              <ul class="list-disc flex gap-10 px-4 items-center">
                <li class="text-[#1F3B59]">
                  {" "}
                  <p className="text-[#1F66AC] font-semibold text-sm">
                    Total
                  </p>{" "}
                </li>
                <li class="text-[#1F66AC]">
                  {" "}
                  <p className="text-[#1F66AC] font-semibold text-sm"> New</p>
                </li>
                <li class="text-[#888888]">
                  {" "}
                  <p className="text-[#1F66AC] font-semibold text-sm">
                    {" "}
                    Returning
                  </p>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 text-base">
              <canvas ref={chartRefs[4]} />
            </p>
            <p>
              <div class="pl-10  py-1 text-sm w-full">
                <div class="w-full h-2 bg-gray-300 overflow-hidden rounded-full">
                  <div class="bg-[#1F3B59] w-2/3 h-2"></div>
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerChartsSection;
