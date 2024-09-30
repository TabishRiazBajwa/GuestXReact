// import React, { useState } from "react";
// import { sidebar_images, sidebar_settings } from "../../Constants/constant";
// import SideBarIcon from "../SideBarIcon/SideBarIcon";

// import logo_guestx from "../../assets/logo_guestx.png";

// import {
//   CalendarIcon,
//   ChartPieIcon,
//   DocumentDuplicateIcon,
//   FolderIcon,
//   HomeIcon,
//   UsersIcon
// } from "@heroicons/react/24/outline";

// const navigation = [
//   { name: "Dashboard", href: "#", icon: HomeIcon, count: "5", current: true },
//   { name: "Team", href: "#", icon: UsersIcon, current: false },
//   {
//     name: "Projects",
//     href: "#",
//     icon: FolderIcon,
//     count: "12",
//     current: false
//   },
//   {
//     name: "Calendar",
//     href: "#",
//     icon: CalendarIcon,
//     count: "20+",
//     current: false
//   },
//   { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
//   { name: "Reports", href: "#", icon: ChartPieIcon, current: false }
// ];
// const teams = [
//   { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
//   { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
//   { id: 3, name: "Workcation", href: "#", initial: "W", current: false }
// ];
// // // Main sidebar component

// const SideBar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const role = "**in";

//   return (
//     <div
//       onMouseEnter={() => {
//         setIsOpen(true);
//       }}
//       onMouseLeave={() => {
//         setIsOpen(false);
//       }}
//       className={`flex items-start  transition-all duration-100

//       transform pt-7 pb-10 overflow-y-auto scrollbar-y   top-0 left-0 bottom-0

//       z-[60]  border-r border-gray-200 flex-col  w-16 hover:w-80 h-full overflow-hidden text-gray-400 bg-white fixed`}
//     >
//       <div className="flex flex-row justify-center w-full pt-0 ">
//         <div className="w-72 h-28">
//           {isOpen && <img className="  h-20 mx-auto" src={logo_guestx} />}
//         </div>
//       </div>
//       {role !== "admin" ? (
//         <div
//           className={`flex flex-col justify-between h-full w-full ${
//             isOpen ? "pt-4" : "pt-20"
//           }`}
//         >
//           {/* All the navbar icons are loaded here */}
//           <div class="flex flex-col justify-center  w-full  ">
//             {sidebar_images.map((image, index) => (
//               <SideBarIcon image={image} index={index} isOpen={isOpen} />
//             ))}
//           </div>
//           {/* Settings Icon at the bottom */}
//           <div className="mt-20">
//             <SideBarIcon
//               image={sidebar_settings}
//               index={sidebar_settings.route}
//               isOpen={isOpen}
//             />
//           </div>
//         </div>
//       ) : (
//         ""
//       )}
//     </div>
//   );
// };

// export default SideBar;
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import React, { useEffect, useState } from "react";
import { sidebar_images, sidebar_settings } from "../../Constants/constant";
import SideBarIcon from "../SideBarIcon/SideBarIcon";
import { useSelector } from "react-redux";
import { getDarkModeEnabled } from "../../store/selector/general.selector";

import logo_guestx from "../../assets/logo_guestx.png";
import logo_guestx_dark from "../../assets/logo_guestx_darkmode.svg";
import { useLocation, useNavigate } from "react-router-dom";
import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, count: "5", current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  {
    name: "Projects",
    href: "#",
    icon: FolderIcon,
    count: "12",
    current: false
  },
  {
    name: "Calendar",
    href: "#",
    icon: CalendarIcon,
    count: "20+",
    current: false
  },
  { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false }
];

const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false }
];
// // Main sidebar component

const SideBar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [expandSubMenu, setExpandSubMenu] = useState(false);

  const themeMode = useSelector(getDarkModeEnabled);

  const role = "**in";
  const location = useLocation();
  console.log("user", user);
  // useEffect(() => {
  //   localStorage.setItem("mode", "not");
  // }, []);

  const getMainLink = () => {
    return location.pathname.split("/")[1];
  };

  const getSubLink = () => {
    const navigationSplit = location.pathname.split("/");

    if (navigationSplit.length === 3) {
      return location.pathname;
    }
    return false;
  };

  return (
    <div
      onMouseEnter={() => {
        setIsOpen(true);
      }}
      onMouseLeave={() => {
        setIsOpen(false);
      }}
      className={`flex items-start  transition-all duration-0

      transform  overflow-y-auto scrollbar-y   top-0 left-0 bottom-0

      z-[60]  border-r border-gray-200 flex-col  w-16 hover:w-64 h-full overflow-hidden text-white bg-white fixed`}
    >
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white darkBackgroundMain justify-center w-full ">
        <div className="flex justify-center h-16 shrink-0 items-center">
          {isOpen && (
            <img
              className="h-20 w-40  "
              src={themeMode.mode === "dark" ? logo_guestx_dark : logo_guestx}
              alt="Your Company"
            />
          )}
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7  w-full  ">
            <li>
              <ul
                role="list"
                className="space-y-2  w-full  flex flex-col justify-center  "
              >
                {sidebar_images.map((item) => (
                  <>
                    <li key={item.name} className=" w-full justify-center  ">
                      <a
                        onClick={() =>
                          item.submenu
                            ? expandSubMenu === item.name
                              ? () => {
                                  setExpandSubMenu(false);
                                }
                              : setExpandSubMenu(item.name)
                            : navigate(item.href)
                        }
                        // href={item.submenu ? null : item.href}
                        className={` ${!isOpen ? `justify-center` : ""} 
                        
                        hover:bg-custom-blue-4  dark:hover:bg-[#300df42c] hover:text-[#333333ce] hover:fill-[#333333ce] dark:hover:text-[#F5F5F5] dark:hover:fill-[#F5F5F5] 
                        
                        ${
                          item.href === `/${getMainLink()}`
                            ? "bg-custom-blue-4    text-[#333333] dark:text-[#FFFFFF] dark:bg-sidebar-dark fill-[#333333] dark:fill-[#FFFFFF] border-r-4 border-[#0F2E60] dark:border-blue-400 "
                            : "text-[#9B9B9B] fill-[#9B9B9B] "
                        }
                        group flex  gap-x-4  p-2 text-sm leading-6 font-semibold   hover:cursor-pointer w-full   `}
                      >
                        <item.icon
                          className={`h-6 w-6 shrink-0 group    dark:group-hover:fill-gray-8000  ${
                            item.href === `/${getMainLink()}` ? "" : " "
                          }`}
                          aria-hidden="true"
                        />
                        {isOpen && (
                          <div
                            className={` group-hover:text-text-[#F5F5F5]  ddark:group-hover:text-red-700  ${
                              item.href === `/${getMainLink()}` ? "" : ""
                            } `}
                          >
                            {item.name}
                          </div>
                        )}

                        {item.count ? (
                          <span
                            className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-gray-900 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-inset ring-gray-700"
                            aria-hidden="true"
                          >
                            {item.count}
                          </span>
                        ) : null}
                      </a>
                    </li>

                    {item.submenu &&
                      (expandSubMenu === item.name || false) &&
                      isOpen && (
                        <>
                          {item.submenu.map((subItem) => (
                            <li
                              key={subItem.name}
                              className=" w-full justify-center  "
                            >
                              <a
                                onClick={() => navigate(subItem.href)}
                                className={` ${
                                  !isOpen ? `justify-center` : ""
                                }  ${
                                  subItem.href === `${getSubLink()}`
                                    ? "bg-gray-400 text-[#F5F5F5] border-r-8 border-[#0F2E60]"
                                    : "text-gray-400 hover:text-white hover:bg-gray-400"
                                }
                                group flex  gap-x-4 rounded-md p-2 text-sm leading-6 font-semibold   hover:cursor-pointer w-full  text-right  `}
                              >
                                <div
                                  className={` group-hover:text-text-[#F5F5F5] text-right w-full pr-5  ${
                                    isOpen ? "" : ""
                                  } ${
                                    subItem.href === `${getSubLink()}`
                                      ? "text-gray-100"
                                      : ""
                                  } `}
                                >
                                  {subItem.name}
                                </div>

                                {subItem.count ? (
                                  <span
                                    className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-gray-900 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-inset ring-gray-700"
                                    aria-hidden="true"
                                  >
                                    {subItem.count}
                                  </span>
                                ) : null}
                              </a>
                            </li>
                          ))}
                        </>
                      )}
                  </>
                ))}
              </ul>
            </li>
            <li></li>
            <li className=" mt-auto">
              <a
                onClick={() => navigate("/settings")}
                className={`flex items-center gap-x-4 py-3 w-full text-sm font-semibold leading-6 ${
                  `/${getMainLink()}` === "/settings"
                    ? "bg-custom-blue-4    text-[#333333] dark:text-[#FFFFFF] dark:bg-sidebar-dark fill-[#333333] dark:fill-[#FFFFFF] border-r-4 border-[#0F2E60] dark:border-blue-400 "
                    : "text-[#9B9B9B] fill-[#9B9B9B] "
                }  hover:bg-custom-blue-4  dark:hover:bg-[#300df42c] hover:text-[#333333ce] hover:fill-[#333333ce] dark:hover:text-[#F5F5F5] dark:hover:fill-[#F5F5F5]`}
              >
                {/* <img
                  className={`h-10 w-10 rounded-full  ${
                    !isOpen ? "mx-auto" : "mx-5"
                  }`}
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                /> */}

                <div
                  className={`h-10 w-10 rounded-full ${
                    !isOpen ? "flex flex-row mx-auto" : "mx-5"
                  }`}
                >
                  <sidebar_settings.img />
                </div>

                {isOpen && (
                  <>
                    <span className="sr-only">Your profile</span>
                    <span aria-hidden="true">{user.name}</span>
                  </>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
