import { Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Whatsapp from "./Components/Whatsapp";

import Home from "./Home";
import About from "./Pages/About";

function App() {

  return (
    <>

      {/* HEADER */}

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

        {/* ABOUT */}

        <Route
          path="/about"
          element={<About />}
        />

      </Routes>

      {/* FOOTER */}

      <Footer />

    </>
  );
}

export default App;