import Image from "next/image";
import React from "react";

const SolutionCard = () => {
  return (
    <div className="md:h-[100vh] justify-center flex flex-col md:w-[70%] m-auto not-md:mx-4  ">
      <div className="text-center font-extrabold text-btn md:text-3xl text-2xl uppercase">
        <h3>Our Core Features</h3>
      </div>
      <div className="flex not-md:flex-col w-full mb-15 mt-3 justify-center gap-5 items-center ">
        <div className="bg-foreground text-background md:w-[100%] rounded-md">
          <Image
            src="/hero2.jpg"
            alt="about-us"
            width={1200}
            height={800}
            priority
            className="object-cover shadow-md rounded-t-md"
          />
          <div className="p-3">
            <h2 className="text-2xl font-bold py-3">
              International Procurement Expertise
            </h2>
            <p className="text-left font-light tracking-wide">
              We support borrower countries and companies that are involved in
              international procurement to structure their procurement systems,
              establish project management units, assist clients in drafting
              bidding documents, training operations, and procurement staff. We
              are the experts in what we do.
            </p>
          </div>
        </div>

        <div className="bg-foreground text-background md:w-[100%] rounded-md">
          <Image
            src="/hero3.jpg"
            alt="about-us"
            width={1200}
            height={800}
            priority
            className="object-cover shadow-md rounded-t-md"
          />
          <div className="p-3">
            <h2 className="text-2xl font-bold py-3">
              Goods and Equipment Supply
            </h2>
            <p className="text-left font-light tracking-wide">
              We are the providers of goods and equipment in various sectors
              such as Health, Transport, Education, Water, Agriculture, and
              ensure the most mutually-beneficial allocation of the required
              resources by the borrower countries and all our clients for all
              emergency and non-emergency projects.
            </p>
          </div>
        </div>
        <div className="bg-foreground text-background md:w-[100%] rounded-md">
          <Image
            src="/hero4.webp"
            alt="about-us"
            width={1200}
            height={800}
            priority
            className="object-cover shadow-md rounded-t-md"
          />
          <div className="p-3">
            <h2 className="text-2xl font-bold py-3">
              Goods and Equipment Supply
            </h2>
            <p className="text-left font-light tracking-wide">
              We are the providers of goods and equipment in various sectors
              such as Health, Transport, Education, Water, Agriculture, and
              ensure the most mutually-beneficial allocation of the required
              resources by the borrower countries and all our clients for all
              emergency and non-emergency projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;
