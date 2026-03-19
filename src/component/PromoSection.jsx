import React from "react";
import { Link } from "react-router-dom";

function PromoSection() {
  return (
    <section className="relative text-center">
      {/* Background image */}
      <div
        className="relative flex flex-col items-center justify-center text-center px-6 py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/cosmetician-gives-chin-botox-injection-to-patient.jpg')",
        }}
      >
        {/* 🔹 Black overlay */}
        <div className="absolute inset-0 bg-black/80"></div>

        {/* 🔹 Text content */}
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="mb-4 font-semibold text-4xl text-amber-400 drop-shadow-md">
            Transform Your Vision into Reality in F7-Islamabad
          </h1>

          <p className="mb-8 font-medium text-white text-lg leading-relaxed">
            Ready to achieve your ideal look? Contact us today and let’s begin
            your journey to beauty!
          </p>

          <Link to="/appointment">
            <button className="cursor-pointer h-11 w-[220px] bg-amber-400 font-semibold text-white rounded-full p-1 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-amber-500 hover:-translate-y-1">
              Book an Appointment
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PromoSection;
