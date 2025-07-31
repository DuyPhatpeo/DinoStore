import { useState } from "react";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { MdAutorenew } from "react-icons/md";

export default function ProductInfo({ product }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const sizeList = product.size.map((s) =>
    typeof s === "string" ? s : s.name
  );

  return (
    <div className="space-y-6 px-4 sm:px-0">
      {/* Tên sản phẩm */}
      <h1 className="text-3xl sm:text-4xl font-bold">{product.name}</h1>

      {/* Giá */}
      <div className="text-xl font-semibold text-gray-800">
        {"$" + product.price.toLocaleString("vi-VN")}
      </div>

      {/* Mô tả */}
      <p className="text-gray-600 text-base">{product.description}</p>

      {/* Size */}
      <div>
        <p className="font-medium mb-1">
          Size {selectedSize && `(${selectedSize})`}
        </p>
        <div className="flex flex-wrap gap-2">
          {sizeList.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedSize(s)}
              className={`px-3 py-1 border rounded text-sm ${
                selectedSize === s
                  ? "bg-black text-white"
                  : "text-gray-700 border-gray-300"
              }`}
            >
              {s}
            </button>
          ))}
          {sizeList.length > 0 && (
            <button
              onClick={() => setSelectedSize(null)}
              className="text-sm underline text-gray-500"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Số lượng + nút add to cart */}
      <div className="flex flex-wrap gap-3 items-center">
        {/* Quantity box */}
        <div className="flex border border-gray-300 rounded overflow-hidden h-10">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="w-8 border-r text-gray-700 hover:bg-gray-100"
          >
            -
          </button>
          <div className="w-10 flex items-center justify-center">
            {quantity}
          </div>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="w-8 border-l text-gray-700 hover:bg-gray-100"
          >
            +
          </button>
        </div>

        <button
          className="flex-1 min-w-[150px] px-4 py-2 bg-black text-white rounded transition flex items-center justify-center gap-2 border border-transparent 
          hover:bg-white hover:text-black hover:border-black"
        >
          <FiShoppingCart size={18} />
          ADD TO CART
        </button>
      </div>

      {/* OR separator */}
      <div className="flex items-center gap-2 text-gray-400 text-sm">
        <hr className="flex-grow border-gray-300" />
        OR
        <hr className="flex-grow border-gray-300" />
      </div>

      {/* Buy now */}
      <button
        className="w-full px-4 py-2 bg-black text-white rounded transition-all duration-200 
        flex items-center justify-center gap-2 hover:bg-[#333] hover:brightness-110"
      >
        <FiShoppingCart size={18} />
        BUY NOW
      </button>

      {/* Like và So sánh */}
      <div className="flex items-center gap-3 mt-1">
        <button className="p-2 rounded-full border hover:bg-gray-100">
          <FiHeart size={20} />
        </button>
        <button className="p-2 rounded-full border hover:bg-gray-100">
          <MdAutorenew size={20} />
        </button>
      </div>

      {/* Info thêm */}
      <div className="text-base space-y-1 text-gray-600">
        <p>
          <strong>SKU:</strong> {product.sku || "5675"}
        </p>
        <p>
          <strong>Category:</strong> {product.type || "Uncategorized"}
        </p>
        <p>
          <strong>Size:</strong> {sizeList.join(", ")}
        </p>
        <p>
          <strong>Material:</strong>{" "}
          {Array.isArray(product.material)
            ? product.material.join(", ")
            : product.material || "N/A"}
        </p>
      </div>
    </div>
  );
}
