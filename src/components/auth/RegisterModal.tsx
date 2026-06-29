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
  onLogin: () => void;
}

export default function RegisterModal({
  open,
  onOpenChange,
  onLogin,
}: Props) {
  const { register } = useAuth();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [error, setError] = useState("");

  function handleRegister() {
    setError("");

    if (
      !name ||
      !phone ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      setError("Preencha todos os campos.");
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    const success = register({
      name,
      phone,
      email,
      password,
    });

    if (!success) {
      setError("Já existe uma conta com esse email.");
      return;
    }

    alert("Conta criada com sucesso!");

    setName("");
    setPhone("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    onOpenChange(false);

    onLogin();
  }

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-md">

        <DialogHeader>

          <DialogTitle className="text-2xl">
            Criar Conta
          </DialogTitle>

        </DialogHeader>

        <div className="space-y-4 mt-4">

          <input
            placeholder="Nome"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full border rounded-xl p-3"
          />

          <input
            placeholder="Telefone"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
            className="w-full border rounded-xl p-3"
          />

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

          <input
            type="password"
            placeholder="Confirmar senha"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
            className="w-full border rounded-xl p-3"
          />

          {error && (
            <p className="text-red-600 text-sm">
              {error}
            </p>
          )}

          <button
            onClick={handleRegister}
            className="
              w-full
              bg-green-700
              hover:bg-green-800
              text-white
              rounded-xl
              py-3
            "
          >
            Criar Conta
          </button>

          <button
            onClick={() => {
              onOpenChange(false);
              onLogin();
            }}
            className="w-full text-red-700 font-semibold"
          >
            Já tenho uma conta
          </button>

        </div>

      </DialogContent>
    </Dialog>
  );
}