import React from "react";
import logo from "@images/Logo-retina.webp"; // hoặc đường dẫn phù hợp

function Logo() {
  return (
    <div className="flex justify-center">
      <img src={logo} alt="Logo" className="object-contain h-12" />
    </div>
  );
}

export default Logo;
