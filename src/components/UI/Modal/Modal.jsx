import React, { useEffect, useRef } from "react";

const Modal = ({ open, children, onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && modalRef.current === event.target) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!open) return null;

  return (
    <div
      ref={modalRef}
      className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50 "
      onClick={onClose}
    >
      <div
        // ref={modalRef}
        className="bg-white p-6 rounded shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
