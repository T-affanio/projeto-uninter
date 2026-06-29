"use client";

import { unidades } from "@/data/restaurantes";
import UnitCard from "@/layout/client/restaurantes/UnitCard";

export default function Restaurantes() {
  return (
    <main className="bg-[#FAF2E3] text-[#2B180F]">

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">

        <img
          src="/image/banners.png"
          className="absolute inset-0 h-full w-full object-cover scale-105"
          alt="Banner Raízes do Nordeste"
        />

        <div className="absolute inset-0 bg-linear-to-b from-[#1A0E08]/80 via-[#2B180F]/70 to-[#1A0E08]/90" />

        <div className="relative z-10 flex flex-col items-center text-center px-6">

          <img
            src="/image/logo-1.png"
            className="w-44 drop-shadow-lg"
            alt="Logo Raízes do Nordeste"
          />

          <h1 className="mt-8 text-5xl md:text-7xl font-black text-[#F4C430] tracking-tight leading-tight">
            Raízes do Nordeste
          </h1>

          <p className="mt-6 max-w-2xl text-base md:text-xl text-[#FFF8EF]/90 leading-relaxed">
            Sabores que carregam história, memória e tradição.
            <br className="hidden md:block" />
            Escolha a unidade mais próxima e viva essa experiência.
          </p>

          <button
            className="
              mt-10
              rounded-full
              bg-[#C6290A]
              px-10
              py-4
              text-lg
              font-bold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:bg-[#A93218]
              hover:scale-105
              active:scale-95
            "
          >
            Escolher Unidade
          </button>

        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#FAF2E3] to-transparent" />
      </section>

      {/* SOBRE */}
      <section className="mx-auto max-w-6xl py-24 px-6">

        <h2 className="text-center text-3xl md:text-5xl font-black text-[#0A7A62]">
          Uma tradição que atravessa gerações
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-center text-lg md:text-xl leading-8 text-[#5A4637]">
          O Raízes do Nordeste nasceu para levar à mesa os sabores mais marcantes
          da culinária nordestina. Carne de sol, baião de dois, escondidinho,
          macaxeira, feijão verde e muito mais — tudo preparado com ingredientes
          frescos e respeito às nossas raízes.
        </p>

      </section>

      {/* UNIDADES */}
      <section className="mx-auto max-w-7xl px-6 pb-28">

        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black text-[#C7441E]">
            Escolha sua unidade
          </h2>

          <p className="mt-4 text-[#5A4637] text-lg">
            Atendimento próximo, sabor autêntico e experiência única em cada região
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

          {unidades.map((unidade) => (
            <div
              key={unidade.id}
              className="transform transition hover:-translate-y-2 hover:shadow-2xl duration-300"
            >
              <UnitCard unidade={unidade} />
            </div>
          ))}

        </div>

      </section>

    </main>
  );
}