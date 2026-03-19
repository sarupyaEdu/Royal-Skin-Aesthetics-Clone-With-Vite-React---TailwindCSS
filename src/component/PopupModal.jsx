// PopupModal.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const PopupModal = ({ children, onClose, open = false }) => {
  if (!open) return null; // <-- SAFETY: never show unless open is true

  // (optional) close on Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      onClick={(e) => e.target === e.currentTarget && onClose?.()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-[60]"
      role="dialog"
      aria-modal="true"
    >
      <motion.div
        initial={{ y: 50, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="relative bg-gradient-to-b from-white via-gray-50 to-gray-100 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.3)] p-8 w-[90%] max-w-md text-center border border-white/30"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition-transform hover:scale-125"
          aria-label="Close"
        >
          <FaTimes className="text-2xl" />
        </button>

        <div className="relative z-10">{children}</div>
        <div className="absolute inset-0 rounded-3xl border border-amber-400/20 pointer-events-none" />
      </motion.div>
    </motion.div>
  );
};

export default PopupModal;
