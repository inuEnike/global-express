import Footer from "@/components/shared/Footer";
import Nav from "@/components/shared/Nav/Nav";
import React from "react";
import { GiTrackedRobot } from "react-icons/gi";
import { SiInstatus } from "react-icons/si";

const Dashboard = () => {
  let isStatusIsHold = true;
  return (
    <div>
      <Nav />
      <div className="md:h-[100vh] w-full flex justify-center flex-col items-center my-7">
        {/* Header */}
        <div className="flex items-center gap-3 py-5">
          <GiTrackedRobot className="text-5xl " />
          <h2 className="text-3xl uppercase tracking-wider font-bold">
            Parcel Tracking
          </h2>
        </div>
        {isStatusIsHold === true && (
          <div className="text-center text-red-600 font-bold mx-2">
            <p>
              Goods are on hold, Please contact johnkuk@gmail.com for me info
            </p>
          </div>
        )}

        {/* Tracking ID + Status */}
        <div className="py-5">
          <div className="flex items-center gap-3 text-center justify-center w-full pb-5 uppercase font-bold ">
            <h3 className="">TRACKING ID</h3>
            <p className="">Esk92028262927</p>
          </div>
          <div className="bg-foreground rounded-sm text-background my-5 py-5 px-3 w-full flex justify-between">
            <div className="flex items-center gap-3">
              <SiInstatus className="text-xl" />
              <h2 className="font-bold uppercase text-xl">Status</h2>
            </div>
            <p className="font-bold uppercase text-xl text-red-500">Pending</p>
          </div>
          <h3 className="md:text-3xl text-2xl text-center font-bold uppercase">
            Shipment Information
          </h3>
        </div>

        {/* Info + Map */}
        <div className="grid md:grid-cols-2 md:w-[50%] md:mx-auto mx-3 rounded-md justify-center items-stretch gap-3">
          {/* Left side (Info) */}
          <div className="bg-foreground text-background p-5 flex flex-col rounded-md">
            <ul className="text-left flex flex-col gap-7 px-2 flex-1">
              <li>
                Origin:{" "}
                <span className="font-bold tracking-wide">United States</span>
              </li>
              <li>
                Destination:{" "}
                <span className="font-bold tracking-wide">Abuja</span>
              </li>
              <li>
                Expected Delivery Date:{" "}
                <span className="font-bold tracking-wide">Processing</span>
              </li>
              <li>
                USPS: <span className="font-bold tracking-wide">2123232</span>
              </li>
              <li>
                Shipping description:{" "}
                <span className="font-bold tracking-wide">
                  Carton box from United Kingdom to United State
                </span>
              </li>
              <li>
                Service mode:{" "}
                <span className="font-bold tracking-wide">Air</span>
              </li>
            </ul>
          </div>

          {/* Right side (Map) */}
          <div className="h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.428704804166!2d6.266635475901404!3d7.076193816492102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10467d8c705f8293%3A0xd70f13630fe3575e!2sPAPARAZZI%20COMMUNICATION!5e0!3m2!1sen!2sng!4v1756981674949!5m2!1sen!2sng"
              className="w-full h-full rounded-md"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="my-7">
          <p className="md:text-3xl text-2xl font-bold uppercase text-center">
            Shipper Information
          </p>
          <div className="bg-btn md:w-full rounded-md md:mx-auto mx-3 py-5 px-3 my-4">
            <ul className="flex justify-between px-6 gap-7 flex-wrap">
              <li>
                Shipper Name:{" "}
                <span className="font-bold tracking-wide">Jeremy Umar</span>
              </li>
              <li>
                Phone Number:{" "}
                <span className="font-bold tracking-wide">09032384838</span>
              </li>
              <li>
                Address:{" "}
                <span className="font-bold tracking-wide">09032384838</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
