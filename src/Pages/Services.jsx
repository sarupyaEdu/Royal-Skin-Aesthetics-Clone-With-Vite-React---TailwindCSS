import React, { useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import PromoSection from "../component/PromoSection";
import Testimonials from "../component/Testimonials";
import Ourservices from "../component/Ourservices";
import Fixedicons from "../component/Fixedicons";

function Services() {
  useEffect(() => {
    document.title = `Best Aesthetic Services in F7- Islamabad | The Royal Skin Aesthetics`;
  }, []);

  return (
    <div className="overflow-x-hidden">
      <section>
        <Fixedicons />
      </section>

      <section className="relative">
        <div
          className="relative min-h-[320px] bg-cover bg-center bg-no-repeat sm:min-h-[380px] lg:min-h-[450px]"
          style={{
            backgroundImage:
              "url('https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/surgery-cosmetology-inject-botox-in-breast-.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 mx-auto flex min-h-[320px] max-w-6xl flex-col justify-end px-4 py-14 text-white sm:min-h-[380px] sm:px-6 lg:min-h-[450px] lg:px-8 lg:py-20">
            <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-center lg:justify-between">
              <h1 className="text-4xl font-semibold sm:text-5xl">Services</h1>
              <div className="flex flex-wrap items-center gap-3 text-lg sm:text-2xl">
                <i className="font-semibold">Home</i>
                <FaChevronRight className="text-xl text-amber-400" />
                <i className="font-semibold">Services</i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Ourservices />
      </section>

      <section>
        <Testimonials />
      </section>

      <section>
        <PromoSection />
      </section>
    </div>
  );
}

export default Services;
