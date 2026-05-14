import { Routes, Route } from "react-router-dom";

import { useEffect, useState } from "react";

import "./App.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Whatsapp from "./Components/Whatsapp";

import Home from "./Home";
import About from "./Pages/About";
import PrivacyPolicy from "./Pages/Privacy-Policy";
import TermsConditions from "./Pages/Terms-Conditions";

import ScrollToTop from "./Components/ScrollToTop";
import BackToTop from "./Components/BackToTop";

import Loader from "./Components/Loader";

function App() {

  /* =========================
     LOADER
  ========================= */

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 2000);

    return () => clearTimeout(timer);

  }, []);

  /* SHOW LOADER */

  if (loading) {
    return <Loader />;
  }

  return (
    <>

      {/* SCROLL TOP */}

      <ScrollToTop />

      {/* SKIP LINK */}

      <a
        href="#main-content"
        className="skip-link"
      >
        Skip to content
      </a>

      {/* HEADER */}

      <Header />

      {/* WHATSAPP */}

      <Whatsapp />

      {/* MAIN CONTENT */}

      <main id="main-content">

        <Routes>

          {/* HOME */}

          <Route
            path="/"
            element={<Home />}
          />

          {/* ABOUT */}

          <Route
            path="/about"
            element={<About />}
          />

          {/* PRIVACY POLICY */}

          <Route
            path="/privacy-policy"
            element={<PrivacyPolicy />}
          />

          {/* TERMS */}

          <Route
            path="/terms-conditions"
            element={<TermsConditions />}
          />

        </Routes>

      </main>

      {/* BACK TO TOP */}

      <BackToTop />

      {/* FOOTER */}

      <Footer />

    </>
  );
}

export default App;