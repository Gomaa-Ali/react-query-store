import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/products.api";
import ProductCard from "./ProductCard";
import { PropagateLoader } from "react-spinners";

export default function ProductList() {
  const {
    data,
    isLoading,
    isError,
   
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading)
    return  <div className="flex justify-center items-center h-[70vh]">
        <PropagateLoader color="black" />
      </div>;

  if (isError)
    return <p className="text-center text-red-500">Error</p>;

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 mt-12">
      <div className="flex justify-center mb-6">
        <h2 className="text-2xl font-bold">Products</h2>

      
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
