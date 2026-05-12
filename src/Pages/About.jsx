
import React from "react";
import {
    FaArrowRight,
    FaCheckCircle,
    FaUsers,
    FaChartLine,
    FaHeadset,
    FaShieldAlt,
} from "react-icons/fa";
import quickImg from "../images/quickimg.svg";
import guidenceImg from "../images/guidence.svg";
import transparentImg from "../images/transparent.svg";
import claimImg from "../images/instant-claim.svg";
import "./About.css";

const About = () => {

    const features = [
        {
            icon: <FaUsers />,
            title: "Expert Team",
            desc: "Skilled professionals delivering scalable outsourcing solutions.",
        },

        {
            icon: <FaChartLine />,
            title: "Business Growth",
            desc: "Growth-focused strategies designed for better conversions.",
        },

        {
            icon: <FaHeadset />,
            title: "24/7 Support",
            desc: "Dedicated support to keep your operations running smoothly.",
        },

        {
            icon: <FaShieldAlt />,
            title: "Trusted Process",
            desc: "Secure and transparent workflows with reliable communication.",
        },
    ];

    return (

        <>

            {/* HERO */}

            <section className="about-hero-v3">

                {/* BLUR EFFECTS */}

                <div className="about-hero-blur blur-left"></div>
                <div className="about-hero-blur blur-right"></div>

                <div className="container">

                    <div className="about-hero-v3-content">
                        {/* MAIN TITLE */}

                        <h1>
                            Leading the Way in
                            <span> B2B Lead Generation</span>
                        </h1>

                        {/* DESCRIPTION */}

                        <p>
                            Secure Bridge Outsourcing helps businesses improve
                            lead quality, customer engagement, and business
                            growth with modern outsourcing and scalable
                            marketing solutions.
                        </p>

                        {/* BUTTONS */}

                        <div className="about-hero-v3-buttons">

                            <button className="about-v3-primary-btn">
                                Get Verified Leads
                            </button>

                            <button className="about-v3-secondary-btn">
                                Explore Services
                            </button>

                        </div>

                    </div>

                </div>

            </section>

            {/* ABOUT COMPANY */}

            <section className="about-company-modern">

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

            {/* WHY CHOOSE US */}

            <section className="sb-why-section">

                <div className="container">

                    {/* TOP */}

                    <div className="sb-why-top text-center">


                        <h2>
                            Why Choose
                            <span> Secure Bridge?</span>
                        </h2>

                        <p>
                            We provide scalable outsourcing solutions with
                            trusted support, modern strategies, and
                            performance-focused services for growing businesses.
                        </p>

                    </div>

                    {/* CARDS */}

                    <div className="row g-4">

                        {/* CARD 1 */}

                        <div className="col-lg-3 col-md-6">

                            <div className="sb-why-card blue-card">

                                <div className="sb-why-img-wrap">

                                    <img
                                        src={quickImg}
                                        alt="Fast Service"
                                    />

                                </div>

                                <h3>
                                    Quick & Reliable
                                    Business Solutions
                                </h3>

                                <p>
                                    We help businesses streamline outsourcing
                                    operations with faster execution and smooth
                                    communication.
                                </p>

                            </div>

                        </div>

                        {/* CARD 2 */}

                        <div className="col-lg-3 col-md-6">

                            <div className="sb-why-card cream-card">

                                <div className="sb-why-img-wrap">

                                    <img
                                        src={guidenceImg}
                                        alt="Professional Guidance"
                                    />

                                </div>

                                <h3>
                                    Expert Guidance
                                    & Consultation
                                </h3>

                                <p>
                                    Our outsourcing experts provide strategic
                                    support to help you achieve better business
                                    growth.
                                </p>

                            </div>

                        </div>

                        {/* CARD 3 */}

                        <div className="col-lg-3 col-md-6">

                            <div className="sb-why-card blue-card">

                                <div className="sb-why-img-wrap">

                                    <img
                                        src={transparentImg}
                                        alt="Transparent Pricing"
                                    />

                                </div>

                                <h3>
                                    Transparent Pricing
                                    Without Hidden Costs
                                </h3>

                                <p>
                                    Clear pricing structure with scalable
                                    outsourcing packages designed for every
                                    business size.
                                </p>

                            </div>

                        </div>

                        {/* CARD 4 */}

                        <div className="col-lg-3 col-md-6">

                            <div className="sb-why-card cream-card">

                                <div className="sb-why-img-wrap">

                                    <img
                                        src={claimImg}
                                        alt="Support"
                                    />

                                </div>

                                <h3>
                                    Dedicated Client
                                    Support 24/7
                                </h3>

                                <p>
                                    Our support team is always available to
                                    assist your business operations and customer
                                    requirements.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* CTA SECTION */}

            <section className="sb-about-cta-section">

                {/* BG SHAPES */}

                <div className="sb-about-cta-blur blur-one"></div>
                <div className="sb-about-cta-blur blur-two"></div>

                <div className="container">

                    <div className="sb-about-cta-box text-center">

                        {/* HEADING */}

                        <h2>
                            Ready To Scale Your
                            Business With
                            <span> Secure Bridge?</span>
                        </h2>

                        {/* DESC */}

                        <p>
                            Partner with Secure Bridge Outsourcing for
                            scalable outsourcing services, dedicated
                            business support, and performance-driven
                            growth strategies tailored for modern
                            businesses.
                        </p>

                        {/* BUTTONS */}

                        <div className="sb-about-cta-buttons">

                            <button className="sb-about-primary-btn">
                                Contact Us Today
                                <FaArrowRight />
                            </button>

                            <button className="sb-about-secondary-btn">
                                Explore Services
                            </button>

                        </div>


                    </div>

                </div>

            </section>

        </>
    );
};

export default About;