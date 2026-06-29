export default function PromotionBanner() {
  return (
    <section className="max-w-7xl mx-auto px-6 -mt-10">
      <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold text-orange-700">
            🎉 Promoção da Semana
          </h3>

          <p className="text-gray-600 mt-2">
            Compre 3 produtos e ganhe 15% de desconto automaticamente.
          </p>
        </div>

        <button className="mt-6 md:mt-0 bg-orange-600 text-white px-8 py-3 rounded-xl hover:bg-orange-700 transition">
          Aproveitar Oferta
        </button>
      </div>
    </section>
  );
}