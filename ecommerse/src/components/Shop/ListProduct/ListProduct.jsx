import ProductCard from "@components/Shop/ProductCard/ProductCard";

export default function ListProduct({ data = [], layout = "grid" }) {
  const gridClass =
    layout === "grid"
      ? "grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4"
      : "flex flex-col gap-4";

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className={gridClass}>
        {data.map((product) => (
          <ProductCard
            key={product._id}
            src={product.images?.[0]}
            preSrc={product.images?.[1] || product.images?.[0]}
            name={product.name}
            price={formatPrice(product.price)}
            layout={layout}
            size={product.size}
          />
        ))}
      </div>
    </div>
  );
}

function formatPrice(price) {
  if (!price) return "0₫";
  return `${price.toLocaleString("vi-VN")}₫`;
}
