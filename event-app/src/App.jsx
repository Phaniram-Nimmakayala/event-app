import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToHash from "./components/ScrollToHash";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Admin from "./pages/Admin";
// ❌ AdminProtectedRoute removed

function App() {
  return (
    <Router>

      <Navbar />
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* ✅ ADMIN DIRECT ACCESS */}
        <Route path="/admin" element={<Admin />} />
      </Routes>

    </Router>
  );
}

export default App;