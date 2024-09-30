import React, { useState, useEffect, useMemo } from "react";
import dayjs from "dayjs";
import SankyChart from "../../components/sankyCharts/sankyCharts";
import DashboardHeader from "../../components/dashboardHeader/dashboardHeader";
import DashboardSubHeader from "../../components/dashboardSubHeader/dashboardSubHeader";
import DashboardPageButtons from "../../components/dashboardPageButtons/dashboardPageButtons";
import DashboardSubPage from "../../components/dashboardSubPage/dashboardSubPage";

import Layout from "../../Layouts/Layouts";
import useFetchAdwordsData from "../../hooks/useFetchAdwordsData";
import useFetchYelpData from "../../hooks/useFetchYelpData";
import useFetchRepairPalData from "../../hooks/useFetchRepairPalData";
import MainLoader from "../../components/mainLoader/mainLoader";

import ForceDirectedChart from "../../components/forceDirectedChart/Charts";

import { getAiData } from "../../helpers/DashboardDataProcessor";

import { getConvirzaGroupNames } from "../../helpers/DataProcessor";

function DashboardPage(props) {
  const {
    // Location Api
    getRepairpalRevenueRequest,
    repairpal_revenue_loading,
    repairpal_revenue_data,

    // Adwords
    getAdwordsCTRAroCallsRequest,
    get_adwords_ctr_aro_calls_loading,
    get_adwords_ctr_aro_calls_error,
    get_adwords_ctr_aro_calls_data,
    get_adwords_ctr_aro_calls_total,

    getAdwordsCTRInvestRateRequest,
    get_adwords_ctr_invest_loading,
    get_adwords_ctr_invest_error,
    get_adwords_ctr_invest_data,

    getAdwordsCTRAroCallsRoiRequest,
    get_adwords_ctr_aro_calls_roi_loading,
    get_adwords_ctr_aro_calls_roi_error,
    get_adwords_ctr_aro_calls_roi_data,
    get_adwords_ctr_aro_calls_roi_total,

    getDashboardAiDataRequest,
    get_dashboard_ai_data_loading,
    get_dashboard_ai_data_data,
    get_dashboard_ai_data_error,

    getDashboardSankychartRequest,
    get_dashboard_sankychart_data_loading,
    get_dashboard_sankychart_data,
    get_dashboard_sankychart_data_error,

    // YELP
    getYelpCTRPerClicksRequest,
    yelp_per_clicks_calls_loading,
    yelp_per_clicks_calls_error,
    yelp_per_clicks_calls_data,

    getYelpCustomerCallApptsRequest,
    get_yelp_customer_call_appts_loading,
    get_yelp_customer_call_appts_error,
    get_yelp_customer_call_appts_data,
    get_yelp_customer_call_appts_total,

    getYelpCostPerLeadRequest,
    get_yelp_cost_per_lead_loading,
    get_yelp_cost_per_lead_error,
    get_yelp_cost_per_lead_data,
    get_yelp_cost_per_lead_total,

    getYelpConversationRateRequest,
    get_yelp_conversation_rate_loading,
    get_yelp_conversation_rate_error,
    get_yelp_conversation_rate_data,
    get_yelp_conversation_rate_total,

    // RepairPal
    getReferallRevenueRequest,
    referal_revenue_loading,
    referal_revenue_error,
    referal_revenue_data,
    referal_revenue_total,

    getRepairpalInvestmentRequest,
    repairpal_investment_loading,
    repairpal_investment_error,
    repairpal_investment_data,
    repairpal_investment_total
  } = props;

  console.log("get_dashboard_ai_data_data", get_dashboard_ai_data_data);

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

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isOpen, setIsOpen] = useState();
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const [subpage, setSubPage] = useState("");
  const [chartsDataForAdwords, setChartsDataForAdwords] = useState({});
  const [subNavData, setSubNavData] = useState({
    investment: 0,
    total_customers: 0,
    conversion_rate: 0,
    revenu: 0,
    aro: 0,
    roi: 0
  });

  console.log(chartsDataForAdwords, "chartsDataForAdwords");
  const [label, setLabel] = useState("Yelp");

  const ai_data = getAiData(get_dashboard_ai_data_data);
  console.log("ai_dataai_dataai_data", ai_data);

  let pageData = [
    {
      title: "Investments",
      hasNewLeads: false,
      barArray: [
        // Investment Chart
        {
          heading: "Investment",
          hasGoal: false,
          goalKey: "",
          type: "Price",
          hasToolTip: false,
          categories: [
            { name: "Investment", index: 0 },
            { name: "Budget", index: 1 }
          ],
          graphs: chartsDataForAdwords.Investment,

          Investment:
            chartsDataForAdwords?.Investment?.map((item) => item.Investment) ||
            [],
          monthList:
            chartsDataForAdwords?.Investment?.map((item) => item.name) || [],
          series: [
            {
              name: "Investment",
              data: chartsDataForAdwords?.Investment?.map(
                (item) => item.Investment
              )
            },
            {
              name: "Budget",
              data: []
            }
          ]
        },
        // Revenue Chart
        {
          heading: "Revenue",
          hasGoal: false,
          goalKey: "",
          type: "Price",
          hasToolTip: false,
          series: [
            {
              name: "New",
              data: chartsDataForAdwords?.Investment?.map(
                (item) => item.Investment
              )
            },
            {
              name: "Total",
              data: chartsDataForAdwords?.Investment?.map(
                (item) => item.Investment
              )
            },
            {
              name: "Returning",
              data: chartsDataForAdwords?.Investment?.map(
                (item) => item.Investment
              )
            }
          ],
          categories:
            label === "Repair Pal"
              ? [{ name: "Total", index: 0 }]
              : [
                  { name: "Total", index: 0 },
                  { name: "New", index: 1 },
                  { name: "Returning", index: 2 }
                ],
          graphs: chartsDataForAdwords.allRevenue
        },
        // ARO Chart
        {
          heading: "ARO",
          hasGoal: false,
          goalKey: "",
          type: "Price",
          hasToolTip: false,
          categories:
            label === "Repair Pal"
              ? [{ name: "Total", index: 0 }]
              : [
                  { name: "Total", index: 0 },
                  { name: "New", index: 1 },
                  { name: "Returning", index: 2 }
                ],
          graphs: chartsDataForAdwords.allARO
        },
        // ROI Chart
        {
          heading: "ROI",
          hasGoal: false,
          goalKey: "",
          type: "Rate",
          hasToolTip: false,
          categories: [
            { name: "Total", index: 0 },
            { name: "New", index: 1 }
          ],
          graphs: chartsDataForAdwords.allROI
        }
      ]
    },
    {
      title: "Calls",
      hasNewLeads: false,

      barArray: [
        {
          heading: "Total Calls",
          hasGoal: false,
          goalKey: "",
          type: "Number",
          hasToolTip: true,
          categories: [{ name: "Calls", index: 0 }],
          graphs: chartsDataForAdwords.Calls,
          monthList:
            chartsDataForAdwords?.Investment?.map((item) => item?.name) || [],
          series: [
            {
              name: "Calls",
              data: (chartsDataForAdwords?.Calls || []).map(
                (item) => item?.Calls || 0
              )
            }
          ]
        },
        {
          heading: "Impression & Clicks",
          hasGoal: false,
          goalKey: "",
          type: "Number",
          hasToolTip: false,

          categories: [
            { name: "Impressions", index: 0 },
            { name: "Clicks", index: 1 }
          ],
          monthList:
            chartsDataForAdwords?.Investment?.map((item) => item?.name) || [],
          series: [
            {
              name: "Impressions",
              data:
                chartsDataForAdwords?.impressionsAndClicks?.map(
                  (item) => item?.Impressions
                ) || []
            },
            {
              name: "Clicks",
              data:
                chartsDataForAdwords?.impressionsAndClicks?.map(
                  (item) => item?.Clicks
                ) || []
            }
          ],
          graphs: chartsDataForAdwords.impressionsAndClicks
        },
        {
          heading: "Cost Per Lead & Cost Per Click",
          hasGoal: false,
          goalKey: "",
          type: "Price",
          hasToolTip: false,
          categories: [
            { name: "Cost Per Click", index: 0 },
            { name: "Cost Per Lead", index: 1 }
          ],
          monthList:
            chartsDataForAdwords?.Investment?.map((item) => item?.name) || [],
          series: [
            {
              name: "Cost Per Click",
              data: []
            },
            {
              name: "Cost Per Lead",
              data: []
            }
          ],
          graphs: chartsDataForAdwords.costPerClickAndCostPerLead
        },
        {
          heading: "Click Through Rate & Page Visit to Leads",
          hasGoal: false,
          goalKey: "",
          type: "Rate",
          hasToolTip: false,
          categories: [
            { name: "Click Through Rate", index: 0 },
            { name: "Page Visits To Leads", index: 1 }
          ],
          monthList:
            chartsDataForAdwords?.Investment?.map((item) => item?.name) || [],
          series: [
            {
              name: "Click Through Rate",
              data:
                chartsDataForAdwords.clickThroughRateAndPageVisitToLead?.map(
                  (item) => item["Click Through Rate"]
                ) || []
            },
            {
              name: "Page Visits To Leads",
              data: [] //No Data Exist
            }
          ],
          graphs: chartsDataForAdwords.clickThroughRateAndPageVisitToLead
        }
      ]
    },
    {
      title: "Leads",
      hasNewLeads: true,
      barArray: [
        {
          heading: "Leads",
          hasGoal: false,
          goalKey: "",
          type: "Number",
          hasToolTip: true,
          categories: [
            { name: "Calls", index: 0 },
            { name: "Leads", index: 1 }
          ],
          graphs: ai_data.leads.leads,
          series: [
            {
              name: "Calls",
              data: chartsDataForAdwords?.impressionsAndClicks?.map(
                (item) => item.Impressions
              )
            },
            {
              name: "Leads",
              data: chartsDataForAdwords?.impressionsAndClicks?.map(
                (item) => item.Clicks
              )
            }
          ],
          monthList:
            chartsDataForAdwords?.Investment?.map((item) => item.name) || []
        },
        {
          heading: "Appointments",
          hasGoal: false,
          goalKey: "",
          type: "Number",
          hasToolTip: true,
          categories: [
            { name: "Booked", index: 0 },
            { name: "No-Booked", index: 1 }
          ],
          series: [
            {
              name: "Booked",
              data: ai_data?.leads?.appointments?.map((item) => item.Booked)
            },
            {
              name: "No-Booked",
              data: ai_data?.leads?.appointments?.map((item) => item.No_Booked)
            }
          ],
          monthList:
            chartsDataForAdwords?.Investment?.map((item) => item.name) || [],
          graphs: ai_data.leads.appointments
        },
        {
          heading: "Appointment Rate",
          hasGoal: false,
          goalKey: "",
          type: "Rate",
          hasToolTip: true,
          categories: [
            { name: "Booked", index: 0 },
            { name: "No-Booked", index: 1 }
          ],
          series: [
            {
              name: "Booked",
              data: ai_data?.leads?.appointmentrate?.map((item) => item.Booked)
            },
            {
              name: "No-Booked",
              data: ai_data?.leads?.appointmentrate?.map(
                (item) => item.No_Booked
              )
            }
          ],
          monthList:
            chartsDataForAdwords?.Investment?.map((item) => item.name) || [],
          graphs: ai_data.leads.appointmentrate
        }
      ]
    },
    {
      title: "Appointment",
      hasNewLeads: true,
      barArray: [
        {
          heading: "Appointments",
          hasGoal: true,
          goalKey: "Appointments",
          type: "Number",
          hasToolTip: true,
          categories: [
            { name: "Calls", index: 0 },
            { name: "Leads", index: 1 },
            { name: "Appointments", index: 2 }
          ],
          graphs: ai_data.booked.calls,
          series: [
            {
              name: "Calls",
              data: ai_data?.booked?.calls?.map((item) => item.Calls)
            },
            {
              name: "Leads",
              data: ai_data?.booked?.calls?.map((item) => item.Leads)
            },
            {
              name: "Appointments",
              data: ai_data?.booked?.calls?.map((item) => item.Appointments)
            }
          ],
          monthList:
            chartsDataForAdwords?.Investment?.map((item) => item.name) || []
        },
        {
          heading: "Appointments Arrival",
          hasGoal: true,
          goalKey: "Arrivals",
          type: "Number",
          hasToolTip: true,
          categories: [
            { name: "Appointment", index: 0 },
            { name: "Arrivals", index: 1 }
          ],
          graphs: ai_data.booked.booked_appointments,
          series: [
            {
              name: "Appointment",
              data: ai_data?.booked?.booked_appointments?.map(
                (item) => item.Appointment
              )
            },
            {
              name: "Arrivals",
              data: ai_data?.booked?.booked_appointments?.map(
                (item) => item.Arrivals
              )
            }
          ],
          monthList:
            chartsDataForAdwords?.Investment?.map((item) => item.name) || []
        },
        {
          heading: "Appointment No Shows",
          hasGoal: true,
          goalKey: "No Shows",
          type: "Number",
          hasToolTip: true,
          categories: [
            { name: "Appointment", index: 0 },
            { name: "No Shows", index: 1 }
          ],
          graphs: ai_data.booked.no_shows,
          series: [
            {
              name: "Appointment",
              data: ai_data.booked.no_shows?.map((item) => item.Appointment)
            },
            {
              name: "No Shows",
              data: ai_data.booked.no_shows?.map((item) => item.No_Shows)
            }
          ],
          monthList:
            chartsDataForAdwords?.Investment?.map((item) => item.name) || []
        }
      ]
    },
    {
      title: "No Appointment",
      hasNewLeads: true,
      barArray: [
        {
          heading: "No Appointments",
          hasGoal: true,
          goalKey: "No Appointments",
          type: "Rate",
          hasToolTip: true,
          categories: [
            { name: "Calls", index: 0 },
            { name: "Leads", index: 1 },
            { name: "No Appointments", index: 2 }
          ],
          graphs: ai_data.no_booked_appointment.no_booked,
          series: [
            {
              name: "Calls",
              data:
                ai_data.no_booked_appointment.no_booked?.map(
                  (item) => item.Calls
                ) || []
            },
            {
              name: "Leads",
              data: [] // Dat does not exist
            }
          ],
          monthList:
            chartsDataForAdwords?.Investment?.map((item) => item.name) || []
        },
        {
          heading: "Unable to Agree To Appointment or Drop-Off Time",
          hasGoal: true,
          goalKey: "Unable to Agree To Appointment or Drop-Off Time",

          type: "Number",
          hasToolTip: true,
          categories: [
            {
              name: "Unable to Agree To Appointment or Drop-Off Time",
              index: 0
            }
          ],
          graphs: ai_data.no_booked_appointment.unable_to_agree_to_time,
          series: [
            {
              name: "Unable to Agree To Appointment or Drop-Off Time",
              data: ai_data.no_booked_appointment.unable_to_agree_to_time?.map(
                (item) =>
                  item["Unable to Agree To Appointment or Drop-Off Time"]
              )
            }
          ],
          monthList:
            chartsDataForAdwords?.Investment?.map((item) => item.name) || []
        },
        {
          heading: "No Appointment Offered",
          hasGoal: true,
          goalKey: "No Appointment Offered",
          type: "Number",
          hasToolTip: true,
          categories: [{ name: "No Appointment Offered", index: 0 }],
          graphs: ai_data.no_booked_appointment.no_appointment_offered,
          series: [
            {
              name: "No Appointment Offered",
              data: ai_data.no_booked_appointment.no_appointment_offered?.map(
                (item) => item["No Appointment Offered"]
              )
            }
          ],
          monthList:
            chartsDataForAdwords?.Investment?.map((item) => item.name) || []
        },
        {
          heading: "Agent Calling Back with Price",
          hasGoal: true,
          goalKey: "Agent Calling Back with Price",
          type: "Number",
          hasToolTip: true,
          categories: [{ name: "Agent Calling Back with Price", index: 0 }],
          graphs: ai_data.no_booked_appointment.agent_call_back_with_price,
          series: [
            {
              name: "Agent Calling Back with Price",
              data: ai_data.no_booked_appointment.agent_call_back_with_price?.map(
                (item) => item["Agent Calling Back with Price"]
              )
            }
          ],
          monthList:
            chartsDataForAdwords?.Investment?.map((item) => item.name) || []
        }
      ]
    },
    {
      title: "Customers",
      hasNewLeads: false,
      filterArray: null,
      barArray: [
        {
          heading: "Total Customers",
          hasGoal: false,
          goalKey: "",
          type: "Number",
          hasToolTip: false,
          categories: [
            { name: "Total", index: 0 },
            { name: "New", index: 1 },
            { name: "Returning", index: 2 }
          ],
          graphs: chartsDataForAdwords.allCustomers,
          series: [
            {
              name: "Total",
              data: chartsDataForAdwords.allCustomers?.map(
                (item) => item?.Total
              )
            },
            {
              name: "New",
              data: chartsDataForAdwords.allCustomers?.map((item) => item?.New)
            },
            {
              name: "Returning",
              data: chartsDataForAdwords.allCustomers?.map(
                (item) => item?.Returning
              )
            }
          ],
          monthList:
            chartsDataForAdwords?.Investment?.map((item) => item.name) || []
        }
      ]
    },
    {
      title: "Unqualified",

      hasNewLeads: false,

      barArray: [
        {
          heading: "Unqualified Calls",
          hasGoal: false,
          goalKey: "",
          type: "Number",
          hasToolTip: true,
          categories: [
            { name: "Calls", index: 0 },
            { name: "Unqualified", index: 1 }
          ],
          graphs: ai_data?.unqualified?.unqualified_calls,
          series: [
            {
              name: "Calls",
              data:
                ai_data.unqualified?.unqualified_calls?.map(
                  (item) => item?.Calls
                ) || []
            },
            {
              name: "Unqualified",
              data:
                ai_data.unqualified?.unqualified_calls?.map(
                  (item) => item?.Unqualified
                ) || []
            }
          ],
          monthList:
            chartsDataForAdwords?.Investment?.map((item) => item.name) || []
        },
        {
          heading: "No Answer",
          hasGoal: false,
          goalKey: "",
          type: "Number",
          hasToolTip: true,
          categories: [{ name: "No Answer", index: 0 }],
          graphs: ai_data.unqualified.no_answer,
          series: [
            {
              name: "Calls",
              data: ai_data.unqualified.no_answer?.map(
                (item) => item["No Answer"]
              )
            }
          ],
          monthList:
            chartsDataForAdwords?.Investment?.map((item) => item.name) || []
        },
        {
          heading: "Voice mail",
          hasGoal: false,
          goalKey: "",
          type: "Number",
          hasToolTip: true,
          categories: [{ name: "Voice mail", index: 0 }],
          graphs: ai_data.unqualified.voice_mail,
          series: [
            {
              name: "Voice mail",
              data: ai_data.unqualified.voice_mail?.map(
                (item) => item["Voice mail"]
              )
            }
          ],
          monthList:
            chartsDataForAdwords?.Investment?.map((item) => item.name) || []
        },
        {
          heading: "IVR/Robo Calls",
          hasGoal: false,
          goalKey: "",
          type: "Number",
          hasToolTip: true,
          categories: [{ name: "IVR/Robo Calls", index: 0 }],
          graphs: ai_data.unqualified.robo_calls,
          series: [
            {
              name: "Voice mail",
              data: ai_data.unqualified.voice_mail?.map(
                (item) => item["Voice mail"]
              )
            }
          ],
          monthList:
            chartsDataForAdwords?.Investment?.map((item) => item.name) || []
        },
        {
          heading: "Vendor",
          hasGoal: false,
          goalKey: "",
          type: "Number",
          hasToolTip: true,
          categories: [{ name: "Vendor", index: 0 }],
          graphs: ai_data.unqualified.vendor,
          series: [
            {
              name: "Voice mail",
              data: ai_data.unqualified.voice_mail?.map(
                (item) => item["Voice mail"]
              )
            }
          ],
          monthList:
            chartsDataForAdwords?.Investment?.map((item) => item.name) || []
        },
        {
          heading: "Solicitation",
          hasGoal: false,
          goalKey: "",
          type: "Number",
          hasToolTip: true,
          categories: [{ name: "Solicitation", index: 0 }],
          graphs: ai_data.unqualified.solicitation,
          series: [
            {
              name: "Voice mail",
              data: ai_data.unqualified.voice_mail?.map(
                (item) => item["Voice mail"]
              )
            }
          ],
          monthList:
            chartsDataForAdwords?.Investment?.map((item) => item.name) || []
        },
        {
          heading: "Wrong Number",
          hasGoal: false,
          goalKey: "",
          type: "Number",
          hasToolTip: true,
          categories: [{ name: "Wrong Number", index: 0 }],
          graphs: ai_data.unqualified.wrong_number,
          series: [
            {
              name: "Voice mail",
              data: ai_data.unqualified.voice_mail?.map(
                (item) => item["Voice mail"]
              )
            }
          ],
          monthList:
            chartsDataForAdwords?.Investment?.map((item) => item.name) || []
        },

        {
          heading: "Current Customer Inquiry",
          hasGoal: false,
          goalKey: "",
          type: "Number",
          hasToolTip: true,
          categories: [{ name: "Current Customer Inquiry", index: 0 }],
          graphs: ai_data.unqualified.current_customer_inquiry,
          series: [
            {
              name: "Voice mail",
              data: ai_data.unqualified.voice_mail?.map(
                (item) => item["Voice mail"]
              )
            }
          ],
          monthList:
            chartsDataForAdwords?.Investment?.map((item) => item.name) || []
        },
        {
          heading: "Confirmation",
          hasGoal: false,
          goalKey: "",
          type: "Number",
          hasToolTip: true,
          categories: [{ name: "Confirmation", index: 0 }],
          graphs: ai_data.unqualified.confirmation,
          series: [
            {
              name: "Confirmation",
              data: ai_data.unqualified.confirmation?.map(
                (item) => item["Confirmation"]
              )
            }
          ],
          monthList:
            chartsDataForAdwords?.Investment?.map((item) => item.name) || []
        },
        {
          heading: "Reschedule",
          hasGoal: false,
          goalKey: "",
          type: "Number",
          hasToolTip: true,
          categories: [{ name: "Reschedule", index: 0 }],
          graphs: ai_data.unqualified.reschedule,
          series: [
            {
              name: "Reschedule",
              data: ai_data.unqualified.reschedule?.map(
                (item) => item["Reschedule"]
              )
            }
          ],
          monthList:
            chartsDataForAdwords?.Investment?.map((item) => item.name) || []
        },

        {
          heading: "Cancellation",
          hasGoal: false,
          goalKey: "",
          type: "Number",
          hasToolTip: true,
          categories: [{ name: "Cancellation", index: 0 }],
          graphs: ai_data.unqualified.cancellation,
          series: [
            {
              name: "Cancellation",
              data: ai_data.unqualified.cancellation?.map(
                (item) => item["Cancellation"]
              )
            }
          ],
          monthList:
            chartsDataForAdwords?.Investment?.map((item) => item.name) || []
        },
        {
          heading: "Hours or Directions",
          hasGoal: false,
          goalKey: "",
          type: "Number",
          hasToolTip: true,
          categories: [{ name: "Hours or Directions", index: 0 }],
          graphs: ai_data.unqualified.hours_or_direction,
          series: [
            {
              name: "Hours or Directions",
              data: ai_data.unqualified.hours_or_direction?.map(
                (item) => item["Hours or Directions"]
              )
            }
          ],
          monthList:
            chartsDataForAdwords?.Investment?.map((item) => item.name) || []
        },
        {
          heading: "Unidentified",
          hasGoal: false,
          goalKey: "",
          type: "Number",
          hasToolTip: true,
          categories: [{ name: "Unidentified", index: 0 }],
          graphs: ai_data.unqualified.unidentified,
          series: [
            {
              name: "Unidentified",
              data: ai_data.unqualified.unidentified?.map(
                (item) => item["Unidentified"]
              )
            }
          ],
          monthList:
            chartsDataForAdwords?.Investment?.map((item) => item.name) || []
        },
        {
          heading: "Internal",
          hasGoal: false,
          goalKey: "",
          type: "Number",
          hasToolTip: true,
          categories: [{ name: "Internal", index: 0 }],
          graphs: ai_data.unqualified.internal,
          series: [
            {
              name: "Internal",
              data: ai_data.unqualified.internal?.map(
                (item) => item["Internal"]
              )
            }
          ],
          monthList:
            chartsDataForAdwords?.Investment?.map((item) => item.name) || []
        },
        {
          heading: "Service Not Provided",
          hasGoal: false,
          goalKey: "",
          type: "Number",
          hasToolTip: true,
          categories: [{ name: "Service Not Provided", index: 0 }],
          graphs: ai_data.unqualified.service_not_provided,
          series: [
            {
              name: "Voice mail",
              data: ai_data.unqualified.voice_mail?.map(
                (item) => item["Voice mail"]
              )
            }
          ],
          monthList:
            chartsDataForAdwords?.Investment?.map((item) => item.name) || []
        }
      ]
    }
  ];

  if (label === "Repair Pal") {
    const repData = {
      title: "Referrals and Tows in",
      hasNewLeads: false,
      barArray: [
        // Investment Chart
        {
          heading: "Referrals",
          hasGoal: false,
          goalKey: "",
          type: "Price",
          hasToolTip: false,
          categories: [{ name: "Refferals", index: 0 }],
          graphs: chartsDataForAdwords?.refferals
        },

        {
          heading: "Tows in",
          hasGoal: false,
          goalKey: "",
          type: "Price",
          hasToolTip: false,
          categories: [{ name: "Tows", index: 0 }],
          graphs: chartsDataForAdwords?.tows
        }
      ]
    };
    pageData = [...pageData, repData];
  }

  console.log("pageData", pageData);

  const [showInitialFilterUi, setShowInitialFilterUi] = useState(false);
  const user = JSON.parse(localStorage.getItem("user")).email;
  useEffect(() => {
    getRepairpalRevenueRequest({
      email: user
    });
  }, []);

  useEffect(() => {
    if (!Array.isArray(selectedLocation) || selectedLocation.length === 0) {
      setShowInitialFilterUi(true);
      return;
    }

    if (showInitialFilterUi) {
      setShowInitialFilterUi(false);
    }

    const convirzaGroupNames = getConvirzaGroupNames(selectedLocation);

    if (selectedLocation) {
      getDashboardAiDataRequest({
        group: convirzaGroupNames,
        start_date: `${date.startYear}-${date.startMonth}-${date.startDate}`,
        end_date: `${date.endYear}-${date.endMonth}-${date.endDate}`
      });
      getDashboardSankychartRequest({
        group: convirzaGroupNames,
        start_date: `${date.startYear}-${date.startMonth}-${date.startDate}`,
        end_date: `${date.endYear}-${date.endMonth}-${date.endDate}`
      });
    }
  }, [selectedLocation, date]);

  useEffect(() => {
    if (!Array.isArray(selectedLocation) || selectedLocation.length === 0) {
      return;
    }

    console.log(selectedLocation, "selectedLocation222");

    if (selectedLocation) {
      if (label === "Google Ads Campaign") {
        const KukuiLocationName = selectedLocation.map(
          (location) => location.KukuiLocationName
        );

        getAdwordsCTRAroCallsRequest({
          location: KukuiLocationName,
          start_month: date.startMonth,
          start_year: date.startYear,
          end_month: date.endMonth,
          end_year: date.endYear
        });
        getAdwordsCTRInvestRateRequest({
          location: KukuiLocationName,
          start_month: date.startMonth,
          start_year: date.startYear,
          end_month: date.endMonth,
          end_year: date.endYear
        });
        getAdwordsCTRAroCallsRoiRequest({
          location: KukuiLocationName,
          start_month: date.startMonth,
          start_year: date.startYear,
          end_month: date.endMonth,
          end_year: date.endYear
        });
      } else if (label === "Yelp") {
        const YelpLocationName = selectedLocation.map(
          (location) => location.YelpLocationName
        );

        getYelpCTRPerClicksRequest({
          location: YelpLocationName,
          start_month: date.startMonth,
          start_year: date.startYear,
          end_month: date.endMonth,
          end_year: date.endYear
        });
        getYelpCustomerCallApptsRequest({
          location: YelpLocationName,
          start_month: date.startMonth,
          start_year: date.startYear,
          end_month: date.endMonth,
          end_year: date.endYear
        });
        getYelpCustomerCallApptsRequest({
          location: YelpLocationName,
          start_month: date.startMonth,
          start_year: date.startYear,
          end_month: date.endMonth,
          end_year: date.endYear
        });
        getYelpCostPerLeadRequest({
          location: YelpLocationName,
          start_month: date.startMonth,
          start_year: date.startYear,
          end_month: date.endMonth,
          end_year: date.endYear
        });
        getYelpConversationRateRequest({
          location: YelpLocationName,
          start_month: date.startMonth,
          start_year: date.startYear,
          end_month: date.endMonth,
          end_year: date.endYear
        });
      } else if (label === "Repair Pal") {
        const RepairPalLocationName = selectedLocation.map(
          (location) => location.RepairPalLocationName
        );

        getReferallRevenueRequest({
          location: RepairPalLocationName,
          start_month: date.startMonth,
          start_year: date.startYear,
          end_month: date.endMonth,
          end_year: date.endYear
        });
        getRepairpalInvestmentRequest({
          location: RepairPalLocationName,
          start_month: date.startMonth,
          start_year: date.startYear,
          end_month: date.endMonth,
          end_year: date.endYear
        });
      }
    }
  }, [selectedLocation, date, label]);

  const loading =
    repairpal_revenue_loading ||
    get_adwords_ctr_aro_calls_loading ||
    get_adwords_ctr_invest_loading ||
    get_adwords_ctr_aro_calls_roi_loading ||
    get_yelp_cost_per_lead_loading ||
    get_yelp_customer_call_appts_loading ||
    get_yelp_conversation_rate_loading ||
    yelp_per_clicks_calls_loading ||
    referal_revenue_loading ||
    get_dashboard_ai_data_loading ||
    get_dashboard_sankychart_data_loading;

  const { getChartsDataForDashboard } = useFetchAdwordsData(
    get_adwords_ctr_aro_calls_data,
    get_adwords_ctr_aro_calls_roi_data,
    get_adwords_ctr_invest_data
  );

  const { getYelpChartsDataForDashboard } = useFetchYelpData(
    yelp_per_clicks_calls_data,
    get_yelp_customer_call_appts_data,
    get_yelp_cost_per_lead_data,
    get_yelp_conversation_rate_data
  );

  const { getRepairpalChartsDataForDashboard } = useFetchRepairPalData(
    referal_revenue_data,
    repairpal_investment_data
  );

  const chartDataForDashboard = useMemo(
    () => getChartsDataForDashboard(),
    [
      get_adwords_ctr_invest_data,
      get_adwords_ctr_aro_calls_roi_data.data,
      get_adwords_ctr_aro_calls_data.data
    ]
  );

  const yelpChartDataForDashboard = useMemo(
    () => getYelpChartsDataForDashboard(),
    [
      yelp_per_clicks_calls_data,
      get_yelp_customer_call_appts_data,
      get_yelp_cost_per_lead_data,
      get_yelp_conversation_rate_data
    ]
  );

  const repairPalChartDataForDashboard = useMemo(
    () => getRepairpalChartsDataForDashboard(),
    [referal_revenue_data, repairpal_investment_data]
  );

  useEffect(() => {
    if (label === "Google Ads Campaign") {
      setChartsDataForAdwords({ ...chartDataForDashboard });

      setSubNavData({
        ...get_adwords_ctr_aro_calls_roi_total,
        ...get_adwords_ctr_aro_calls_total
      });
    } else if (label === "Yelp") {
      setChartsDataForAdwords({ ...yelpChartDataForDashboard });

      setSubNavData({
        ...get_yelp_customer_call_appts_total,
        ...get_yelp_cost_per_lead_total,
        ...get_yelp_conversation_rate_total
      });
    } else if (label === "Repair Pal") {
      setChartsDataForAdwords({
        ...repairPalChartDataForDashboard
      });

      setSubNavData({
        ...repairpal_investment_total,
        ...referal_revenue_total
      });
    }
    return () => {
      setChartsDataForAdwords({});
    };
  }, [
    chartDataForDashboard,
    yelpChartDataForDashboard,
    repairPalChartDataForDashboard
  ]);

  const SubPageData =
    subpage === "investments"
      ? pageData[0]
      : subpage === "calls"
      ? pageData[1]
      : subpage === "leads"
      ? pageData[2]
      : subpage === "appointment"
      ? pageData[3]
      : subpage === "no appointment"
      ? pageData[4]
      : subpage === "customers"
      ? pageData[5]
      : subpage === "unqualified"
      ? pageData[6]
      : subpage === "referrals and tows in"
      ? pageData[7]
      : null;

  const setLocation = (location) => {
    setSelectedLocation(location);
  };

  const setDateState = (date) => {
    setDate(date);
  };

  const setLabelValue = (label) => {
    setLabel(label);
  };

  const dashboard_sankychart_data = get_dashboard_sankychart_data
    ? get_dashboard_sankychart_data[0]
    : {};

  const dashboard_ai_data = get_dashboard_ai_data_data
    ? get_dashboard_ai_data_data[0]
    : {};

  console.log(dashboard_sankychart_data, "dashboard_sankychart_data");
  return (
    <Layout
      headerProps={{
        filterEnableList: { marketingCampaign: true, location: true },
        heading: `Dashboard - ${label}`,
        repairpal_revenue_data: repairpal_revenue_data,
        label: label,
        setDate: setDateState,
        isOpen: isOpen,
        setIsOpen: setIsOpen,
        setSelectedLocation: setLocation,
        isOptionOpen: isOptionOpen,
        setIsOptionOpen: setIsOptionOpen,
        selectedLocation: selectedLocation,
        setLabel: setLabelValue,
        showInitialFilterUi: showInitialFilterUi,
        initalFilterDialogText: "Please select a location"
      }}
    >
      {loading ? (
        <MainLoader />
      ) : (
        <>
          <div>
            <div className="border-b-2 dark:border-l-2 dark:border-t-2 dark:border-x-2 dark_ui_border_color bg-[#f2f2f2] darkBackgroundMain w-full h-auto rounded-t-[1rem] shadow-[0_2px_6px_rgba(0,0,0,0.15)] mt-4">
              <DashboardHeader
                header_vals={{
                  total_calls: dashboard_sankychart_data?.total_calls,
                  lead_count: dashboard_sankychart_data?.lead_count,
                  unqualified_count:
                    dashboard_sankychart_data?.unqualified_count,
                  ...subNavData
                }}
              />
            </div>
            <div className="h-auto p-4 bg-white darkBackgroundMain dark:border-2 dark:border-t-0 dark_ui_border_color  shadow-[0_2px_6px_rgba(0,0,0,0.15)]">
              <DashboardSubHeader
                data={{
                  lead_count: dashboard_sankychart_data?.lead_count,
                  unqualified_count:
                    dashboard_sankychart_data?.unqualified_count,
                  lead_count_percentage:
                    dashboard_sankychart_data?.lead_count_percentage,
                  unqualified_count_percentage:
                    dashboard_sankychart_data?.unqualified_count_percentage
                }}
              />
              {/* <StaticTimePicker defaultValue={dayjs("2022-04-17T15:30")} /> */}
              {/* <SankeyChartNew /> */}
              {/* <div className="w-full relative flex h-full items-center justify-center 2xl:translate-x-6  "> */}

              <ForceDirectedChart
                centerChart={{
                  Confirmed: dashboard_sankychart_data?.Confirmed,
                  Drop_Off: dashboard_sankychart_data?.Drop_Off,
                  Emissions_Test: dashboard_sankychart_data?.Emissions_Test,
                  Tow_In: dashboard_sankychart_data?.Tow_In,
                  State_Inspection: dashboard_sankychart_data?.State_Inspection
                }}
                leftChart={{
                  Unable_To_Agree_To_Appt:
                    dashboard_sankychart_data?.Unable_To_Agree_To_Appt,
                  Agent_Calling_Back_with_Price:
                    dashboard_sankychart_data?.Agent_Calling_Back_with_Price,
                  No_Appointment_Offered:
                    dashboard_sankychart_data?.No_Appointment_Offered
                  // booked_appointment_count:
                  //   dashboard_sankychart_data?.booked_appointment_count,
                  // no_booked_appointment_count:
                  //   dashboard_sankychart_data?.no_booked_appointment_count,
                }}
                rightChart={{
                  Call_Not_Answered_count:
                    dashboard_sankychart_data?.Call_Not_Answered_count,
                  Voicemail_count: dashboard_sankychart_data?.Voicemail_count,
                  Robo_Call_count: dashboard_sankychart_data?.Robo_Call_count,
                  Vendor_call_count:
                    dashboard_sankychart_data?.Vendor_call_count,

                  Solicitation_count:
                    dashboard_sankychart_data?.Solicitation_count,

                  Wrong_Number_count:
                    dashboard_sankychart_data?.Wrong_Number_count,

                  Current_customer_inquiry_count:
                    dashboard_sankychart_data?.Current_customer_inquiry_count,

                  Appointment_confirmation_count:
                    dashboard_sankychart_data?.Appointment_confirmation_count,

                  Appointment_reschedule_count:
                    dashboard_sankychart_data?.Appointment_reschedule_count,

                  Appointment_cancelation_count:
                    dashboard_sankychart_data?.Appointment_cancelation_count,

                  Hours_or_Directions_count:
                    dashboard_sankychart_data?.Hours_or_Directions_count
                }}
              />

              {/* <div className="absolute text-center 2xl:translate-x-4 translate-x-8    2xl:w-[8.5rem] w-28 h-36 2xl:h-40 bg-green-600 flex items-center justify-center rounded-lg translate-y-[3.5rem]">
                <div className="flex flex-col">
                  <p className="text-white font-['Poppins'] font-semibold">
                    Total Calls
                    </p>
                    <p className="text-white font-['Poppins'] font-semibold">
                    {dashboard_sankychart_data?.total_calls}
                    </p>
                    </div>
                  </div> */}
              {/* </div> */}
              {Object.keys(chartsDataForAdwords).length > 0 && (
                <div className="flex items-center justify-center w-full p-4 ">
                  <DashboardPageButtons
                    pageData={pageData}
                    subpage={subpage}
                    setSubPage={setSubPage}
                  />
                </div>
              )}
              <div>
                {SubPageData ? (
                  <DashboardSubPage
                    key={SubPageData.title}
                    pageData={SubPageData}
                  />
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
}

export default DashboardPage;
