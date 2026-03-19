import React from "react";
import { FaChevronRight } from "react-icons/fa";
import PromoSection from "../component/PromoSection";
import { Link } from "react-router-dom";

function Fat_Dissolving() {
  return (
    <div className="overflow-x-hidden">
      {/* 🔹 Hero Section with gradient overlay */}
      <section className="relative">
        <div
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/Aesthetician-performing-fat-dissolving-treatment.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Content: title left, breadcrumb right */}
          <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 sm:py-28 md:py-32 text-white">
            <div className="flex justify-between items-center gap-y-4 flex-wrap">
              <h1 className="font-semibold text-4xl sm:text-5xl leading-tight">
                Fat Dissolving Injection
              </h1>

              {/* Breadcrumb – not linked */}
              <div className="flex items-center text-lg sm:text-2xl">
                <span className="font-semibold">Home</span>
                <FaChevronRight className="text-amber-400 mx-3 sm:mx-4 text-xl sm:text-2xl" />
                <span className="font-semibold">Fat Dissolving Injection</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Main Content */}
      <section className="text-center px-6 sm:px-8 py-16 max-w-5xl mx-auto">
        <h2 className="mb-3 text-2xl font-semibold text-amber-400 sm:text-3xl">
          #1 Fat Dissolving Injections in Islamabad
        </h2>

        <p className="mb-4 text-xl font-semibold text-black sm:text-2xl">
          Target Stubborn Fat and Achieve a Slimmer Look
        </p>

        <p className="text-lg text-black/80 mb-6 leading-relaxed">
          Are you struggling with localized fat that won’t budge? At The Royal{" "}
          <Link
            to="/services"
            className="text-[#d78b41] hover:text-[#e9a65b] underline underline-offset-2 transition-colors duration-300"
          >
            Skin Aesthetics
          </Link>{" "}
          Clinic in F7, Islamabad, our fat dissolving injections offer a
          non-surgical solution to eliminate stubborn fat deposits. These
          specially formulated injections break down and remove fat cells in
          areas resistant to diet and exercise—helping you achieve a more
          contoured appearance.
        </p>

        <p className="mb-10 text-base leading-relaxed text-black/80 sm:text-lg">
          Curious about effectiveness for the chin, abdomen, or thighs? How many
          sessions will you need? Our expert team will assess your goals and
          personalize a treatment plan for your body’s needs.
        </p>

        <img
          src="https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/Aesthetician-performing-fat-dissolving-treatment.jpg"
          alt="Fat Dissolving Injection procedure"
          loading="lazy"
          className="mx-auto h-[260px] w-full rounded-2xl object-cover shadow-lg sm:h-[380px] lg:h-[500px] lg:w-auto lg:max-w-full"
        />
      </section>

      {/* 🔹 Info Section */}
      <section className="px-6 sm:px-8 py-12 max-w-6xl mx-auto">
        <h3 className="mb-4 text-2xl font-bold text-black sm:text-3xl">
          Who Should Opt for Fat Dissolving Injections?
        </h3>
        <p className="text-base leading-relaxed text-black/80 sm:text-lg">
          Fat dissolving injections are ideal for individuals close to their
          ideal weight who struggle with small, stubborn pockets of fat that do
          not respond to traditional weight loss methods. If you’re seeking a
          minimally invasive way to refine your body shape and target specific
          areas, this treatment is a great choice.
        </p>
      </section>

      {/* 🔹 Promo */}
      <section className="mb-0">
        <PromoSection />
      </section>
    </div>
  );
}

export default Fat_Dissolving;
