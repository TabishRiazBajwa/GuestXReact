import React, { useState } from "react";
import { faHome, faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  AccessManagementIconNotActive,
  KPIManagementIconNotActive,
  NotificationIconNotActive,
  ProfileIconNotActive,
  SecurityIconNotActive,
  AccessManagementIconActive,
  KPIManagementIconActive,
  NotificationIconActive,
  ProfileIconActive,
  SecurityIconActive,
} from "../../utils/utils";

const tabsData = [
  {
    id: "profile",
    label: "Profile",
    iconNotActive: <ProfileIconNotActive />,
    iconActive: <ProfileIconActive />,
  },
  {
    id: "security",
    label: "Security",
    iconNotActive: <SecurityIconNotActive />,
    iconActive: <SecurityIconActive />,
  },
  {
    id: "notifications",
    label: "Notifications",
    iconNotActive: <NotificationIconNotActive />,
    iconActive: <NotificationIconActive />,
  },
  {
    id: "access",
    label: "Access Management",
    iconNotActive: <AccessManagementIconNotActive />,
    iconActive: <AccessManagementIconActive />,
  },
  {
    id: "kpi",
    label: "KPI Management",
    iconNotActive: <KPIManagementIconNotActive />,
    iconActive: <KPIManagementIconActive />,
  },
];
const tabsDataForUser = [
  {
    id: "profile",
    label: "Profile",
    iconNotActive: <ProfileIconNotActive />,
    iconActive: <ProfileIconActive />,
  },
  {
    id: "security",
    label: "Security",
    iconNotActive: <SecurityIconNotActive />,
    iconActive: <SecurityIconActive />,
  },
  {
    id: "notifications",
    label: "Notifications",
    iconNotActive: <NotificationIconNotActive />,
    iconActive: <NotificationIconActive />,
  },
];

function TabsWithIcons(props) {
  const { setSelectedTab, selectedTab } = props;

  const [activeTab, setActiveTab] = useState(selectedTab);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setSelectedTab(tabId);
  };
  const user = JSON.parse(localStorage.getItem("user")).access_level;
  // alert(user);
  console.log("user", user);
  let tab = user !== "user" ? tabsData : tabsDataForUser;

  return (
    <div className="flex ">
      {tab.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTabClick(tab.id)}
          className={`py-2  space-x-1 px-4 flex rounded-md ${
            activeTab === tab.id
              ? "fill-[#0F2E60] dark:fill-[#FFFFFF] darkBackgroundSecondary "
              : ""
          } ${
            activeTab === tab.id
              ? "border-b-2 border-blue-900 dark_ui_border_color  text-blue-900 darkText  "
              : " fill-[#9B9B9B] hover:fill-[#5a5a5a] dark:fill-[#7B7B7B] text-[#9B9B9B] hover:text-[#5a5a5a] dark:text-[#7B7B7B] dark_ui_border_color dark_text_hover dark_fill_hover  "
          }`}
        >
          {/* {activeTab === tab.id ? tab.iconActive : tab.iconNotActive} */}

          {tab.iconActive}

          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
}

export default TabsWithIcons;
