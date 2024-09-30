import React, { useEffect, useState, useRef } from "react";
// import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import LoginScreenSection from "../../components/LoginScreenSection/LoginScreenSection";
import { TextField, Button } from "@mui/material";

import { apiPostRequest } from "../../helpers/Requests";
import axios from "axios";
const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const tawkMessengerRef = useRef();

  const navigate = useNavigate();
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);
  const [request, setRequest] = useState({
    isRequested: false,
    isSuccess: false,
    isFailed: false,
  });
  const [ip, setIP] = useState("");



  const getData = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");
    console.log(res.data);
    setIP(res.data.ip);
  };

  console.log("ip", ip);

  const login = async (data) => {
    setError("");
    setRequest({ ...request, isRequested: true, isFailed: false });
    localStorage.clear();
    sessionStorage.clear();
    try {
      let res = await apiPostRequest("auth/login", { ...data, Ip: ip }, null);
      if (res.status === 200) {
        setLoading(false);
        const user = {
          ...res.data.user_info,
          user_email: data.email,
        };
        localStorage.setItem(
          "user",
          // JSON.stringify(res.data.user_info, res.data.user_email)
          JSON.stringify(user)
        );
        localStorage.setItem("token", res.data.access_token);

        localStorage.setItem("ipaddress", ip);
      }
    } catch (err) {
      setLoading(false);
      setRequest({ ...request, isRequested: false, isFailed: true });
      setError(err.message.replace(": list index out of range", ""));
    }
    navigate("/Dashboard");
  };
  const onSubmit = (data) => {
    setLoading(true);
    login(data);
  };

  return (
    <>
      <div className="p-4 h-screen ">
        <div className="grid grid-cols-3 h-full  ">
          <div className="bg-[#0F2E60] col-span-1 rounded-3xl ">
            <LoginScreenSection />
          </div>
          <div className=" col-span-2 flex-1 flex flex-col justify-center h-full">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <div>
                <h2 className="mt-6 text-3xl text-center font-bold text-blue-900">
                  Login to your account
                </h2>
              </div>
              <div className="">
                <div className="mt-6">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <div className="mt-1 did-floating-label-content">
                        <TextField
                          label="Email"
                          className="w-full"
                          variant="outlined"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: "Invalid email address",
                            },
                          })}
                          error={errors.email}
                          helperText={errors.email && errors.email.message}
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="">
                        <div className="mt-1 did-floating-label-content relative">
                          <TextField
                            label="Password"
                            type="password"
                            className="w-full"
                            variant="outlined"
                            {...register("password", {
                              required: "Password is required",
                              minLength: {
                                // value: 6,
                                message:
                                  "Password must be at least 6 characters long",
                              },
                            })}
                            error={errors.password}
                            helperText={
                              errors.password && errors.password.message
                            }
                          />
                        </div>
                      </div>
                    </div>
                    {error && error.length > 0 && (
                      <span className="text-sm text-red-500">{error}</span>
                    )}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="
                        h-4
                        w-4
                        rounded
                        accent-blue-dark
                      "
                        />
                        <label
                          htmlfor="remember-me"
                          className="ml-2 block text-sm text-[#0F2E60] font-medium"
                        >
                          Remember me
                        </label>
                      </div>
                      <div className="text-sm">
                        <Link
                          to="/changePassword"
                          className="
                        cursor-pointer
                        font-medium
                        text-[#0080FF]
                        hover:text-[#0080FF]
                        text-sm
                      "
                        >
                          Forgot password?
                        </Link>
                      </div>
                    </div>
                    <Button
                      sx={{
                        backgroundColor: "#0F2E60",
                        color: "white",
                        "&.Mui-disabled": {
                          backgroundColor: "#0F2E60",
                          color: "white",
                        },
                      }}
                      style={{
                        borderRadius: 35,
                      }}
                      type="submit"
                      variant="contained"
                      // color="primary"
                      disabled={loading}
                      className={`w-full `}
                    >
                      {loading ? "Loading..." : "Log in"}
                    </Button>
                    <div className="text-center">
                      <p className="text-[#0F2E60] text-sm">
                        <span className="font-normal text-base  font-poppins tracking-normal text-blue-900">
                          Don’t have an account?
                        </span>
                        <Link
                          to="/"
                          className="text-[#0A8989] font-medium cursor-pointer pl-1"
                        >
                          Sign up
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <TawkMessengerReact
        onLoad={() => {
          if (tawkMessengerRef.current == null) return;

          tawkMessengerRef.current.setAttributes(
            {
              ipaddress: ip,
            },
            function (error) {
              console.log(error);
            }
          );
        }}
        propertyId="65b3c4568d261e1b5f58462f"
        widgetId="1hl33dsbd"
        ref={tawkMessengerRef}
      /> */}
    </>
  );
};

export default SignIn;
