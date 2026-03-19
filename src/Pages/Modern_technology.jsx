import React from "react";
import { motion } from "framer-motion";
import { LiaStethoscopeSolid } from "react-icons/lia";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { Link } from "react-router-dom";

const featureItems = [
  {
    title: "Modern Technology",
    text: "We utilize state-of-the-art technology to deliver effective and minimally invasive treatments, ensuring the best results for your unique skin care needs.",
    icon: LiaStethoscopeSolid,
    iconPadding: "p-4 sm:p-5",
  },
  {
    title: "Affordable Pricing",
    text: "We believe in accessible skincare solutions, offering a range of treatments at competitive prices without compromising on quality.",
    icon: FaHandHoldingUsd,
    iconPadding: "p-4",
  },
  {
    title: "Certified Doctor",
    text: "Our team of certified skincare professionals is dedicated to providing the highest standard of care, ensuring every patient receives expert guidance and personalized treatment plans.",
    icon: FaUserDoctor,
    iconPadding: "p-4",
  },
];

function Modern_technology() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
        <div>
          <motion.p
            className="mb-3 text-lg font-semibold text-amber-400 sm:text-xl"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            About The Royal Skin Aesthetics Clinic
          </motion.p>

          <h1 className="pb-3 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-[42px]">
            Transforming Skincare with Advanced Aesthetic Solutions Since 2023
          </h1>

          <p className="pb-8 text-base leading-7 text-black/90 sm:text-[15.5px]">
            At The Royal Skin Aesthetics Clinic, located in F7, Islamabad, we
            offer cutting-edge{" "}
            <Link
              to="/services"
              className="text-[#d78b41] underline underline-offset-2 transition-colors duration-300 hover:text-[#e9a65b]"
            >
              skincare treatments
            </Link>{" "}
            designed to enhance your natural beauty and restore confidence in
            your skin. Our mission is to provide personalized care that makes
            every patient feel their best.
          </p>

          <div className="space-y-5">
            {featureItems.map(({ title, text, icon: Icon, iconPadding }) => (
              <div
                key={title}
                className="flex items-start gap-4 rounded-2xl bg-white p-4 shadow-sm sm:gap-5 sm:p-5"
              >
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white text-3xl font-semibold text-amber-400 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:bg-black sm:h-16 sm:w-16 sm:text-4xl ${iconPadding}`}
                >
                  <Icon />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-amber-400 sm:text-xl">
                    {title}
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-black/80 sm:text-base">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/about"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="mt-8 inline-flex"
          >
            <button className="h-11 w-full rounded-full bg-amber-400 px-6 text-sm font-semibold text-white transition hover:bg-amber-500 sm:w-auto sm:min-w-[200px] sm:text-base">
              More About Us
            </button>
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-2">
          {/* Image 1 - Slide from LEFT */}
          <motion.img
            src="https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/cosmetician-hands-with-working-tools-patient-face.jpg"
            alt="Cosmetician"
            className="h-72 w-full rounded-2xl object-cover sm:h-80 lg:h-[340px]"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          {/* Image 2 - Slide from RIGHT */}
          <motion.img
            src="https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/female-doctor-holds-cream-and-brush-in-hands.jpg"
            alt="Doctor"
            className="h-72 w-full rounded-2xl object-cover sm:h-80 lg:h-[340px]"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          />

          {/* Image 3 - Slide from BOTTOM */}
          <motion.img
            src="https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/cosmetician-gives-chin-botox-injection-to-patient.jpg"
            alt="Botox treatment"
            className="h-72 w-full rounded-2xl object-cover sm:col-span-2 sm:h-80 lg:h-[260px]"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </section>
  );
}

export default Modern_technology;
