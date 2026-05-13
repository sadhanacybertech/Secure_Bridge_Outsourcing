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
import { HashLink } from "react-router-hash-link";

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
              <strong className="fw-bold">Follow Us On : </strong>
              <a
                href="/"
                aria-label="Visit our Facebook page"
                className="footer-social facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="/"
                aria-label="Visit our Instagram page"
                className="footer-social instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="/"
                aria-label="Visit our LinkedIn page"
                className="footer-social linkedin"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="/"
                aria-label="Visit our Twitter page"
                className="footer-social twitter"
              >
                <FaXTwitter />
              </a>
            </div>

          </div>

          {/* CONTACT */}
          <div className="col-lg-3 col-md-6">

            <strong className="footer-title fs-4">
              Contact
            </strong>

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

            <strong className="footer-title fs-4">
              Quick Links
            </strong>

            <ul className="footer-links">

              <li>
                <Link as={HashLink}
                  smooth
                  to="/#home" onClick={() => setExpanded(false)}>
                  <IoIosArrowForward />
                  Home
                </Link>
              </li>

              <li>
                <Link as={HashLink}
                  smooth
                  to="/#verticals" onClick={() => setExpanded(false)}>
                  <IoIosArrowForward />
                  Our Verticals
                </Link>
              </li>

              <li>
                <Link as={HashLink}
                  smooth
                  to="/#services" onClick={() => setExpanded(false)}>
                  <IoIosArrowForward />
                  Services
                </Link>
              </li>

              <li>
                <Link as={HashLink}
                  smooth
                  to="/#about-us" onClick={() => setExpanded(false)}>
                  <IoIosArrowForward />
                  About Us
                </Link>
              </li>

              <li>
                <Link as={HashLink}
                  smooth
                  to="/#contact-form" onClick={() => setExpanded(false)}>
                  <IoIosArrowForward />
                  Contact Us
                </Link>
              </li>



            </ul>

          </div>

          {/* POLICIES */}
          <div className="col-lg-3 col-md-6">

            <strong className="footer-title fs-4">
              Policies
            </strong>

            <ul className="footer-links">

              <li>
                <Link to="/privacy-policy">
                  <IoIosArrowForward />
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link to="/terms-conditions">
                  <IoIosArrowForward />
                  Terms & Conditions
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