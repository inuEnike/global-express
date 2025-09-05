import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section
      className="md:h-[100vh] not-md:my-7 flex flex-col md:w-[80%] w-full m-auto justify-center px-6 not-md:text-center "
      id="services"
    >
      <div className="flex items-center jusitfy-center gap-10 w-full not-md:flex-col  text-foreground">
        {/* Image Section */}
        <div className="flex-1 relative w-[100%] h-[100%] m-auto">
          <Image
            src="/hero2.jpg"
            alt="about-us"
            width={1200}
            height={800}
            priority
            className="rounded-2xl object-cover shadow-md w-full h-full"
          />
        </div>
        <div className="space-y-4 md:w-[50%] leading-10">
          <h3 className="text-lg font-semibold uppercase">Our Services</h3>
          <h2 className="text-3xl font-bold text-btn leading-snug">
            Dedicated to Smarter, Safer Transportation
          </h2>
          <p>
            {
              " At the heart of what we do is a promise to make every journey smooth, reliable, and stress-free. Over the years, we’ve grown into a trusted leader in the transportation industry, offering services that go far beyond the basics. Whether it’s moving people, packages, or entire operations, we approach each task with precision, professionalism, and care."
            }
          </p>
          <p>
            {
              " Our services are designed with flexibility in mind, meaning we adapt to the specific needs of our clients—whether you’re an individual, a growing business, or a large organization. With a strong focus on speed, safety, and convenience, we’ve created systems that ensure timely deliveries and smooth rides every time."
            }
          </p>
          <p>
            {
              " What sets us apart is our commitment to innovation. By integrating modern logistics technology with the expertise of our dedicated team, we bring efficiency and reliability to every step of the journey. From first-mile to last-mile delivery, from local trips to broader networks, our mission remains the same: delivering excellence you can count on."
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
