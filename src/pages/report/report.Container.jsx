import { connect } from "react-redux";
import Report from "./report";
import { getMarketingBusinessReportsRequest } from "../../store/actions/callAnalytics.actions";
import { getRepairpalRevenueRequest } from "../../store/actions/marketeAnalytics.actions";
import {
  marketingBusinessReportsDataSelector,
  marketingBusinessReportsErrorSelector,
  marketingBusinessReportsLoadingSelector,
} from "../../store/selector/callAnalytics.selector";
import {
  repairpalRevenueDataSelector,
  repairpalRevenueLoadingSelector,
} from "../../store/selector/marketeAnalytics.selector";

const mapDispatchToProps = {
  getMarketingBusinessReportsRequest,
  getRepairpalRevenueRequest,
};
const mapStateToProps = (state) => ({
  marketingBusinessReportsData: marketingBusinessReportsDataSelector(state),
  marketingBusinessReportsError: marketingBusinessReportsErrorSelector(state),
  marketingBusinessReportsLoading:
    marketingBusinessReportsLoadingSelector(state),
  repairpalRevenueData: repairpalRevenueDataSelector(state),
  repairpalRevenueLoading: repairpalRevenueLoadingSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Report);
