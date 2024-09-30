import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import clsx from "clsx";
import ForgetPasswordComponent from "../../components/forgetPasswordSection/forgetPasswordSection";

const ForgetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
    setLoading(false);
  };

  return (
    <>
      <div className="p-4 h-screen ">
        <div className="grid grid-cols-3 h-full  ">
          <div className="bg-[#0F2E60] col-span-1 rounded-3xl ">
            <ForgetPasswordComponent />
          </div>
          <div className=" col-span-2 flex-1 flex flex-col justify-center h-full">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <div>
                <h2 className="mt-6 text-3xl text-center font-bold text-blue-900">
                  Forgot Password
                </h2>
              </div>

              <div className="">
                <div className="mt-6">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                    <div>
                      <div className="mt-1 did-floating-label-content">
                        <TextField
                          label="Enter Email Address"
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
                    <div className="px-10 text-center text-[#0F2E60]">
                      Please enter the email address, which is linked to your
                      account
                    </div>

                    <Button />
                    <Button
                      style={{
                        borderRadius: 35,
                      }}
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={clsx("w-full", {
                        "opacity-50 cursor-not-allowed": loading,
                      })}
                      disabled={loading}
                    >
                      {loading ? "Loading..." : "Reset Password"}
                    </Button>
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

export default ForgetPassword;
