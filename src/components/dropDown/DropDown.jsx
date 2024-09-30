import React, { useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";

function Dropdown({ show = false }) {
  const [isOpen, setIsOpen] = useState({
    value: false,
    query: "",
    options: [
      { id: 1, label: "Adwords", checked: false },
      { id: 2, label: "Yelp", checked: false },
      { id: 3, label: "RepairPal", checked: false },
      { id: 4, label: "Canvirza", checked: false },
      { id: 5, label: "Kukui", checked: false }
    ],
    filteredOptions: []
  });

  function toggleDropdown() {
    setIsOpen({ ...isOpen, value: !isOpen.value });
  }

  function toggleOption(id) {
    const updatedOptions = isOpen.options.map((option) =>
      option.id === id ? { ...option, checked: !option.checked } : option
    );
    setIsOpen({ ...isOpen, options: updatedOptions });
  }

  function handleSearch(event) {
    const query = event.target.value;
    const filteredOptions = isOpen.options.filter((option) =>
      option.label.toLowerCase().includes(query.toLowerCase())
    );
    setIsOpen({ ...isOpen, query: query, filteredOptions: filteredOptions });
  }

  const options = isOpen.query ? isOpen.filteredOptions : isOpen.options;

  return (
    <div className="relative mr-8">
      <div className="flex items-center gap-4">
        <button
          className={`rounded shadow-${
            isOpen.value
              ? "lg offset-x-1 offset-y-2 blur-10"
              : "lg offset-x-2 offset-y-2 blur-10"
          } bg-${isOpen.value ? "white" : "[#1F66AC]"} text-${
            isOpen.value ? "white" : "[#0E2E60]"
          } font-semibold py-2 px-4 inline-flex items-center gap-10`}
          onClick={toggleDropdown}
        >
          <span
            className={`text-base leading-snug font-medium  ${
              isOpen.value ? "text-[#0E2E60]" : "text-white"
            }`}
          >
            Campaign Selection
          </span>
          <svg
            className={`fill-current h-4 w-4 ml-2 ${
              isOpen.value ? "text-[#0E2E60]" : "text-white"
            }`}
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
              title="Total calls 324: Total numbers of calls"
              style={{ fontStyle: "normal", fontWeight: "bold" }}
            />
          </div>
        )}
      </div>

      {isOpen.value && (
        <div className="absolute z-10 left-0  max-h-60 overflow-y-auto bg-white rounded-b-md shadow-lg">
          <div className="px-4 py-2">
            <input
              type="text"
              placeholder="Search"
              className="w-full border-b-2 hover:border-blue-500 cursor-pointer rounded-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={isOpen.query}
              onChange={handleSearch}
            />
          </div>
          {options.map((option) => (
            <label
              key={option.id}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <input
                type="checkbox"
                className="mr-2 leading-tight"
                checked={option.checked}
                onChange={() => toggleOption(option.id)}
              />
              <span className="text-[#0E2E60] text-base font-medium">
                {option.label}
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
