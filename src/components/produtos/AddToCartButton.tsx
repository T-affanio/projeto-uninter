"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface Props {
  produto: {
    id: number;
    name: string;
    image: string;
    price: number;
  };
}

export default function AddToCartButton({ produto }: Props) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() =>
        addToCart({
          id: produto.id,
          name: produto.name,
          image: produto.image,
          price: produto.price,
        })
      }
      className="
      mt-10
      flex
      items-center
      justify-center
      gap-3
      bg-red-700
      text-white
      rounded-xl
      py-4
      px-8
      hover:bg-red-800
      transition
      "
    >
      <ShoppingCart size={22} />
      Adicionar à Sacola
    </button>
  );
}