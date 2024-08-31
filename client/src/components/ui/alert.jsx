import React from 'react';

const Alert = ({ children }) => (
  <div className="p-4 text-red-700 bg-red-100 border border-red-300 rounded-md">
    {children}
  </div>
);

const AlertDescription = ({ children }) => (
  <p>{children}</p>
);

export { Alert, AlertDescription };
