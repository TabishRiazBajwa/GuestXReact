import React from "react";

export default function DropDownGeneric(props) {
  const { options, handleOptionSelection } = props;

  return (
    <>
      <div className="absolute z-10 w-max  max-h-60 overflow-y-auto  rounded-b-md shadow-lg bg-white">
        {options.map((option) => (
          <label
            key={option.id}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:cursor-pointer"
            onClick={() =>
              handleOptionSelection && handleOptionSelection(option.id)
            }
          >
            <span className="text-[#0E2E60] text-base font-small ">
              {option.text}
            </span>
          </label>
        ))}
      </div>
    </>
  );
}
