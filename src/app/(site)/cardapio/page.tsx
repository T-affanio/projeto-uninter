"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { categorias } from "@/data/categorias";
import { produtos } from "@/data/produtos";

import CardProduto from "@/components/produtos/prodcard";

import { Search } from "lucide-react";

export default function CardapioPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoriaSlug = searchParams.get("categoria");

  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState<number | null>(null);
  const [ordem, setOrdem] = useState("nome");

  useEffect(() => {
    if (!categoriaSlug) {
      setCategoria(null);
      return;
    }

    const encontrada = categorias.find(
      (cat) => cat.slug === categoriaSlug
    );

    setCategoria(encontrada?.id ?? null);
  }, [categoriaSlug]);

  const lista = useMemo(() => {
    let resultado = [...produtos];

    if (categoria !== null) {
      resultado = resultado.filter(
        (produto) => produto.categoryId === categoria
      );
    }

    if (busca) {
      resultado = resultado.filter((produto) =>
        produto.name.toLowerCase().includes(busca.toLowerCase())
      );
    }

    switch (ordem) {
      case "menor":
        resultado.sort((a, b) => a.price - b.price);
        break;

      case "maior":
        resultado.sort((a, b) => b.price - a.price);
        break;

      default:
        resultado.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
    }

    return resultado;
  }, [busca, categoria, ordem]);

  return (
    <main className="max-w-7xl mx-auto py-10 px-4 ">

      <h1
        className="text-5xl text-red-700 mb-2"
        style={{
          fontFamily: "var(--font-lemonada)",
        }}
      >
        Nosso Cardápio
      </h1>

      <p className="text-gray-500 mb-8">
        Escolha seus pratos favoritos.
      </p>

      <div className="flex flex-col lg:flex-row gap-4 mb-8">

        <div className="relative flex-1">

          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2"
            size={20}
          />

          <input
            value={busca}
            onChange={(e) =>
              setBusca(e.target.value)
            }
            placeholder="Buscar produto..."
            className="w-full border rounded-xl py-3 pl-12 pr-4"
          />

        </div>

        <select
          value={ordem}
          onChange={(e) =>
            setOrdem(e.target.value)
          }
          className="border rounded-xl px-4"
        >
          <option value="nome">A-Z</option>
          <option value="menor">Menor preço</option>
          <option value="maior">Maior preço</option>
        </select>

      </div>

      <div className="flex flex-wrap gap-3 mb-8">

        <button
          onClick={() => router.push("/cardapio")}
          className={`px-5 py-2 rounded-full transition ${
            categoria === null
              ? "bg-red-700 text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          Todos
        </button>

        {categorias.map((cat) => (
          <button
            key={cat.id}
            onClick={() =>
              router.push(
                `/cardapio?categoria=${cat.slug}`
              )
            }
            className={`px-5 py-2 rounded-full transition ${
              categoria === cat.id
                ? "bg-red-700 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {cat.name}
          </button>
        ))}

      </div>

      <p className="text-gray-500 mb-6">
        {lista.length} produtos encontrados
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {lista.map((produto) => (
          <CardProduto
            key={produto.id}
            produto={produto}
          />
        ))}

      </div>

    </main>
  );
}