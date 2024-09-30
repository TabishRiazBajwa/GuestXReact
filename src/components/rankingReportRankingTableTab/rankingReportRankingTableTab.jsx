import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function RankingReportRankingTableTab(props) {
  const { tabName } = props;

  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <tr className="font-poppins text-black text-base leading-6 h-14">
        <td
          className={` ${
            isOpen ? "bg-blue-900" : "bg-gray-500"
          }  text-white border border-gray-500 hover:cursor-pointer`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex flex-row justify-between  pl-10 pr-5">
            <div>{tabName}</div>
            <div>{isOpen ? <AddIcon /> : <RemoveIcon />}</div>
          </div>
        </td>
        <td className="bg-gray-200 border border-gray-500" colSpan={2}></td>
      </tr>
      {isOpen && (
        <>
          <tr className="font-poppins text-black text-base leading-6 h-14">
            <td className="bg-gray-200 border border-gray-500">Jhon Smith</td>
            <td className="border border-gray-500">50</td>
            <td className="border border-gray-500">1st</td>
          </tr>
          <tr className="font-poppins text-black text-base leading-6 h-14">
            <td className="bg-gray-200 border border-gray-500">Jhon Smith</td>
            <td className="border border-gray-500">50</td>
            <td className="border border-gray-500">1st</td>
          </tr>
          <tr className="font-poppins text-black text-base leading-6 h-14">
            <td className="bg-gray-200 border border-gray-500">Jhon Smith</td>
            <td className="border border-gray-500">50</td>
            <td className="border border-gray-500">1st</td>
          </tr>
        </>
      )}
    </>
  );
}
