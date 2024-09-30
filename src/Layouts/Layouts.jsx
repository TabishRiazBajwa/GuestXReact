import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar/SideBar";
import Header from "../components/Header/Header";

export const Layout = (props) => {
  const { showInitialFilterUi, initalFilterDialogText } = props;

  return (
    <div className="flex flex-col w-screen bg-gray-300 darkBackgroundMain h-screen">
      {props.displaySideBar === false ? "" : <SideBar />}
      <Header
        showFilter={props.showFilter}
        headerProps={props?.headerProps || {}}
      />

      <div className="flex flex-col w-full pl-24 pr-5 h-full overflow-x-auto">
        <div
          className="mt-3"
          style={
            showInitialFilterUi
              ? { overflow: "hidden", filter: "blur(5px)" }
              : {}
          }
        >
          {props?.children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
