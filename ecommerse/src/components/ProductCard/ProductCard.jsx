import {
  MdShoppingBag,
  MdFavoriteBorder,
  MdAutorenew,
  MdVisibility,
} from "react-icons/md";
import Anh from "@images/pro-1.jpg";
import AnhHover from "@images/pro-2.webp";

export default function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded overflow-hidden">
      {/* Hình ảnh sản phẩm */}
      <div className="relative w-full aspect-[4/5] bg-gray-100 overflow-hidden">
        <img
          src={Anh}
          alt={product?.name}
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
        />
        <img
          src={AnhHover}
          alt={product?.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        />

        {/* Thanh icon bên phải, trượt ra khi hover */}
        <div className="absolute top-2 right-2 flex flex-col bg-white rounded-md shadow p-1 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-10">
          {[MdShoppingBag, MdFavoriteBorder, MdAutorenew, MdVisibility].map(
            (Icon, index) => (
              <button
                key={index}
                className="p-2 hover:bg-gray-100 rounded transition"
              >
                <Icon className="w-4 h-4 text-gray-700" />
              </button>
            )
          )}
        </div>
      </div>

      {/* Tên và giá sản phẩm */}
      <div className="p-2 text-left">
        <h3 className="text-[13px] font-normal text-gray-800 truncate">
          {product?.name || "10K Yellow Gold"}
        </h3>
        <p className="text-[13px] text-gray-800 mt-1">
          {product?.price ? `${product.price}₫` : "$99.99"}
        </p>
      </div>
    </div>
  );
}
