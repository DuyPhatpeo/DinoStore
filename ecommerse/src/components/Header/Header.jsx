import { useState, useEffect } from "react";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingCart,
  FiMenu,
} from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
        isScrolled ? "bg-white/90 shadow" : "bg-transparent border-transparent"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between px-6 mx-auto max-w-7xl">
        <Logo />

        {/* Toggle menu button for mobile */}
        <button
          className="text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiMenu />
        </button>

        {/* Menu + Icons */}
        <div
          className={`w-full md:flex md:items-center md:space-x-6 ${
            isOpen ? "block" : "hidden"
          } md:w-auto`}
        >
          <Menu />

          <div className="flex flex-col mt-4 space-y-2 md:flex-row md:items-center md:space-y-0 md:space-x-4 md:mt-0">
            <button className="flex items-center space-x-1 font-sans text-base">
              <FiSearch />
              <span>Search</span>
            </button>
            <button className="flex items-center space-x-1 font-sans text-base">
              <FiUser />
              <span>Sign In</span>
            </button>
            <button className="flex items-center font-sans text-base">
              <FiHeart />
            </button>
            <button className="flex items-center font-sans text-base">
              <FiShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
