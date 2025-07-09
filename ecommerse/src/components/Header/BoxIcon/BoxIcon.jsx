import { ACTION_LINKS } from "../contants";
import { FiHeart, FiShoppingCart, FiSearch } from "react-icons/fi";

export default function BoxIcon() {
  return (
    <div className="flex items-center space-x-4">
      {ACTION_LINKS.map((link, idx) => (
        <a
          key={idx}
          href={link.href}
          className="text-gray-700 hover:text-black"
        >
          {link.label}
        </a>
      ))}
      <FiSearch
        className="text-gray-700 cursor-pointer hover:text-black"
        size={20}
      />
      <FiHeart
        className="text-gray-700 cursor-pointer hover:text-black"
        size={20}
      />
      <FiShoppingCart
        className="text-gray-700 cursor-pointer hover:text-black"
        size={20}
      />
    </div>
  );
}
