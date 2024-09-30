import React from "react";

import { useLocation } from "react-router-dom";
import SideBarIconDropDown from "../SideBarIconDropDown/SideBarIconDropDown";

// This component is called by the sidebar to display the button and takes three props (isOpen, image, index )
// isOpen prop is to check if the navbar is open
// image props is the object which contains image as react component , title
// index prop defines the key

export default function SideBarIcon(props) {
  const location = useLocation();
  const { isOpen, image, index } = props;

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
    <>
      {image.submenu ? (
        <>
          <SideBarIconDropDown isOpen={isOpen} image={image} index={index} />
        </>
      ) : (
        <div>
          <a
            className={` group flex    w-full  justify-center hover:bg-gray-300 hover:cursor-pointer
           hover:text-blue-900 hover:opacity-100 py-2  items-center   ${
             !(isOpen && getSubLink()) && image.route === `/${getMainLink()}`
               ? "bg-gray-300 text-gray-300 border-r-4 border-blue-900 "
               : ""
           }
            ${isOpen === true ? "pl-10" : ""} `}
            href={image.route}
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
                  !(isOpen && getSubLink()) &&
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
      )}{" "}
    </>
  );
}
