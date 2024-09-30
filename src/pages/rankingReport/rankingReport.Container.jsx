import { connect } from "react-redux";
import RankingReport from "./rankingReport";

// Api calls
import { getRankingReportsRequest } from "../../store/actions/callAnalytics.actions";
import { getRepairpalRevenueRequest } from "../../store/actions/marketeAnalytics.actions";

import {
  // ranking report selectors
  rankingReportDataSelector,
  rankingReportErrorSelector,
  rankingReportLoadingSelector,
} from "../../store/selector/callAnalytics.selector";

import {
  repairpalRevenueDataSelector,
  repairpalRevenueErrorSelector,
  repairpalRevenueLoadingSelector,
} from "../../store/selector/marketeAnalytics.selector";

const mapStateToProps = (state) => ({
  rankingReportData: rankingReportDataSelector(state),
  rankingReportLoading: rankingReportLoadingSelector(state),
  rankingReportError: rankingReportErrorSelector(state),
  repairpal_revenue_loading: repairpalRevenueLoadingSelector(state),
  repairpal_revenue_error: repairpalRevenueErrorSelector(state),
  repairpal_revenue_data: repairpalRevenueDataSelector(state),
});

const mapDispatchToProps = {
  getRankingReportsRequest,
  getRepairpalRevenueRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(RankingReport);
