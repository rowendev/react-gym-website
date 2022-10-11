import React from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTopBtn() {
  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
      className="totop"
    >
      <FaArrowUp size={20} />
    </button>
  );
}

export default ScrollToTopBtn;
