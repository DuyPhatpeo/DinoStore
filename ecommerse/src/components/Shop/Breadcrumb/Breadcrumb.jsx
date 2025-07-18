import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

export default function Breadcrumb() {
  return (
    <nav className="flex items-center space-x-1 text-sm text-gray-500">
      <Link to="/" className="hover:underline text-gray-500">
        Home
      </Link>
      <FiChevronRight className="text-gray-400" />
      <span className="font-medium text-gray-900">Shop</span>
    </nav>
  );
}
