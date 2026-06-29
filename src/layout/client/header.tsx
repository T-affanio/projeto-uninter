"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingBag, User, Menu, X } from "lucide-react";

import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

import CartSheet from "@/components/cart/CartSheet";
import LoginModal from "@/components/auth/LoginModal";
import RegisterModal from "@/components/auth/RegisterModal";
import AccountMenu from "@/components/auth/AccountMenu";

export const Header = () => {
  const { totalItems } = useCart();
  const { user } = useAuth();

  const [openCart, setOpenCart] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-[#FEC200]/95 backdrop-blur-md border-b border-yellow-300/40 shadow-md">
        
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 h-16 sm:h-18 lg:h-20">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 min-w-fit">
            <img
              src="/image/logo-1.png"
              alt="Logo Raízes do Nordeste"
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
            />

            <h1 className="text-[#057A68] font-island text-base sm:text-xl lg:text-2xl xl:text-3xl whitespace-nowrap">
              Raízes do Nordeste
            </h1>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-10 text-[#C6290A] font-medium text-sm lg:text-base xl:text-lg">
            <Link className="hover:opacity-70 transition" href="/cardapio">PRODUTOS</Link>
            <Link className="hover:opacity-70 transition" href="/restaurantes">RESTAURANTES</Link>
            <Link className="hover:opacity-70 transition" href="/promos">PROMOÇÕES</Link>
            <Link className="hover:opacity-70 transition" href="/promos">CUPONS</Link>
          </nav>

          {/* AÇÕES */}
          <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">

            {/* CONTA */}
            {user ? (
              <AccountMenu />
            ) : (
              <button
                onClick={() => setLoginOpen(true)}
                className="hidden sm:flex items-center gap-2 text-[#C6290A] min-h-11 px-2"
              >
                <User size={20} />
                <span className="text-sm lg:text-base">CONTA</span>
              </button>
            )}

            {/* CARRINHO */}
            <button
              onClick={() => setOpenCart(true)}
              className="relative flex items-center gap-2 text-[#C6290A] min-h-11 px-2"
            >
              <ShoppingBag size={20} />

              {totalItems > 0 && (
                <span className="absolute -top-2 left-3 flex items-center justify-center w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-bold">
                  {totalItems}
                </span>
              )}

              <span className="hidden sm:inline text-sm lg:text-base">
                SACOLA
              </span>
            </button>

            {/* MENU MOBILE */}
            <button
              className="md:hidden min-h-11 min-w-11 flex items-center justify-center"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* OVERLAY MOBILE */}
        {mobileMenu && (
          <>
            <div
              className="fixed inset-0 bg-black/40 md:hidden"
              onClick={() => setMobileMenu(false)}
            />

            <div className="absolute top-16 left-0 w-full bg-[#FEC200] md:hidden shadow-lg px-4 py-4 flex flex-col gap-4 text-[#C6290A] font-medium">
              <Link onClick={() => setMobileMenu(false)} href="/cardapio">
                PRODUTOS
              </Link>
              <Link onClick={() => setMobileMenu(false)} href="/restaurantes">
                RESTAURANTES
              </Link>
              <Link onClick={() => setMobileMenu(false)} href="/promos">
                PROMOÇÕES
              </Link>
              <Link onClick={() => setMobileMenu(false)} href="/promos">
                CUPONS
              </Link>

              {!user && (
                <button
                  onClick={() => {
                    setLoginOpen(true);
                    setMobileMenu(false);
                  }}
                  className="flex items-center gap-2 pt-2"
                >
                  <User size={18} />
                  MINHA CONTA
                </button>
              )}
            </div>
          </>
        )}
      </header>

      <CartSheet open={openCart} onOpenChange={setOpenCart} />

      <LoginModal
        open={loginOpen}
        onOpenChange={setLoginOpen}
        onRegister={() => setRegisterOpen(true)}
      />

      <RegisterModal
        open={registerOpen}
        onOpenChange={setRegisterOpen}
        onLogin={() => setLoginOpen(true)}
      />
    </>
  );
};