import bannerBg from "@images/banner-bg.png";
import BoxIcon from "./BoxIcon/BoxIcon";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  const navigate = useNavigate();

  return (
    <section
      className="relative text-black bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      {/* Lớp phủ (overlay) giúp dễ đọc chữ trên nền sáng */}
      <div className="absolute inset-0 z-0 bg-white/70 sm:bg-transparent" />

      {/* Nội dung chính */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mx-auto max-w-7xl min-h-[70vh] sm:min-h-[85vh] pt-20 sm:pt-32 pb-16">
        <div className="max-w-[90%] sm:max-w-xl space-y-4 sm:space-y-6">
          <h1 className="font-mono text-3xl leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Welcome to <br />
            <span className="inline-block mt-1">Dino Store</span>
          </h1>
          <p className="text-sm text-gray-700 sm:text-base md:text-lg">
            Make your celebrations even more special this year with something
            beautiful and timeless.
          </p>
          <button
            onClick={() => navigate("/shop")}
            className="px-6 sm:px-8 py-2.5 text-sm font-medium text-white transition duration-300 bg-black border border-black rounded hover:bg-transparent hover:text-black"
          >
            Go to shop
          </button>
        </div>
      </div>

      {/* BoxIcon — repositioned for responsive layout */}
      <div className="relative z-20 w-full px-4 mt-8 sm:mt-10 md:mt-0 md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 md:translate-y-[50px]">
        <BoxIcon />
      </div>
    </section>
  );
}
