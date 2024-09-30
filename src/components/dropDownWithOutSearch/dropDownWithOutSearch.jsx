import React, { useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";

function DropDownWithOutSearch() {
  const [isOpen, setIsOpen] = useState({
    value: false,
    query: "",
    options: [
      { id: 1, label: "Awards", checked: false },
      { id: 2, label: "Yelp", checked: false },
      { id: 3, label: "RepairPal", checked: false },
      { id: 4, label: "Canvirza", checked: false },
      { id: 5, label: "Kukui", checked: false },
      { id: 6, label: "Kukui", checked: false },
      { id: 7, label: "Kukui", checked: false },
      { id: 8, label: "Kukui", checked: false },
      { id: 9, label: "Kukui", checked: false }
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
    <div className="relative ">
      <div className="flex items-center gap-4">
        <div>
          <button
            className={`bg-${isOpen.value ? "white" : "[#1F66AC]"} text-${
              isOpen.value ? "white" : "[#0E2E60]"
            } font-semibold py-2 px-4 rounded-t inline-flex items-center gap-10`}
            onClick={toggleDropdown}
          >
            <span
              className={`${isOpen.value ? "text-[#0E2E60]" : "text-white"}`}
            >
              Filters
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
        </div>
        <div>
   
        </div>
      </div>

      {isOpen.value && (
        <div className="absolute z-10 left-0 w-full max-h-60 overflow-y-auto bg-white rounded-b-md shadow-lg">
  
          {options.map((option) => (
            <label
              key={option.id}
              className=" px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex justify-between "
            >
              <div>
                <input
                  type="checkbox"
                  className="mr-2 leading-tight"
                  checked={option.checked}
                  onChange={() => toggleOption(option.id)}
                />
                <span className="">{option.label}</span>
              </div>
              <div>i</div>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropDownWithOutSearch;
