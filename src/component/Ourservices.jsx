import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const serviceGroups = [
  [
    {
      title: "Laser Hair Reduction",
      desc: "Achieve smooth, hair-free skin with our advanced laser hair reduction treatments.",
      img: "https://theroyalskinaesthetics.com/wp-content/uploads/elementor/thumbs/GettyImages-1409466138-f80dbd560dd64c2cb5357ae5f043586c-qtpukn400nc8aqa7cuv5lpnjioj1k3lyi3bfdndb7c.jpg",
      to: "/laser-hair-reduction",
      icon: "https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/Laser-hair-reduction.png",
    },
    {
      title: "Botox Injection",
      desc: "Smooth fine lines and wrinkles with our expert Botox injections for a youthful look.",
      img: "https://theroyalskinaesthetics.com/wp-content/uploads/elementor/thumbs/cosmetician-holds-syringe-with-injection-of-botox-qtpqz8nv5q75za8uyx84cd73h2bxw5w8pm50yb8fso.jpg",
      to: "/botox",
      icon: "https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/1005678.png",
    },
    {
      title: "PRP Face & Scalp",
      desc: "Revitalize your skin and scalp with PRP therapy, promoting natural rejuvenation.",
      img: "https://theroyalskinaesthetics.com/wp-content/uploads/elementor/thumbs/what-is-a-prp-facial-treatment-in-nashville-qtpuj2poml70y4k4i6hjg3vvvk90q9e2ac6al1oxko.jpg",
      to: "/prp-face-scalp",
      icon: "https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/Prp-face-scalp.png",
    },
  ],
  [
    {
      title: "Exosomes",
      desc: "Boost your skin’s health and repair with cutting-edge exosome treatments.",
      img: "https://theroyalskinaesthetics.com/wp-content/uploads/elementor/thumbs/exosmes-therapy-qtpuj8cprleqvsbxl8xav2gnfvh80g0gb437gpgkjc.png",
      to: "/exosomes",
      icon: "https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/Exosomes.png",
    },
    {
      title: "Fillers",
      desc: "Enhance your facial contours with dermal fillers for a fuller, rejuvenated appearance.",
      img: "https://theroyalskinaesthetics.com/wp-content/uploads/elementor/thumbs/botox-injection-botox-vs-fillers-qtpwwnwmxicy3w8iq6clhicv4me7m366pynxq2sf08.jpg",
      to: "/fillers",
      icon: "https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/Body-Fillers.png",
    },
    {
      title: "Mesotherapy",
      desc: "Nourish and rejuvenate your skin with targeted mesotherapy solutions.",
      img: "https://theroyalskinaesthetics.com/wp-content/uploads/elementor/thumbs/selective-focus-of-woman-with-cupping-cups-on-legs-and-buttocks-qtpr00v0ur9rnl3we9exf62xamgyb306thplcm2mm0.jpg",
      to: "/mesotherapy",
      icon: "https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/Mesotherapy.png",
    },
  ],
  [
    {
      title: "Hydrafacial",
      desc: "Enjoy glowing, hydrated skin with our refreshing and deep-cleansing Hydrafacial.",
      img: "https://theroyalskinaesthetics.com/wp-content/uploads/elementor/thumbs/HydraFacial-1200x800-1-qtpx6dkljvnm2u4m0dht924c3yir5hqc21ck90dypk.jpg",
      to: "/hydrafacial",
      icon: "https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/Hydrafacial.png",
    },
    {
      title: "Hydratherapy",
      desc: "Restore your skin’s moisture and vitality with our hydrating therapy treatments.",
      img: "https://theroyalskinaesthetics.com/wp-content/uploads/elementor/thumbs/aktualita-detail-center_zoom_1238-qtpx6hbyb7srd9z5ef4bj166hi080a59ejyi648e0o.jpg",
      to: "/hydratherapy",
      icon: "https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/Hydratherapy.png",
    },
    {
      title: "Chemical Peels",
      desc: "Reveal fresher, smoother skin with our customized chemical peel treatments.",
      img: "https://theroyalskinaesthetics.com/wp-content/uploads/elementor/thumbs/Chemical-Peeling-Treatment-qtpx6j7movvc0hwf3fxko0p3o9qyfocq2t9h4o5lo8.jpg",
      to: "/chemical-peels",
      icon: "https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/Chemical-Peels.png",
    },
  ],
  [
    {
      title: "Emsculpt Fat Reduction",
      desc: "Sculpt and tone your body with non-invasive Emsculpt fat reduction technology.",
      img: "https://theroyalskinaesthetics.com/wp-content/uploads/elementor/thumbs/Pura-Vida-Emsculpt-Page-scaled-1-qtw4upmwy2p1klnu11h5h2vwytl3k4xz5e94013z08.jpg",
      to: "/emsculpt-fat-reduction",
      icon: "https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/Emsculpt-Fat-Reduction.png",
    },
    {
      title: "Emsella",
      desc: "Improve pelvic health and strengthen muscles with the innovative Emsella treatment.",
      img: "https://theroyalskinaesthetics.com/wp-content/uploads/elementor/thumbs/Emsella-image-4-qtw4xgbyvog5fnoh0q4z8vzbca2n0ctsiyr3e31muw.jpg",
      to: "/emsella",
      icon: "https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/Emsella.png",
    },
    {
      title: "Threads",
      desc: "Lift and tighten sagging skin with minimally invasive thread lift procedures.",
      img: "https://theroyalskinaesthetics.com/wp-content/uploads/elementor/thumbs/PDO_Thread_Lift-qtxpcu9et39idqz65ayacrwbz3mizuajhealqt35rs.webp",
      to: "/threads",
      icon: "https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/Threads.png",
    },
  ],
  [
    {
      title: "Aptos Face Lift",
      desc: "Achieve a youthful, lifted look with the Aptos non-surgical face lift.",
      img: "https://theroyalskinaesthetics.com/wp-content/uploads/elementor/thumbs/iStock-1300781308_thread_lift-qtr4gb6l2gcl3r54rst3xx412vnx1embl3cjfaf9q0.jpg",
      to: "/aptos-face-lift",
      icon: "https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/Aptos-Face-Lift.png",
    },
    {
      title: "Body Fillers",
      desc: "Contour and enhance your body shape with our specialized body filler treatments.",
      img: "https://theroyalskinaesthetics.com/wp-content/uploads/elementor/thumbs/Body-Fillers-1-qtr4eqs9oe7dr5f1x4fhsbcdfrdw7kefdc7emoqw3c.jpg",
      to: "/body-fillers",
      icon: "https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/Fillers.png",
    },
    {
      title: "HIFU",
      desc: "Experience non-invasive skin tightening and lifting with advanced HIFU technology.",
      img: "https://theroyalskinaesthetics.com/wp-content/uploads/elementor/thumbs/hifu-qtxpgqbd3el8fnbqfhhp6ak0hig7uqqjonhy91bi0o.jpg",
      to: "/hifu",
      icon: "https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/HIFU.png",
    },
  ],
  [
    {
      title: "Q-Switch",
      desc: "Target pigmentation and achieve clearer skin with our Q-Switch laser treatments.",
      img: "https://theroyalskinaesthetics.com/wp-content/uploads/elementor/thumbs/q-switch-laser-procedure-qtr4u5d1onak131hys5dnfebx3ggczk25l3vrxwm48.jpg",
      to: "/q-switch",
      icon: "https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/Q-Switch.png",
    },
    {
      title: "Fat Dissolving Injection",
      desc: "Eliminate stubborn fat pockets with targeted fat dissolving injections.",
      img: "https://theroyalskinaesthetics.com/wp-content/uploads/elementor/thumbs/Aesthetician-performing-fat-dissolving-treatment-qtr55my17r0pxicqvqx84j15amtyft5yeg5ixove2g.jpg",
      to: "/fat-dissolving-injection",
      icon: "https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/Fat-Dissolving-Injection.png",
    },
    {
      title: "Polynucleotides",
      desc: "Boost skin regeneration and repair with our innovative polynucleotide treatments.",
      img: "https://theroyalskinaesthetics.com/wp-content/uploads/elementor/thumbs/polynucleotide-treatment-qtr5lxhbodbn66orqsgfcf0rz2izuxugn38iecpq7s.jpg",
      to: "/polynucleotides",
      icon: "https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/Polynucleotides.png",
    },
  ],
];

function Ourservices() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <div className="mb-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,620px)_auto] lg:items-end">
        <div>
          <motion.p
            className="font-semibold text-amber-400"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.p>
          <h1 className="pb-2 text-3xl font-bold sm:text-4xl">
            What Service We Offer
          </h1>
        </div>

        <p className="leading-7 text-black/80">
          At The Royal Skin Aesthetics Clinic in F7, Islamabad, we offer a
          comprehensive range of advanced skincare services tailored to meet
          the unique needs of our clients. From rejuvenating facials to
          cutting-edge cosmetic treatments, our expert team is dedicated to
          providing personalized care—helping you achieve radiant, healthy skin
          right here in the heart of the city.
        </p>

        <div>
          <Link
            to="/services"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex h-11 items-center justify-center rounded-full bg-amber-400 px-5 text-center font-semibold text-white transition hover:bg-amber-500"
          >
            View All Services
          </Link>
        </div>
      </div>

      <div className="space-y-12">
        {serviceGroups.map((group, index) => (
          <ServiceGrid key={index} items={group} />
        ))}
      </div>
    </section>
  );
}

function ServiceGrid({ items = [] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10"
    >
      {items.map(({ title, desc, img, to, icon }) => (
        <div key={title} className="relative">
          <div className="group relative overflow-hidden rounded-2xl shadow-md">
            <img
              src={img}
              alt={title}
              className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:h-[380px] lg:h-[420px]"
            />
          </div>

          <div className="relative z-10 mx-4 -mt-10 sm:mx-6">
            <div className="rounded-2xl bg-white p-5 shadow-[0_20px_40px_rgba(0,0,0,0.12)] sm:p-6">
              <div className="flex items-start gap-4">
                {icon && (
                  <img
                    src={icon}
                    alt={`${title} icon`}
                    className="h-10 w-10 rounded-md object-contain"
                  />
                )}

                <div>
                  <h3 className="text-xl font-semibold leading-tight text-amber-400 sm:text-[22px]">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-black/80 sm:text-[15.5px]">
                    {desc}
                  </p>
                  <Link
                    to={to}
                    className="mt-4 inline-flex items-center gap-2 font-semibold text-[#d78b41] transition-colors hover:text-[#e9a65b]"
                  >
                    Learn More <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

export default Ourservices;
