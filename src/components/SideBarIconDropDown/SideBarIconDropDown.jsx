import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function SideBarIconDropDown(props) {
  const location = useLocation();
  const { isOpen, image, index } = props;

  const [expand, setExpand] = useState(false);

  const getMainLink = () => {
    return location.pathname.split("/")[1];
  };

  const getSubLink = () => {
    const navigationSplit = location.pathname.split("/");

    if (navigationSplit.length === 3) {
      return navigationSplit[2];
    }
    return false;
  };

  return (
    <div>
      <a
        className={` group flex    w-full  justify-center hover:bg-gray-300 hover:cursor-pointer
           hover:text-blue-900 hover:opacity-100 py-2  items-center   ${
             image.route === `/${getMainLink()}`
               ? "bg-gray-300 text-gray-300 border-r-4 border-blue-900 "
               : ""
           }
            ${isOpen === true ? "pl-10" : ""} `}
        onClick={() => setExpand(!expand)}
        // href={image.route}
        key={index}
      >
        <div
          className={`flex  items-center justify-center  w-12 h-12  ${
            !(isOpen && getSubLink()) && image.route === `/${getMainLink()}`
              ? ""
              : "opacity-25"
          }  group-hover:opacity-100 `}
        >
          <image.img fill="#0F2E60" />
        </div>

        {isOpen && (
          <div
            className={` ${
              image.route === `/${getMainLink()}`
                ? "bg-gray-300 text-blue-900"
                : ""
            }   px-2  w-full  py-3`}
          >
            {image.title}
          </div>
        )}
      </a>
      {image.submenu &&
        expand &&
        isOpen &&
        image.submenu.map((element, index) => {
          return (
            <a
              className={`group flex    w-full   hover:bg-gray-300 hover:cursor-pointer
              hover:text-blue-900 hover:opacity-100 py-2 pl-14    ${
                getSubLink() === element.route.split("/")[2]
                  ? "bg-gray-300 text-blue-900"
                  : ""
              }`}
              href={element.route}
              key={index}
            >
              {/* Image for submenu */}
              {/* <div
                  className={`flex  items-center   w-12 h-12  ${
                    !(isOpen && getSubLink()) &&
                    image.route === `/${getMainLink()}`
                    ? ""
                    : "opacity-25"
                  }  group-hover:opacity-100 `}
                  >
                  <image.img fill="#0F2E60" />
                </div> */}
              <div
                className={`group flex      hover:bg-gray-300 hover:cursor-pointer hover:text-blue-900 hover:opacity-100 
                  h-12 pl-10  py-3`}
              >
                {element.title}
              </div>
            </a>
          );
        })}
    </div>
  );
}
