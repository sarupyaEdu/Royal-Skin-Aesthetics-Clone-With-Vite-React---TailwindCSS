import React from "react";
import { FaChevronRight } from "react-icons/fa";
import PromoSection from "../component/PromoSection";
import { Link } from "react-router-dom";

function Exosomes() {
  return (
    <div className="overflow-x-hidden">
      {/* 🔹 Hero Section with overlay */}
      <section className="relative">
        <div
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/intro-1684092062.jpg')",
          }}
        >
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Text content */}
          <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            {/* Title and breadcrumb in same row */}
            <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-center lg:justify-between">
              <h1 className="font-semibold text-4xl sm:text-5xl leading-tight">Exosomes</h1>

              <div className="flex flex-wrap items-center gap-3 text-lg sm:text-2xl">
                <i className="font-semibold">Home</i>
                <FaChevronRight className="text-amber-400 mx-4 text-xl" />
                <i className="font-semibold">Exosomes</i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Main Content Section */}
      <section className="mx-auto max-w-5xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">
        <h2 className="mb-3 text-2xl font-semibold text-amber-400 sm:text-3xl">
          Exosome Therapy in F7, Islamabad
        </h2>

        <p className="mb-4 text-xl font-semibold text-black sm:text-2xl">
          Advanced Skin Repair and Rejuvenation at The Royal Skin Aesthetics
          Clinic
        </p>

        <p className="mb-5 text-base leading-relaxed text-black/80 sm:text-lg">
          Wondering how it differs from other{" "}
          <Link
            to="/services"
            className="text-[#d78b41] hover:text-[#e9a65b] underline underline-offset-2 transition-colors duration-300"
          >
            skin treatments
          </Link>
          ? At The Royal Skin Aesthetics Clinic in F7, Islamabad, we offer
          cutting-edge exosome therapy to promote advanced skin healing and
          regeneration. Exosomes are tiny messengers derived from stem cells
          that deliver powerful growth factors to your skin, helping to repair
          damaged cells and stimulate collagen production — resulting in a
          youthful, glowing complexion.
        </p>

        <p className="mb-10 text-base leading-relaxed text-black/80 sm:text-lg">
          Curious about how exosome therapy works? How long will it take to see
          the results? Our expert team is here to guide you through this
          rejuvenating process with care and precision.
        </p>

        <img
          src="https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/intro-1684092062.jpg"
          alt="Exosome Therapy"
          className="mx-auto h-[260px] w-full rounded-2xl object-cover shadow-lg sm:h-[380px] lg:h-[500px] lg:w-auto lg:max-w-full"
        />
      </section>

      {/* 🔹 Info Section */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <h3 className="mb-4 text-2xl font-bold text-black sm:text-3xl">
          Who Should Opt for Exosome Therapy?
        </h3>

        <p className="text-base leading-relaxed text-black/80 sm:text-lg">
          Exosome therapy is ideal for individuals seeking a non-invasive
          solution to rejuvenate their skin and reverse signs of aging. If you
          have sun damage, fine lines, acne scars, or simply want to enhance
          your skin’s texture and glow, exosome therapy offers an advanced
          approach to achieving healthy, youthful skin.
        </p>
      </section>

      {/* 🔹 Promo Section */}
      <section className="mb-0">
        <PromoSection />
      </section>
    </div>
  );
}

export default Exosomes;
