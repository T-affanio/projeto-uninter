import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { produtos } from "@/data/produtos";
import { categorias } from "@/data/categorias";
import CardProduto from "@/components/produtos/prodcard";
import AddToCartButton from "@/components/produtos/AddToCartButton";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProdutoPage({ params }: Props) {
  const { id } = await params;

  const produto = produtos.find((item) => item.id === Number(id));

  if (!produto) notFound();

  const categoria = categorias.find(
    (cat) => cat.id === produto.categoryId
  );

  const relacionados = produtos
    .filter(
      (item) =>
        item.categoryId === produto.categoryId &&
        item.id !== produto.id
    )
    .slice(0, 4);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-14">
      {/* VOLTAR */}
      <Link
        href="/cardapio"
        className="flex items-center gap-2 text-red-700 mb-6 sm:mb-8 hover:opacity-80 transition"
      >
        <ArrowLeft size={18} />
        <span className="text-sm sm:text-base">Voltar ao cardápio</span>
      </Link>

      {/* PRODUTO */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-14 items-start">
        
        {/* IMAGEM */}
        <div className="relative w-full aspect-square sm:aspect-4/3 lg:aspect-auto lg:h-125 xl:h-150 rounded-xl overflow-hidden shadow-xl">
          <Image
            src={produto.image}
            alt={produto.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* INFO */}
        <div className="flex flex-col">
          <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs sm:text-sm w-fit">
            {categoria?.name}
          </span>

          <h1
            className="
              mt-4 sm:mt-6
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
              leading-tight
            "
            style={{ fontFamily: "var(--font-lemonada)" }}
          >
            {produto.name}
          </h1>

          <p className="text-gray-500 mt-4 sm:mt-6 leading-6 sm:leading-7 lg:leading-8 text-sm sm:text-base lg:text-lg max-w-xl">
            {produto.description}
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-red-700 font-bold mt-6 sm:mt-8">
            R$ {produto.price.toFixed(2)}
          </h2>

          {/* BOTÃO */}
          <div className="mt-6 sm:mt-10 w-full max-w-sm">
            <AddToCartButton produto={produto} />
          </div>
        </div>
      </div>

      {/* RELACIONADOS */}
      {relacionados.length > 0 && (
        <section className="mt-14 sm:mt-20 lg:mt-28">
          <h2
            className="
              text-2xl sm:text-3xl lg:text-4xl xl:text-5xl
              text-red-700
            "
            style={{ fontFamily: "var(--font-lemonada)" }}
          >
            Você também pode gostar
          </h2>

          <div className="
            grid 
            grid-cols-2 
            md:grid-cols-3 
            xl:grid-cols-4 
            gap-4 sm:gap-6 lg:gap-8 
            mt-6 sm:mt-8
          ">
            {relacionados.map((produto) => (
              <CardProduto key={produto.id} produto={produto} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}