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
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
