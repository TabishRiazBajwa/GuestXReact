export const SingleCardWithNoSubCardLoader = () => {
  return (
    <div className="bg-white rounded-lg p-2 animate-pulse">
      <div className="flex flex-col items-start text-center justify-start ">
        <div className="h-4 w-2/3 bg-gray-300 rounded-lg mb-2"></div>
        <div className="h-6 w-1/2 bg-gray-300 rounded-lg"></div>
      </div>
      <div className="flex flex-col items-end text-center justify-end mt-4">
        <div className="flex items-center gap-1 text-red-600">
          <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
          <div className="w-10 h-4 bg-gray-300 rounded-lg"></div>
        </div>
        <div className="w-16 h-4 bg-gray-300 rounded-lg mt-1"></div>
      </div>
    </div>
  );
};
export const LoaderForYelpFirstCarD = () => {
  return (
    <div className="border-[1.5px] px-2 py-2 rounded-lg col-span-3 bg-white animate-pulse">
      <div>
        <div className="flex flex-col items-start text-center justify-start">
          <div className="h-4 bg-gray-300 rounded-lg mb-2"></div>
          <div className="h-6 bg-gray-300 rounded-lg"></div>
        </div>
        <div className="flex flex-col items-end text-center justify-end">
          <div className="flex items-center gap-1 text-red-600">
            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
            <div className="w-10 h-4 bg-gray-300 rounded-lg"></div>
          </div>
          <div className="w-16 h-4 bg-gray-300 rounded-lg mt-2"></div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="border-[1.5px] shadow-lg p-2 rounded-lg animate-pulse"
          >
            <div className="flex flex-col items-start text-center justify-start">
              <div className="h-4 bg-gray-300 rounded-lg mb-2"></div>
              <div className="h-6 bg-gray-300 rounded-lg"></div>
            </div>
            <div className="flex flex-col items-end text-end justify-end">
              <div className="w-16 h-4 bg-gray-300 rounded-lg"></div>
              <div className="w-12 h-4 bg-gray-300 rounded-lg mt-4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const LoaderForRevenueCustomerAndCampaign = () => {
  return (
    <div className="w-full pt-4">
      <div className="bg-white rounded-lg shadow-lg">
        <div className="p-4">
          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="border-[1.5px] border-gray-300 px-2 py-2 rounded-lg animate-pulse"
              >
                <div className="h-6 bg-gray-300 rounded-lg mb-2"></div>
                <div className="h-6 bg-gray-300 rounded-lg"></div>
              </div>
            ))}
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer"></div>
              <div className="h-6 bg-gray-300 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FirstLoader = () => {
  return (
    <>
      <div className="border-[1.5px] px-2 py-2 rounded-lg col-span-3 bg-white animate-pulse">
        <div>
          <div className="flex flex-col items-start text-center justify-start">
            <div className="h-4 bg-gray-300 rounded-lg mb-2"></div>
            <div className="h-6 bg-gray-300 rounded-lg"></div>
          </div>
          <div className="flex flex-col items-end text-center justify-end">
            <div className="flex items-center gap-1 text-red-600">
              <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              <div className="w-10 h-4 bg-gray-300 rounded-lg"></div>
            </div>
            <div className="w-16 h-4 bg-gray-300 rounded-lg mt-2"></div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="border-[1.5px] shadow-lg p-2 rounded-lg animate-pulse"
            >
              <div className="flex flex-col items-start text-center justify-start">
                <div className="h-4 bg-gray-300 rounded-lg mb-2"></div>
                <div className="h-6 bg-gray-300 rounded-lg"></div>
              </div>
              <div className="flex flex-col items-end text-end justify-end">
                <div className="w-16 h-4 bg-gray-300 rounded-lg"></div>
                <div className="w-12 h-4 bg-gray-300 rounded-lg mt-4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const SingleCardLoaderA = () => {
  return (
    <>
      <div className="bg-white rounded-lg p-2 animate-pulse">
        <div className="flex flex-col items-start text-center justify-start">
          <div className="h-4 bg-gray-300 rounded-lg mb-2"></div>
          <div className="h-6 bg-gray-300 rounded-lg"></div>
        </div>
        <div className="flex flex-col items-end text-center justify-end mt-6">
          <div className={`flex items-center gap-1 ${"text-[#0DA452]"} `}>
            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
            <div className="w-10 h-4 bg-gray-300 rounded-lg"></div>
          </div>
          <div className="w-8 h-4 bg-gray-300 rounded-lg mt-1"></div>
        </div>
      </div>
    </>
  );
};

export const Loader = (props) => {
  return (
    <div>
      <div className="bg-white rounded-xl p-4">
        <div className="animate-pulse">
          <h1 className="h-6 w-2/3 bg-gray-300 rounded-lg mb-2"></h1>
          <h2 className="h-8 w-3/4 bg-gray-300 rounded-lg"></h2>
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-1 text-[#0DA452]">
              <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              <h3 className="h-4 w-10 bg-gray-300 rounded-lg"></h3>
            </div>
            <h4 className="h-6 w-16 bg-gray-300 rounded-lg mt-2"></h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export const LoaderCardsWithTwoSubCards = () => {
  return (
    <div className="border-[1.5px] px-2 py-2 rounded-lg col-span-1 bg-white animate-pulse">
      <div>
        <div className="flex flex-col items-start text-center justify-start">
          <div className="h-4 bg-gray-300 rounded-lg mb-2"></div>
          <div className="h-6 bg-gray-300 rounded-lg"></div>
        </div>
        <div className="flex flex-col items-end text-center justify-end">
          <div className="flex items-center gap-1 text-red-600">
            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
            <div className="w-10 h-4 bg-gray-300 rounded-lg"></div>
          </div>
          <div className="w-8 h-4 bg-gray-300 rounded-lg mt-2"></div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-2">
        <div className="border-[1.5px] shadow-lg p-2 rounded-lg animate-pulse">
          <div className="flex flex-col items-start text-center justify-start">
            <div className="h-4 bg-gray-300 rounded-lg mb-2"></div>
            <div className="h-6 bg-gray-300 rounded-lg"></div>
          </div>
          <div className="flex flex-col items-end text-end justify-end">
            <div className="w-16 h-4 bg-gray-300 rounded-lg"></div>
            <div className="w-12 h-4 bg-gray-300 rounded-lg mt-4"></div>
          </div>
        </div>
        <div className="border-[1.5px] shadow-lg p-2 rounded-lg animate-pulse">
          <div className="flex flex-col items-start text-center justify-start">
            <div className="h-4 bg-gray-300 rounded-lg mb-2"></div>
            <div className="h-6 bg-gray-300 rounded-lg"></div>
          </div>
          <div className="flex flex-col items-end text-end justify-end">
            <div className="w-16 h-4 bg-gray-300 rounded-lg"></div>
            <div className="w-12 h-4 bg-gray-300 rounded-lg mt-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const LoaderForCardWithSingleSubCard = () => {
  return (
    <div className="border-[1.5px] px-2 py-2 rounded-lg col-span-1 bg-white animate-pulse">
      <div>
        <div className="flex flex-col items-start text-start justify-start">
          <div className="h-4 bg-gray-300 rounded-lg mb-2"></div>
          <div className="h-6 bg-gray-300 rounded-lg"></div>
        </div>
        <div className="flex flex-col items-end text-center justify-end">
          <div className="flex items-center gap-1 text-red-600">
            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
            <div className="w-10 h-4 bg-gray-300 rounded-lg"></div>
          </div>
          <div className="w-8 h-4 bg-gray-300 rounded-lg mt-2"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2 mt-3">
        <div className="border-[1.5px] shadow-lg p-2 rounded-lg animate-pulse">
          <div className="flex flex-col items-start text-center justify-start">
            <div className="h-4 bg-gray-300 rounded-lg mb-2"></div>
            <div className="h-6 bg-gray-300 rounded-lg"></div>
          </div>
          <div className="flex flex-col items-end text-end justify-end">
            <div className="w-16 h-4 bg-gray-300 rounded-lg"></div>
            <div className="w-12 h-4 bg-gray-300 rounded-lg mt-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
