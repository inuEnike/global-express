import React from "react";
import Button from "../shared/Button";

const Hero = () => {
  return (
    <div className="md:h-[80vh] flex flex-col justify-evenly conainer md:w-[80%] w-full m-auto">
      <div className="flex md:flex-row flex-col justify-evenly items-center ">
        <div className="md:w-[50%] not-md:text-center px-5">
          <p className="text-btn py-5">Precision. Performance. Delivery.</p>
          <h1 className="md:text-4xl text-5xl font-bold">
            Where Safety Meets Speed
          </h1>{" "}
          <p className="py-5 leading-10">
            Logistics isn’t just about moving products — it’s about building
            trust. At Global Express Delivery UK, we combine affordability,
            speed, and reliability to create shipping solutions that work for
            you. With more than 25 years of experience, we’ve become the
            smarter, faster alternative to UPS Ground, helping businesses expand
            to more locations without breaking the bank.
          </p>
          <Button text={"Get Started"} />
        </div>
        <div className="flex items-center gap-10 p-7 bg-foreground md:w-[40%] w-[90%] my-5 rounded-md">
          <form className="flex flex-col text-background w-full">
            <label htmlFor="" className="">
              Tracking ID:
            </label>
            <input
              type="text"
              className="shadow w-full p-3 my-5 rounded-sm"
              placeholder="Input your Tracking Id"
            />
            <Button text="Track your goods" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
