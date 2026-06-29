"use client";

import { Loader2 } from "lucide-react";

interface Props {
  open: boolean;
}

export default function PaymentLoading({
  open,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center">

      <div className="bg-white rounded-3xl p-10 w-[400px] text-center shadow-2xl">

        <Loader2
          size={70}
          className="mx-auto animate-spin text-red-700"
        />

        <h2 className="text-2xl font-bold mt-6">
          Processando pagamento...
        </h2>

        <p className="text-gray-500 mt-3">
          Aguarde alguns instantes.
        </p>

        <div className="mt-8 h-3 bg-gray-200 rounded-full overflow-hidden">

          <div
            className="
              h-full
              bg-red-700
              animate-pulse
              w-full
            "
          />

        </div>

      </div>

    </div>
  );
}