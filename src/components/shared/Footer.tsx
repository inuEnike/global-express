import React from "react";
import Logo from "./Logo";
import Button from "./Button";
import { IoLocation, IoMail } from "react-icons/io5";
import { GiPhone } from "react-icons/gi";

const Footer = () => {
  let getDateYear: any = new Date();
  let getYear = getDateYear.getFullYear();
  console.log(getYear);
  return (
    <div className="bg-footer text-background md:h-[50vh] flex flex-col justify-center items-center w-full px-8">
      <div className="grid md:grid-cols-2 justify-between items-center not-md:gap-7">
        <div className="py-5">
          <Logo />
          <p className="py-3 font-bold text-2xl text-btn">Quick Links</p>
          <ul className="uppercase text-light flex flex-col gap-5 py-3 pb-7">
            <li>Home</li>
            <li>About</li>
            <li>What we do </li>
          </ul>
          <Button text={"Contact Us"} cursor="pointer" />
        </div>
        <div className="">
          <h2 className="font-bold text-2xl text-btn">Get In Touch</h2>
          <div className="flex items-center gap-3">
            <IoLocation size={25} />
            <p className="py-3">
              94 High Street WESTERN CENTRAL LONDON WC37 4WP?
            </p>
          </div>
          <div className="">
            <a
              href="mailto:customercare@expressglobaldeliveryuk.com"
              className="flex items-center gap-3"
            >
              <IoMail size={25} />
              <p className="py-3">customercare@expressglobaldeliveryuk.com</p>
            </a>
          </div>
          <div className="">
            <a href="tel:+44 7529 655131 " className="flex items-center gap-3">
              <GiPhone size={25} />
              <p className="py-3"> +44 7529 655131 </p>
            </a>
          </div>
        </div>
      </div>
          <p className="py-5 text-[#6b6f9a9c] text-center">
            Copyright {getYear} Wah Global Logistics
          </p>
    </div>
  );
};

export default Footer;
