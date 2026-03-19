import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import PromoSection from "../component/PromoSection";

function Botox_injection() {
  return (
    <div className="overflow-x-hidden">
      {/* 🔹 Hero Section with overlay */}
      <section className="relative">
        <div
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/botox-2020-01-13-5e1c430703002.jpg')",
          }}
        >
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Text content */}
          <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            {/* Flex row: Title left + breadcrumb right */}
            <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-center lg:justify-between">
              <h1 className="font-semibold text-4xl sm:text-5xl leading-tight">Botox</h1>

              <div className="flex flex-wrap items-center gap-3 text-lg sm:text-2xl">
                <i className="font-semibold">Home</i>
                <FaChevronRight className="text-amber-400 mx-4 text-xl" />
                <i className="font-semibold">Botox</i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Main Content Section */}
      <section className="mx-auto max-w-5xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">
        <h2 className="mb-3 text-2xl font-semibold text-amber-400 sm:text-3xl">
          Botox Treatments in F7, Islamabad
        </h2>

        <p className="mb-4 text-xl font-semibold text-black sm:text-2xl">
          Smooth Away Wrinkles and Restore a Youthful Look
        </p>

        <p className="mb-5 text-base leading-relaxed text-black/80 sm:text-lg">
          Do you wonder how Botox can soften your wrinkles? At The Royal Skin
          Aesthetics Clinic in F7, Islamabad, our expert Botox{" "}
          <Link
            to="/services"
            className="text-[#d78b41] hover:text-[#e9a65b] underline underline-offset-2 transition-colors duration-300"
          >
            treatments
          </Link>{" "}
          help you achieve a smoother, more youthful appearance by reducing fine
          lines and wrinkles. This non-invasive procedure offers quick and
          noticeable results — perfect for those looking to refresh their facial
          features without downtime.
        </p>

        <p className="mb-10 text-base leading-relaxed text-black/80 sm:text-lg">
          Do you wonder how Botox can soften your wrinkles? How long does the
          effect last, and will it look natural? Our skilled professionals are
          here to answer your questions and customize a Botox treatment plan
          based on your aesthetic goals.
        </p>

        <img
          src="https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/botox-2020-01-13-5e1c430703002.jpg"
          alt="Botox Treatment"
          className="mx-auto h-[260px] w-full rounded-2xl object-cover shadow-lg sm:h-[380px] lg:h-[500px] lg:w-auto lg:max-w-full"
        />
      </section>

      {/* 🔹 Info Section */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <h3 className="mb-4 text-2xl font-bold text-black sm:text-3xl">
          Who Should Opt for Botox?
        </h3>
        <p className="text-base leading-relaxed text-black/80 sm:text-lg">
          Botox is ideal for anyone looking to reduce the appearance of crow’s
          feet, frown lines, or forehead wrinkles. If you’re seeking a
          non-surgical solution to maintain a youthful, refreshed look with
          minimal downtime, Botox is a great option for you. Suitable for both
          men and women, Botox offers subtle, natural-looking results that
          enhance your features without altering your expressions.
        </p>
      </section>

      {/* 🔹 Promo Section */}
      <section className="mb-0">
        <PromoSection />
      </section>
    </div>
  );
}

export default Botox_injection;
