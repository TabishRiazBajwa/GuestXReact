import React, { useEffect, useState, useRef } from "react";
import { ReactComponent as Icon_refresh } from "../../assets/icons/header/icon_refresh.svg";
// import icon_notification from "../../assets/icons/header/icon_refresh.svg";
import SimpleDropdownMenu from "../doteddropdown/DotedDropDown";
import SideFilter from "../sideFilter/sideFilter";

import NotificationDropdown from "../notificationDropdown/notificationDropdown";

import { getConvirzaGroupNames } from "../../helpers/DataProcessor";
import { Switch } from "@mui/material";
import dayjs from "dayjs";
import { darkMode } from "../../store/actions/general.actions";
import { useDispatch } from "react-redux";

const getSelectedOptions = (filter) => {
  const selectedOptions = filter.options.filter((option) => option.checked);
  return selectedOptions;
};

const Header = (props) => {
  // If you want to show comparison dates on filterUI, set the showCompare prop to true
  const {
    heading,
    repairpal_revenue_data = [],
    setLabel,
    label,
    setDate,
    isOpen,
    setIsOpen,
    setSelectedLocation,
    selectedLocation,
    isOptionOpen,
    setIsOptionOpen,
    showCompare,
    showFilter = true,
    filterEnableList,

    service_advisor_filter,

    showInitialFilterUi,
  } = props.headerProps;
  const dispatch = useDispatch();

  const [marketingSelection, setMarketingSelection] = useState("Yelp");

  const setMarketingSelectionLabel = (label) => {
    setMarketingSelection(label);
    setLabel(label);
  };

  const [isOpenBusinessServiceAdvisor, setIsOpenBusinessServiceAdvisor] =
    useState({
      value: false,
      query: "",
      options: [],

      filteredOptions: [],
    });

  const updateOptions = (state, newOptions) => {
    if (newOptions.length === 0) {
      return state;
    }

    // if (state?.options.length === 0 && newOptions.length > 0) {
    //   newOptions[0].checked = true;
    //   // setSelectedLocation(newOptions[0]);
    // }

    // Get the current options array from the state object
    const currentOptions = state.options;
    // Compare the length of the current and new options arrays
    if (currentOptions.length !== newOptions.length) {
      // Filter out any options that are not in the new array by their label
      const filteredOptions = currentOptions.filter(
        (option) =>
          newOptions.findIndex(
            (newOption) => newOption.label === option.label
          ) !== -1
      );
      // Concatenate any options that are in the new array but not in the current array by their label
      const addedOptions = newOptions.filter(
        (newOption) =>
          currentOptions.findIndex(
            (option) => option.label === newOption.label
          ) === -1
      );
      // Update the checked property of the options based on the new array
      const updatedOptions = filteredOptions
        .concat(addedOptions)
        .map((option) => {
          const newOption = newOptions.find(
            (newOption) => newOption.label === option.label
          );

          return { ...option, checked: newOption.checked };
        });
      // Return a new state object with the updated options array

      return { ...state, options: updatedOptions };
    } else {
      // If the length of the arrays are the same, return the state object as it is

      return state;
    }
  };

  const [isSideFilterOpen, setIsSideFilterOpen] = useState(showInitialFilterUi);
  const containerRef = useRef(null);
  const [locations, setLocations] = useState(() => {
    const storedLocations = localStorage.getItem("locations");

    let obj_locations = [];

    storedLocations &&
      JSON.parse(storedLocations).options.forEach((option) => {
        if (option.checked) {
          obj_locations.push(option);
        }
      });

    setSelectedLocation(obj_locations);

    return storedLocations
      ? JSON.parse(storedLocations)
      : {
          value: false,
          query: "",
          options: [],
          filteredOptions: [],
        };
  });

  const [dateValueTo, setDateValueTo] = useState(() => {
    const storedValue = sessionStorage.getItem("dateValueTo");
    return storedValue ? dayjs(storedValue) : dayjs();
  });

  const [dateValueFrom, setDateValueFrom] = useState(() => {
    const storedValue = sessionStorage.getItem("dateValueFrom");
    return storedValue ? dayjs(storedValue) : dayjs().subtract(3, "month");
  });

  const [dateValueToCompare, setDateValueToCompare] = useState(() => {
    const storedValue = sessionStorage.getItem("dateValueToCompare");
    return storedValue ? dayjs(storedValue) : dayjs().subtract(1, "year");
  });

  const [dateValueFromCompare, setDateValueFromCompare] = useState(() => {
    const storedValue = sessionStorage.getItem("dateValueFromCompare");
    return storedValue
      ? dayjs(storedValue)
      : dayjs().subtract(1, "day").subtract(1, "year");
  });

  useEffect(() => {
    sessionStorage.setItem("dateValueTo", dateValueTo.format());
  }, [dateValueTo]);

  useEffect(() => {
    sessionStorage.setItem("dateValueFrom", dateValueFrom.format());
  }, [dateValueFrom]);

  useEffect(() => {
    sessionStorage.setItem("dateValueToCompare", dateValueToCompare.format());
  }, [dateValueToCompare]);

  useEffect(() => {
    sessionStorage.setItem(
      "dateValueFromCompare",
      dateValueFromCompare.format()
    );
  }, [dateValueFromCompare]);

  useEffect(() => {
    let newList = [];
    if (repairpal_revenue_data.length > 0) {
      newList = repairpal_revenue_data.map((dataObj) => ({
        ...dataObj,
        id: dataObj.IFC_IFMCLocationName,
        label: dataObj.IFC_IFMCLocationName,
        checked: false,
      }));
    }

    setLocations((state) => updateOptions(state, newList));
  }, [repairpal_revenue_data]);

  useEffect(() => {
    localStorage.setItem("locations", JSON.stringify(locations));
  }, [locations]);

  useEffect(() => {
    if (!filterEnableList?.service_advisor || service_advisor_filter.loading)
      return;

    const tempAdvisor = {
      ...isOpenBusinessServiceAdvisor,
      options: transformServiceAdvisorList(
        service_advisor_filter?.service_advisor_list || []
      ),
    };

    let obj_service_advisor = [];
    tempAdvisor.options.forEach((option) => {
      if (option.checked) {
        console.log(option.label, "option.label");
        obj_service_advisor.push(option.label);
      }
    });

    service_advisor_filter.setSelectedServiceAdvisor(obj_service_advisor);
  }, [
    service_advisor_filter?.service_advisor_list,
    service_advisor_filter?.loading,
  ]);

  useEffect(() => {
    setIsSideFilterOpen(showInitialFilterUi);
  }, [showInitialFilterUi]);

  function transformServiceAdvisorList(service_advisor_list) {
    if (!service_advisor_list) return [];

    const location = getSelectedOptions(locations);

    if (location.length === 0) return [];

    let options = [];

    let index = 0;
    if (!Array.isArray(location) || location.length === 0) return [];

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
              checked: true,
            });
          }
        );
      }
    });

    return options;
  }

  const role = "user";

  let idString =
    selectedLocation && selectedLocation.map
      ? "Locations Selected: " +
        selectedLocation.map((obj) => obj.id).join(",  ") +
        " | Date Selected: " +
        new Date(dateValueFrom).toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }) +
        " - " +
        new Date(dateValueTo).toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })
      : "No locations selected";

      if (idString.length > 100) {
        idString = idString.substring(0, 100) + "...";
      }

  const handleChnage = (e) => {
    if (e.target.checked) {
      dispatch(darkMode({ mode: "dark" }));
      JSON.stringify(localStorage.setItem("mode", "dark"));
    } else {
      dispatch(darkMode({ mode: "light" }));

      JSON.stringify(localStorage.setItem("mode", "light"));
    }
  };

  return (
    <div>
      <div className="w-full sticky border border-t-xl  dark:border-black top-0 bg-white  darkBackgroundMain text-[#0F2E60] darkText z-50 py-3 pl-28 ml-15 ">
        <div className="flex justify-between">
          <div className="flex items-center text-center gap-4 2xl:gap-6 ">
            <div className="font-bold text-md hidden md:block md:text-2xl w-max">
              {heading}
            </div>
          </div>
          <div></div>

          <div className="flex 2xl:gap-6 gap-3 px-6 items-center">
            <Switch onChange={handleChnage} />
            <div ref={containerRef}>
              {role !== "admin" && (
                <div className="flex w-max items-center h-full mx-1">
                  {showFilter && (
                    <button
                      onClick={(event) => {
                        // toggleFilter();
                        setIsSideFilterOpen(!isSideFilterOpen);
                      }}
                      type="button"
                      className="button_secondary"
                    >
                      <svg
                        className="h-6 w-6 fill-current mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M4.25 5.61C6.27 8.2 10 13 10 13v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-6s3.72-4.8 5.74-7.39A1 1 0 0 0 18.95 4H5.04a1 1 0 0 0-.79 1.61z" />
                      </svg>
                      <span className="hidden 2xl:block">Filter</span>
                    </button>
                  )}
                </div>
              )}
              {/* LF: Might be the code for opening Filter */}
              {isSideFilterOpen && (
                <SideFilter
                  isOpenBusinessServiceAdvisor={isOpenBusinessServiceAdvisor}
                  setIsOpenBusinessServiceAdvisor={
                    setIsOpenBusinessServiceAdvisor
                  }
                  filterEnableList={filterEnableList}
                  closeFilter={() => setIsSideFilterOpen(!isSideFilterOpen)}
                  locationList={locations}
                  showCompare={showCompare}
                  setSelectedLocation={setSelectedLocation}
                  setLabel={setLabel}
                  // setTempLabel={setTempLabel}
                  setDate={setDate}
                  dateControl={{
                    dateValueTo: dateValueTo,
                    setDateValueTo: setDateValueTo,
                    dateValueFrom: dateValueFrom,
                    setDateValueFrom: setDateValueFrom,
                    dateValueToCompare: dateValueToCompare,
                    setDateValueToCompare: setDateValueToCompare,
                    dateValueFromCompare: dateValueFromCompare,
                    setDateValueFromCompare: setDateValueFromCompare,
                  }}
                  marketingFilterProps={{
                    marketingSelection: marketingSelection,
                    setMarketingSelection: setMarketingSelectionLabel,
                  }}
                  locationFilterProps={{
                    locations: locations,
                    setLocations: setLocations,
                  }}
                  serviceAdvisorFilterProps={service_advisor_filter}
                  showInitialFilterUi={showInitialFilterUi}
                />
              )}
            </div>

            <button
              className="flex flex-col justify-center hover:cursor-pointer dark:fill-white fill-[#0f2e60]  dark:hover:fill-[#ffffffa9] "
              onClick={() => {
                window.location.reload();
              }}
            >
              <Icon_refresh />
            </button>

            <div className="flex flex-col justify-center ">
              <NotificationDropdown />
            </div>
            <div>
              <SimpleDropdownMenu
                isOptionOpen={isOptionOpen}
                setIsOptionOpen={setIsOptionOpen}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                isLocationOpen={setLocations}
                setLocations={setLocations}
                locationList={locations}
              />
            </div>
          </div>
        </div>
      </div>
      {showFilter && (
        <div
          className="newsletter-container bg-primary text-gray-800 pt-2 px-4"
          style={{ fontFamily: "Poppins" }}
        >
          <div className="flex justify-center px-20">{idString}</div>
        </div>
      )}
    </div>
  );
};

export default Header;
