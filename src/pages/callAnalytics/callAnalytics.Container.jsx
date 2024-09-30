import { connect } from "react-redux";
import CallAnalyticsPage from "./callAnalytics";

import {
  bookedAppointmentsDataSelector,
  bookedAppointmentsErrorSelector,
  bookedAppointmentsLoadingSelector,
  coachingInsightDataSelector,
  coachingInsightErrorSelector,
  coachingInsightLoadingSelector,
  countPerCallDataSelector,
  countPerCallErrorSelector,
  countPerCallLoadingSelector,
  noBookedAppointmentsDataSelector,
  noBookedAppointmentsErrorSelector,
  noBookedAppointmentsLoadingSelector,
  revenueAndCustomerDataSelector,
  revenueAndCustomerErrorSelector,
  revenueAndCustomerLoadingSelector,
  showNoShowDataSelector,
  showNoShowErrorSelector,
  showNoShowLoadingSelector,
  unmatchedCustomersDataSelector,
  unmatchedCustomersErrorSelector,
  unmatchedCustomersLoadingSelector,
  unscoredCallaDataSelector,
  unscoredCallaErrorSelector,
  unscoredCallaLoadingSelector
} from "../../store/selector/callAnalytics.selector";

import {

  getRepairpalRevenueRequest,
} from "../../store/actions/marketeAnalytics.actions";

import {
  getUnscoredCallsRequest,
  getShowNoShowRequest,
  getCoachingInsightRequest,
  getNOBookedAppointmentChartsDataRequest,
  getBookedAppointmentChartsDataRequest,
  getRevenueAndCustomerRequest,
  getUnMatchedCustomersRequest
} from "../../store/actions/callAnalytics.actions";

import { getCountPerCallsDataRequest } from "../../store/actions/callAnalytics.actions";
import { repairpalRevenueDataSelector } from "../../store/selector/marketeAnalytics.selector";

const mapDispatchToProps = {
  getCountPerCallsDataCall: getCountPerCallsDataRequest,
  getRepairpalRevenueRequest,
  getUnscoredCallsRequest,
  getCoachingInsightRequest,
  getRevenueAndCustomerRequest,
  getBookedAppointmentChartsDataRequest,
  getNOBookedAppointmentChartsDataRequest,
  getShowNoShowRequest,
  getUnMatchedCustomersRequest
};

const mapStateToProps = (state) => {
  const repairpal_revenue_data = repairpalRevenueDataSelector(state);

  const count_per_call_loading = countPerCallLoadingSelector(state);
  const count_per_call_error = countPerCallErrorSelector(state);
  const count_per_call_data = countPerCallDataSelector(state);

  const unscored_calls_loading = unscoredCallaLoadingSelector(state);
  const unscored_calls_error = unscoredCallaErrorSelector(state);
  const unscored_calls_data = unscoredCallaDataSelector(state);

  const Revenue_and_Customer_loading = revenueAndCustomerLoadingSelector(state);
  const Revenue_and_Customer_error = revenueAndCustomerErrorSelector(state);
  const Revenue_and_Customer_data = revenueAndCustomerDataSelector(state);

  const Coaching_Insight_loading = coachingInsightLoadingSelector(state);
  const Coaching_Insight_error = coachingInsightErrorSelector(state);
  const Coaching_Insight_data = coachingInsightDataSelector(state);

  const NOBooked_Appts_loading = noBookedAppointmentsLoadingSelector(state);
  const NOBooked_Appts_error = noBookedAppointmentsErrorSelector(state);
  const NOBooked_Appts_data = noBookedAppointmentsDataSelector(state);

  const Booked_Appts_loading = bookedAppointmentsLoadingSelector(state);
  const Booked_Appts_error = bookedAppointmentsErrorSelector(state);
  const Booked_Appts_data = bookedAppointmentsDataSelector(state);

  const Show_NoShow_loading = showNoShowLoadingSelector(state);
  const Show_NoShow_error = showNoShowErrorSelector(state);
  const Show_NoShow_data = showNoShowDataSelector(state);

  const unmatched_Customers_loading = unmatchedCustomersLoadingSelector(state);
  const unmatched_Customers_error = unmatchedCustomersErrorSelector(state);
  const unmatched_Customers_data = unmatchedCustomersDataSelector(state);

  return {
    unmatched_Customers_loading,
    unmatched_Customers_error,
    unmatched_Customers_data,

    NOBooked_Appts_loading,
    NOBooked_Appts_error,
    NOBooked_Appts_data,

    Booked_Appts_loading,
    Booked_Appts_error,
    Booked_Appts_data,

    Coaching_Insight_loading,
    Coaching_Insight_error,
    Coaching_Insight_data,

    Revenue_and_Customer_loading,
    Revenue_and_Customer_error,
    Revenue_and_Customer_data,

    Show_NoShow_loading,
    Show_NoShow_error,
    Show_NoShow_data,

    unscored_calls_loading,
    unscored_calls_error,
    unscored_calls_data,

    repairpal_revenue_data,
    count_per_call_loading,
    count_per_call_error,
    count_per_call_data
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CallAnalyticsPage);
