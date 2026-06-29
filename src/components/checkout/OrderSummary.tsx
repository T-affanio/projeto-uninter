"use client";

import { useState } from "react";

import { useCart } from "@/context/CartContext";

import PaymentLoading from "./PaymentLoading";
import PaymentSuccess from "./PaymentSuccess";

export default function OrderSummary() {
  const {
    cart,
    totalPrice,
    clearCart,
  } = useCart();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleFinishOrder = () => {
    if (cart.length === 0) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      clearCart();

      setSuccess(true);
    }, 2500);
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
        <h2 className="text-2xl font-bold mb-6">
          Resumo do Pedido
        </h2>

        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between"
            >
              <div>
                <p className="font-semibold">
                  {item.name}
                </p>

                <span className="text-sm text-gray-500">
                  x{item.quantity}
                </span>
              </div>

              <strong>
                R$ {(item.price * item.quantity).toFixed(2)}
              </strong>
            </div>
          ))}
        </div>

        <hr className="my-6" />

        <div className="flex justify-between">
          <span>Subtotal</span>

          <strong>
            R$ {totalPrice.toFixed(2)}
          </strong>
        </div>

        <div className="flex justify-between mt-3">
          <span>Entrega</span>

          <strong>Grátis</strong>
        </div>

        <div className="flex justify-between text-2xl mt-6 font-bold text-red-700">
          <span>Total</span>

          <span>
            R$ {totalPrice.toFixed(2)}
          </span>
        </div>

        <button
          onClick={handleFinishOrder}
          disabled={loading || cart.length === 0}
          className="
            w-full
            mt-8
            rounded-xl
            bg-red-700
            text-white
            py-4
            hover:bg-red-800
            disabled:opacity-50
            disabled:cursor-not-allowed
            transition
          "
        >
          {loading
            ? "Processando..."
            : "Finalizar Pedido"}
        </button>
      </div>

      <PaymentLoading open={loading} />

     
    </>
  );
}