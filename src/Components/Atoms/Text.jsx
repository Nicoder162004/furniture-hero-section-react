// src/components/atoms/Text.jsx
import React from 'react';

const Text = ({ children }) => {
  return (
    <p className="text-gray-600 leading-relaxed text-justify">
      {children}
    </p>
  );
};

export default Text;
