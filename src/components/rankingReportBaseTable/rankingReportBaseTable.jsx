import React from "react";
import { Table } from "antd";
import RankingReportBaseTableRow from "../rankingReportBaseTableRow/rankingReportBaseTableRow";
import ReportSortingIcon from "../reportSortingIcon/reportSortingIcon";

export default function RankingReportBaseTable(props) {
  const { tabText, goal, percentageToGoal, valueType, data } = props;

  console.log(data, "99999999999999999999999999999999999");

  const getValueType = () => {
    return valueType === "Percentage"
      ? "Percentage"
      : valueType === "Value"
      ? "Value"
      : valueType === "Both"
      ? "Total"
      : "null";
  };

  const getColumns = () => {
    const columns = [
      {
        title: tabText,
        dataIndex: "Identified_Agent",
        key: "Identified_Agent",
        // render: () => "",
      },
      {
        title: "Compliance Score",
        children: [
          {
            title: getValueType(),
            dataIndex: "complianceScore",
            key: "complianceScore",
            // render: () => getValueType(),
          },
          goal && {
            title: "Goal",
            dataIndex: "goal",
            key: "goal",
          },
          percentageToGoal && {
            title: "% to Goal",
            dataIndex: "percentageToGoal",
            key: "percentageToGoal",
          },
        ].filter(Boolean),
      },
      {
        title: "Appointment",
        children: [
          {
            title: getValueType(),
            dataIndex: "Appointment_outcome_yes_change_percentage",
            key: "Appointment_outcome_yes_change_percentage",
            render: (value) =>
              value !== null ? (value !== 0 ? `${value}%` : "0") : "N/A",
            align: "center",
            sorter: (a, b) =>
              a.Appointment_outcome_yes_change_percentage -
              b.Appointment_outcome_yes_change_percentage,
          },
          goal && {
            title: "Goal",
            dataIndex: "goal",
            key: "goal2",
          },
          percentageToGoal && {
            title: "% to Goal",
            dataIndex: "percentageToGoal",
            key: "percentageToGoal2",
          },
        ].filter(Boolean),
      },
      {
        title: "No Appointment",
        children: [
          {
            title: getValueType(),
            dataIndex: "noAppointment",
            key: "noAppointment",
            render: () => getValueType(),
          },
          goal && {
            title: "Goal",
            dataIndex: "goal",
            key: "goal3",
          },
          percentageToGoal && {
            title: "% to Goal",
            dataIndex: "percentageToGoal",
            key: "percentageToGoal3",
          },
        ].filter(Boolean),
      },
    ];

    return columns;
  };

  return (
    <Table
      dataSource={data}
      columns={getColumns()}
      pagination={false}
      bordered
      size="middle"
    />
  );
}
