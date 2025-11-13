import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import brand1 from "@images/brand-01-min.webp";
import brand2 from "@images/brand-02-min.webp";
import brand3 from "@images/brand-03-min.webp";
import brand4 from "@images/brand-04-min.webp";
import brand5 from "@images/brand-05-min.webp";

const logos = [brand1, brand2, brand3, brand4, brand5];
const VISIBLE = 5;

export default function LogoStrip() {
  const [start, setStart] = useState(0);

  const next = () => {
    setStart((prev) => (prev + 1) % logos.length);
  };

  const prev = () => {
    setStart((prev) => (prev - 1 + logos.length) % logos.length);
  };

  const getVisible = () => {
    const extended = [...logos, ...logos];
    return extended.slice(start, start + VISIBLE);
  };

  return (
    <div className="w-full bg-white py-6 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-screen-xl mx-auto flex items-center">
        {/* Nút trái */}
        <button
          onClick={prev}
          className="hidden md:flex mr-4 p-2 hover:bg-gray-100 rounded-full"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Logo Carousel dạng lưới */}
        <div className="flex-1 overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out">
            {getVisible().map((logo, i) => (
              <div
                key={i}
                className="w-1/5 px-2 flex justify-center items-center"
              >
                <img
                  src={logo}
                  alt={`logo-${i}`}
                  className="
                    h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16
                    w-auto object-contain
                    grayscale opacity-80 hover:opacity-100
                    transition duration-300
                  "
                />
              </div>
            ))}
          </div>
        </div>

        {/* Nút phải */}
        <button
          onClick={next}
          className="hidden md:flex ml-4 p-2 hover:bg-gray-100 rounded-full"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
