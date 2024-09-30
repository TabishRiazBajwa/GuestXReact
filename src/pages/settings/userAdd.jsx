import React, { useState } from "react";
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
  setUpdatesUser,
  locations,
  setLocations,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    about: "",
    locations: [],
    city: "",
    password: "",
    address: "",
    state: "",
    country: "",
    phone_number: "",
    zip_code: "",
    access_level: "",
    group: "",
    email: "",
    status: "",
  });
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [loading, setLoading] = useState(false);

  // console.log("initialData", initialData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const convertCheckedToString = () => {
    let res = [];
    locations.options.forEach((option) => {
      if (option.checked) {
        res.push(option.label);
      }
    });
    return res;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Set loading to true when submitting
    try {
      // Merge updated fields with unchanged fields from initialData
      const updatedData = {
        // ...initialData,
        ...formData,
        locations: convertCheckedToString(),
        user_email: formData.email,
        owner_email: JSON.parse(localStorage.getItem("user")).email,
      };

      // Make a POST request to the auth/update_all_user endpoint with updatedData
      const response = await fetch(BASE_URL + "auth/add_user_by_admin", {
        method: "POST",
        headers: withAPIKeys().headers,
        body: JSON.stringify(updatedData),
      });
      if (response.ok) {
        console.log("User data updated successfully!");
        toast.success("User data updated successfully!"); // Show success toast
        const responseData = await response.json();

        setUpdatesUser(responseData.user_info);
        onClose(); // Close the popup after successful submission
        // setFormData(initialData); // Reset form data to initial state
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
        <h2 className="text-3xl font-bold mb-6 text-center">User Details</h2>
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
          <div className="flex flex-col gap-1 pt-2 ">
            <div>
              <DropdownSearch
                displayLabel="Select District"
                isOpen={locations}
                setIsOpen={setLocations}
                childIcon={<></>}
              />
            </div>
            <div className=" pl-2 pr-1.5">
              <FormControl variant="outlined" fullWidth margin="normal">
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
                >
                  <MenuItem value="all">ALL</MenuItem>
                  <MenuItem value="IFC">IFC</MenuItem>
                  <MenuItem value="IFMC">IFMC</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="pl-2 pr-1.5">
              <FormControl variant="outlined" fullWidth margin="normal">
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
          <div className="mb-6 col-span-2">
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
          </div>

          <div className="w-full col-span-2">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={loading}
              sx={{ color: "white", backgroundColor: "#0F2E60" }}
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
