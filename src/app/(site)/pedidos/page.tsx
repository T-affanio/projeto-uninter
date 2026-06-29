"use client";

import { useState } from "react";

import { useCart } from "@/context/CartContext";
import { useOrders } from "@/context/OrderContext";

import PaymentSuccess from "@/components/checkout/PaymentSuccess";
import PaymentLoading from "@/components/checkout/PaymentLoading";

import {
  ShoppingBag,
  Truck,
  CreditCard,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export default function OrderSummary() {
  const { cart, totalPrice, clearCart } = useCart();
  const { createOrder } = useOrders();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [lastOrderId, setLastOrderId] = useState<number | null>(null);
  const [lastTotal, setLastTotal] = useState(0);

  async function handleFinishOrder() {
    if (cart.length === 0) return;

    setLoading(true);

    // simula pagamento
    await new Promise((resolve) => setTimeout(resolve, 2500));

    const order = createOrder(cart, totalPrice, "PIX");

    setLastOrderId(order.id);
    setLastTotal(totalPrice);

    clearCart();

    setLoading(false);
    setSuccess(true);
  }

  return (
    <>
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sticky top-24">

        {/* HEADER */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
            <ShoppingBag className="text-red-700" />
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Resumo do Pedido
            </h2>

            <p className="text-sm text-gray-500">
              Confira seus itens antes de finalizar
            </p>
          </div>
        </div>

        {/* ITENS */}
        <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between border-b pb-3"
            >
              <div>
                <p className="font-semibold">
                  {item.name}
                </p>

                <span className="text-sm text-gray-500">
                  {item.quantity} × R$ {item.price.toFixed(2)}
                </span>
              </div>

              <strong className="text-red-700">
                R$ {(item.price * item.quantity).toFixed(2)}
              </strong>
            </div>
          ))}
        </div>

        {/* RESUMO */}
        <div className="mt-6 space-y-3 text-gray-600">

          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>R$ {totalPrice.toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span className="flex items-center gap-2">
              <Truck size={16} />
              Entrega
            </span>
            <span className="text-green-600 font-semibold">
              Grátis
            </span>
          </div>

          <div className="flex justify-between">
            <span className="flex items-center gap-2">
              <CreditCard size={16} />
              Pagamento
            </span>
            <span>PIX</span>
          </div>
        </div>

        {/* TOTAL */}
        <div className="border-t mt-6 pt-6 flex justify-between items-center">
          <span className="text-xl font-semibold">
            Total
          </span>

          <span className="text-3xl font-bold text-red-700">
            R$ {totalPrice.toFixed(2)}
          </span>
        </div>

        {/* BOTÃO */}
        <Link
  href="/checkout"
  className="
    w-full
    mt-8
    rounded-2xl
    bg-gradient-to-r
    from-red-700
    to-red-600
    text-white
    py-4
    font-semibold
    text-lg
    shadow-lg
    hover:scale-[1.02]
    transition-all
    flex
    items-center
    justify-center
  "
>
  Ir para Checkout
</Link>

        {/* SEGURANÇA */}
        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
          <ShieldCheck size={16} className="text-green-600" />
          Pagamento 100% seguro
        </div>

      </div>

      {/* LOADING */}
      <PaymentLoading open={loading} />

      {/* SUCCESS */}
      <PaymentSuccess
        open={success}
        total={lastTotal}
        orderId={lastOrderId}
        onClose={() => setSuccess(false)}
      />
    </>
  );
}