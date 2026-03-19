import React from "react";
import { FaChevronRight } from "react-icons/fa";
import PromoSection from "../component/PromoSection";
import { Link } from "react-router-dom";

function Emsculpt_Fat_Reduction() {
  return (
    <div className="overflow-x-hidden">
      {/* 🔹 Hero Section with black overlay */}
      <section className="relative">
        <div
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/Emsculpt_Neo_PIC_Female-Model-Applicator-Abdomen-41_EN100-scaled-1.jpg')",
          }}
        >
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Title + breadcrumb */}
          <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-center lg:justify-between">
              <h1 className="font-semibold text-4xl sm:text-5xl leading-tight">Emsculpt Fat Reduction</h1>

              <div className="flex flex-wrap items-center gap-3 text-lg sm:text-2xl">
                <i className="font-semibold">Home</i>
                <FaChevronRight className="text-amber-400 mx-4 text-xl" />
                <i className="font-semibold">Emsculpt Fat Reduction</i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Main content */}
      <section className="mx-auto max-w-5xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">
        <h2 className="mb-3 text-2xl font-semibold text-amber-400 sm:text-3xl">
          Emsculpt Fat Reduction in F7, Islamabad
        </h2>

        <p className="mb-4 text-xl font-semibold text-black sm:text-2xl">
          Sculpt Your Body and Build Muscle Without Surgery
        </p>

        <p className="mb-5 text-base leading-relaxed text-black/80 sm:text-lg">
          Is it painful or completely safe? At The Royal Skin Aesthetics Clinic
          in F7, Islamabad, we offer Emsculpt — an innovative fat reduction
          treatment that not only burns fat but also builds muscle. This
          non-invasive procedure uses electromagnetic technology to target
          specific areas of your body, giving you a toned and sculpted
          appearance without the need for surgery.
        </p>

        <p className="mb-10 text-base leading-relaxed text-black/80 sm:text-lg">
          Wondering how Emsculpt works? How many sessions will it take to see
          results? Our team is here to answer all your questions and customize a{" "}
          <Link
            to="/services"
            className="text-[#d78b41] hover:text-[#e9a65b] underline underline-offset-2 transition-colors duration-300"
          >
            treatment
          </Link>{" "}
          plan that fits your body goals.
        </p>

        <img
          src="https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/Emsculpt_Neo_PIC_Female-Model-Applicator-Abdomen-41_EN100-scaled-1.jpg"
          alt="Emsculpt Fat Reduction"
          className="mx-auto h-[260px] w-full rounded-2xl object-cover shadow-lg sm:h-[380px] lg:h-[500px] lg:w-auto lg:max-w-full"
        />
      </section>

      {/* 🔹 Info section */}
      <section className="px-8 py-12 max-w-6xl mx-auto mb-10">
        <h3 className="mb-4 text-2xl font-bold text-black sm:text-3xl">
          Who Should Opt for Emsculpt Fat Reduction?
        </h3>

        <p className="text-base leading-relaxed text-black/80 sm:text-lg">
          Emsculpt is ideal for those looking to tone their abdomen, buttocks,
          thighs, or arms while reducing fat and increasing muscle definition.
          It’s perfect for people who want to enhance their workout results or
          those who struggle to achieve desired body contours through diet and
          exercise alone. If you’re looking for a non-invasive, quick, and
          effective body sculpting solution, Emsculpt is a great choice for you.
        </p>
      </section>

      {/* 🔹 Promo Section */}
      <section className="mb-0">
        <PromoSection />
      </section>
    </div>
  );
}

export default Emsculpt_Fat_Reduction;
