import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
// import Button from "../../components/UI/Button/Button";

import countries from "../../Constants/constant";
import { BASE_URL } from "../../store/services/URL";
import { toast } from "react-toastify";
import withAPIKeys from "../../store/services/service";
import avatar_default from "../../assets/avatar_large.png";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const Profile = () => {
  const { control, handleSubmit, setValue } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user) {
      Object.keys(user).forEach((key) => {
        setValue(key, user[key]);
      });
    }
  }, [user, setValue]);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      // API call to update user info
      const response = await fetch(BASE_URL + "auth/update_user_info", {
        method: "POST",
        headers: withAPIKeys().headers,
        body: JSON.stringify({ ...data, email: data.user_email }),
      });
      if (response.ok) {
        // Handle success
        const responseData = await response.json();

        localStorage.setItem("user", JSON.stringify(responseData.user_info));
        toast.success("User info updated successfully!");
      } else {
        // Handle error
        toast.error("Failed to update user info");
      }
    } catch (error) {
      console.error("An error occurred", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex flex-row min-h-[41rem] h-fit">
      <div className="w-1/3 flex flex-col justify-center gap-10 items-center px-10    rounded-2xl">
        <Avatar
          alt="Remy Sharp"
          src={avatar_default}
          sx={{ width: 100, height: 100 }}
        />
        <p className="text-[#888888] text-center">
          Allowed *.jpeg, *.jpg, *.png
          <br />
          max size of 3 MB
        </p>
        <h1 className="text-[#0E2E60] darkText text-2xl font-bold">
          {user.name}
        </h1>
      </div>
      <div className="w-2/3 px-10 py-8 mt-10  rounded-2xl flex flex-col justify-center ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-row items-center gap-3">
              <Controller
                name="name"
                control={control}
                defaultValue={user.name || ""}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Name"
                    variant="outlined"
                    className="w-1/2"
                  />
                )}
              />

              <Controller
                name="user_email"
                control={control}
                disabled
                defaultValue={user.user_email || ""}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="email"
                    label="Email Address"
                    variant="outlined"
                    className="w-1/2"
                  />
                )}
              />
            </div>
            <div className="flex flex-row items-center gap-3">
              <Controller
                name="phone_number"
                control={control}
                defaultValue={user.phone_number || "phone_number"}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="text"
                    label="Phone Number"
                    placeholder="Phone Number"
                    variant="outlined"
                    className="w-1/2"
                  />
                )}
              />
              <Controller
                name="address"
                control={control}
                defaultValue={user.address || ""}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="text"
                    label="Address"
                    placeholder="Address"
                    className="w-1/2 px-5 py-4 border border-[#707070] rounded-md text-[#888888] outline-none"
                  />
                )}
              />
            </div>
            <div className="flex flex-row items-center gap-3 ">
              <div className="w-1/2">
                <FormControl fullWidth>
                  <InputLabel>Country</InputLabel>

                  <Controller
                    name="country"
                    control={control}
                    defaultValue={user.country || ""}
                    render={({ field }) => (
                      <Select
                        {...field}
                        // variant="outlined"
                        className=""
                        label="Country"
                      >
                        {countries.map((country) => (
                          <MenuItem key={country} value={country}>
                            {country}
                          </MenuItem>
                        ))}
                      </Select>
                    )}
                  />
                </FormControl>
              </div>

              <Controller
                name="city"
                control={control}
                defaultValue={user.city || ""}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="text"
                    label="City"
                    placeholder="City"
                    variant="outlined"
                    className="w-1/2"
                  />
                )}
              />
            </div>
            <div className="flex flex-row items-center gap-3">
              <Controller
                name="state"
                control={control}
                defaultValue={user.state || ""}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="text"
                    label="State / Province"
                    placeholder="State / Province"
                    variant="outlined"
                    className="w-1/2"
                  />
                )}
              />

              <Controller
                name="zip_code"
                control={control}
                defaultValue={user.zip_code || ""}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="text"
                    label="Zip Code"
                    placeholder="Zip Code"
                    className="w-1/2"
                  />
                )}
              />
            </div>
            {/* Repeat the pattern for other fields */}
            {/* // ... (remaining code) */}
            <Controller
              name="about"
              control={control}
              defaultValue={user.about || ""}
              render={({ field }) => (
                <TextField
                  {...field}
                  multiline
                  rows={4}
                  variant="outlined"
                  label="About"
                  fullWidth
                  placeholder="About"
                />
              )}
            />
            <div>
              <button
                // size="sm"
                // color="#0E2E60"
                // className="self-end"
                className="button_primary"
                type="submit"
                disabled={isLoading} // Disable the button when loading
              >
                {isLoading ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
