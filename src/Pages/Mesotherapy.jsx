import React from "react";
import { FaChevronRight } from "react-icons/fa";
import PromoSection from "../component/PromoSection";
import { Link } from "react-router-dom";

function Mesotherapy() {
  return (
    <div className="overflow-x-hidden">
      {/* 🔹 Hero Section with black overlay */}
      <section className="relative">
        <div
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/mesotherapy-1.jpeg')",
          }}
        >
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Text content */}
          <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            {/* Title and breadcrumb on same row */}
            <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-center lg:justify-between">
              <h1 className="font-semibold text-4xl sm:text-5xl leading-tight">Mesotherapy</h1>

              <div className="flex flex-wrap items-center gap-3 text-lg sm:text-2xl">
                <i className="font-semibold">Home</i>
                <FaChevronRight className="text-amber-400 mx-4 text-xl" />
                <i className="font-semibold">Mesotherapy</i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Main Content Section */}
      <section className="mx-auto max-w-5xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">
        <h2 className="mb-3 text-2xl font-semibold text-amber-400 sm:text-3xl">
          Mesotherapy in F7, Islamabad
        </h2>

        <p className="mb-4 text-xl font-semibold text-black sm:text-2xl">
          Revitalize Your Skin with Targeted Nutrient Therapy
        </p>

        <p className="mb-5 text-base leading-relaxed text-black/80 sm:text-lg">
          Curious about how mesotherapy works? At The Royal{" "}
          <Link
            to="/services"
            className="text-[#d78b41] hover:text-[#e9a65b] underline underline-offset-2 transition-colors duration-300"
          >
            Skin Aesthetics
          </Link>{" "}
          Clinic in F7, Islamabad, we offer mesotherapy — a cutting-edge
          treatment that rejuvenates and refreshes your skin by delivering
          vitamins, enzymes, and other active ingredients directly into the
          skin’s middle layer. This non-surgical approach enhances skin
          hydration, improves texture, and reduces signs of aging.
        </p>

        <p className="mb-10 text-base leading-relaxed text-black/80 sm:text-lg">
          Wondering if it’s safe for your skin type or how many sessions you’ll
          need? Our experts are here to answer your questions and provide a
          personalized plan tailored to your concerns.
        </p>

        <img
          src="https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/mesotherapy-1.jpeg"
          alt="Mesotherapy"
          className="mx-auto h-[260px] w-full rounded-2xl object-cover shadow-lg sm:h-[380px] lg:h-[500px] lg:w-auto lg:max-w-full"
        />
      </section>

      {/* 🔹 Info Section */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <h3 className="mb-4 text-2xl font-bold text-black sm:text-3xl">
          Who Should Opt for Mesotherapy?
        </h3>

        <p className="text-base leading-relaxed text-black/80 sm:text-lg">
          Mesotherapy is ideal for improving hydration, tone, and elasticity.
          It’s also effective for fine lines, wrinkles, and pigmentation issues.
          If you want a non-invasive way to rejuvenate your skin and achieve a
          youthful glow, mesotherapy is a great choice.
        </p>
      </section>

      {/* 🔹 Promo Section */}
      <section className="mb-0">
        <PromoSection />
      </section>
    </div>
  );
}

export default Mesotherapy;
