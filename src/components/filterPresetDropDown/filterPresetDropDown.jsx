import React, { useState } from "react";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import DropDownGeneric from "../dropDownGeneric/dropDownGeneric";
import dayjs from "dayjs";

export default function FilterPresetDropDown(props) {
  const { setFromDate, setToDate } = props;

  const string_Ids = [
    "Yesterday",
    "Last Week",
    "Last Month",
    "Month to Date",
    "Year to Date",
  ];
  const handlePreset = (id) => {
    const today = dayjs();

    switch (id) {
      case string_Ids[0]:
        const yesterday = today.subtract(1, "day");
        return {
          from: yesterday,
          to: yesterday,
        };

      case string_Ids[1]:
        const lastSunday = today
          .subtract(today.day(), "day")
          .subtract(7, "day");
        const lastSaturday = lastSunday.add(6, "day");
        return {
          from: lastSunday,
          to: lastSaturday,
        };

      case string_Ids[2]:
        const firstDay = today.subtract(1, "month").date(1);
        const lastDay = today.date(0);

        return {
          from: firstDay,
          to: lastDay,
        };

      case string_Ids[3]:
        const lastMonth = today.subtract(1, "month");
        return {
          from: lastMonth,
          to: today,
        };

      case string_Ids[4]:
        const lastYear = today.subtract(1, "year");

        return {
          from: lastYear,
          to: today,
        };

      default:
        return dayjs();
    }
  };

  const options = [
    { id: 0, text: string_Ids[0] },
    { id: 1, text: string_Ids[1] },
    { id: 2, text: string_Ids[2] },
    { id: 3, text: string_Ids[3] },
    { id: 4, text: string_Ids[4] },
  ];

  const handleClick = (id) => {
    const option = options.find((option) => option.id === id).text;

    console.log(51, option);

    const presetVals = handlePreset(option);

    console.log("50", presetVals);

    setFromDate(presetVals.from);
    setToDate(presetVals.to);
  };

  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className="text-blue-900 hover:text-blue-700 font-semibold text-lg leading-5 hover:cursor-pointer flex flex-row"
        onClick={() => setOpen(!open)}
      >
        <div>Presets</div>
        {open ? (
          <>
            <KeyboardArrowDownIcon />
            <div className="translate-y-6  -translate-x-12  absolute z-10  ">
              <DropDownGeneric
                options={options}
                handleOptionSelection={(id) => handleClick(id)}
              />
            </div>
          </>
        ) : (
          <ChevronRightIcon />
        )}
      </div>
      {/* {open && <GenericDrop} */}
    </div>
  );
}
