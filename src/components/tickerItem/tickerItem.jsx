import React from "react";

export default function TickerItem(props) {
  const { title, leftValue, rightValue, icon, color } = props;

  return (
    <div className="  w-max m-0.5 py-5 px-5 flex flex-col gap-2 bg-white  space ">
      <div className="min-w-fit">
        <p className="font-semibold text-base leading-6 text-blue-900">
          {title}
        </p>
      </div>
      <div className="flex flex-row justify-between gap-8  font-normal text-base  tracking-tight ">
        <div className="text-black">{leftValue}</div>
        <div className={`flex flex-row gap-2 ${color}`}>
          <div className="">{icon}</div>
          <div> {rightValue}</div>
        </div>
      </div>
    </div>
  );
}
