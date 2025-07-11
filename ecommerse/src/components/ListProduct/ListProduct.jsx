import ProductCard from "@components/ProductCard/ProductCard";

export default function ListProduct({ data = [] }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {data.map((product) => (
          <ProductCard
            key={product._id}
            src={product.images?.[0]}
            preSrc={product.images?.[1] || product.images?.[0]}
            name={product.name}
            price={formatPrice(product.price)}
          />
        ))}
      </div>
    </div>
  );
}

// Hàm format giá theo định dạng VNĐ
function formatPrice(price) {
  if (!price) return "0₫";
  return `${price.toLocaleString("vi-VN")}₫`;
}
