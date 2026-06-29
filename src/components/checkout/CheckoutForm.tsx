"use client";

import PaymentMethods from "./PaymentMethods";


export default function CheckoutForm() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">

      <h2 className="text-2xl font-bold mb-8">
        Dados do Cliente
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <input
          placeholder="Nome completo"
          className="border rounded-xl p-3"
        />

        <input
          placeholder="Telefone"
          className="border rounded-xl p-3"
        />

        <input
          placeholder="Email"
          className="border rounded-xl p-3 md:col-span-2"
        />

      </div>

      <h2 className="text-2xl font-bold mt-10 mb-6">
        Endereço
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <input
          placeholder="CEP"
          className="border rounded-xl p-3"
        />

        <input
          placeholder="Cidade"
          className="border rounded-xl p-3"
        />

        <input
          placeholder="Rua"
          className="border rounded-xl p-3 md:col-span-2"
        />

        <input
          placeholder="Número"
          className="border rounded-xl p-3"
        />

        <input
          placeholder="Bairro"
          className="border rounded-xl p-3"
        />

      </div>

      <PaymentMethods />

    </div>
  );
}