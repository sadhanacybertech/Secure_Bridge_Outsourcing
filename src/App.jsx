import { Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Whatsapp from "./Components/Whatsapp";

import Home from "./Home";
import About from "./Pages/About";
import PrivacyPolicy from "./Pages/Privacy-Policy";
import TermsConditions from "./Pages/Terms-Conditions";
import ScrollToTop from "./Components/ScrollToTop";

function App() {

  return (
    <>

      {/* HEADER */}
        <ScrollToTop />

      <Header />

      {/* WHATSAPP */}

      <Whatsapp />

      {/* ROUTES */}

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={<Home />}
        />

          <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

          <Route
          path="/terms-conditions"
          element={<TermsConditions />}
        />

      </Routes>

      {/* FOOTER */}

      <Footer />

    </>
  );
}

export default App;