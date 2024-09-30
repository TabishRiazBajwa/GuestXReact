import { useEffect } from "react";

function useOutsideClick(ref, callback) {
  // A function that checks if the click is outside the ref element

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      // If the click is outside, call the callback function
      // console.log(111);
      callback && callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    // Remove the event listener when the component is unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}

export default useOutsideClick;
