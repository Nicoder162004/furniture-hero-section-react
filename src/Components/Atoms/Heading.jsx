import React from 'react';

const Heading = ({ children }) => {
  return (
    <h1 className="text-4xl  font-bold mb-6 text-gray-900">
      {children}
    </h1>
  );
};

export default Heading;
