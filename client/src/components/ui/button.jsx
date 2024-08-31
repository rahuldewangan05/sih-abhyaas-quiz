import React from "react";

const Button = ({ type, className, onClick, children }) => (
  <button
    type={type}
    className={`rounded-md px-4 py-2 text-white ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
