import { useState, useEffect, useRef } from "react";

import avatar_default from "../../assets/icons/header/avatar_default.png";

import Avatar from "@mui/material/Avatar";

const SimpleDropdownMenu = ({
  isOptionOpen,
  setIsOptionOpen,
  isOpen,
  setIsOpen,
  setLocations,
  locationList,
}) => {
  const dropdownRef = useRef(null);

  const handleButtonClick = () => {
    setIsOptionOpen(!isOptionOpen);
    if (isOpen) setIsOpen(false);
    if (locationList.value)
      setLocations({ ...locationList, value: !locationList.value });
  };

  const handleMenuItemClick = (item) => {};

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOptionOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="flex flex-col justify-center">
        <button onClick={handleButtonClick}>
          <Avatar alt="Remy Sharp" src={avatar_default} />
        </button>
      </div>

      {isOptionOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 bg-white darkBackgroundMain rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <button
              className="block  px-4 py-2 text-sm  hover:bg-gray-100  dark:hover:bg-[#3e474f] dark:hover:text-white w-full text-left"
              onClick={() => handleMenuItemClick("Account settings")}
            >
              Account settings
            </button>
            <button
              className="block  px-4 py-2 text-sm  hover:bg-gray-100  dark:hover:bg-[#3e474f] dark:hover:text-white w-full text-left"
              onClick={() => handleMenuItemClick("Support")}
            >
              Support
            </button>
            <button
              className="block  px-4 py-2 text-sm  hover:bg-gray-100  dark:hover:bg-[#3e474f] dark:hover:text-white w-full text-left"
              onClick={() => handleMenuItemClick("License")}
            >
              License
            </button>
            <button
              className="block  px-4 py-2 text-sm  hover:bg-gray-100  dark:hover:bg-[#3e474f] dark:hover:text-white w-full text-left"
              onClick={() => {
                localStorage.removeItem("user");
                localStorage.removeItem("token");
                window.location.href = "/";
              }}
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimpleDropdownMenu;
