"use client";

import { useMemo, useState } from "react";

type Order = {
  id: number;
  customer: string;
  total: string;
  status: string;
};

const orders: Order[] = [
  { id: 231, customer: "João Silva", total: "R$ 78,90", status: "Em preparo" },
  { id: 230, customer: "Maria Souza", total: "R$ 52,50", status: "Pendente" },
  { id: 229, customer: "Carlos Lima", total: "R$ 109,90", status: "Entrega" },
  { id: 228, customer: "Ana Costa", total: "R$ 39,90", status: "Finalizado" },
  { id: 227, customer: "Pedro Santos", total: "R$ 64,50", status: "Cancelado" },
];

export default function OrdersPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("Todos");

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const matchesSearch =
        order.customer.toLowerCase().includes(search.toLowerCase()) ||
        order.id.toString().includes(search);

      const matchesStatus =
        status === "Todos" || order.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  return (
    <main className="space-y-6 p-4 md:p-6">
      <header>
        <h1 className="text-2xl font-bold md:text-3xl">Pedidos</h1>

        <p className="text-sm text-muted-foreground">
          Gerencie os pedidos em tempo real.
        </p>
      </header>

      {/* Filtros */}
      <section className="rounded-xl border bg-background p-4 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por cliente ou nº do pedido..."
            className="h-11 flex-1 rounded-lg border px-3 text-sm outline-none focus:ring-2 focus:ring-primary"
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="h-11 rounded-lg border px-3 text-sm outline-none focus:ring-2 focus:ring-primary"
          >
            <option>Todos</option>
            <option>Pendente</option>
            <option>Em preparo</option>
            <option>Entrega</option>
            <option>Finalizado</option>
            <option>Cancelado</option>
          </select>
        </div>
      </section>

      {/* Lista */}
      <section className="space-y-4">
        {filteredOrders.length === 0 ? (
          <div className="rounded-xl border p-10 text-center text-muted-foreground">
            Nenhum pedido encontrado.
          </div>
        ) : (
          filteredOrders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))
        )}
      </section>
    </main>
  );
}

function OrderCard({ order }: { order: Order }) {
  return (
    <article className="rounded-xl border bg-background p-4 shadow-sm transition hover:shadow-md">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-semibold">Pedido #{order.id}</h2>

          <p className="text-sm text-muted-foreground">
            {order.customer}
          </p>

          <p className="mt-2 text-lg font-bold">{order.total}</p>
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(
              order.status
            )}`}
          >
            {order.status}
          </span>

          <button className="rounded-lg border px-4 py-2 text-sm transition hover:bg-muted">
            Ver detalhes
          </button>
        </div>
      </div>
    </article>
  );
}

function getStatusColor(status: string) {
  switch (status) {
    case "Pendente":
      return "border border-yellow-300 bg-yellow-100 text-yellow-800";

    case "Em preparo":
      return "border border-blue-300 bg-blue-100 text-blue-800";

    case "Entrega":
      return "border border-purple-300 bg-purple-100 text-purple-800";

    case "Finalizado":
      return "border border-green-300 bg-green-100 text-green-800";

    case "Cancelado":
      return "border border-red-300 bg-red-100 text-red-800";

    default:
      return "border border-gray-300 bg-gray-100 text-gray-700";
  }
}