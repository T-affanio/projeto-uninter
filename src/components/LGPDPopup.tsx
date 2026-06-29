import { useEffect, useState } from "react";

export default function LGPDPopup() {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("lgpdAccepted");

    if (!accepted) {
      setOpen(true);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem("lgpdAccepted", "true");
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] max-w-md rounded-xl p-6 shadow-lg">
        
        <h2 className="text-xl font-bold mb-3">
          Privacidade e LGPD
        </h2>

        <p className="text-sm text-gray-600 mb-4">
          Utilizamos seus dados pessoais para processar pedidos, melhorar sua experiência
          e oferecer benefícios. Tudo conforme a Lei Geral de Proteção de Dados (LGPD).
        </p>

        <label className="flex items-center gap-2 text-sm mb-4">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          Concordo com o uso dos meus dados
        </label>

        <button
          onClick={handleAccept}
          disabled={!checked}
          className={`w-full py-2 rounded-lg text-white font-medium transition
            ${checked ? "bg-green-600 hover:bg-green-700" : "bg-gray-400 cursor-not-allowed"}
          `}
        >
          Continuar
        </button>
      </div>
    </div>
  );
}