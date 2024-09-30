import { forwardRef } from "react";
import "./avatar.css";

const Avatar = forwardRef((props, ref) => {
  const {
    img,
    size,
    icon,
    color,
    status,
    badgeUp,
    content,
    tag: Tag = "div",
    initials,
    imgWidth,
    className,
    badgeText,
    imgHeight,
    badgeColor,
    imgClassName,
    contentStyles,
    ...rest
  } = props;

  const getInitials = (str) => {
    const results = [];
    const wordArray = str.split(" ");
    wordArray.forEach((e) => {
      results.push(e[0]);
    });
    return results.join("");
  };

  return (
    <Tag
      className={`avatar ${className} ${color ? `bg-${color}` : ""} ${
        size ? `avatar-${size}` : ""
      }`}
      ref={ref}
      {...rest}
    >
      {img === false || img === undefined ? (
        <span
          className={`avatar-content ${badgeUp ? "relative" : ""}`}
          style={contentStyles}
        >
          {initials ? getInitials(content) : content}

          {icon ? icon : null}
          {badgeUp ? (
            <span
              className={`badge-sm badge-up rounded-full ${
                badgeColor ? `bg-${badgeColor}` : "bg-primary"
              }`}
            >
              {badgeText ? badgeText : "0"}
            </span>
          ) : null}
        </span>
      ) : (
        <img
          className={imgClassName}
          src={img}
          alt="avatarImg"
          height={imgHeight && !size ? imgHeight : 8}
          width={imgWidth && !size ? imgWidth : 8}
        />
      )}
      {status ? (
        <span
          className={`avatar-status-${status} avatar-status-${size}`}
        ></span>
      ) : null}
    </Tag>
  );
});

export default Avatar;
