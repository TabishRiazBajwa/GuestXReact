import React from 'react'
import OverlappingBarChartReversed from '../overlappingBarChartReversed/overlappingBarChartReversed'
import LineChartWithTwoLabels from '../lineChart/lineChart'
import BookedAppointmentsCharts from '../bookedAppointmentsCharts/bookedAppointmentsCharts'

function ShowBody() {
  return (
    <div>   <div className=" top-[80px] w-full rounded-md mt-4 bg-[#707070] p-2 ">
    <div className="divide-y-4  ">
      <div className="  space-x-4 grid grid-cols-3  appointment-info">
        <div className="col-span-2 p-4 bg-white h-96 overflow-x-auto ">
          {/* <div className="px-10">dfsf</div> */}
          <div className="sticky z-2 -top-4 flex mb-12 items-center bg-white py-3">
            <div className="w-3/12 text-lg font-medium  text-[#1F3B59] text-start ">
              Calsification  {" "}
            </div>
            <div className="w-9/12">
              <div className="relative">
                <div className="flex  justify-between border-b border-[#979797]">
                  <div className="relative">
                    Jan
                    <span className=" absolute z-2 top-6 left-0 h-4 w-[1px] bg-[#979797] inline-block"></span>
                  </div>
                  <div className="relative">
                    FEB
                    <span className=" absolute z-2 top-6 left-2 h-4 w-[1px] bg-[#979797] inline-block"></span>
                  </div>
                  <div className="relative">
                    MAR
                    <span className=" absolute z-2 top-6 right-0 h-4 w-[1px] bg-[#979797] inline-block"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex mb-12 items-center">
            <div className="w-3/12 text-lg font-medium  text-[#1F3B59] text-start ">
              {" "}
              Voice mail
            </div>
            <div className="w-9/12">
              {" "}
              <LineChartWithTwoLabels />
              {/* Line Chart */}
            </div>
          </div>
          <div className=" flex mb-12 items-center">
            <div className="w-3/12 text-lg font-medium  text-[#1F3B59] text-start ">
              {" "}
              IVR Robo/Call{" "}
            </div>
            <div className="w-9/12">
              {" "}
              <LineChartWithTwoLabels />
              {/* Line Chart */}
            </div>
          </div>
          <div className=" flex mb-12 items-center">
            <div className="w-3/12 text-lg font-medium  text-[#1F3B59] text-start ">
              {" "}
              Vendor{" "}
            </div>
            <div className="w-9/12">
              {" "}
              <LineChartWithTwoLabels />
              {/* Line Chart */}
            </div>
          </div>
          <div className=" flex mb-12 items-center">
            <div className="w-3/12 text-lg font-medium  text-[#1F3B59] text-start ">
              {" "}
              Internal{" "}
            </div>
            <div className="w-9/12">
              {" "}
              <LineChartWithTwoLabels />
              {/* Line Chart */}
            </div>
          </div>
          <div className=" flex mb-12 items-center">
            <div className="w-3/12 text-lg font-medium  text-[#1F3B59] text-start ">
              {" "}
              Wrong Number{" "}
            </div>
            <div className="w-9/12">
              {" "}
              <LineChartWithTwoLabels />
              {/* Line Chart */}
            </div>
          </div>
          <div className=" flex mb-12 items-center">
            <div className="w-3/12 text-lg font-medium  text-[#1F3B59] text-start ">
              {" "}
              Disconnected{" "}
            </div>
            <div className="w-9/12">
              {" "}
              <LineChartWithTwoLabels />
              {/* Line Chart */}
            </div>
          </div>
          <div className=" flex mb-12 items-center">
            <div className="w-3/12 text-lg font-medium  text-[#1F3B59] text-start ">
              {" "}
              Wrong Number{" "}
            </div>
            <div className="w-9/12">
              {" "}
              <LineChartWithTwoLabels />
              {/* Line Chart */}
            </div>
          </div>
          <div className=" flex mb-12 items-center">
            <div className="w-3/12 text-lg font-medium  text-[#1F3B59] text-start ">
              {" "}
              Disconnected{" "}
            </div>
            <div className="w-9/12">
              {" "}
              <LineChartWithTwoLabels />
              {/* Line Chart */}
            </div>
          </div>
        </div>
        <div className="bg-white p-4">
          <h2 className="text-lg font-bold mb-8 text-[#1F3B59] text-start px-20">
            Total
          </h2>

          <BookedAppointmentsCharts />
        </div>
      </div>
    </div>
    <div className="pt-4">
      <div className=" pl-5 pt-4 bg-white p-2 text-xl font-bold  text-[#1F3B59] text-start ">
        {" "}
        Ravenue
      </div>
      <div className="divide-y-4 bg-white ">
        <div className="  p-4 bg-white grid grid-cols-3  items-center">
          <div className="col-span-2 pl-40  ">
            <LineChartWithTwoLabels />
          </div>
          <div className=" customer-revenue">
            {" "}
            <OverlappingBarChartReversed />
          </div>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default ShowBody