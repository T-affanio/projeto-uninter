"use client";

import { useState } from "react";

import CarroselHome from "@/layout/client/Carrosel-home";
import CategoriasHome from "@/layout/client/categorias-home";
import ProductSection from "@/components/home/section-produto";

import { produtos } from "@/data/produtos";
import { Search } from "lucide-react";

export default function HomeSite() {
  const [search, setSearch] = useState("");

  const horaDoRango = produtos.filter(
    (p) => p.categoryId === 2 || p.categoryId === 6 || p.categoryId === 8
  );

  const vaiUmDoce = produtos.filter((p) => p.categoryId === 5);
  const praRefrescar = produtos.filter((p) => p.categoryId === 3);

  const produtosFiltrados = produtos.filter((produto) =>
    produto.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full overflow-x-hidden">
      <CarroselHome />

      {/* HERO / BUSCA */}
      <section
        className="
          w-full
          min-h-55 sm:min-h-65 md:min-h-75
          -mt-3
          bg-cover bg-center
          flex flex-col items-center justify-center
          px-4
          shadow-2xl
        "
        style={{
          backgroundImage: "url('/image/banners/buscaHome.png')",
        }}
      >
        <h2
          className="
            text-center text-white font-bold
            text-2xl sm:text-3xl md:text-5xl lg:text-6xl
            leading-tight
            pb-4 sm:pb-6 md:pb-7
          "
          style={{
            fontFamily: "var(--font-lemonada)",
          }}
        >
          # Quem prova, entende
        </h2>

        <div className="relative w-full max-w-sm sm:max-w-md">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            size={20}
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Procure seu prato favorito"
            className="
              w-full
              rounded-md
              border border-gray-300
              bg-white
              py-2 sm:py-3
              pl-10 sm:pl-12
              pr-4
              text-sm sm:text-base md:text-lg
              outline-none
              focus:ring-2 focus:ring-amber-500
              shadow-lg
            "
          />
        </div>
      </section>

      {/* CATEGORIAS */}
      <div className="px-2 sm:px-4 md:px-8">
        <CategoriasHome />
      </div>

      {/* PRODUTOS */}
      {search.length > 0 ? (
        <ProductSection
          title="Resultado da busca"
          subtitle={`${produtosFiltrados.length} produtos encontrados`}
          products={produtosFiltrados}
        />
      ) : (
        <>
          <ProductSection
            title="Hora do rango?"
            subtitle="Bateu aquela fome? Temos os melhores pratos."
            products={horaDoRango}
          />

          <ProductSection
            title="Vai um doce?"
            subtitle="Sobremesas para fechar sua refeição."
            products={vaiUmDoce}
          />

          <ProductSection
            title="Pra refrescar"
            subtitle="Bebidas geladinhas para acompanhar."
            products={praRefrescar}
          />
        </>
      )}
    </div>
  );
}