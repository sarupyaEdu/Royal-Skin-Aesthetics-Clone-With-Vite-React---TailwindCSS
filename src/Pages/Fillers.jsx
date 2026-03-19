import React from "react";
import { FaChevronRight } from "react-icons/fa";
import PromoSection from "../component/PromoSection";
import { Link } from "react-router-dom";

function Fillers() {
  return (
    <div className="overflow-x-hidden">
      {/* 🔹 Hero Section with overlay */}
      <section className="relative">
        <div
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/botox-injection-botox-vs-fillers-1.jpg')",
          }}
        >
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Text content */}
          <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            {/* Title + Breadcrumb in one line */}
            <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-center lg:justify-between">
              <h1 className="font-semibold text-4xl sm:text-5xl leading-tight">Fillers</h1>

              <div className="flex flex-wrap items-center gap-3 text-lg sm:text-2xl">
                <i className="font-semibold">Home</i>
                <FaChevronRight className="text-amber-400 mx-4 text-xl" />
                <i className="font-semibold">Fillers</i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Main Content Section */}
      <section className="mx-auto max-w-5xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">
        <h2 className="mb-3 text-2xl font-semibold text-amber-400 sm:text-3xl">
          Dermal Fillers in F7, Islamabad
        </h2>

        <p className="mb-4 text-xl font-semibold text-black sm:text-2xl">
          Enhance Your Natural Beauty with Precision and Care
        </p>

        <p className="mb-5 text-base leading-relaxed text-black/80 sm:text-lg">
          Wondering if fillers are right for you? At The Royal{" "}
          <Link
            to="/services"
            className="text-[#d78b41] hover:text-[#e9a65b] underline underline-offset-2 transition-colors duration-300"
          >
            Skin Aesthetics
          </Link>{" "}
          Clinic in F7, Islamabad, our dermal filler treatments are designed to
          add volume, smooth out wrinkles, and enhance your facial contours.
          Whether you’re looking to plump your lips, define your cheekbones, or
          reduce deep lines, our expert team ensures a natural and refreshed
          appearance using the latest filler techniques.
        </p>

        <p className="mb-10 text-base leading-relaxed text-black/80 sm:text-lg">
          How long do results last? Is the treatment painful? Our specialists
          are here to answer all your questions, ensuring you feel confident and
          informed before starting your filler journey.
        </p>

        <img
          src="https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/botox-injection-botox-vs-fillers-1.jpg"
          alt="Fillers Treatment"
          className="mx-auto h-[260px] w-full rounded-2xl object-cover shadow-lg sm:h-[380px] lg:h-[500px] lg:w-auto lg:max-w-full"
        />
      </section>

      {/* 🔹 Info Section */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <h3 className="mb-4 text-2xl font-bold text-black sm:text-3xl">
          Who Should Opt for Fillers?
        </h3>

        <p className="text-base leading-relaxed text-black/80 sm:text-lg">
          Dermal fillers are ideal for anyone looking to restore volume, smooth
          out wrinkles, or enhance their facial features without surgery. If you
          want to achieve a youthful, refreshed appearance with minimal
          downtime, fillers are the perfect option for you. Suitable for both
          men and women, fillers provide immediate, natural-looking results.
        </p>
      </section>

      {/* 🔹 Promo Section */}
      <section className="mb-0">
        <PromoSection />
      </section>
    </div>
  );
}

export default Fillers;
