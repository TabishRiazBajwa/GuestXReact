import React, { useState, useEffect, useRef } from "react";
import { Switch } from "@mui/material";

import ViewColumnIcon from "@mui/icons-material/ViewColumn";

const ToggleColumnDropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [columns, setColumns] = useState([
    { id: 1, name: "Column 1", isVisible: true, disabled: false },
    { id: 2, name: "Column 2", isVisible: true, disabled: false },
    { id: 3, name: "Column 3", isVisible: true, disabled: true }, // Disable Column 3
    // Add more columns as needed
  ]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest(".dropdown")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const dropdownRef = useRef(null);
  //   setIsOpen(!isOpen);

  const toggleColumnVisibility = (columnId) => {
    setColumns((prevColumns) =>
      prevColumns.map((column) =>
        column.id === columnId
          ? { ...column, isVisible: !column.isVisible }
          : column
      )
    );
  };

  const hideAllColumns = () => {
    setColumns((prevColumns) =>
      prevColumns.map((column) =>
        column.disabled ? column : { ...column, isVisible: false }
      )
    );
  };

  const showAllColumns = () => {
    setColumns((prevColumns) =>
      prevColumns.map((column) =>
        column.disabled ? column : { ...column, isVisible: true }
      )
    );
  };

  return (
    <div className="relative " ref={dropdownRef}>
      <button
        // className="flex gap-2 bg-[#0F2E60] rounded-md items-center justify-between px-4 py-2 text-sm font-medium text-white   border border-gray-300  shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "

        className="button_primary"
        onClick={toggleDropdown}
      >
        <ViewColumnIcon />
        COLUMNS
      </button>

      {isOpen && (
        <div
          className="absolute mt-2 z-50 w-60 p-5 bg-white border border-gray-300  shadow-lg rounded-md"
          style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}
        >
          {/* <ul className="py-2">
            {columns.map((column) => (
              <li
                key={column.id}
                className="flex items-center gap-3 px-4 py-2 text-sm"
              >
                <Switch
                  checked={column.isVisible}
                  onChange={() => toggleColumnVisibility(column.id)}
                  disabled={column.disabled}
                  size="small" // Set size to "small"
                />

                {column.name}
              </li>
            ))}
          </ul> */}
          {props?.children}
          {/* <div className="flex justify-center py-2">
            <button
              className="px-4 py-2 mr-2 text-sm font-medium text-blue-600   "
              onClick={hideAllColumns}
            >
              Hide All
            </button>
            <button
              className="px-4 py-2 text-sm font-medium text-blue-600  "
              onClick={showAllColumns}
            >
              Show All
            </button>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default ToggleColumnDropdown;
