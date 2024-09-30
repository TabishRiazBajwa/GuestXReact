import { connect } from "react-redux";
import DashboardPage from "./dashboard";

// Api calls
import {
  getRepairpalRevenueRequest,

  // Repair Pal apis
  getReferallRevenueRequest,
  getRepairpalInvestmentRequest,
  // Yelp apis
  getYelpCTRPerClicksRequest,
  getYelpConversationRateRequest,
  getYelpCostPerLeadRequest,
  getYelpPageVisitsRequest,
  getYelpCustomerCallApptsRequest,
  // adword apis
  getAdwordsCTRAroCallsRequest,
  getAdwordsCTRInvestRateRequest,
  getAdwordsCTRAroCallsRoiRequest,
} from "../../store/actions/marketeAnalytics.actions";
import {
  // adwords selectors
  adwordsCTRAroLoadingSelector,
  adwordsCTRAroErrorSelector,
  adwordsCTRAroDataSelector,
  adwordsCTRAroTotalSelector,
  adwordsCTRInvestLoadingSelector,
  adwordsCTRInvestErrorSelector,
  adwordsCTRInvestDataSelector,
  adwordsCTRAroCallsRoiLoadingSelector,
  adwordsCTRAroCallsRoiErrorSelector,
  adwordsCTRAroCallsRoiDataSelector,
  adwordsCTRAroCallsRoiTotalSelector,

  // repairpal selectors
  referalRevenueDataSelector,
  referalRevenueErrorSelector,
  referalRevenueLoadingSelector,
  referalRevenueTotalSelector,
  repairpalInvestmentDataSelector,
  repairpalInvestmentErrorSelector,
  repairpalInvestmentLoadingSelector,
  repairpalInvestmentTotalSelector,
  repairpalRevenueDataSelector,
  repairpalRevenueErrorSelector,
  repairpalRevenueLoadingSelector,

  // yelp selectors
  yelpCostPerLeadDataSelector,
  yelpCostPerLeadTotalSelector,
  yelpCostPerLeadErrorSelector,
  yelpCostPerLeadLoadingSelector,
  yelpCustomerCallApptsDataSelector,
  yelpCustomerCallApptsTotalSelector,
  yelpCustomerCallApptsErrorSelector,
  yelpCustomerCallApptsLoadingSelector,
  yelpPageVisitsDataSelector,
  yelpPageVisitsErrorSelector,
  yelpPageVisitsLoadingSelector,
  yelpPerClickCallsDataSelector,
  yelpPerClickCallsErrorSelector,
  yelpPerClickCallsLoadingSelector,
  yelpPerClickConversionRateDataSelector,
  yelpPerClickConversionRateTotalSelector,
  yelpPerClickConversionRateErrorSelector,
  yelpPerClickConversionRateLoadingSelector,
} from "../../store/selector/marketeAnalytics.selector";

import {
  getDashboardAiDataRequest,
  getDashboardSankychartRequest,
} from "../../store/actions/callAnalytics.actions";

import {
  dashboardAiDataDATASelector,
  dashboardAiDataErrorSelector,
  dashboardAiDataLoadingSelector,
  //sanky chart
  dashboardSankychartDataSelector,
  dashboardSankychartLoadingSelector,
  dashboardSankychartErrorSelector,
} from "../../store/selector/callAnalytics.selector";

const mapDispatchToProps = {
  getReferallRevenueRequest,
  getRepairpalRevenueRequest,
  getRepairpalInvestmentRequest,
  getYelpCTRPerClicksRequest,
  getYelpConversationRateRequest,
  getYelpCostPerLeadRequest,
  getYelpPageVisitsRequest,
  getYelpCustomerCallApptsRequest,
  // Imtinan
  getAdwordsCTRAroCallsRequest,
  getAdwordsCTRInvestRateRequest,
  getAdwordsCTRAroCallsRoiRequest,

  getDashboardAiDataRequest,
  getDashboardSankychartRequest,
};

const mapStateToProps = (state) => {
  const repairpal_investment_loading =
    repairpalInvestmentLoadingSelector(state);
  const repairpal_investment_error = repairpalInvestmentErrorSelector(state);
  const repairpal_investment_data = repairpalInvestmentDataSelector(state);
  const repairpal_investment_total = repairpalInvestmentTotalSelector(state);

  const referal_revenue_loading = referalRevenueLoadingSelector(state);
  const referal_revenue_error = referalRevenueErrorSelector(state);
  const referal_revenue_data = referalRevenueDataSelector(state);
  const referal_revenue_total = referalRevenueTotalSelector(state);

  const repairpal_revenue_loading = repairpalRevenueLoadingSelector(state);
  const repairpal_revenue_error = repairpalRevenueErrorSelector(state);
  const repairpal_revenue_data = repairpalRevenueDataSelector(state);

  const yelp_per_clicks_calls_loading = yelpPerClickCallsLoadingSelector(state);
  const yelp_per_clicks_calls_error = yelpPerClickCallsErrorSelector(state);
  const yelp_per_clicks_calls_data = yelpPerClickCallsDataSelector(state);

  const get_yelp_cost_per_lead_loading = yelpCostPerLeadLoadingSelector(state);
  const get_yelp_cost_per_lead_error = yelpCostPerLeadErrorSelector(state);
  const get_yelp_cost_per_lead_data = yelpCostPerLeadDataSelector(state);
  const get_yelp_cost_per_lead_total = yelpCostPerLeadTotalSelector(state);

  const get_yelp_page_visits_loading = yelpPageVisitsLoadingSelector(state);
  const get_yelp_page_visits_error = yelpPageVisitsErrorSelector(state);
  const get_yelp_page_visits_data = yelpPageVisitsDataSelector(state);

  const get_yelp_customer_call_appts_loading =
    yelpCustomerCallApptsLoadingSelector(state);
  const get_yelp_customer_call_appts_error =
    yelpCustomerCallApptsErrorSelector(state);
  const get_yelp_customer_call_appts_data =
    yelpCustomerCallApptsDataSelector(state);

  const get_yelp_customer_call_appts_total =
    yelpCustomerCallApptsTotalSelector(state);

  // Imtinan
  const get_adwords_ctr_aro_calls_loading = adwordsCTRAroLoadingSelector(state);
  const get_adwords_ctr_aro_calls_error = adwordsCTRAroErrorSelector(state);
  const get_adwords_ctr_aro_calls_data = adwordsCTRAroDataSelector(state); // Second ->
  const get_adwords_ctr_aro_calls_total = adwordsCTRAroTotalSelector(state);

  const get_adwords_ctr_invest_data = adwordsCTRInvestDataSelector(state);
  const get_adwords_ctr_invest_loading = adwordsCTRInvestLoadingSelector(state);
  const get_adwords_ctr_invest_error = adwordsCTRInvestErrorSelector(state);

  const get_adwords_ctr_aro_calls_roi_loading =
    adwordsCTRAroCallsRoiLoadingSelector(state);
  const get_adwords_ctr_aro_calls_roi_error =
    adwordsCTRAroCallsRoiErrorSelector(state);
  const get_adwords_ctr_aro_calls_roi_data =
    adwordsCTRAroCallsRoiDataSelector(state);

  const get_adwords_ctr_aro_calls_roi_total =
    adwordsCTRAroCallsRoiTotalSelector(state);

  const get_yelp_conversation_rate_loading =
    yelpPerClickConversionRateLoadingSelector(state);
  const get_yelp_conversation_rate_error =
    yelpPerClickConversionRateErrorSelector(state);
  const get_yelp_conversation_rate_data =
    yelpPerClickConversionRateDataSelector(state);

  const get_yelp_conversation_rate_total =
    yelpPerClickConversionRateTotalSelector(state);

  const get_dashboard_ai_data_loading = dashboardAiDataLoadingSelector(state);
  const get_dashboard_ai_data_data = dashboardAiDataDATASelector(state);
  const get_dashboard_ai_data_error = dashboardAiDataErrorSelector(state);

  const get_dashboard_sankychart_data_loading =
    dashboardSankychartLoadingSelector(state);
  const get_dashboard_sankychart_data = dashboardSankychartDataSelector(state);
  const get_dashboard_sankychart_data_error =
    dashboardSankychartErrorSelector(state);

  return {
    repairpal_investment_loading,
    repairpal_investment_error,
    repairpal_investment_data,
    repairpal_investment_total,

    referal_revenue_loading,
    referal_revenue_error,
    referal_revenue_data,
    referal_revenue_total,

    repairpal_revenue_loading,
    repairpal_revenue_error,
    repairpal_revenue_data,

    yelp_per_clicks_calls_loading,
    yelp_per_clicks_calls_error,
    yelp_per_clicks_calls_data,

    get_yelp_conversation_rate_loading,
    get_yelp_conversation_rate_error,
    get_yelp_conversation_rate_data,
    get_yelp_conversation_rate_total,

    get_yelp_cost_per_lead_loading,
    get_yelp_cost_per_lead_error,
    get_yelp_cost_per_lead_data,
    get_yelp_cost_per_lead_total,

    get_yelp_page_visits_data,

    get_yelp_customer_call_appts_loading,
    get_yelp_customer_call_appts_error,
    get_yelp_customer_call_appts_data,
    get_yelp_customer_call_appts_total,
    // imtinan
    get_adwords_ctr_aro_calls_loading,
    get_adwords_ctr_aro_calls_error,
    get_adwords_ctr_aro_calls_data,
    get_adwords_ctr_aro_calls_total,

    get_adwords_ctr_invest_loading,
    get_adwords_ctr_invest_error,
    get_adwords_ctr_invest_data,

    get_adwords_ctr_aro_calls_roi_loading,
    get_adwords_ctr_aro_calls_roi_error,
    get_adwords_ctr_aro_calls_roi_data,
    get_adwords_ctr_aro_calls_roi_total,

    get_dashboard_ai_data_loading,
    get_dashboard_ai_data_data,
    get_dashboard_ai_data_error,

    get_dashboard_sankychart_data_loading,
    get_dashboard_sankychart_data,
    get_dashboard_sankychart_data_error,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
