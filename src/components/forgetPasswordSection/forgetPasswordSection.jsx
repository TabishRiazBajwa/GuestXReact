import React from "react";
// import Stars from "../Stars/Stars";
// import logo from "../../../assets/V360_logo.svg";
import Image from "../../assets/forgetPasswordEmail.png";
import loginOne from "../../assets/loginOne.png";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import AskLogin from "../../assets/askLogin.png";

const ForgetPassword = ({ heading, userImg, name, desc }) => {
  return (
    <div className="bg-gradient sm:flex hidden flex-wrap h-full justify-center mx-auto">
      <div className="flex w-full items-center justify-center">
        <img className="max-w-[150px] w-full" src={loginOne} alt="" />
      </div>
      <div className="mx-auto w-full max-w-sm">
        <img
          className="h-full w-full object-contain  px-10"
          src={Image}
          alt=""
        />
      </div>
      <div className="text-white font-sans font-light text-lg lg:text-3xl flex flex-col w-full">
        <p className="text-center w-[56%] mb-3 m-auto text-lg px-10">
          The Consultancy You Are Looking For
        </p>
        <div className=" mr-[10px] ml-[18px] mb-5">
          <img src={AskLogin} className="w-5 h-5 mr-5 " alt="" />
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
