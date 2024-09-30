import React, { useState, useEffect } from "react";

import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import TickerItem from "../tickerItem/tickerItem";

export default function ReportTicker() {
  const items = [
    <TickerItem
      title="Revenue"
      leftValue={"$ 20,000,000"}
      rightValue={"2.5%"}
      icon={<ArrowCircleDownIcon />}
      color={"text-red-500"}
    />,

    <TickerItem
      title="Car Count"
      leftValue={"200"}
      rightValue={"2.5%"}
      icon={<ArrowCircleDownIcon />}
      color={"text-red-500"}
    />,
    <TickerItem
      title="Customers"
      leftValue={"200"}
      rightValue={"2.5%"}
      icon={<ArrowCircleUpIcon />}
      color={"text-green-500"}
    />,
    <TickerItem
      title="ARO"
      leftValue={"500"}
      rightValue={"2.5%"}
      icon={<ArrowCircleUpIcon />}
      color={"text-green-500"}
    />,
    <TickerItem
      title="Scored Calls"
      leftValue={"4,000"}
      rightValue={"2.5%"}
      icon={<ArrowCircleDownIcon />}
      color={"text-red-500"}
    />,
    <TickerItem
      title="Booked Appt %"
      leftValue={"55%"}
      rightValue={"2.5%"}
      iicon={<ArrowCircleDownIcon />}
      color={"text-red-500"}
    />,
    <TickerItem
      title="Show Rate"
      leftValue={"55 %"}
      rightValue={"2.5%"}
      icon={<ArrowCircleDownIcon />}
      color={"text-red-500"}
    />,
    <TickerItem
      title="No Show Rate"
      leftValue={"55 %"}
      rightValue={"2.5%"}
      icon={<ArrowCircleDownIcon />}
      color={"text-red-500"}
    />,
    <TickerItem
      title="Unable to agree to Appt / Drop off Time"
      leftValue={"550"}
      rightValue={"2.5%"}
      icon={<ArrowCircleDownIcon />}
      color={"text-red-500"}
    />,
  ];

  const [galleryItems, setGalleryItems] = useState(
    items.map((i) => (
      <h2 key={i} className="mr-2 w-fit ">
        {i}
      </h2>
    ))
  );

  const responsive = {
    0: { items: 1 },
    600: { items: 3 },
    1024: { items: 5 },
  };

  return (
    <div className="">
      <AliceCarousel
        mouseTrackingEnabled
        items={galleryItems}
        responsive={responsive}
        autoPlayInterval={6000}
        autoPlayDirection="rtl"
        autoPlay={true}
        // fadeOutAnimation={false}
        disableSlideInfo={true}
        mouseDragEnabled={true}
        playButtonEnabled={true}
        disableAutoPlayOnAction={true}
        infinite={true}
        disableDotsControls
        disableButtonsControls
        animationType={"fadeout"}
        autoWidth
      />
    </div>
  );
}
