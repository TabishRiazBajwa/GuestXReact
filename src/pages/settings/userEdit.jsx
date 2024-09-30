import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Chip from "@mui/material/Chip";
import { BASE_URL } from "../../store/services/URL";
import withAPIKeys from "../../store/services/service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import DropdownSearch from "../../components/dropdownSearch/dropdownSearch";

const FullScreenPopup = ({
  onClose,
  initialData,
  setUpdatesUser,
  locations,
  setLocations,
}) => {
  console.log("locations", locations, initialData);

  // Check if initialData.locations contains a value also in locations.options
  useEffect(() => {
    locations.options.forEach((option) => {
      option.checked = false;
    });

    setLocations((prevLocations) => {
      return {
        ...prevLocations,
        options: prevLocations.options.map((option) => {
          if (initialData.locations.includes(option.IFC_IFMCLocationName)) {
            console.log(
              "option //////",
              option.IFC_IFMCLocationName,
              initialData.locations.includes(option.IFC_IFMCLocationName)
            );

            return {
              ...option,
              checked: true,
            };
          }
          return option;
        }),
      };
    });
  }, []);

  const [formData, setFormData] = useState(initialData);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [loading, setLoading] = useState(false);

  const convertCheckedToString = () => {
    let string = "";

    locations.options.forEach((option) => {
      if (option.checked) {
        string += `${option.label} `;
      }
    });

    // setIsOpen({ ...isOpen, displayString: string });

    return string;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Set loading to true when submitting
    try {
      // Merge updated fields with unchanged fields from initialData
      const updatedData = {
        ...initialData,
        ...formData,
        user_email: formData.email,
        owner_email: JSON.parse(localStorage.getItem("user")).email,
      };

      // Make a POST request to the auth/update_all_user endpoint with updatedData
      const response = await fetch(BASE_URL + "auth/update_all_user", {
        method: "POST",
        headers: withAPIKeys().headers,
        body: JSON.stringify(updatedData),
      });
      if (response.ok) {
        console.log("User data updated successfully!");
        toast.success("User data updated successfully!"); // Show success toast
        const responseData = await response.json();
        console.log("responseData", responseData);
        setUpdatesUser(responseData.user_info);
        onClose(); // Close the popup after successful submission
        setFormData(initialData); // Reset form data to initial state
      } else {
        console.error("Failed to update user data:", response.statusText);
        toast.error("Failed to update user data"); // Show error toast
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred"); // Show error toast
    } finally {
      setLoading(false); // Set loading back to false after request completes
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex z-50 justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md w-120 shadow-md">
        <div className="flex justify-end">
          <FontAwesomeIcon
            icon={faTimes}
            className="text-gray-500 cursor-pointer"
            onClick={onClose}
          />
        </div>
        <h2 className="text-3xl font-bold mb-6 text-center">
          Edit User Details
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <div className="">
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                disabled
                margin="normal"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="">
              <TextField
                label="Phone"
                variant="outlined"
                fullWidth
                margin="normal"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 pt-2">
            <div className="">
              <DropdownSearch
                displayLabel="Select District"
                isOpen={locations}
                setIsOpen={setLocations}
                childIcon={<></>}
              />
            </div>
            <div className="pt-1 pl-2 pr-1.5">
              <FormControl variant="outlined" fullWidth>
                <InputLabel>Access Level</InputLabel>
                <Select
                  value={formData.access_level || ""}
                  onChange={handleChange}
                  name="access_level"
                  label="Access Level"
                >
                  <MenuItem value="owner">owner</MenuItem>
                  <MenuItem value="manager">manager</MenuItem>
                  <MenuItem value="user">user</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className=" pl-2 pr-1.5">
              <FormControl variant="outlined" fullWidth margin="normal">
                <InputLabel>Group</InputLabel>
                <Select
                  value={formData.group || ""}
                  onChange={handleChange}
                  name="group"
                  label="Group"
                  disabled
                >
                  <MenuItem value="all">ALL</MenuItem>
                  <MenuItem value="IFC">IFC</MenuItem>
                  <MenuItem value="IFMC">IFMC</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="pt-3 pl-2 pr-1.5 ">
              <FormControl variant="outlined" fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                  value={formData.status || ""}
                  onChange={handleChange}
                  name="status"
                  label="Status"
                >
                  <MenuItem value="approved">approved</MenuItem>
                  <MenuItem value="pending">pending</MenuItem>
                  <MenuItem value="blocked">blocked</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          {/* <div className="mb-6 col-span-2">
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              margin="normal"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div> */}
          {/* <div className="mb-6 col-span-2">
            <FormControl fullWidth>
              <InputLabel id="locations-label">Locations</InputLabel>
              <Select
                labelId="locations-label"
                id="locations"
                multiple
                value={selectedLocations}
                onChange={handleLocationChange}
                renderValue={(selected) => (
                  <div>
                    {selected.map((value) => (
                      <Chip
                        key={value}
                        label={value}
                        onDelete={() => handleDeleteLocation(value)}
                        className="m-1"
                        color="primary"
                      />
                    ))}
                  </div>
                )}
              >
                <MenuItem value="Location1">Location 1</MenuItem>
                <MenuItem value="Location2">Location 2</MenuItem>
                <MenuItem value="Location3">Location 3</MenuItem>
              </Select>
            </FormControl>
          </div> */}
          <div className="w-full col-span-2">
            <Button
              type="submit"
              variant="contained"
              sx={{ color: "white", backgroundColor: "#0F2E60" }}
              fullWidth
              disabled={loading}
            >
              {loading ? "Saving..." : "Save"}
            </Button>
          </div>
        </form>
        <ToastContainer /> {/* Toast container for notifications */}
      </div>
    </div>
  );
};

export default FullScreenPopup;
