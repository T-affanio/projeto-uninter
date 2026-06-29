"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { categorias } from "@/data/categorias";

export default function CategoriasSlider() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex justify-between items-center mb-6">
          <h2
            className="text-3xl text-red-700"
            style={{ fontFamily: "var(--font-lemonada)" }}
          >
            Categorias
          </h2>

          <Link
            href="/cardapio"
            className="text-red-700 hover:underline"
          >
            Ver Cardápio →
          </Link>
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView={2.5}
          breakpoints={{
            640: {
              slidesPerView: 3.5,
            },
            768: {
              slidesPerView: 4.5,
            },
            1024: {
              slidesPerView: 6,
            },
            1280: {
              slidesPerView: 7,
            },
          }}
        >
          {categorias.map((categoria) => (
            <SwiperSlide key={categoria.id}>
              <Link
                href={`/cardapio?categoria=${categoria.slug}`}
                className="group flex flex-col items-center justify-center"
              >
                <div
                  className="
                    relative
                    
                    w-28
                    h-28
                    rounded-full
                    overflow-hidden
                    shadow-lg
                    border-4
                    border-white
                    transition
                    group-hover:scale-105
                  "
                >
                  <Image
                    src={categoria.image}
                    alt={categoria.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <span className="mt-3 font-semibold group-hover:text-red-700 transition">
                  {categoria.name}
                </span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}