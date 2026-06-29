"use client";

export default function CardPayment() {
  return (
    <div className="mt-6 space-y-4">

      <input
        placeholder="Número do cartão"
        className="w-full border rounded-xl p-3"
      />

      <input
        placeholder="Nome impresso"
        className="w-full border rounded-xl p-3"
      />

      <div className="grid grid-cols-2 gap-4">

        <input
          placeholder="Validade"
          className="border rounded-xl p-3"
        />

        <input
          placeholder="CVV"
          className="border rounded-xl p-3"
        />

      </div>

    </div>
  );
}