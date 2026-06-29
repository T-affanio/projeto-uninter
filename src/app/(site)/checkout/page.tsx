"use client";

import CheckoutForm from "@/components/checkout/CheckoutForm";
import OrderSummary from "@/components/checkout/OrderSummary";



export default function CheckoutPage() {
  return (
    <main className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">

        <h1
          className="text-5xl text-red-700 mb-10"
          style={{
            fontFamily: "var(--font-lemonada)",
          }}
        >
          Checkout
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2">
            <CheckoutForm />
          </div>

          <div>
            <OrderSummary />
          </div>

        </div>

      </div>
    </main>
  );
}