import React, { useEffect, useRef, useState } from "react";
import { Visibility } from "@mui/icons-material";
import { AiOutlineExclamationCircle } from "react-icons/ai";

import { useSelector } from "react-redux";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

import useOutsideClick from "../../hooks/outsideClick";

import { getDarkModeEnabled } from "../../store/selector/general.selector";

function DropdownSearch(props) {
  const {
    show = false,
    isOpen,
    setIsOpen,
    displayLabel,
    childIcon,
    disabled,
    // If true then only one option can be selected
    oneOptionSection,
  } = props;

  const [selectAllCheckbox, setSelectAllCheckbox] = useState(false);
  const containerRef = useRef(null);
  const themeMode = useSelector(getDarkModeEnabled);

  const theme = createTheme({
    palette: {
      mode: themeMode.mode === "dark" ? "dark" : "light",
      // mode: "light",
    },
  });

  useOutsideClick(containerRef, () => {
    if (isOpen.value) {
      closeDropdown();
    }
  });

  function toggleDropdown() {
    !disabled && setIsOpen({ ...isOpen, value: !isOpen.value });
    // bcz option.value is either true or false
  }

  function closeDropdown() {
    setIsOpen({ ...isOpen, value: false });
  }

  function toggleOption(id) {
    let updatedOptions;
    if (oneOptionSection) {
      updatedOptions = isOpen.options.map((option) =>
        option.id === id
          ? { ...option, checked: !option.checked }
          : { ...option, checked: false }
      );
    } else {
      updatedOptions = isOpen.options.map((option) =>
        option.id === id ? { ...option, checked: !option.checked } : option
      );
    }

    setIsOpen({ ...isOpen, options: updatedOptions });
  }
  // Function to set all options to either TRUE or FALSE
  const setAllOptions = (bool) => {
    const updatedOptions = isOpen.options.map((option) => ({
      ...option,
      checked: bool,
    }));
    setIsOpen({ ...isOpen, options: updatedOptions });
  };

  const handleSelectAllClick = () => {
    setSelectAllCheckbox(!selectAllCheckbox);
    setAllOptions(!selectAllCheckbox);
  };

  const convertCheckedToString = () => {
    let string = "";

    isOpen.options.forEach((option) => {
      if (option.checked) {
        string += `${option.label} `;
      }
    });

    // setIsOpen({ ...isOpen, displayString: string });

    return string;
  };

  function handleSearch(event) {
    const query = event.target.value;
    const filteredOptions = isOpen.options.filter((option) =>
      option.label.toLowerCase().includes(query.toLowerCase())
    );

    // to prevent the search from firing too often
    setIsOpen({ ...isOpen, query: query, filteredOptions: filteredOptions });
    // second part
    // setSelectedLocation(query);
  }

  // LF: Supposedly these are the location in th dropdown
  const options = isOpen.query ? isOpen.filteredOptions : isOpen.options;

  return (
    <div className="relative " ref={containerRef}>
      <div className="flex items-center gap-4 hover:cursor-pointer ">
        <ThemeProvider theme={theme}>
          <FormControl
            sx={{
              m: 1,
              width: "45ch",
              opacity: disabled ? "50%" : "100%",
              // label: {
              //   color: themeMode === "dark" ? "#fff" : "#ccc", // Set label color to lighter color
              // },
            }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              {displayLabel}
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={"text"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={toggleDropdown} edge="end">
                    {childIcon ? childIcon : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label={displayLabel}
              disabled={disabled}
              readOnly={true}
              value={convertCheckedToString()}
              onClick={toggleDropdown}
              // sx={{
              //   input: {
              //     cursor: "pointer",
              //     color: themeMode === "dark" ? "#fff" : "#ccc", // Set text color to light gray
              //   },
              //   "& .MuiOutlinedInput-notchedOutline": {
              //     borderColor: themeMode === "dark" ? "#888" : "#ccc", // Lighten border color in dark mode
              //   },
              //   "&:hover .MuiOutlinedInput-notchedOutline": {
              //     borderColor: themeMode === "dark" ? "#aaa" : "#888", // Lighten border color on hover in dark mode
              //   },
              //   "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              //     borderColor: themeMode === "dark" ? "#bbb" : "#666", // Lighten border color when input is focused in dark mode
              //   },
              // }}
            />
          </FormControl>
        </ThemeProvider>
        {show && (
          <div>
            <AiOutlineExclamationCircle
              className="text-blue-500"
              title="Total calls: Total numbers of calls"
              style={{ fontStyle: "normal", fontWeight: "bold" }}
            />
          </div>
        )}
      </div>

      {isOpen.value && (
        <div className="absolute z-10 left-0 w-full max-h-96 overflow-y-auto bg-white rounded-b-md shadow-lg">
          <div className="px-4 py-2">
            <Input
              type="text"
              placeholder="Search"
              className="w-full border-b-2 hover:border-blue-500 cursor-pointer rounded-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={isOpen.query}
              onChange={handleSearch}
            />
          </div>

          <div className="grid grid-cols-1 px-4 gap-4">
            {!oneOptionSection && (
              <label className="  ">
                <input
                  type="checkbox"
                  className="mr-2"
                  onChange={() => handleSelectAllClick()}
                  checked={selectAllCheckbox}
                />
                <span className="text-[#0E2E60] text-base font-medium">
                  {"Select All"}
                </span>
              </label>
            )}
            {/* LF: Options are The Locations Supposedly */}
            {options.map((option, index) => (
              <div
                key={index}
                className="col-span-1 flex items-center justify-start"
              >
                <label key={option.id} className="  ">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={option.checked}
                    onChange={() => toggleOption(option.id)}
                  />
                  <span className="text-[#0E2E60] text-base font-medium">
                    {option.label}
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownSearch;
