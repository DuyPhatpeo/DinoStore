import { getRelatedProducts } from "@apis/productService";
import { useEffect, useState } from "react";

export default function RelatedProducts({ productId }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!productId) return;
    getRelatedProducts(productId)
      .then((res) => setProducts(res))
      .catch((err) => console.error("Failed to fetch related products:", err));
  }, [productId]);

  if (!products.length) return null;

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Related Products
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="group">
            <div className="relative overflow-hidden aspect-[4/5] bg-gray-100 rounded">
              <img
                src={product.images?.[0]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>
            </div>

            {/* Sizes */}
            {Array.isArray(product.size) && (
              <div className="flex gap-2 justify-center mt-2">
                {product.size.map((s, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 border text-sm uppercase"
                  >
                    {typeof s === "string" ? s : s.label || ""}
                  </span>
                ))}
              </div>
            )}

            {/* Name + price */}
            <h3 className="text-sm text-center mt-2">{product.name}</h3>
            <p className="text-center text-gray-600">${product.price}</p>

            {/* Add to Cart */}
            <div className="flex justify-center mt-2">
              <button className="border px-4 py-1 text-sm hover:bg-black hover:text-white transition">
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
