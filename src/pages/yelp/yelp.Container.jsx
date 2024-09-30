import { connect } from "react-redux";
import yelp from "./yelp";



import {
  getReferallRevenueRequest,
  getRepairpalRevenueRequest,
  getRepairpalInvestmentRequest,
  getYelpCTRPerClicksRequest,
  getYelpConversationRateRequest,
  getYelpCostPerLeadRequest,
  getYelpPageVisitsRequest,
  getYelpRoiRequest,
  getYelpCustomerCallApptsRequest,
} from "../../store/actions/marketeAnalytics.actions";
import {
  getYelpRoiDataSelector,
  getYelpRoiErrorSelector,
  getYelpRoiLoadingSelector,
  referalRevenueDataSelector,
  referalRevenueErrorSelector,
  referalRevenueLoadingSelector,
  repairpalInvestmentDataSelector,
  repairpalInvestmentErrorSelector,
  repairpalInvestmentLoadingSelector,
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
  getYelpRoiRequest,
  getReferallRevenueRequest,
  getRepairpalRevenueRequest,
  getRepairpalInvestmentRequest,
  getYelpCTRPerClicksRequest,
  getYelpConversationRateRequest,
  getYelpCostPerLeadRequest,
  getYelpPageVisitsRequest,
  getYelpCustomerCallApptsRequest
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

   repairpal_investment_loading,
    repairpal_investment_error,
    repairpal_investment_data,
    referal_revenue_loading,
    referal_revenue_error,
    referal_revenue_data,
    repairpal_revenue_loading,
    repairpal_revenue_error,
    repairpal_revenue_data,

    get_yelp_roi_loading,
    get_yelp_roi_error,
    get_yelp_cost_per_lead_loading,
    yelp_per_clicks_calls_loading,
    get_yelp_roi_data,
    get_yelp_conversation_rate_data,
    yelp_per_clicks_calls_data,
    get_yelp_cost_per_lead_data,
    get_yelp_customer_call_appts_data,
    get_yelp_page_visits_data,
    get_yelp_customer_call_appts_loading,
    get_yelp_conversation_rate_loading
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(yelp);
