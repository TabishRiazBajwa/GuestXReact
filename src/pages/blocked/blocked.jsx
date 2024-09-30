import React from "react";
import { Link } from "react-router-dom"; // Import Link component from React Router

const BlockedPage = () => {
  const handleonClick = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center">You are Blocked</h1>
      <p className="text-lg text-gray-600 mb-4">
        Please contact the administrator for further assistance.
      </p>
      {/* Use Link component to navigate to the login page */}
      {/* <Link to="/login"> */}
      <button
        onClick={handleonClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Contact Admin
      </button>
      {/* </Link> */}
    </div>
  );
};

export default BlockedPage;
