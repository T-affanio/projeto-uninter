"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  LayoutDashboard,
  Package,
  Tags,
  ShoppingBag,
  Users,
  Store,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <>
      {/* Header Mobile */}
      <header className="flex h-16 items-center justify-between border-b bg-white px-4 lg:hidden">
        <button onClick={() => setOpen(true)}>
          <Menu size={28} />
        </button>

        <h1 className="font-bold text-red-600 font-island">RaizesDoNordeste</h1>
      </header>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-50
          h-screen w-72
          bg-zinc-950 text-white
          transition-transform duration-300
          lg:translate-x-0
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-between border-b border-zinc-800 px-6">
          <div>
            <p className="font-island">RaizesDoNordeste</p>

            <p className="text-xs text-zinc-400">Painel Administrativo</p>
          </div>

          <button className="lg:hidden" onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        {/* Menu */}
        <nav className="space-y-2 p-4">
          <Link
            href="/admin"
            className="flex items-center gap-3 rounded-lg px-3 py-3 transition hover:bg-zinc-800"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          {/* Dropdown */}
          <button
            onClick={() => setProductsOpen(!productsOpen)}
            className="flex w-full items-center justify-between rounded-lg px-3 py-3 transition hover:bg-zinc-800"
          >
            <span className="flex items-center gap-3">
              <Package size={20} />
              Catálogo
            </span>

            {productsOpen ? (
              <ChevronDown size={18} />
            ) : (
              <ChevronRight size={18} />
            )}
          </button>

          {productsOpen && (
            <div className="ml-5 border-l border-zinc-700 pl-4">
              <Link
                href="/admin/produtos"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-800"
              >
                <Package size={18} />
                Produtos
              </Link>

              <Link
                href="/admin/promos"
                className="mt-1 flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-800"
              >
                <Tags size={18} />
                Cuppons
              </Link>
            </div>
          )}

          <Link
            href="/admin/pedidos"
            className="flex items-center gap-3 rounded-lg px-3 py-3 transition hover:bg-zinc-800"
          >
            <ShoppingBag size={20} />
            Pedidos
          </Link>

       

          <Link
            href="/admin/unidades"
            className="flex items-center gap-3 rounded-lg px-3 py-3 transition hover:bg-zinc-800"
          >
            <Store size={20} />
            Unidades
          </Link>

        </nav>
      </aside>

    
    </>
  );
}
