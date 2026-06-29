"use client";

import { useState } from "react";

import { CreditCard, Banknote, QrCode } from "lucide-react";

import PixPayment from "./PixPayment";
import CardPayment from "./CardPayment";
import MoneyPayment from "./MoneyPayment";

export default function PaymentMethods() {
  const [payment, setPayment] = useState("pix");

  return (
    <>
      <h2 className="text-2xl font-bold mt-10 mb-6">
        Forma de pagamento
      </h2>

      <div className="space-y-3">

        <label className="border rounded-xl p-4 flex items-center gap-4 cursor-pointer">
          <input
            type="radio"
            checked={payment === "pix"}
            onChange={() => setPayment("pix")}
          />

          <QrCode />

          PIX
        </label>

        <label className="border rounded-xl p-4 flex items-center gap-4 cursor-pointer">
          <input
            type="radio"
            checked={payment === "credito"}
            onChange={() => setPayment("credito")}
          />

          <CreditCard />

          Crédito
        </label>

        <label className="border rounded-xl p-4 flex items-center gap-4 cursor-pointer">
          <input
            type="radio"
            checked={payment === "dinheiro"}
            onChange={() => setPayment("dinheiro")}
          />

          <Banknote />

          Dinheiro
        </label>

      </div>

      {payment === "pix" && <PixPayment />}

      {payment === "credito" && <CardPayment />}

      {payment === "dinheiro" && <MoneyPayment />}
    </>
  );
}