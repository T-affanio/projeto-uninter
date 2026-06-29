"use client";

import { useMemo, useState } from "react";

type Unidade = {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  openHour: string;
  closeHour: string;
  active: boolean;
};

export default function UnidadesPage() {
  const [unidades, setUnidades] = useState<Unidade[]>([
    {
      id: "1",
      name: "Raízes do Nordeste - Matriz Centro",
      city: "Recife - PE",
      address: "Av. Guararapes, 1200 - Centro",
      phone: "(81) 99123-4567",
      openHour: "10:00",
      closeHour: "22:30",
      active: true,
    },
    {
      id: "2",
      name: "Raízes do Nordeste - Boa Viagem",
      city: "Recife - PE",
      address: "Av. Boa Viagem, 3450 - Beira Mar",
      phone: "(81) 99876-1122",
      openHour: "11:00",
      closeHour: "23:30",
      active: true,
    },
    {
      id: "3",
      name: "Raízes do Nordeste - Olinda Histórico",
      city: "Olinda - PE",
      address: "Largo do Mosteiro, 88 - Sítio Histórico",
      phone: "(81) 98765-4455",
      openHour: "10:30",
      closeHour: "22:00",
      active: true,
    },
    {
      id: "4",
      name: "Raízes do Nordeste - Paulista",
      city: "Paulista - PE",
      address: "Av. Marechal Floriano, 2100",
      phone: "(81) 99654-7788",
      openHour: "11:00",
      closeHour: "22:00",
      active: false,
    },
    {
      id: "5",
      name: "Raízes do Nordeste - Zona Sul Express",
      city: "Jaboatão dos Guararapes - PE",
      address: "Shopping Guararapes - Loja 42",
      phone: "(81) 99333-2211",
      openHour: "09:00",
      closeHour: "21:00",
      active: true,
    },
  ]);

  const [search, setSearch] = useState("");

  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);

  const [form, setForm] = useState<Omit<Unidade, "id">>({
    name: "",
    city: "",
    address: "",
    phone: "",
    openHour: "",
    closeHour: "",
    active: true,
  });

  // 🔎 filtro
  const filtered = useMemo(() => {
    return unidades.filter((u) =>
      u.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, unidades]);

  // 💾 salvar
  function handleSave() {
    if (!form.name || !form.city) return;

    if (editId) {
      setUnidades((prev) =>
        prev.map((u) =>
          u.id === editId ? { ...u, ...form } : u
        )
      );
      setEditId(null);
    } else {
      setUnidades((prev) => [
        ...prev,
        { id: crypto.randomUUID(), ...form },
      ]);
    }

    setForm({
      name: "",
      city: "",
      address: "",
      phone: "",
      openHour: "",
      closeHour: "",
      active: true,
    });

    setOpen(false);
  }

  // ✏️ editar
  function handleEdit(u: Unidade) {
    setForm({
      name: u.name,
      city: u.city,
      address: u.address,
      phone: u.phone,
      openHour: u.openHour,
      closeHour: u.closeHour,
      active: u.active,
    });

    setEditId(u.id);
    setOpen(true);
  }

  // 🗑️ deletar
  function handleDelete(id: string) {
    setUnidades((prev) => prev.filter((u) => u.id !== id));
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Unidades 🌵</h1>
            <p className="text-gray-500">
              Gestão das filiais Raízes do Nordeste
            </p>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            + Nova Unidade
          </button>
        </div>

        {/* SEARCH */}
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar unidade..."
          className="w-full p-3 border rounded-lg mb-4"
        />

        {/* LISTA */}
        <div className="grid md:grid-cols-2 gap-4">
          {filtered.map((u) => (
            <div key={u.id} className="bg-white p-5 rounded-xl shadow">

              {/* topo */}
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-bold">{u.name}</h2>
                  <p className="text-gray-500 text-sm">{u.city}</p>
                </div>

                <span
                  className={`text-xs px-2 py-1 rounded ${
                    u.active
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {u.active ? "Aberta" : "Fechada"}
                </span>
              </div>

              {/* infos */}
              <div className="mt-3 text-sm text-gray-600 space-y-1">
                <p>📍 {u.address}</p>
                <p>📞 {u.phone}</p>
                <p>
                  ⏰ {u.openHour} - {u.closeHour}
                </p>
              </div>

              {/* ações */}
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => handleEdit(u)}
                  className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
                >
                  Editar
                </button>

                <button
                  onClick={() => handleDelete(u.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded text-sm"
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
            <div className="bg-white p-6 rounded-xl w-105">

              <h2 className="text-xl font-bold mb-4">
                {editId ? "Editar Unidade" : "Nova Unidade"}
              </h2>

              <div className="flex flex-col gap-3">

                <input
                  placeholder="Nome da unidade"
                  className="border p-2 rounded"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                />

                <input
                  placeholder="Cidade"
                  className="border p-2 rounded"
                  value={form.city}
                  onChange={(e) =>
                    setForm({ ...form, city: e.target.value })
                  }
                />

                <input
                  placeholder="Endereço"
                  className="border p-2 rounded"
                  value={form.address}
                  onChange={(e) =>
                    setForm({ ...form, address: e.target.value })
                  }
                />

                <input
                  placeholder="Telefone"
                  className="border p-2 rounded"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                />

                <div className="flex gap-2">
                  <input
                    type="time"
                    className="border p-2 rounded w-full"
                    value={form.openHour}
                    onChange={(e) =>
                      setForm({ ...form, openHour: e.target.value })
                    }
                  />

                  <input
                    type="time"
                    className="border p-2 rounded w-full"
                    value={form.closeHour}
                    onChange={(e) =>
                      setForm({ ...form, closeHour: e.target.value })
                    }
                  />
                </div>

                <select
                  className="border p-2 rounded"
                  value={form.active ? "true" : "false"}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      active: e.target.value === "true",
                    })
                  }
                >
                  <option value="true">Aberta</option>
                  <option value="false">Fechada</option>
                </select>

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
          Gestão de unidades — Raízes do Nordeste 🌵
        </p>

      </div>
    </div>
  );
}