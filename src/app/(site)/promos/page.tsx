"use client"
import CouponCard from "@/components/promo/CouponCard";
import Hero from "@/components/promo/hero";
import PromotionBanner from "@/components/promo/PromotionBanner";

const coupons = [
  {
    title: "10% OFF",
    code: "RAIZES10",
    description: "Válido para compras acima de R$100.",
    color: "bg-orange-500",
    expires: "31/12/2026",
  },
  {
    title: "Frete Grátis",
    code: "FRETENORD",
    description: "Para todo o Paraná.",
    color: "bg-green-600",
    expires: "30/09/2026",
  },
  {
    title: "20% OFF",
    code: "NORDESTE20",
    description: "Produtos selecionados.",
    color: "bg-red-500",
    expires: "15/08/2026",
  },
];

export default function CouponsPage() {
  return (
    <div className="min-h-screen bg-orange-50">
      <Hero />

      <PromotionBanner />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-orange-700">
            Cupons Disponíveis
          </h2>
          <p className="text-gray-600 mt-3">
            Aproveite nossas ofertas especiais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coupons.map((coupon) => (
            <CouponCard key={coupon.code} {...coupon} />
          ))}
        </div>
      </section>


    </div>
  );
}