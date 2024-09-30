import React from "react";

import RankingReportRankingTableTab from "../rankingReportRankingTableTab/rankingReportRankingTableTab";

export default function RankingReportRankingTable() {
  const tabName = ["Service Advisor", "Team", "Region", "Brand", "Industry "];

  return (
    <table
      className="bg-white table-auto text-center  w-full"
      id="ranking_report_table"
    >
      <thead>
        <tr className="font-bold text-lg leading-7 text-gray-600 h-24">
          <th className="w-1/5">Standings</th>
          <th>Total Points</th>
          <th>Ranking</th>
        </tr>
      </thead>
      <tbody>
        {tabName.map((tabname, index) => (
          <RankingReportRankingTableTab key={index} tabName={tabname} />
        ))}
      </tbody>
    </table>
  );
}
