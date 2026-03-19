import React from "react";
import { FaChevronRight } from "react-icons/fa";
import PromoSection from "../component/PromoSection";
import { Link } from "react-router-dom";

function Aptos_Face_Lift() {
  return (
    <div className="overflow-x-hidden">
      {/* 🔹 Hero Section with overlay */}
      <section className="relative">
        <div
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/fils-tenseurs-aptos-medecine-esthetique-docteur-benouaiche-paris.jpg')",
          }}
        >
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Content: title left, breadcrumb right */}
          <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-center lg:justify-between">
              <h1 className="font-semibold text-4xl sm:text-5xl">
                Aptos Face Lift
              </h1>

              {/* Breadcrumb - not linked */}
              <div className="flex items-center text-xl sm:text-2xl">
                <span className="font-semibold">Home</span>
                <FaChevronRight className="text-amber-400 mx-3 sm:mx-4 text-lg sm:text-xl" />
                <span className="font-semibold">Aptos Face Lift</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Main Content */}
      <section className="text-center px-6 sm:px-8 py-16 max-w-5xl mx-auto">
        <h2 className="mb-3 text-2xl font-semibold text-amber-400 sm:text-3xl">
          Aptos Face Lift in F7, Islamabad
        </h2>

        <p className="mb-4 text-xl font-semibold text-black sm:text-2xl">
          Lift and Rejuvenate Your Face Without Surgery
        </p>

        <p className="mb-10 text-base leading-relaxed text-black/80 sm:text-lg">
          At The Royal Skin Aesthetics Clinic in F7, Islamabad, we offer the
          Aptos face lift—a minimally{" "}
          <Link
            to="/services"
            className="text-[#d78b41] hover:text-[#e9a65b] underline underline-offset-2 transition-colors duration-300"
          >
            invasive treatment
          </Link>{" "}
          designed to lift sagging skin and restore youthful contours. Using
          innovative threads, the procedure tightens and supports the facial
          structure without surgery, providing natural-looking results with
          minimal downtime.
        </p>

        <img
          src="https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/fils-tenseurs-aptos-medecine-esthetique-docteur-benouaiche-paris.jpg"
          alt="Aptos Face Lift"
          className="mx-auto h-[260px] w-full rounded-2xl object-cover shadow-lg sm:h-[380px] lg:h-[500px] lg:w-auto lg:max-w-full"
        />
      </section>

      {/* 🔹 Info Section */}
      <section className="px-6 sm:px-8 py-12 max-w-6xl mx-auto">
        <h3 className="mb-4 text-2xl font-bold text-black sm:text-3xl">
          Who Should Opt for the Aptos Face Lift?
        </h3>
        <p className="text-base leading-relaxed text-black/80 sm:text-lg">
          The Aptos face lift is ideal for individuals with mild to moderate
          skin laxity, early jowling, or descent of facial tissues. If you’re
          seeking a non-surgical option to lift and define your facial features
          with subtle, natural results and a quick recovery, this treatment is a
          great choice for both men and women.
        </p>
      </section>

      {/* 🔹 Promo */}
      <section className="mb-0">
        <PromoSection />
      </section>
    </div>
  );
}

export default Aptos_Face_Lift;
