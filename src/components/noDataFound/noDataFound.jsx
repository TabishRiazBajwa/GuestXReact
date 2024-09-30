import React from "react";

export default function NoDataFound() {
  return (
    // <div className="h-full w-full  ">
    //   <div className=" bg-white drop-shadow-lg rounded flex justify-center items-center">
    //     <p className="text-red-500 font-medium">No Data Found</p>
    //   </div>
    // </div>
    <div className="mx-auto h-[39vw] w-full flex items-center justify-center ">
      <dt className="text-sm text-red-500 font-semibold text-gray-900 border-b pb-3 flex justify-center items-center space-x-3">
        <span className="text-red-500 print:text-red-500">No Data found!</span>
      </dt>
    </div>
  );
}
