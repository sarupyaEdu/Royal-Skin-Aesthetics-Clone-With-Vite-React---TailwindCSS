import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle, FaPhoneAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Modern_technology from "./Modern_technology";
import Testimonials from "../component/Testimonials";
import Ourservices from "../component/Ourservices";
import Fixedicons from "../component/Fixedicons";
import { Link } from "react-router-dom";

function Herosection() {
  useEffect(() => {
    document.title = `Best Aesthetic clinic in F7, Islamabad The Royal Aesthetics`;
  }, []);

  const galleryImages = [
    "https://theroyalskinaesthetics.com/wp-content/uploads/ac_assets/uc_classic_carousel/placeholder1.jpg",
    "https://theroyalskinaesthetics.com/wp-content/uploads/ac_assets/uc_classic_carousel/placeholder2.jpg",
    "https://theroyalskinaesthetics.com/wp-content/uploads/ac_assets/uc_classic_carousel/placeholder4.jpg",
    "https://theroyalskinaesthetics.com/wp-content/uploads/ac_assets/uc_classic_carousel/placeholder3.jpg",
  ];

  return (
    <div className="overflow-x-hidden">
      <section>
        <Fixedicons />
      </section>

      <section>
        <div
          className="bg-cover bg-center bg-no-repeat px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-36"
          style={{
            backgroundImage:
              "url('https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/hero-288P8UC-1024x683-removebg-preview.png')",
          }}
        >
          <div className="mx-auto max-w-7xl">
            <motion.h1
              className="max-w-3xl text-4xl font-semibold leading-tight text-amber-400 sm:text-5xl lg:text-6xl"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Redefining Skin Care in F7-Islamabad
            </motion.h1>
            <motion.p
              className="mt-6 max-w-3xl text-sm font-semibold leading-7 text-white sm:text-base"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
              At The Royal Skin Aesthetics Clinic in F7, Islamabad, we are
              committed to offering advanced, personalized{" "}
              <Link
                to="/services"
                className="text-[#d78b41] underline underline-offset-2 transition-colors duration-300 hover:text-[#e9a65b]"
              >
                skin care treatments
              </Link>{" "}
              that celebrate and enhance your natural beauty. Our mission is to
              help you feel confident and comfortable in your own skin by
              providing tailored solutions designed to meet your unique needs.
              Experience a new level of skin care excellence, right here in
              Islamabad.
            </motion.p>
            <Link to="/services">
              <motion.button
                className="mt-8 h-11 rounded-full bg-amber-400 px-6 text-sm font-semibold text-white transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-amber-500 sm:h-12 sm:px-8 sm:text-base"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Explore Our Services
              </motion.button>
            </Link>
          </div>
        </div>

        <div className="relative z-20 -mt-10 px-4 sm:px-6 lg:-mt-16 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-stretch gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,420px)] lg:gap-10">
            <motion.div
              className="rounded-3xl bg-white p-6 shadow-[0_20px_40px_rgba(0,0,0,0.12)] sm:p-8 md:p-10"
              initial={{ opacity: 0, y: 40, x: -30 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="grid gap-8 md:grid-cols-2 md:gap-10">
                <div>
                  <h2 className="text-2xl font-semibold leading-snug text-[#f5b544] sm:text-3xl">
                    How Can We Refine Your Skincare Experience?
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-black/80 sm:text-[15.5px]">
                    At The Royal Skin Aesthetics Clinic, we refine your
                    skincare journey with personalized treatments tailored to
                    your unique needs. Whether it’s rejuvenation or corrective
                    care, we’re here to enhance your skin’s health and
                    radiance.
                  </p>

                  <Link
                    to="/services"
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-[#d78b41] underline underline-offset-4 transition-colors hover:text-[#e9a65b]"
                  >
                    Explore Service <FaArrowRight className="text-[#d78b41]" />
                  </Link>
                </div>

                <ul className="space-y-3 text-sm text-black sm:text-[15.5px]">
                  {[
                    "Laser hair reduction",
                    "PRP Face and Scalp",
                    "Exosomes",
                    "Botox",
                    "Fillers",
                    "Mesotherapy",
                    "Hydrafacial",
                    "Hydratherapy",
                    "Chemical peels",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <FaCheckCircle className="mt-1 shrink-0 text-[#f5b544]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="mx-auto h-full w-full rounded-3xl bg-[#0f1022] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.12)] sm:p-8 md:p-10"
              initial={{ opacity: 0, y: 50, x: 30 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-[#f5b544]">
                Consultation with Our Experts
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/90 sm:text-base">
                Discover how we enhance natural beauty and confidence at The
                Royal Skin Aesthetics Clinic in F7, Islamabad. Schedule a
                consultation today with our specialists to start your
                personalized journey toward achieving your beauty goals.
              </p>

              <a
                href="tel:03315130307"
                className="mt-8 inline-flex items-center gap-3 text-xl font-semibold text-white sm:text-2xl"
              >
                <FaPhoneAlt className="text-[#f5b544]" />
                0331-5130307
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section>
        <Modern_technology />
      </section>

      <section className="pb-8 lg:-mt-10">
        <Ourservices />
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-2 text-3xl font-bold italic text-amber-400 sm:text-4xl">
            Transformation Gallery
          </h1>

          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <hr className="mt-4 mb-3 w-1.5 rounded-full border-t-4 border-amber-400" />
            <hr className="mt-4 mb-3 w-1.5 rounded-full border-t-4 border-amber-400" />
            <hr className="mt-4 mb-3 w-1.5 rounded-full border-t-4 border-amber-400" />
            <hr className="mt-4 mb-3 w-16 rounded-full border-t-4 border-amber-400 sm:w-24" />
          </div>

          <h2 className="mb-4 text-3xl font-bold italic text-black sm:text-4xl lg:text-5xl">
            See the Stunning Results
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-sm font-medium text-gray-700 sm:text-base">
            Where Precision Meets Beauty
          </p>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="rounded-xl"
          >
            {galleryImages.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="h-[280px] w-full rounded-xl object-cover sm:h-[340px] lg:h-[420px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section>
        <Testimonials />
      </section>
    </div>
  );
}

export default Herosection;
