import React from "react";
import { Link } from "react-router-dom";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

import "./Footer.css";
import { IoIosArrowForward } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="custom-footer">

      <div className="container">

        <div className="row g-5">

          {/* LEFT SIDE */}

          <div className="col-lg-4 col-md-6">

            <div className="footer-logo">

              <span className="footer-logo-blue">
                Secure
              </span>

              <span className="footer-logo-dark">
                Bridge
              </span>

            </div>

            <p className="footer-desc">
              We provide reliable outsourcing solutions with
              transparent processes, skilled professionals,
              and scalable business support to help your
              company grow faster and smarter.
            </p>

            {/* SOCIAL ICONS */}

            <div className="footer-socials">
              <h6>Follow Us On : </h6> 
              <a
                href="/"
                className="footer-social facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="/"
                className="footer-social instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="/"
                className="footer-social linkedin"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="/"
                className="footer-social twitter"
              >
                <FaXTwitter />
              </a>

            </div>

          </div>

          {/* CONTACT */}
          <div className="col-lg-3 col-md-6">

            <h4 className="footer-title">
              Contact
            </h4>

            <ul className="footer-contact">

              <li>
                <FaPhoneAlt className="footer-contact-icon" />
                <span>+91 9873251672</span>
              </li>

              <li>
                <FaEnvelope className="footer-contact-icon" />
                <span>securebridgepvtltd@gmail.com</span>
              </li>

              <li>
                <FaMapMarkerAlt className="footer-contact-icon" />
                <span>B -17 ,Second Floor Sector -59 Noida</span>
              </li>

            </ul>

          </div>

          {/* QUICK LINKS */}
          <div className="col-lg-2 col-md-6">

            <h4 className="footer-title">
              Quick Links
            </h4>

            <ul className="footer-links">

              <li>
                <Link to="/">
                  <IoIosArrowForward />
                  Home
                </Link>
              </li>

              <li>
                <Link to="/services">
                  <IoIosArrowForward />
                  Services
                </Link>
              </li>

              <li>
                <Link to="/about">
                  <IoIosArrowForward />
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/careers">
                  <IoIosArrowForward />
                  Careers
                </Link>
              </li>

              <li>
                <Link to="/contact">
                  <IoIosArrowForward />
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* POLICIES */}
          <div className="col-lg-3 col-md-6">

            <h4 className="footer-title">
              Policies
            </h4>

            <ul className="footer-links">

              <li>
                <Link to="/privacy-policy">
                  <IoIosArrowForward />
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link to="/terms">
                  <IoIosArrowForward />
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link to="/refund-policy">
                  <IoIosArrowForward />
                  Refund Policy
                </Link>
              </li>

            </ul>

          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">

        <div className="container">

          <p>
            © 2026 Secure Bridge Outsourcing.
            All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;