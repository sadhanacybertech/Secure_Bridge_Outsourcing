// Components/BackToTop.jsx

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./BackToTop.css";
function BackToTop() {

  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 300) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (

    <button
      className={`back-to-top ${showBtn ? "show" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >

      <FaArrowUp />

    </button>
  );
}

export default BackToTop;