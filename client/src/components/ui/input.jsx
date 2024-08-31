import React from 'react';

const Input = ({ type, id, value, onChange, required, className, placeholder }) => (
  <input
    type={type}
    id={id}
    value={value}
    onChange={onChange}
    required={required}
    className={`border rounded-md px-3 py-2 ${className}`}
    placeholder={placeholder}
  />
);

export default Input;
