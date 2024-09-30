import { fromJS } from "immutable";
import ACTIONS from "../constants";

const initialState = fromJS({});

export default function callAnalyticsReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.CHAERT_DATA_FOR_YELP.PENDING: {
      console.log("action.data", action.data);
      return state.set("yelpChartData", action.data);
    }

    case ACTIONS.GET_UNMATCHED_CUSTOMERS.PENDING: {
      return state
        .set("unmatched_Customers_loading", true)
        .set("unmatched_Customers_error", null)
        .set("unmatched_Customers_data", null);
    }
    case ACTIONS.GET_UNMATCHED_CUSTOMERS.SUCCESS: {
      return state
        .set("unmatched_Customers_loading", false)
        .set("unmatched_Customers_error", "")
        .set("unmatched_Customers_data", action.data.data);
    }
    case ACTIONS.GET_UNMATCHED_CUSTOMERS.ERROR: {
      return state
        .set("unmatched_Customers_loading", false)
        .set("unmatched_Customers_error", action)
        .set("unmatched_Customers_data", null);
    }

    case ACTIONS.GET_SHOW_NOSHOW_DATA.PENDING: {
      return state
        .set("Show_NoShow_loading", true)
        .set("Show_NoShow_error", null)
        .set("Show_NoShow_data", null);
    }
    case ACTIONS.GET_SHOW_NOSHOW_DATA.SUCCESS: {
      return state
        .set("Show_NoShow_loading", false)
        .set("Show_NoShow_error", "")
        .set("Show_NoShow_data", action.data.data);
    }
    case ACTIONS.GET_SHOW_NOSHOW_DATA.ERROR: {
      return state
        .set("Show_NoShow_loading", false)
        .set("Show_NoShow_error", action)
        .set("Show_NoShow_data", null);
    }
    case ACTIONS.GET_NO_BOOKED_APPTS_DATA.PENDING: {
      return state
        .set("NOBooked_Appts_loading", true)
        .set("NOBooked_Appts_error", null)
        .set("NOBooked_Appts_data", null);
    }
    case ACTIONS.GET_NO_BOOKED_APPTS_DATA.SUCCESS: {
      return state
        .set("NOBooked_Appts_loading", false)
        .set("NOBooked_Appts_error", "")
        .set("NOBooked_Appts_data", action.data.data);
    }
    case ACTIONS.GET_NO_BOOKED_APPTS_DATA.ERROR: {
      return state
        .set("NOBooked_Appts_loading", false)
        .set("NOBooked_Appts_error", action)
        .set("NOBooked_Appts_data", null);
    }

    case ACTIONS.GET_BOOKED_APPTS_DATA.PENDING: {
      return state
        .set("Booked_Appts_loading", true)
        .set("Booked_Appts_error", null)
        .set("Booked_Appts_data", null);
    }
    case ACTIONS.GET_BOOKED_APPTS_DATA.SUCCESS: {
      return state
        .set("Booked_Appts_loading", false)
        .set("Booked_Appts_error", "")
        .set("Booked_Appts_data", action.data.data);
    }
    case ACTIONS.GET_BOOKED_APPTS_DATA.ERROR: {
      return state
        .set("Booked_Appts_loading", false)
        .set("Booked_Appts_error", action)
        .set("Booked_Appts_data", null);
    }

    case ACTIONS.GET_COACHING_INSIGHT_CALL_DATA.PENDING: {
      return state
        .set("Coaching_Insight_loading", true)
        .set("Coaching_Insight_error", null)
        .set("Coaching_Insight_data", null);
    }
    case ACTIONS.GET_COACHING_INSIGHT_CALL_DATA.SUCCESS: {
      return state
        .set("Coaching_Insight_loading", false)
        .set("Coaching_Insight_error", "")
        .set("Coaching_Insight_data", action.data.data);
    }
    case ACTIONS.GET_COACHING_INSIGHT_CALL_DATA.ERROR: {
      return state
        .set("Coaching_Insight_loading", false)
        .set("Coaching_Insight_error", action)
        .set("Coaching_Insight_data", null);
    }

    case ACTIONS.GET_REVENUE_AND_CUSTOMER_DATA.PENDING: {
      return state
        .set("Revenue_and_Customer_loading", true)
        .set("Revenue_and_Customer_error", null)
        .set("Revenue_and_Customer_data", null);
    }
    case ACTIONS.GET_REVENUE_AND_CUSTOMER_DATA.SUCCESS: {
      return state
        .set("Revenue_and_Customer_loading", false)
        .set("Revenue_and_Customer_error", "")
        .set("Revenue_and_Customer_data", action.data.data);
    }
    case ACTIONS.GET_REVENUE_AND_CUSTOMER_DATA.ERROR: {
      return state
        .set("Revenue_and_Customer_loading", false)
        .set("Revenue_and_Customer_error", action)
        .set("Revenue_and_Customer_data", null);
    }

    case ACTIONS.GET_UNSCORED_CALLS.PENDING: {
      return state
        .set("unscored_calls_loading", true)
        .set("unscored_calls_error", null)
        .set("unscored_calls_data", null);
    }
    case ACTIONS.GET_UNSCORED_CALLS.SUCCESS: {
      return state
        .set("unscored_calls_loading", false)
        .set("unscored_calls_error", "")
        .set("unscored_calls_data", action.data.data);
    }
    case ACTIONS.GET_UNSCORED_CALLS.ERROR: {
      return state
        .set("unscored_calls_loading", false)
        .set("unscored_calls_error", action)
        .set("unscored_calls_data", null);
    }

    case ACTIONS.GET_BOOKED_APPOINTMENT_CHARTS_DATA.PENDING: {
      return state
        .set("booked_appointment_charts_loading", true)
        .set("booked_appointment_charts_error", null)
        .set("booked_appointment_charts_data", null);
    }
    case ACTIONS.GET_BOOKED_APPOINTMENT_CHARTS_DATA.SUCCESS: {
      return state
        .set("booked_appointment_charts_loading", false)
        .set("booked_appointment_charts_error", "")
        .set("booked_appointment_charts_data", action.data.data);
    }
    case ACTIONS.GET_BOOKED_APPOINTMENT_CHARTS_DATA.ERROR: {
      return state
        .set("booked_appointment_charts_loading", false)
        .set("booked_appointment_charts_error", action)
        .set("booked_appointment_charts_data", null);
    }

    case ACTIONS.GET_COUNT_PER_CALL_DATA.PENDING: {
      return state
        .set("count_per_call_loading", true)
        .set("count_per_call_error", null)
        .set("count_per_call_data", []);
    }
    case ACTIONS.GET_COUNT_PER_CALL_DATA.SUCCESS: {
      return state
        .set("count_per_call_loading", false)
        .set("count_per_call_error", "")
        .set("count_per_call_data", action.data.data);
    }

    case ACTIONS.GET_COUNT_PER_CALL_DATA.ERROR: {
      return state
        .set("count_per_call_loading", false)
        .set("count_per_call_error", action)
        .set("count_per_call_data", []);
    }
    case ACTIONS.GET_CONVERSATION_DETAILS.PENDING: {
      return state
        .set("convesation_details_loading", true)
        .set("convesation_details_error", null)
        .set("convesation_details_data", []);
    }
    case ACTIONS.GET_CONVERSATION_DETAILS.SUCCESS: {
      return state
        .set("convesation_details_loading", false)
        .set("convesation_details_error", "")
        .set("convesation_details_data", action.data);
    }

    case ACTIONS.GET_CONVERSATION_DETAILS.ERROR: {
      return state
        .set("convesation_details_loading", false)
        .set("convesation_details_error", action)
        .set("convesation_details_data", []);
    }

    case ACTIONS.GET_CONVERSATION_INSIGHTS.PENDING: {
      return state
        .set("convesation_insights_loading", true)
        .set("convesation_insights_error", null)
        .set("convesation_insights_data", []);
    }

    case ACTIONS.GET_CONVERSATION_INSIGHTS.SUCCESS: {
      return state
        .set("convesation_insights_loading", false)
        .set("convesation_insights_error", "")
        .set("convesation_insights_data", action.data);
    }

    case ACTIONS.GET_CONVERSATION_INSIGHTS.ERROR: {
      return state
        .set("convesation_insights_loading", false)
        .set("convesation_insights_error", action)
        .set("convesation_insights_data", []);
    }

    case ACTIONS.GET_MARKETING_BUSINESS_REPORTS.PENDING: {
      return state
        .set("marketing_business_reports_loading", true)
        .set("marketing_business_reports_error", null)
        .set("marketing_business_reports_data", []);
    }
    case ACTIONS.GET_MARKETING_BUSINESS_REPORTS.SUCCESS: {
      return state
        .set("marketing_business_reports_loading", false)
        .set("marketing_business_reports_error", "")
        .set("marketing_business_reports_data", action.data);
    }

    case ACTIONS.GET_MARKETING_BUSINESS_REPORTS.ERROR: {
      return state
        .set("marketing_business_reports_loading", false)
        .set("marketing_business_reports_error", action)
        .set("marketing_business_reports_data", []);
    }
    case ACTIONS.GET_RANKING_REPORTS.PENDING: {
      return state
        .set("ranking_reports_loading", true)
        .set("ranking_reports_error", null)
        .set("ranking_reports_data", []);
    }
    case ACTIONS.GET_RANKING_REPORTS.SUCCESS: {
      return state
        .set("ranking_reports_loading", false)
        .set("ranking_reports_error", "")
        .set("ranking_reports_data", action.data);
    }

    case ACTIONS.GET_RANKING_REPORTS.ERROR: {
      return state
        .set("ranking_reports_loading", false)
        .set("ranking_reports_error", action)
        .set("ranking_reports_data", []);
    }

    // name is dashboard_ai_data (data included in the name here)
    case ACTIONS.GET_DASHBOARD_AI_DATA.PENDING: {
      return state
        .set("dashboard_ai_data_loading", false)
        .set("dashboard_ai_data_error", "")
        .set("dashboard_ai_data_data", action.data);
    }

    case ACTIONS.GET_DASHBOARD_AI_DATA.SUCCESS: {
      return state
        .set("dashboard_ai_data_loading", false)
        .set("dashboard_ai_data_error", "")
        .set("dashboard_ai_data_data", action.data);
    }

    case ACTIONS.GET_DASHBOARD_AI_DATA.ERROR: {
      return state
        .set("dashboard_ai_data_loading", false)
        .set("dashboard_ai_data_error", action)
        .set("dashboard_ai_data_data", []);
    }

    case ACTIONS.GET_DASHBOARD_SANKYCHART_DATA.PENDING: {
      return state
        .set("dashboard_sankychart_data_loading", false)
        .set("dashboard_sankychart_data_error", "")
        .set("dashboard_sankychart_data_data", action.data);
    }

    case ACTIONS.GET_DASHBOARD_SANKYCHART_DATA.SUCCESS: {
      return state
        .set("dashboard_sankychart_data_loading", false)
        .set("dashboard_sankychart_data_error", "")
        .set("dashboard_sankychart_data_data", action.data);
    }

    case ACTIONS.GET_DASHBOARD_SANKYCHART_DATA.ERROR: {
      return state
        .set("dashboard_sankychart_data_loading", false)
        .set("dashboard_sankychart_data_error", action)
        .set("dashboard_sankychart_data_data", []);
    }

    case ACTIONS.GET_FILTER_SERVICE_ADVISOR.PENDING: {
      return state
        .set("filter_service_advisor_loading", false)
        .set("filter_service_advisor_error", "")
        .set("filter_service_advisor_data", action.data);
    }

    case ACTIONS.GET_FILTER_SERVICE_ADVISOR.SUCCESS: {
      return state
        .set("filter_service_advisor_loading", false)
        .set("filter_service_advisor_error", "")
        .set("filter_service_advisor_data", action.data);
    }

    case ACTIONS.GET_FILTER_SERVICE_ADVISOR.ERROR: {
      return state
        .set("filter_service_advisor_loading", false)
        .set("filter_service_advisor_error", action)
        .set("filter_service_advisor_data", []);
    }

    case ACTIONS.CLEAR_MESSAGE_BOX_FOR_TIME_EXPIRY: {
      return state.set("showMessageBoxForTimeExpiryData", null);
    }

    case ACTIONS.CLEAR_SHOW_MESSAGE_BOX: {
      return state.set("showMessageBox", null);
    }
    case ACTIONS.SET_TOAST_MESSAGE: {
      return state.set("toastMessage", action.data);
    }
    case ACTIONS.CLEAR_TOAST_MESSAGE: {
      return state.set("toastMessage", null);
    }
    default: {
      return state;
    }
  }
}
