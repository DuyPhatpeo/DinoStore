import bannerBg from "@images/banner-bg.png";
import BoxIcon from "./BoxIcon/BoxIcon";

export default function Banner() {
  return (
    <section
      className="relative text-black bg-center bg-no-repeat bg-cover pt-24 pb-[22rem] sm:pt-28 sm:pb-[26rem] md:pt-32 md:pb-[30rem]"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="relative z-10 px-4 mx-auto max-w-7xl">
        <div className="flex justify-center">
          <div className="max-w-[90%] sm:max-w-xl text-center space-y-4 pt-12 sm:pt-0">
            <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl">
              Welcome to Dino Store
            </h2>
            <p className="text-sm text-gray-700">
              Make your celebrations even more special this year with something
              beautiful and timeless.
            </p>
            <button className="px-6 py-2 text-white transition duration-300 bg-black border border-black rounded hover:bg-transparent hover:text-black">
              Go to shop
            </button>
          </div>
        </div>
      </div>

      {/* BoxIcon được đẩy lên vừa phải, không tràn khỏi ảnh */}
      <div className="absolute bottom-0 left-1/2 z-20 w-full -translate-x-1/2 translate-y-1/2 sm:translate-y-2/3 md:translate-y-[70%]">
        <BoxIcon />
      </div>
    </section>
  );
}
