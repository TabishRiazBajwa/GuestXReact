import React, { useState } from "react";

import { ReactComponent as Icon_Sort } from "../../assets/icons/icon_sort.svg";
import DropDownGeneric from "../dropDownGeneric/dropDownGeneric";

const options = [
  { id: 0, text: "Low - High" },
  { id: 1, text: "High - Low" },
];

export default function ReportSortingIcon(props) {
  // sortAscending and sortDescending are two functions which will handle sorting. Passed as props here.
  const { sortAscending, sortDescending } = props;

  const handleOptionSelection = (id) => {
    !id ? sortAscending && sortAscending() : sortDescending && sortDescending();
  };

  const [open, setOpen] = useState(false);
  return (
    <>
      <Icon_Sort className="cursor-pointer" onClick={() => setOpen(!open)} />
      <div className="absolute">
        {open && (
          <DropDownGeneric
            options={options}
            handleOptionSelection={(id) => {
              handleOptionSelection(id);
              setOpen(false);
            }}
          />
        )}
      </div>
    </>
  );
}
