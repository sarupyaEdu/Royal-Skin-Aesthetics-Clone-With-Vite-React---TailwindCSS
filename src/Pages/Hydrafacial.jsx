import React from "react";
import { FaChevronRight } from "react-icons/fa";
import PromoSection from "../component/PromoSection";
import { Link } from "react-router-dom";

function Hydrafacial() {
  return (
    <div className="overflow-x-hidden">
      {/* 🔹 Hero Section with overlay */}
      <section className="relative">
        <div
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/HydraFacial-1200x800-1.jpg')",
          }}
        >
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-center lg:justify-between">
              {/* Title */}
              <h1 className="font-semibold text-4xl sm:text-5xl leading-tight">Hydrafacial</h1>

              {/* Breadcrumb (aligned right) */}
              <div className="flex flex-wrap items-center gap-3 text-lg sm:text-2xl">
                <i className="font-semibold">Home</i>
                <FaChevronRight className="text-amber-400 mx-4 text-xl" />
                <i className="font-semibold">Hydrafacial</i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Main content */}
      <section className="mx-auto max-w-5xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">
        <h2 className="mb-3 text-2xl font-semibold text-amber-400 sm:text-3xl">
          #1 Hydrafacial in F7, Islamabad
        </h2>

        <p className="mb-4 text-xl font-semibold text-black sm:text-2xl">
          Deep Cleanse and Hydrate Your Skin for a Radiant Glow
        </p>

        <p className="mb-5 text-base leading-relaxed text-black/80 sm:text-lg">
          Wondering how a Hydrafacial differs from other facials? At The Royal{" "}
          <Link
            to="/services"
            className="text-[#d78b41] hover:text-[#e9a65b] underline underline-offset-2 transition-colors duration-300"
          >
            Skin Aesthetics
          </Link>{" "}
          Clinic in F7, Islamabad, we offer Hydrafacial treatments designed to
          deeply cleanse, exfoliate, and hydrate your skin, leaving it smooth
          and glowing. This non-invasive, multi-step facial targets impurities
          and provides intense moisture, restoring your skin’s natural radiance.
        </p>

        <p className="mb-10 text-base leading-relaxed text-black/80 sm:text-lg">
          Is it suitable for your skin type? How often should you get it for the
          best results? Our expert team is here to address all your questions
          and customize the treatment to your specific skincare needs.
        </p>

        <img
          src="https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/HydraFacial-1200x800-1.jpg"
          alt="Hydrafacial"
          className="mx-auto h-[260px] w-full rounded-2xl object-cover shadow-lg sm:h-[380px] lg:h-[500px] lg:w-auto lg:max-w-full"
        />
      </section>

      {/* 🔹 Info Section */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <h3 className="mb-4 text-2xl font-bold text-black sm:text-3xl">
          Who Should Opt for a Hydrafacial?
        </h3>
        <p className="text-base leading-relaxed text-black/80 sm:text-lg">
          Hydrafacial is ideal for anyone looking to improve skin texture,
          minimize pores, or treat issues like dullness, dehydration, or mild
          acne. It’s a gentle, effective option for all skin types and is
          perfect for those who want an immediate, radiant glow without
          downtime.
        </p>
      </section>

      {/* 🔹 Promo Section */}
      <section className="mb-0">
        <PromoSection />
      </section>
    </div>
  );
}

export default Hydrafacial;
