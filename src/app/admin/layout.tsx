import React, { ReactNode } from "react";
import Nav from "./components/nav/Nav";
import SideNav from "./components/nav/SideNav";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Nav />
      <div className="h-screen md:pt-15 pt-12 flex">

      <SideNav/>
      <main className="md:ml-[20%] w-full px-5">

      {children}
      </main>
      </div>
    </div>
  );
};

export default layout;
