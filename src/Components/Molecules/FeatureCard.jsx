import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg text-center hover:shadow-md transition">
      <div className="text-3xl mb-3">{icon}</div>
      <h4 className="font-semibold mb-2 text-lg">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
