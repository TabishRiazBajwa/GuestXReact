import React from "react";

const CallInsightButton = ({ subpage, text, onClick }) => {
  return (
    <button
      className={`rounded-full px-4 py-1.5 ${
        subpage === text.toLowerCase() ? "bg-[#0E2E60]" : "none"
      }`}
      onClick={() => {
        if (subpage !== text.toLowerCase()) {
          onClick(text.toLowerCase());
        } else {
          onClick("");
        }
      }}
    >
      <p
        className={`text-lg ${
          subpage === text.toLowerCase()
            ? "text-white "
            : "text-black hover:text-gray-600 darkText dark_text_hover"
        }`}
      >
        {text}
      </p>
    </button>
  );
};

export default CallInsightButton;
