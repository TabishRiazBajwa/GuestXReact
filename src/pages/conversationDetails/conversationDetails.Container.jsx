import { connect } from "react-redux";
import callDetails from "./conversationDetails";
import { getConversationDetailsRequest } from "../../store/actions/callAnalytics.actions";
import {
  conversationDetailsDataSelector,
  conversationDetailsErrorSelector,
  conversationDetailsLoadingSelector,
} from "../../store/selector/callAnalytics.selector";

import { getRepairpalRevenueRequest } from "../../store/actions/marketeAnalytics.actions";

import { repairpalRevenueDataSelector } from "../../store/selector/marketeAnalytics.selector";

const mapDispatchToProps = {
  getConversationDetailsRequest,
  getRepairpalRevenueRequest,
};
const mapStateToProps = (state) => ({
  conversationDetailsData: conversationDetailsDataSelector(state),
  conversationDetailsError: conversationDetailsErrorSelector(state),
  conversationDetailsLoading: conversationDetailsLoadingSelector(state),

  repairpal_revenue_data: repairpalRevenueDataSelector(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(callDetails);
// export default callDetails;
