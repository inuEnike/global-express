import React from "react";
import { IoAirplaneSharp } from "react-icons/io5";

const Logo = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-[#00d38c] rounded-full p-1">
        <IoAirplaneSharp size={30} className="text-[#fff] " />
      </div>
      <h3 className="md:text-3xl text-xl font-bold">Xpress Global Delivery</h3>
    </div>
  );
};

export default Logo;
