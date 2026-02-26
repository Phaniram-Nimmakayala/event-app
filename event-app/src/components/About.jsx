import React from "react";
import aboutImg from "../assets/about.png";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Image */}
        <div className="overflow-hidden rounded-2xl shadow-2xl group">
          <img
            src={aboutImg}
            alt="about"
            className="w-full h-full object-cover
            transition duration-700
            group-hover:scale-105"
          />
        </div>

        {/* Right Content */}
        <div>

          <p className="text-[#fd6716] font-semibold tracking-widest mb-4">
            ABOUT ADITYA EVENTS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            College Event <br />
            Management System
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed">
            The College Event Management System provides a digital platform
            where students can explore, register, and participate in technical,
            cultural, and sports events conducted by Aditya Educational
            Institutions. It simplifies event organization and enhances student
            engagement through a seamless online experience.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Our platform ensures smooth coordination between organizers and
            participants while delivering a modern and efficient event booking
            experience.
          </p>

        </div>

      </div>
    </section>
  );
};

export default About;
