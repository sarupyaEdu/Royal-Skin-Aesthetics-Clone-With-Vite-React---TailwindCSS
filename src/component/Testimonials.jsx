import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

function Testimonials() {
  const slides = [
    "https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-14-at-12.26.23-PM-.jpeg",
    "https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-14-at-12.26.23.jpeg",
    "https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-14-at-12.26.23-PM-.jpeg",
    "https://theroyalskinaesthetics.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-14-at-12.26.23.jpeg",
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold italic text-amber-400 sm:text-4xl">
          Testimonials
        </h1>
        <div className="mt-4 flex items-center justify-center gap-2 sm:gap-3">
          <hr className="mt-3 mb-3 w-1.5 rounded-full border-t-4 border-amber-400" />
          <hr className="mt-3 mb-3 w-1.5 rounded-full border-t-4 border-amber-400" />
          <hr className="mt-3 mb-3 w-1.5 rounded-full border-t-4 border-amber-400" />
          <hr className="mt-3 mb-3 w-16 rounded-full border-t-4 border-amber-400 sm:w-24" />
        </div>
        <h2 className="text-3xl font-bold italic text-black sm:text-4xl lg:text-5xl">
          What Our Clients Say
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-sm font-medium text-gray-700 sm:text-base">
          Discover firsthand testimonials from our satisfied clients, sharing
          their experiences and successes with our exceptional services.
        </p>
      </div>

      <div className="mt-10 overflow-hidden rounded-2xl shadow-lg">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          navigation
          autoplay={{ delay: 3000 }}
          loop
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
        >
          {slides.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Testimonial ${index + 1}`}
                className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[500px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
