import React from "react";
import Nav from "../../shared/Nav/Nav";
import Hero from "./Hero";
import MobileNav from "@/components/shared/Nav/MobileNav";
import { useAppContext } from "@/context/AppContext";

const Header = () => {
  const { navOpen } = useAppContext();

  return (
    <div className="hero md:h-[100vh]">
      <Nav />

      <Hero />
    </div>
  );
};

export default Header;
