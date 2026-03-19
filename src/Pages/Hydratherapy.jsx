import React from "react";
import { FaChevronRight } from "react-icons/fa";
import PromoSection from "../component/PromoSection";
import { Link } from "react-router-dom";

function Hydratherapy() {
  return (
    <div className="overflow-x-hidden">
      {/* 🔹 Hero Section with overlay */}
      <section className="relative">
        <div
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/q_70.jpg')",
          }}
        >
          {/* Black overlay for readability */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Title + breadcrumb row */}
          <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-center lg:justify-between">
              <h1 className="font-semibold text-4xl sm:text-5xl leading-tight">Hydratherapy</h1>

              <div className="flex flex-wrap items-center gap-3 text-lg sm:text-2xl">
                <i className="font-semibold">Home</i>
                <FaChevronRight className="text-amber-400 mx-4 text-xl" />
                <i className="font-semibold">Hydratherapy</i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Main content */}
      <section className="mx-auto max-w-5xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">
        <h2 className="mb-3 text-2xl font-semibold text-amber-400 sm:text-3xl">
          Experience #1 Hydratherapy in F7, Islamabad
        </h2>

        <p className="mb-4 text-xl font-semibold text-black sm:text-2xl">
          Revitalize Your Skin with Deep Hydration
        </p>

        <p className="mb-5 text-base leading-relaxed text-black/80 sm:text-lg">
          Wondering if Hydratherapy can help restore your skin’s moisture
          balance? At The Royal{" "}
          <Link
            to="/services"
            className="text-[#d78b41] hover:text-[#e9a65b] underline underline-offset-2 transition-colors duration-300"
          >
            Skin Aesthetics
          </Link>{" "}
          Clinic in F7, Islamabad, our Hydratherapy treatment provides deep
          hydration, nourishing your skin and restoring its natural glow. This
          non-invasive treatment uses advanced hydration techniques to
          rejuvenate dry, tired, and dull skin, leaving it refreshed and
          radiant.
        </p>

        <p className="mb-10 text-base leading-relaxed text-black/80 sm:text-lg">
          Are you struggling with dry or flaky skin? How long does the treatment
          take, and what results can you expect? Our team of experts is here to
          address all your questions and customize the treatment to your skin’s
          specific needs.
        </p>

        <img
          src="https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/q_70.jpg"
          alt="Hydratherapy"
          className="mx-auto h-[260px] w-full rounded-2xl object-cover shadow-lg sm:h-[380px] lg:h-[500px] lg:w-auto lg:max-w-full"
        />
      </section>

      {/* 🔹 Info section */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <h3 className="mb-4 text-2xl font-bold text-black sm:text-3xl">
          Who Should Opt for Hydratherapy?
        </h3>
        <p className="text-base leading-relaxed text-black/80 sm:text-lg">
          Hydratherapy is ideal for anyone with dry, dehydrated, or dull skin.
          Whether you’re looking to restore moisture after sun exposure, combat
          the effects of aging, or simply achieve a more radiant complexion,
          this treatment is perfect for you. Suitable for all skin types,
          Hydratherapy offers a gentle yet effective solution for skin in need
          of hydration and rejuvenation.
        </p>
      </section>

      {/* 🔹 Promo Section */}
      <section className="mb-0">
        <PromoSection />
      </section>
    </div>
  );
}

export default Hydratherapy;
