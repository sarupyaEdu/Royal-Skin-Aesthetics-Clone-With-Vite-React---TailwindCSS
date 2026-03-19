import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import Header from "./Header";
import PopupModal from "./PopupModal";

const services = [
  "Laser Hair Reduction",
  "Aptos Face Lift",
  "Body Fillers",
  "Botox",
  "Chemical Peels",
  "Emsculpt Fat Reduction",
  "Emsella",
  "Exosomes",
  "Fat Dissolving Injection",
  "Fillers",
  "HIFU",
  "Hydrafacial",
  "Hydratherapy",
  "Mesotherapy",
  "PRP Face & Scalp",
  "Q-Switch",
  "Threads",
  "Polynucleotides",
];

function Navbar() {
  const [showPopup, setShowPopup] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    `transition ${
      isActive ? "text-amber-400" : "text-white hover:text-amber-400"
    }`;

  return (
    <div className="relative z-50">
      <Header />

      <motion.nav
        className="bg-zinc-800"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10 xl:px-16">
          {/* Logo */}
          <div className="shrink-0">
            <NavLink to="/">
              <img
                src="https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/WhatsApp_Image_2024-09-06_at_3.33.14_PM-removebg-p.png"
                alt="Logo"
                className="h-14 w-auto cursor-pointer transition hover:opacity-90 sm:h-16 lg:h-20"
              />
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex cursor-pointer items-center gap-8 xl:gap-12 font-semibold text-base xl:text-lg text-white">
              <li>
                <NavLink to="/" className={navLinkClass}>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" className={navLinkClass}>
                  About
                </NavLink>
              </li>

              {/* Services Dropdown */}
              <li className="relative services-dropdown group before:content-[''] before:absolute before:inset-x-0 before:top-full before:h-3">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `flex items-center gap-1 transition ${
                      isActive
                        ? "text-amber-400"
                        : "text-white hover:text-amber-400"
                    }`
                  }
                >
                  <span>Services</span>
                  <FiChevronDown className="text-sm transition-transform duration-200 group-hover:rotate-180" />
                </NavLink>

                <ul
                  className="absolute left-0 top-full mt-2 max-h-[70vh] w-64 overflow-y-auto rounded-lg bg-white py-2 text-black shadow-lg z-50
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible
                  transition-all duration-200 pointer-events-none group-hover:pointer-events-auto"
                >
                  {services.map((service, idx) => (
                    <li key={idx}>
                      <NavLink
                        to={`/${service.toLowerCase().replace(/ & | /g, "-")}`}
                        className={({ isActive }) =>
                          `block px-4 py-2 transition hover:bg-amber-100 ${
                            isActive
                              ? "bg-amber-100 font-semibold text-amber-600"
                              : ""
                          }`
                        }
                      >
                        {service}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>

              <li>
                <NavLink to="/appointment" className={navLinkClass}>
                  Book an Appointment
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact" className={navLinkClass}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Desktop Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => setShowPopup(true)}
              className="cursor-pointer h-10 xl:h-11 min-w-[180px] xl:min-w-[200px] rounded-[20px] bg-blue-900 px-5 font-semibold text-white shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:bg-amber-500"
            >
              Make an Appointment
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-lg border border-white/20 p-2 text-white transition hover:bg-white/10 lg:hidden"
            aria-label="Open menu"
          >
            <FiMenu className="text-3xl" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
            />

            <motion.div
              className="fixed right-0 top-0 z-[60] flex h-screen w-[88%] max-w-sm flex-col bg-zinc-900 text-white shadow-2xl lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28 }}
            >
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
                <img
                  src="https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/WhatsApp_Image_2024-09-06_at_3.33.14_PM-removebg-p.png"
                  alt="Logo"
                  className="h-12 w-auto"
                />
                <button
                  type="button"
                  onClick={closeMobileMenu}
                  className="rounded-lg p-2 transition hover:bg-white/10"
                  aria-label="Close menu"
                >
                  <FiX className="text-3xl" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-5">
                <ul className="space-y-2 text-base font-semibold">
                  <li>
                    <NavLink
                      to="/"
                      onClick={closeMobileMenu}
                      className={({ isActive }) =>
                        `block rounded-xl px-4 py-3 transition ${
                          isActive
                            ? "bg-amber-400 text-black"
                            : "text-white hover:bg-white/10"
                        }`
                      }
                    >
                      Home
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/about"
                      onClick={closeMobileMenu}
                      className={({ isActive }) =>
                        `block rounded-xl px-4 py-3 transition ${
                          isActive
                            ? "bg-amber-400 text-black"
                            : "text-white hover:bg-white/10"
                        }`
                      }
                    >
                      About
                    </NavLink>
                  </li>

                  {/* Mobile Services */}
                  <li className="rounded-xl bg-white/5">
                    <NavLink
                      to="/services"
                      onClick={closeMobileMenu}
                      className={({ isActive }) =>
                        `flex items-center justify-between rounded-xl px-4 py-3 transition ${
                          isActive
                            ? "bg-amber-400 text-black"
                            : "text-white hover:bg-white/10"
                        }`
                      }
                    >
                      <span>Services</span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setMobileServicesOpen((prev) => !prev);
                        }}
                        className="ml-3 rounded p-1"
                        aria-label="Toggle services menu"
                      >
                        <FiChevronDown
                          className={`text-xl transition-transform duration-200 ${
                            mobileServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </NavLink>

                    <AnimatePresence initial={false}>
                      {mobileServicesOpen && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden px-2 pb-2"
                        >
                          {services.map((service, idx) => (
                            <li key={idx}>
                              <NavLink
                                to={`/${service.toLowerCase().replace(/ & | /g, "-")}`}
                                onClick={closeMobileMenu}
                                className={({ isActive }) =>
                                  `block rounded-lg px-3 py-2 text-sm transition ${
                                    isActive
                                      ? "bg-amber-400 text-black"
                                      : "text-white/90 hover:bg-white/10"
                                  }`
                                }
                              >
                                {service}
                              </NavLink>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>

                  <li>
                    <NavLink
                      to="/appointment"
                      onClick={closeMobileMenu}
                      className={({ isActive }) =>
                        `block rounded-xl px-4 py-3 transition ${
                          isActive
                            ? "bg-amber-400 text-black"
                            : "text-white hover:bg-white/10"
                        }`
                      }
                    >
                      Book an Appointment
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/contact"
                      onClick={closeMobileMenu}
                      className={({ isActive }) =>
                        `block rounded-xl px-4 py-3 transition ${
                          isActive
                            ? "bg-amber-400 text-black"
                            : "text-white hover:bg-white/10"
                        }`
                      }
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div className="border-t border-white/10 p-4">
                <button
                  onClick={() => {
                    setShowPopup(true);
                    closeMobileMenu();
                  }}
                  className="w-full rounded-full bg-blue-900 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-amber-500"
                >
                  Make an Appointment
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <PopupModal open={showPopup} onClose={() => setShowPopup(false)}>
        <h2 className="mb-3 text-2xl font-bold text-amber-500">
          Book Your Appointment
        </h2>
        <p className="mb-6 text-gray-700">
          Please fill out your details and our team will contact you shortly.
        </p>
        <a
          href="tel:+923315130307"
          className="inline-block rounded-full bg-amber-400 px-6 py-2 font-semibold text-white transition hover:bg-amber-500"
        >
          Call Now
        </a>
      </PopupModal>
    </div>
  );
}

export default Navbar;
