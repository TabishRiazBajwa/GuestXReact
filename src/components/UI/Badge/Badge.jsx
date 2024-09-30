import React from "react";

const Badge = React.forwardRef(
  ({ color, pill, tag: Tag = "span", className, ...props }, ref) => {
    let classes = "inline-block text-xs font-semibold";

    // if (color && colorMap[color]) {
    //   console.log(colorMap[color].light, colorMap[color].dark);
    //   classes += ` bg-[${colorMap[color].light}] text-[${colorMap[color].dark}]`;
    // } else {
    //   classes += " bg-gray-200 text-gray-800";
    // }

    //   // secondary: "#BB760D",
    //   // "secondary-light": "#FFF1D6",
    //   // danger: "#C64742",
    //   // "danger-light": "#FFE4DE",
    //   // rejected: "#73818E",
    //   // "rejected-light": "#EDEFF1",
    //   // black: "#000000",
    //   // white: "#FFFFFF",

    switch (color) {
      case "primary":
        classes += " bg-[#DBF6E5] text-[#1C935F]";
        break;
      case "secondary":
        classes += " bg-[#FFF1D6] text-[#BB760D]";
        break;
      case "danger":
        classes += " bg-[#FFE4DE] text-[#C64742]";
        break;
      case "grey":
        classes += " bg-[#EDEFF1] text-[#73818E]";
        break;
      case "black":
        classes += " bg-black text-white";
        break;
      default:
        classes += " bg-gray-200 text-gray-800";
        break;
    }

    if (pill) {
      classes += " rounded-full px-3 py-1";
    } else {
      classes += " rounded px-2 py-1";
    }

    // Combine existing classes with className prop
    classes += ` ${className}`;

    return <Tag ref={ref} className={classes} {...props} />;
  }
);

export default Badge;
