import {
  MdShoppingBag,
  MdFavoriteBorder,
  MdAutorenew,
  MdVisibility,
} from "react-icons/md";
import { useState } from "react";

export default function ProductCard({ src, preSrc, name, price, size = [] }) {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Vui lòng chọn size trước khi thêm vào giỏ hàng");
      return;
    }

    console.log("Add to cart:", { name, price, selectedSize });
  };

  // Chuẩn hóa size
  const normalizedSizes = Array.isArray(size)
    ? size.map((s) => (typeof s === "string" ? s : s?.name)).filter(Boolean)
    : [];

  return (
    <div className="overflow-hidden bg-white rounded group transition">
      {/* Hình ảnh */}
      <div className="relative w-full aspect-[4/5] bg-gray-100 overflow-hidden cursor-pointer">
        <img
          src={src}
          alt={name || "Product Image"}
          className="object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-0"
        />
        <img
          src={preSrc}
          alt={name || "Product Hover Image"}
          className="absolute inset-0 object-cover w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        />

        {/* Icon hover bên phải */}
        <div className="absolute z-10 flex flex-col p-1 transition-all duration-300 translate-x-4 bg-white rounded-md shadow opacity-0 cursor-pointer top-2 right-2 group-hover:opacity-100 group-hover:translate-x-0">
          {[MdShoppingBag, MdFavoriteBorder, MdAutorenew, MdVisibility].map(
            (Icon, index) => (
              <button
                key={index}
                className="p-2 transition rounded hover:bg-gray-100"
              >
                <Icon className="w-4 h-4 text-gray-700" />
              </button>
            )
          )}
        </div>
      </div>

      {/* Thông tin */}
      <div className="p-3 text-center space-y-2">
        {/* Chọn size */}
        {normalizedSizes.length > 0 && (
          <div className="flex justify-center flex-wrap gap-2 mb-1">
            {normalizedSizes.map((sizeName, idx) => (
              <button
                key={idx}
                onClick={() =>
                  setSelectedSize((prev) =>
                    prev === sizeName ? null : sizeName
                  )
                }
                className={`w-7 h-7 text-[11px] border rounded transition duration-200 flex items-center justify-center
          ${
            selectedSize === sizeName
              ? "bg-gray-200 text-black border-black"
              : "text-gray-600 border-gray-300 hover:text-black hover:border-black"
          }`}
              >
                {sizeName}
              </button>
            ))}
          </div>
        )}

        <h3 className="text-sm font-medium text-gray-900 truncate">
          {name || "Tên sản phẩm"}
        </h3>
        <p className="text-sm text-gray-700">
          {price ? `${price.toLocaleString("vi-VN")}₫` : "99.000₫"}
        </p>

        {/* Nút Select Size hoặc Add to Cart */}
        {selectedSize ? (
          <button
            onClick={handleAddToCart}
            className="mt-1 text-[13px] font-medium bg-black text-white border border-black px-3 py-1 rounded transition 
      hover:bg-white hover:text-black hover:border-black"
          >
            ADD TO CART
          </button>
        ) : (
          <button
            className="mt-1 text-[13px] font-medium bg-white text-black border border-gray-400 px-3 py-1 rounded cursor-not-allowed"
            disabled
          >
            SELECT OPTIONS
          </button>
        )}
      </div>
    </div>
  );
}
