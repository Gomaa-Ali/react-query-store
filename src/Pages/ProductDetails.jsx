import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../api/products.api";
import { PropagateLoader } from "react-spinners";

export default function ProductDetails() {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
  });

  if (isLoading) {
    return (
     <div className="flex justify-center items-center h-[70vh]">
        <PropagateLoader color="black" />
      </div>
    );
  }

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-start gap-16 md:grid-cols-2">
         
          <div className="flex items-center justify-center rounded-2xl bg-gray-50 p-12">
            <img
              src={data.image}
              alt={data.title}
              className="h-95 w-full object-contain"
            />
          </div>

       
          <div className="flex flex-col">
           
            <h1 className="text-2xl font-semibold leading-snug text-gray-900">
              {data.title}
            </h1>

          
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-gray-600">
              {data.description}
            </p>

            <div className="mt-10">
              <span className="text-3xl font-semibold text-gray-900">
                {data.price}$ 
              </span>
            </div>

            <div className="mt-16">
              <button className="w-full rounded-full bg-black py-4 text-sm font-medium text-white transition hover:bg-gray-900">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
