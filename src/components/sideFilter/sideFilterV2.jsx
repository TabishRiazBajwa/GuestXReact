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

function sideFilterV2(){
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