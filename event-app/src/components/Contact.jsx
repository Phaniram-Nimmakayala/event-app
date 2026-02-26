import React from "react";
import axios from "axios";
import { useState } from "react";

const Contact = () => {

  const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: ""
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  await axios.post(
    "https://event-app-backend-nn0z.onrender.com/api/events/feedback",
    formData
  );

  alert("Message sent successfully");

  setFormData({
    name:"",
    email:"",
    message:""
  });
};

  return (
    <section
      id="contact"
      className="bg-gray-100 py-24 flex justify-center"
    >
      <div className="max-w-6xl w-full px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#fd6716] tracking-widest font-semibold">
            CONTACT
          </p>

          <h2 className="text-5xl font-bold text-gray-800">
            Get In Touch
          </h2>

          <p className="text-gray-600 mt-4">
            Have questions about events or registrations?
            Reach out to us anytime.
          </p>
        </div>

        {/* Contact Card */}
        <div className="
        bg-white
        rounded-2xl
        shadow-2xl
        p-10
        md:p-14
        max-w-3xl
        mx-auto
        ">

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name */}
            <div>
              <label className="text-gray-700 font-medium">
                Name
              </label>

              <input
                type="text"
                name="name"
value={formData.name}
onChange={handleChange}
                placeholder="Enter your name"
                className="
                w-full mt-2 p-4
                border rounded-lg
                outline-none
                focus:border-[#fd6716]
                focus:ring-2
                focus:ring-[#fd6716]/30
                transition
                "
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-gray-700 font-medium">
                Email
              </label>

              <input
                type="email"
               name="email"
value={formData.email}
onChange={handleChange}
                placeholder="Enter your email"
                className="
                w-full mt-2 p-4
                border rounded-lg
                outline-none
                focus:border-[#fd6716]
                focus:ring-2
                focus:ring-[#fd6716]/30
                transition
                "
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-gray-700 font-medium">
                Message
              </label>

              <textarea
                rows="5"
                name="message"
value={formData.message}
onChange={handleChange}
                placeholder="Write your message..."
                className="
                w-full mt-2 p-4
                border rounded-lg
                outline-none
                focus:border-[#fd6716]
                focus:ring-2
                focus:ring-[#fd6716]/30
                transition
                "
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="
              w-full py-4
              bg-[#fd6716]
              text-white
              font-semibold
              rounded-lg
              text-lg
              hover:scale-[1.02]
              hover:shadow-xl
              transition duration-300
              "
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;