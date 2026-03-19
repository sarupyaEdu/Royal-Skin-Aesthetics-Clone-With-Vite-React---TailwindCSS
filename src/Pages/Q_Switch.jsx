import React from "react";
import { FaChevronRight } from "react-icons/fa";
import PromoSection from "../component/PromoSection";

function Q_Switch() {
  return (
    <div className="overflow-x-hidden">
      {/* 🔹 Hero Section with overlay */}
      <section className="relative">
        <div
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/q-switch-laser-procedure.jpg')",
          }}
        >
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Content: title left, breadcrumb right */}
          <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-center lg:justify-between">
              <h1 className="font-semibold text-4xl sm:text-5xl">Q-Switch</h1>

              {/* Breadcrumb (not linked) */}
              <div className="flex items-center text-xl sm:text-2xl">
                <span className="font-semibold">Home</span>
                <FaChevronRight className="text-amber-400 mx-3 sm:mx-4 text-lg sm:text-xl" />
                <span className="font-semibold">Q-Switch</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Main Content */}
      <section className="text-center px-6 sm:px-8 py-16 max-w-5xl mx-auto">
        <h2 className="mb-3 text-2xl font-semibold text-amber-400 sm:text-3xl">
          Q-Switch Laser Treatment in F7, Islamabad
        </h2>

        <p className="mb-4 text-xl font-semibold text-black sm:text-2xl">
          Brighten Your Skin and Target Pigmentation Effectively
        </p>

        <p className="text-lg text-black/80 mb-6 leading-relaxed">
          Are you struggling with dark spots or pigmentation? At The Royal Skin
          Aesthetics Clinic in F7, Islamabad, our Q-Switch laser treatment
          offers an advanced solution for targeting pigmentation, sunspots, and
          uneven skin tone. This non-invasive laser technology helps brighten
          your complexion and improve skin texture, leaving you with a more
          radiant and youthful appearance.
        </p>

        <p className="mb-10 text-base leading-relaxed text-black/80 sm:text-lg">
          Wondering how many sessions you’ll need for visible results? Is
          Q-Switch suitable for your skin type? Our expert team is here to
          answer your questions and provide a customized treatment plan tailored
          to your skin’s needs.
        </p>

        <img
          src="https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/q-switch-laser-procedure.jpg"
          alt="Q-Switch Laser Treatment"
          className="mx-auto h-[260px] w-full rounded-2xl object-cover shadow-lg sm:h-[380px] lg:h-[500px] lg:w-auto lg:max-w-full"
        />
      </section>

      {/* 🔹 Info Section */}
      <section className="px-6 sm:px-8 py-12 max-w-6xl mx-auto">
        <h3 className="mb-4 text-2xl font-bold text-black sm:text-3xl">
          Who Should Opt for Q-Switch Laser Treatment?
        </h3>
        <p className="text-base leading-relaxed text-black/80 sm:text-lg">
          Q-Switch is ideal for individuals looking to reduce pigmentation,
          melasma, or dark spots. If you want a non-surgical solution to achieve
          a clearer and brighter complexion, this treatment is perfect for you.
          Suitable for all skin types, it’s a safe and effective option for
          those seeking an even skin tone and enhanced radiance.
        </p>
      </section>

      {/* 🔹 Promo Section */}
      <section className="mb-0">
        <PromoSection />
      </section>
    </div>
  );
}

export default Q_Switch;
