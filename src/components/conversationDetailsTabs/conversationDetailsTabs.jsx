import React, { useState } from "react";

// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";

import { TextField, Button, MenuItem } from "@mui/material";

import ConversationDetailsSummaryTab from "../conversationDetailsSummaryTab/conversationDetailsSummaryTab";
import ConversationDetailsCallScoreTab from "../conversationDetailsCallScoreTab/conversationDetailsCallScoreTab";
import CommentsTab from "../commentsTab/commentsTab";

export default function ConversationDetailsTabs(props) {
  const { summaryTab, callScoreTab, ConversationID } = props;

  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [TabSelected, setTabSelected] = useState(0);
  const [showScoreDetail, setShowScoreDetail] = useState(false);

  const switchTab = (tab_id) => {
    setTabSelected(tab_id);
  };

  // const [age, setAge] = React.useState("");

  return (
    <>
      {/* <div className=""> */}
      <div className="h-20 bg-gray-300 darkBackgroundMain ">
        <div className="flex justify-between ">
          <div className="flex">
            <div
              className={`${
                TabSelected === 0
                  ? "bg-white  border-b-2 border-[#0E2E60] dark_ui_border_color darkBackgroundMain"
                  : ""
              }  py-7 px-16 hover:bg-[#0E2E60] cursor-pointer hover:text-white`}
              onClick={(e) => switchTab(0)}
            >
              Summary
            </div>
            {/* --------------------------- USE FOR V2 ----------------- */}
            {/* <div
              className={`${
                TabSelected === 1 ? "bg-white  border-b-2 border-[#0E2E60]" : ""
              } py-7 px-16 hover:bg-red-500 `}
              onClick={(e) => switchTab(1)}
            >
              Scores
            </div> */}
            <div
              className={`${
                TabSelected === 2
                  ? "bg-white cursor-pointer border-b-2 border-[#0E2E60]"
                  : ""
              } py-7 px-16 hover:bg-[#0E2E60] hover:text-white cursor-pointer`}
              onClick={(e) => switchTab(2)}
            >
              Comments
            </div>
          </div>
          {/* <div className="gap-5 flex flex-row">
            <div className="my-auto w-60">
              <TextField
                className="h-auto w-full"
                id="change-service-advisor"
                select
                label="Change Service Advisor"
                size="small"
                // size="small"
                // style={useStyles}
              >
                <MenuItem
                  className="h-fit w-max"
                  key={"Ahmed"}
                  value={"Ahmed"}
                  size="small"
                  // style={{ width: "100%" }}
                >
                  Ahmed Ahmed
                </MenuItem>
              </TextField>
            </div>
            <div className="my-auto w-60 ">
              <TextField
                id="change-outcome"
                select
                label="Change Outcome"
                // SelectProps={{
                //   native: true,
                // }}
                SelectProps={{
                  MenuProps: {
                    style: { maxHeight: 400 }
                  }
                }}
                // defaultValue={"Arrived"}
                fullWidth
                size="small"
                onChange={(e) => console.log(e.target)}
                // style={{ Height: "200px" }}
              >
                <MenuItem
                  // className="h-fit w-max"
                  key={"No Show"}
                  value={"No Show"}
                >
                  No Show
                </MenuItem>
                <MenuItem
                  // className="h-fit w-max"
                  key={"Arrived"}
                  value={"Arrived"}
                >
                  Arrived
                </MenuItem>
              </TextField>
            </div>

            <div className=" my-auto mr-10">
              <Button
                variant="outlined"
                sx={{
                  color: "#0F2E60",
                  borderColor: "#0F2E60",

                  "&:hover": {
                    color: "#ffffff",
                    borderColor: "#0F2E60",
                    background: "#0F2E60"
                  }
                }}
              >
                Rescore Call
              </Button>
            </div>
          </div> */}
        </div>
      </div>
      <div className="">
        <div className="flex flex-row ">
          <div
            className={`${
              showScoreDetail ? "w-1/2" : "w-1/2"
            } max-h-screen  h-auto overflow-y-auto flex  flex-col  break-words`}
          >
            {TabSelected === 0 ? (
              <ConversationDetailsSummaryTab dataProps={summaryTab} />
            ) : (
              <CommentsTab ID={ConversationID} />
            )}
          </div>
          <div
            className={` ${
              showScoreDetail ? "w-1/2" : "w-1/2"
            }  flex flex-col    `}
          >
            <ConversationDetailsCallScoreTab
              showScoreDetail={showScoreDetail}
              setShowScoreDetail={setShowScoreDetail}
              dataProps={callScoreTab}
            />
          </div>
        </div>
      </div>
    </>
  );
}
