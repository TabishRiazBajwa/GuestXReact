import { useEffect, useState } from "react";

// material-ui
import { useTheme } from "@mui/material/styles";

// third-party
import ReactApexChart from "react-apexcharts";

// chart options

// ==============================|| SALES COLUMN CHART ||============================== //

const SalesColumnChart = ({ months, data, series = [], type }) => {
  const symbol =
    type === "Number"
      ? ""
      : type === "Rate"
      ? "%"
      : type === "Price"
      ? "$"
      : "";
  const columnChartOptions = {
    chart: {
      events: {
        click: function (event, chartContext, config) {
          alert("clicked");
          // The last parameter config contains additional information like `seriesIndex` and `dataPointIndex` for cartesian charts
        }
      },
      zoom: {
        enabled: true,
        type: "x",
        resetIcon: {
          offsetX: -10,
          offsetY: 0,
          fillColor: "#fff",
          strokeColor: "#37474F"
        },
        selection: {
          background: "#90CAF9",
          border: "#0D47A1"
        }
      },
      type: "bar",
      height: 430,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        columnWidth: "30%",
        borderRadius: 4
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 8,
      colors: ["transparent"]
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
    },
    yaxis: {
      title: {
        text: "$ (thousands)"
      }
    },
    fill: {
      opacity: 1
    },

    // <div>
    // {symbol && symbol !== "$" ? <tspan>{symbol}</tspan> : null}
    // {val}
    // {symbol && symbol !== "$" ? <tspan>{symbol}</tspan> : null}
    // </div>
    tooltip: {
      y: {
        formatter(val) {
          return `${symbol}${val}`;
        }
      }
    },
    legend: {
      show: true,
      fontFamily: `'Public Sans', sans-serif`,
      offsetX: 10,
      offsetY: 10,
      labels: {
        useSeriesColors: false
      },
      markers: {
        width: 12,
        height: 12,
        radius: "50%",
        offsexX: 2,
        offsexY: 2
      },
      itemMargin: {
        horizontal: 20,
        vertical: 50
      }
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          yaxis: {
            show: false
          }
        }
      }
    ]
  };
  const theme = useTheme();

  const { primary, secondary } = theme.palette.text;
  const line = theme.palette.divider;

  const warning = theme.palette.warning.main;
  const primaryMain = theme.palette.primary.main;
  const successDark = theme.palette.success.dark;

  const [options, setOptions] = useState(columnChartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [warning, primaryMain],
      xaxis: {
        categories: months,
        labels: {
          style: {
            colors: [
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary
            ]
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: [secondary]
          }
        }
      },
      grid: {
        borderColor: line
      },
      tooltip: {
        theme: "light"
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        labels: {
          colors: "grey.500"
        }
      }
    }));
  }, [primary, secondary, line, warning, primaryMain, successDark]);

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={430}
      />
    </div>
  );
};

export default SalesColumnChart;
