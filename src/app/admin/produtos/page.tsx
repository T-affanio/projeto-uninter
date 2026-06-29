"use client";

import { useMemo, useState } from "react";
import { produtos } from "@/data/produtos";
import { Produto } from "@/types/produtos";

export default function ProdutosPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<number | "all">("all");

  // 🔎 filtro inteligente
  const filtered = useMemo(() => {
    return produtos.filter((p) => {
      const matchName = p.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory =
        category === "all" ? true : p.categoryId === category;

      return matchName && matchCategory;
    });
  }, [search, category]);

  // 📦 categorias únicas
  const categories = useMemo(() => {
    const set = new Set(produtos.map((p) => p.categoryId));
    return Array.from(set);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold">
            Cardápio Raízes do Nordeste 🌵
          </h1>
          <p className="text-gray-500">
            Produtos frescos, artesanais e cheios de sabor
          </p>
        </div>

        {/* SEARCH + FILTER */}
        <div className="flex flex-col md:flex-row gap-3 mb-6">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar prato..."
            className="w-full p-3 rounded-lg border"
          />

          <select
            className="p-3 rounded-lg border"
            value={category}
            onChange={(e) =>
              setCategory(
                e.target.value === "all"
                  ? "all"
                  : Number(e.target.value)
              )
            }
          >
            <option value="all">Todas categorias</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                Categoria {c}
              </option>
            ))}
          </select>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ===================== */
/* CARD DO PRODUTO       */
/* ===================== */

function ProductCard({ item }: { item: Produto }) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition">

      {/* imagem */}
      <div className="h-40 bg-gray-200 relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />

        {/* badge destaque */}
        {item.section === "mais-pedidos" && (
          <span className="absolute top-2 left-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded">
            🔥 Mais pedido
          </span>
        )}

        {/* disponibilidade */}
        <span
          className={`absolute top-2 right-2 text-xs px-2 py-1 rounded ${
            item.available
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {item.available ? "Disponível" : "Indisponível"}
        </span>
      </div>

      {/* conteúdo */}
      <div className="p-4">
        <h2 className="font-bold text-lg">{item.name}</h2>

        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
          {item.description || "Sem descrição"}
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-green-700 font-bold text-lg">
            R$ {item.price.toFixed(2)}
          </span>

          <button
            className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm"
            disabled={!item.available}
          >
            Ver mais
          </button>
        </div>
      </div>
    </div>
  );
}