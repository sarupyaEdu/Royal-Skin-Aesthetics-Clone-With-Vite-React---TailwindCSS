import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram, FaYoutube, FaRegClock } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-20"
        style={{
          backgroundImage:
            "url('https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/pattern-QKPSLY.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/90"></div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <div>
              <img
                src="https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/WhatsApp_Image_2024-09-06_at_3.33.14_PM-removebg-p.png"
                alt="Logo"
                className="h-28 w-auto rounded-lg sm:h-32"
              />
              <p className="pt-6 text-sm font-semibold leading-7 text-white/90 sm:text-base">
                At The Royal Skin Aesthetics Clinic, we are committed to
                enhancing your natural beauty with trusted and advanced skincare
                solutions.
              </p>
              <ul className="flex gap-4 pt-6">
                {[{ href: 'https://facebook.com', label: 'Facebook', icon: TiSocialFacebook }, { href: 'https://instagram.com', label: 'Instagram', icon: FaInstagram }, { href: 'https://youtube.com', label: 'YouTube', icon: FaYoutube }].map(({ href, label, icon: Icon }) => (
                  <li key={label} className="rounded-full bg-amber-400 p-2.5 text-xl transition-transform duration-300 hover:scale-110">
                    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                      <Icon />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ul className="space-y-4">
                <li className="text-xl font-semibold sm:text-2xl">Quick Links</li>
                <li className="h-1 w-24 rounded-full bg-amber-400"></li>
                <li className="transition-colors hover:text-amber-400">
                  <Link to="/about" onClick={scrollToTop}>About Us</Link>
                </li>
                <li className="transition-colors hover:text-amber-400">
                  <Link to="/services" onClick={scrollToTop}>Services</Link>
                </li>
                <li className="transition-colors hover:text-amber-400">
                  <Link to="/contact" onClick={scrollToTop}>Contact</Link>
                </li>
              </ul>
            </div>

            <div>
              <ul className="space-y-4">
                <li className="text-xl font-semibold sm:text-2xl">Useful Links</li>
                <li className="h-1 w-24 rounded-full bg-amber-400"></li>
                <li className="transition-colors hover:text-amber-400">
                  <Link to="/#" onClick={scrollToTop}>Cookie Policy</Link>
                </li>
                <li className="transition-colors hover:text-amber-400">
                  <Link to="/appointment" onClick={scrollToTop}>Book an Appointment</Link>
                </li>
              </ul>
            </div>

            <div>
              <ul className="space-y-4">
                <li className="text-xl font-semibold sm:text-2xl">Book an Appointment</li>
                <li className="h-1 w-24 rounded-full bg-amber-400"></li>
                <li className="flex items-start gap-3 leading-7">
                  <FaRegClock className="mt-1 shrink-0 text-amber-400" />
                  <span>Monday – Saturday 10am – 4pm</span>
                </li>
                <li className="flex items-start gap-3 leading-7">
                  <FaRegClock className="mt-1 shrink-0 text-amber-400" />
                  <span>Sunday – Closed</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-amber-400/70 pt-5 text-sm text-white/90 sm:mt-14">
            <div className="flex flex-col gap-3 text-center sm:text-left lg:flex-row lg:items-center lg:justify-between">
              <h1 className="font-semibold">
                Developed and managed by <span className="text-amber-400 italic">FurturLift</span>
              </h1>
              <h1 className="italic">
                © {new Date().getFullYear()} The Royal Skin Aesthetics. All rights reserved.
              </h1>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
