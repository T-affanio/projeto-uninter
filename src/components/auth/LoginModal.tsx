"use client";

import { useState } from "react";

import { useAuth } from "@/context/AuthContext";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onRegister: () => void;
}

export default function LoginModal({
  open,
  onOpenChange,
  onRegister,
}: Props) {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  function handleLogin() {
    setError("");

    if (!email || !password) {
      setError("Preencha todos os campos.");
      return;
    }

    const success = login(email, password);

    if (!success) {
      setError("Email ou senha inválidos.");
      return;
    }

    setEmail("");
    setPassword("");
    onOpenChange(false);
  }

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-md">

        <DialogHeader>

          <DialogTitle className="text-2xl">
            Entrar
          </DialogTitle>

        </DialogHeader>

        <div className="space-y-4 mt-4">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full border rounded-xl p-3"
          />

          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full border rounded-xl p-3"
          />

          {error && (
            <p className="text-red-600 text-sm">
              {error}
            </p>
          )}

          <button
            onClick={handleLogin}
            className="
              w-full
              bg-red-700
              hover:bg-red-800
              text-white
              rounded-xl
              py-3
              transition
            "
          >
            Entrar
          </button>

          <button
            onClick={() => {
              onOpenChange(false);
              onRegister();
            }}
            className="
              w-full
              text-red-700
              font-semibold
            "
          >
            Criar uma conta
          </button>

        </div>

      </DialogContent>
    </Dialog>
  );
}