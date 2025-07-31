import ProductCard from "@components/Home/ProductCard/ProductCard";

export default function ListProduct({ data = [] }) {
  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
        {data.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
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
