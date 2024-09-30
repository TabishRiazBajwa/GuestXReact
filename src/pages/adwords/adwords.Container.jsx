import { connect } from "react-redux";
import Adwords from "./adwords";
import {
  getReferallRevenueRequest,
  getRepairpalRevenueRequest,
  getRepairpalInvestmentRequest,
  getAdwordsCTRInvestRateRequest,
  getAdwordsCTRAroCallsRequest,
  getAdwordsCTRAroCallsRoiRequest
} from "../../store/actions/marketeAnalytics.actions";
import {
  adwordsCTRAroCallsRoiDataSelector,
  adwordsCTRAroCallsRoiErrorSelector,
  adwordsCTRAroCallsRoiLoadingSelector,
  adwordsCTRAroDataSelector,
  adwordsCTRAroErrorSelector,
  adwordsCTRAroLoadingSelector,
  adwordsCTRInvestDataSelector,
  adwordsCTRInvestErrorSelector,
  adwordsCTRInvestLoadingSelector,
  referalRevenueDataSelector,
  referalRevenueErrorSelector,
  referalRevenueLoadingSelector,
  repairpalInvestmentDataSelector,
  repairpalInvestmentErrorSelector,
  repairpalInvestmentLoadingSelector,
  repairpalRevenueDataSelector,
  repairpalRevenueErrorSelector,
  repairpalRevenueLoadingSelector
} from "../../store/selector/marketeAnalytics.selector";

const mapDispatchToProps = {
  getAdwordsCTRInvestRateRequest,
  getReferallRevenueRequest,
  getRepairpalRevenueRequest,
  getRepairpalInvestmentRequest,
  getAdwordsCTRAroCallsRequest,
  getAdwordsCTRAroCallsRoiRequest
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

  const get_adwords_ctr_invest_loading = adwordsCTRInvestLoadingSelector(state);
  const get_adwords_ctr_invest_error = adwordsCTRInvestErrorSelector(state);
  const get_adwords_ctr_invest_data = adwordsCTRInvestDataSelector(state);

  const get_adwords_ctr_aro_calls_loading = adwordsCTRAroLoadingSelector(state);
  const get_adwords_ctr_aro_calls_error = adwordsCTRAroErrorSelector(state);
  const get_adwords_ctr_aro_calls_data = adwordsCTRAroDataSelector(state);

  const get_adwords_ctr_aro_calls_roi_loading = adwordsCTRAroCallsRoiLoadingSelector(state);
  const get_adwords_ctr_aro_calls_roi_error = adwordsCTRAroCallsRoiErrorSelector(state);
  const get_adwords_ctr_aro_calls_roi_data = adwordsCTRAroCallsRoiDataSelector(state);

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
    get_adwords_ctr_invest_loading,
    get_adwords_ctr_invest_error,
    get_adwords_ctr_invest_data,
    get_adwords_ctr_aro_calls_data,
    get_adwords_ctr_aro_calls_loading,
    get_adwords_ctr_aro_calls_roi_data,
    get_adwords_ctr_aro_calls_roi_loading
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Adwords);
