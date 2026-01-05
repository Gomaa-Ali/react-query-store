import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group block rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative flex h-56 items-center justify-center overflow-hidden rounded-t-2xl bg-gray-50">
        <img
          src={product.image}
          alt={product.title}
          className="h-40 w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

   
      <div className="p-6">
        <h3 className="mb-3 text-lg font-medium text-gray-900">
          {product.title.split(" ").slice(0, 2).join(" ")}
        </h3>

        <span className="block mb-5 text-xl font-semibold text-black">
          ${product.price}
        </span>

        <button className="w-full rounded-lg bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-900">
          Add to cart
        </button>
      </div>
    </Link>
  );
}
