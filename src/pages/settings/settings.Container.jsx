import { connect } from "react-redux";
import Settings from "./settings";
import {
  getReferallRevenueRequest,
  getRepairpalRevenueRequest,
  getRepairpalInvestmentRequest,
} from "../../store/actions/marketeAnalytics.actions";

import {
  referalRevenueDataSelector,
  referalRevenueErrorSelector,
  referalRevenueLoadingSelector,
  repairpalInvestmentDataSelector,
  repairpalInvestmentErrorSelector,
  repairpalInvestmentLoadingSelector,
  repairpalRevenueDataSelector,
  repairpalRevenueErrorSelector,
  repairpalRevenueLoadingSelector,
} from "../../store/selector/marketeAnalytics.selector";

const mapDispatchToProps = {
  getReferallRevenueRequest,
  getRepairpalRevenueRequest,
  getRepairpalInvestmentRequest,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
