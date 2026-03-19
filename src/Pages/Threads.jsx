import React from "react";
import { FaChevronRight } from "react-icons/fa";
import PromoSection from "../component/PromoSection";

function Threads() {
  return (
    <div className="overflow-x-hidden">
      {/* 🔹 Hero Section with overlay */}
      <section className="relative">
        <div
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/shutterstock_2200857221-2-1.jpg')",
          }}
        >
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Title + breadcrumb */}
          <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-center lg:justify-between">
              <h1 className="font-semibold text-4xl sm:text-5xl leading-tight">Threads</h1>

              <div className="flex flex-wrap items-center gap-3 text-lg sm:text-2xl">
                <i className="font-semibold">Home</i>
                <FaChevronRight className="text-amber-400 mx-4 text-xl" />
                <i className="font-semibold">Threads</i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Main content */}
      <section className="mx-auto max-w-5xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">
        <h2 className="mb-3 text-2xl font-semibold text-amber-400 sm:text-3xl">
          Thread Lift Treatment in F7, Islamabad
        </h2>

        <p className="mb-4 text-xl font-semibold text-black sm:text-2xl">
          Lift and Tighten Your Skin with Non-Surgical Threads
        </p>

        <p className="mb-5 text-base leading-relaxed text-black/80 sm:text-lg">
          What areas can be treated with threads? At The Royal Skin Aesthetics
          Clinic in F7, Islamabad, we offer thread lift treatments to lift and
          tighten sagging skin without surgery. Using dissolvable threads, this
          non-invasive procedure stimulates collagen production, providing a
          natural lift to the face, neck, or body for a youthful and rejuvenated
          appearance.
        </p>

        <p className="mb-10 text-base leading-relaxed text-black/80 sm:text-lg">
          Are you wondering how long the results last? Is the procedure painful?
          Our experts are here to address all your questions and create a
          customized treatment plan suited to your aesthetic goals.
        </p>

        <img
          src="https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/shutterstock_2200857221-2-1.jpg"
          alt="Thread Lift"
          className="mx-auto h-[260px] w-full rounded-2xl object-cover shadow-lg sm:h-[380px] lg:h-[500px] lg:w-auto lg:max-w-full"
        />
      </section>

      {/* 🔹 Info section */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <h3 className="mb-4 text-2xl font-bold text-black sm:text-3xl">
          Who Should Opt for a Thread Lift?
        </h3>
        <p className="text-base leading-relaxed text-black/80 sm:text-lg">
          Thread lifts are perfect for individuals who want to combat mild to
          moderate skin laxity without undergoing surgery. If you’re looking for
          a subtle lift, want to improve sagging skin on your face, neck, or
          jawline, or are seeking a quick recovery, this treatment is ideal for
          you. It’s suitable for those wanting natural-looking, long-lasting
          results without invasive procedures.
        </p>
      </section>

      {/* 🔹 Promo Section */}
      <section className="mb-0">
        <PromoSection />
      </section>
    </div>
  );
}

export default Threads;
