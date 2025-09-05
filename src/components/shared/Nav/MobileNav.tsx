import React from "react";
import Button from "../Button";

const MobileNav = () => {
  return (
    <div className=" w-full text-foreground md:hidden text-center py-7">
      {" "}
      <ul className="flex flex-col items-center gap-14 font-bold text-sm uppercase ">
        <li>Home</li>
        <li>ABout</li>
        <li>what we do</li>

        <Button text={"Contact Us"} cursor="pointer" />
      </ul>
    </div>
  );
};

export default MobileNav;
