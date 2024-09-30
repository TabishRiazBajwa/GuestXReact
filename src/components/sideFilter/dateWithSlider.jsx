import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { format } from "date-fns";

const DateRangeSlider = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [sliderValue, setSliderValue] = useState([0, 100]);

  const handleSliderChange = (event, newValue) => {
    const start = new Date(startDate);
    start.setDate(startDate.getDate() + (newValue[0] / 100) * 30);
    const end = new Date(startDate);
    end.setDate(startDate.getDate() + (newValue[1] / 100) * 30);
    setStartDate(start);
    setEndDate(end);
    setSliderValue(newValue);
  };

  const handleDateChange = (event) => {
    const date = new Date(event.target.value);
    const diff = (date.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);
    setStartDate(date);
    const newSliderValue = sliderValue.map((val, index) => {
      if (index === 0) {
        return val + (diff / 30) * 100;
      } else {
        return val + (diff / 30) * 100;
      }
    });
    setSliderValue(newSliderValue);
  };

  const handleEndDateChange = (event) => {
    const date = new Date(event.target.value);

    setEndDate(date);
  };

  return (
    <div className="w-full p-4">
      <input
        label="Start Date"
        type="date"
        value={format(startDate, "MMM d, yyyy")}
        onChange={handleDateChange}
        className="hidden"

        // renderInput={(params) => <input {...params.inputProps} />}/
      />
      <input
        className="hidden"
        type="date"
        label="End Date"
        value={format(endDate, "MMM d, yyyy")}
        onChange={handleEndDateChange}
        // renderInput={(params) => <input {...params.inputProps} />}
      />

      <Slider
        value={sliderValue}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
      <div className="flex justify-between">
        <div>{format(startDate, "MMM d, yyyy")}</div>
        <div>{format(endDate, "MMM d, yyyy")}</div>
      </div>
    </div>
  );
};

export default DateRangeSlider;
