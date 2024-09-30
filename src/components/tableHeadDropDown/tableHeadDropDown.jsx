import React, { useEffect, useState, useRef } from "react";

import FilterAltIcon from "@mui/icons-material/FilterAlt";

export default function TableHeadDropDown(props) {
  const [isOpen, setIsOpen] = useState({
    value: false,
    query: "",
    options: props.filterValues,
    filteredOptions: []
  });

  const [dropDownState, setDropDownState] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setIsOpen({ ...isOpen, options: props.filterValues });
  }, [props.filterValues]);

  useEffect(() => {
    let mousedown = false;

    function handleMouseUp(event) {
      if (
        mousedown &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setTimeout(() => setDropDownState(false), 0);
      }
      mousedown = false;
    }

    function handleMouseDown() {
      mousedown = true;
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  function openDropDown() {
    setDropDownState(!dropDownState);
  }

  function unSelectAllFun() {
    const updatedOptions = isOpen.options.map((option) => {
      return { ...option, checked: false };
    });
    setIsOpen({ ...isOpen, options: updatedOptions });

    props.setFilterValues(updatedOptions);
  }

  function selectAllFun() {
    const updatedOptions = isOpen.options.map((option) => {
      return { ...option, checked: true };
    });
    setIsOpen({ ...isOpen, options: updatedOptions });

    props.setFilterValues(updatedOptions);
  }

  function selectAllToggle(selectAllVar) {
    if (selectAllVar) {
      unSelectAllFun();
    } else {
      selectAllFun();
    }
  }

  function toggleOption(id) {
    const updatedOptions = isOpen.options.map((option) =>
      option.id === id ? { ...option, checked: !option.checked } : option
    );
    setIsOpen({ ...isOpen, options: updatedOptions });

    props.setFilterValues(updatedOptions);
  }

  function handleSearch(event) {
    const query = event.target.value;
    const filteredOptions = isOpen.options.filter((option) =>
      option.label.toLowerCase().includes(query.toLowerCase())
    );
    setIsOpen({ ...isOpen, query: query, filteredOptions: filteredOptions });
  }
  const options = isOpen.query ? isOpen.filteredOptions : isOpen.options;

  // this var will set the select all button to true or false based on the values of the options
  let selectAllVar = true;

  if (isOpen && isOpen.options && isOpen.options.length !== 0) {
    for (let i = 0; i < isOpen.options.length; i++) {
      if (!isOpen.options[i].checked) {
        selectAllVar = false;
        break;
      }
    }
  }

  return (
    <div className="">
      <div className=" text-sm  ">
        <button
          onClick={openDropDown}
          className={`rounded shadow-${
            isOpen.value ? "lg offset-x-1 offset-y-2 blur-10" : ""
          } text-black
      } font-semibold py-2  inline-flex`}
        >
          <div className="flex flex-row px-2">
            <span>{props.headerText}</span>
            {selectAllVar ? (
              <svg
                className={`fill-current h-4 w-4  text-black`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 10l5 5 5-5z" />
              </svg>
            ) : (
              ""
              // <FilterAltIcon style={{ fontSize: 15 }} />'
            )}
          </div>
        </button>
      </div>

      {dropDownState && (
        <div
          className="absolute z-10   max-h-60 overflow-y-auto bg-white rounded-b-md shadow-lg "
          ref={dropdownRef}
        >
          {props.search && (
            <div className="px-3 py-1">
              <input
                type="text"
                placeholder="Search"
                className="w-full border-b-2 hover:border-blue-500 cursor-pointer rounded-none flex items-center justify-center  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={isOpen.query}
                onChange={handleSearch}
              />
            </div>
          )}
          {/* Add a select All option */}

          <label
            key={"selecAll"}
            className="block px-4 py-2  text-gray-700 hover:bg-gray-100 text-left"
          >
            <input
              type="checkbox"
              className="mr-2 leading-tight"
              checked={selectAllVar}
              onChange={() => selectAllToggle(selectAllVar)}
            />
            <span className="text-[#0E2E60] ">{"Select All"}</span>
          </label>

          {options &&
            options.map((option) => (
              <label
                key={option.id}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
              >
                <input
                  type="checkbox"
                  className="mr-2 leading-tight"
                  checked={option.checked}
                  onChange={() => toggleOption(option.id)}
                />
                <span className="text-[#0E2E60]   ">{option.label}</span>
              </label>
            ))}
        </div>
      )}
    </div>
  );
}
