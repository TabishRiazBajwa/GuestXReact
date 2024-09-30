import { fromJS } from "immutable";
import ACTIONS from "../constants";

const initialState = fromJS({
  showMessageBox: null,
  showMessageBoxForTimeExpiryData: null,
  toastMessage: null,
  showConfirmationMessageBox: null,
});

export default function marketeAnalyticsReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.GET_YELP_ROI.PENDING: {
      return state
        .set("get_yelp_roi_loading", true)
        .set("get_yelp_roi_error", null)
        .set("get_yelp_roi_data", null);
    }
    case ACTIONS.GET_YELP_ROI.SUCCESS: {
      console.log("action.data.data", action.data.data);

      return state
        .set("get_yelp_roi_loading", false)
        .set("get_yelp_roi_error", "")
        .set("get_yelp_roi_data", action.data.data);
    }
    case ACTIONS.GET_YELP_ROI.ERROR: {
      return state
        .set("get_yelp_roi_loading", false)
        .set("get_yelp_roi_error", action)
        .set("get_yelp_roi_data", null);
    }

    case ACTIONS.GET_ADWORDS_CTR_ARO_CALLS_ROI.PENDING: {
      return state
        .set("get_adwords_ctr_aro_calls_roi_loading", true)
        .set("get_adwords_ctr_aro_calls_roi_error", null)
        .set("get_adwords_ctr_aro_calls_roi_data", null);
    }
    case ACTIONS.GET_ADWORDS_CTR_ARO_CALLS_ROI.SUCCESS: {
      return state
        .set("get_adwords_ctr_aro_calls_roi_loading", false)
        .set("get_adwords_ctr_aro_calls_roi_error", "")
        .set("get_adwords_ctr_aro_calls_roi_data", action.data.data) //
        .set("get_adwords_ctr_aro_calls_roi_total", action.data.total);
    }
    case ACTIONS.GET_ADWORDS_CTR_ARO_CALLS_ROI.ERROR: {
      return state
        .set("get_adwords_ctr_aro_calls_roi_loading", false)
        .set("get_adwords_ctr_aro_calls_roi_error", action)
        .set("get_adwords_ctr_aro_calls_roi_data", null);
    }

    case ACTIONS.GET_ADWORDS_CTR_ARO_CALLS.PENDING: {
      return state
        .set("get_adwords_ctr_aro_calls_loading", true)
        .set("get_adwords_ctr_aro_calls_error", null)
        .set("get_adwords_ctr_aro_calls_data", null);
    }
    case ACTIONS.GET_ADWORDS_CTR_ARO_CALLS.SUCCESS: {
      return state
        .set("get_adwords_ctr_aro_calls_loading", false)
        .set("get_adwords_ctr_aro_calls_error", "")
        .set("get_adwords_ctr_aro_calls_data", action.data.data)
        .set("get_adwords_ctr_aro_calls_total", action.data.total);
    }
    case ACTIONS.GET_ADWORDS_CTR_ARO_CALLS.ERROR: {
      return state
        .set("get_adwords_ctr_aro_calls_loading", false)
        .set("get_adwords_ctr_aro_calls_error", action)
        .set("get_adwords_ctr_aro_calls_data", null);
    }
    case ACTIONS.GET_ADWORDS_CTR_INVEST_RATE.PENDING: {
      return state
        .set("get_adwords_ctr_invest_loading", true)
        .set("get_adwords_ctr_invest_error", null)
        .set("get_adwords_ctr_invest_data", null);
    }
    case ACTIONS.GET_ADWORDS_CTR_INVEST_RATE.SUCCESS: {
      return state
        .set("get_adwords_ctr_invest_loading", false)
        .set("get_adwords_ctr_invest_error", "")
        .set("get_adwords_ctr_invest_data", action.data.data);
    }
    case ACTIONS.GET_ADWORDS_CTR_INVEST_RATE.ERROR: {
      return state
        .set("get_adwords_ctr_invest_loading", false)
        .set("get_adwords_ctr_invest_error", action)
        .set("get_adwords_ctr_invest_data", null);
    }

    case ACTIONS.GET_DASHBOARD_ARO_REV_CUST.PENDING: {
      return state
        .set("get_dashboard_aro_rev_cust_loading", true)
        .set("get_dashboard_aro_rev_cust_error", null)
        .set("get_dashboard_aro_rev_cust_data", null);
    }
    case ACTIONS.GET_DASHBOARD_ARO_REV_CUST.SUCCESS: {
      return state
        .set("get_dashboard_aro_rev_cust_loading", false)
        .set("get_dashboard_aro_rev_cust_error", "")
        .set("get_dashboard_aro_rev_cust_data", action.data.data);
    }
    case ACTIONS.GET_DASHBOARD_ARO_REV_CUST.ERROR: {
      return state
        .set("get_dashboard_aro_rev_cust_loading", false)
        .set("get_dashboard_aro_rev_cust_error", action)
        .set("get_dashboard_aro_rev_cust_data", null);
    }

    case ACTIONS.GET_DASHBOARD_REV_CAR_ARO.PENDING: {
      return state
        .set("get_dashboard_rev_car_aro_loading", true)
        .set("get_dashboard_rev_car_aro_error", null)
        .set("get_dashboard_rev_car_aro_data", null);
    }
    case ACTIONS.GET_DASHBOARD_REV_CAR_ARO.SUCCESS: {
      return state
        .set("get_dashboard_rev_car_aro_loading", false)
        .set("get_dashboard_rev_car_aro_error", "")
        .set("get_dashboard_rev_car_aro_data", action.data.data);
    }
    case ACTIONS.GET_DASHBOARD_REV_CAR_ARO.ERROR: {
      return state
        .set("get_dashboard_rev_car_aro_loading", false)
        .set("get_dashboard_rev_car_aro_error", action)
        .set("get_dashboard_rev_car_aro_data", null);
    }

    case ACTIONS.GET_YELP_CUSTOMER_CALL_APTS.PENDING: {
      return state
        .set("get_yelp_customer_call_appts_loading", true)
        .set("get_yelp_customer_call_appts_error", null)
        .set("get_yelp_customer_call_appts_data", null);
    }
    case ACTIONS.GET_YELP_CUSTOMER_CALL_APTS.SUCCESS: {
      return state
        .set("get_yelp_customer_call_appts_loading", false)
        .set("get_yelp_customer_call_appts_error", "")
        .set("get_yelp_customer_call_appts_data", action.data.data)
        .set("get_yelp_customer_call_appts_total", action.data.total);
    }
    case ACTIONS.GET_YELP_CUSTOMER_CALL_APTS.ERROR: {
      return state
        .set("get_yelp_customer_call_appts_loading", false)
        .set("get_yelp_customer_call_appts_error", action)
        .set("get_yelp_customer_call_appts_data", null);
    }

    case ACTIONS.GET_YELP_PAGE_VISITS.PENDING: {
      return state
        .set("get_yelp_page_visits_loading", true)
        .set("get_yelp_page_visits_error", null)
        .set("get_yelp_page_visits_data", null);
    }
    case ACTIONS.GET_YELP_PAGE_VISITS.SUCCESS: {
      return state
        .set("get_yelp_page_visits_loading", false)
        .set("get_yelp_page_visits_error", "")
        .set("get_yelp_page_visits_data", action.data.data);
    }
    case ACTIONS.GET_YELP_PAGE_VISITS.ERROR: {
      return state
        .set("get_yelp_page_visits_loading", false)
        .set("get_yelp_page_visits_error", action)
        .set("get_yelp_page_visits_data", null);
    }

    case ACTIONS.GET_YELP_COST_PER_LEAD.PENDING: {
      return state
        .set("get_yelp_cost_per_lead_loading", true)
        .set("get_yelp_cost_per_lead_error", null)
        .set("get_yelp_cost_per_lead_data", null);
    }
    case ACTIONS.GET_YELP_COST_PER_LEAD.SUCCESS: {
      return state
        .set("get_yelp_cost_per_lead_loading", false)
        .set("get_yelp_cost_per_lead_error", "")
        .set("get_yelp_cost_per_lead_data", action.data.data)
        .set("get_yelp_cost_per_lead_total", action.data.total);
    }
    case ACTIONS.GET_YELP_COST_PER_LEAD.ERROR: {
      return state
        .set("get_yelp_cost_per_lead_loading", false)
        .set("get_yelp_cost_per_lead_error", action)
        .set("get_yelp_cost_per_lead_data", null);
    }

    case ACTIONS.GET_YELP_CONVERSATION_RATE.PENDING: {
      return state
        .set("get_yelp_conversation_rate_loading", true)
        .set("get_yelp_conversation_rate_error", null)
        .set("get_yelp_conversation_rate_data", null);
    }
    case ACTIONS.GET_YELP_CONVERSATION_RATE.SUCCESS: {
      return state
        .set("get_yelp_conversation_rate_loading", false)
        .set("get_yelp_conversation_rate_error", "")
        .set("get_yelp_conversation_rate_data", action.data.data)
        .set("get_yelp_conversation_rate_total", action.data.total);
    }
    case ACTIONS.GET_YELP_CONVERSATION_RATE.ERROR: {
      return state
        .set("get_yelp_conversation_rate_loading", false)
        .set("get_yelp_conversation_rate_error", action)
        .set("get_yelp_conversation_rate_data", null);
    }

    case ACTIONS.GET_YELP_CTR_PER_CLICKS.PENDING: {
      return state
        .set("yelp_per_clicks_calls_loading", true)
        .set("yelp_per_clicks_calls_error", null)
        .set("yelp_per_clicks_calls_data", null);
    }
    case ACTIONS.GET_YELP_CTR_PER_CLICKS.SUCCESS: {
      return state
        .set("yelp_per_clicks_calls_loading", false)
        .set("yelp_per_clicks_calls_error", "")
        .set("yelp_per_clicks_calls_data", action.data.data);
    }
    case ACTIONS.GET_YELP_CTR_PER_CLICKS.ERROR: {
      return state
        .set("yelp_per_clicks_calls_loading", false)
        .set("yelp_per_clicks_calls_error", action)
        .set("yelp_per_clicks_calls_data", null);
    }

    case ACTIONS.GET_REPAIRPAL_REVENUE_DATA.PENDING: {
      return state
        .set("repairpal_revenue_loading", true)
        .set("repairpal_revenue_error", null)
        .set("repairpal_revenue_data", null);
    }
    case ACTIONS.GET_REPAIRPAL_REVENUE_DATA.SUCCESS: {
      return state
        .set("repairpal_revenue_loading", false)
        .set("repairpal_revenue_error", "")
        .set("repairpal_revenue_data", action.data.data);
    }
    case ACTIONS.GET_REPAIRPAL_REVENUE_DATA.ERROR: {
      return state
        .set("repairpal_revenue_loading", false)
        .set("repairpal_revenue_error", action)
        .set("repairpal_revenue_data", null);
    }

    case ACTIONS.GET_REFERAL_REVENUE_DATA.PENDING: {
      return state
        .set("referal_revenue_loading", true)
        .set("referal_revenue_error", null)
        .set("referal_revenue_data", null);
    }
    case ACTIONS.GET_REFERAL_REVENUE_DATA.SUCCESS: {
      return state
        .set("referal_revenue_loading", false)
        .set("referal_revenue_error", "")
        .set("referal_revenue_data", action.data.data)
        .set("referal_revenue_total", action.data.total);
    }
    case ACTIONS.GET_REFERAL_REVENUE_DATA.ERROR: {
      return state
        .set("referal_revenue_loading", false)
        .set("referal_revenue_error", action)
        .set("referal_revenue_data", null);
    }

    case ACTIONS.GET_REPAIRPAL_INVESTMENT_DATA.PENDING: {
      return state
        .set("repairpal_investment_loading", true)
        .set("repairpal_investment_error", null)
        .set("repairpal_investment_data", null);
    }
    case ACTIONS.GET_REPAIRPAL_INVESTMENT_DATA.SUCCESS: {
      return state
        .set("repairpal_investment_loading", false)
        .set("repairpal_investment_error", "")
        .set("repairpal_investment_data", action.data.data)
        .set("repairpal_investment_total", action.data.total);
    }
    case ACTIONS.GET_REPAIRPAL_INVESTMENT_DATA.ERROR: {
      return state
        .set("repairpal_investment_loading", false)
        .set("repairpal_investment_error", action)
        .set("repairpal_investment_data", null);
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
