import { Copy } from "lucide-react";

interface Props {
  title: string;
  code: string;
  description: string;
  expires: string;
  color: string;
}

export default function CouponCard({
  title,
  code,
  description,
  expires,
  color,
}: Props) {
  const copyCode = () => {
    navigator.clipboard.writeText(code);
    alert("Cupom copiado!");
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition">
      <div className={`${color} text-white p-8`}>
        <h2 className="text-4xl font-bold">{title}</h2>
      </div>

      <div className="p-6">
        <p className="text-gray-600">{description}</p>

        <div className="mt-6 border-2 border-dashed border-orange-300 rounded-xl p-4 flex justify-between items-center">
          <span className="font-bold text-lg">{code}</span>

          <button
            onClick={copyCode}
            className="bg-orange-600 p-2 rounded-lg text-white hover:bg-orange-700"
          >
            <Copy size={18} />
          </button>
        </div>

        <p className="text-sm text-gray-400 mt-4">
          Expira em {expires}
        </p>

        <button className="w-full mt-6 bg-orange-600 text-white py-3 rounded-xl hover:bg-orange-700 transition">
          Utilizar Cupom
        </button>
      </div>
    </div>
  );
}