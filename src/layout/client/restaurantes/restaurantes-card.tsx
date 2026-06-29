type Props = {
  restaurante: any;
};

export default function RestaurantCard({ restaurante }: Props) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-md">

      <img
        src={restaurante.banner}
        className="h-52 w-full object-cover"
        alt={restaurante.nome}
      />

      <div className="p-5">

        <div className="flex items-center gap-3">

          <img
            src={restaurante.logo}
            className="h-14 w-14 rounded-full border p-1"
            alt={restaurante.nome}
          />

          <div>
            <h2 className="text-xl font-bold">
              {restaurante.nome}
            </h2>

            <p className="text-sm text-gray-500">
              {restaurante.slogan}
            </p>
          </div>

        </div>

        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <span>⭐ {restaurante.nota}</span>
          <span>{restaurante.categoria}</span>
          <span>{restaurante.tempoEntrega}</span>
        </div>

        <p className="mt-2 font-semibold text-green-600">
          Entrega {restaurante.taxaEntrega}
        </p>

      </div>
    </div>
  );
}