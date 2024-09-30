import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { TextField, Button } from "@mui/material";
import clsx from "clsx";
// import { login } from "../../redux/actions/authActions";
import { useDispatch } from "react-redux";
import SignUpScreenSection from "../../components/SignUpScreenSection/SignUpScreenSection";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    // event.preventDefault();
    setLoading(true);
    // dispatch(login(data));
    setLoading(false);
  };

  return (
    <>
      <div className="p-4 h-screen ">
        <div className="grid grid-cols-3 h-full  ">
          <div className="bg-[#0F2E60] col-span-1 rounded-3xl ">
            <SignUpScreenSection />
          </div>
          <div className="col-span-2 flex-1 flex flex-col justify-center ">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <div>
                <h2 className="mt-6 text-3xl text-center font-bold text-blue-900">
                  Create Account
                </h2>
              </div>
              <div className="">
                <div className="mt-6">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <button className="w-full px-2 py-2 border border-[#B2B2B2]  rounded-md">
                          Sign up with Google
                        </button>
                      </div>
                      <div>
                        <button className="w-full px-2 py-2 border border-[#B2B2B2]  rounded-md">
                          Sign up with Apple
                        </button>
                      </div>
                    </div>
                    <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                      <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
                        Or
                      </p>
                    </div>
                    <div>
                      <div className=" did-floating-label-content">
                        <TextField
                          label="First Name"
                          className="w-full"
                          variant="outlined"
                          //   InputProps={{ startAdornment: <Email /> }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className=" did-floating-label-content">
                        <TextField
                          label="Last Name"
                          className="w-full"
                          variant="outlined"
                          //   InputProps={{ startAdornment: <Email /> }}
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className=" did-floating-label-content">
                        <TextField
                          label="Email"
                          className="w-full"
                          variant="outlined"
                          //   InputProps={{ startAdornment: <Email /> }}
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className="">
                        <div className=" did-floating-label-content relative">
                          <TextField
                            label="Password"
                            type="password"
                            className="w-full"
                            variant="outlined"
                            //   InputProps={{ startAdornment: <Lock /> }}
                            {...register("password", {
                              required: "Password is required",
                              minLength: {
                                value: 6,
                                message:
                                  "Password must be at least 6 characters long"
                              }
                            })}
                            error={errors.password}
                            helperText={
                              errors.password && errors.password.message
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="">
                        <div className=" did-floating-label-content relative">
                          <TextField
                            label="Re-Enter Password"
                            type="password"
                            className="w-full"
                            variant="outlined"
                            //   InputProps={{ startAdornment: <Lock /> }}
                            {...register("password", {
                              required: "Password is required",
                              minLength: {
                                value: 6,
                                message:
                                  "Password must be at least 6 characters long"
                              }
                            })}
                            error={errors.password}
                            helperText={
                              errors.password && errors.password.message
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className=" did-floating-label-content">
                        <TextField
                          label="Email"
                          className="w-full"
                          variant="outlined"
                          //   InputProps={{ startAdornment: <Email /> }}
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className=" did-floating-label-content">
                        <TextField
                          label="Contact Number"
                          className="w-full"
                          variant="outlined"
                          //   InputProps={{ startAdornment: <Email /> }}
                        />
                      </div>
                    </div>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={clsx("w-full", {
                        "opacity-50 cursor-not-allowed": loading
                      })}
                      disabled={loading}
                    >
                      {loading ? "Loading..." : "Next"}
                    </Button>
                    <div className="text-center">
                      <p className="text-[#0F2E60] text-sm">
                        <span className="font-normal text-base  font-poppins tracking-normal text-blue-900">
                          Already registered?
                        </span>
                        <Link
                          to="/"
                          className="text-[#0A8989] font-medium cursor-pointer pl-1"
                        >
                          Log In
                        </Link>
                      </p>
                    </div>
                    <hr />
                    <div className="mb-16"></div>
                    <p className="text-xs text-center font-base ">
                      By clicking on next, you acknowledge that you have read
                      and accepted the Terms of Service and the Privacy Policy.
                    </p>
                    <div className="mb-16"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
