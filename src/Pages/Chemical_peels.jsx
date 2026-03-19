import React from "react";
import { FaChevronRight } from "react-icons/fa";
import PromoSection from "../component/PromoSection";
import { Link } from "react-router-dom";

function Chemical_peels() {
  return (
    <div className="overflow-x-hidden">
      {/* 🔹 Hero Section with overlay */}
      <section className="relative">
        <div
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/Chemical-Peeling-Treatment.jpg')",
          }}
        >
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Title + breadcrumb */}
          <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-center lg:justify-between">
              <h1 className="font-semibold text-4xl sm:text-5xl leading-tight">Chemical Peels</h1>

              <div className="flex flex-wrap items-center gap-3 text-lg sm:text-2xl">
                <i className="font-semibold">Home</i>
                <FaChevronRight className="text-amber-400 mx-4 text-xl" />
                <i className="font-semibold">Chemical Peels</i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Main content */}
      <section className="mx-auto max-w-5xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">
        <h2 className="mb-3 text-2xl font-semibold text-amber-400 sm:text-3xl">
          Chemical Peels in F7, Islamabad
        </h2>

        <p className="mb-4 text-xl font-semibold text-black sm:text-2xl">
          Reveal a Brighter, Smoother Complexion with Customized Treatments
        </p>

        <p className="mb-5 text-base leading-relaxed text-black/80 sm:text-lg">
          Are you struggling with uneven skin tone, acne scars, or fine lines?
          At The Royal Skin Aesthetics Clinic in F7, Islamabad, our chemical
          peels are designed to revitalize your skin by removing dead cells and
          stimulating the growth of fresh, healthy skin. With tailored solutions
          for different skin types and concerns, we help you achieve a radiant,
          youthful glow.
        </p>

        <p className="mb-10 text-base leading-relaxed text-black/80 sm:text-lg">
          Wondering if a chemical peel can help you achieve clearer, smoother
          skin? How many sessions will you need to see visible results? Our
          experienced team is here to guide you through every step, ensuring a
          safe and{"  "}
          <Link
            to="/services"
            className="text-[#d78b41] hover:text-[#e9a65b] underline underline-offset-2 transition-colors duration-300"
          >
            effective treatment
          </Link>{" "}
          plan customized to your needs.
        </p>

        <img
          src="https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/Chemical-Peeling-Treatment.jpg"
          alt="Chemical Peels"
          className="mx-auto h-[260px] w-full rounded-2xl object-cover shadow-lg sm:h-[380px] lg:h-[500px] lg:w-auto lg:max-w-full"
        />
      </section>

      {/* 🔹 Info section */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <h3 className="mb-4 text-2xl font-bold text-black sm:text-3xl">
          Who Should Opt for Chemical Peels?
        </h3>
        <p className="text-base leading-relaxed text-black/80 sm:text-lg">
          Chemical peels are ideal for individuals dealing with dull skin,
          pigmentation, acne scars, or fine lines. Whether you want to brighten
          your complexion, improve skin texture, or address specific concerns
          like sun damage, chemical peels offer a non-invasive solution to
          reveal fresh, rejuvenated skin. Perfect for those looking to enhance
          their skin’s radiance and health.
        </p>
      </section>

      {/* 🔹 Promo */}
      <section className="mb-0">
        <PromoSection />
      </section>
    </div>
  );
}

export default Chemical_peels;
