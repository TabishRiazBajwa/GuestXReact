// Uses 3 Props

// selectedTab = state variable which determine which tab is selected
// setSelectedTab = update state function which updates selectedTab state
// options = list of options for the selector

import React from "react";

export default function MultipleRoundSelector(props) {
  const { selectedTab, setSelectedTab, options } = props;

  return (
    <>
      <div className="rounded-full bg-white py-2 px-2 w-fit flex  gap-2">
        {options.map((option) => (
          <button
            onClick={() => setSelectedTab(option)}
            className={`rounded-full py-1 px-3 text-sm text-center   font-poppins  font-medium   ${
              option === selectedTab ? "bg-blue-900 text-white " : ""
            } `}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
}
