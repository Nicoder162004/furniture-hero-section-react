import React from "react";
import Pages from "../Molecules/Pages";

const MenuList = () => {
  const menu_list = ["Collection", "Service", "Project", "Pricing", "About"];

  return (
    <div className="flex gap-10 text-gray-600">
      {menu_list.map((item, index) => (
        <Pages key={index} title={item} />
      ))}
    </div>
  );
};

export default MenuList;
