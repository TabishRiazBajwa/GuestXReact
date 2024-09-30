import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "./load.json"; // replace with your animation path

export default function MainLoader() {
  const animationContainer = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      animationData: animationData,
      loop: true, // Set to true if you want the animation to loop
      autoplay: true, // Set to false if you want to manually start the animation
    });
  }, []);
  return (
    <div className="mx-auto h-[39vw] w-full flex items-center justify-center  ">
      <div className="w-96 h-48 drop-shadow-lg rounded flex justify-center items-center">
        <div ref={animationContainer}></div>
        {/* <CircularProgress /> */}
      </div>
    </div>
  );
}
