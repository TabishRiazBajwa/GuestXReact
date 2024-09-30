import React from "react";

const DashboardBarChartToggleButtons = ({
  index,
  text,
  category,
  setCategory,
  hasGoal,
  showGoal,
  setShowGoal,
  goalKey,
  categories,
}) => {
  const color =
    index === 0
      ? "#0F2E60"
      : index === 1
      ? "#1F66AC"
      : index === 2
      ? "#888888"
      : "#1F66AC";

  return (
    <div>
      <button
        className="flex flex-row justify-center items-center gap-2"
        onClick={
          !hasGoal
            ? () => {
                setCategory((prevCategory) =>
                  prevCategory !== text ? text : ""
                );

                if (showGoal) setShowGoal(false);
              }
            : () => {
                setShowGoal(!showGoal);
                setCategory(() => {
                  if (showGoal && category === goalKey) {
                    return "";
                  }
                  const matchingCategory = categories.find(
                    (cat) => cat.name === goalKey
                  );
                  console.log(
                    "A:",
                    matchingCategory.name,
                    "B:",
                    category,
                    "C:",
                    showGoal
                  );
                  return matchingCategory ? matchingCategory.name : "";
                });
              }
        }
      >
        <div
          className={`rounded-full w-[0.75vw] h-[1.5vh] ${
            category === text ||
            (hasGoal && showGoal) ||
            (category === "" && !hasGoal)
              ? `bg-[${color}]`
              : "bg-gray-300 opacity-50"
          }`}
        ></div>
        <p
          className={`text-base ${
            category === text ||
            (hasGoal && showGoal) ||
            (category === "" && !hasGoal)
              ? `text-[${color}]`
              : "text-gray-500 opacity-50"
          }`}
        >
          {text}
        </p>
      </button>
    </div>
  );
};

export default DashboardBarChartToggleButtons;
