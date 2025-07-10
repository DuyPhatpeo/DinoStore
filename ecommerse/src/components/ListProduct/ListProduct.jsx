import ProductCard from "@components/ProductCard/ProductCard";

export default function ListProduct() {
  const products = [
    { name: "Túi xách tay", price: "350.000" },
    { name: "Giày sneaker", price: "790.000" },
    { name: "Áo thun unisex", price: "199.000" },
    { name: "Mũ lưỡi trai", price: "129.000" },
    { name: "Ba lô laptop", price: "499.000" },
    { name: "Kính mát thời trang", price: "250.000" },
    { name: "Áo khoác bomber", price: "690.000" },
    { name: "Đồng hồ đeo tay", price: "1.200.000" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
