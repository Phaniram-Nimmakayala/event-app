import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/loginBg.jpg";
import logo from "../assets/loginBg.jpg";
import "./Login.css";

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    sucNo: "",
    password: ""
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
      "https://event-app-backend-nn0z.onrender.com/api/auth/login",
      formData
    );

    alert(res.data.message);

    // ✅ Store logged user
    localStorage.setItem(
      "user",
      JSON.stringify(res.data.user)
    );

    // ✅ ROLE BASED REDIRECT
if (res.data.user.role === "admin") {
  navigate("/admin");
} else {
  navigate("/");
}

  } catch (error) {
    alert("Invalid SUC No or Password");
  }
};

  return (
    <div className="login-container">

    <form onSubmit={handleSubmit} className="login-card">

      {/* LOGO */}
      <div className="flex justify-center mb-6">
        <img src={logo} alt="logo" className="h-20 object-contain" />
      </div>

      {/* TITLE */}
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        Login
      </h2>

      {/* SUC */}
      <div className="mb-5">
        <label className="text-gray-700 text-sm block mb-2">
          Student Unique Code *
        </label>

        <input
          type="text"
          name="sucNo"
          placeholder="Enter SUC"
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fd6716]"
        />
      </div>

      {/* PASSWORD */}
      <div className="mb-8">
        <label className="text-gray-700 text-sm block mb-2">
          Password *
        </label>

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fd6716]"
        />
      </div>

      {/* LOGIN BUTTON */}
      <button
        type="submit"
        className="w-full py-3 rounded-lg bg-[#fd6716] text-white font-semibold"
      >
        Login
      </button>

    </form>

  </div>
  );
};

export default Login;