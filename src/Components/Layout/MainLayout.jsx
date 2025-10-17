import React from "react";
import Navbar from "../Molecules/Navbar";

const MainLayout = ({children}) => {
  return (
    <div className='bg-white h-screen w-full flex-col px-18 py-6'>
      <Navbar/>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
