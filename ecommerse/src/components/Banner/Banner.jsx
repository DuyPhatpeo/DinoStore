import React from "react";
import bgImage from "@images/Banner.webp"; // Thay bằng đường dẫn thật

function Banner() {
  return (
    <section
      className="w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Chào mừng đến Dino Store</h1>
        <p className="text-lg">Khám phá bộ sưu tập mới nhất của chúng tôi</p>
      </div>
    </section>
  );
}

export default Banner;
