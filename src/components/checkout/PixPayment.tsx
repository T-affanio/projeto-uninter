"use client";

import { Copy, QrCode } from "lucide-react";

export default function PixPayment() {
  const chave =
    "00020126580014BR.GOV.BCB.PIX013612345678901234";

  return (
    <div className="mt-6 rounded-2xl border p-6 bg-green-50">

      <div className="flex justify-center mb-6">
        <div className="w-52 h-52 rounded-xl bg-white border flex items-center justify-center">
          <QrCode size={140} />
        </div>
      </div>

      <p className="text-sm text-gray-600">
        Chave PIX
      </p>

      <div className="mt-2 rounded-xl bg-white border p-3 break-all">
        {chave}
      </div>

      <button
        onClick={() => navigator.clipboard.writeText(chave)}
        className="mt-5 w-full bg-green-600 hover:bg-green-700 text-white rounded-xl py-3 flex justify-center items-center gap-2"
      >
        <Copy size={18} />
        Copiar chave PIX
      </button>

    </div>
  );
}