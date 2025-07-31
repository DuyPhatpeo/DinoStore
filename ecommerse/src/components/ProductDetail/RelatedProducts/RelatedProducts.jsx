import { getRelatedProducts } from "@apis/productService";
import ProductCard from "@components/Home/ProductCard/ProductCard";
import { useEffect, useState } from "react";

export default function RelatedProducts({ productId }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Thêm loading

  useEffect(() => {
    if (!productId) return;
    setLoading(true); // Khi thay đổi productId thì loading lại
    getRelatedProducts(productId)
      .then((res) => setProducts(res))
      .catch((err) => {
        console.error("Failed to fetch related products:", err);
        setProducts([]); // fallback nếu lỗi
      })
      .finally(() => setLoading(false));
  }, [productId]);

  if (loading) return <div className="text-center py-6">Đang tải...</div>;

  if (!products.length)
    return (
      <div className="text-center py-6 text-gray-500">
        Không có sản phẩm liên quan
      </div>
    );

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Related Products
      </h2>

      {/* Danh sách nằm ngang, có trượt */}
      <div className="overflow-x-auto">
        <div className="flex gap-4 w-max px-2 pb-2 scroll-smooth">
          {products.map((product) => (
            <div key={product._id} className="w-[180px] shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
