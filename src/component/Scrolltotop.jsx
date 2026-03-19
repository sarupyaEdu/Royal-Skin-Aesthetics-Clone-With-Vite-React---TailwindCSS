// src/ScrollToTop.jsx
import React from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top whenever the route changes
    window.scrollTo({
      top: 0,
      behavior: "smooth", // optional, for a nice smooth scroll
    });
  }, [pathname]);

  return null; // this component renders nothing
}