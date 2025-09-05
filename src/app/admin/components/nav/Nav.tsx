import Logo from "@/components/shared/Logo";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoAirplaneSharp } from "react-icons/io5";

const Nav = () => {
  return (
    <div className="bg-foreground text-background rounded-b-md py-4 md:px-5 px-3 fixed w-full">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-[#00d38c] rounded-full p-1">
            <IoAirplaneSharp className="text-[#fff] text-xl md:text-2xl" />
          </div>
          <h3 className="md:text-2xl text-xl font-medium">
            Xpress Global Delivery
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <p className="md:text-lg text-md">Hello George</p>
          <FaUserCircle className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
