import React from "react";

import notification_reccomendations_logo from "../../assets/icons/notification_dropdown/notification_reccomendations_logo.svg";
import notification_success_logo from "../../assets/icons/notification_dropdown/notification_success_logo.svg";
import notification_warning_logo from "../../assets/icons/notification_dropdown/notification_warning_logo.svg";
import notification_information_logo from "../../assets/icons/notification_dropdown/notification_information_logo.svg";

export default function Notification(props) {
  const { type, dot, text, time } = props;

  const logo = {
    Reccomendations: {
      logo: notification_reccomendations_logo,
      textcolor: "#F8B720",
    },

    Success: {
      logo: notification_success_logo,
      textcolor: "#25AE88",
    },

    Warning: {
      logo: notification_warning_logo,
      textcolor: "#EE404C",
    },

    Information: { logo: notification_information_logo, textcolor: "#2196F3" },
  };

  return (
    <div className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-500 h-40 flex flex-col justify-center  ">
      <div className=" flex flex-row justify-between gap-5    ">
        <div className="flex flex-col justify-center  ">
          <img className="w-14 h-14" src={logo[type].logo} />{" "}
        </div>
        <div className="flex flex-col gap-3 ">
          <div className={`text-[${logo[type].textcolor}]`}>{type}</div>
          <div className="tracking-wide text-left text-sm font-medium  opacity-100">
            {text}
          </div>
          <div className="tracking-wide text-left text-xs font-thin  opacity-100">
            {time}
          </div>
        </div>
        <div className="flex flex-col justify-center">
          {dot && <div className="h-3 w-3 rounded-full bg-blue-500"></div>}
        </div>
      </div>
    </div>
  );
}
