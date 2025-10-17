import React from "react";

const Button = ({ type = "primary", children }) => {
  const buttonClass =
    type === "primary"
      ? "px-6 py-2 bg-black rounded-full text-white hover:bg-blue-500 transition-colors duration-300 flex gap-1"
      : "px-4 py-2 text-gray-800 rounded-full hover:bg-blue-500 hover:text-white flex gap-1 items-center justify-center";

  return <button className={buttonClass}>{children}</button>;
};

export default Button;
