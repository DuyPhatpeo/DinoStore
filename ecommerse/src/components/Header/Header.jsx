import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import BoxIcon from "./BoxIcon/BoxIcon";
import Menu from "./Menu/Menu";
import Logo from "./Logo/Logo";
import { socialIcons, menuItems, actionItems, actionIcons } from "./contants";

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full px-4 py-4 bg-white border-b border-gray-200">
      {/* Wrapper */}
      <div className="grid items-center grid-cols-3 mx-auto max-w-7xl">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          {/* Hamburger mobile */}
          <button
            className="text-2xl text-gray-700 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <HiMenu />
          </button>

          {/* Social icons (hide on mobile) */}
          <div className="hidden gap-2 sm:flex">
            {socialIcons.map((icon, idx) => (
              <BoxIcon key={idx} {...icon} />
            ))}
          </div>

          {/* Menu items (desktop only) */}
          <div className="hidden lg:block">
            <Menu items={menuItems} />
          </div>
        </div>

        {/* CENTER */}
        <div className="flex justify-center">
          <Logo />
        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-end gap-4">
          {/* Action menu (desktop only) */}
          <div className="hidden lg:block">
            <Menu items={actionItems} />
          </div>

          {/* Icons (always visible) */}
          <div className="flex gap-2">
            {actionIcons.map((icon, idx) => (
              <BoxIcon key={idx} {...icon} />
            ))}
          </div>
        </div>
      </div>

      {/* SIDEBAR */}
      {sidebarOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-40"
            onClick={() => setSidebarOpen(false)}
          ></div>

          {/* Sidebar Panel */}
          <div className="fixed top-0 left-0 z-50 flex flex-col w-64 h-full gap-6 p-6 bg-white shadow-lg animate-slide-in">
            {/* Close */}
            <button
              className="self-end text-2xl text-gray-600"
              onClick={() => setSidebarOpen(false)}
            >
              <HiX />
            </button>

            {/* Logo */}
            <div className="mb-2">
              <Logo />
            </div>

            {/* Menu */}
            <div className="flex flex-col gap-4">
              <Menu items={menuItems} />
              <Menu items={actionItems} />
            </div>

            {/* Icons */}
            <div className="flex gap-3 pt-2 mt-auto border-t">
              {socialIcons.map((icon, idx) => (
                <BoxIcon key={idx} {...icon} />
              ))}
              {actionIcons.map((icon, idx) => (
                <BoxIcon key={idx + 99} {...icon} />
              ))}
            </div>
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
