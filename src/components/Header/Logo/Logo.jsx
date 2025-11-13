import { Link } from "react-router-dom";
import logo from "@images/logo-dino-store.png";

export default function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center space-x-2 hover:opacity-80 transition"
    >
      <img
        src={logo}
        alt="Dino Store Logo"
        className="object-contain w-10 h-10"
      />
      <span className="hidden text-2xl font-semibold text-gray-800 sm:inline">
        Dino Store
      </span>
    </Link>
  );
}
