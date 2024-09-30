import React from "react";
import SubPageButton from "../subPageButton/subPageButton";

const DashboardPageButtons = ({ pageData, subpage, setSubPage }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 darkBackgroundMain  bg-[#F2F2F2] dark_ui_border_color border-2 rounded-full w-max h-auto p-2">
      {pageData &&
        pageData.map((data, index) => (
          <SubPageButton
            key={data.title}
            subpage={subpage}
            text={data.title}
            onClick={setSubPage}
          />
        ))}
    </div>
  );
};

export default DashboardPageButtons;
