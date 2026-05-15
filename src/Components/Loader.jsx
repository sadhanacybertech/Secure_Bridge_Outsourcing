// Components/Loader.jsx

import "./Loader.css";

import logo from "../images/logo.jpeg";

function Loader() {

  return (

    <div className="sb-loader-wrapper">

      {/* BACKGROUND SHAPES */}

      <div className="sb-loader-shape shape-one"></div>

      <div className="sb-loader-shape shape-two"></div>

      {/* LOADER BOX */}

      <div className="sb-loader-box">

        {/* LOGO */}

        <div className="sb-loader-logo">

          <img
            src={logo}
            alt="Secure Bridge Outsourcing Logo"
            width="220"
            height="70"
            loading="eager"
            // fetchpriority="high"
            decoding="async"
          />

        </div>

        {/* LINE */}

        <div className="sb-loader-line">

          <span></span>

        </div>

        {/* TEXT */}

        <p>
          Loading Secure Bridge Outsourcing...
        </p>

        {/* DOTS */}

        <div className="sb-loader-dots">

          <span></span>

          <span></span>

          <span></span>

        </div>

      </div>

    </div>
  );
}

export default Loader;