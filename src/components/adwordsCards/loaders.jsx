export const CallsandApptsLoader = () => {
  return (
    <div className="border-[1.5px] px-2 py-2 rounded-lg h-44 col-span-1 bg-white animate-pulse">
      <div>
        <div className="flex flex-col">
          <div className="h-4 bg-gray-300 rounded-lg mb-2"></div>
          <div className="flex justify-between">
            <div className="h-6 bg-gray-300 rounded-lg"></div>
            <div className={`flex items-center gap-1 ${"text-red-600"} `}>
              <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              <div className="w-10 h-4 bg-gray-300 rounded-lg"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end text-center justify-end">
          <div className="w-8 h-4 bg-gray-300 rounded-lg"></div>
        </div>
      </div>
      <div className="border-[1.5px] shadow-lg px-2 rounded-lg  animate-pulse">
        <div className="flex flex-col items-start text-center justify-start">
          <div className="h-4 bg-gray-300 rounded-lg mb-2"></div>
          <div className="h-6 bg-gray-300 rounded-lg"></div>
        </div>
        <div className="flex flex-col items-end text-end justify-end mb-2">
          <div className="w-16 h-4 bg-gray-300 rounded-lg"></div>
          <div className="w-12 h-4 bg-gray-300 rounded-lg mt-2"></div>
        </div>
      </div>
    </div>
  );
};
export const RevenueLoader = () => {
  return (
    <div className="border-[1.5px] px-2 py-2 rounded-lg col-span-1 bg-white animate-pulse">
      <div>
        <div className="flex flex-col items-start text-center justify-start">
          <div className="h-4 bg-gray-300 rounded-lg mb-2"></div>
          <div className="h-6 bg-gray-300 rounded-lg"></div>
        </div>
        <div className="flex flex-col items-end text-center justify-end">
          <div className={`flex items-center gap-1 ${"text-red-600"} `}>
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
export const TotalCustomersLoader = () => {
  return (
    <div className="border-[1.5px] px-2 py-2 rounded-lg col-span-2 bg-white animate-pulse">
      <div>
        <div className="flex flex-col items-start text-center justify-start">
          <div className="h-4 bg-gray-300 rounded-lg mb-2"></div>
          <div className="h-6 bg-gray-300 rounded-lg"></div>
        </div>
        <div className="flex flex-col items-end text-center justify-end">
          <div className={`flex items-center gap-1 ${"text-red-600"} `}>
            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
            <div className="w-10 h-4 bg-gray-300 rounded-lg"></div>
          </div>
          <div className="w-8 h-4 bg-gray-300 rounded-lg mt-2"></div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-8">
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
