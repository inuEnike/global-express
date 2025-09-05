"use client";
import React from "react";
import { GiClosedBarbute } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Button from "../Button";
import Logo from "../Logo";
import { useAppContext } from "@/context/AppContext";
import MobileNav from "./MobileNav";
import Link from "next/link";

const Nav = () => {
  const { handleToggleNav, navOpen } = useAppContext();
  return (
    <>
      <div className="flex md:justify-evenly justify-between items-center py-4 border-b border-gray-600 mx-5 md:mx-auto ">
        <Logo />
        <ul className="md:flex items-center gap-14 font-light text-sm uppercase hidden">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link href="/#about">ABout</Link>
          </li>
          <li>
            <Link href="/#services">what we do</Link>
          </li>

          <Button text={"Contact Us"} cursor="pointer" />
        </ul>
        {navOpen ? (
          <button
            className="bg-btn p-2 rounded-sm md:hidden block"
            onClick={handleToggleNav}
          >
            <IoClose className="text-foreground" />
          </button>
        ) : (
          <button
            className="bg-btn p-2 rounded-sm md:hidden block"
            onClick={handleToggleNav}
          >
            <GiClosedBarbute className="text-foreground" />
          </button>
        )}
      </div>
      {navOpen && <MobileNav />}
    </>
  );
};

export default Nav;
