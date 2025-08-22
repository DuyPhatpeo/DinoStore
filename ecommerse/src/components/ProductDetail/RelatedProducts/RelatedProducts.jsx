import { useEffect, useState } from "react";
import { getRelatedProducts } from "@apis/productService";
import ProductCard from "@components/Home/ProductCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function RelatedProducts({ productId }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!productId) return;
    setLoading(true);
    getRelatedProducts(productId)
      .then((res) => setProducts(res))
      .catch((err) => {
        console.error("Failed to fetch related products:", err);
        setProducts([]);
      })
      .finally(() => setLoading(false));
  }, [productId]);

  if (loading) return <div className="text-center py-6">Đang tải...</div>;

  if (!products.length) {
    return (
      <div className="text-center py-6 text-gray-500">
        Không có sản phẩm liên quan
      </div>
    );
  }

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Related Products
      </h2>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={4} // hiện 4 sản phẩm 1 hàng
        loop={true}
        className="px-6 text-black"
      >
        {products.map((product) => (
          <SwiperSlide key={product._id}>
            <ProductCard
              id={product._id}
              name={product.name}
              price={product.price}
              src={
                Array.isArray(product.images)
                  ? product.images[0]
                  : product.images
              }
              preSrc={
                Array.isArray(product.images)
                  ? product.images[1] || product.images[0]
                  : product.images
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
