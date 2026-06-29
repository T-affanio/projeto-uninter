"use client";

import Image from "next/image";
import Link from "next/link";

import { ShoppingCart } from "lucide-react";

import { Produto } from "@/types/produtos";
import { useCart } from "@/context/CartContext";

import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

type Props = {
  produto: Produto;
};

export default function CardProduto({ produto }: Props) {
  const { addToCart } = useCart();

  function handleAddToCart(e: React.MouseEvent<HTMLButtonElement>) {
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
      <Card
        className="
          overflow-hidden
          transition-all
          hover:scale-[1.02]
          hover:shadow-xl
          cursor-pointer
          h-full
        "
      >
        <div className="relative h-52 w-full">
          <Image
            src={produto.image}
            alt={produto.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>

        <CardContent className="pt-4">
          <h2 className="text-lg font-bold">
            {produto.name}
          </h2>

          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
            {produto.description}
          </p>
        </CardContent>

        <CardFooter className="flex items-center justify-between">
          <span className="text-xl font-bold text-red-600">
            R$ {produto.price.toFixed(2)}
          </span>

          <button
            onClick={handleAddToCart}
            className="
              w-10
              h-10
              rounded-full
              bg-red-700
              hover:bg-red-800
              transition
              flex
              items-center
              justify-center
              text-white
            "
          >
            <ShoppingCart size={18} />
          </button>
        </CardFooter>
      </Card>
    </Link>
  );
}