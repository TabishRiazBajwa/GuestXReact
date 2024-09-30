import { connect } from "react-redux";
import revenueCustomerCompaignPage from "./revenueCustomerCompaign";

import {
  countPerCallDataSelector,
  countPerCallErrorSelector,
  countPerCallLoadingSelector
} from "../../store/selector/callAnalytics.selector";

import {
  getReferallRevenueRequest,
  getRepairpalRevenueRequest,
  getRepairpalInvestmentRequest,
  getDashboardRevCarAroRequest,
  getDashboardAroRevCustRequest,
  getAdwordsCTRAroCallsRoiRequest,
  getAdwordsCTRAroCallsRequest,
  getAdwordsCTRInvestRateRequest,
  getYelpRoiRequest,
  getYelpCustomerCallApptsRequest,
  getYelpCostPerLeadRequest,
  getYelpConversationRateRequest,
  getYelpCTRPerClicksRequest,

} from "../../store/actions/marketeAnalytics.actions";
import {
  getYelpRoiDataSelector,
  getYelpRoiErrorSelector,
  getYelpRoiLoadingSelector,
  adwordsCTRAroCallsRoiDataSelector,
  adwordsCTRAroCallsRoiErrorSelector,
  adwordsCTRAroCallsRoiLoadingSelector,
  adwordsCTRAroDataSelector,
  adwordsCTRAroErrorSelector,
  adwordsCTRAroLoadingSelector,
  adwordsCTRInvestDataSelector,
  adwordsCTRInvestErrorSelector,
  adwordsCTRInvestLoadingSelector,
  getDashboardRevCarAroDataDataSelector,
  getDashboardRevCarAroDataErrorSelector,
  getDashboardRevCarAroDataLoadingSelector,
  get_dashboardAroRevDustDataDataSelector,
  get_dashboardAroRevDustDataErrorSelector,
  get_dashboardAroRevDustDataLoadingSelector,
  referalRevenueDataSelector,
  referalRevenueErrorSelector,
  referalRevenueLoadingSelector,

  repairpalInvestmentErrorSelector,
  repairpalInvestmentLoadingSelector,
  repairpalInvestmentDataSelector,
  repairpalRevenueDataSelector,
  repairpalRevenueErrorSelector,
  repairpalRevenueLoadingSelector,


  yelpCostPerLeadDataSelector,
  yelpCostPerLeadErrorSelector,
  yelpCostPerLeadLoadingSelector,
  yelpCustomerCallApptsDataSelector,
  yelpCustomerCallApptsErrorSelector,
  yelpCustomerCallApptsLoadingSelector,
  yelpPageVisitsDataSelector,
  yelpPageVisitsErrorSelector,
  yelpPageVisitsLoadingSelector,
  yelpPerClickCallsDataSelector,
  yelpPerClickCallsErrorSelector,
  yelpPerClickCallsLoadingSelector,
  yelpPerClickConversionRateDataSelector,
  yelpPerClickConversionRateErrorSelector,
  yelpPerClickConversionRateLoadingSelector
} from "../../store/selector/marketeAnalytics.selector";

const mapDispatchToProps = {
  getReferallRevenueRequest,
  getRepairpalRevenueRequest,
  getRepairpalInvestmentRequest,
  getDashboardRevCarAroRequest,
  getDashboardAroRevCustRequest,
  getAdwordsCTRAroCallsRoiRequest,
  getAdwordsCTRAroCallsRequest,
  getAdwordsCTRInvestRateRequest,
  getYelpRoiRequest,
  getYelpCustomerCallApptsRequest,
  getYelpCostPerLeadRequest,
  getYelpConversationRateRequest,
  getYelpCTRPerClicksRequest,

  getReferallRevenueRequest,
  getRepairpalInvestmentRequest

};

const mapStateToProps = (state) => {
  const repairpal_investment_loading =
    repairpalInvestmentLoadingSelector(state);
  const repairpal_investment_error = repairpalInvestmentErrorSelector(state);
  const repairpal_investment_data = repairpalInvestmentDataSelector(state);

  const referal_revenue_loading = referalRevenueLoadingSelector(state);
  const referal_revenue_error = referalRevenueErrorSelector(state);
  const referal_revenue_data = referalRevenueDataSelector(state);

  const repairpal_revenue_loading = repairpalRevenueLoadingSelector(state);
  const repairpal_revenue_error = repairpalRevenueErrorSelector(state);
  const repairpal_revenue_data = repairpalRevenueDataSelector(state);

  const get_dashboard_aro_rev_cust_loading =
    get_dashboardAroRevDustDataLoadingSelector(state);
  const get_dashboard_aro_rev_cust_error =
    get_dashboardAroRevDustDataErrorSelector(state);
  const get_dashboard_aro_rev_cust_data =
    get_dashboardAroRevDustDataDataSelector(state);

  const get_dashboard_rev_car_aro_loading =
    getDashboardRevCarAroDataLoadingSelector(state);
  const get_dashboard_rev_car_aro_error =
    getDashboardRevCarAroDataErrorSelector(state);
  const get_dashboard_rev_car_aro_data =
    getDashboardRevCarAroDataDataSelector(state);

    const get_adwords_ctr_invest_loading = adwordsCTRInvestLoadingSelector(state);
    const get_adwords_ctr_invest_error = adwordsCTRInvestErrorSelector(state);
    const get_adwords_ctr_invest_data = adwordsCTRInvestDataSelector(state);
  
    const get_adwords_ctr_aro_calls_loading = adwordsCTRAroLoadingSelector(state);
    const get_adwords_ctr_aro_calls_error = adwordsCTRAroErrorSelector(state);
    const get_adwords_ctr_aro_calls_data = adwordsCTRAroDataSelector(state);
  
    const get_adwords_ctr_aro_calls_roi_loading = adwordsCTRAroCallsRoiLoadingSelector(state);
    const get_adwords_ctr_aro_calls_roi_error = adwordsCTRAroCallsRoiErrorSelector(state);
    const get_adwords_ctr_aro_calls_roi_data = adwordsCTRAroCallsRoiDataSelector(state);


    
  const yelp_per_clicks_calls_loading = yelpPerClickCallsLoadingSelector(state);
  const yelp_per_clicks_calls_error = yelpPerClickCallsErrorSelector(state);
  const yelp_per_clicks_calls_data = yelpPerClickCallsDataSelector(state);

  const get_yelp_cost_per_lead_loading = yelpCostPerLeadLoadingSelector(state);
  const get_yelp_cost_per_lead_error = yelpCostPerLeadErrorSelector(state);
  const get_yelp_cost_per_lead_data = yelpCostPerLeadDataSelector(state);

  const get_yelp_page_visits_loading = yelpPageVisitsLoadingSelector(state);
  const get_yelp_page_visits_error = yelpPageVisitsErrorSelector(state);
  const get_yelp_page_visits_data = yelpPageVisitsDataSelector(state);

  const get_yelp_customer_call_appts_loading = yelpCustomerCallApptsLoadingSelector(state);
  const get_yelp_customer_call_appts_error = yelpCustomerCallApptsErrorSelector(state);
  const get_yelp_customer_call_appts_data = yelpCustomerCallApptsDataSelector(state);

  const get_yelp_roi_loading = getYelpRoiLoadingSelector(state);
  const get_yelp_roi_error = getYelpRoiErrorSelector(state);
  const get_yelp_roi_data = getYelpRoiDataSelector(state);



  



  const get_yelp_conversation_rate_loading =
    yelpPerClickConversionRateLoadingSelector(state);
  const get_yelp_conversation_rate_error =
    yelpPerClickConversionRateErrorSelector(state);
  const get_yelp_conversation_rate_data =
    yelpPerClickConversionRateDataSelector(state);


  return {
    get_dashboard_aro_rev_cust_error,
    get_dashboard_aro_rev_cust_data,

    get_adwords_ctr_invest_data,
    get_adwords_ctr_aro_calls_roi_data,
    get_adwords_ctr_aro_calls_data,

    get_dashboard_rev_car_aro_error,
    get_dashboard_rev_car_aro_data,
    
    repairpal_investment_error,
    referal_revenue_error,
    referal_revenue_data,
    repairpal_investment_data,
    repairpal_revenue_data,
    repairpal_revenue_error,
    
    
    get_yelp_roi_error,
    
    get_dashboard_rev_car_aro_loading,
    get_dashboard_aro_rev_cust_loading,
    repairpal_investment_loading,
    referal_revenue_loading,
    repairpal_revenue_loading,
    get_yelp_roi_loading,
    get_yelp_cost_per_lead_loading,
    yelp_per_clicks_calls_loading,
    get_yelp_conversation_rate_loading,
    get_yelp_roi_data,
    get_yelp_conversation_rate_data,
    yelp_per_clicks_calls_data,
    get_yelp_cost_per_lead_data,
    get_yelp_customer_call_appts_data,
    get_yelp_page_visits_data,
    get_yelp_customer_call_appts_loading,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(revenueCustomerCompaignPage)

