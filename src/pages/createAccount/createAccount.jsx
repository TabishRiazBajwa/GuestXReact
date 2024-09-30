import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import clsx from "clsx";

import CreateAccountOTPComponent from "../../components/createAccountOTPSection/createAccountOTPSection";

const CreateAccount = () => {
  const { handleSubmit } = useForm();

  const [loading] = useState(false);

  const [otp, setOtp] = useState(["", "", "", "", "", ""]); // Array to hold OTP digits
  const inputRefs = useRef([]); // Array to hold refs for each input field

  const handleInputChange = (index, e) => {
    const { value } = e.target;
    const newOtp = [...otp]; // Copy the current OTP array
    newOtp[index] = value.slice(-1); // Update the digit at the specified index
    setOtp(newOtp); // Update the OTP state

    // Move focus to next input field, if available
    if (index < inputRefs.current.length - 1 && value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      // If backspace is pressed and current input is empty, move focus to previous input
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <>
      <div className="p-4 h-screen ">
        <div className="grid grid-cols-3 h-full  ">
          <div className="bg-[#0F2E60] col-span-1 rounded-3xl ">
            <CreateAccountOTPComponent />
          </div>
          <div className=" col-span-2 flex-1 flex flex-col justify-center h-full">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <div>
                <h2 className="mt-6 text-3xl text-center font-bold text-blue-900">
                  Create Account
                </h2>
              </div>
              <p className="text-center text-[#0F2E60] pt-10 ">Verification</p>

              <div className="">
                <div className="mt-6">
                  <form onSubmit={handleSubmit} className="space-y-2">
                    <div className="otp-container space-x-4 flex justify-center">
                      {otp.map((digit, index) => (
                        <input
                          key={index}
                          className="border border-stone-900 w-10 h-10 text-center"
                          type="tel"
                          value={digit}
                          ref={(ref) => inputRefs.current.push(ref)}
                          onChange={(e) => handleInputChange(index, e)}
                          onKeyDown={(e) => handleKeyDown(index, e)}
                        />
                      ))}
                    </div>
                    <p className="text-center text-[#0F2E60]  px-16">
                      Please enter the code, which has been sent to your email
                    </p>

                    <Button />
                    <Button
                      style={{
                        borderRadius: 35
                      }}
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
                    <div className="underline text-center text-[#0A8989]">
                      Resend Code
                    </div>
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

export default CreateAccount;
