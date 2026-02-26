import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#fd6716] text-white pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-6 grid
      grid-cols-1 md:grid-cols-2 lg:grid-cols-4
      gap-10">

        {/* Explore */}
        <div>
          <h3 className="text-xl font-bold mb-6">
            Explore
          </h3>

          <ul className="space-y-3">
            <li><a href="#home" className="footer-link">Home</a></li>
            <li><a href="#about" className="footer-link">About</a></li>
            <li><a href="#events" className="footer-link">Events</a></li>
            <li><a href="#gallery" className="footer-link">Gallery</a></li>
            <li><a href="#contact" className="footer-link">Contact</a></li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h3 className="text-xl font-bold mb-6">
            Information
          </h3>

          <ul className="space-y-3">
            <li className="footer-link">Event Booking</li>
            <li className="footer-link">Student Participation</li>
            <li className="footer-link">Technical Expo</li>
            <li className="footer-link">College Activities</li>
          </ul>
        </div>

        {/* Get Your Seat */}
        <div>
          <h3 className="text-xl font-bold mb-6">
            Get Your Seat
          </h3>

          <p className="text-white/90 leading-relaxed">
            Register and participate in various technical,
            cultural, and sports events conducted by
            Aditya Educational Institutions.
          </p>

          <a
            href="#events"
            className="
            inline-block mt-6
            bg-white text-[#fd6716]
            px-6 py-3 rounded-lg
            font-semibold
            hover:bg-gray-100
            transition
            "
          >
            Book Event
          </a>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-6">
            Have Questions?
          </h3>

          <div className="space-y-4">

            <p className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1" />
              Kakinada, Ramanayapeta
            </p>

           

            <p className="flex items-center gap-3">
              <FaEnvelope /> adityaevents@gmail.com
            </p>

          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-white/30 mt-12 pt-6 text-center">

        <p className="text-sm">
          © 2026 Aditya Educational Institutions | All Rights Reserved
        </p>

        <p className="text-sm mt-2">
          Developed by <span className="font-semibold">
            T. Chandu
          </span>
        </p>

      </div>
    </footer>
  );
};

export default Footer;