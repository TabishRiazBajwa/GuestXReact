import { locale } from "moment";
import React, { useEffect, useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";

function Dropdown({
  setLocations,
  show = false,
  locationList = {},
  label = "",
  selectedLocation,
  setSelectedLocation,
  setDateOpen,
  isDateOpen,
  isOptionOpen,
  setIsOptionOpen,
}) {
  const [isOpen, setIsOpen] = useState({
    value: false,
    query: "",
    options: locationList,

    filteredOptions: [],
  });

  function toggleDropdown() {
    if (isDateOpen) setDateOpen(!isDateOpen);

    if (isOptionOpen) setIsOptionOpen(!isOptionOpen);

    setLocations({ ...locationList, value: !locationList.value });
  }

  const [selectedId, setSelectedID] = useState();

  function toggleOption(opt) {
    localStorage.setItem("selectedLocation", opt.label);

    setSelectedLocation({ ...opt });
    setSelectedID(opt.id);
    const updatedOptions = locationList.options.map((option) =>
      option.id === opt.id ? { ...option, checked: !option.checked } : option
    );

    setLocations({ ...isOpen, options: updatedOptions });
  }

  function handleSearch(event) {
    const query = event.target.value;
    const filteredOptions = locationList.options.filter((option) =>
      option.label.toLowerCase().includes(query.toLowerCase())
    );

    setLocations({
      ...locationList,
      query: query,
      filteredOptions: filteredOptions,
    });
  }

  const List = locationList.query
    ? locationList.filteredOptions
    : locationList.options;

  useEffect(() => {
    if (
      localStorage.getItem("selectedLocation") === null &&
      List &&
      List.length > 0
    ) {
      toggleOption(List[0]);
    }

    if (selectedLocation === null && List && List.length > 0) {
      const storedLocation = localStorage.getItem("selectedLocation");
      if (storedLocation) {
        const matchingItem = List.find((item) => item.label === storedLocation);
        if (matchingItem) {
          toggleOption(matchingItem);
        }
      }
    }
  }, [List, selectedLocation]);

  return (
    <div className="relative ">
      <div className="flex items-center gap-4">
        <button
          className={`rounded w-88 shadow-${
            locationList.value
              ? "lg offset-x-1 offset-y-2 blur-10"
              : "lg offset-x-2 offset-y-2 blur-10"
          } bg-${locationList.value ? "white" : "[#1F66AC]"} text-${
            locationList.value ? "white" : "[#0E2E60]"
          } font-semibold py-2 px-4 inline-flex items-center 2xl:gap-10 gap-4`}
          onClick={toggleDropdown}
        >
          <span
            className={`text-base leading-snug font-medium h-5  ${
              locationList.value ? "text-[#0E2E60]" : "text-white"
            }`}
          >
            <div className=" hidden sm:block w-max">
              {localStorage.getItem("selectedLocation") === null
                ? "Location"
                : localStorage.getItem("selectedLocation")}
            </div>

            <div className=" sm:hidden block">{"Location"}</div>
          </span>

          <svg
            className={`fill-current h-4 w-4 ml-2 ${
              !localStorage.getItem("selectedLocation") && "ml-60"
            } ${locationList.value ? "text-[#0E2E60]" : "text-white"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </button>

        {show && (
          <div>
            <AiOutlineExclamationCircle
              className="text-blue-500"
              title="Total calls 34534x: Total numbers of calls"
              style={{ fontStyle: "normal", fontWeight: "bold" }}
            />
          </div>
        )}
      </div>

      {locationList.value && (
        <div className="absolute z-10 left-0 w-full max-h-96 overflow-y-auto bg-white rounded-b-md shadow-lg">
          <div className="px-4 py-2 mb-3">
            <input
              type="text"
              placeholder="Search"
              className="w-full border-b-2 hover:border-blue-500 cursor-pointer rounded-none py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={locationList.query}
              onChange={handleSearch}
            />
          </div>

          <div className="grid grid-cols-1 px-4 gap-4 h-40 overflow-y-scroll">
            {List.map((option) => (
              <div
                key={option.label}
                className={`col-span-1  ${
                  option.id === selectedId ? "bg-[#0F2E60] text-white" : ""
                } shadow-box rounded  `}
                title={option.label}
              >
                <button
                  className={` ${
                    option.id === selectedId ? "bg-[#0F2E60] text-white" : ""
                  } h-8 px-2 w-full rounded text-[13px] text-[#0F2E60] overflow-hidden whitespace-nowrap text-overflow-ellipsis `}
                  onClick={() => toggleOption(option)}
                  checked={option.checked}
                >
                  {option.label}
                </button>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center py-2 ">
            <button className="bg-[#0F2E60] text-[#fff] font-noraml flex p-2 mt-4 px-5 text-sm items-center rounded w-100">
              {"Add All"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
