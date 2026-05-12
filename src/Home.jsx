import React, { useEffect, useState } from "react";
import { FaArrowRight, FaChartLine, FaCheckCircle, FaClipboardCheck, FaClock, FaEnvelope, FaHandshake, FaHeadset, FaMapMarkerAlt, FaPaperPlane, FaPhoneAlt, FaRocket, FaSearch, FaShieldAlt, FaUserFriends, FaUsers } from "react-icons/fa";
import "./Home.css";
import { FiChevronDown } from "react-icons/fi";

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



  return (
    <>
      <section className="sb-hero">
        <div className="sb-hero-container">
          {/* LEFT CONTENT */}
          <div className="sb-hero-content">


            <h1 className="sb-hero-title">
              Secure Business

              Solutions That

              Drive Growth
            </h1>

            <p className="sb-hero-desc">
              Secure Bridge Outsourcing delivers reliable customer support,
              back-office operations, IT solutions, and business process
              outsourcing services with complete data security and guaranteed
              efficiency.
            </p>

            <div className="sb-hero-buttons">
              <button className="sb-primary-btn">
                Get Started
                <FaArrowRight />
              </button>

              <button className="sb-secondary-btn">
                Explore Services
              </button>
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
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
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




      <section
        className="sb-cta"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
        }}
      >
        {/* OVERLAY */}
        <div className="sb-cta-overlay"></div>
        <div className="sb-cta-container">
          <div className="sb-cta-content">

            {/* TITLE */}

            <h1
              key={currentSlide}
              className="sb-cta-title fade-up"
            >
              {slides[currentSlide].title}
            </h1>

            {/* DESCRIPTION */}

            <p
              key={`desc-${currentSlide}`}
              className="sb-cta-desc fade-up"
            >
              {slides[currentSlide].desc}
            </p>

            {/* BUTTONS */}

            <div className="sb-cta-buttons">
              <button className="sb-cta-primary">
                Get Free Consultation
                <FaArrowRight />
              </button>

              <button className="sb-cta-secondary">
                Explore Services
              </button>
            </div>

            {/* STATS */}

            <div className="sb-cta-stats">
              <div className="sb-cta-stat">
                <div>
                  <h3 className="fw-bold">500+</h3>
                  <p>Global Clients</p>
                </div>
              </div>

              <div className="sb-cta-stat">
                <div>
                  <h3 className="fw-bold">95%</h3>
                  <p>Success Rate</p>
                </div>
              </div>

              <div className="sb-cta-stat">
                <div>
                  <h3 className="fw-bold">24/7</h3>
                  <p>Business Support</p>
                </div>
              </div>
            </div>

            {/* SLIDER DOTS */}

            <div className="sb-slider-dots m-auto">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={
                    currentSlide === index ? "active" : ""
                  }
                  onClick={() => setCurrentSlide(index)}
                ></span>
              ))}
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






        <section className="sb-contact-section">
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
                  <p>+91 9873251672</p>
                </div>
              </div>

              <div className="sb-info-item">
                <div className="sb-info-icon">
                  <FaEnvelope />
                </div>

                <div>
                  <h5>Email</h5>
                  <p>securebridgepvtltd@gmail.com</p>
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


        <section className="faq-section">
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
              className={`faq-item ${
                activeIndex === index ? "active" : ""
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
                className={`faq-answer ${
                  activeIndex === index ? "show" : ""
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