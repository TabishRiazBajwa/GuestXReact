import React, { useState } from "react";

import SettingsNotificationTabSubMenu from "../settingsNotificationTabSubMenu/settingsNotificationTabSubMenu";

export default function SettingsNotificationTab() {
  const settings_data = [
    {
      text: "Activity",
      subtext: "Users activity and business goals",
      setting_items: [
        {
          id: 0,
          text: "Notify me when a goal has been achieved",
          value: true,
        },
        {
          id: 1,
          text: "Notify managers when their team manager achieve a goal",
          value: false,
        },
        {
          id: 2,
          text: "Notify manager on low performing members",
          value: false,
        },
        {
          id: 3,
          text: "Notify managers on high performing members",
          value: false,
        },
      ],
    },
    {
      text: "Application:",
      subtext: "Application updates and news",
      setting_items: [
        {
          id: 21,
          text: "News and Announcement",
          value: false,
        },
        {
          id: 22,
          text: "Weekly Product Update",
          value: false,
        },
        {
          id: 23,
          text: "Weekly blog digest",
          value: false,
        },
      ],
    },
  ];

  const [settings, setSettings] = useState(settings_data);

  const updateSetting = (id, subIndex) => {
    let updatedSettings = [...settings];
    updatedSettings[id].setting_items[subIndex].value =
      !updatedSettings[id].setting_items[subIndex].value;

    setSettings(updatedSettings);
  };

  return (
    <div className="bg-white p-10   text-blue-900 rounded-lg flex flex-col gap-10 min-h-[41rem] h-fit ">
      {settings.map((menu, index) => (
        <SettingsNotificationTabSubMenu
          menu={menu}
          updateSetting={(subId) => {
            updateSetting(index, subId);
          }}
        />
      ))}
    </div>
  );
}
