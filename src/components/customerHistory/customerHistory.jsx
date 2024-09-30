import React, { useState } from "react";

import close_arrow from "../../images/chevron_right_black_24dp.svg";
import location_icon from "../../images/location_on_black_24dp.svg";
import call_icon from "../../images/call_black_24dp.svg";
import work_icon from "../../images/work_black_24dp.svg";
import dollar_icon from "../../images/attach_money_black_24dp.svg";
import copy_icon from "../../images/content_copy_black_24dp.svg";

export default function CustomerHistory(props) {
  const { closeCustomerHistory } = props;

  return (
    <>
      <div className={`flyout show  w-2/5 2xl:w-1/4 h-5/6`}>
        <div className="flex flex-col bg-white shadow-[4.0px_4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
          <div className="h-32 bg-[#1F66AC] text-white flex flex-col  justify-center px-16">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col gap-3 justify-center">
                <p className="font-normal text-white text-lg leading-7”">
                  Name
                </p>
                <p className=" font-semibold text-white text-left text-base leading-7">
                  James Pacino
                </p>
              </div>
              <div className="flex flex-col justify-center">
                <img
                  src={close_arrow}
                  alt=""
                  className="hover:cursor-pointer"
                  onClick={() => closeCustomerHistory()}
                />
              </div>
            </div>
          </div>
          <div className="px-16 py-10 flex flex-col gap-7 text-black text-left">
            <span>
              <div className="flex flex-row justify-between font-normal text-base leading-7">
                <div>Customer ID#</div>
                <div>
                  <img
                    src={copy_icon}
                    alt=""
                    className="hover:cursor-pointer"
                    onClick={() =>
                      navigator.clipboard.writeText("2468-1352A-7056B-63AZX")
                    }
                  />
                </div>
              </div>
              <div className="font-bold text-base leading-7 ">
                2468-1352A-7056B-63AZX
              </div>
            </span>
            <span>
              <div className="flex flex-row gap-4">
                <div>
                  <img src={location_icon} alt="" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-normal text-base leading-7">Address</div>
                  <div className="font-bold text-base leading-7">
                    Daytona, Florida, USA
                  </div>
                </div>
              </div>
            </span>

            <span>
              <div className="flex flex-row gap-4">
                <div>
                  <img src={call_icon} alt="" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-normal text-base leading-7 text-left">
                    Phone 1
                  </div>
                  <div className="font-bold text-base leading-7 text-left">
                    (123) 456 7890
                  </div>
                </div>
              </div>
            </span>
            <span>
              <div className="flex flex-row gap-4">
                <div>
                  <img src={call_icon} alt="" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-normal text-base leading-7 text-left">
                    Phone 2
                  </div>
                  <div className="font-bold text-base leading-7 text-left">
                    -
                  </div>
                </div>
              </div>
            </span>
            <span>
              <div className="flex flex-row gap-4">
                <div>
                  <img src={work_icon} alt="" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-normal text-base leading-7 text-left">
                    Work Order Number
                  </div>
                  <div className="font-bold text-base leading-7 text-left">
                    123456789
                  </div>
                </div>
              </div>
            </span>
            <span>
              <div className="flex flex-row gap-4">
                <div>
                  <img src={dollar_icon} alt="" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-normal text-base leading-7 text-left">
                    Life Time Value
                  </div>
                  <div className="font-bold text-base leading-7 text-left">
                    $ 1000
                  </div>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
