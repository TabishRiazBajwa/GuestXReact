import React from "react";

const Button = React.forwardRef(
  (
    {
      outline,
      active,
      block,
      color,
      tag: Tag = "button",
      size,
      close,
      className,
      ...props
    },
    ref
  ) => {
    let classes = "py-[15px] px-5 rounded-md font-semibold focus:outline-none";

    if (outline) {
      classes += ` border ${color ? `border-[${color}]` : "border-gray-500"}`;
    } else {
      classes += ` ${
        color
          ? `bg-[${color}] hover:bg-[${color}]`
          : "bg-blue-500 hover:bg-blue-700"
      } text-white`;
    }

    if (active) {
      classes += " active";
    }

    if (block) {
      classes += " w-full";
    } else if (size) {
      if (size === "lg") {
        classes += " w-64";
      } else if (size === "sm") {
        classes += " w-32";
      } else {
        classes += " w-48";
      }
    } else {
      classes += " w-48";
    }

    if (size) {
      if (size === "lg") {
        classes += " text-lg px-6 py-3";
      } else if (size === "sm") {
        classes += " text-sm px-3 py-1";
      } else {
        classes += " text-base px-4 py-2";
      }
    } else {
      classes += " text-base px-4 py-2";
    }

    if (close) {
      classes += " close";
    }

    classes += ` ${className}`;

    return <Tag ref={ref} className={classes} {...props} />;
  }
);

export default Button;
