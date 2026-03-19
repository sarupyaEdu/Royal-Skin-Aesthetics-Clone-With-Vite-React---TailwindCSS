import React from "react";
import { FaChevronRight } from "react-icons/fa";
import PromoSection from "../component/PromoSection";

function Emsella() {
  return (
    <div className="overflow-x-hidden">
      {/* 🔹 Hero Section with overlay */}
      <section className="relative">
        <div
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/emsella-1.jpg')",
          }}
        >
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Title + Breadcrumb */}
          <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-center lg:justify-between">
              <h1 className="font-semibold text-4xl sm:text-5xl leading-tight">Emsella</h1>

              <div className="flex flex-wrap items-center gap-3 text-lg sm:text-2xl">
                <i className="font-semibold">Home</i>
                <FaChevronRight className="text-amber-400 mx-4 text-xl" />
                <i className="font-semibold">Emsella</i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Main Content Section */}
      <section className="mx-auto max-w-5xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">
        <h2 className="mb-3 text-2xl font-semibold text-amber-400 sm:text-3xl">
          Emsella Treatment in F7, Islamabad
        </h2>

        <p className="mb-4 text-xl font-semibold text-black sm:text-2xl">
          Restore Pelvic Health and Confidence with Non-Invasive Care
        </p>

        <p className="mb-5 text-base leading-relaxed text-black/80 sm:text-lg">
          Are you struggling with urinary leakage? At The Royal Skin Aesthetics
          Clinic in F7, Islamabad, our <strong>Emsella</strong> treatment offers
          a breakthrough solution for pelvic floor strengthening and urinary
          incontinence. This non-invasive therapy uses high-intensity
          electromagnetic energy to stimulate deep pelvic muscles, improving
          control and restoring confidence without surgery or downtime.
        </p>

        <p className="mb-10 text-base leading-relaxed text-black/80 sm:text-lg">
          Wondering if Emsella is the right solution for your pelvic health? How
          many sessions will it take to see results? Our expert team is here to
          answer your questions and create a personalized plan based on your
          individual needs.
        </p>

        <img
          src="https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/emsella-1.jpg"
          alt="Emsella Treatment"
          className="mx-auto h-[260px] w-full rounded-2xl object-cover shadow-lg sm:h-[380px] lg:h-[500px] lg:w-auto lg:max-w-full"
        />
      </section>

      {/* 🔹 Info Section */}
      <section className="px-8 py-12 max-w-6xl mx-auto mb-10">
        <h3 className="mb-4 text-2xl font-bold text-black sm:text-3xl">
          Who Should Opt for Emsella?
        </h3>

        <p className="text-base leading-relaxed text-black/80 sm:text-lg">
          Emsella is ideal for anyone suffering from weakened pelvic muscles,
          urinary incontinence, or postpartum recovery challenges. This
          treatment is especially beneficial for women seeking a non-surgical
          solution to regain pelvic health and improve their quality of life. If
          you’re looking for a comfortable, effective way to restore your
          confidence, Emsella may be the perfect option for you.
        </p>
      </section>

      {/* 🔹 Promo Section */}
      <section className="mb-0">
        <PromoSection />
      </section>
    </div>
  );
}

export default Emsella;
