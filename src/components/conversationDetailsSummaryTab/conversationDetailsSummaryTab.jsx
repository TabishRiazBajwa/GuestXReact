import React from "react";

export default function conversationDetailsSummaryTab(props) {
  const { service_requested, summary, recommendations } = props.dataProps;
  return (
    <div>
      <div className="h-5/6 py-5 px-8 text-justify flex space-y-10 divide-y-2  flex-col gap-2">
        <span className="space-y-3 py-6">
          <p className="font-semibold text-base  ">Service Requested</p>
          <p className="font-normal text-md">{service_requested}</p>
        </span>
        <span className="space-y-3 py-6">
          <p className="font-semibold text-base  ">Call Summary</p>
          <p className="font-normal text-md  ">{summary}</p>
        </span>
        <span className="space-y-3 py-6">
          <p className="font-semibold text-base ">Recommendations</p>

          <p className="font-normal text-md  ">{recommendations}</p>
        </span>
      </div>
    </div>
  );
}
