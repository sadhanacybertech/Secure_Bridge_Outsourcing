// Components/Loader.jsx

import "./Loader.css";

function Loader() {

  return (

    <div className="sb-loader-wrapper">

      {/* LOGO */}

      <div className="sb-loader-logo">

        <span className="sb-loader-red">
          Secure
        </span>

        <span className="sb-loader-dark">
          Bridge
        </span>

      </div>

      {/* LOADER */}

      <div className="sb-loader-line">

        <span></span>

      </div>

      {/* TEXT */}

      <p>
        Loading Secure Bridge Outsourcing...
      </p>

    </div>
  );
}

export default Loader;