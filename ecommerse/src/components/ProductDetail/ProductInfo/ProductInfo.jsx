import { useState } from "react";

export default function ProductInfo({ product }) {
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div className="space-y-3">
      <h1 className="text-xl font-semibold">{product.name}</h1>
      <p className="text-gray-600">{product.description}</p>

      {/* Size chọn */}
      <div className="flex gap-2 mt-2">
        {product.size.map((s, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedSize(s)}
            className={`px-3 py-1 border rounded ${
              selectedSize === s
                ? "bg-black text-white"
                : "text-gray-700 border-gray-300"
            }`}
          >
            {s}
          </button>
        ))}
        <button
          onClick={() => setSelectedSize(null)}
          className="text-sm underline text-gray-500"
        >
          Clear
        </button>
      </div>

      <div className="text-lg font-medium">
        {product.price.toLocaleString("vi-VN")}₫
      </div>

      <div className="flex gap-3 mt-3">
        <button className="px-4 py-2 bg-black text-white rounded hover:bg-white hover:text-black border">
          ADD TO CART
        </button>
        <button className="px-4 py-2 border border-gray-700 rounded hover:bg-black hover:text-white">
          BUY NOW
        </button>
      </div>

      {/* Thông tin thêm */}
      <div className="mt-4 text-sm space-y-1 text-gray-600">
        <p>SKU: {product.sku || "5675"}</p>
        <p>Category: {product.type}</p>
        <p>Size: {product.size.join(", ")}</p>
        <p>Color: {product.color?.join(", ")}</p>
        <p>Material: {product.material?.join(", ")}</p>
      </div>
    </div>
  );
}
