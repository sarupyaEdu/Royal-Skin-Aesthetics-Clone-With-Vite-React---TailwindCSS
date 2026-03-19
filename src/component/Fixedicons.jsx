// Fixedicons.jsx
import React, { useState } from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import PopupModal from "./PopupModal";

function Fixedicons() {
  const [popupType, setPopupType] = useState(null);
  const handleClose = () => setPopupType(null);

  return (
    <div>
      {/* floating buttons */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2 sm:bottom-20 sm:right-5 sm:gap-3">
        <button
          onClick={() => setPopupType("call")}
          className="rounded-full bg-amber-500 p-2.5 text-xl transition-colors hover:bg-gray-700 hover:text-amber-400 sm:p-3 sm:text-2xl"
          aria-label="Open call modal"
        >
          <FaPhone />
        </button>

        <button
          onClick={() => setPopupType("whatsapp")}
          className="rounded-full bg-green-600 p-2.5 text-2xl transition-colors hover:bg-gray-700 hover:text-green-600 sm:text-3xl"
          aria-label="Open WhatsApp modal"
        >
          <FaWhatsapp />
        </button>
      </div>

      {/* modal */}
      <PopupModal open={!!popupType} onClose={handleClose}>
        {popupType === "whatsapp" ? (
          <>
            <h2 className="text-xl font-bold mb-3">Chat on WhatsApp</h2>
            <p className="mb-3">Would you like to start a chat on WhatsApp?</p>
            <a
              href="https://wa.me/923315130307"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded-lg inline-block"
            >
              Open WhatsApp
            </a>
          </>
        ) : (
          <>
            <h2 className="text-xl font-bold mb-3">Make a Call</h2>
            <p className="mb-3">Would you like to call our support?</p>
            <a
              href="tel:+923315130307"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg inline-block"
            >
              Call Now
            </a>
          </>
        )}
      </PopupModal>
    </div>
  );
}

export default Fixedicons;
