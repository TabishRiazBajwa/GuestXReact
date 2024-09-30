import React from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";

export const ToolTipInfo = (props) => {
  const { title , className  , svgClass} = props;
  return (
    <span className="ToolTipInfo inline-flex relative">
      <AiOutlineExclamationCircle className= {`text-blue-500  text-3xl fill-[#0F2E60] w-5 ${svgClass} `} />
      <label  className={className}> {title}</label>
    </span>
  );
};

export default ToolTipInfo;