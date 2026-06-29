"use client";

import Link from "next/link";
import { User, LogOut, ClipboardList } from "lucide-react";

import { useAuth } from "@/context/AuthContext";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function AccountMenu() {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 text-[#C6290A]">
          <User />

          <span className="font-semibold">
            {user.name}
          </span>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-64"
      >
        <div className="px-3 py-2">
          <p className="font-bold">
            {user.name}
          </p>

          <p className="text-sm text-gray-500">
            {user.email}
          </p>
        </div>

        <DropdownMenuItem asChild>
          <Link
            href="/pedidos"
            className="cursor-pointer"
          >
            <ClipboardList className="mr-2 h-4 w-4" />
            Meus Pedidos
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={logout}
          className="cursor-pointer text-red-600"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}