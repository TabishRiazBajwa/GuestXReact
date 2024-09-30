import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

import Layout from "../../Layouts/Layouts.jsx";

import DonutChart from "../../components/donutChart/donutChart.jsx";

import SubPageComponent from "../../components/subPage/subPage.jsx";
import CallInsightButton from "../../components/callInsightButton/callInsightButton.jsx";

import MainLoader from "../../components/mainLoader/mainLoader.jsx";
import NoDataFound from "../../components/noDataFound/noDataFound.jsx";

import { getConvirzaGroupNames } from "../../helpers/DataProcessor.js";

function transformData(data) {
  if (!data || data.length === 0) return [];

  const result = {};

  data.forEach((item) => {
    const key = Object.keys(item)[0];
    result[key] = item[key];
  });

  return result;
}

const CallInsights = (props) => {
  const {
    getConversationInsightsRequest,
    conversationInsightData,
    conversationInsightError,
    conversationInsightsLoading,

    getRepairpalRevenueRequest,
    repairpal_revenue_data,

    getFilterServiceAdvisorListRequest,
    filterServiceAdvisorData,
    filterServiceAdvisorError,
    filterServiceAdvisorLoading
  } = props;

  const [service_advisor_list, setServiceAdvisorList] = useState("");

  const [selectedLocation, setSelectedLocation] = useState("");
  const [label, setLabel] = useState("Conversation Insight");

  const [isOpen, setIsOpen] = useState();
  const [isOptionOpen, setIsOptionOpen] = useState(false);

  //new states

  const [subpage, setSubPage] = useState("");

  const [selectedServiceAdvisor, setSelectedServiceAdvisor] = useState("");

  const [date, setDate] = useState(() => {
    const storedDate = sessionStorage.getItem("storedDate");
    if (storedDate) {
      return JSON.parse(storedDate);
    } else {
      const currentDate = dayjs();
      const startMonth = currentDate.subtract(3, "month").month() + 1;
      const endMonth = currentDate.month() + 1;
      const startYear =
        startMonth > endMonth ? currentDate.year() - 1 : currentDate.year();
      const endYear = currentDate.year();
      const startDate = currentDate.date();
      const endDate = currentDate.date();

      return {
        startMonth,
        endMonth,
        startYear,
        endYear,
        startDate,
        endDate
      };
    }
  });

  useEffect(() => {
    sessionStorage.setItem("storedDate", JSON.stringify(date));
  }, [date]);

  const user = JSON.parse(localStorage.getItem("user")).email;
  useEffect(() => {
    getRepairpalRevenueRequest({
      email: user
    });
    getFilterServiceAdvisorListRequest();
  }, []);



  useEffect(() => {
    setServiceAdvisorList(transformData(filterServiceAdvisorData));
  }, [filterServiceAdvisorData]);

  useEffect(() => {
    if (
      !Array.isArray(selectedServiceAdvisor) ||
      selectedServiceAdvisor === "" ||
      !selectedServiceAdvisor ||
      selectedServiceAdvisor.length === 0
    ) {
      // show alert asking user to selct a service agent

      return;
    }

    if (!Array.isArray(selectedLocation) || selectedLocation.length === 0) {
      return;
    }

    const convirzaGroupNames = getConvirzaGroupNames(selectedLocation);

    getConversationInsightsRequest({
      end_date: `${date.endYear}-${date.endMonth}-${date.endDate}`,
      start_date: `${date.startYear}-${date.startMonth}-${date.startDate}`,
      group: convirzaGroupNames,
      agent: selectedServiceAdvisor
    });
  }, [
    getConversationInsightsRequest,
    date,
    selectedLocation,
    selectedServiceAdvisor
  ]);

  let fetchedData = {
    Company_Name_count: [],
    Agent_Provided_Name_count: [],
    Agent_Ended_Call_Politely_count: [],
    Acquired_Callers_Name_count: [],
    Acquired_Callers_First_and_Last_Name_count: [],
    Acquired_Phone_number_count: [],
    Welcoming_Tone_count: [],
    Establish_Connection_count: [],
    Address_Concern_count: [],
    Took_Ownership_count: [],
    Agent_Calling_Back_count: [],
    Tow_In_count: [],
    Vehicle_Information_count: [],
    Appointment_Confirmed_count: [],
    Confirmed_Directions_count: [],
    Agent_Repeated_Callers_Name_count: [],

    conversation_insight_count: [],
    greeting_count: [],
    discovery_count: [],
    appointment_count: [],
    closing_count: []
  };

  const calculatePieScore = () => {
    // Initialize an object to store the pie score
    const pieScore = {
      Average: conversationInsightData?.total?.total_average,
      Closing: conversationInsightData?.total?.total_close,
      Greeting: conversationInsightData?.total?.total_greeting,
      Discovery: conversationInsightData?.total?.total_discovery,
      Appointment: conversationInsightData?.total?.total_appt
    };

    // Check if the conversationInsightData array is not empty
    if (
      conversationInsightData.data &&
      conversationInsightData.data.length > 0
    ) {
      for (let element of conversationInsightData.data) {
        let date = new Date();

        date.setMonth(element.month_number - 1);
        const month_name = date.toLocaleString("en-US", { month: "short" });

        fetchedData.Company_Name_count.push({
          name: month_name,
          value: element.Company_Name_count,
          goal: 20
        });

        fetchedData.Agent_Provided_Name_count.push({
          name: month_name,
          value: element.Agent_Provided_Name_count,
          goal: 20
        });

        fetchedData.Agent_Ended_Call_Politely_count.push({
          name: month_name,
          value: element.Agent_Ended_Call_Politely_count,
          goal: 20
        });

        fetchedData.Acquired_Callers_Name_count.push({
          name: month_name,
          value: element.Acquired_Callers_Name_count,
          goal: 20
        });

        fetchedData.Acquired_Callers_First_and_Last_Name_count.push({
          name: month_name,
          value: element.Acquired_Callers_First_and_Last_Name_count,
          goal: 20
        });

        fetchedData.Acquired_Phone_number_count.push({
          name: month_name,
          value: element.Acquired_Phone_number_count,
          goal: 20
        });

        fetchedData.Welcoming_Tone_count.push({
          name: month_name,
          value: element.Welcoming_Tone_count,
          goal: 20
        });

        fetchedData.Establish_Connection_count.push({
          name: month_name,
          value: element.Establish_Connection_count,
          goal: 20
        });

        fetchedData.Address_Concern_count.push({
          name: month_name,
          value: element.Address_Concern_count,
          goal: 20
        });

        fetchedData.Took_Ownership_count.push({
          name: month_name,
          value: element.Took_Ownership_count,
          goal: 20
        });

        fetchedData.Agent_Calling_Back_count.push({
          name: month_name,
          value: element.Agent_Calling_Back_count,
          goal: 20
        });

        fetchedData.Tow_In_count.push({
          name: month_name,
          value: element.Tow_In_count,
          goal: 20
        });

        fetchedData.Vehicle_Information_count.push({
          name: month_name,
          value: element.Vehicle_Information_count,
          goal: 20
        });

        fetchedData.Appointment_Confirmed_count.push({
          name: month_name,
          value: element.Appointment_Confirmed_count,
          goal: 20
        });

        fetchedData.Confirmed_Directions_count.push({
          name: month_name,
          value: element.Confirmed_Directions_count,
          goal: 20
        });

        fetchedData.Agent_Repeated_Callers_Name_count.push({
          name: month_name,
          value: element.Agent_Repeated_Callers_Name_count,
          goal: 20
        });

        fetchedData.conversation_insight_count.push({
          name: month_name,
          value: Math.round(element.Average * 100) / 100,
          goal: 20
        });

        fetchedData.greeting_count.push({
          name: month_name,
          value: Math.round(element.Greeting * 100) / 100,
          goal: 20
        });

        fetchedData.discovery_count.push({
          name: month_name,
          value: Math.round(element.Discovery * 100) / 100,
          goal: 20
        });

        fetchedData.appointment_count.push({
          name: month_name,
          value: Math.round(element.Appt * 100) / 100,
          goal: 20
        });

        fetchedData.closing_count.push({
          name: month_name,
          value: Math.round(element.Close * 100) / 100,
          goal: 20
        });
      }
    }

    // Return the pie score object
    return pieScore;
  };

  const setLocation = (location) => {
    setSelectedLocation(location);
  };

  const setDateState = (date) => {
    setDate(date);
  };

  const pieScore = calculatePieScore();

  const pageData = [
    {
      title: "average",
      barArray: [
        {
          heading: "Conversation Insight",
          graphs: fetchedData.conversation_insight_count
        }
      ]
    },
    {
      title: "discovery",
      barArray: [
        {
          heading: "Discovery",
          graphs: fetchedData.discovery_count
        },
        {
          heading: "Agent established connection",
          graphs: fetchedData.Establish_Connection_count
        },
        {
          heading: "Agent addressed concerns",
          graphs: fetchedData.Address_Concern_count
        },
        {
          heading: "Agent took ownership",
          graphs: fetchedData.Took_Ownership_count
        },
        {
          heading: "Agent provided price without a request",
          graphs: [
            { name: "JAN", value: 19, goalValue: 80 },
            { name: "FEB", value: 37, goalValue: 80 },
            { name: "MAR", value: 19, goalValue: 80 }
          ]
        },
        {
          heading: "Agent calling back with price",
          graphs: fetchedData.Agent_Calling_Back_count
        },
        {
          heading: "Agent offered or requested tow / appointment",
          graphs: fetchedData.Tow_In_count
        }
      ]
    },
    {
      title: "greeting",
      barArray: [
        {
          heading: "Greetings",
          graphs: fetchedData.greeting_count
        },
        {
          heading: "Agent provided company name",
          graphs: fetchedData.Company_Name_count
        },
        {
          heading: "Agent provided name",
          graphs: fetchedData.Agent_Provided_Name_count
        },
        {
          heading: "Agent acquired caller's name",
          graphs: fetchedData.Acquired_Callers_Name_count
        },
        {
          heading: "Agent acquired caller's first  /  last name",
          graphs: fetchedData.Acquired_Callers_First_and_Last_Name_count
        },
        {
          heading: "Agent acquired caller's phone number",
          graphs: fetchedData.Acquired_Phone_number_count
        },
        {
          heading: "Agent politeness",
          graphs: fetchedData.Welcoming_Tone_count
        }
      ]
    },
    {
      title: "appointment",
      barArray: [
        {
          heading: "Appointment",
          graphs: fetchedData.appointment_count
        },
        {
          heading: "Agent gathered vehicle information",
          graphs: fetchedData.Vehicle_Information_count
        },
        {
          heading: "Agent confirmed customer's phone number",
          graphs: fetchedData.Appointment_Confirmed_count
        },
        {
          heading: "Agent confirmed directions",
          graphs: fetchedData.Confirmed_Directions_count
        },
        {
          heading: "Agent Confirmed Appointment",
          graphs: fetchedData.Appointment_Confirmed_count
        }
      ]
    },
    {
      title: "closing",
      barArray: [
        {
          heading: "Closing",
          graphs: fetchedData.closing_count
        },
        {
          heading: "Agent Repeated Caller's Name",
          graphs: fetchedData.Agent_Repeated_Callers_Name_count
        },
        {
          heading: "Agent Ended Call Politely",
          graphs: fetchedData.Agent_Ended_Call_Politely_count
        }
      ]
    }
  ];

  // Conditionally set the dataset based on the state

  const pgData =
    subpage === "average"
      ? pageData[0]
      : subpage === "discovery"
      ? pageData[1]
      : subpage === "greeting"
      ? pageData[2]
      : subpage === "appointment"
      ? pageData[3]
      : subpage === "closing"
      ? pageData[4]
      : null;

  return (
    <Layout
      headerProps={{
        filterEnableList: { location: true, service_advisor: true },
        service_advisor_filter: {
          service_advisor_list: service_advisor_list,
          selectedServiceAdvisor: selectedServiceAdvisor,
          setSelectedServiceAdvisor: setSelectedServiceAdvisor,
          loading: filterServiceAdvisorData === false
        },
        heading: `Conversation Insights`,
        repairpal_revenue_data: repairpal_revenue_data,
        setDate: setDateState,
        isOpen: isOpen,
        setIsOpen: setIsOpen,
        setSelectedLocation: setLocation,
        selectedLocation: selectedLocation,
        isOptionOpen: isOptionOpen,
        setIsOptionOpen: setIsOptionOpen
      }}
    >
      <div className="bg-[#FFFFFF] w-full  rounded-[12px] flex flex-col items-center justify-center">
        {(conversationInsightsLoading || filterServiceAdvisorLoading) && (
          <div className="">
            <MainLoader />
          </div>
        )}
        {!filterServiceAdvisorLoading &&
          !conversationInsightsLoading &&
          (!conversationInsightData ||
            (conversationInsightData &&
              conversationInsightData.length === 0)) && <NoDataFound />}

        {true &&
          !conversationInsightsLoading &&
          conversationInsightData.data &&
          conversationInsightData.data.length > 0 && (
            <div className="flex items-center w-full gap-6 justify-center mt-2 mb-[9.50rem] ">
              <div className="rounded-full w-[30%]">
                <DonutChart
                  type={"Average"}
                  value={pieScore.Average}
                  subpage={subpage}
                  onClick={setSubPage}
                />
              </div>
              <div className="rounded-[50%] w-[15%]">
                <DonutChart
                  type={"Greeting"}
                  value={pieScore.Greeting}
                  subpage={subpage}
                  onClick={setSubPage}
                />
              </div>

              <div className="rounded-[50%] w-[15%]">
                <DonutChart
                  type={"Discovery"}
                  value={pieScore.Discovery}
                  subpage={subpage}
                  onClick={setSubPage}
                />
              </div>
              <div className="rounded-[50%] w-[15%]">
                <DonutChart
                  type={"Appointment"}
                  value={pieScore.Appointment}
                  subpage={subpage}
                  onClick={setSubPage}
                />
              </div>
              <div className="rounded-[50%] w-[15%]">
                <DonutChart
                  type={"Closing"}
                  value={pieScore.Closing}
                  subpage={subpage}
                  onClick={setSubPage}
                />
              </div>
            </div>
          )}
        <div className="flex items-center justify-center gap-4 bg-[#D3D3D3] rounded-full mt-10 p-[0.125vw] py-[0.625vh] px-[0.425vw] mb-[3vh]">
          <CallInsightButton
            subpage={subpage}
            text="Average"
            onClick={setSubPage}
          />
          <CallInsightButton
            subpage={subpage}
            text="Greeting"
            onClick={setSubPage}
          />
          <CallInsightButton
            subpage={subpage}
            text="Discovery"
            onClick={setSubPage}
          />
          <CallInsightButton
            subpage={subpage}
            text="Appointment"
            onClick={setSubPage}
          />
          <CallInsightButton
            subpage={subpage}
            text="Closing"
            onClick={setSubPage}
          />
        </div>
      </div>
      <div>
        {pgData ? (
          <>
            {!conversationInsightsLoading &&
              conversationInsightData &&
              conversationInsightData.data.length > 0 && (
                <SubPageComponent key={pgData.title} pageData={pgData} />
              )}
            {!conversationInsightsLoading &&
              (!conversationInsightData ||
                (conversationInsightData &&
                  conversationInsightData.length === 0)) && (
                <div className="bg-[#888888] p-2 mt-5  rounded-[12px] ">
                  <NoDataFound />
                </div>
              )}
            {conversationInsightsLoading && (
              <div className="bg-[#888888] p-2 mt-5  rounded-[12px] ">
                <MainLoader />
              </div>
            )}
          </>
        ) : (
          <></>
        )}
      </div>
    </Layout>
  );
};

export default CallInsights;
