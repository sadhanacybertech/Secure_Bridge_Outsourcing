import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <section className="hero-section">

      {/* OVERLAY */}
      <div className="hero-overlay"></div>

      <div className="container">

        <div className="hero-content">


          {/* HEADING */}
          <h1 className="hero-title">
            Grow Your Business With
              Smart Outsourcing Solutions
            
          </h1>

          {/* DESCRIPTION */}
          <p className="hero-description">
            Secure Bridge Outsourcing helps businesses scale
            faster with professional outsourcing services,
            operational support, and growth-driven digital
            strategies designed for long-term success.
          </p>

          {/* BUTTONS */}
          <div className="hero-buttons">

            <button className="hero-btn primary-btn">
              Get Started
              <FaArrowRight />
            </button>

          
        

          </div>

        </div>

      </div>

      {/* BLUR EFFECT */}
      <div className="hero-blur blur-one"></div>
      <div className="hero-blur blur-two"></div>

    </section>
  );
};

export default Home;