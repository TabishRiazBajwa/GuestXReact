import moment from "moment";
import { emptyPaginationObj } from "../Constants/constant";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

export const formatNumber = (number) => {
  let f = new Intl.NumberFormat("en-us");
  if (isNaN(number)) {
    return "--";
  }
  return f.format(number);
};

export const getDifference = (array1, array2) => {
  return array1.filter((object1) => {
    return array2.some((object2) => {
      return object1.value === object2.value;
    });
  });
};

export const parseBooleanVal = (val) => {
  if (val === "true" || val === true) return true;
  return false;
};

export const AccessManagementIconActive = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <rect width="24" height="24" fill="none" />
      <path
        d="M21,10H12.65a6,6,0,1,0,0,4H13l2,2,2-2,2,2,4-4.04ZM7,15a3,3,0,1,1,3-3A3.009,3.009,0,0,1,7,15Z"
        fill="current"
      />
    </svg>
  );
};

export const KPIManagementIconActive = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M0,0H24V24H0Z" fill="none" />
      <path
        d="M13,2.05V5.08A7,7,0,0,1,19,12a7.124,7.124,0,0,1-.48,2.54l2.6,1.53A9.876,9.876,0,0,0,22,12a10.006,10.006,0,0,0-9-9.95ZM12,19A7,7,0,0,1,11,5.08V2.05a10,10,0,1,0,9.05,15.86l-2.6-1.53A6.951,6.951,0,0,1,12,19Z"
        fill="current"
      />
    </svg>
  );
};
export const NotificationIconActive = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g transform="translate(-260 -101)">
        <rect
          width="24"
          height="24"
          transform="translate(260 101)"
          fill="none"
        />
        <path
          d="M12,22a2.006,2.006,0,0,0,2-2H10A2,2,0,0,0,12,22Zm6-6V11c0-3.07-1.64-5.64-4.5-6.32V4a1.5,1.5,0,0,0-3,0v.68C7.63,5.36,6,7.92,6,11v5L4,18v1H20V18Z"
          transform="translate(260 100.5)"
          fill="current"
        />
      </g>
    </svg>
  );
};

export const ProfileIconActive = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <rect width="24" height="24" fill="none" />
      <path
        d="M19,3H5A2.006,2.006,0,0,0,3,5V19a2.006,2.006,0,0,0,2,2H19a2.006,2.006,0,0,0,2-2V5A2.006,2.006,0,0,0,19,3ZM12,6A3.5,3.5,0,1,1,8.5,9.5,3.5,3.5,0,0,1,12,6Zm7,13H5v-.23a2.01,2.01,0,0,1,.76-1.58,9.985,9.985,0,0,1,12.48,0A2.025,2.025,0,0,1,19,18.77Z"
        fill="current"
        // fill="#0f2e60"
      />
    </svg>
  );
};

export const SecurityIconNotActive = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g transform="translate(-308 -31)">
        <path
          d="M16.964,2.944,10.214.131a1.693,1.693,0,0,0-1.3,0L2.166,2.944A1.686,1.686,0,0,0,1.125,4.5c0,6.979,4.026,11.8,7.788,13.371a1.693,1.693,0,0,0,1.3,0C13.223,16.617,18,12.282,18,4.5A1.688,1.688,0,0,0,16.964,2.944Zm-7.4,12.749,0-13.4,6.185,2.577c-.116,5.323-2.887,9.18-6.181,10.819Z"
          transform="translate(310.875 33.998)"
          fill="#707070"
        />
        <rect
          width="24"
          height="24"
          transform="translate(308 31)"
          fill="none"
        />
      </g>
    </svg>
  );
};

export const AccessManagementIconNotActive = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <rect width="24" height="24" fill="none" />
      <path
        d="M21,10H12.65a6,6,0,1,0,0,4H13l2,2,2-2,2,2,4-4.04ZM7,15a3,3,0,1,1,3-3A3.009,3.009,0,0,1,7,15Z"
        fill="#707070"
      />
    </svg>
  );
};

export const KPIManagementIconNotActive = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M0,0H24V24H0Z" fill="none" />
      <path
        d="M13,2.05V5.08A7,7,0,0,1,19,12a7.124,7.124,0,0,1-.48,2.54l2.6,1.53A9.876,9.876,0,0,0,22,12a10.006,10.006,0,0,0-9-9.95ZM12,19A7,7,0,0,1,11,5.08V2.05a10,10,0,1,0,9.05,15.86l-2.6-1.53A6.951,6.951,0,0,1,12,19Z"
        fill="#707070"
      />
    </svg>
  );
};

export const NotificationIconNotActive = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g transform="translate(-260 -101)">
        <rect
          width="24"
          height="24"
          transform="translate(260 101)"
          fill="none"
        />
        <path
          d="M12,22a2.006,2.006,0,0,0,2-2H10A2,2,0,0,0,12,22Zm6-6V11c0-3.07-1.64-5.64-4.5-6.32V4a1.5,1.5,0,0,0-3,0v.68C7.63,5.36,6,7.92,6,11v5L4,18v1H20V18Z"
          transform="translate(260 100.5)"
          fill="#707070"
        />
      </g>
    </svg>
  );
};

export const ProfileIconNotActive = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <rect width="24" height="24" fill="none" />
      <path
        d="M19,3H5A2.006,2.006,0,0,0,3,5V19a2.006,2.006,0,0,0,2,2H19a2.006,2.006,0,0,0,2-2V5A2.006,2.006,0,0,0,19,3ZM12,6A3.5,3.5,0,1,1,8.5,9.5,3.5,3.5,0,0,1,12,6Zm7,13H5v-.23a2.01,2.01,0,0,1,.76-1.58,9.985,9.985,0,0,1,12.48,0A2.025,2.025,0,0,1,19,18.77Z"
        fill="#707070"
      />
    </svg>
  );
};

export const SecurityIconActive = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g transform="translate(-308 -31)">
        <path
          d="M16.964,2.944,10.214.131a1.693,1.693,0,0,0-1.3,0L2.166,2.944A1.686,1.686,0,0,0,1.125,4.5c0,6.979,4.026,11.8,7.788,13.371a1.693,1.693,0,0,0,1.3,0C13.223,16.617,18,12.282,18,4.5A1.688,1.688,0,0,0,16.964,2.944Zm-7.4,12.749,0-13.4,6.185,2.577c-.116,5.323-2.887,9.18-6.181,10.819Z"
          transform="translate(310.875 33.998)"
          fill="current"
        />
        <rect
          width="24"
          height="24"
          transform="translate(308 31)"
          fill="none"
        />
      </g>
    </svg>
  );
};

export const getPaginationObj = (data, query = null) => {
  if (!data && !query) return emptyPaginationObj;
  const obj = {
    page: data.current_page,
    totalPages: data.total_pages,
    total: data.total,
  };
  if (query) {
    Object.assign(obj, {
      sort_field: query.sort_field ?? null,
      sort_order: query.sort_order ?? null,
      filter: query.filter ?? null,
      search: query.search.length === 0 ? null : query.search,
    });
  }
  return obj;
};

export const getColor = (value) => {
  if (value > 0) {
    return "text-[#0DA452]";
  } else if (value < 0) {
    return "text-red-600";
  } else {
    return "text-blue-900";
  }
};

export const getBorderColor = (value) => {
  if (value > 0) {
    return "border-green-600";
  } else if (value < 0) {
    return "border-red-600";
  } else {
    return "";
  }
};

export const getIcon = (value) => {
  if (value > 0) {
    return <AiFillCaretUp />;
  } else {
    return <AiFillCaretDown />;
  }
};

export const convertToFloat = (value) => {
  if (isNaN(value)) return 0;
  return parseFloat(value).toFixed(2);
};

export const handleInfinityAndNaNValues = (value) => {
  if (isNaN(value)) {
    return "--";
  } else if (!isFinite(value)) {
    return "--";
  }

  return parseFloat(value).toFixed(2);
};

let Doller = [
  "Cost Per Click",
  "Cost Per Lead",
  "Investment",
  "Revenue",
  "ARO",
  "Return On Investment",
  "Call & Appts",
  "Calls & Appts",
  "Impressions",
  "Clicks",
  "handleError",
  "Page Visits",
  "Ads",
  "Total Customers",
  "Organic",
  "Customer",
  "Car Count",
  "ROI",
];

let TwoDecimals = ["Click Thru Rate"];
// label === "Cost Per Click" || label === "Cost Per Lead"

function labelExistsInArray(label) {
  return true;
}

function labelWithTwoDecimalExistsInArray(label) {
  return TwoDecimals.includes(label);
}

export const getDollerSign = (heading) => {
  if (
    heading === "Revenue" ||
    heading === "Investment" ||
    heading === "ARO" ||
    heading === "Cost Per Lead" ||
    heading === "Cost Per Click" ||
    heading === "ARO" ||
    heading === "Revenue"
  )
    return "$";
  return "";
};

export const getPercentageSign = (heading) => {
  if (
    heading === "Conversion Rate" ||
    heading === "Page visit to lead" ||
    heading === "Click Thru Rate" ||
    heading === "Conversion Rate" ||
    heading === "Page Visit to Lead"
  ) {
    return "%";
  }
  return "";
};

export const handleError = (value, label = "") => {
  let dec = labelWithTwoDecimalExistsInArray(label) ? 1 : 0;
  if (checkNaN(value) && checkFinite(value)) {
    // if (value > 0) {
    if (labelExistsInArray(label)) {
      return formatNumber(parseFloat(value).toFixed(dec));
    }
    return parseFloat(value).toFixed(dec);
  }

  return "--";
};

export const checkNaN = (value) => {
  if (isNaN(value)) {
    return false;
  }

  return true;
};

export const checkFinite = (value) => {
  if (!isFinite(value)) {
    return false;
  }
  return true;
};

export const getConfig = (months, data) => {
  const config = {
    type: "bar",
    data: {
      labels: months || months?.monthsList,
      datasets: data,
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        x: {
          grid: {
            borderDash: [6, 6],
            display: false,
          },
        },
        y: {
          border: {
            display: false,
          },
          // suggestedMin: 0,
          // suggestedMax: 1000,

          ticks: {
            maxTicksLimit: 3,
          },
          grid: {
            borderDash: [6, 6],

            drawBorder: false,
            drawTicks: false,
          },
        },
      },
      plugins: {
        tooltip: {
          yAlign: "Bottom",
          backgroundColor: "gray",
          displayColors: false,
        },
        legend: {
          display: false,
        },
      },
    },
  };
  return config;
};
