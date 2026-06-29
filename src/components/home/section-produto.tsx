import { Produto } from "@/types/produtos";
import CardProduto from "./card-produto";

type ProductSectionProps = {
  title: string;
  subtitle: string;
  products: Produto[];
};

export default function ProductSection({
  title,
  subtitle,
  products,
}: ProductSectionProps) {
  return (
    <section className="max-w-7xl mx-auto mt-14 px-4">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2
            className="text-4xl text-red-700"
            style={{ fontFamily: "var(--font-lemonada)" }}
          >
            {title}
          </h2>

          <p className="text-gray-500 mt-2">
            {subtitle}
          </p>
        </div>

        <span className="text-sm text-gray-400">
          {products.length} itens
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((produto) => (
          <CardProduto
            key={produto.id}
            produto={produto}
          />
        ))}
      </div>
    </section>
  );
}