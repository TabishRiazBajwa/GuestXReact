import React, { useEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5hierarchy from "@amcharts/amcharts5/hierarchy";

// import amb from "@amcharts/amcharts5/"

const ForceDirectedChart = ({ leftChart, rightChart, centerChart }) => {
  class MyTheme extends am5.Theme {
    setupDefaultRules() {
      this.rule("Label").setAll({
        fontSize: 12,
        fill: am5.color(0x777777)
      });

      this.rule("ColorSet").setAll({
        
        colors: [
          am5.color("#2E7E7E"),
          am5.color("#333333"),
          am5.color("#498329"), /// appointment
          am5.color("#7B7B7B"),
          am5.color("#B13E64"), // no appointment
          am5.color("#2F0DF4"),
          am5.color("#A91C13"), // unqualified
          am5.color("#FFFFFF"),
          am5.color("#FFFFFF"),
          am5.color("#FFFFFF"),
          am5.color("#FFFFFF"),
          am5.color("#FFFFFF"),
          am5.color("#FFFFFF")
        ]
        // reuse: true,
      });
    }
  }

  const chartRef = useRef(null);
  console.log("centerChart", centerChart);

  // Custom colors for different categories (names)
  const categoryColors = {
    Appointment: "#FF5733",
    "No Appointments": "#FF5733",
    Unqualified: "#FF5733"
    // Add more categories and colors as needed
  };

  const calculateTotal = (chart) => {
    let total = 0;

    for (let key in chart) {
      if (chart[key]) {
        total += chart[key];
      }
    }

    return total;
  };

  const leftChartTotal = calculateTotal(leftChart);
  const rightChartTotal = calculateTotal(rightChart);
  const centerChartTotal = calculateTotal(centerChart);

  useEffect(() => {
    if (!chartRef.current) {
      // Create root element only once
      let root = am5.Root.new("chartdiv");

      // Set themes

      root.setThemes([MyTheme.new(root)]);
      console.log(root, "root.defaultTheme");

      // Create wrapper container
      let container = root.container.children.push(
        am5.Container.new(root, {
          width: am5.percent(100),
          height: am5.percent(80),
          layout: root.verticalLayout
        })
      );

      // Create series
      let series = container.children.push(
        am5hierarchy.ForceDirected.new(root, {
          singleBranchOnly: false,
          downDepth: 1,
          initialDepth: 2,
          valueField: "value",
          categoryField: "name",
          childDataField: "children",
          centerStrength: 0.5,
          minRadius: calculateRadiusFromWidth(105), // Set the minimum radius here
          maxRadius: am5.percent(12)
        })
      );
      series.labels.template.setAll({
        fontSize: 20,
        fill: am5.color(0x110000),
        text: "{category}: {value}"
      });

      series.nodes.template.set(
        "tooltipText",
        "{category}: {id} [bold]{percent}%[/]  "
      );

      // series.nodes.template.set("tooltipText", (node) => {
      //   const category = node.dataItem.dataContext.category;
      //   const id = node.dataItem.dataContext.id;
      //   const percent = node.dataItem.dataContext.percent;

      //   if (category === "Total Calls") {
      //     // Handle the "Total Calls" category differently
      //     return `Custom tooltip for Total Calls[/]`;
      //   } else {
      //     return `${category}: ${id} [bold]${percent}%[/]`;
      //   }
      // });

      // Store the reference to the chart
      chartRef.current = {
        // tooltip,
        root,
        container,
        series
      };

      console.log("chartRef.current", chartRef.current);

      // Make stuff animate on load
      series.appear(1000, 100);
    }

    // Update data whenever rightChart changes

    // Cleanup function
    return () => {
      // Cleanup code if needed
    };
  }, []); // Only re-run the effect when rightChart changes

  const calculateRadiusFromWidth = (width) => {
    return width / 2; // Assuming width is the diameter
  };

  const updateNodeAppearance = (node) => {
    // Set different colors based on the node's category (name)
    const category = node.dataItem.dataContext.name;

    console.log(node, "node");

    if (categoryColors.hasOwnProperty(category)) {
      node.fill = am5.color(categoryColors[category]);
    } else {
      node.fill = am5.color("#FF5733"); // Default color
    }
  };

  useEffect(() => {
    if (chartRef.current && rightChart && leftChart && centerChart) {
      let dataa = {
        name: "Total Calls",
        color: "#CCCCCC",
        value: rightChartTotal + leftChartTotal + centerChartTotal,
        percent: 100,
        children: [
          {
            name: "Appointment",
            children: getAppointmentChildren(centerChart, centerChartTotal),
            value: centerChartTotal,
            percent: isNaN(
              Math.round(
                (centerChartTotal /
                  (rightChartTotal + leftChartTotal + centerChartTotal)) *
                  100
              )
            )
              ? 0
              : Math.round(
                  (centerChartTotal /
                    (rightChartTotal + leftChartTotal + centerChartTotal)) *
                    100
                )
          },
          {
            name: "No Appointments",
            children: getNoAppointmentsChildren(leftChart, leftChartTotal),
            value: leftChartTotal,
            percent: isNaN(
              Math.round(
                (leftChartTotal /
                  (rightChartTotal + leftChartTotal + centerChartTotal)) *
                  100
              )
            )
              ? 0
              : Math.round(
                  (leftChartTotal /
                    (rightChartTotal + leftChartTotal + centerChartTotal)) *
                    100
                )
          },
          {
            name: "Unqualified",
            children: getUnqualifiedChildren(rightChart, rightChartTotal),
            value: rightChartTotal,
            percent: isNaN(
              Math.round(
                (rightChartTotal /
                  (rightChartTotal + leftChartTotal + centerChartTotal)) *
                  100
              )
            )
              ? 0
              : Math.round(
                  (rightChartTotal /
                    (rightChartTotal + leftChartTotal + centerChartTotal)) *
                    100
                )
          }
        ]
      };

      console.log("dataa", dataa);

      chartRef.current.series.data.setAll([dataa]);

      // Update the appearance of each node after setting the data
      // chartRef.current.series.data.setAll([dataa]);

      // chartRef.current.series.set("fill", am5.color(0xff0000)); // set Series color to red
      // series2.set("fill", am5.color("#00ff00"));

      chartRef.current.series.set(
        "selectedDataItem",
        chartRef.current.series.dataItems[0]
      );
      // chartRef.current.series.nodes.each(updateNodeAppearance);
      // chartRef.current.series.nodes.each((node) => {
      //   console.log("node12", node);
      //   const percentage = (node.value / node.parent.value) * 100;
      //   node.tooltipHTML = `Value: {value}\nPercentage: ${percentage.toFixed(
      //     2
      //   )}%`;
      // });
    }
  }, [rightChart, leftChart, centerChart]);

  const getAppointmentChildren = (centerChart, parentTotal) => {
    console.log("centerChart in funct", centerChart);

    return [
      {
        name: `Confirmed`,
        value:
          centerChart?.Confirmed && centerChart.Confirmed > 1
            ? centerChart.Confirmed
            : null,
        total: 100,
        children: null,
        percent: Math.round((centerChart.Confirmed / parentTotal) * 100)
      },
      {
        name: "Tow In",
        value:
          centerChart?.Tow_In && centerChart.Tow_In > 1
            ? centerChart.Tow_In
            : null,
        total: 100,
        children: null,
        percent: Math.round((centerChart.Tow_In / parentTotal) * 100)
      },
      {
        name: "Drop off",
        value:
          centerChart?.Drop_Off && centerChart.Drop_Off > 1
            ? centerChart.Drop_Off
            : null,
        total: 100,
        children: null,
        percent: Math.round((centerChart.Drop_Off / parentTotal) * 100)
      },
      {
        name: "State Inspection",
        value:
          centerChart?.State_Inspection && centerChart.State_Inspection > 1
            ? centerChart.State_Inspection
            : null,
        total: 100,
        children: null,
        percent: Math.round((centerChart.State_Inspection / parentTotal) * 100)
      },
      {
        name: "Emission test",
        value:
          centerChart?.Emissions_Test && centerChart.Emissions_Test > 1
            ? centerChart.Emissions_Test
            : null,
        total: 100,
        children: null,
        percent: Math.round((centerChart.Emissions_Test / parentTotal) * 100)
      }
    ].filter((item) => item.value !== null);
  };

  console.log("leftChartTotal", leftChartTotal);
  console.log(leftChart, "leftChart");

  const getNoAppointmentsChildren = (leftChart) => {
    return [
      {
        name: `Unable to agree Appointment Time`,
        value:
          leftChart?.Unable_To_Agree_To_Appt &&
          leftChart.Unable_To_Agree_To_Appt > 1
            ? leftChart.Unable_To_Agree_To_Appt
            : null,
        total: 100,
        children: null,
        percent: Math.round(
          (leftChart.Unable_To_Agree_To_Appt / leftChartTotal) * 100
        )
      },
      {
        name: `Agent calling back with price`,
        value:
          leftChart?.Agent_Calling_Back_with_Price &&
          leftChart.Agent_Calling_Back_with_Price > 1
            ? leftChart.Agent_Calling_Back_with_Price
            : null,
        total: 100,
        children: null,
        percent: Math.round(
          (leftChart.Agent_Calling_Back_with_Price / leftChartTotal) * 100
        )
      },
      {
        name: `No Appointment offered`,
        value:
          leftChart?.No_Appointment_Offered &&
          leftChart.No_Appointment_Offered > 1
            ? leftChart.No_Appointment_Offered
            : null,
        total: 100,
        children: null,
        percent: Math.round(
          (leftChart.No_Appointment_Offered / leftChartTotal) * 100
        )
      }
    ].filter((item) => item.value !== null);
  };

  const getUnqualifiedChildren = (rightChart) => {
    return [
      {
        name: `No Answer`,
        value:
          rightChart.Call_Not_Answered_count &&
          rightChart.Call_Not_Answered_count > 1
            ? rightChart.Call_Not_Answered_count
            : null,
        children: null,
        total: 100,
        percent: Math.round(
          (rightChart.Call_Not_Answered_count / rightChartTotal) * 100
        )
      },

      {
        name: `Voice Mail`,
        value:
          rightChart.Voicemail_count && rightChart.Voicemail_count > 1
            ? rightChart.Voicemail_count
            : null,
        children: null,
        total: 100,
        percent: Math.round(
          (rightChart.Voicemail_count / rightChartTotal) * 100
        )
      },
      {
        name: `Robo Calls `,
        value:
          rightChart.Robo_Call_count && rightChart.Robo_Call_count > 1
            ? rightChart.Robo_Call_count
            : null,
        children: null,
        total: 100,
        percent: Math.round(
          (rightChart.Robo_Call_count / rightChartTotal) * 100
        )
      },

      {
        name: `Vendor `,
        value:
          rightChart.Vendor_call_count && rightChart.Vendor_call_count > 1
            ? rightChart.Vendor_call_count
            : null,
        children: null,
        total: 100,
        percent: Math.round(
          (rightChart.Vendor_call_count / rightChartTotal) * 100
        )
      },
      {
        name: `Solicitation`,
        value:
          rightChart.Solicitation_count && rightChart.Solicitation_count > 1
            ? rightChart.Solicitation_count
            : null,
        children: null,
        total: 100,
        percent: Math.round(
          (rightChart.Solicitation_count / rightChartTotal) * 100
        )
      },
      {
        name: `Wrong Number `,

        value:
          rightChart.Wrong_Number_count && rightChart.Wrong_Number_count > 1
            ? rightChart.Wrong_Number_count
            : null,
        children: null,
        total: 100,
        percent: Math.round(
          (rightChart.Wrong_Number_count / rightChartTotal) * 100
        )
      },
      {
        name: `Current Customer Inquiry`,
        value:
          rightChart.Current_customer_inquiry_count &&
          rightChart.Current_customer_inquiry_count > 1
            ? rightChart.Current_customer_inquiry_count
            : null,
        children: null,
        total: 100,
        percent: Math.round(
          (rightChart.Current_customer_inquiry_count / rightChartTotal) * 100
        )
      },

      {
        name: `Confirmation`,
        value:
          rightChart.Appointment_confirmation_count &&
          rightChart.Appointment_confirmation_count > 1
            ? rightChart.Appointment_confirmation_count
            : null,
        total: 100,
        children: null,
        percent: Math.round(
          (rightChart.Appointment_confirmation_count / rightChartTotal) * 100
        )
      },
      {
        name: `Reschedule`,
        value:
          rightChart.Appointment_reschedule_count &&
          rightChart.Appointment_reschedule_count > 1
            ? rightChart.Appointment_reschedule_count
            : null,
        total: 100,
        children: null,
        percent: Math.round(
          (rightChart.Appointment_reschedule_count / rightChartTotal) * 100
        )
      },
      {
        name: `Cancelation`,
        value:
          rightChart.Appointment_cancelation_count &&
          rightChart.Appointment_cancelation_count > 1
            ? rightChart.Appointment_cancelation_count
            : null,
        total: 100,
        children: null,
        percent: Math.round(
          (rightChart.Appointment_cancelation_count / rightChartTotal) * 100
        )
      },
      {
        name: `Hours or Directions`,
        value:
          rightChart.Hours_or_Directions_count &&
          rightChart.Hours_or_Directions_count > 1
            ? rightChart.Hours_or_Directions_count
            : null,
        total: 100,
        children: null,
        percent: Math.round(
          (rightChart.Hours_or_Directions_count / rightChartTotal) * 100
        )
      },
      {
        name: `Unidentified`,
        value:
          rightChart.Call_Not_Answered_count &&
          rightChart.Call_Not_Answered_count > 1
            ? rightChart.Call_Not_Answered_count
            : null,
        total: 100,
        children: null,
        percent: Math.round(
          (rightChart.Call_Not_Answered_count / rightChartTotal) * 100
        )
      },
      {
        name: `Internal`,
        value:
          rightChart.Call_Not_Answered_count &&
          rightChart.Call_Not_Answered_count > 1
            ? rightChart.Call_Not_Answered_count
            : null,
        total: 100,
        children: null,
        percent: Math.round(
          (rightChart.Call_Not_Answered_count / rightChartTotal) * 100
        )
      }
    ].filter((item) => item.value !== null);
  };

  return <div id="chartdiv" style={{ width: "100%", height: "900px" }}></div>;
};

export default ForceDirectedChart;
