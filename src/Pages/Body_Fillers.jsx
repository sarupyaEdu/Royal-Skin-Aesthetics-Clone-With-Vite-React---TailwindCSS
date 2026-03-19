import React from "react";
import { FaChevronRight } from "react-icons/fa";
import PromoSection from "../component/PromoSection";
import { Link } from "react-router-dom";

function Body_Fillers() {
  return (
    <div className="overflow-x-hidden">
      {/* 🔹 Hero Section with overlay */}
      <section className="relative">
        <div
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/Body-Fillers-1.jpg')",
          }}
        >
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Hero Content: Title left / Breadcrumb right */}
          <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-center lg:justify-between">
              <h1 className="font-semibold text-4xl sm:text-5xl">
                Body Fillers
              </h1>

              {/* Breadcrumb (not linked) */}
              <div className="flex items-center text-xl sm:text-2xl">
                <span className="font-semibold">Home</span>
                <FaChevronRight className="text-amber-400 mx-3 sm:mx-4 text-lg sm:text-xl" />
                <span className="font-semibold">Body Fillers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Main Content */}
      <section className="text-center px-6 sm:px-8 py-16 max-w-5xl mx-auto">
        <h2 className="mb-3 text-2xl font-semibold text-amber-400 sm:text-3xl">
          #1 Body Fillers in F7, Islamabad
        </h2>

        <p className="mb-4 text-xl font-semibold text-black sm:text-2xl">
          Enhance Your Contours with Natural-Looking Volume
        </p>

        <p className="text-lg text-black/80 mb-6 leading-relaxed">
          Are you looking to add volume to specific areas of your body? At The
          Royal Skin Aesthetics Clinic in F7, Islamabad, we offer body fillers
          to help you achieve a more contoured, sculpted appearance. Our body
          filler{" "}
          <Link
            to="/services"
            className="text-[#d78b41] hover:text-[#e9a65b] underline underline-offset-2 transition-colors duration-300"
          >
            treatments
          </Link>{" "}
          provide natural-looking volume, enhancing areas like the buttocks,
          hips, and thighs. This non-surgical solution helps you achieve your
          desired shape without the need for invasive procedures.
        </p>

        <p className="mb-10 text-base leading-relaxed text-black/80 sm:text-lg">
          Wondering how body fillers work or how long the results last? Is it
          safe and effective for you? Our experienced team is here to answer all
          your questions and create a customized treatment plan tailored to your
          body goals.
        </p>

        <img
          src="https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/Body-Fillers-1.jpg"
          alt="Body Fillers"
          className="mx-auto h-[260px] w-full rounded-2xl object-cover shadow-lg sm:h-[380px] lg:h-[500px] lg:w-auto lg:max-w-full"
        />
      </section>

      {/* 🔹 Info Section */}
      <section className="px-6 sm:px-8 py-12 max-w-6xl mx-auto">
        <h3 className="mb-4 text-2xl font-bold text-black sm:text-3xl">
          Who Should Opt for Body Fillers?
        </h3>
        <p className="text-base leading-relaxed text-black/80 sm:text-lg">
          Body fillers are ideal for individuals looking to enhance their
          natural curves without undergoing surgery. Whether you’re seeking a
          subtle enhancement or more pronounced results, body fillers are
          perfect for those wanting a non-invasive way to improve body contours
          and boost confidence.
        </p>
      </section>

      {/* 🔹 Promo Section */}
      <section className="mb-0">
        <PromoSection />
      </section>
    </div>
  );
}

export default Body_Fillers;
