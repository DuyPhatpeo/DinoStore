import { useState, useEffect, useRef } from "react";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingCart,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { MdAutorenew } from "react-icons/md";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Focus input khi mở menu mobile
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
        isScrolled ? "bg-white/90 shadow" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between w-full px-4 mx-auto max-w-7xl md:justify-start md:space-x-6">
        {/* Nút menu (mobile) */}
        <button
          className="z-10 text-2xl md:hidden"
          onClick={() => setIsOpen(true)}
        >
          <FiMenu />
        </button>

        {/* Logo chính giữa mobile */}
        <div className="flex justify-center flex-1 md:justify-start">
          <Logo />
        </div>

        {/* Giỏ hàng bên phải (mobile) */}
        <div className="z-10 text-xl md:hidden">
          <button title="Cart">
            <FiShoppingCart />
          </button>
        </div>

        {/* Menu + Icons (desktop) */}
        <div className="hidden md:flex md:items-center md:ml-auto md:space-x-6">
          <Menu />
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1" title="Search">
              <FiSearch />
              <span>Search</span>
            </button>
            <button className="flex items-center space-x-1" title="Sign In">
              <FiUser />
              <span>Sign In</span>
            </button>
            <button title="Compare">
              <MdAutorenew className="text-lg" />
            </button>
            <button title="Wishlist">
              <FiHeart />
            </button>
            <button title="Cart">
              <FiShoppingCart />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar Menu (Mobile) */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-black bg-opacity-40 md:hidden">
          <div className="absolute top-0 left-0 w-[80vw] h-full p-6 bg-white shadow-lg flex flex-col">
            {/* Input Search */}
            <div className="mb-4">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Đóng menu */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Menu</h3>
              <button onClick={() => setIsOpen(false)}>
                <FiX className="text-xl" />
              </button>
            </div>

            {/* Các mục menu */}
            <div className="flex flex-col space-y-4">
              <Menu />
              <button className="flex items-center space-x-2" title="Sign In">
                <FiUser />
                <span>Sign In</span>
              </button>
              <button className="flex items-center space-x-2" title="Compare">
                <MdAutorenew />
                <span>Compare</span>
              </button>
              <button className="flex items-center space-x-2" title="Wishlist">
                <FiHeart />
                <span>Wishlist</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
