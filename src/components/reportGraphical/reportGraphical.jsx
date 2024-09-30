import React, { useState } from "react";
import { NumericFormat } from "react-number-format";

import ReportGraphicalLineGraph from "../reportLineGraph/reportGraphicalLineGraph";

// import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import IconIncrement from "../iconIncrement/iconIncrement";
import IconDecrement from "../iconDecrement/iconDecrement";

export default function ReportGraphical({ data }) {
  const [rangeText, setRangeText] = useState("Oct - Dec");

  const MONTHSNAMES = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const LabelsArr = data?.map((item) => MONTHSNAMES[item.MonthNumber]);
  const RevenueArr = data?.map((item) => item.Revenue);
  const CarCountArr = data?.map((item) => item.CarCount);
  const CustomerArr = data?.map((item) => item.TotalCustomer);
  const AROArr = data?.map((item) => item.ARO);
  return (
    <>
      <div className="w-full flex flex-col gap-16">
        <div className="w-full h-max flex flex-row  justify-center ">
          <ReportGraphicalLineGraph
            title={"Revenue"}
            // data={data}
            months={LabelsArr}
            data={RevenueArr}
            currentPeriodValue={
              <NumericFormat
                value={1205000}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
                prefix={"$"}
              />
            }
            rangeValue={
              <NumericFormat
                value={1000000}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
                prefix={"$"}
              />
            }
            rangeText={rangeText}
            percentageChange={
              <NumericFormat
                value={2.5}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
                suffix={"%"}
              />
            }
            percentageChangeIcon={<IconIncrement />}
          />
        </div>
        <div className="w-full  flex flex-row  justify-center ">
          <ReportGraphicalLineGraph
            title={"Car Count"}
            months={LabelsArr}
            data={CarCountArr}
            currentPeriodValue={
              <NumericFormat
                value={200}
                displayType={"text"}
                thousandSeparator={true}
              />
            }
            rangeValue={
              <NumericFormat
                value={150}
                displayType={"text"}
                thousandSeparator={true}
              />
            }
            rangeText={rangeText}
            percentageChange={
              <NumericFormat
                value={2.5}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
                suffix={"%"}
              />
            }
            percentageChangeIcon={<IconDecrement />}
          />
        </div>
        <div className="w-full h-max flex flex-row  justify-center ">
          <ReportGraphicalLineGraph
            title={"Customers"}
            months={LabelsArr}
            data={CustomerArr}
            currentPeriodValue={
              <NumericFormat
                value={200}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
              />
            }
            rangeValue={
              <NumericFormat
                value={300}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
              />
            }
            rangeText={rangeText}
            percentageChange={
              <NumericFormat
                value={2.5}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
                suffix={"%"}
              />
            }
            percentageChangeIcon={<IconIncrement />}
          />
        </div>
        <div className="w-full h-max flex flex-row  justify-center ">
          <ReportGraphicalLineGraph
            title={"ARO"}
            months={LabelsArr}
            data={AROArr}
            currentPeriodValue={
              <NumericFormat
                value={500}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
              />
            }
            rangeValue={
              <NumericFormat
                value={600}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
              />
            }
            rangeText={rangeText}
            percentageChange={
              <NumericFormat
                value={2.5}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
                suffix={"%"}
              />
            }
            percentageChangeIcon={<IconIncrement />}
          />
        </div>
        {/* Dummy data > not coming in api yet  */}
        <div className="w-full h-max flex flex-row  justify-center ">
          <ReportGraphicalLineGraph
            title={"Scored calls"}
            months={LabelsArr}
            data={RevenueArr}
            currentPeriodValue={
              <NumericFormat
                value={4000}
                displayType={"text"}
                thousandSeparator={true}
              />
            }
            rangeValue={
              <NumericFormat
                value={2000}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
              />
            }
            rangeText={rangeText}
            percentageChange={
              <NumericFormat
                value={3.5}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
                suffix={"%"}
              />
            }
            percentageChangeIcon={<IconDecrement />}
          />
        </div>
        <div className="w-full h-max flex flex-row  justify-center ">
          <ReportGraphicalLineGraph
            title={"Appointment Rate"}
            months={LabelsArr}
            data={RevenueArr}
            currentPeriodValue={
              <NumericFormat
                value={55}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
                suffix="%"
              />
            }
            rangeValue={
              <NumericFormat
                value={35}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
                suffix="%"
              />
            }
            rangeText={rangeText}
            percentageChange={
              <NumericFormat
                value={2.5}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
                suffix={"%"}
              />
            }
            percentageChangeIcon={<IconDecrement />}
          />
        </div>
        <div className="w-full h-max flex flex-row  justify-center ">
          <ReportGraphicalLineGraph
            title={"Show Rate"}
            months={LabelsArr}
            data={RevenueArr}
            currentPeriodValue={
              <NumericFormat
                value={55}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
                suffix="%"
              />
            }
            rangeValue={
              <NumericFormat
                value={35}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
                suffix="%"
              />
            }
            rangeText={rangeText}
            percentageChange={
              <NumericFormat
                value={2.5}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
                suffix={"%"}
              />
            }
            percentageChangeIcon={<IconDecrement />}
          />
        </div>
        <div className="w-full h-max flex flex-row  justify-center ">
          <ReportGraphicalLineGraph
            title={"No Show rate"}
            months={LabelsArr}
            data={RevenueArr}
            currentPeriodValue={
              <NumericFormat
                value={55}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
                suffix="%"
              />
            }
            rangeValue={
              <NumericFormat
                value={35}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
                suffix="%"
              />
            }
            rangeText={rangeText}
            percentageChange={
              <NumericFormat
                value={2.5}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
                suffix={"%"}
              />
            }
            percentageChangeIcon={<IconDecrement />}
          />
        </div>
        <div className="w-full h-max flex flex-row  justify-center ">
          <ReportGraphicalLineGraph
            title={"Unclassified Appointments"}
            months={LabelsArr}
            data={RevenueArr}
            currentPeriodValue={
              <NumericFormat
                value={550}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
              />
            }
            rangeValue={
              <NumericFormat
                value={350}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
              />
            }
            rangeText={rangeText}
            percentageChange={
              <NumericFormat
                value={2.5}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
                suffix={"%"}
              />
            }
            percentageChangeIcon={<IconDecrement />}
          />
        </div>
        <div className="w-full h-max flex flex-row  justify-center ">
          <ReportGraphicalLineGraph
            title={"Unable To Agree to Appointment / Drop Off Time"}
            months={LabelsArr}
            data={RevenueArr}
            currentPeriodValue={
              <NumericFormat
                value={550}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
              />
            }
            rangeValue={
              <NumericFormat
                value={350}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
              />
            }
            rangeText={rangeText}
            percentageChange={
              <NumericFormat
                value={2.5}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
                suffix={"%"}
              />
            }
            percentageChangeIcon={<IconDecrement />}
          />
        </div>
        <div className="w-full h-max flex flex-row  justify-center ">
          <ReportGraphicalLineGraph
            title={"Agent Calling Back With Price"}
            months={LabelsArr}
            data={RevenueArr}
            currentPeriodValue={
              <NumericFormat
                value={550}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
              />
            }
            rangeValue={
              <NumericFormat
                value={350}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
              />
            }
            rangeText={rangeText}
            percentageChange={
              <NumericFormat
                value={2.5}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
                suffix={"%"}
              />
            }
            percentageChangeIcon={<IconDecrement />}
          />
        </div>
        <div className="w-full h-max flex flex-row  justify-center ">
          <ReportGraphicalLineGraph
            title={"Tow In"}
            months={LabelsArr}
            data={RevenueArr}
            currentPeriodValue={
              <NumericFormat
                value={550}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
              />
            }
            rangeValue={
              <NumericFormat
                value={350}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
              />
            }
            rangeText={rangeText}
            percentageChange={
              <NumericFormat
                value={2.5}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
                suffix={"%"}
              />
            }
            percentageChangeIcon={<IconDecrement />}
          />
        </div>
      </div>
    </>
  );
}
