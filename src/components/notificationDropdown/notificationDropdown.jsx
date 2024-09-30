import React, { useState, useEffect, useRef } from "react";
import bell from "../../images/bellicon.png";
import Notification from "../notification/notification";

import { ReactComponent as Icon_notification } from "../../assets/icons/header/icon_notification.svg";

import CloseIcon from "@mui/icons-material/Close";

export default function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const notifications = [
    {
      type: "Reccomendations",
      dot: true,
      text: "There has been a spike in call score for Dan's calls. Check it out",
      time: "1 hour ago",
    },
    {
      type: "Success",
      dot: true,
      text: "Your recent changes have improved the call score. Good job!",
      time: "2 hours ago",
    },
    {
      type: "Warning",
      dot: true,
      text: "There has been a drop in call score for Sam's calls. Please review.",
      time: "3 hours ago",
    },
    {
      type: "Information",
      dot: true,
      text: "New features have been added to the call score system.",
      time: "4 hours ago",
    },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center justify-center  rounded-full focus:outline-none fill-[#0f2e60] dark:fill-[#FFFFFF] dark:hover:fill-[#ffffffa9] "
        onClick={toggleDropdown}
      >
        <Icon_notification />
      </button>

      {isOpen && (
        <div className="absolute -right-20 mt-2 w-[30rem] bg-white darkBackgroundMain shadow-lg">
          {/* Dropdown content */}
          <div className="py-2 px-10  flex flex-row justify-between  h-20 border-b">
            <div className="flex items-center justify-center font-semibold text-lg leading-7 text-left text-black dark:text-white">
              Notifications
            </div>
            <div className="flex flex-col justify-center">
              <button
                className={`h-11 w-32 text-left rounded-lg p-2 border border-gray-300 ${
                  isHovered ? "bg-[#BEBEBE] text-black" : "bg-white"
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="flex flex-row gap-2">
                  <div
                    className={`flex flex-col justify-center rounded-full border border-gray-200 ${
                      isHovered
                        ? "text-gray-100 bg-[#707070]"
                        : "bg-gray-200 text-white"
                    }`}
                  >
                    <CloseIcon fontSize="small" />
                  </div>
                  <div
                    className={`flex flex-col justify-center ${
                      isHovered ? "text-black" : "text-gray-300"
                    }`}
                  >
                    Clear All
                  </div>
                </div>
              </button>
            </div>
          </div>
          <ul className="py-2">
            {notifications.map((notification) => (
              <Notification
                type={notification.type}
                dot={notification.dot}
                text={notification.text}
                time={notification.time}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
