import React from "react";
import { FaChevronRight } from "react-icons/fa";
import PromoSection from "../component/PromoSection";

function PRP_Face_Scalp() {
  return (
    <div className="overflow-x-hidden">
      {/* 🔹 Hero Section with overlay */}
      <section className="relative">
        <div
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/shutterstock_1244366338.jpg')",
          }}
        >
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Text content */}
          <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            {/* Title + breadcrumb on same row */}
            <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-center lg:justify-between">
              <h1 className="font-semibold text-4xl sm:text-5xl leading-tight">PRP Face &amp; Scalp</h1>

              <div className="flex flex-wrap items-center gap-3 text-lg sm:text-2xl">
                <i className="font-semibold">Home</i>
                <FaChevronRight className="text-amber-400 mx-4 text-xl" />
                <i className="font-semibold">PRP Face &amp; Scalp</i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Main Content Section */}
      <section className="mx-auto max-w-5xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">
        <h2 className="mb-3 text-2xl font-semibold text-amber-400 sm:text-3xl">
          PRP Face &amp; Scalp Treatment in F7, Islamabad
        </h2>

        <p className="mb-4 text-xl font-semibold text-black sm:text-2xl">
          Rejuvenate Your Skin and Revitalize Your Hair Naturally
        </p>

        <p className="mb-5 text-base leading-relaxed text-black/80 sm:text-lg">
          Is it the right treatment for your skin or hair concerns? At The Royal
          Skin Aesthetics Clinic in F7, Islamabad, our PRP (Platelet-Rich
          Plasma) treatments for the face and scalp offer a natural way to
          rejuvenate your skin and promote healthy hair growth. By using your
          body’s own platelets, PRP stimulates collagen production and hair
          follicle repair, giving you noticeable improvements without invasive
          procedures.
        </p>

        <p className="mb-10 text-base leading-relaxed text-black/80 sm:text-lg">
          Curious about how PRP works? How long before you see results? Our
          specialists will answer all your questions and guide you through the
          process, ensuring personalized care for your unique needs.
        </p>

        <img
          src="https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/shutterstock_1244366338.jpg"
          alt="PRP Face & Scalp"
          className="mx-auto h-[260px] w-full rounded-2xl object-cover shadow-lg sm:h-[380px] lg:h-[500px] lg:w-auto lg:max-w-full"
        />
      </section>

      {/* 🔹 Info Section */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <h3 className="mb-4 text-2xl font-bold text-black sm:text-3xl">
          Who Should Opt for PRP Face &amp; Scalp?
        </h3>
        <p className="text-base leading-relaxed text-black/80 sm:text-lg">
          PRP is perfect for individuals looking to boost skin elasticity,
          reduce fine lines, or treat acne scars naturally. It’s also an
          excellent option for those experiencing hair thinning or early hair
          loss. If you prefer a non-surgical, regenerative approach to skin and
          hair care, PRP face and scalp treatments are an ideal choice for you.
        </p>
      </section>

      {/* 🔹 Promo Section */}
      <section className="mb-0">
        <PromoSection />
      </section>
    </div>
  );
}

export default PRP_Face_Scalp;
