"use client";

import { useMemo, useState } from "react";

type Coupon = {
  id: string;
  code: string;
  type: "percent" | "fixed";
  value: number;
  minValue?: number;
  expiresAt: string;
  active: boolean;
};

export default function CouponsPage() {
  const [coupons, setCoupons] = useState<Coupon[]>([
    {
      id: "1",
      code: "NORDESTE10",
      type: "percent",
      value: 10,
      minValue: 50,
      expiresAt: "2026-12-31",
      active: true,
    },
    {
      id: "2",
      code: "CUSCUZ5",
      type: "fixed",
      value: 5,
      expiresAt: "2025-08-01",
      active: true,
    },
  ]);

  const [search, setSearch] = useState("");

  // form
  const [form, setForm] = useState<Omit<Coupon, "id">>({
    code: "",
    type: "percent",
    value: 0,
    minValue: 0,
    expiresAt: "",
    active: true,
  });

  const [editingId, setEditingId] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  // 🔎 filtro
  const filtered = useMemo(() => {
    return coupons.filter((c) =>
      c.code.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, coupons]);

  // 💾 salvar
  function handleSave() {
    if (!form.code || !form.expiresAt) return;

    if (editingId) {
      setCoupons((prev) =>
        prev.map((c) =>
          c.id === editingId ? { ...c, ...form } : c
        )
      );
      setEditingId(null);
    } else {
      setCoupons((prev) => [
        ...prev,
        { id: crypto.randomUUID(), ...form },
      ]);
    }

    setForm({
      code: "",
      type: "percent",
      value: 0,
      minValue: 0,
      expiresAt: "",
      active: true,
    });

    setOpen(false);
  }

  // ✏️ editar
  function handleEdit(c: Coupon) {
    setForm({
      code: c.code,
      type: c.type,
      value: c.value,
      minValue: c.minValue || 0,
      expiresAt: c.expiresAt,
      active: c.active,
    });

    setEditingId(c.id);
    setOpen(true);
  }

  // 🗑️ deletar
  function handleDelete(id: string) {
    setCoupons((prev) => prev.filter((c) => c.id !== id));
  }

  // ⏳ status
  function isExpired(date: string) {
    return new Date(date) < new Date();
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">
            Cupons & Promoções 🎟️
          </h1>

          <button
            onClick={() => setOpen(true)}
            className="bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            + Novo Cupom
          </button>
        </div>

        {/* SEARCH */}
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar cupom..."
          className="w-full p-3 border rounded-lg mb-4"
        />

        {/* LISTA */}
        <div className="grid gap-4">
          {filtered.map((c) => (
            <div
              key={c.id}
              className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
            >
              {/* info */}
              <div>
                <h2 className="text-lg font-bold">{c.code}</h2>

                <p className="text-sm text-gray-500">
                  {c.type === "percent"
                    ? `${c.value}% OFF`
                    : `R$ ${c.value.toFixed(2)} OFF`}
                  {c.minValue ? ` • mín R$ ${c.minValue}` : ""}
                </p>

                <p className="text-xs text-gray-400">
                  Expira: {c.expiresAt}
                </p>
              </div>

              {/* status */}
              <div className="flex items-center gap-3">
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    !c.active || isExpired(c.expiresAt)
                      ? "bg-red-100 text-red-600"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {!c.active || isExpired(c.expiresAt)
                    ? "Inativo"
                    : "Ativo"}
                </span>

                {/* ações */}
                <button
                  onClick={() => handleEdit(c)}
                  className="px-2 py-1 bg-blue-500 text-white rounded text-sm"
                >
                  Editar
                </button>

                <button
                  onClick={() => handleDelete(c.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded text-sm"
                >
                  Excluir
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {open && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-xl w-[400px]">

              <h2 className="text-xl font-bold mb-4">
                {editingId ? "Editar Cupom" : "Novo Cupom"}
              </h2>

              <div className="flex flex-col gap-3">

                <input
                  placeholder="Código (ex: NORDESTE10)"
                  className="border p-2 rounded"
                  value={form.code}
                  onChange={(e) =>
                    setForm({ ...form, code: e.target.value })
                  }
                />

                <select
                  className="border p-2 rounded"
                  value={form.type}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      type: e.target.value as "percent" | "fixed",
                    })
                  }
                >
                  <option value="percent">Percentual (%)</option>
                  <option value="fixed">Valor fixo (R$)</option>
                </select>

                <input
                  type="number"
                  placeholder="Valor"
                  className="border p-2 rounded"
                  value={form.value}
                  onChange={(e) =>
                    setForm({ ...form, value: Number(e.target.value) })
                  }
                />

                <input
                  type="number"
                  placeholder="Valor mínimo (opcional)"
                  className="border p-2 rounded"
                  value={form.minValue}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      minValue: Number(e.target.value),
                    })
                  }
                />

                <input
                  type="date"
                  className="border p-2 rounded"
                  value={form.expiresAt}
                  onChange={(e) =>
                    setForm({ ...form, expiresAt: e.target.value })
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
                    onClick={() => setOpen(false)}
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
          Sistema de cupons e promoções — Raízes do Nordeste 🌵
        </p>
      </div>
    </div>
  );
}