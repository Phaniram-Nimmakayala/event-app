import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  // ✅ Check login user
  useEffect(() => {

  const storedUser = localStorage.getItem("user");

  if (storedUser && storedUser !== "undefined") {
    try {
      setUser(JSON.parse(storedUser));
    } catch (error) {
      console.log("Invalid user data");
      setUser(null);
    }
  } else {
    setUser(null);
  }

}, []);

  // ✅ Logout Function
 const handleLogout = () => {
  localStorage.removeItem("user");
  window.location.href = "/";
};

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900 shadow-lg">

    <div className="relative max-w-7xl mx-auto px-6 py-3 flex items-center">

      {/* LOGO */}
      <Link to="/" className="z-10">
        <img src={logo} alt="logo" className="h-12 md:h-14" />
      </Link>

      {/* ================= DESKTOP MENU ================= */}
      <ul
        className="
        hidden md:flex
        absolute left-1/2
        -translate-x-1/2
        gap-12 text-white font-medium text-lg
      "
      >
        {["home","about","events","gallery","contact"].map((item) => (
          <li key={item}>
            <Link
              to={`/#${item}`}
              className="
              relative group
              transition duration-300
              "
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}

              {/* Hover underline */}
              <span
                className="
                absolute left-0 bottom-[-4px]
                w-0 h-[2px]
                bg-[#fd6716]
                transition-all duration-300
                group-hover:w-full
              "
              />
            </Link>
          </li>
        ))}
      </ul>

      {/* ================= RIGHT SIDE ================= */}
      <div className="ml-auto hidden md:flex items-center gap-4">

        {user ? (
          <>
            <span className="text-white font-semibold">
              Hello, {user.firstName}
            </span>

            <button
              onClick={handleLogout}
              className="
              px-5 py-2 rounded-lg
              bg-[#fd6716]
              text-white font-semibold
              hover:scale-105
              transition
              "
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="
              px-5 py-2 rounded-lg
              border border-[#fd6716]
              text-[#fd6716]
              font-semibold
              hover:bg-[#fd6716]
              hover:text-white
              transition"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="
              px-5 py-2 rounded-lg
              bg-[#fd6716]
              text-white font-semibold
              hover:scale-105
              transition"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>

      {/* ================= MOBILE ICON ================= */}
      <div
        className="md:hidden ml-auto text-white text-3xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </div>
    </div>

    {/* ================= MOBILE MENU ================= */}
    <div
      className={`
      md:hidden bg-gray-900 overflow-hidden
      transition-all duration-500
      ${menuOpen ? "max-h-[500px] py-6" : "max-h-0"}
      `}
    >
      <ul className="flex flex-col items-center gap-6 text-white text-lg">

        {["home","about","events","gallery","contact"].map((item) => (
          <li key={item}>
            <Link
              to={`/#${item}`}
              onClick={() => setMenuOpen(false)}
              className="
              hover:text-[#fd6716]
              transition duration-300
              "
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}

        <div className="flex flex-col gap-4 mt-4 w-[80%] text-center">

          {user ? (
            <>
              <span className="text-white font-semibold">
                Hello, {user.firstName}
              </span>

              <button
                onClick={handleLogout}
                className="bg-[#fd6716] py-2 rounded-lg"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="
                border border-[#fd6716]
                text-[#fd6716]
                py-2 rounded-lg
                hover:bg-[#fd6716]
                hover:text-white
                transition"
              >
                Login
              </Link>

              <Link
                to="/signup"
                onClick={() => setMenuOpen(false)}
                className="
                bg-[#fd6716]
                text-white
                py-2 rounded-lg
                hover:scale-105
                transition"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

      </ul>
    </div>

  </nav>
  );
};

export default Navbar;