import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { getRelatedProducts } from "@apis/productService";
import ProductCard from "@components/Home/ProductCard/ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function RelatedProducts({ productId }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 4,
      spacing: 20,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 3, spacing: 16 },
      },
      "(max-width: 768px)": {
        slides: { perView: 2, spacing: 12 },
      },
      "(max-width: 480px)": {
        slides: { perView: 1, spacing: 8 },
      },
    },
    created() {
      setLoaded(true);
    },
  });

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
    <div className="mt-10 relative max-w-7xl mx-auto px-8">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Related Products
      </h2>

      {/* Vùng chứa slider + nút */}
      <div className="relative">
        {/* Slider */}
        <div ref={sliderRef} className="keen-slider">
          {products.map((product) => (
            <div key={product._id} className="keen-slider__slide">
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
            </div>
          ))}
        </div>

        {/* Nút điều hướng nằm ngoài, không đè list */}
        {loaded && instanceRef.current && (
          <>
            <button
              onClick={() => instanceRef.current?.prev()}
              className="absolute top-1/2 -left-15 z-10 bg-white shadow-md rounded-full p-3 hover:bg-gray-100 transform -translate-y-1/2 transition"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            <button
              onClick={() => instanceRef.current?.next()}
              className="absolute top-1/2 -right-15 z-10 bg-white shadow-md rounded-full p-3 hover:bg-gray-100 transform -translate-y-1/2 transition"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
