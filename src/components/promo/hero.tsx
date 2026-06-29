export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-orange-600 via-red-500 to-yellow-500 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col items-center text-center">
        <span className="bg-white text-orange-700 px-4 py-1 rounded-full font-semibold mb-6">
          Promoções Exclusivas
        </span>

        <h1 className="text-5xl md:text-6xl font-extrabold">
          Economize nas suas compras
        </h1>

        <p className="mt-6 text-xl max-w-2xl opacity-90">
          Descubra cupons exclusivos para aproveitar os melhores sabores do
          Raízes do Nordeste.
        </p>

        <button className="mt-10 bg-white text-orange-700 font-bold px-8 py-4 rounded-xl hover:scale-105 transition">
          Ver Cupons
        </button>
      </div>
    </section>
  );
}