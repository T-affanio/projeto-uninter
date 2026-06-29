"use client";

import { CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface Props {
  open: boolean;
  total: number;
  orderId: number | null;
  onClose: () => void;
}

export default function PaymentSuccess({
  open,
  total,
  onClose,
}: Props) {
  const router = useRouter();

  if (!open) return null;

  const pedido = Math.floor(Math.random() * 90000 + 10000);

  return (
    <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center">

      <div className="bg-white rounded-3xl w-[430px] p-8 shadow-2xl animate-in zoom-in-95">

        <div className="flex justify-center">

          <CheckCircle2
            size={90}
            className="text-green-500"
          />

        </div>

        <h2 className="text-3xl font-bold text-center mt-6">
          Pagamento aprovado!
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Seu pedido foi realizado com sucesso.
        </p>

        <div className="mt-8 space-y-4">

          <div className="flex justify-between">

            <span>Pedido</span>

            <strong>#{pedido}</strong>

          </div>

          <div className="flex justify-between">

            <span>Total Pago</span>

            <strong>
              R$ {total.toFixed(2)}
            </strong>

          </div>

          <div className="flex justify-between">

            <span>Entrega</span>

            <strong>30-40 min</strong>

          </div>

        </div>

        <Button
          className="w-full mt-8 h-12 bg-red-700 hover:bg-red-800"
          onClick={() => {
            onClose();
            router.push("/");
          }}
        >
          Voltar ao início
        </Button>

      </div>

    </div>
  );
}