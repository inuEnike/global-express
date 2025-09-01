import Image from "next/image";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoAirplaneSharp } from "react-icons/io5";
import Button from "../shared/Button";

const Nav = () => {
  return (
    <div className="flex md:justify-evenly justify-between items-center py-4 border-b border-gray-600 mx-5 md:mx-auto ">
      <div className="flex items-center gap-4">
        <div className="bg-[#00d38c] rounded-full p-1">
          <IoAirplaneSharp size={30} className="text-[#fff] " />
        </div>
        <h3 className="md:text-3xl text-xl font-bold">
          Global Express Delivery
        </h3>
      </div>
      <ul className="md:flex items-center gap-14 font-light text-sm uppercase hidden">
        <li>Home</li>
        <li>ABout</li>
        <li>what we do</li>

        <Button text={"Contact Us"} />
      </ul>
      <button className="bg-btn p-2 rounded-sm md:hidden block">
        <GiHamburgerMenu className="text-foreground" />
      </button>
    </div>
  );
};

export default Nav;
