"use client";

import Image from "next/image";
import Link from "next/link";

import { ShoppingCart } from "lucide-react";

import { Produto } from "@/types/produtos";
import { useCart } from "@/context/CartContext";

type Props = {
  produto: Produto;
};

export default function CardProduto({ produto }: Props) {
  const { addToCart } = useCart();

  function handleAddToCart(
    e: React.MouseEvent<HTMLButtonElement>
  ) {
    e.preventDefault();
    e.stopPropagation();

    addToCart({
      id: produto.id,
      name: produto.name,
      image: produto.image,
      price: produto.price,
    });
  }

  return (
    <Link href={`/produto/${produto.id}`}>
      <article
        className="
          bg-white
          rounded-2xl
          overflow-hidden
          shadow-md
          hover:shadow-xl
          hover:-translate-y-1
          transition-all
          duration-300
          cursor-pointer
        "
      >
        <div className="relative h-52 w-full">
          <Image
            src={produto.image}
            alt={produto.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-4">
          <h2 className="font-bold text-lg line-clamp-1">
            {produto.name}
          </h2>

          <p className="text-gray-500 text-sm mt-2 line-clamp-2">
            {produto.description}
          </p>

          <div className="flex items-center justify-between mt-5">
            <span className="text-2xl font-bold text-red-700">
              R$ {produto.price.toFixed(2)}
            </span>

            <button
              onClick={handleAddToCart}
              className="
                h-11
                w-11
                rounded-full
                bg-red-700
                text-white
                flex
                items-center
                justify-center
                hover:bg-red-800
                transition-colors
              "
            >
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>
      </article>
    </Link>
  );
}