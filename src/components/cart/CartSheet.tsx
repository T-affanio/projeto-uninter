"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { useCart } from "@/context/CartContext";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CartSheet({
  open,
  onOpenChange,
}: Props) {
  const router = useRouter();

  const {
    cart,
    totalPrice,
    clearCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const handleCheckout = () => {
    onOpenChange(false);
    router.push("/checkout");
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag />
            Minha Sacola
          </SheetTitle>
        </SheetHeader>

        {cart.length === 0 ? (
          <div className="flex flex-1 items-center justify-center text-gray-500">
            Sua sacola está vazia.
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto mt-6 space-y-5">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4"
                >
                  <div className="relative h-20 w-20 rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold">
                      {item.name}
                    </h3>

                    <p className="text-red-700 font-bold mt-1">
                      R$ {item.price.toFixed(2)}
                    </p>

                    <div className="flex items-center gap-3 mt-3">
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                      >
                        <Minus size={16} />
                      </Button>

                      <span className="font-semibold">
                        {item.quantity}
                      </span>

                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                      >
                        <Plus size={16} />
                      </Button>

                      <Button
                        size="icon"
                        variant="destructive"
                        onClick={() =>
                          removeFromCart(item.id)
                        }
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Separator className="my-5" />

            <div className="space-y-4">
              <div className="flex justify-between text-lg">
                <span>Subtotal</span>

                <span className="font-bold text-red-700">
                  R$ {totalPrice.toFixed(2)}
                </span>
              </div>

              <Button
                onClick={handleCheckout}
                disabled={cart.length === 0}
                className="w-full h-12 text-lg bg-red-700 hover:bg-red-800 disabled:opacity-50"
              >
                Finalizar Pedido
              </Button>

              <Button
                variant="outline"
                className="w-full"
                onClick={clearCart}
              >
                Limpar Sacola
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}