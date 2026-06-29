"use client";

import { StockItem } from "@/types/admin/stock";
import { useMemo, useState } from "react";

export default function StockPage() {
  const [items, setItems] = useState<StockItem[]>([
    {
      id: "1",
      name: "Cuscuz Nordestino",
      category: "Alimentos",
      quantity: 20,
      price: 8.5,
    },
    {
      id: "2",
      name: "Rapadura Artesanal",
      category: "Doces",
      quantity: 12,
      price: 6,
    },
  ]);

  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);

  const [form, setForm] = useState<Omit<StockItem, "id">>({
    name: "",
    category: "",
    quantity: 0,
    price: 0,
  });

  // 📊 métricas
  const totalItems = useMemo(
    () => items.reduce((acc, item) => acc + item.quantity, 0),
    [items]
  );

  const lowStock = items.filter((i) => i.quantity <= 5).length;

  // 🔎 filtro
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // ➕ adicionar / editar
  function handleSave() {
    if (!form.name || !form.category) return;

    if (editId) {
      setItems((prev) =>
        prev.map((item) =>
          item.id === editId ? { ...item, ...form } : item
        )
      );
      setEditId(null);
    } else {
      setItems((prev) => [
        ...prev,
        { id: crypto.randomUUID(), ...form },
      ]);
    }

    setForm({ name: "", category: "", quantity: 0, price: 0 });
    setIsOpen(false);
  }

  // ✏️ editar
  function handleEdit(item: StockItem) {
    setForm({
      name: item.name,
      category: item.category,
      quantity: item.quantity,
      price: item.price,
    });
    setEditId(item.id);
    setIsOpen(true);
  }

  // 🗑️ deletar
  function handleDelete(id: string) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">
            Estoque - Raízes do Nordeste 🌵
          </h1>

          <button
            onClick={() => setIsOpen(true)}
            className="bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            + Novo Produto
          </button>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card title="Total itens" value={totalItems} />
          <Card title="Produtos" value={items.length} />
          <Card title="Estoque baixo" value={lowStock} danger />
        </div>

        {/* SEARCH */}
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar produto..."
          className="w-full p-3 rounded-lg border mb-4"
        />

        {/* TABLE */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-green-700 text-white">
              <tr>
                <th className="p-3 text-left">Produto</th>
                <th className="p-3 text-left">Categoria</th>
                <th className="p-3 text-left">Qtd</th>
                <th className="p-3 text-left">Preço</th>
                <th className="p-3 text-left">Ações</th>
              </tr>
            </thead>

            <tbody>
              {filteredItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.category}</td>

                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded text-sm ${
                        item.quantity <= 5
                          ? "bg-red-100 text-red-600"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {item.quantity}
                    </span>
                  </td>

                  <td className="p-3">R$ {item.price.toFixed(2)}</td>

                  <td className="p-3 flex gap-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="px-2 py-1 bg-blue-500 text-white rounded"
                    >
                      Editar
                    </button>

                    <button
                      onClick={() => handleDelete(item.id)}
                      className="px-2 py-1 bg-red-500 text-white rounded"
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MODAL */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-xl w-100">
              <h2 className="text-xl font-bold mb-4">
                {editId ? "Editar Produto" : "Novo Produto"}
              </h2>

              <div className="flex flex-col gap-3">
                <input
                  placeholder="Nome"
                  className="border p-2 rounded"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                />

                <input
                  placeholder="Categoria"
                  className="border p-2 rounded"
                  value={form.category}
                  onChange={(e) =>
                    setForm({ ...form, category: e.target.value })
                  }
                />

                <input
                  type="number"
                  placeholder="Quantidade"
                  className="border p-2 rounded"
                  value={form.quantity}
                  onChange={(e) =>
                    setForm({ ...form, quantity: Number(e.target.value) })
                  }
                />

                <input
                  type="number"
                  placeholder="Preço"
                  className="border p-2 rounded"
                  value={form.price}
                  onChange={(e) =>
                    setForm({ ...form, price: Number(e.target.value) })
                  }
                />

                <div className="flex gap-2 mt-3">
                  <button
                    onClick={handleSave}
                    className="bg-green-600 text-white px-4 py-2 rounded w-full"
                  >
                    Salvar
                  </button>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-gray-400 text-white px-4 py-2 rounded w-full"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <p className="text-sm text-gray-500 mt-4">
          Sistema completo de estoque — Raízes do Nordeste 🌵
        </p>
      </div>
    </div>
  );
}

/* CARD COMPONENT */
function Card({
  title,
  value,
  danger,
}: {
  title: string;
  value: number;
  danger?: boolean;
}) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <p className="text-gray-500">{title}</p>
      <h2 className={`text-2xl font-bold ${danger ? "text-red-500" : ""}`}>
        {value}
      </h2>
    </div>
  );
}