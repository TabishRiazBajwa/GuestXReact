export const getAiData = (get_dashboard_ai_data_data) => {
  function precise(x) {
    return x.toPrecision(3);
  }

  let ai_data = {
    leads: { leads: [], appointments: [], appointmentrate: [] },
    booked: { calls: [], booked_appointments: [], no_shows: [] },
    no_booked_appointment: {
      no_booked: [],
      unable_to_agree_to_time: [],
      no_appointment_offered: [],
      agent_call_back_with_price: []
    },

    unqualified: {
      unqualified_calls: [],
      no_answer: [],
      voice_mail: [],
      robo_calls: [],
      vendor: [],
      solicitation: [],
      wrong_number: [],
      current_customer_inquiry: [],
      confirmation: [],
      reschedule: [],
      cancellation: [],
      hours_or_direction: [],
      unidentified: [],
      internal: [],
      service_not_provided: []
    }
  };

  if (get_dashboard_ai_data_data && get_dashboard_ai_data_data.length > 0) {
    for (let element of get_dashboard_ai_data_data) {
      let date = new Date();

      date.setMonth(element.month - 1);
      const month_name = date.toLocaleString("en-US", { month: "short" });

      ai_data.leads.leads.push({
        name: month_name,
        Calls: element.total_calls,
        Leads: element.lead_count
      });

      ai_data.leads.appointments.push({
        name: month_name,
        Booked: element.booked_appointment_count,
        "No-Booked": element.no_booked_appointment_count,
        No_Booked: element.no_booked_appointment_count
      });

      ai_data.leads.appointmentrate.push({
        name: month_name,
        Booked: precise(element.booked_appointment_rate),
        "No-Booked": precise(element.no_booked_appointment_rate),
        No_Booked: precise(element.no_booked_appointment_rate)
      });

      ai_data.booked.calls.push({
        name: month_name,
        Calls: element.total_calls,
        Leads: element.lead_count,
        Appointments: element.booked_appointment_count,

        // TODO
        goalValue: 0
      });

      ai_data.booked.booked_appointments.push({
        name: month_name,
        Appointment: element.booked_appointment_count,
        Arrivals: 0,
        goalValue: 0
      });

      ai_data.booked.no_shows.push({
        name: month_name,
        Appointment: element.booked_appointment_count,
        "No Shows": 0,
        No_Shows: 0,
        goalValue: 0
      });

      ai_data.no_booked_appointment.no_booked.push({
        name: month_name,
        Calls: element.total_calls,
        Leads: element.load_count,
        "No Appointments": element.booked_appointment_count,
        goalValue: 0
      });

      ai_data.no_booked_appointment.unable_to_agree_to_time.push({
        name: month_name,
        "Unable to Agree To Appointment or Drop-Off Time":
          element.Unable_To_Agree_To_Appt,

        goalValue: 0
      });

      ai_data.no_booked_appointment.no_appointment_offered.push({
        name: month_name,
        "No Appointment Offered": element.No_Appointment_Offered,
        goalValue: 0
      });

      ai_data.no_booked_appointment.agent_call_back_with_price.push({
        name: month_name,
        "Agent Calling Back with Price": element.Agent_Calling_Back_with_Price,
        goalValue: 0
      });

      ai_data.unqualified.unqualified_calls.push({
        name: month_name,
        Calls: element.total_calls,
        Unqualified: element.unqualified_count,
        goalValue: 0
      });

      ai_data.unqualified.no_answer.push({
        name: month_name,
        "No Answer": element.Call_Not_Answered_count,
        goalValue: 0
      });

      ai_data.unqualified.voice_mail.push({
        name: month_name,
        "Voice mail": element.Voicemail_count,
        goalValue: 0
      });

      ai_data.unqualified.robo_calls.push({
        name: month_name,
        "IVR/Robo Calls": element.Robo_Call_count,
        goalValue: 0
      });

      ai_data.unqualified.vendor.push({
        name: month_name,
        Vendor: element.Vendor_call_count,
        goalValue: 0
      });

      ai_data.unqualified.solicitation.push({
        name: month_name,
        Solicitation: element.Solicitation_count,
        goalValue: 0
      });

      ai_data.unqualified.wrong_number.push({
        name: month_name,
        "Wrong Number": element.Wrong_Number_count,
        goalValue: 0
      });

      ai_data.unqualified.current_customer_inquiry.push({
        name: month_name,
        "Current Customer Inquiry": element.Current_customer_inquiry_count,
        goalValue: 0
      });

      ai_data.unqualified.confirmation.push({
        name: month_name,
        Confirmation: element.Appointment_confirmation_count
      });

      ai_data.unqualified.reschedule.push({
        name: month_name,
        Reschedule: element.Appointment_reschedule_count
      });

      ai_data.unqualified.cancellation.push({
        name: month_name,
        Cancellation: element.Appointment_cancelation_count
      });

      ai_data.unqualified.hours_or_direction.push({
        name: month_name,
        "Hours or Directions": element.Hours_or_Directions_count
      });

      ai_data.unqualified.unidentified.push({
        name: month_name,
        Unidentified: 0
      });

      ai_data.unqualified.internal.push({
        name: month_name,
        Internal: 0
      });

      ai_data.unqualified.service_not_provided.push({
        name: month_name,
        "Service Not Provided": element.Service_Not_provided_count
      });
    }
  }

  return ai_data;
};
