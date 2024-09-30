const Arrow = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 11.789 11.789"
    >
      <path
        d="M6,11.895l1.039-1.039,4.119,4.111V6h1.474v8.967l4.111-4.119,1.046,1.046-5.895,5.895Z"
        transform="translate(-6 -6)"
        fill="#fff"
      />
    </svg>
  );
};

const Minus = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={5}
      stroke="#fff"
      width="14"
      height="12"
    >
      <path d="M19.5 12h-15" />
    </svg>
  );
};

const DashboardHeaderItem = ({ dataObj }) => {
  const symbol =
    dataObj.type === "Price" ? "$" : dataObj.type === "Rate" ? "%" : null;

  let formattedValue = dataObj.value;

  if (dataObj.type === "Price" && typeof dataObj.value === "number") {
    formattedValue = dataObj.value.toLocaleString();
  }

  const difference = dataObj.value - dataObj.oldValue;

  const color = difference > 0 ? "#0DA452" : difference < 0 ? "#FF0000" : "";

  return (
    <div className="w-full flex flex-col space-y-4 py-4 flex-wrap cursor-pointer  ">
      <div className="flex items-center space-x-2 w-max h-6">
        <div className="flex items-center">
          <p className="font-['Poppins'] font-semibold text-[0.875rem] 2xl:text-lg text-[#0F2E60] darkText ">
            {dataObj.label}
          </p>
        </div>

        <div
          className={`w-5 h-5 ${
            color === "" ? "bg-[#888888]" : `bg-[${color}]`
          } rounded-full flex items-center justify-center cursor-pointer`}
        >
          {difference > 0 ? (
            <div className="rotate-180">
              <Arrow />
            </div>
          ) : difference < 0 ? (
            <Arrow />
          ) : (
            <Minus />
          )}
        </div>
      </div>

      <div
        className={`font-['Poppins'] font-bold text-base 2xl:text-lg flex items-center space-x-1 ${
          difference > 0
            ? "text-[#0DA452]"
            : difference < 0
            ? "text-[#FF0000]"
            : "text-[#888888]"
        }`}
      >
        {typeof dataObj.value !== "undefined" ? (
          <>
            {symbol && symbol === "$" ? (
              <p>
                <span>{symbol} </span>
                {formattedValue}
              </p>
            ) : (
              <p>
                {formattedValue}
                <span> {symbol}</span>
              </p>
            )}
          </>
        ) : (
          <>N/A</>
        )}
      </div>
    </div>
  );
};

export default DashboardHeaderItem;
