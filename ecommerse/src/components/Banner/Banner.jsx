import bannerBg from "@images/banner-bg.png";
import BoxIcon from "./BoxIcon/BoxIcon";

export default function Banner() {
  return (
    <section
      className="relative text-black bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      {/* Overlay giúp chữ dễ đọc hơn trên ảnh sáng */}
      <div className="absolute inset-0 z-0 bg-white/70 sm:bg-transparent" />

      {/* Nội dung chính */}
      <div className="relative z-10 px-4 mx-auto max-w-7xl flex flex-col items-center justify-center text-center pt-25 pb-20 sm:pt-32 sm:pb-16 min-h-0 sm:min-h-[85vh]">
        <div className="max-w-[90%] sm:max-w-xl space-y-3 sm:space-y-4">
          <h1 className="font-mono text-4xl tracking-tight sm:text-5xl md:text-6xl">
            Welcome to <br />
            <span>Dino Store</span>
          </h1>
          <p className="text-base text-gray-700 sm:text-lg">
            Make your celebrations even more special this year with something
            beautiful and timeless.
          </p>
          <button className="px-8 py-3 text-sm font-medium text-white transition duration-300 bg-black border border-black rounded hover:bg-transparent hover:text-black">
            Go to shop
          </button>
        </div>
      </div>

      {/* BoxIcon — gần banner hơn ở mobile */}
      <div className="relative z-20 w-full px-4 mt-6 sm:mt-10 md:mt-0 md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 md:translate-y-[50px]">
        <BoxIcon />
      </div>
    </section>
  );
}
