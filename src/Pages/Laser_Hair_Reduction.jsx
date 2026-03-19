import React from "react";
import { FaChevronRight } from "react-icons/fa";
import PromoSection from "../component/PromoSection";
import { Link } from "react-router-dom";

function Laser_Hair_Reduction() {
  return (
    <div className="overflow-x-hidden">
      {/* 🔹 Hero Section with overlay */}
      <section className="relative">
        <div
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/GettyImages-1409466138-f80dbd560dd64c2cb5357ae5f043586c-1.jpg')",
          }}
        >
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Text content */}
          <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            {/* Flex row: Title left + breadcrumb right */}
            <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-center lg:justify-between">
              <h1 className="font-semibold text-4xl sm:text-5xl leading-tight">Laser Hair Reduction</h1>

              <div className="flex flex-wrap items-center gap-3 text-lg sm:text-2xl">
                <i className="font-semibold">Home</i>
                <FaChevronRight className="text-amber-400 mx-4 text-xl" />
                <i className="font-semibold">Laser Hair Reduction</i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Content Section */}
      <section className="mx-auto max-w-5xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">
        <h2 className="mb-3 text-2xl font-semibold text-amber-400 sm:text-3xl">
          Laser Hair Reduction in F7, Islamabad
        </h2>

        <p className="mb-4 text-xl font-semibold text-black sm:text-2xl">
          Say Goodbye to Unwanted Hair with Lasting Results
        </p>

        <p className="mb-5 text-base leading-relaxed text-black/80 sm:text-lg">
          Are you tired of constantly shaving or waxing? At The Royal{" "}
          <Link
            to="/services"
            className="text-[#d78b41] hover:text-[#e9a65b] underline underline-offset-2 transition-colors duration-300"
          >
            Skin Aesthetics
          </Link>{" "}
          Clinic in F7, Islamabad, we offer advanced laser hair reduction
          treatments designed to provide smooth, hair-free skin with
          long-lasting results. Using state-of-the-art technology, we ensure a
          comfortable and effective solution to unwanted hair. Wondering if
          laser hair reduction can work for you? How many sessions will you
          need? Our team is here to answer all your questions and tailor a
          treatment plan that fits your skin type and hair growth pattern.
        </p>

        <p className="mb-10 text-base leading-relaxed text-black/80 sm:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          velit eligendi, distinctio vero assumenda quod debitis sint
          perferendis magnam blanditiis repudiandae pariatur quam recusandae
          ducimus labore nisi nemo dolor vitae.
        </p>

        <img
          src="https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/GettyImages-1409466138-f80dbd560dd64c2cb5357ae5f043586c-1.jpg"
          alt="Laser Hair Reduction"
          className="mx-auto h-[260px] w-full rounded-2xl object-cover shadow-lg sm:h-[380px] lg:h-[500px] lg:w-auto lg:max-w-full"
        />
      </section>

      {/* 🔹 Secondary Info Section */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <h3 className="mb-4 text-2xl font-bold text-black sm:text-3xl">
          Who Should Opt for Laser Hair Reduction?
        </h3>
        <p className="text-base leading-relaxed text-black/80 sm:text-lg">
          Laser hair reduction is ideal for anyone looking for a long-term
          solution to unwanted hair. If you struggle with razor burns, ingrown
          hairs, or simply want a hassle-free way to maintain smooth skin, this
          treatment is perfect for you. Suitable for all skin types, laser hair
          reduction is a safe and effective choice for both men and women.
        </p>
      </section>

      {/* 🔹 Promo Section */}
      <section className="mb-0">
        <PromoSection />
      </section>
    </div>
  );
}

export default Laser_Hair_Reduction;
