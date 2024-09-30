import React, { useEffect, useState, useRef } from "react";

import dayjs from "dayjs";

import { DatePicker } from "@mui/x-date-pickers";

import DropdownSearch from "../dropdownSearch/dropdownSearch";

import useOutsideClick from "../../hooks/outsideClick";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import GroupsIcon from "@mui/icons-material/Groups";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

import CircularProgress from "@mui/material/CircularProgress";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import { getDarkModeEnabled } from "../../store/selector/general.selector";

import { useSelector } from "react-redux";

const getSelectedOptions = (filter) => {
  const selectedOptions = filter.options.filter((option) => option.checked);
  return selectedOptions;
};

function SideFilter(props) {
  const {
    closeFilter,
    showCompare,
    locationList,
    setSelectedLocation,
    setLabel,
    setDate,
    dateControl,
    marketingFilterProps,
    locationFilterProps,
    filterEnableList,

    serviceAdvisorFilterProps,
    isOpenBusinessServiceAdvisor,
    setIsOpenBusinessServiceAdvisor,
    showInitialFilterUi
  } = props;

  const { marketingSelection, setMarketingSelection } = marketingFilterProps;

  console.log(marketingSelection, "marketingSelection");

  const { locations, setLocations } = locationFilterProps;

  const [isHovered, setIsHovered] = useState(false);

  const {
    dateValueTo,
    setDateValueTo,
    dateValueFrom,
    setDateValueFrom,
    dateValueToCompare,
    setDateValueToCompare,
    dateValueFromCompare,
    setDateValueFromCompare
  } = dateControl;

  const containerRef = useRef(null);
  useOutsideClick(containerRef, () => closeFilter());

  const [tempLocation, setTempLocation] = useState(
    "Honest-1 Auto Care Littleton"
  );

  const [showOptions, setShowOptions] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const [isOpenA, setIsOpenA] = useState({
    value: false,

    query: "",

    options: [
      { id: 1, label: "Option 1", checked: false },

      { id: 2, label: "Option 2", checked: false },

      { id: 3, label: "Option 3", checked: false },

      { id: 4, label: "Option 4", checked: false },

      { id: 5, label: "Option 5", checked: false }
    ],

    filteredOptions: []
  });

  const [isOpenB, setIsOpenB] = useState({
    value: false,

    query: "",

    options: [
      { id: 1, label: "Option 1", checked: false },

      { id: 2, label: "Option 2", checked: false },

      { id: 3, label: "Option 3", checked: false },

      { id: 4, label: "Option 4", checked: false },

      { id: 5, label: "Option 5", checked: false }
    ],

    filteredOptions: []
  });

  const [isOpenC, setIsOpenC] = useState({
    value: false,

    query: "",

    options: [
      { id: 1, label: "Option 1", checked: false },

      { id: 2, label: "Option 2", checked: false },

      { id: 3, label: "Option 3", checked: false },

      { id: 4, label: "Option 4", checked: false },

      { id: 5, label: "Option 5", checked: false }
    ],

    filteredOptions: []
  });

  const [isOpenD, setIsOpenD] = useState({
    value: false,

    query: "",

    options: [
      { id: 1, label: "Option 1", checked: false },

      { id: 2, label: "Option 2", checked: false },

      { id: 3, label: "Option 3", checked: false },

      { id: 4, label: "Option 4", checked: false },

      { id: 5, label: "Option 5", checked: false }
    ],

    filteredOptions: []
  });
  // LOCATIONS

  const [isOpenBusinessLocation, setIsOpenBusinessLocation] = useState({
    ...locationList
  });

  const [isOpenBusinessTeam, setIsOpenBusinessTeam] = useState({
    value: false,

    query: "",

    options: [
      { id: 1, label: "Option 1", checked: false },

      { id: 2, label: "Option 2", checked: false },

      { id: 3, label: "Option 3", checked: false },

      { id: 4, label: "Option 4", checked: false },

      { id: 5, label: "Option 5", checked: false }
    ],

    filteredOptions: []
  });

  const themeMode = useSelector(getDarkModeEnabled);

  const [compareToCheckBox, setCompareToCheckBox] = useState(false);

  const theme = createTheme({
    palette: {
      mode: themeMode.mode === "dark" ? "dark" : "light"
      // mode: "light",
    }
  });

  const clear = (filter, setFilter) => {
    const updatedOptions = filter.options.map((option) => ({
      ...option,
      checked: false
    }));
    setFilter({ ...filter, options: updatedOptions });
  };

  const handleMarketingCheckboxChange = (event) => {
    setMarketingSelection(event.target.value);
  };

  const handleClearFilter = () => {
    clear(isOpenA, setIsOpenA);
    clear(isOpenB, setIsOpenB);

    clear(isOpenC, setIsOpenC);
    clear(isOpenD, setIsOpenD);

    clear(isOpenBusinessLocation, setIsOpenBusinessLocation);
    clear(isOpenBusinessTeam, setIsOpenBusinessTeam);

    clear(isOpenBusinessServiceAdvisor, setIsOpenBusinessServiceAdvisor);
    // clear(isOpenMarketingCampaign, setIsOpenMarketingCampaign);
  };

  const handleCancel = () => {
    closeFilter();
  };

  const handleApplyFilter = () => {
    if (!dateValueFrom.isBefore(dateValueTo)) {
      setErrorMessage("Date Range is Invalid");
      return false;
    }

    if (tempLocation) {
      setSelectedLocation(tempLocation);
    }
    // if (updatedLabel) {
    // setLabel(selectedOption);
    // }

    // isOpenMarketingCampaign.options.forEach((option) => {
    //   if (option.checked) {
    //     label_string_location = option.label;
    //   }
    // });

    // isOpenMarketingCampaign(selectedOption);

    let obj_locations = [];

    locations.options.forEach((option) => {
      if (option.checked) {
        obj_locations.push(option);
      }
    });

    if (obj_locations.length === 0) {
      setErrorMessage("Please select a location");
      return false;
    }

    if (filterEnableList?.service_advisor) {
      let obj_service_advisor = [];
      isOpenBusinessServiceAdvisor.options.forEach((option) => {
        if (option.checked) {
          obj_service_advisor.push(option.label);
        }
      });

      if (obj_service_advisor.length === 0) {
        setErrorMessage("Please select a service advisor");
        return false;
      }

      serviceAdvisorFilterProps?.setSelectedServiceAdvisor(obj_service_advisor);
    }

    setDate({
      startDate: dateValueFrom.date().toString().padStart(2, "0"),
      startMonth: (dateValueFrom.month() + 1).toString().padStart(2, "0"),
      startYear: dateValueFrom.year(),
      endDate: dateValueTo.date().toString().padStart(2, "0"),
      endMonth: (dateValueTo.month() + 1).toString().padStart(2, "0"),
      endYear: dateValueTo.year()
    });

    setLabel && setLabel(marketingSelection);

    setSelectedLocation(obj_locations);

    closeFilter();

    return true;
  };

  function transformServiceAdvisorList(service_advisor_list) {
    if (!service_advisor_list) return [];

    const location = getSelectedOptions(isOpenBusinessLocation);

    if (location.length === 0) return [];

    let options = [];

    let index = 0;
    if (!Array.isArray(location) || location.length === 0) return [];
    location &&
      location.forEach((locations) => {
        if (
          locations?.ConvirzaGroupNames &&
          locations?.ConvirzaGroupNames !== "" &&
          locations?.ConvirzaGroupNames !== "nan"
        ) {
          service_advisor_list[locations.ConvirzaGroupNames]?.forEach(
            (advisor) => {
              options.push({
                id: index++,
                label: advisor,
                checked: true
              });
            }
          );
        }
      });

    return options;
  }

  const handlePreset = (id) => {
    const today = dayjs();

    switch (id) {
      case "Yesterday":
        const yesterday = today.subtract(1, "day");
        return {
          from: yesterday,
          to: yesterday
        };

      case "Last Week":
        const lastSunday = today
          .subtract(today.day(), "day")
          .subtract(7, "day");
        const lastSaturday = lastSunday.add(6, "day");
        return {
          from: lastSunday,
          to: lastSaturday
        };

      case "Last Month":
        const firstDay = today.subtract(1, "month").date(1);
        const lastDay = today.date(0);

        return {
          from: firstDay,
          to: lastDay
        };

      case "Month to Date":
        const lastMonth = today.subtract(1, "month");
        return {
          from: lastMonth,
          to: today
        };

      case "Year to Date":
        const lastYear = today.subtract(1, "year");

        return {
          from: lastYear,
          to: today
        };

      default:
        return dayjs();
    }
  };

  const getDateFromDatePickerEvent = (e) => {
    const date = `${e.y}/${e.M + 1}/${e.y}`;

    return dayjs(date).format("yyyy/mm/dd");
  };

  //   useOnClickOutside(containerRef, () => {
  //     const container = containerRef.current;

  //   if (container) {
  //     setShowOptions(false);
  //   }
  // });

  function mergeServiceAdvisorList(oldList, newList) {
    const merged = oldList.slice(); // copy old list

    // Add new items
    newList.forEach((newItem) => {
      if (!oldList.find((oldItem) => oldItem.label === newItem.label)) {
        merged.push(newItem);
      }
    });

    // Remove items not in new list
    return merged.filter((mergedItem) =>
      newList.find((newItem) => newItem.label === mergedItem.label)
    );
  }
  console.log("locationList", locationList);
  useEffect(() => {
    setIsOpenBusinessLocation(locationList);
  }, [locationList]);

  useEffect(() => {
    if (
      !filterEnableList?.service_advisor ||
      serviceAdvisorFilterProps.loading ||
      !serviceAdvisorFilterProps?.service_advisor_list
    )
      return;

    setIsOpenBusinessServiceAdvisor((prevState) => ({
      ...prevState,
      options: mergeServiceAdvisorList(
        prevState.options,
        transformServiceAdvisorList(
          serviceAdvisorFilterProps?.service_advisor_list || []
        )
      )
    }));

    // if the options of service advisor is empty then set error message to select different location

    if (
      isOpenBusinessServiceAdvisor.options.length === 0 &&
      filterEnableList?.service_advisor
    ) {
      setErrorMessage("No service advisor found for selected location");
    } else {
      setErrorMessage("");
    }
  }, [
    isOpenBusinessLocation?.options,
    serviceAdvisorFilterProps?.service_advisor_list,
    isOpenBusinessServiceAdvisor.options.length
  ]);

  return (
    <>
      <div
        // Add transition classes for sliding animation
        className={` darkBackgroundMain fixed right-0 left-10 -top-10  rounded-lg h-max mt-60 ml-10 mr-5 bg-white border-b border-gray-300   shadow-md  ${
          props.showFilter
            ? "transform translate-y-0"
            : "transform -translate-y-full"
        }`}
      >
        <div className="flex justify-between mr-4">
          <div className="grid grid-cols-4 gap-4 m-4">
            <div className=" py-2  col-span-1">
              <DropdownSearch
                show={showOptions}
                isOpen={locations}
                setIsOpen={setLocations}
                displayLabel="Select Business"
                childIcon={
                  locationList.options.length || !filterEnableList?.location ? (
                    <LocationOnIcon className="dark:text-gray-300" />
                  ) : (
                    <CircularProgress />
                  )
                }
                disabled={
                  locationList.options.length === 0 ||
                  !filterEnableList?.location
                }
                oneOptionSection={false}
              />
            </div>
            {filterEnableList?.service_advisor && (
              <div className=" py-2  col-span-1">
                <DropdownSearch
                  show={showOptions}
                  isOpen={isOpenBusinessServiceAdvisor}
                  setIsOpen={setIsOpenBusinessServiceAdvisor}
                  displayLabel={
                    !serviceAdvisorFilterProps.loading &&
                    isOpenBusinessServiceAdvisor.options.length === 0
                      ? "Select Different Location!!"
                      : "Select Service Advisor"
                  }
                  childIcon={
                    serviceAdvisorFilterProps.loading ? (
                      <CircularProgress />
                    ) : (
                      <SupportAgentIcon />
                    )
                  }
                  disabled={!filterEnableList?.service_advisor}
                />
              </div>
            )}
            <ThemeProvider theme={theme}>
              {filterEnableList.marketingCampaign && (
                <div className="col-span-1">
                  <FormControl
                    variant="outlined"
                    className="mb-2"
                    fullWidth
                    margin="normal"
                  >
                    <InputLabel>Marketing</InputLabel>
                    <Select
                      value={marketingSelection || ""}
                      onChange={handleMarketingCheckboxChange}
                      name="marketing_filter"
                      label="Marketing Filter"
                    >
                      <MenuItem value="Google Ads Campaign">
                        Google Ads Campaign
                      </MenuItem>
                      <MenuItem value="Yelp">Yelp</MenuItem>
                      <MenuItem value="Repair Pal">Repair Pal</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              )}
              <div
                className={`flex items-center justify-center col-span-2  ${
                  filterEnableList?.service_advisor && "col-span-2"
                }`}
              >
                <div className="flex space-x-2 px-2 ">
                  <div>
                    <DatePicker
                      value={dateValueFrom}
                      onChange={(e) => {
                        setDateValueFrom(e);
                      }}
                      label="From"
                    />
                  </div>
                  <div>
                    <DatePicker
                      value={dateValueTo}
                      label="To"
                      onChange={(e) => {
                        setDateValueTo(e);
                      }}
                    />
                  </div>
                </div>
              </div>
            </ThemeProvider>
          </div>
          <div className="text-white flex flex-col gap-2 mx-auto justify-center  ">
            <button
              className="bg-blue-900 px-5 py-1 rounded-md w-max hover:bg-blue-700 h-12 "
              onClick={() => {
                handleApplyFilter();
                // closeFilter();
              }}
            >
              Apply Filter
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideFilter;
