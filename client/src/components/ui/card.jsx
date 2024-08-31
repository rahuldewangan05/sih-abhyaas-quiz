import React from 'react';

// Basic Card component
const Card = ({ children, className }) => (
  <div className={`bg-white shadow-md rounded-lg ${className}`}>
    {children}
  </div>
);

// Card Header component
const CardHeader = ({ children, className }) => (
  <div className={`border-b p-4 ${className}`}>
    {children}
  </div>
);

// Card Content component
const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
);

// Card Title component
const CardTitle = ({ children, className }) => (
  <h2 className={`text-xl font-semibold ${className}`}>
    {children}
  </h2>
);

export { Card, CardContent, CardHeader, CardTitle };
