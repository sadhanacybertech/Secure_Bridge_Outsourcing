import React from "react";
import "./Terms-Conditions.css";

const PrivacyPolicy = () => {
  return (
    <section className="terms-page">

      <div className="container">

       <div className="row">
            <div className="col-lg-9 m-auto">
                 {/* TITLE */}

        <div className="terms-top text-center">

          <h1>
            Privacy Policy
          </h1>

        </div>

        {/* MAIN BOX */}

        <div className="terms-box">

          {/* INTRODUCTION */}

          <div className="terms-item">

            <h3>
              Introduction
            </h3>

            <p>
              Secure Bridge Outsourcing is committed to
              protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and
              safeguard your information when you visit our
              website and use our services.
            </p>

          </div>

          {/* INFORMATION */}

          <div className="terms-item">

            <h3>
              Information We Collect
            </h3>

            <p>
              We collect information you provide directly
              and information generated when you use our
              services.
            </p>

            <ul>

              <li>
                Personal Information: Name, email,
                phone number, and company details.
              </li>

              <li>
                Usage Data: Browser type, IP address,
                device information, and analytics.
              </li>

              <li>
                Cookies: For improving user experience
                and website functionality.
              </li>

            </ul>

          </div>

          {/* USE OF DATA */}

          <div className="terms-item">

            <h3>
              How We Use Your Information
            </h3>

            <ul>

              <li>
                To provide and maintain our services.
              </li>

              <li>
                To communicate with you regarding
                inquiries and support.
              </li>

              <li>
                To improve our website and customer
                experience.
              </li>

              <li>
                To comply with legal obligations.
              </li>

            </ul>

          </div>

          {/* SHARING */}

          <div className="terms-item">

            <h3>
              Sharing Your Information
            </h3>

            <p>
              We do not sell your personal information.
              We may share information with trusted
              partners for service delivery, compliance,
              or with your consent.
            </p>

          </div>

          {/* RIGHTS */}

          <div className="terms-item">

            <h3>
              Your Rights
            </h3>

            <ul>

              <li>
                Request access or updates to your
                personal data.
              </li>

              <li>
                Request data deletion where applicable.
              </li>

              <li>
                Opt-out of marketing communications.
              </li>

              <li>
                Request details on how your data
                is used.
              </li>

            </ul>

          </div>

          {/* CONTACT */}

          <div className="terms-item">

            <h3>
              Contact Us
            </h3>

            <p>
              If you have any questions about this
              Privacy Policy, contact us at{" "}

              <a href="mailto:securebridgepvtltd@gmail.com">
                securebridgepvtltd@gmail.com
              </a>

            </p>

          </div>

          {/* UPDATES */}

          <div className="privacy-item last-item">

            <h3>
              Updates
            </h3>

            <p>
              We may update this Privacy Policy
              occasionally. Please review this page
              periodically for changes.
            </p>

          </div>

        </div>
                </div>
       </div>

      </div>

    </section>
  );
};

export default PrivacyPolicy;