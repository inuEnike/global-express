import Button from "@/components/shared/Button";
import Image from "next/image";
import React from "react";

const Signin = () => {
  return (
    <div className="flex not-md:flex-col">
      <div className="md:w-[40%] w-full h-screen flex flex-col justify-center items-center">
        <h2 className="md:text-3xl text-2xl font-extrabold uppercase tracking-widest">
          Admin Login
        </h2>
        <form action="" className="py-7 w-full px-5">
          <div className="flex flex-col my-3">
            <label htmlFor="name" className="py-3 font-bold">
              Name:
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="focus:outline-white text-foreground outline-white outline py-3 px-2 rounded-md"
            />
          </div>
          <div className="flex flex-col my-3 mb-5">
            <label htmlFor="name" className="py-3 font-bold">
              Password:
            </label>
            <input
              type="text"
              placeholder="Enter your password"
              className="focus:outline-white text-foreground outline-white outline py-3 px-2 rounded-md"
            />
          </div>
          <Button text="SIGNIN" cursor="pointer" />
        </form>
      </div>
      <div className="not-md:hidden w-[60%] m-auto signinImage"></div>
    </div>
  );
};

export default Signin;
