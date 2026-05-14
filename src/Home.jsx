import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaBriefcase, FaBroadcastTower, FaBullhorn, FaBullseye, FaChartBar, FaChartLine, FaCheckCircle, FaClipboardCheck, FaClock, FaEnvelope, FaHandshake, FaHeadset, FaHeartbeat, FaHospital, FaMapMarkerAlt, FaNetworkWired, FaPaperPlane, FaPhoneAlt, FaPhoneVolume, FaRocket, FaSatelliteDish, FaSearch, FaShareSquare, FaShieldAlt, FaStar, FaUserFriends, FaUsers, FaUserShield } from "react-icons/fa";
import "./Home.css";
import { FiChevronDown } from "react-icons/fi";
import heroImg from "./images/lead.jpeg";
import { IoDiscSharp, IoStarHalf } from "react-icons/io5";
import { HashLink } from "react-router-hash-link";
import { IoIosDisc, IoMdCheckmarkCircleOutline } from "react-icons/io";
import ppcImg from "./images/ppc.jpeg";
import aboutImg from "./images/About.jpeg";
import { PiPhoneCallFill } from "react-icons/pi";

import medicare from "./images/Medicare-Campaigns.avif";
import aca from "./images/aca.avif";
import finalExpenseImg from "./images/Final-Expense.avif";
import autoInsuranceImg from "./images/auto-insurance.avif";
import ssdiImg from "./images/Social-Security.avif";
import debtSettlementImg from "./images/Debt-Settlement.avif";
import educationImg from "./images/education.avif";
const Home = () => {



  const faqData = [
    {
      question: "What types of leads do you provide?",
      answer:
        "We provide high - intent, TCPA-compliant leads with proper consumer consent and quality standards maintained",
    },

    {
      question: "Are your leads verified and high-quality?",
      answer:
        "Yes, we focus on delivering verified and quality-driven leads to help businesses improve conversions and growth.",
    },

    {
      question: "Which industries are you specialized in?",
      answer:
        "We specialize in lead generation and outsourcing solutions for Medicare, ACA, customer support, and multiple business industries.",
    },

    {
      question: "Do you provide Medicare and ACA lead services?",
      answer:
        "Yes, we offer reliable Medicare and ACA lead generation solutions tailored to business requirements.",
    },

    {
      question: "What outsourcing services do you offer?",
      answer:
        "We provide customer support, back-office support, business process outsourcing, and operational assistance services.",
    },

    {
      question: "Can your services scale with my business?",
      answer:
        "Yes, our solutions are designed to support businesses of all sizes and scale according to growth requirements.",
    },

    {
      question: "How quickly can we get started?",
      answer:
        "Our team ensures a smooth onboarding process so businesses can get started quickly and efficiently.",
    },

    {
      question: "Do you provide 24/7 business support?",
      answer:
        "Yes, we provide reliable support services to ensure smooth business operations and client assistance.",
    },
  ];


  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -420,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 420,
      behavior: "smooth",
    });
  };

  /* =========================
     SERVICES DATA
  ========================= */

  const services = [

    /* MEDICARE */

    {
      id: 1,
      image: medicare,

      title: "Medicare Campaigns",

      points: [
        "Medicare lead generation",
        "Senior customer outreach",
        "Live transfer campaigns",
        "Eligibility verification support",
        "Scalable call center solutions",
      ],
    },

    /* ACA */

    {
      id: 2,
      image: aca,

      title: "Affordable Care Act (ACA)",
      active: true,
      points: [
        "ACA lead generation",
        "Qualified customer acquisition",
        "Compliance-focused campaigns",
        "Customer verification support",
        "Real-time lead delivery",
      ],
    },

    /* FINAL EXPENSE */

    {
      id: 3,
      image: finalExpenseImg,

      title: "Final Expense Insurance",

      points: [
        "Final expense lead generation",
        "Qualified insurance leads",
        "Customer eligibility verification",
        "Live transfer campaigns",
        "Policy assistance services",
      ],
    },

    /* AUTO INSURANCE */

    {
      id: 4,
      image: autoInsuranceImg,
      title: "Auto Insurance",

      points: [
        "Auto insurance lead generation",
        "Qualified insurance prospects",
        "Customer quote assistance",
        "Policy verification support",

      ],
    },

    /* SSDI */

    {
      id: 5,
      image: ssdiImg,
      title: "Social Security Disability Insurance",

      points: [
        "SSDI lead qualification",
        "Customer documentation support",
        "Case intake assistance",
        "Claim verification support",
        "Customer outreach campaigns",
      ],
    },

    /* DEBT SETTLEMENT */

    {
      id: 6,
      image: debtSettlementImg,

      title: "Debt Settlement",

      points: [
        "Debt settlement lead generation",
        "Qualified customer acquisition",
        "Financial assistance campaigns",
        "Inbound & outbound call support",
        "Conversion-focused outreach",
      ],
    },

    /* PAY PER CALL */

    {
      id: 7,
      image: ppcImg,


      title: "Pay Per Call",

      points: [
        "High-intent inbound calls",
        "Real-time call routing",
        "Call tracking & analytics",
        "ROI-focused lead delivery",
        "Conversion-driven campaigns",
      ],
    },

    /* EDUCATION */

    {
      id: 8,
      image: educationImg,

      title: "Education Services",

      points: [
        "Student lead generation",
        "Course enrollment campaigns",
        "Admission inquiry support",
        "Verified student outreach",
        "Education counseling assistance",
      ],
    },
  ];

  return (
    <>
      <section className="sb-hero" id="home">
        <div className="sb-hero-container">
          {/* LEFT CONTENT */}
          <div className="sb-hero-content">


            <h1 className="sb-hero-title">
              Get Verified Leads That Convert
            </h1>

            <p className="sb-hero-desc">
              Secure Bridge Outsourcing provides high-quality, verified leads
              and reliable outsourcing solutions across multiple industries.
              We help businesses connect with the right audience
              through strategic lead generation systems, business support
              services, and quality-driven solutions designed for real growth.
            </p>

            <div className="sb-hero-buttons">
              <a
                href="https://wa.me/919873251672"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <button className="sb-primary-btn">
                  Get Verified Leads
                  <FaArrowRight />
                </button>
              </a>

              <HashLink
                smooth="true"
                to="/#verticals"
                className="sb-secondary-btn text-decoration-none"
              >
                Explore Verticals
              </HashLink>
            </div>

            {/* STATS */}
            <div className="sb-hero-stats">
              <div className="sb-stat-card">
                <FaUsers className="sb-stat-icon blue" />
                <span>500+ Clients</span>
              </div>

              <div className="sb-stat-card">
                <FaShieldAlt className="sb-stat-icon green" />
                <span>100% Secure</span>
              </div>

              <div className="sb-stat-card">
                <FaHeadset className="sb-stat-icon orange" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="sb-hero-image">
            <div className="sb-image-wrapper">
              <img
                src={heroImg}
                alt="Secure Bridge Outsourcing"
              />

              <div className="sb-floating-card card-1">
                <strong className="fw-bold fs-3">98%</strong>
                <p>Client Satisfaction</p>
              </div>

              <div className="sb-floating-card card-2">
                <strong className="fw-bold fs-3">24/7</strong>
                <p>Business Support</p>
              </div>

              <span className="sb-dot dot-1"></span>
              <span className="sb-dot dot-2"></span>
            </div>
          </div>
        </div>
      </section>


      {/* OUR Services */}
      <section className="sb-verticals-section" id="services">

        <div className="container">

          {/* TOP */}

          <div className="sb-vertical-top text-center">

            <h2>
              Our Specialized
              <span> Services & Industry Verticals</span>
            </h2>

            <p>
              Secure Bridge Outsourcing offers performance-driven lead generation,
              advertising, outsourcing, and customer acquisition solutions across multiple
              industries including ACA, Medicare, Final Expense, Auto Insurance, Debt Settlement,
              Pay Per Call, and Education campaigns.
            </p>

          </div>

          {/* MAIN BOX */}

          <div className="sb-vertical-main-box">

            {/* TITLE */}

            <div className="sb-vertical-title-wrap text-center">

              <h3>
                Our Premium Services
              </h3>

              <p>
                We provide lead generation, outsourcing, and business
                solutions designed to help businesses grow and scale
                efficiently.
              </p>

            </div>

            {/* CARDS */}

            <div className="row g-4 justify-content-center">

              {/* CARD 1 */}

              <div className="col-lg-5 col-md-6">

                <div className="sb-vertical-card">

                  <div className="sb-vertical-icon">
                    <FaBullseye />
                  </div>

                  <h4>
                    Lead Generation
                  </h4>

                  <p>
                    We provide targeted and verified lead generation services that help
                    businesses connect with potential customers, improve sales opportunities,
                    and achieve higher conversion rates.
                  </p>

                </div>

              </div>

              {/* CARD 2 */}

              <div className="col-lg-5 col-md-6">

                <div className="sb-vertical-card">

                  <div className="sb-vertical-icon">
                    <FaChartBar />
                  </div>

                  <h4>
                    Advertising
                  </h4>

                  <p>
                    Our advertising solutions are designed
                    to promote brands effectively through strategic
                    campaigns, audience targeting, and performance-driven
                    marketing approaches.
                  </p>
                </div>

              </div>



              {/* CARD 4 */}

              <div className="col-lg-5 col-md-6">

                <div className="sb-vertical-card">

                  <div className="sb-vertical-icon">
                    <FaHeadset />
                  </div>

                  <h4>
                    Outsourcing
                  </h4>

                  <p>
                    We offer flexible outsourcing support
                    that helps businesses manage operations efficiently,
                    save time, and focus on long-term growth with reliable
                    backend assistance.
                  </p>
                </div>

              </div>

              {/* CARD 5 */}

              <div className="col-lg-5 col-md-6">

                <div className="sb-vertical-card active-card">

                  <div className="sb-vertical-icon">
                    <FaSatelliteDish />
                  </div>
                  <h4>
                    Telecommunications
                  </h4>

                  <p>
                    Our telecommunication services focus on smooth customer communication,
                    call support solutions, and engagement strategies that strengthen customer
                    relationships and business performance.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
    SPECIALIZED SERVICES
========================= */}

      <section
        className="sb-services-section"
        id="verticals"
      >

        <div className="container">

          {/* TOP */}

          <div className="sb-services-top text-center">

            <h2>
              Our <span>Verticals </span>

            </h2>

            <p>
              We specialize in Medicare and ACA campaigns while
              serving multiple high-demand industries including
              insurance, debt settlement, pay-per-call, and education
              solutions focused on quality lead generation and business growth.
            </p>

          </div>

          {/* SERVICES */}

          <div className="row">
            <div className="col-xl-11 mx-auto">

              <div className="row g-4">

                {services.map((service, index) => (

                  <div
                    className="col-lg-4 col-md-6"
                    key={service.id}
                  >

                    <div
                      className={`sb-service-card ${service.active ? "active-card" : ""
                        }`}
                    >

                      {/* MOST POPULAR */}

                      {index === 0 && (
                        <div className="sb-popular-badge">
                          Most Popular
                        </div>
                      )}
                      {index === 1 && (
                        <div className="sb-popular-badge">
                          Most Popular
                        </div>
                      )}

                      {/* IMAGE */}

                      <div className="sb-service-image">

                        <img
                          src={service.image}
                          alt={service.title}
                        />

                      </div>

                      {/* CONTENT */}

                      <div className="sb-service-content">

                        {/* ICON */}

                        <div className="sb-service-icon">
                          {service.icon}
                        </div>

                        {/* TITLE */}

                        <h3>
                          {service.title}
                        </h3>

                        {/* LIST */}

                        <ul>

                          {service.points.map((point, index) => (

                            <li key={index}>

                              <IoDiscSharp />

                              {point}

                            </li>

                          ))}

                        </ul>


                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>
          </div>

        </div>

      </section>



      {/* =========================
    ACA SPECIALIZATION SECTION
========================= */}

      <section className="aca-section">

        <div className="container">
          {/* TOP */}

          <div className="aca-top text-center">

            <h2>
              Specialized
              <span> Medicare & ACA Solutions</span>
            </h2>

            <p>
              We specialize in high-quality Medicare and ACA
              lead generation solutions designed to help
              businesses improve customer acquisition,
              increase conversions, and scale efficiently.
            </p>

          </div>
          <div className="aca-wrapper">



            {/* CONTENT */}

            <div className="row align-items-center g-5">

              {/* LEFT */}

              <div className="col-lg-6">

                <div className="aca-content">

                  <h3>
                    Medicare Campaigns
                  </h3>

                  <p>
                    Targeted Medicare lead generation
                    solutions focused on senior outreach,
                    customer engagement, and healthcare
                    enrollment support services.
                  </p>

                  {/* BENEFITS */}

                  <div className="aca-benefits">

                    <strong className="fw-bold">
                      Key Benefits
                    </strong>

                    <div className="aca-benefit-list">

                      <div className="aca-benefit-item">
                        <FaStar />
                        Qualified Medicare Leads
                      </div>

                      <div className="aca-benefit-item">
                        <FaStar />
                        Live Transfer Campaigns
                      </div>

                      <div className="aca-benefit-item">
                        <FaStar />
                        Senior Customer Outreach
                      </div>

                      <div className="aca-benefit-item">
                        <FaStar />
                        Real-Time Lead Delivery
                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* RIGHT */}

              <div className="col-lg-5 ms-auto">
                <div className="aca-card">
                  <div className="aca-card-top">

                    <h3>
                      Our Specializations
                    </h3>


                  </div>

                  {/* LIST */}

                  <div className="aca-card-list">

                    <div className="aca-card-item">
                      <IoIosDisc />
                      Medicare Enrollment Campaigns
                    </div>

                    <div className="aca-card-item">
                      <IoIosDisc />
                      Healthcare Lead Generation
                    </div>

                    <div className="aca-card-item">
                      <IoIosDisc />
                      Eligibility Verification
                    </div>

                    <div className="aca-card-item">
                      <IoIosDisc />
                      Compliance-Focused Outreach
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* =========================
    ACA SECTION
========================= */}

      <section className="aca-health-section">

        <div className="container">

          <div className="aca-health-wrapper">

            <div className="row align-items-center g-5">

              {/* LEFT SIDE */}

              <div className="col-lg-6">

                <div className="aca-health-content">

                  <h2>
                    ACA
                    <span> (Affordable Care Act)</span>
                  </h2>

                  <p>
                    Performance-driven ACA campaigns designed for healthcare enrollment and customer acquisition.
                  </p>

                  {/* BENEFITS */}

                  <div className="aca-health-benefits">

                    <strong className="fw-bold" >
                      Key Benefits :
                    </strong>

                    <div className="aca-health-grid">

                      <div className="aca-health-item">
                        <IoStarHalf />
                        ACA enrollment support
                      </div>

                      <div className="aca-health-item">
                        <IoStarHalf />
                        Qualified healthcare leads
                      </div>

                      <div className="aca-health-item">
                        <IoStarHalf />
                        Compliance-focused campaigns
                      </div>

                      <div className="aca-health-item">
                        <IoStarHalf />
                        Scalable lead generation
                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* RIGHT SIDE */}

              <div className="col-lg-5 ms-auto">

                <div className="aca-health-card">

                  <div className="aca-health-card-top">

                    <h3>
                      Our Specializations:
                    </h3>

                  </div>

                  {/* LIST */}

                  <div className="aca-health-list">

                    <div className="aca-health-list-item">
                      <FaShieldAlt />
                      ACA enrollment campaigns
                    </div>

                    <div className="aca-health-list-item">
                      <FaShieldAlt />
                      Subsidy qualification leads
                    </div>

                    <div className="aca-health-list-item">
                      <FaShieldAlt />
                      Open enrollment promotion
                    </div>

                    <div className="aca-health-list-item">
                      <FaShieldAlt />
                      Customer verification support
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>




      {/* =========================
    ADVANCED SERVICES
========================= */}

      <section className="advanced-services-section">

        <div className="container">

          {/* TOP */}

          <div className="advanced-services-top text-center">


            <h2>
              Our
              <span> Advanced Services</span>
            </h2>

            <p>
              Secure Bridge Outsourcing provides scalable,
              performance-driven outsourcing and marketing
              solutions designed to improve customer engagement,
              increase conversions, and accelerate business growth.
            </p>

          </div>

          {/* SERVICES GRID */}

          <div className="row g-4">

            {/* CARD 1 */}

            <div className="col-lg-6">

              <div className="advanced-service-card">

                <div className="advanced-service-icon ppc-icon">
                  <FaHeadset />
                </div>

                <h3>
                  Pay-Per-Call Solutions
                </h3>

                <p>
                  Targeted call-based marketing services designed to deliver
                  quality customer inquiries and higher conversion opportunities.
                </p>

                <strong className="fw-bold" >
                  Specializations:
                </strong>

                <ul>

                  <li>
                    <IoMdCheckmarkCircleOutline />
                    High-intent customer calls
                  </li>

                  <li>
                    <IoMdCheckmarkCircleOutline />
                    Campaign performance tracking
                  </li>

                  <li>
                    <IoMdCheckmarkCircleOutline />
                    Real-time call connections
                  </li>

                  <li>
                    <IoMdCheckmarkCircleOutline />
                    Conversion-oriented strategies
                  </li>

                </ul>

              </div>

            </div>

            {/* CARD 2 */}

            <div className="col-lg-6">

              <div className="advanced-service-card">

                <div className="advanced-service-icon call-icon">
                  <PiPhoneCallFill />
                </div>

                <h3>
                  Inbound & Outbound Support
                </h3>

                <p>
                  Efficient communication services focused on customer interaction, sales support, and business engagement.
                </p>

                <strong className="fw-bold" >
                  Specializations:
                </strong>

                <ul>

                  <li>
                    <IoMdCheckmarkCircleOutline />
                    Customer assistance services
                  </li>

                  <li>
                    <IoMdCheckmarkCircleOutline />
                    Outbound engagement campaigns
                  </li>

                  <li>
                    <IoMdCheckmarkCircleOutline />
                    Call handling support
                  </li>

                  <li>
                    <IoMdCheckmarkCircleOutline />
                    Business communication management
                  </li>

                </ul>

              </div>

            </div>

            {/* CARD 3 */}

            <div className="col-lg-6">

              <div className="advanced-service-card">

                <div className="advanced-service-icon support-icon">
                  <FaShareSquare />
                </div>

                <h3>
                  Live Transfer Services
                </h3>

                <p>
                  Real-time lead transfer solutions that connect businesses directly with interested and verified customers.
                </p>

                <strong className="fw-bold" >
                  Specializations:
                </strong>

                <ul>

                  <li>
                    <IoMdCheckmarkCircleOutline />
                    Qualified customer transfers
                  </li>

                  <li>
                    <IoMdCheckmarkCircleOutline />
                    Instant lead connectivity
                  </li>

                  <li>
                    <IoMdCheckmarkCircleOutline />
                    Lead screening support
                  </li>

                  <li>
                    <IoMdCheckmarkCircleOutline />
                    Sales-focused call routing
                  </li>

                </ul>

              </div>

            </div>

            {/* CARD 4 */}

            <div className="col-lg-6">

              <div className="advanced-service-card">

                <div className="advanced-service-icon legal-icon">
                  <FaHandshake />
                </div>

                <h3>
                  Customer Engagement Solutions
                </h3>

                <p>
                  Professional support solutions designed to
                  improve customer experience and strengthen business relationships
                </p>

                <strong className="fw-bold" >
                  Specializations:
                </strong>

                <ul>

                  <li>
                    <IoMdCheckmarkCircleOutline />
                    Customer interaction management
                  </li>

                  <li>
                    <IoMdCheckmarkCircleOutline />
                    Email & chat assistance
                  </li>

                  <li>
                    <IoMdCheckmarkCircleOutline />
                    CRM coordination support
                  </li>

                  <li>
                    <IoMdCheckmarkCircleOutline />
                    Continuous support services
                  </li>

                </ul>

              </div>

            </div>

          </div>

        </div>

      </section>




      {/* ABOUT COMPANY */}

      <section className="about-company-modern" id="about-us">

        <div className="container">

          <div className="row align-items-center gy-5">

            {/* IMAGE SIDE */}

            <div className="col-lg-5">

              <div className="about-company-image-wrap">

                <div className="about-company-image">

                  <img
                    src={aboutImg}
                    alt="Company"
                  />

                </div>
                <div className="about-company-floating-card">

                  <h3>24/7</h3>

                  <p>
                    Customer Support Services
                  </p>

                </div>

              </div>

            </div>

            {/* CONTENT SIDE */}

            <div className="col-lg-7">

              <div className="about-company-content">


                <h2>
                  About <span>Secure Bridge Outsourcing</span>
                </h2>

                <p>
                  Secure Bridge Outsourcing is a performance-driven lead generation
                  and outsourcing company focused on delivering reliable business
                  solutions across healthcare, insurance, and customer acquisition
                  industries. We specialize in Medicare, ACA, pay-per-call,
                  and customer support campaigns designed to help businesses improve
                  conversions, customer engagement, and long-term growth.
                </p>

                {/* CHECK LIST */}

                <div className="about-company-checks">

                  <div className="about-company-check-item">
                    <FaCheckCircle />
                    Verified lead generation solutions
                  </div>

                  <div className="about-company-check-item">
                    <FaCheckCircle />
                    Medicare & ACA campaign expertise
                  </div>

                  <div className="about-company-check-item">
                    <FaCheckCircle />
                    Customer support & call center services
                  </div>

                  <div className="about-company-check-item">
                    <FaCheckCircle />
                    Scalable outsourcing solutions
                  </div>

                </div>


              </div>

            </div>

          </div>

        </div>

      </section>




      <section className="sb-contact-section" id="contact-form">
        <div className="container">

          {/* TOP */}

          <div className="sb-contact-top text-center">
            <h2>
              Ready To
              <span> Scale Your Business </span>
              With Quality Leads?
            </h2>

            <p>
              Looking for high-quality leads and reliable outsourcing solutions?
              Connect with Secure Bridge Outsourcing to discuss Medicare, ACA,
              pay-per-call, and customer acquisition services tailored for your
              business growth.

            </p>
          </div>

          {/* MAIN ROW */}

          <div className="row g-4 align-items-stretch">

            {/* LEFT FORM */}

            <div className="col-lg-7">
              <div className="sb-contact-card">

                <div className="sb-card-header">
                  <h3 className="fs-4">Send Us A Message</h3>

                  <p>
                    Fill out the form and our outsourcing experts
                    will contact you within 24 hours.
                  </p>
                </div>

                <form>

                  <div className="row g-4">

                    <div className="col-md-6">
                      <label>First Name</label>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your first name"
                      />
                    </div>

                    <div className="col-md-6">
                      <label>Last Name</label>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your last name"
                      />
                    </div>

                    <div className="col-md-6">
                      <label>Email Address</label>

                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div className="col-md-6">
                      <label>Phone Number</label>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div className="col-md-6">
                      <label>Business Type</label>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your business type"
                      />
                    </div>

                    <div className="col-md-6">

                      <label htmlFor="serviceSelect">
                        Select Service
                      </label>

                      <select
                        id="serviceSelect"
                        className="form-select"
                      >
                        <option>
                          Choose Service
                        </option>

                        <option>
                          Lead Generation
                        </option>

                        <option>
                          Customer Support
                        </option>

                        <option>
                          BPO Services
                        </option>

                        <option>
                          IT Outsourcing
                        </option>

                      </select>

                    </div>

                    <div className="col-12">
                      <label>Message</label>

                      <textarea
                        rows="5"
                        className="form-control"
                        placeholder="Tell us about your project or business requirements..."
                      ></textarea>
                    </div>

                    <div className="col-12">
                      <button
                        type="submit"
                        className="sb-contact-btn"
                      >
                        Send Message
                        <FaPaperPlane />
                      </button>
                    </div>

                  </div>
                </form>
              </div>
            </div>

            {/* RIGHT INFO */}

            <div className="col-lg-5">
              <div className="sb-contact-info">

                <h3 className="fs-4">Contact Information</h3>

                {/* ITEM */}

                <div className="sb-info-item">
                  <div className="sb-info-icon">
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <strong className="fw-bold">Phone</strong>

                    <a
                      href="tel:+919873251672"
                      className="text-decoration-none"
                    >
                      <p className="mb-0">
                        +91 9873251672
                      </p>
                    </a>
                  </div>
                </div>

                <div className="sb-info-item">

                  <div className="sb-info-icon">
                    <FaEnvelope />
                  </div>

                  <div>

                    <strong className="fw-bold">Email</strong>

                    <a
                      href="mailto:connect@securebridgeltd.com"
                      className="text-decoration-none"
                    >
                      <p className="mb-0">
                        connect@securebridgeltd.com
                      </p>
                    </a>

                  </div>

                </div>

                <div className="sb-info-item">
                  <div className="sb-info-icon">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <strong className="fw-bold">Address</strong>
                    <p>B -17 ,Second Floor Sector -59 Noida,
                      Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="sb-info-item">
                  <div className="sb-info-icon">
                    <FaClock />
                  </div>

                  <div>
                    <strong className="fw-bold">Business Hours</strong>
                    <p>Mon - Sat : 6:00 PM - 4:00 AM</p>
                  </div>
                </div>

                {/* WHY CHOOSE */}

                <div className="sb-why-box">

                  <strong className="fw-bold">Why Choose Secure Bridge?</strong>

                  <div className="sb-why-item">
                    <FaCheckCircle />
                    <span>500+ Successful Business Clients</span>
                  </div>

                  <div className="sb-why-item">
                    <FaCheckCircle />
                    <span>24/7 Dedicated Support Team</span>
                  </div>

                  <div className="sb-why-item">
                    <FaCheckCircle />
                    <span>Secure & Scalable Outsourcing Solutions</span>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      <section className="faq-section" id="faq">
        <div className="container">

          {/* TOP */}

          <div className="faq-top text-center">
            <h2>
              Frequently Asked
              <span> Questions</span>
            </h2>

            <p>
              Quick answers to common questions about Secure
              Bridge Outsourcing services.
            </p>
          </div>

          {/* FAQ WRAPPER */}

          <div className="faq-wrapper">

            {faqData.map((faq, index) => (
              <div
                className={`faq-item ${activeIndex === index ? "active" : ""
                  }`}
                key={index}
              >

                {/* QUESTION */}

                <button
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>

                  <FiChevronDown className="faq-icon" />
                </button>

                {/* ANSWER */}

                <div
                  className={`faq-answer ${activeIndex === index ? "show" : ""
                    }`}
                >
                  <p>{faq.answer}</p>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>







    </>
  );
};

export default Home;