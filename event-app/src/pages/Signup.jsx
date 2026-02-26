import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    sucNo: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/signup",
        formData
      );

      alert(res.data.message);

      if (res.data.message === "Signup successful") {
        navigate("/login");
      }

    } catch (error) {
      console.log(error);
      alert("Signup Failed");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-xl shadow-xl w-96"
      >

        <h2 className="text-3xl font-bold mb-6 text-center">
          Sign Up
        </h2>

        <input name="firstName" placeholder="First Name"
          className="input-style"
          onChange={handleChange}
          required />

        <input name="lastName" placeholder="Last Name"
          className="input-style mt-3"
          onChange={handleChange}
          required />

        <input name="email" type="email"
          placeholder="Email"
          className="input-style mt-3"
          onChange={handleChange}
          required />

        <input name="mobile"
          placeholder="Mobile Number"
          className="input-style mt-3"
          onChange={handleChange}
          required />

        <input name="sucNo"
          placeholder="SUC Number"
          className="input-style mt-3"
          onChange={handleChange}
          required />

        <input name="password" type="password"
          placeholder="Password"
          className="input-style mt-3"
          onChange={handleChange}
          required />

        <input name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          className="input-style mt-3"
          onChange={handleChange}
          required />

        <button
          type="submit"
          className="btn-primary mt-6 w-full"
        >
          Create Account
        </button>

      </form>

    </div>
  );
};

export default Signup;