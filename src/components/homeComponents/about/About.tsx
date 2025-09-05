import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      className="md:h-[100vh] not-md:my-7 flex flex-col md:w-[80%] w-full m-auto justify-center px-6 not-md:text-center "
      id="about"
    >
      <div className="flex items-center jusitfy-center gap-10 w-full not-md:flex-col  text-foreground">
        <div className=" md:w-[50%] w-full leading-10">
          <h3 className="text-lg font-semibold uppercase">
            The Journey So Far
          </h3>
          <h2 className="text-3xl font-bold text-btn leading-snug">
            Committed to Seamless Transportation
          </h2>
          <p className="">
            We’ve built a strong reputation over the years as a trusted name in
            transportation, delivering solutions that are not only reliable but
            also tailored to meet the unique needs of every client we serve. Our
            commitment goes beyond simply moving people or goods from one point
            to another—we prioritize speed, safety, and convenience at every
            stage of the journey. By combining modern technology, a professional
            team, and a customer-first approach, we’ve been able to consistently
            exceed expectations. From individual clients to large-scale
            businesses, we remain dedicated to ensuring every trip is seamless,
            efficient, and backed by the assurance of quality service.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-1 relative w-[100%] h-[100%] m-auto">
          <Image
            src="/hero.jpg"
            alt="about-us"
            width={1200}
            height={800}
            priority
            className="rounded-2xl object-cover shadow-md w-full h-full"
          />
          <div className="absolute bottom-4 left-4 bg-btn text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium">
            Over 25+ Years Experience
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
