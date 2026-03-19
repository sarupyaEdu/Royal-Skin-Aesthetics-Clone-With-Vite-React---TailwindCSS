import React, { useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import PromoSection from "../component/PromoSection";
import Modern_technology from "./Modern_technology";
import Fixedicons from "../component/Fixedicons";

function About() {
  useEffect(() => {
    document.title = `#1 aesthetic clinic in Islamabad | The Royal Skin Aesthetics`;
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
              "url('https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/doctors-discussing-cosmetic-surgery-options-over-a-client.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 mx-auto flex min-h-[320px] max-w-6xl flex-col justify-end px-4 py-14 text-white sm:min-h-[380px] sm:px-6 lg:min-h-[450px] lg:px-8 lg:py-20">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <h1 className="text-4xl font-semibold sm:text-5xl">About</h1>
              <div className="flex flex-wrap items-center gap-3 text-lg sm:text-2xl">
                <Link to="/" className="font-semibold transition-colors hover:text-amber-400">
                  Home
                </Link>
                <FaChevronRight className="text-xl text-amber-400" />
                <span className="font-semibold">About</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Modern_technology />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
          Dr. Maimoona Doraiz
        </h2>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_20px_45px_rgba(0,0,0,0.1)]">
            <div className="relative h-full min-h-[420px] overflow-hidden sm:min-h-[520px]">
              <img
                src="https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/doctor-BKULZSW.jpg"
                alt="Dr. Maimoona Doraiz"
                className="h-full w-full object-cover transition-transform duration-700"
              />
              <div className="absolute inset-0 translate-y-full bg-black/40 opacity-0 transition-all duration-700 ease-in-out group-hover:translate-y-0 group-hover:opacity-100"></div>
              <div className="absolute bottom-5 left-1/2 w-[90%] -translate-x-1/2 rounded-xl bg-amber-400 p-4 text-center shadow-lg transition-transform duration-500 ease-in-out group-hover:-translate-y-1">
                <h3 className="text-lg font-bold text-white sm:text-xl">
                  Dr. Maimoona Doraiz
                </h3>
                <p className="text-sm font-medium leading-tight text-white">
                  Best Aesthetic Physician in F7 – Islamabad
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_20px_45px_rgba(0,0,0,0.08)] sm:p-8 lg:p-10">
            <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl">
              Best Aesthetic Physician in F7- Islamabad
            </h2>

            <p className="mb-4 leading-7 text-black/80">
              Dr. Maimoona Doraiz holds an <b>MBBS</b> degree from the
              University of Health Sciences (UHS) and a <b>BSc</b> from Punjab
              University (Pb), providing her with a strong medical foundation.
            </p>

            <h3 className="mb-2 mt-2 text-2xl font-bold">Advanced Aesthetic Training</h3>
            <p className="mb-3 leading-7 text-black/80">
              Dr. Maimoona has undergone extensive training in medical
              aesthetics, earning several diplomas and certificates from
              prestigious institutions:
            </p>

            <ul className="mb-3 list-disc space-y-2 pl-6 leading-7 text-black/80">
              <li><b>Diploma in Complete Medical Aesthetic Course</b> – American Association of Continuing Medical Education</li>
              <li><b>Diploma Certificate in Complete Medical Aesthetic Course</b> – Pakistan Academy of Laser Dentistry</li>
              <li><b>Certificate in Complete Medical Aesthetic Course</b> – American Accreditation Association (AAA)</li>
              <li><b>Certificate in Complete Medical Aesthetic Course</b> – American Association of Continuing Medical Education</li>
              <li><b>Certificate of Continuing Professional Development</b> – The Complete Medical Aesthetic Course</li>
            </ul>

            <h3 className="mb-2 mt-3 text-2xl font-bold">Professional Expertise</h3>
            <p className="mb-3 leading-7 text-black/80">
              Recognized as one of the <b>leading medical aesthetic specialists in Islamabad</b>, Dr. Maimoona’s expertise spans a wide range of advanced aesthetic treatments. She enhances natural beauty while ensuring optimal skin health.
            </p>

            <p className="leading-7 text-black/80">
              As the <b>premier aesthetic specialist</b> at The Royal Aesthetic Clinic, she offers personalized treatments tailored to each patient’s unique needs, ensuring the highest level of care and satisfaction.
            </p>
          </div>
        </div>
      </section>

      <section>
        <PromoSection />
      </section>
    </div>
  );
}

export default About;
