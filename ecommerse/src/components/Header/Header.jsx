import { useContext } from "react";
import { SideBarContext } from "@contexts/SideBarProvider";
import useHeaderBehavior from "@hooks/useHeaderBehavior";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import LoginForm from "@components/ContentSidebar/Login/Login";

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
  const {
    isOpen: isHeaderOpen,
    setIsOpen: setHeaderIsOpen,
    isScrolled,
    searchInputRef,
  } = useHeaderBehavior();

  const { openSidebar } = useContext(SideBarContext);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
        isScrolled ? "bg-white/90 shadow" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between w-full px-4 mx-auto max-w-7xl md:justify-start md:space-x-6">
        {/* Nút menu mobile */}
        <button
          className="z-10 text-2xl md:hidden"
          onClick={() => setHeaderIsOpen(true)}
        >
          <FiMenu />
        </button>

        {/* Logo */}
        <div className="flex justify-center flex-1 md:justify-start">
          <Logo />
        </div>

        {/* Giỏ hàng bên phải mobile */}
        <div className="z-10 text-xl md:hidden">
          <button
            title="Cart"
            onClick={() =>
              openSidebar(<div className="p-4">Your cart is empty.</div>)
            }
          >
            <FiShoppingCart />
          </button>
        </div>

        {/* Menu desktop */}
        <div className="hidden md:flex md:items-center md:ml-auto md:space-x-6">
          <Menu />
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1" title="Search">
              <FiSearch />
              <span>Search</span>
            </button>

            <button
              className="flex items-center space-x-1"
              title="Sign In"
              onClick={() => openSidebar(<LoginForm />)}
            >
              <FiUser />
              <span>Sign In</span>
            </button>

            <button
              title="Compare"
              onClick={() =>
                openSidebar(<div className="p-4">No products to compare.</div>)
              }
            >
              <MdAutorenew className="text-lg" />
            </button>

            <button
              title="Wishlist"
              onClick={() =>
                openSidebar(<div className="p-4">Your wishlist is empty.</div>)
              }
            >
              <FiHeart />
            </button>

            <button
              title="Cart"
              onClick={() =>
                openSidebar(<div className="p-4">Your cart is empty.</div>)
              }
            >
              <FiShoppingCart />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar Menu mobile */}
      {isHeaderOpen && (
        <div className="fixed inset-0 z-[60] bg-black bg-opacity-40 md:hidden">
          <div className="absolute top-0 left-0 w-[80vw] h-full p-6 bg-white shadow-lg flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Menu</h3>
              <button onClick={() => setHeaderIsOpen(false)}>
                <FiX className="text-xl" />
              </button>
            </div>

            {/* Tìm kiếm */}
            <div className="mb-6">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Danh sách menu mobile */}
            <div className="flex flex-col space-y-4">
              <Menu />
              <button
                className="flex items-center space-x-2"
                title="Sign In"
                onClick={() => openSidebar(<LoginForm />)}
              >
                <FiUser />
                <span>Sign In</span>
              </button>
              <button
                className="flex items-center space-x-2"
                title="Compare"
                onClick={() =>
                  openSidebar(
                    <div className="p-4">No products to compare.</div>
                  )
                }
              >
                <MdAutorenew />
                <span>Compare</span>
              </button>
              <button
                className="flex items-center space-x-2"
                title="Wishlist"
                onClick={() =>
                  openSidebar(
                    <div className="p-4">Your wishlist is empty.</div>
                  )
                }
              >
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
