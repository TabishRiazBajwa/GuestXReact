import { connect } from "react-redux";
import callInsights from "./callInsights";

import {
  getConversationInsightsRequest,
  getFilterServiceAdvisorListRequest,
} from "../../store/actions/callAnalytics.actions";

import { getRepairpalRevenueRequest } from "../../store/actions/marketeAnalytics.actions";

import {
  conversationInsightsDataSelector,
  conversationInsightsErrorSelector,
  conversationInsightsLoadingSelector,
  filterServiceAdvisorDataSelector,
  filterServiceAdvisorErrorSelector,
  filterServiceAdvisorLoadingSelector,
} from "../../store/selector/callAnalytics.selector";

import { repairpalRevenueDataSelector } from "../../store/selector/marketeAnalytics.selector";

const mapDispatchToProps = {
  getConversationInsightsRequest,
  getRepairpalRevenueRequest,
  getFilterServiceAdvisorListRequest,
};

const mapStateToProps = (state) => ({
  conversationInsightData: conversationInsightsDataSelector(state),
  conversationInsightError: conversationInsightsErrorSelector(state),
  conversationInsightsLoading: conversationInsightsLoadingSelector(state),

  repairpal_revenue_data: repairpalRevenueDataSelector(state),

  filterServiceAdvisorData: filterServiceAdvisorDataSelector(state),
  filterServiceAdvisorError: filterServiceAdvisorErrorSelector(state),
  filterServiceAdvisorLoading: filterServiceAdvisorLoadingSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(callInsights);
