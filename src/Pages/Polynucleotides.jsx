import React from "react";
import { FaChevronRight } from "react-icons/fa";
import PromoSection from "../component/PromoSection";
import { Link } from "react-router-dom";

function Polynucleotides() {
  return (
    <div className="overflow-x-hidden">
      {/* 🔹 Hero Section with overlay */}
      <section className="relative">
        <div
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/polynucleotide-treatment.jpg')",
          }}
        >
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Content: title left, breadcrumb right */}
          <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-center lg:justify-between">
              <h1 className="font-semibold text-4xl sm:text-5xl">
                Polynucleotides
              </h1>

              {/* Breadcrumb - not linked */}
              <div className="flex items-center text-xl sm:text-2xl">
                <span className="font-semibold">Home</span>
                <FaChevronRight className="text-amber-400 mx-3 sm:mx-4 text-lg sm:text-xl" />
                <span className="font-semibold">Polynucleotides</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Main Content */}
      <section className="text-center px-6 sm:px-8 py-16 max-w-5xl mx-auto">
        <h2 className="mb-3 text-2xl font-semibold text-amber-400 sm:text-3xl">
          Polynucleotide Treatments in F7, Islamabad
        </h2>

        <p className="mb-4 text-xl font-semibold text-black sm:text-2xl">
          Advanced Skin Rejuvenation and Repair for Radiant Results
        </p>

        <p className="mb-10 text-base leading-relaxed text-black/80 sm:text-lg">
          Are you wondering how Polynucleotides work to improve your skin? At
          The Royal{" "}
          <Link
            to="/services"
            className="text-[#d78b41] hover:text-[#e9a65b] underline underline-offset-2 transition-colors duration-300"
          >
            Skin Aesthetics
          </Link>{" "}
          Clinic in F7, Islamabad, our Polynucleotide treatments offer
          cutting-edge skin rejuvenation using innovative technology.
          Polynucleotides, derived from natural sources, help to stimulate
          cellular regeneration and repair, enhancing skin texture and
          elasticity for a more youthful appearance.
        </p>
        <p className="mb-10 text-base leading-relaxed text-black/80 sm:text-lg">
          What specific skin issues can they address? How many sessions will you
          need to see visible results? Our experts are here to provide answers
          and tailor the treatment to meet your unique skin care needs.
        </p>

        <img
          src="https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/polynucleotide-treatment.jpg"
          alt="Polynucleotides"
          className="mx-auto h-[260px] w-full rounded-2xl object-cover shadow-lg sm:h-[380px] lg:h-[500px] lg:w-auto lg:max-w-full"
        />
      </section>

      {/* 🔹 Info Section */}
      <section className="px-6 sm:px-8 py-12 max-w-6xl mx-auto">
        <h3 className="mb-4 text-2xl font-bold text-black sm:text-3xl">
          Who Should Opt for Polynucleotides?
        </h3>
        <p className="text-base leading-relaxed text-black/80 sm:text-lg">
          Polynucleotide treatments are ideal for individuals seeking to
          revitalize their skin, improve texture, and reduce signs of aging. If
          you’re looking for a non-invasive solution to enhance skin quality and
          promote a more youthful glow, Polynucleotides are a great choice for
          your skin.
        </p>
      </section>

      {/* 🔹 Promo */}
      <section className="mb-0">
        <PromoSection />
      </section>
    </div>
  );
}

export default Polynucleotides;
