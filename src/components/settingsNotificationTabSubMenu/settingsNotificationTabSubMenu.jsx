import React from "react";

import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";

export default function SettingsNotificationTabSubMenu(props) {
  const { menu, updateSetting } = props;

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 34,
    height: 19,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 18,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(10.8px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(15px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 15,
      height: 15,
      borderRadius: 7,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 50 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          : "rgba(0,0,0,.25)",
      boxSizing: "border-box",
    },
  }));

  return (
    <div className="flex  flex-col lg:flex-row justify-between font-poppins ">
      <div className="lg:w-2/6">
        <div className="font-semibold text-lg  text-blue-900 ">{menu.text}</div>
        <div className="font-normal text-base text-left text-blue-900 ">
          {menu.subtext}
        </div>
      </div>
      <div className="lg:w-4/6  ">
        <div className="w-full flex flex-col gap-5 bg-[#F2F2F2] rounded-md p-10  text-black text-base">
          {menu.setting_items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-between"
            >
              <div className="flex flex-col justify-center">{item.text}</div>
              <div>
                <AntSwitch
                  checked={item.value}
                  onChange={() => updateSetting(index)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
