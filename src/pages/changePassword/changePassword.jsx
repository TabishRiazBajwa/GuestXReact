import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import clsx from "clsx";
import ChangePasswordScreenSection from "../../components/ChangePasswordScreenSection/ChangePasswordScreenSection";
import { apiPostRequest } from "../../helpers/Requests";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const ChangePassword = (props) => {
  const {
    resetPasswordRequest,
    changePasswordError,
    changePasswordLoading,
    changePasswordSuccess
  } = props;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState({ email: "", password: "" });
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [msg, setMsg] = useState();

  const [loading, setLoading] = useState(false);
  const [request, setRequest] = useState({
    isRequested: false,
    isSuccess: false,
    isFailed: false
  });

  const resetPassword = async (data) => {
    setMsg("");
    setError("");
    setRequest({ ...request, isRequested: true, isFailed: false });
    localStorage.clear();
    sessionStorage.clear();
    try {
      let res = await apiPostRequest("auth/reset_password", data, null);
      if (res.status === 200) {
        setLoading(false);
        toast.success("Password is updated successfully", {
          position: toast.POSITION.TOP_CENTER
        });
        navigate("/");
      }
    } catch (err) {
      setLoading(false);
      setRequest({ ...request, isRequested: false, isFailed: true });
      if (err.message === "Invalid password") {
        setMsg("Invalid password");
      }
      setError(err.message);
    }
  };
  const onSubmit = (data) => {
    if (data.newPassword === data.confirmPassword) {
      // Passwords match, update password here
      resetPassword({
        email: data.email,
        password: data.OldPassword, //OLD Password
        new_password: data.newPassword
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

  let user = JSON.parse(localStorage.getItem("user"));
  const newPassword = watch("newPassword");
  const confirmPassword = watch("confirmPassword");

  return (
    <>
      <div className="p-4 h-screen ">
        <div className="grid grid-cols-3 h-full  ">
          <div className="bg-[#0F2E60] hidden md:block col-span-1 rounded-3xl ">
            <ChangePasswordScreenSection />
          </div>
          <div className=" col-span-3 md:col-span-2 flex-1 flex flex-col justify-center h-full">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <div>
                <h2 className="mt-6 text-3xl text-center font-bold text-blue-900">
                  Change Password
                </h2>
              </div>

              <div className="">
                <div className="mt-6">
                  <div className="mx-auto max-w-md">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="mt-1 did-floating-label-content">
                        <TextField
                          label="Enter Email Address"
                          className="w-full"
                          variant="outlined"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: "Invalid email address"
                            }
                          })}
                          error={errors.email}
                          helperText={errors.email && errors.email.message}
                        />
                      </div>
                      <TextField
                        {...register("OldPassword", {
                          required: "Old password is required",
                          minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters"
                          }
                        })}
                        label="Enter Old Password"
                        type={showPassword ? "text" : "password"} // Toggle password visibility
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        error={errors.password}
                        helperText={errors.password}
                        InputProps={{
                          endAdornment: (
                            <IconButton onClick={togglePasswordVisibility}>
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          )
                        }}
                      />

                      {msg && (
                        <span className="text-sm text-red-500">{msg}</span>
                      )}

                      <TextField
                        {...register("newPassword", {
                          required: "New password is required",
                          minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters"
                          },
                          validate: (value) => {
                            if (!isStrongPassword(value)) {
                              return "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character";
                            }
                            return true;
                          }
                        })}
                        label="New Password"
                        type={showPassword ? "text" : "password"} // Toggle password visibility
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        error={errors.newPassword}
                        helperText={
                          errors.newPassword && errors.newPassword.message
                        }
                        InputProps={{
                          endAdornment: (
                            <IconButton onClick={togglePasswordVisibility}>
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          )
                        }}
                      />
                      <TextField
                        {...register("confirmPassword", {
                          required: "New password is required",
                          minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters"
                          },
                          validate: (value) => {
                            if (!isStrongPassword(value)) {
                              return "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character";
                            }
                            return true;
                          }
                        })}
                        label="Re-enter New Password"
                        type={showPassword ? "text" : "password"} // Toggle password visibility
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        error={newPassword !== confirmPassword}
                        helperText={
                          newPassword !== confirmPassword &&
                          "Passwords do not match"
                        }
                        InputProps={{
                          endAdornment: (
                            <IconButton onClick={togglePasswordVisibility}>
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          )
                        }}
                      />
                      {/* {error && (
                        <span severity="error" className="my-4">
                          Passwords do not match.
                        </span>
                      )} */}
                      <div className="mt-4">
                        <Button
                          variant="contained"
                          color="primary"
                          style={{
                            borderRadius: 35,
                            backgroundColor: "rgb(30 58 138)"
                          }}
                          type="submit"
                          className={clsx(
                            "w-full mt-4 rounded-full",
                            newPassword !== confirmPassword &&
                              "opacity-50 pointer-events-none"
                          )}
                          // disabled={newPassword !== confirmPassword}
                        >
                          Update Password
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
