"use client";
import React, { useState, useEffect } from "react";
import { IoArrowUp } from "react-icons/io5";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  // Check scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#00d38c] text-white shadow-lg hover:bg-green-700 transition"
        >
          <IoArrowUp />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
