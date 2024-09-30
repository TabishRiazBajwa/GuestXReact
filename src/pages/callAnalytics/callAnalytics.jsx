import React, { useEffect, useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import "../../App.css";
import Header from "../../components/Header/Header";
import CallAnalyticsSection from "../../components/callAnayticsSection/callAnalyticsSection";
import TogleDropDownSecrion from "../../components/togleDropDownSecrion/togleDropDownSecrion";
import TogleDropDownSecrionTwo from "../../components/togleDropDownSecrionTwo/togleDropDownSecrion";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import SectionTwon from "../../components/callAnalytics/SectionTwon";
import IsBookedCharts from "../../components/callAnalytics/IsBookedCharts";
import SectionThree from "../../components/callAnalytics/SectionThree";
import IsBookedChartTwo from "../../components/callAnalytics/IsBookedChartTwo";
import IsRevenueChart from "../../components/callAnalytics/IsRevenueChart";
import SectionFour from "../../components/callAnalytics/SectionFour";
import IsConversationalInsight from "../../components/callAnalytics/IsConversationalInsight";
import SectionFive from "../../components/callAnalytics/SectionFive";
import ShowBodyOne from "../../components/callAnalytics/ShowBodyOne";
import ShowBody from "../../components/callAnalytics/ShowBody";
import OverlappingBarChartReversed from "../../components/overlappingBarChartReversed/overlappingBarChartReversed";
import OverlappingBarChart from "../../components/overlappingBarChart/overlappingBarChart";
import Layout from "../../Layouts/Layouts";

function CallAnalyticsPage(props) {
  const {
    getUnMatchedCustomersRequest,
    getRevenueAndCustomerRequest,
    getNOBookedAppointmentChartsDataRequest,
    getShowNoShowRequest,
    getBookedAppointmentChartsDataRequest,
    getUnscoredCallsRequest,
    getCoachingInsightRequest,
    repairpal_revenue_data,
    count_per_call_loading,
    count_per_call_error,
    count_per_call_data,
    getRepairpalRevenueRequest,
    getCountPerCallsDataCall,

    NOBooked_Appts_loading,
    NOBooked_Appts_error,
    NOBooked_Appts_data,

    Booked_Appts_loading,
    Booked_Appts_error,
    Booked_Appts_data,

    Coaching_Insight_loading,
    Coaching_Insight_error,
    Coaching_Insight_data,

    Revenue_and_Customer_loading,
    Revenue_and_Customer_error,
    Revenue_and_Customer_data,

    Show_NoShow_loading,
    Show_NoShow_error,
    Show_NoShow_data,

    unscored_calls_loading,
    unscored_calls_error,
    unscored_calls_data,
  } = props;

  const [
    moreDetailBookedAppointmentChart,
    setMoreDetailBookedAppointmentChart,
  ] = useState(false);
  const [showBody, setShowBody] = useState(false);
  const [isConversationInsightCharts, setIsConversationInsightCharts] =
    useState(false);
  const [bookedAppointmentChartOne, setBookedAppointmentChartOne] =
    useState(false);
  const [isBookedCharts, setIsBookedCharts] = useState(false);
  const [isRevenue, setIsRevenue] = useState(false);
  const [isBookedChartsTwo, setIsBookedChartsTwo] = useState(false);
  const [isRevenueTwo, setIsRevenueTwo] = useState(false);
  const [showBodyOne, setShowBodyOne] = useState(false);

  const [startMonth, setStartMonth] = useState(null);
  const [endMonth, setEndMonth] = useState(null);
  const [startYear, setStartYear] = useState(null);
  const [endYear, SetEndYear] = useState(null);
  const [selectedStartDate, setSeletedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [newStartDate, setNewStartDate] = useState(null);
  const [newEndDate, setNewEndDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isOptionOpen, setIsOptionOpen] = useState(false);

  const [selectedLocation, setSelectedLocation] = useState(null);

  const [revenueAndCustomerSectionData, setRevenueAndCustomerSectionData] =
    useState();

  useEffect(() => {
    setRevenueAndCustomerSectionData({
      ...revenueAndCustomerSectionData,
      newCustomers: Revenue_and_Customer_data.Customers_new,
      TtotalCustomers: Revenue_and_Customer_data.Customers_total,
    });
  }, [Revenue_and_Customer_data]);

  const [bookedAppointmentChartTwo, setBookedAppointmentChartTwo] =
    useState(false);

  return (
    // <>
    //   <div
    //     className="flex w-screen h-screen p-2 space-x-6 bg-gray-300 "
    //     style={{ overflow: "hidden" }}
    //   >
    //     <SideBar />
    //     <div className="flex flex-col items-center w-full h-full overflow-x-auto">
    //       <Header
    //         label="Dashboard"
    //         setIsOpen={setIsOpen}
    //         selectedLocation={selectedLocation}
    //         setSelectedLocation={setSelectedLocation}
    //         repairpal_revenue_data={repairpal_revenue_data}
    //         isOpen={isOpen}
    //         selectedStartDate={selectedStartDate}
    //         selectedEndDate={selectedEndDate}
    //         setSeletedStartDate={setSeletedStartDate}
    //         setSelectedEndDate={setSelectedEndDate}
    //         setNewStartDate={setNewStartDate}
    //         setNewEndDate={setNewEndDate}
    //         setStartMonth={setStartMonth}
    //         setEndMonth={setEndMonth}
    //         setStartYear={setStartYear}
    //         SetEndYear={SetEndYear}
    //         startMonth={startMonth}
    //         startYear={startYear}
    //         endMonth={endMonth}
    //         endYear={endYear}
    //         isOptionOpen={isOptionOpen}
    //         setIsOptionOpen={setIsOptionOpen}
    //       />
    //       <div className="items-center justify-center flex pt-48">
    //         <div className="bg-white rounded-lg shadow-md p-8  ">
    //           <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">
    //             Coming Soon
    //           </h1>
    //           <p className="text-lg text-center text-gray-600 mb-8">
    //             We're working hard to bring you something amazing. Stay tuned!
    //           </p>
    //           <div className="flex justify-center">
    //             <div className="border-t-2 border-gray-300"></div>
    //           </div>
    //           <p className="text-center text-gray-500 mt-3">
    //             Follow us for updates:
    //           </p>
    //           <div className="flex justify-center mt-3">
    //             <a
    //               href="#"
    //               className="text-blue-500 hover:text-blue-600 mx-2"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //             >
    //               Facebook
    //             </a>
    //             <a
    //               href="#"
    //               className="text-blue-500 hover:text-blue-600 mx-2"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //             >
    //               Twitter
    //             </a>
    //             <a
    //               href="#"
    //               className="text-blue-500 hover:text-blue-600 mx-2"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //             >
    //               Instagram
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>

    <Layout>
      <div className="items-center justify-center flex pt-48">
        <div className="bg-white rounded-lg shadow-md p-8  ">
          <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">
            Coming Soon
          </h1>
          <p className="text-lg text-center text-gray-600 mb-8">
            We're working hard to bring you something amazing. Stay tuned!
          </p>
          <div className="flex justify-center">
            <div className="border-t-2 border-gray-300"></div>
          </div>
          <p className="text-center text-gray-500 mt-3">
            Follow us for updates:
          </p>
          <div className="flex justify-center mt-3">
            <a
              href="#"
              className="text-blue-500 hover:text-blue-600 mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-600 mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-600 mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CallAnalyticsPage;
