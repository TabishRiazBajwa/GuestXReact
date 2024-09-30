import React from "react";

import DropDownGeneric from "../dropDownGeneric/dropDownGeneric";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export default function ButtonDropDown(props) {
  const { options, buttonText, handleOptionSelection } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <button
        className="bg-blue-900 rounded-md px-5 py-3 text-white"
        onClick={() => setOpen(!open)}
      >
        <div className="flex flex-row gap-2">
          <div>{buttonText}</div>
          {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </div>
      </button>
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
  );
}
