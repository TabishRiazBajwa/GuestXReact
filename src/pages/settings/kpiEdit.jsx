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

import DropdownSearch from "../../components/dropdownSearch copy/dropdownSearch";

const FullScreenPopup = ({
  onClose,
  setUpdatesUser,
  initialData,
  locations,
  setLocations
}) => {
  const [formData, setFormData] = useState({
    name: "",
    division: "",
    goal: [],
    kpi: "",
    status: "",
    deadline: ""
  });
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleLocationChange = (event) => {
    setSelectedLocations(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Set loading to true when submitting
    try {
      const updatedData = {
        ...formData,
        email: JSON.parse(localStorage.getItem("user")).email
      };

      const response = await fetch(BASE_URL + "auth/create_kpi", {
        method: "POST",
        headers: withAPIKeys().headers,
        body: JSON.stringify(updatedData)
      });
      if (response.ok) {
        console.log("User data updated successfully!");
        toast.success("User data updated successfully!"); // Show success toast
        const responseData = await response.json();

        setUpdatesUser(responseData.user_info);
        onClose(); // Close the popup after successful submission
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

  const handleDeleteLocation = (locationToDelete) => {
    setSelectedLocations((prevLocations) =>
      prevLocations.filter((location) => location !== locationToDelete)
    );
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
        <h2 className="text-3xl font-bold mb-6 text-center">KPI Details</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div>
      
            <div className="mt-1 hidden">
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
            <div className="mt-5">
              <TextField
                label="Goal"
                variant="outlined"
                fullWidth
                margin="normal"
                name="goal"
                value={formData.goal}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
     
            <div className="mt-4">
              <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-700"
              >
                KPI
              </label>
              <select
                className="w-full px-5 py-4 border border-[#707070] rounded-md text-[#888888] outline-none"
                value={formData.kpi}
                disabled
                onChange={handleChange}
                name="status"
              >
                <option value="pending">pending</option>
              </select>
            </div>
          </div>
          <div className="mt-4 col-span-2">
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700"
            >
              Status
            </label>
            <select
              className="w-full px-5 py-4 border border-[#707070] rounded-md text-[#888888] outline-none"
              value={formData.status}
              onChange={handleChange}
              name="status"
            >
              <option value="pending">pending</option>
            </select>
          </div>
          <div className="mt-0 col-span-2 ">
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700"
            >
              Deadline
            </label>
            <input
              className="w-full px-5 py-4 border border-[#707070] rounded-md text-[#888888] outline-none"
              onChange={handleChange}
              name="deadline"
              value={formData.deadline}
              type="date"
            ></input>
          </div>
          <div className="w-full col-span-2">
            <Button
              type="submit"
              variant="contained"
              color="primary"
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
