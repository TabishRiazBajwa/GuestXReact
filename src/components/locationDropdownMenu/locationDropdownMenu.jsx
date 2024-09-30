import { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";

const SimpleDropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };


  const handleMenuItemClick = (item) => {
  
  };

  return (
    <div className="relative">
      <button onClick={handleButtonClick}>
        <span className="sr-only">Open options</span>
        <FaEllipsisV className="h-5 w-5" aria-hidden="true" />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => handleMenuItemClick("Account settings")}
            >
              Account settings
            </button>
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => handleMenuItemClick("Support")}
            >
              Support
            </button>
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => handleMenuItemClick("License")}
            >
              License
            </button>
            <button
              className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => {
           
                localStorage.removeItem("user");
                localStorage.removeItem("token");
           
                window.location.reload();
              }}
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimpleDropdownMenu;
