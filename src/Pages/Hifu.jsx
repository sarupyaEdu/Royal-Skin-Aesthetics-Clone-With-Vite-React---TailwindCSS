import React from "react";
import { FaChevronRight } from "react-icons/fa";
import PromoSection from "../component/PromoSection";
import { Link } from "react-router-dom";

function Hifu() {
  return (
    <div className="overflow-x-hidden">
      {/* 🔹 Hero Section with overlay */}
      <section className="relative">
        <div
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/woman-getting-facial-lifting-therapy-in-beauty-salon-picture-id1320167303.jpg')",
          }}
        >
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Content: title left, breadcrumb right */}
          <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-center lg:justify-between">
              <h1 className="font-semibold text-4xl sm:text-5xl">HIFU</h1>

              {/* Breadcrumb (not linked) */}
              <nav
                aria-label="Breadcrumb"
                className="flex items-center text-xl sm:text-2xl"
              >
                <span className="font-semibold">Home</span>
                <FaChevronRight className="text-amber-400 mx-3 sm:mx-4 text-lg sm:text-xl" />
                <span className="font-semibold">HIFU</span>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Main Content */}
      <section className="text-center px-6 sm:px-8 py-16 max-w-5xl mx-auto">
        <h2 className="mb-3 text-2xl font-semibold text-amber-400 sm:text-3xl">
          HIFU Treatment in F7, Islamabad
        </h2>

        <p className="mb-4 text-xl font-semibold text-black sm:text-2xl">
          Non-Surgical Skin Tightening and Lifting
        </p>

        <p className="text-lg text-black/80 mb-6 leading-relaxed">
          Are you looking for a way to lift and firm your skin without going
          under the knife? At The Royal{" "}
          <Link
            to="/services"
            className="text-[#d78b41] hover:text-[#e9a65b] underline underline-offset-2 transition-colors duration-300"
          >
            Skin Aesthetics
          </Link>{" "}
          Clinic in F7, Islamabad, we offer HIFU (High-Intensity Focused
          Ultrasound) treatments for non-invasive skin tightening and lifting.
          This advanced technology targets deep layers of the skin, stimulating
          collagen production to reduce sagging and improve skin elasticity
          without the need for surgery.
        </p>
        <p className="mb-10 text-base leading-relaxed text-black/80 sm:text-lg">
          How many sessions will you need to see results? Is HIFU painful? Our
          team of experts will address all your concerns and guide you through
          the process, ensuring a customized treatment plan tailored to your
          skin’s needs.
        </p>

        <img
          src="https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/woman-getting-facial-lifting-therapy-in-beauty-salon-picture-id1320167303.jpg"
          alt="HIFU treatment at The Royal Skin Aesthetics Clinic"
          className="mx-auto h-[260px] w-full rounded-2xl object-cover shadow-lg sm:h-[380px] lg:h-[500px] lg:w-auto lg:max-w-full"
        />
      </section>

      {/* 🔹 Info Section */}
      <section className="px-6 sm:px-8 py-12 max-w-6xl mx-auto">
        <h3 className="mb-4 text-2xl font-bold text-black sm:text-3xl">
          Who Should Opt for HIFU?
        </h3>
        <p className="text-base leading-relaxed text-black/80 sm:text-lg">
          HIFU is ideal for those who want a non-surgical facelift or skin
          tightening solution. It’s perfect for individuals looking to reduce
          fine lines, wrinkles, or sagging skin on the face and neck. If you’re
          seeking a safe, effective way to rejuvenate your skin without
          downtime, HIFU is the right choice for you.
        </p>
      </section>

      {/* 🔹 Promo */}
      <section className="mb-0">
        <PromoSection />
      </section>
    </div>
  );
}

export default Hifu;
