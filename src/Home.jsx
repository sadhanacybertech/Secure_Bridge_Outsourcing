import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaBriefcase, FaBullseye, FaChartLine, FaCheckCircle, FaClipboardCheck, FaClock, FaEnvelope, FaHandshake, FaHeadset, FaHeartbeat, FaHospital, FaMapMarkerAlt, FaPaperPlane, FaPhoneAlt, FaPhoneVolume, FaRocket, FaSearch, FaShieldAlt, FaUserFriends, FaUsers, FaUserShield } from "react-icons/fa";
import "./Home.css";
import { FiChevronDown } from "react-icons/fi";
import heroImg from "./images/lead.jpeg";
import { IoDiscSharp } from "react-icons/io5";
import { HashLink } from "react-router-hash-link";
const Home = () => {

  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1600&auto=format&fit=crop",
      title: (
        <>
          Ready To Scale Your Business With Confidence?
        </>
      ),
      desc:
        "Secure Bridge Outsourcing helps businesses streamline customer support, lead generation, IT operations, and back-office management with secure and scalable outsourcing solutions.",
    },

    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
      title: (
        <>
          Reliable Customer Support That Builds Trust
        </>
      ),
      desc:
        "Deliver seamless customer experiences with our 24/7 support teams, multilingual assistance, and professional call center solutions.",
    },

    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
      title: (
        <>
          Smart Outsourcing Solutions For Modern Brands
        </>
      ),
      desc:
        "From lead generation to IT outsourcing, we help businesses reduce costs, improve productivity, and scale operations faster.",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  /* AUTO SLIDER */

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);


  const steps = [
    {
      icon: <FaUsers />,
      title: "Connect",
      desc: "We understand your business goals and identify the right outsourcing strategy tailored for your operations.",
      number: "01",
    },

    {
      icon: <FaClipboardCheck />,
      title: "Plan",
      desc: "Our experts build customized support, lead generation, and business process solutions for your company.",
      number: "02",
    },

    {
      icon: <FaRocket />,
      title: "Execute",
      desc: "Secure Bridge Outsourcing launches scalable and result-driven services to improve efficiency and growth.",
      number: "03",
    },

    {
      icon: <FaShieldAlt />,
      title: "Grow Securely",
      desc: "Experience long-term success with secure operations, dedicated teams, and 24/7 business support.",
      number: "04",
    },
  ];




  const faqData = [
    {
      question: "Is Secure Bridge Outsourcing suitable for startups?",
      answer:
        "Yes, our outsourcing solutions are designed for startups, SMEs, and enterprises looking to scale operations efficiently.",
    },

    {
      question: "What services does Secure Bridge Outsourcing provide?",
      answer:
        "We provide customer support, lead generation, IT outsourcing, back-office management, and business process solutions.",
    },

    {
      question: "Do you provide 24/7 support services?",
      answer:
        "Absolutely. Our dedicated teams are available round the clock to ensure uninterrupted business operations.",
    },

    {
      question: "How secure are your outsourcing solutions?",
      answer:
        "We follow secure workflows and confidentiality practices to keep your business data protected and reliable.",
    },

    {
      question: "Can your services scale with my business?",
      answer:
        "Yes, our services are flexible and scalable according to your business growth requirements.",
    },

    {
      question: "How quickly can we get started?",
      answer:
        "After consultation and requirement analysis, onboarding can begin within a few business days.",
    },

    {
      question: "Do you provide dedicated account managers?",
      answer:
        "Yes, each client gets a dedicated manager for smooth communication and project handling.",
    },

    {
      question: "Which industries do you work with?",
      answer:
        "We work with eCommerce, healthcare, real estate, education, IT, and many other industries.",
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

    /* ACA */

    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",

      title: "Affordable Care Act (ACA)",
      active: true,
      points: [
        "ACA enrollment assistance",
        "Qualified lead generation",
        "Compliance-focused campaigns",
        "Customer verification support",
        "Real-time lead delivery",
      ],
    },

    /* MEDICARE */

    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",

      title: "Medicare Campaigns",

      points: [
        "Medicare lead generation",
        "Senior customer outreach",
        "Live transfer campaigns",
        "Policy consultation support",
        "Scalable call center solutions",
      ],
    },

    /* FINAL EXPENSE */

    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",


      title: "Final Expense Insurance",

      points: [
        "Burial insurance support",
        "Qualified insurance leads",
        "Customer eligibility verification",
        "Live transfer campaigns",
        "Policy assistance services",
      ],
    },

    /* AUTO INSURANCE */

    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",


      title: "Auto Insurance",

      points: [
        "Auto insurance lead generation",
        "Policy comparison support",
        "Customer quote assistance",
        "Real-time call routing",
        "Verified insurance prospects",
      ],
    },

    /* SSDI */

    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",


      title: "Social Security Disability Insurance",

      points: [
        "SSDI lead qualification",
        "Customer documentation support",
        "Case intake assistance",
        "Claim consultation support",
        "Customer outreach campaigns",
      ],
    },

    /* DEBT SETTLEMENT */

    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=1200&auto=format&fit=crop",


      title: "Debt Settlement",

      points: [
        "Debt relief lead generation",
        "Customer qualification support",
        "Financial consultation campaigns",
        "Inbound call handling",
        "Conversion-focused outreach",
      ],
    },

    /* PAY PER CALL */

    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",


      title: "Pay Per Call",

      points: [
        "High-intent inbound calls",
        "Real-time call routing",
        "Call tracking & analytics",
        "ROI-driven lead delivery",
        "Conversion-focused campaigns",
      ],
    },

    /* EDUCATION */

    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",


      title: "Education Services",

      points: [
        "Student lead generation",
        "Course enrollment campaigns",
        "Education counseling support",
        "Admission inquiry handling",
        "Verified student outreach",
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
                smooth
                to="/#services"
                className="sb-secondary-btn text-decoration-none"
              >
                Explore Services
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
                <h4>98%</h4>
                <p>Client Satisfaction</p>
              </div>

              <div className="sb-floating-card card-2">
                <h4>24/7</h4>
                <p>Business Support</p>
              </div>

              <span className="sb-dot dot-1"></span>
              <span className="sb-dot dot-2"></span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
    OUR VERTICALS
========================= */}

      <section className="sb-verticals-section" id="verticals">

        <div className="container">

          {/* TOP */}

          <div className="sb-vertical-top text-center">

            <h2>
              Our
              <span> Verticals</span>
            </h2>

            <p>
              Secure Bridge Outsourcing delivers specialized
              outsourcing, healthcare, and lead generation
              solutions with scalable strategies designed
              for business growth and long-term success.
            </p>

          </div>

          {/* MAIN BOX */}

          <div className="sb-vertical-main-box">

            {/* TITLE */}

            <div className="sb-vertical-title-wrap text-center">

              <h3>
                Business & Healthcare Solutions
              </h3>

              <p>
                We help businesses scale through modern
                outsourcing services, customer engagement,
                healthcare campaigns, and performance-driven
                lead generation solutions.
              </p>

            </div>

            {/* CARDS */}

            <div className="row g-4 justify-content-center">

              {/* CARD 1 */}

              <div className="col-lg-4 col-md-6">

                <div className="sb-vertical-card">

                  <div className="sb-vertical-icon">
                    <FaChartLine />
                  </div>

                  <h4>
                    Lead Generation
                  </h4>

                  <p>
                    High-quality lead generation services
                    designed to improve conversions and
                    maximize business opportunities.
                  </p>

                </div>

              </div>

              {/* CARD 2 */}

              <div className="col-lg-4 col-md-6">

                <div className="sb-vertical-card">

                  <div className="sb-vertical-icon">
                    <FaBullseye />
                  </div>

                  <h4>
                    Account Based Marketing
                  </h4>

                  <p>
                    Targeted outreach strategies focused on
                    engaging high-value accounts and improving
                    customer relationships.
                  </p>

                </div>

              </div>

              {/* CARD 3 */}

              <div className="col-lg-4 col-md-6">

                <div className="sb-vertical-card">

                  <div className="sb-vertical-icon">
                    <FaBriefcase />
                  </div>

                  <h4>
                    Outsourcing Solutions
                  </h4>

                  <p>
                    Scalable outsourcing services that help
                    businesses optimize workflows and increase
                    operational efficiency.
                  </p>

                </div>

              </div>

              {/* CARD 4 */}

              <div className="col-lg-4 col-md-6">

                <div className="sb-vertical-card">

                  <div className="sb-vertical-icon">
                    <FaHandshake />
                  </div>

                  <h4>
                    Customer Support
                  </h4>

                  <p>
                    Professional support services focused on
                    customer satisfaction, retention, and
                    seamless communication.
                  </p>

                </div>

              </div>

              {/* CARD 5 */}

              <div className="col-lg-4 col-md-6">

                <div className="sb-vertical-card active-card">

                  <div className="sb-vertical-icon">
                    <FaHeartbeat />
                  </div>

                  <h4>
                    Medicare & ACA
                  </h4>

                  <p>
                    Specialized Medicare and ACA campaigns
                    with compliant lead generation, customer
                    outreach, and healthcare support services.
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




      <section className="sb-services-section" id="services">
        <div className="container">

          {/* TOP */}

          <div className="sb-services-top text-center">

            <h2>
              Our Specialized
              <span> Services</span>
            </h2>

            <p>
              Secure Bridge Outsourcing provides scalable
              outsourcing, lead generation, and healthcare
              support services with a strong specialization
              in Medicare and ACA campaigns.
            </p>

          </div>

          {/* SERVICES */}

          <div className="row">
            <div className="col-lg-11 m-auto">

              <div className="row g-4">

                {services.map((service) => (

                  <div
                    className="col-lg-4 col-md-6"
                    key={service.id}
                  >

                    <div
                      className={`sb-service-card ${service.active ? "active-card" : ""
                        }`}
                    >

                      {/* IMAGE */}

                      <div className="sb-service-image">

                        <img
                          src={service.image}
                          alt={service.title}
                        />

                      </div>

                      {/* CONTENT */}

                      <div className="sb-service-content">

                        <h3>
                          {service.title}
                        </h3>

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



      <section className="sb-steps">
        <div className="sb-steps-container">

          {/* TOP CONTENT */}

          <div className="sb-steps-top">
            <h2>
              Transform Your Business <br />
              <span> In 4 Smart Steps</span>
            </h2>

            <p>
              We help businesses streamline operations, improve customer
              experience, and scale faster with secure outsourcing solutions.
            </p>
          </div>

          {/* STEPS */}

          <div className="sb-steps-wrapper">
            {steps.map((item, index) => (
              <div className="sb-step-card" key={index}>

                <div className="sb-step-number">
                  {item.number}
                </div>

                <div className="sb-step-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>

                {index !== steps.length - 1 && (
                  <div className="sb-arrow-line"></div>
                )}
              </div>
            ))}
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
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
                    alt="Company"
                  />

                </div>

                {/* FLOATING CARD */}

                <div className="about-company-floating-card">

                  <h3>10+</h3>

                  <p>
                    Years Of Industry Experience
                  </p>

                </div>

              </div>

            </div>

            {/* CONTENT SIDE */}

            <div className="col-lg-7">

              <div className="about-company-content">


                <h2>
                  Helping Businesses
                  Scale Faster With
                  Smart Outsourcing
                </h2>

                <p>
                  Secure Bridge Outsourcing delivers reliable,
                  scalable, and performance-driven outsourcing
                  services that help businesses improve customer
                  engagement, lead quality, and long-term growth.
                </p>

                {/* CHECK LIST */}

                <div className="about-company-checks">

                  <div className="about-company-check-item">
                    <FaCheckCircle />
                    Verified Business Solutions
                  </div>

                  <div className="about-company-check-item">
                    <FaCheckCircle />
                    Reliable Outsourcing Services
                  </div>

                  <div className="about-company-check-item">
                    <FaCheckCircle />
                    Dedicated Client Support
                  </div>

                  <div className="about-company-check-item">
                    <FaCheckCircle />
                    Growth-Focused Strategies
                  </div>

                </div>

                {/* BUTTON */}

                <button className="about-company-btn">
                  Explore More
                </button>

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
              Let’s Build Smarter
              <span> Business Solutions</span>
            </h2>

            <p>
              Ready to scale your business with reliable outsourcing services?
              Connect with Secure Bridge Outsourcing for customer support,
              lead generation, back-office operations, and business solutions.
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
                      <label>Select Service</label>

                      <select className="form-select">
                        <option>Choose Service</option>
                        <option>Lead Generation</option>
                        <option>Customer Support</option>
                        <option>BPO Services</option>
                        <option>IT Outsourcing</option>
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
                    <h5>Phone</h5>

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

                    <h5>Email</h5>

                    <a
                      href="mailto:securebridgepvtltd@gmail.com"
                      className="text-decoration-none"
                    >
                      <p className="mb-0">
                        securebridgepvtltd@gmail.com
                      </p>
                    </a>

                  </div>

                </div>

                <div className="sb-info-item">
                  <div className="sb-info-icon">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <h5>Address</h5>
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
                    <h5>Business Hours</h5>
                    <p>Mon - Sat : 9:00 AM - 7:00 PM</p>
                  </div>
                </div>

                {/* WHY CHOOSE */}

                <div className="sb-why-box">

                  <h4>Why Choose Secure Bridge?</h4>

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