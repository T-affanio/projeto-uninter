"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const heroImages = [
  "/image/banners/banner.png",
  "/image/banners/banner1.png",
  "/image/banners/banner2.png",
  "/image/banners/banner3.png",
];

const messages = [
  "Localize nossas lojas mais próximas",
  "Promoções exclusivas da semana",
  "Cupons especiais para você",
];

export default function CarroselHome() {
  return (
    <section
      className="
        grid
        grid-cols-1
        lg:grid-cols-[65%_35%]
        h-[60vh] sm:h-[70vh] lg:h-[80vh]
        overflow-hidden
      "
    >
      {/* Banner Principal */}
      <div className="relative h-full w-full">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop
          speed={1000}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="h-full w-full"
        >
          {heroImages.map((img) => (
            <SwiperSlide key={img}>
              <div className="relative h-full w-full">
                <Image
                  src={img}
                  alt="Banner"
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Slider lateral */}
      <div className="bg-neutral-400 hidden lg:block">
        <Swiper
          modules={[Autoplay]}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="h-full"
        >
          {messages.map((message) => (
            <SwiperSlide key={message}>
              <div className="flex h-full items-center justify-center px-6 lg:px-10">
                <h2 className="text-center text-xl sm:text-2xl lg:text-3xl font-bold">
                  {message}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}