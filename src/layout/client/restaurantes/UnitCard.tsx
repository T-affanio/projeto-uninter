import { MapPin, Phone, Bike, Star } from "lucide-react";

type Props = {
  unidade: any;
};

export default function UnitCard({ unidade }: Props) {
  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-[30px]
      bg-[#FFF8EE]
      shadow-2xl
      border border-[#E7D5B5]
      transition-all
      duration-500
      hover:-translate-y-4
      hover:shadow-[0_30px_60px_rgba(0,0,0,.25)]
      "
    >
      {/* IMAGEM */}
      <div className="relative h-72 overflow-hidden">

        <img
          src={
            unidade.imagem ||
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
          }
          alt={unidade.cidade || unidade.name}
          className="
            h-full
            w-full
            object-cover
            transition-all
            duration-700
            group-hover:scale-110
          "
        />

        {/* GRADIENTE */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A140B] via-transparent to-transparent" />

        {/* NOTA */}
        <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-[#F5B21B] px-4 py-2 font-bold text-[#4A2818]">
          <Star size={16} fill="currentColor" />
          {unidade.nota ?? "4.5"}
        </div>

        {/* BADGE */}
        <div className="absolute right-5 top-5 rounded-full bg-[#C93A14] px-4 py-2 text-xs font-bold uppercase text-white">
          Mais Procurada
        </div>

        {/* CIDADE */}
        <div className="absolute bottom-6 left-6">
          <h2 className="text-4xl font-black text-white">
            {unidade.cidade || unidade.city}
          </h2>

          <p className="text-lg text-[#F5B21B]">
            {unidade.bairro || ""}
          </p>
        </div>

      </div>

      {/* CONTEÚDO */}
      <div className="space-y-6 p-7">

        <p className="leading-7 text-[#5C4A3B]">
          {unidade.descricao || "Unidade da rede Raízes do Nordeste."}
        </p>

        <div className="space-y-4">

          <div className="flex items-center gap-3">
            <MapPin className="text-[#0D8B73]" />
            <span>{unidade.endereco || unidade.address}</span>
          </div>

          <div className="flex items-center gap-3">
            <Bike className="text-[#C93A14]" />
            <span>{unidade.entrega || "20-40 min"}</span>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="text-[#F5B21B]" />
            <span>{unidade.telefone || unidade.phone}</span>
          </div>

        </div>

        <button
          className="
          w-full
          rounded-2xl
          bg-gradient-to-r
          from-[#C93A14]
          to-[#E85A2A]
          py-4
          text-lg
          font-black
          tracking-wide
          text-white
          transition-all
          duration-300
          hover:scale-[1.03]
          hover:shadow-xl
          "
        >
          ESCOLHER ESTA UNIDADE
        </button>

      </div>
    </div>
  );
}