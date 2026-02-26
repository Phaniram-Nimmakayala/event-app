import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Events from "../components/Events";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import "../styles/home.css";
import hero from "../assets/hero.png";

const Home = () => {
  return (
    <div>


      {/* HERO */}
      <section
        id="home"
        className="hero-section"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="overlay"></div>

        <div className="hero-content">

          <h1 className="hero-title">
            ADITYA EDUCATIONAL
            <br />
            INSTITUTIONS
          </h1>

          <p className="slogan">
            Think | Code | Debug | Deploy | Repeat
          </p>

          <div className="highlight-box">
            Stay tuned for event bookings
          </div>

          <div className="location">
            📍 Kakinada
          </div>

        </div>
      </section>

      {/* ABOUT SECTION */}
      <About />
      <Events />
      <Gallery />
      <Contact />
      <Footer />

    </div>
  );
};

export default Home;
