import React, { useState, useEffect } from "react";

import SideBar from "../../components/SideBar/SideBar";

import { getDarkModeEnabled } from "../../store/selector/general.selector";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";

import Header from "../../components/Header/Header";
import TabsWithIcons from "../../components/tabs/tabsIcons";
import { IconButton, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { apiPostRequest } from "../../helpers/Requests";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import { toast } from "react-toastify";
import AccessManagement from "./AccessManagement";
import KPIMangement from "./KPIMangement";

import Profile from "./Profile";

import SettingsNotificationTab from "../../components/settingsNotificationTab/settingsNotificationTab";
import Layout from "../../Layouts/Layouts";

function Settings(props) {
  const { repairpal_revenue_data, getRepairpalRevenueRequest } = props;
  const [startMonth, setStartMonth] = useState(null);
  const [endMonth, setEndMonth] = useState(null);
  const [startYear, setStartYear] = useState(null);
  const [endYear, SetEndYear] = useState(null);
  const [selectedStartDate, setSeletedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [newStartDate, setNewStartDate] = useState(null);
  const [newEndDate, setNewEndDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const [displayLabel, setDisplayLabel] = useState(null);
  const [sideOpen, setSideOpen] = useState(false);

  const [selectedLocation, setSelectedLocation] = useState([]);

  const [locations, setLocations] = useState({
    value: false,
    query: "",
    options: [],
    filteredOptions: [],
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [selectedTab, setSelectedTab] = useState("profile");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState({ email: "", password: "" });
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [loading, setLoading] = useState(false);
  const [request, setRequest] = useState({
    isRequested: false,
    isSuccess: false,
    isFailed: false,
  });
  const [msg, setMsg] = useState();

  const themeMode = useSelector(getDarkModeEnabled);

  const theme = createTheme({
    palette: {
      mode: themeMode.mode === "dark" ? "dark" : "light",
      // mode: "light",
    },
  });

  const toggleFilter = () => {
    setSideOpen(!sideOpen);
  };

  const resetPassword = async (data) => {
    setMsg("");
    setError("");
    setRequest({ ...request, isRequested: true, isFailed: false });
    // localStorage.clear();
    // sessionStorage.clear();

    try {
      let res = await apiPostRequest("auth/reset_password", data, null);
      if (res.status === 200) {
        setLoading(false);
        toast.success("Password is updated successfully", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (err) {
      setLoading(false);
      setRequest({ ...request, isRequested: false, isFailed: true });
      if (err.message === "Invalid password") {
        setMsg("Invalid old password. Please try again!");
      }
      setError(err.message);
    }
  };
  const onSubmit = (data) => {
    alert("done");
    if (data.newPassword === data.confirmPassword) {
      // Passwords match, update password here
      resetPassword({
        email: data.email,
        password: data.OldPassword, //OLD Password
        new_password: data.newPassword,
      });
      setSuccess(true);
      setError(false);
    } else {
      // Passwords don't match, display error message
      setError(true);
      setSuccess(false);
    }
  };
  const isStrongPassword = (password) => {
    const strongRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
    return strongRegex.test(password);
  };

  const newPassword = watch("newPassword");
  const confirmPassword = watch("confirmPassword");
  let user = JSON.parse(localStorage.getItem("user"));
  const Security = () => {
    const [inputOldPassword, setInputOldPassword] = useState("");
    const [inputNewPassword, setInputNewPassword] = useState("");
    const [inputConfirmPassword, setInputConfirmPassword] = useState("");

    // the function below checks and returns true if the passwords are same and are not null to unlock the submit button and to clear any error message

    const handleSubmitO = () => {
      if (
        inputOldPassword === "" ||
        inputNewPassword === "" ||
        inputConfirmPassword === ""
      ) {
        setMsg("Please fill all the fields");
      } else if (inputNewPassword !== inputConfirmPassword) {
        setMsg("Passwords do not match");
      } else {
        setMsg("");
        setMsg("Password updated successfully");
        // Passwords match, update password here
        resetPassword({
          email: user?.email || user?.user_email,
          password: inputOldPassword, //OLD Password
          new_password: inputNewPassword,
        });
      }
    };

    return (
      <div className=" p-10    text-[#0F2E60] darkText rounded-lg min-h-[41rem] h-fit ">
        <div className="flex flex-col space-y-2 ">
          <h className="font-semibold text-[22px]">Change Password</h>
          {msg && <span className="text-sm text-red-500">{msg}</span>}

          <p1 className=" text-[18px] font-normal text-base leading-normal font-poppins ">
            Follow the provided requirements for setting up the password
          </p1>
        </div>
        <div className="mt-5  ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid lg:grid-cols-3 ">
              <div className="mt-1 col-span-1 ">
                <TextField
                  label="Enter Email Address"
                  className="w-full"
                  variant="outlined"
                  disabled
                  value={user?.email || user?.user_email}
                  {...register("email", {
                    // required: "Email is required",
                    // pattern: {
                    //   value: /^\S+@\S+$/i,
                    //   message: "Invalid email address",
                    // },
                  })}
                  error={errors.email}
                  helperText={errors.email && errors.email.message}
                />
              </div>
            </div>

            <div className=" grid grid-cols-1 lg:grid-cols-3 lg:space-x-10 ">
              <div className="col-span-1">
                <TextField
                  {...register("OldPassword", {
                    required: "Old password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                  label="Enter Old Password"
                  type={showPassword ? "text" : "password"} // Toggle password visibility
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={errors.password}
                  helperText={errors.password}
                  value={inputOldPassword} // Add the value prop
                  onChange={(e) => setInputOldPassword(e.target.value)}
                  // InputProps={{
                  //   endAdornment: (
                  //     <IconButton onClick={togglePasswordVisibility}>
                  //       {showPassword ? <Visibility /> : <VisibilityOff />}
                  //     </IconButton>
                  //   )
                  // }}
                />
              </div>

              <div className="col-span-1">
                <TextField
                  {...register("newPassword", {
                    required: "New password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                    validate: (value) => {
                      if (!isStrongPassword(value)) {
                        return "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character";
                      }
                      return true;
                    },
                  })}
                  label="New Password"
                  type={showPassword ? "text" : "password"} // Toggle password visibility
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!errors.newPassword} // Change to !!errors.newPassword to properly handle errors
                  helperText={errors.newPassword && errors.newPassword.message}
                  value={inputNewPassword}
                  onChange={(e) => setInputNewPassword(e.target.value)}
                  // InputProps={{
                  //   endAdornment: (
                  //     <IconButton onClick={togglePasswordVisibility}>
                  //       {showPassword ? <Visibility /> : <VisibilityOff />}
                  //     </IconButton>
                  //   )
                  // }}
                />
              </div>

              <div className="col-span-1 ">
                <TextField
                  {...register("ConfirmPassword", {
                    required: "New password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                    validate: (value) => {
                      if (!isStrongPassword(value)) {
                        return "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character";
                      }
                      return true;
                    },
                  })}
                  label="Re-enter New Password"
                  type={showPassword ? "text" : "password"} // Toggle password visibility
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={inputConfirmPassword !== inputNewPassword}
                  helperText={
                    inputConfirmPassword !== inputNewPassword &&
                    "Passwords do not match"
                  }
                  value={inputConfirmPassword}
                  onChange={(e) => setInputConfirmPassword(e.target.value)}
                  // InputProps={{
                  //   endAdornment: (
                  //     <IconButton onClick={togglePasswordVisibility}>
                  //       {showPassword ? <Visibility /> : <VisibilityOff />}
                  //     </IconButton>
                  //   )
                  // }}
                />
              </div>
              {/* {error && (
                <span severity="error" className="my-4">
                Passwords do not match.
                </span>
              )} */}
            </div>
            <div className="col-span-1 my-5 ">
              <div className="flex flex-col mt-5 space-y-5 text-justify ">
                <h className="text-[22px] font-semibold">
                  Password Requirements
                </h>
                <div className=" pt-2 text-[18px] font-normal text-base leading-normal font-poppins ">
                  - Minimum 8 characters long - the more, the better
                </div>
                <div className=" text-[18px] font-normal text-base leading-normal font-poppins ">
                  - At least one lowercase character
                </div>
                <div className="  text-[18px] font-normal text-base leading-normal font-poppins ">
                  - At least one number, symbol, or whitespace character
                </div>
              </div>
              <div className=" grid grid-cols-1  md:grid-cols-4 lg:grid-cols-8 mt-10 ">
                <div>
                  <button
                    // variant="contained"
                    // color="info"
                    // style={{
                    //   borderRadius: 4,
                    //   backgroundColor: "rgb(30 58 138)",
                    // }}
                    // type="submit"
                    onClick={() => handleSubmitO()}
                    // className={clsx(
                    //   "w-full mt-4  bg-black ",
                    //   inputConfirmPassword !== inputNewPassword &&
                    //     "opacity-50 pointer-events-none"
                    // )}
                    className="button_primary"
                    // disabled={newPassword !== confirmPassword}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const ComingSoon = () => {
    return (
      <div className="items-center justify-center flex pt-48">
        <div className="bg-white rounded-lg shadow-md p-8  ">
          <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">
            Coming Soon
          </h1>
          <p className="text-lg text-center text-gray-600 mb-8">
            We're working hard to bring you something amazing. Stay tuned!
          </p>
          <div className="flex justify-center">
            <div className="border-t-2 border-gray-300"></div>
          </div>
          <p className="text-center text-gray-500 mt-3">
            Follow us for updates:
          </p>
          <div className="flex justify-center mt-3">
            <a
              href="#"
              className="text-blue-500 hover:text-blue-600 mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-600 mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-600 mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    );
  };

  function getActiveTab() {
    switch (selectedTab) {
      case "profile":
        return <Profile />;
      case "security":
        return <Security />;
      case "access":
        return (
          <AccessManagement locations={locations} setLocations={setLocations} />
        );
      case "kpi":
        return (
          <KPIMangement locations={locations} setLocations={setLocations} />
        );
      case "notifications":
        return <SettingsNotificationTab />;

      case "kpi":
        return <KPIMangement />;
      default:
        return <ComingSoon />;

      // code block
    }
  }

  const userr = JSON.parse(localStorage.getItem("user")).email;
  useEffect(() => {
    getRepairpalRevenueRequest({
      email: userr,
    });
  }, []);

  useEffect(() => {
    let newList = [];
    if (repairpal_revenue_data.length > 0) {
      newList = repairpal_revenue_data.map((dataObj) => ({
        ...dataObj,
        id: dataObj.IFC_IFMCLocationName,
        label: dataObj.IFC_IFMCLocationName,
        checked: false,
        filteredOptions: [],
        query: "",
      }));
    }

    setLocations({ ...locations, options: newList });
  }, [repairpal_revenue_data]);

  return (
    <>
      <Layout
        headerProps={{
          label: "Settings",
          setIsOpen: setIsOpen,
          displayLabel: displayLabel,
          repairpal_revenue_data: "",
          isOpen: isOpen,
          selectedStartDate: selectedStartDate,
          selectedEndDate: selectedEndDate,
          setSeletedStartDate: setSeletedStartDate,
          setSelectedEndDate: setSelectedEndDate,
          setNewStartDate: setNewStartDate,
          setNewEndDate: setNewEndDate,
          selectedLocation: selectedLocation,
          setSelectedLocation: setSelectedLocation,
          setStartMonth: setStartMonth,
          setEndMonth: setEndMonth,
          setStartYear: setStartYear,
          SetEndYear: SetEndYear,
          startMonth: startMonth,
          startYear: startYear,
          endMonth: endMonth,
          endYear: endYear,
          toggleFilter: toggleFilter,
          isOptionOpen: isOptionOpen,
          setIsOptionOpen: setIsOptionOpen,
          showFilter: false,
        }}
      >
        <div className="w-full p-4">
          <TabsWithIcons
            setSelectedTab={setSelectedTab}
            displayLabel="Select Location"
            selectedTab={selectedTab}
          />
          <div className="w-full px-10 py-8 mt-10 bg-white dark:border-2 dark_ui_border_color  darkBackgroundMain rounded-2xl ">
            <ThemeProvider theme={theme}>
              {getActiveTab(selectedTab)}
            </ThemeProvider>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Settings;
