import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

import Layout from "../../Layouts/Layouts";

import CoachingComments from "../../components/coachingComments/CoachingComments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileText, faMessage } from "@fortawesome/free-solid-svg-icons";

import { getConvirzaGroupNames } from "../../helpers/DataProcessor";

import ConversationDetailsTable from "../../components/conversationDetailTable/conversationDetailTable";
export default function CallDetails(props) {
  const {
    getConversationDetailsRequest,
    conversationDetailsData,
    conversationDetailsError,
    conversationDetailsLoading,

    getRepairpalRevenueRequest,
    repairpal_revenue_data,
  } = props;

  const [date, setDate] = useState(() => {
    const storedDate = sessionStorage.getItem("storedDate");

    if (storedDate) {
      return JSON.parse(storedDate);
    } else {
      return {
        startMonth: dayjs().subtract(3, "month").month() + 1,
        endMonth: dayjs().month() + 1,
        startYear: dayjs().subtract(1, "year").year(), // Set startYear one year old
        endYear: dayjs().year(),
        startDate: dayjs().date(),
        endDate: dayjs().date(),
      };
    }
  });

  const [selectedLocation, setSelectedLocation] = useState("");
  const [isOpen, setIsOpen] = useState();
  const [isOptionOpen, setIsOptionOpen] = useState(false);

  const [showCustomerHistory, setShowCustomerHistory] = useState(false);
  const [openCommentBox, setOpenCommentBox] = useState(false);
  const [filterVals, setFilterVals] = useState({});
  const [expandedRowId, setExpandedRowId] = useState(null);
  const [conversationId, setConversationId] = useState(null);

  const [showInitialFilterUi, setShowInitialFilterUi] = useState(false);

  // This function will return the unique values of the property name

  const user = JSON.parse(localStorage.getItem("user")).email;
  useEffect(() => {
    getRepairpalRevenueRequest({
      email: user
    });
  }, []);

  useEffect(() => {
    sessionStorage.setItem("storedDate", JSON.stringify(date));
  }, [date]);

  useEffect(() => {
    if (!Array.isArray(selectedLocation) || selectedLocation.length === 0) {
      setShowInitialFilterUi(true);
      return;
    }

    if (showInitialFilterUi) {
      setShowInitialFilterUi(false);
    }

    const convirzaGroupNames = getConvirzaGroupNames(selectedLocation);

    getConversationDetailsRequest({
      end_date: `${date.endYear}-${date.endMonth}-${date.endDate}`,
      start_date: `${date.startYear}-${date.startMonth}-${date.startDate}`,
      group: convirzaGroupNames,
    });
  }, [getConversationDetailsRequest, selectedLocation, date]);

  const clearAllFilters = () => {
    setFilterVals((prevState) => {
      const newState = {};

      for (let key in prevState) {
        newState[key] = prevState[key].map((item) => {
          if (key === "lead_type") {
            if (item.label === "Yes") {
              return { ...item, checked: true };
            } else {
              return { ...item, checked: false };
            }
          }
          return { ...item, checked: true };
        });
      }

      return newState;
    });
  };

  let rows = [];

  if (conversationDetailsData) {
    rows = conversationDetailsData.map((item, index) => ({
      U: "",
      key: index + 1,
      ...item,
    }));
  }

  return (
    <Layout
      showInitialFilterUi={showInitialFilterUi}
      initalFilterDialogText="Please select a location"
      headerProps={{
        filterEnableList: { location: true },
        heading: `Conversation Details`,
        repairpal_revenue_data: repairpal_revenue_data,
        setDate: setDate,
        isOpen: isOpen,
        setIsOpen: setIsOpen,
        setSelectedLocation: setSelectedLocation,
        selectedLocation: selectedLocation,
        isOptionOpen: isOptionOpen,
        setIsOptionOpen: setIsOptionOpen,
        showInitialFilterUi: showInitialFilterUi,
      }}
    >
      <div>
        <ConversationDetailsTable
          data={rows}
          loading={conversationDetailsLoading}
        />
      </div>
      {conversationId !== null && (
        <div className="absolute z-20 flex justify-center items-center bottom-10 right-0 h-16 w-20 rounded-l-md bg-black">
          <FontAwesomeIcon
            size="2x"
            icon={faMessage}
            className="hover:cursor-pointer hover:opacity-60 text-white"
            onClick={() => {
              setOpenCommentBox((state) => !state);
            }}
          />
        </div>
      )}
      {openCommentBox && conversationId !== null && (
        <CoachingComments
          onClose={() => setOpenCommentBox(false)}
          conversationId={conversationId}
        />
      )}
    </Layout>
  );
}
